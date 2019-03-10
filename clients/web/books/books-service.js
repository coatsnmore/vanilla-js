export default class BooksService {
    async getBooks() {
        const host = 'http://localhost:3000';
        const response = await fetch('books/books.json');
        // const response = await fetch(`${host}/books`);
        const json = await response.json();
        const { books }  = json; 
        return books;
    }
}