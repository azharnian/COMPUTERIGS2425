package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Book represents a book in the database
type Book struct {
	ID     primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	Title  string             `json:"title" bson:"title"`
	Author string             `json:"author" bson:"author"`
	Pages  int                `json:"pages" bson:"pages"`
}

var db *mongo.Database

func init() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	// Connect to MongoDB
	clientOptions := options.Client().ApplyURI(os.Getenv("MONGODB_URI"))
	client, err := mongo.NewClient(clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}

	db = client.Database("testdb") // Replace "testdb" with your database name
}

func main() {
	r := gin.Default()

	r.GET("/books", getBooks)
	r.GET("/books/:id", getBook)
	r.POST("/books", createBook)
	r.PATCH("/books/:id", updateBook)
	r.DELETE("/books/:id", deleteBook)

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	r.Run(":" + port)
}

func getBooks(c *gin.Context) {
	var books []Book
	cursor, err := db.Collection("books").Find(context.Background(), bson.D{{}})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer cursor.Close(context.Background())

	for cursor.Next(context.Background()) {
		var book Book
		cursor.Decode(&book)
		books = append(books, book)
	}

	c.JSON(http.StatusOK, books)
}

func getBook(c *gin.Context) {
	idParam := c.Param("id")
	id, err := primitive.ObjectIDFromHex(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID format"})
		return
	}

	var book Book
	err = db.Collection("books").FindOne(context.Background(), bson.M{"_id": id}).Decode(&book)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Book not found"})
		return
	}

	c.JSON(http.StatusOK, book)
}

func createBook(c *gin.Context) {
	var book Book
	if err := c.ShouldBindJSON(&book); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result, err := db.Collection("books").InsertOne(context.Background(), book)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not create new book"})
		return
	}

	c.JSON(http.StatusCreated, result)
}

func updateBook(c *gin.Context) {
	idParam := c.Param("id")
	id, err := primitive.ObjectIDFromHex(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID format"})
		return
	}

	var updates bson.M
	if err := c.ShouldBindJSON(&updates); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result, err := db.Collection("books").UpdateOne(context.Background(), bson.M{"_id": id}, bson.M{"$set": updates})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not update book"})
		return
	}

	c.JSON(http.StatusOK, result)
}

func deleteBook(c *gin.Context) {
	idParam := c.Param("id")
	id, err := primitive.ObjectIDFromHex(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID format"})
		return
	}

	result, err := db.Collection("books").DeleteOne(context.Background(), bson.M{"_id": id})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not delete book"})
		return
	}

	c.JSON(http.StatusOK, result)
}
