import BooksService from "./books-service.js";

class Books extends HTMLElement {
    constructor() {
        super();
        this.booksService = new BooksService();
        this.attachShadow({ mode: 'open' });
    }

    update(books) {

        const style = `
            <style>
                section {
                    background-color: lightgrey;
                }
                .book {
                    margin: 2em;
                    outline-style: solid;
                    background-color: lightskyblue;
                    width: 50%;
                }
            </style>`;

        let html = `${style}<section><h1>Books:</h1><hr>`;

        books.forEach(book => {
            html += `<div class="book">
                    <h2>Title: ${book.title}</h2>
                    <h4>Author: ${book.author}</h4>
                    <h4>Comments:</h4>
                    <ul>`
            book.comments.forEach(comment => {
                html += `<li>${comment}</li>`
            });
            html += `</ul></div>`;
        });

        html += `</section>`;
        this.shadowRoot.innerHTML = html;
    };

    connectedCallback() {
        this.booksService.getBooks()
            .then(books => {
                console.log(`books: ${books}`);
                this.update(books);
            });
    }
}

customElements.define("nc-books", Books);