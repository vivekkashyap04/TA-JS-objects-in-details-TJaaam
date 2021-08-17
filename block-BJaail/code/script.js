class BookList{
    constructor(root,list = []){
         this.bookList = list;
         this.root = root;
    }
    addBook(title,author,isbn){
        let book = new Book(title,author,isbn);
        this.bookList.push(book);
        this.createUi();
        return this.bookList.length;
    }
    handleDelete(id) {
        let index = this.booksList.findIndex(book => book.id === id);
        this.books.splice(index, 1);
        this.createUI();
        return this.books.length;
    }
    createUi(){
        this.root.innerHTML = "";
        this.bookList.forEach(book => {
            let table = book.createUi();
            table.querySelector("span").addEventListener("click", this.handleDelete.bind(this, book.id));
            this.root.append(table);
        })
    }
}

class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.read = false;
        this.id = `id- ${Date.now()}`;
    }

    createUi(){
        let row = document.createElement('tr');
        let col1 = document.createElement('td');
        col1.innerText = this.title;
        let col2 = document.createElement('td');
        col2.innerText = this.author;
        let col3 = document.createElement('td');
        col3.innerText = this.isbn;
        let span = document.createElement('span');
        span.innerText = "X";
        row.append(col1,col2,col3,span);
        return row;
    }
}

let BookLst =new BookList(document.querySelector('table'));
let from = document.querySelector('.form');
let titleElm = document.querySelector('.title');
let authorElm = document.querySelector('.author');
let isbnElm = document.querySelector('.isbn');

function handleSubmit(event){
    console.log("hello");
    event.preventDefault();
    const title= titleElm.value;
    const author = authorElm.value;
    const isbn = isbnElm.value;
    BookLst.addBook(title,author,isbn);

    titleElm.value = "";
    authorElm.value = "";
    isbnElm.value = "";
}
from.addEventListener("submit", handleSubmit);