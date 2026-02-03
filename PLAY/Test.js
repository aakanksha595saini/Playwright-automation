
//Create an array called expenses that contains at least 5 different expense amounts.
// Calculate the total expenses by summing all the elements of the array.
// Find the highest and lowest individual expenses within the array.

//const arr =[1,1,1,1,1];
// const result = arr.reduce(myFunc);
// function myFunc(total, num) {
//     console.log('value in total: '+total);
//     // console.log('value in num: '+ num);
//     return total + num;
// }
//const result =arr.reduce((total, num_arr ) => total+num_arr,0);
// console.log(result);

/* 
Create an array named studentNames with the names of your students.
Add a new student name to the beginning of the array.
Remove the last student name from the array.
Alphabetize the student names within the array.*/
const studentNames = ['John','Sheena'];
studentNames.unshift('Aakanksha');
studentNames.pop();
// console.log(studentNames[0]);
studentNames.sort();
console.log(studentNames);

/*
You have an array called productPrices with various product prices.
Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.
Use the filter method to create a new array called affordableProducts containing only products priced below $50
Calculate the total cost of all items in the affordableProducts array using the reduce method */

const productPrices = [1,124,25,126,127];
const discountedPrices = productPrices.map(product);
function product(value)
{
return value % 10;

}
console.log("Discounted price "+discountedPrices);
const affordableProducts = productPrices.filter(below);
function below(value){
    return value< 50;
}
console.log("affordableProducts "+affordableProducts);

if(affordableProducts)
{
const total = affordableProducts.reduce(myFunc)
function myFunc(res, num) {
    return res + num;
}
console.log("Total :"+total);
}