console.log('fetching some books...');

// async functions return promises and resolve with whatever is returned
async function getSomeBooks() {

    const host = 'http://localhost:4000';

    // fetch returns promises
    const response = await fetch(`${host}/books`);
    const json = await response.json();

    // destructuring to array from JSON
    const { books } = json;

    // resolves with books array
    return books;
}

function showSomeBooks(books){
    const booksSection = document.querySelector('#books');
    let html = '<h2>Books:</h2><ul>';
    
    books.forEach(book=> {
        html += `<li>${JSON.stringify(book)}</li>`;
    });

    html += '</ul>';
    booksSection.innerHTML = html;
}

getSomeBooks().then(books => showSomeBooks(books));


