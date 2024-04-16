// 1. Copying arrays
const originalArray = [1,2,3,4,5];
const copyOfArray = [...originalArray];

console.log(originalArray);
console.log(copyOfArray);

// 2. Combining arrays

const combinedArrays = [...originalArray,...copyOfArray];
console.log(combinedArrays);

// 3. Create a new array with base of one and add new elements

const arrayWithNewElements = [...combinedArrays,7,8,9,10];
console.log(arrayWithNewElements);

// 4. Put args into a function

function adding (a,b,c){
    return a+b+c;
}

const arrayNumbers = [1,2,3];

let result = adding(...arrayNumbers);
console.log(result);

// OR passing severals args without knowing.

function addingTwo(...numbers){
    return numbers.reduce((total,current)=>total+current,0);
}

console.log("Multiple 7 arguments: ",addingTwo(1,4,7,5,1,34,98));