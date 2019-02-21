const fetch = require('node-fetch');

// fetch('http://localhost:4000/books')
//     .then(promise => promise.json())
//     .then(json => console.log(`json: ${json}`));

// fetch('http://localhost:4000/slow-books')
//     .then(promise => promise.json())
//     .then(json => console.log(`json: ${json}`));

const books = fetch('http://localhost:4000/books')
const slowBooks = fetch('http://localhost:4000/slow-books')
const authors = fetch('http://localhost:4000/authors')

Promise.all([books, slowBooks, authors]).then(values  => {
    values[0].json().then(books => {
        console.log(`books: ${JSON.stringify(books)}`);
    });

    values[1].json().then(books => {
        console.log(`slow books: ${JSON.stringify(books)}`);
    });

    values[2].json().then(authors => {
        console.log(`authors: ${JSON.stringify(authors)}`);
    });
});