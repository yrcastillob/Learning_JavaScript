//1. Unidimentional array
let array1D = [1,2,3] // 3 columns and 1 row

//2. Bidimentional array
let array2D = [
    [1,2,3],
    [2,3,4],
    [5,6,7]
] // 3 columns 3 row

console.log(array2D[2][0]);


// 3. Commond operations:

/*
To run through the array we need to use two for loops if we need to acces to each invididual items.
First one to iterate in the rows and the second in the columns
*/

for (let i = 0; i < array2D.length; i++) { // Iterate in the rows.
    for (let j = 0; j < array2D[i].length; j++) { // Iterate in the columns.
        console.log(array2D[i][j]); // Here we perform the operations if we need to do so.
    }
}
