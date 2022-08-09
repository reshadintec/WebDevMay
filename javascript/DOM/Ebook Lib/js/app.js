/// Book Class : 
class Book {
    constructor(bName, author, category, date, price) {
        this.bName = bName;
        this.author = author;
        this.category = category;
        this.date = date;
        this.price = price;
    }
}

//UI Class:
class UI {
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'Book one',
                author: 'John Doe',
                category: 'Fantasy',
                date:'22-10-2022',
                price:24
            },
            {
                title: 'Book two',
                author: 'Jane Doe',
                category: 'Romance',
                date:'22-10-2022',
                price:22
            }

        ];


        const books = StoredBooks;
        books.forEach((book)=> UI.addBookToList(book));

    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML=`
        <td>"1"</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.category}</td>
        <td>${book.date}</td>
        <td>${book.price}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    } 
 
}

//Store Class: Handles local storage

//Event to display Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Event to add book

//Event to remove book


