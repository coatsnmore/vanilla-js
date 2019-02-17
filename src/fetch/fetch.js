console.log('fetching some books...');

// async functions return promises and resolve with whatever is returned
async function getSomeBooks() {

    // fetch returns promises
    const response = await fetch("books.json");
    const json = await response.json();

    // destructuring to array from JSON
    const { books } = json;

    // resolves with books array
    return books;
}

function showBooks(books){
    const booksSection = document.querySelector('#books');
    booksSection.innerHTML = `books: ${books}`;
}

getSomeBooks().then(books => showBooks(books));


