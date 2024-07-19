// Objects
// Activity 1: Object creation and accessing properties
// Task 1: Create an object representing a book with properties like title,author,and year,and log the object to the console.
const Book = {
    title: "Book1",
    author: "Author1",
    year: 2019
}
console.log(`Task 1: log the book object console: ${JSON.stringify(Book)}`)
// Task 2: Access and log the title and author properties of the book object.
// 2 ways to access the properties of object 1) by dot notation 2) by array
console.log(`Task 2: access the properties of object :`, Book.title, Book.author)
// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author and log the result of calling this method.
console.log(`Task 3: book object that returns a string with the book's title and author :`, JSON.stringify(Book.title), ',', JSON.stringify(Book.author))
// Task 4: Add a method to the book object that takes a parameter(year) and updates the book's year property,then log the updated object.
Book.year = 2020;
console.log(`Task 4: book object that takes a parameter`, JSON.stringify(Book))
// Activity 3: Nested Object
// Task 5: Create a nested object representing a library with properties like name,books(an array of book objects),and log the library object to the console.
const library = {
    name: 'library1',
    books: [Book],
}
console.log(`Task 5: Create a nested object representing a library with properties :`, JSON.stringify(library))
// Task 6: Access and log the name of the library and the title of all the books in the library.
console.log(`Task 6: Access and log the name of the library`,
    JSON.stringify(library.name), ",",
    library.books.forEach((book, index) => {
        console.log(`Book ${index + 1} Title:`, book.title);
    })
)
// Activity 4: The This keyword
// Task 7 : Add a method to the book object that uses the this keyword to return a string with the book title and year and log the result of calling this method.
Book.getTitleAndYear = function () {
    console.log(`${this.title}, ${this.year}`);
};
console.log(`Task 7: book object that uses the this keyword to return a string with the book's title and year:`, Book.getTitleAndYear());

// Activity 5: Object iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (const i in Book) {
    console.log("Iterate for...in :", i);
}
// Task 9: Use Object.keys and Object.values methods to log all keys and values of the book object.
console.log(Object.keys(Book))
console.log(Object.values(Book))