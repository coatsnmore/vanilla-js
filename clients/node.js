const fetch = require('node-fetch');
const port = 4000;
const host = `http://localhost:${port}`;

// fetch(`${host}/books`)
//     .then(promise => promise.json())
//     .then(json => console.log(`json: ${JSON.stringify(json)}`));

// return promise
async function getSomeBooks() {
    const p = await fetch(`${host}/books`);
    const json = await p.json();
    const { books } = json;

    //resolves promise with whatever is returned
    return books;
}

// getSomeBooks().then(books => console.log(`books: ${JSON.stringify(books)}`));

// fetch('http://localhost:4000/slow-books')
//     .then(promise => promise.json())
//     .then(json => console.log(`slow books: ${json}`));

const books = fetch(`${host}/books`)
const slowBooks = fetch(`${host}/slow-books`)
const authors = fetch(`${host}/authors`)

Promise.all([books, slowBooks, authors]).then(values  => {
    values[0].json().then(books => {
        console.log('\x1b[36m%s\x1b[0m', `books:`);
        console.log(books);
    });

    values[1].json().then(slowBooks => {
        console.log('\x1b[36m%s\x1b[0m', `slow books:`);
        console.log(slowBooks);
    });

    values[2].json().then(authors => {
        console.log('\x1b[36m%s\x1b[0m', `authors:`);
        console.log(authors);
    });
});