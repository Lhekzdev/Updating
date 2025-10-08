// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function percentage(p) {
//     return (
//          2 + p);
    
// }

// const newNumbers = numbers.map(percentage);

// easier map method
// const newNumbers = numbers.map(function (p)  {
//     return (
//          2 + p);
    
// });


// using for each:
// var newNumbers = []
// function percentage (p) {
//     newNumbers.push(
// p + 2
//     )
// }

// numbers.forEach(percentage )



// or simpler
// var newNumbers = []
// numbers.forEach (function (p) {
//     newNumbers.push(p + 2  )


// })

// console.log(newNumbers);


//Filter - Create a new array by keeping the items that return true.


// function isgreater(x) {
// return x > 10;

 

// }

var numbers = [3, 56, 2, 48, 5];
// const num = numbers.filter(isgreater);
var newNumbers = [];
 numbers.forEach(function(m){

  if (m > 10) {newNumbers.push(m)
  }
   })
 console.log(newNumbers)



// var newNumbers = []
// numbers.forEach (function (p) {
//     newNumbers.push(p + 2  )


// })

// console.log(newNumbers);




// const newNumbers = numbers.filter (function(num){
// return( num> 10

// )}
// )
// console.log(newNumbers)


//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
