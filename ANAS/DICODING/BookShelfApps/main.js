document.addEventListener("DOMContentLoaded", () => {

    let books;
    if (!localStorage.getItem("books"))
        localStorage.setItem("books", JSON.stringify([]));
    books = JSON.parse(localStorage.getItem("books"));

    const isDuplicateBook = title => {
        return books.some(book => book.title === title.toLowerCase());
    }
    
    const createArticleBook = book => {
        const articleEl = document.createElement("article");
        articleEl.className = "book_item";
        articleEl.setAttribute("data-bookid", book.id)
        articleEl.setAttribute("data-testid", "bookItem");
    
        articleEl.innerHTML = `
            <h3 data-testid="bookItemTitle">Title : ${book.title}</h3>
            <p data-testid="bookItemAuthor">Author : ${book.author}</p>
            <p data-testid="bookItemYear">Year : ${book.year}</p>
            <div class="action">
                <button class="red" data-testid="bookItemDeleteButton">Hapus buku</button>
                <button class="blue">Edit buku</button>
                <button class="${book.isComplete ? "yellow" : "green"}" data-testid="bookItemIsCompleteButton">
                    ${book.isComplete ? "Belum selesai dibaca" : "Selesai dibaca"}
                </button>
            </div>
        `;
    
        const [deleteBtnEl, updateBtnEl, completeBtnEl] = articleEl.querySelectorAll("button");
    
        deleteBtnEl.addEventListener("click", () => deleteBook(book.id));
        updateBtnEl.addEventListener("click", () => updateInfoBook(book.id));
        completeBtnEl.addEventListener("click", () => setToCompleteBook(book.id));
    
        return articleEl;
    };
    

    const updateBookshelf = listOfBook => {
        const incompleteBookList = document.getElementById("incompleteBookList");
        const completeBookList = document.getElementById("completeBookList");

        incompleteBookList.innerHTML = "";
        completeBookList.innerHTML = "";

        listOfBook.forEach(book => {
            book.isComplete ?
                completeBookList.append(createArticleBook(book))
            :
                incompleteBookList.append(createArticleBook(book));
        });
    }

    const deleteBook = id => {
        const index = books.findIndex(book => book.id === id);
        if (index !== -1) {
            let userConfirmation = confirm(`Are you sure to delete book : ${books[index].title} (id : ${id})`);
            if (userConfirmation){
                books.splice(index, 1);
                localStorage.setItem("books", JSON.stringify(books));
                updateBookshelf(books);
            }
            
        }
    }

    const setToCompleteBook = id => {
        const index = books.findIndex(book => book.id === id);
        if (index !== -1) {
            books[index].isComplete = !books[index].isComplete;
            localStorage.setItem("books", JSON.stringify(books));
            updateBookshelf(books);
        }
    }

    const updateInfoBook = id => {
        const index = books.findIndex(book => book.id === id);
        if (index !== -1) {
            const newTitle = prompt(`Masukkan judul baru buku (Judul lama ${books[index].title}) `);
            const newAuthor = prompt(`Masukkan nama pengarang baru (Pengarang lama ${books[index].author})`);
            const newYear = parseInt(prompt(`Masukkan tahun terbit baru (Tahun terbit lama ${books[index].author})`));

            const emptyNewTitle = newTitle.length === 0;
            const emptyNewAuthor = newAuthor.length === 0;
            const invalidNewYear = typeof newYear !== "number";

            if (emptyNewTitle || emptyNewAuthor || invalidNewYear){
                alert("Pastikan semua informasi buku terisi benar!");
                return;
            }
            
            books[index].title = newTitle;
            books[index].author = newAuthor;
            books[index].year = parseInt(newYear);
            localStorage.setItem("books", JSON.stringify(books));
            updateBookshelf(books);
            alert("Update informasi buku selesai.")
        }
    }

    const resetForm = () => {
        document.getElementById("bookFormTitle").value = "";
        document.getElementById("bookFormAuthor").value = "";
        document.getElementById("bookFormYear").value = "";
        document.getElementById("bookFormIsComplete").checked = false;
    }

    const handleSearch = e => {
        e.preventDefault();

        const query = document.getElementById("searchBookTitle").value.toLowerCase().trim();

        const searchResults = books.filter(book =>  (
                book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query) || book.year.toString().includes(query)
          ));

        if (searchResults.lenght !== 0)
            updateBookshelf(searchResults);
    }

    document.getElementById("bookForm").addEventListener("submit", e => {
        e.preventDefault();
        
        const bookTitle = document.getElementById("bookFormTitle").value;
        const bookAuthor = document.getElementById("bookFormAuthor").value;
        const bookYear = document.getElementById("bookFormYear").value;
        const bookIsComplete = document.getElementById("bookFormIsComplete").checked;

        // if (isDuplicateBook(bookTitle))
        //     alert(`Buku dengan judul ${bookTitle} sudah ada dalam daftar.`);
        // else {
            
        // }
        const book = {
            id : new Date().getTime(),
            title: bookTitle.toLowerCase(),
            author: bookAuthor.toLowerCase(),
            year: parseInt(bookYear),
            isComplete: bookIsComplete
        };

        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));

        updateBookshelf(books);
        // resetForm();
    });

    const searchBook = document.getElementById("searchBook");
    searchBook.addEventListener("submit", handleSearch);
    searchBook.addEventListener("keyup", e => {
        handleSearch(e);
    })

    updateBookshelf(books);
});