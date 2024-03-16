/*EXCERCISE TO PRACTICE WITH ARRAYS */

/*
Transaction analysis
Imagine you have a list of financial transactions and you want to perform various data processing operations.
Use the following instructions as a guide to complete the exercise:
1. Calculate Total Balance: - Use the reduce method to calculate and display the total balance of all
transactions.
2. Find the Largest Transaction (Income or Expense): - Utilize the reduce method to find the transaction
with the largest amount (either income or expense) and display it in the console.
3. Filter Purchase Transactions: - Use the filter method to obtain and display in the console only the
purchase transactions (with negative amounts).
4. Find a Transaction by Description: - Use the find method to search and display in the console a specific
transaction by its description.
5. Find the Index of a Transaction by Amount: - Employ the findIndex method to find and display in the
console the index of a specific transaction by its amount.
6. Update Transaction Descriptions: - Use the forEach method to update the descriptions of transactions.
Add the prefix "Expense: " to transactions with negative amounts and "Income: " to transactions with
positive amounts. Display the updated transactions in the console.
*/


/*ARRAY */

let transactions = [
    { id: 1, desc: "May wage", amount: 4500000 },
    { id: 34, desc: "Rent", amount: -900000 },
    { id: 67, desc: "Month Food", amount: -200000 },
    { id: 93, desc: "David payment", amount: 100000 },
]

/*Calculate the total balance*/

let totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

document.write(`<p>Total balance: ${ totalBalance }</p>`);

/*Highest Transaction*/

let highestTransaction = transactions.reduce((currentTransaction, newTransaction) => {
    return Math.abs(newTransaction.amount) > Math.abs(currentTransaction.amount) ? newTransaction : currentTransaction;
}, transactions[0]);
document.write(`<p>------------------</p>`)
document.write(`<p>Highest transaction: id ${ highestTransaction.id }, description ${ highestTransaction.desc }, ${ highestTransaction.amount}.</p>`);

/*Filter purchase description*/

document.write(`<p>------------------</p>`)
let purchaseTransaction = transactions.filter((transaction) => transaction.amount < 0);
document.write(`<p>Purchase transactions:</p>`);
purchaseTransaction.forEach(purchase=>{
    document.write(`<p>Id: ${ purchase.id }, Description: ${ purchase.desc }, Amount: ${ purchase.amount }</p>`);
})

/*Filter Income description*/

document.write(`<p>------------------</p>`)
let IncomeTransaction = transactions.filter((transaction) => transaction.amount > 0);
document.write(`<p>Income transactions:</p>`);
IncomeTransaction.forEach(purchase=>{
    document.write(`<p>Id: ${ purchase.id }, Description: ${ purchase.desc }, Amount: ${ purchase.amount }</p>`);
})

/*Find transaction by description*/

document.write(`<p>------------------</p>`)
let transactionByDescription = transactions.find((transaction) => transaction.desc === "May wage");
document.write(`Transaction by description "May wage": AMOUNT ${transactionByDescription.amount}, ID: ${transactionByDescription.id} `)


/*Transaction by amount*/

document.write(`<p>------------------</p>`)
let transactionByAmount = transactions.findIndex((transaction) => transaction.amount === -200000)
if ( transactionByAmount != -1 ){
    document.write(`<p>ID: ${transactions[transactionByAmount].id} DESCRIPTION: ${transactions[transactionByAmount].desc} AMOUNT: ${transactions[transactionByAmount].amount}</p>`)
} else {
    document.write(`<p>Not found.</p>`);
}

/*UPDATE TRANSACTIONS DESCRIPTION*/

transactions.forEach((transaction)=>{
    if ( transaction.amount > 0 ){ transaction.desc = `Income: ${transaction.desc }` }
    else{ transaction.desc = `Expense: ${transaction.desc }` };
})
document.write(`<p>------------------</p>`)
document.write(`<p>Final updated transactions</p>`)
transactions.forEach(purchase=>{
    document.write(`<p>Id: ${ purchase.id }, Description: ${ purchase.desc }, Amount: ${ purchase.amount }</p>`);
})

