/* VARIABLES DECLARATION */
let bookStack = [];
let book = '';
let continuationConfirmation;

/* FUNCTIONS */
function addBook ( bookName, stack ) {
    let amount = stack.push( bookName );
    return amount;
}

function removeBook ( stack ) {
    if ( stack.length > 0 ){
        stack.pop();
    }
}

function evaluatePrompt ( promptAnswer ) {
    switch( promptAnswer ) {
        case "1": 
            bookName = prompt("Enter your book Name: ")
            let bookAmount = addBook ( bookName, bookStack )
            continuationConfirmation = prompt(`
Books Amount: ${bookAmount}
Books on Stack: ${bookStack}

What would you like to do?
Write 1 to Enter a New Book.
Write 2 to delete last book.
Write 3 to Exit the program.
`);
            break;
        case "2":
            removeBook ( bookStack )
            continuationConfirmation = prompt(`
Books Amount: ${bookStack.length}
Books on Stack: ${bookStack}

What would you like to do?
Write 1 to Enter a New Book.
Write 2 to delete last book.
Write 3 to Exit the program.
`);
            break;
        case "3":
            continuationConfirmation = "3";
            break;
        default:
            continuationConfirmation = prompt(`
          
            ENTER A VALID OPTION.

            What would you like to do?
            Write 1 to Enter a New Book.
            Write 2 to delete last book.
            Write 3 to Exit the program.
            `);
            break;
    }
}

/* PROGRAM EXECUTION */

continuationConfirmation = prompt(`
Books Amount: ${bookStack.length}
Books on Stack: ${bookStack}

What would you like to do?
Write 1 to Enter a New Book.
Write 2 to delete last book.
Write 3 to Exit the program.
`);

while ( continuationConfirmation != "3" ) {
    evaluatePrompt ( continuationConfirmation )
}