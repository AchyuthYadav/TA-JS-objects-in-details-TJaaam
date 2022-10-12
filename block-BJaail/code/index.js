let form = document.querySelector('form');
let bookListRoot = form.elements.title;

const nameElement = form.elements.title;
const authorElement = form.elements.author;
const isbnElement = form.elements.isbn;

class Book {
    constructor(name,author,img){
        this.name=name;
        this.author=author;
        this.isbn=this.isbn;
        this.isread= false;
    }
}