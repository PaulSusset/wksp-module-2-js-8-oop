// From 2.3
// Copy over all of the code from 2.3...
class Book {
    constructor(title, genre, author, read, startReadDate, endReadDate){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.startReadDate = this.read === false ? '' : startReadDate;
        this.endReadDate = this.read === false ? '' : endReadDate;
    }
}


let book1 = new Book('Narnia', 'fantasy', 'C.S. Lewis', true, '2000', '2002');
let book2 = new Book('Anything', 'bullshit', 'Anyone', false);
let book3 = new Book('Steppenwolfe','novel', 'Herman Hesse', true, '2015', '2016');
let book4 = new Book('Dungeon Master\'s Guide 5e', 'manual', 'WotC', false);
let book5 = new Book('The Obelisk Gate', 'fantasy', 'N.K. Jemisin', true, '2019', '2020');

class BookList {
    constructor(){
        this.booksRead = 0;
        this.booksUnread = 0;
        this.books = [];
        this.lastBook = null;
        this.currentlyReading = null;
        this.upNext = null;
    }
    addBook = (book) => {
        this.books.push(book);
        book.read === true ? this.booksRead++ : this.booksUnread++;
    }
    startReading = (book) =>{
        this.currentlyReading = book.title;
        book.startReadDate = new Date();
    }
    finishReading = (book) => {
        this.lastBook = this.currentlyReading;
        this.currentlyReading = null
        this.booksRead++;
        this.booksUnread--;
        book.endReadDate = new Date();
        book.read = true;
    }
}
let homeLibrary = new BookList();

homeLibrary.addBook(book1);
homeLibrary.addBook(book2);
homeLibrary.addBook(book3);
homeLibrary.addBook(book4);
homeLibrary.addBook(book5);
homeLibrary.startReading(homeLibrary.books[3]);
homeLibrary.finishReading(homeLibrary.books[3]);
homeLibrary.startReading(homeLibrary.books[1]);
console.log(homeLibrary);

// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.
