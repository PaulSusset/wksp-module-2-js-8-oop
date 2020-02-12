// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2

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
let book2 = new Book('Art of the deal', 'bullshit', 'D. Trump', false);
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
}
let homeLibrary = new BookList();

homeLibrary.addBook(book1);
homeLibrary.addBook(book2);
homeLibrary.addBook(book3);
homeLibrary.addBook(book4);
homeLibrary.addBook(book5);

console.log(homeLibrary);

// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.
