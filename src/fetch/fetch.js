console.log('fetching some books...');

async function getSomeBooks() {

    const response = await fetch("books.json");
    const json = await response.json();
    const { books } = json;

    return books;
};

getSomeBooks().then(books => console.log(`books: ${books}`));


