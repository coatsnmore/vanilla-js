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
                    background-color: lightskyblue;
                }
            </style>`;

        let html = `${style}<section><h1>Books:</h1>`;

        books.forEach(book => {
            html += `<div class="book">
                    <h2>Title: ${book.author}</h2>
                    <h4>Author: ${book.author}</h4>
                    <h4>Comments: ${JSON.stringify(book.comments)}</h4>
                </div>`;
        });

        html+`</section>`;
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