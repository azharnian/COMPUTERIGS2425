require('dotenv').config();
const express = require('express');
const axios = require('axios');


const app = express();
const PORT = 3000;
const OMDB_API_KEY = process.env.OMDB_API_KEY;

app.get("/", (req, res)=>{
    res.send("It works!")
})

app.get("/search", async (req, res)=>{
    const movie = req.query.movie;
    if (!movie)
        return res.status(400).json({ error : "movie query is required"});

    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=${OMDB_API_KEY}`);
        res.status(200).json(response.data);
    } catch (err)
    {
        res.status(404).json({ error : "movie is not found" });
    }
})

// curl -X "GET" "http://loclhost:3000/details?movieId=tt1517268"
app.get("/details", async (req, res)=>{
    const movieId = req.query.movieId;
    if (!movieId)
        return res.status(400).json({ error : "movie id query is required"});

    // diisi dan dilanjutkan untuk request detail movie

})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});