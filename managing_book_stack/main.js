/*CREATE BASIC BOOK STACK TO ADD AND DELETE A BOOK*/

/******************************* VARIABLES *******************************/

/*BACK END VARIABLES*/
let messagesStack = [];

/*HTML DOM ELEMENTS*/

let messageBox = document.getElementById("messageBox")

/******************************* FUNCTIONS *******************************//
class Book{
    constructor( title, year, editorial, author ){
        this.title = title,
        this.year = year,
        this.editorial = editorial,
        this.author = author
    }

    getTitle ( ) {
        return this.title;
    }

    getYear ( ) {
        return this.year;
    }

    getEditorial ( ) {
        return this.editorial;
    }

    getAuthor ( ) {
        return this.author;
    }

    setTitle ( title ) {
        this.title = title;
    }

    setYear ( year ) {
        this.year = year;
    }

    setEditorial ( editorial ) {
        this.editorial = editorial;
    }

    setAuthor( author ) {
        this.author = author;
    }

}

// Manage Messages Function

function ManageMessages( message ) {
    messagesStack.push( message )

    messagesStack.forEach( messageOfStack => {
        const individualMessage = document.createElement('p');
        individualMessage.classList.add(messageOfStack.class);
        individualMessage.innerHTML = `{${messageOfStack.message}}`;
        messageBox.appendChild(individualMessage)
    });

    setTimeout( function() {
        messagesStack.pop();
        var lastMessage = messageBox.lastChild;
        messageBox.removeChild(lastMessage);
    },3000)
}

// Delete Books Function

function deleteBook ( bookStack, type ) {
    let deletedBook;
    switch ( type ){
        case 1:
            deletedBook = bookStack.shift();
            break;
        case 2:
            deletedBook = bookStack.pop();
            break;
    }
    ManageMessages({message: `Book ${deletedBook.title} was deleted.`, class: `errorMessage`});
}

function deleteByIndex ( index ) {
    let bookToDelete = bookStack.slice( index, 1 );
    ManageMessages({message: `Book ${bookToDelete.title} was deleted.`, class: `errorMessage`});
}

// Add Books Function

function addBookAtEnd ( title, year, editorial, author, bookStack, type ) {
    let bookToAdd = new Book(title,year,editorial,author);

    const isRepeatedTitle = bookStack.some(obj => obj.title === title);

    if ( isRepeatedTitle ) {
        ManageMessages({message: `Book ${deletedBook.title} is already on list. Title cannot be repeated.`, class: `errorMessage`});
        return false;
    }

    switch ( type ) {
        case 1:
            bookStack.unshift(bookToAdd);
            break;
        case 2:
            bookStack.push(bookToAdd);
            break;
    }
    ManageMessages({message: `Book ${deletedBook.title} was added.`, class: `successMessage`});
}

// Update book list HMLT

function updateHtmlBookList ( bookStack, bookListHtml ) {
    for (let index = 0; index < bookStack.length; index++) {
        const element = array[index];
        
    }
}



