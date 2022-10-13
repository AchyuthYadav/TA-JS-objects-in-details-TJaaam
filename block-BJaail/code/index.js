let form = document.querySelector('form');
let bookListRoot = document.querySelector('.book__list')

const nameElement = form.elements.booktitle;
const authorElement = form.elements.bookauthor;
const isbnElement = form.elements.bookisbn;

function handleSubmit(event){
    event.preventDefault();
    const name = nameElement.value;
    const author = authorElement;
    const isbn = isbnElementvalue;
    console.log(name,author,img);
}

form.addEventListener('submit',handleSubmit);



class Book {
    constructor(name,author,img){
        this.name=name;
        this.author=author;
        this.isbn=this.isbn;
        this.isread= false;
    }
    toggleIsread(){
        this.isRead = !this.isRead;
    }
}

class BookList{
    constructor (books = []){
        this.books = books;
    }
    addBook(name, author, img){
    this.books.push(book);
    }
}

let library = new BookList();

createUI(){ 
    bookListRoot.innerHTML='';
    this.books.forEach(book=>{

    let li = document.createElement('li');
    let isbn =  document.createElement('isbn');
    isbn.src=book.name;
    let h1 =  document.createElement('h1');
    h1.innerText = book.name;
    let p = document.createElement('p');
    let button =  document.createElement('button');
    button.innerText = book.isread  ?"completed" : "mark as read!";
    button.addEventListener('click', () => { 
        book.toggleIsread
        this.createUI();
    })
    button.classList.add('form__button');
    li.append(isbn, h1, p, button);
    bookListRoot.append(li);

    });

}
