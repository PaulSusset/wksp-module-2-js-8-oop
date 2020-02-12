// Exercise 2.1
// ------------

// Create a Book class and then instantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

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
console.log(book1, book2, book3, book4, book5);