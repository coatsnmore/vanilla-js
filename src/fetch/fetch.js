console.log('fetching some books...');

async function getSomeBooks() {

    const response = await fetch("books.json");
    const json = await response.json();
    const { books } = json;

    return books;
}

function showBooks(books){
    const booksSection = document.querySelector('#books');
    booksSection.innerHTML = `books: ${books}`;
}

getSomeBooks().then(books => showBooks(books));


