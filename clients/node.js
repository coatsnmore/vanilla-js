const fetch = require('node-fetch');
const port = 4000;
const host = `http://localhost:${port}`;

// fetch('http://localhost:4000/books')
//     .then(promise => promise.json())
//     .then(json => console.log(`json: ${json}`));

// fetch('http://localhost:4000/slow-books')
//     .then(promise => promise.json())
//     .then(json => console.log(`json: ${json}`));

const books = fetch(`${host}/books`)
const slowBooks = fetch(`${host}/slow-books`)
const authors = fetch(`${host}/authors`)

Promise.all([books, slowBooks, authors]).then(values  => {
    values[0].json().then(books => {
        console.log('\x1b[36m%s\x1b[0m', `books:`);
        console.log(books);
    });

    values[1].json().then(books => {
        console.log('\x1b[36m%s\x1b[0m', `slow books:`);
        console.log(books);
    });

    values[2].json().then(authors => {
        console.log('\x1b[36m%s\x1b[0m', `authors:`);
        console.log(authors);
    });
});