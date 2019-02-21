console.log('fetching some books...');

// async functions return promises and resolve with whatever is returned
async function getSomeBooks() {

    // fetch returns promises
    const response = await fetch("http://localhost:4000/books");
    const json = await response.json();

    // destructuring to array from JSON
    const { books } = json;

    // resolves with books array
    return books;
}

function showBooks(books){
    const booksSection = document.querySelector('#books');
    booksSection.innerHTML = `books: ${JSON.stringify(books)}`;
}

getSomeBooks().then(books => showBooks(books));


