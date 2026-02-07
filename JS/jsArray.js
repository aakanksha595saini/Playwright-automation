let marks =Array(6);
marks =new Array(1,2,3,4,5,6,7);
marks[4] =55;
console.log(marks);
console.log(marks.length);
marks.push(343434); //Add element in end
console.log(marks);
marks.unshift(768); //Add item in initial
console.log('Add in initial: ' +marks);
console.log(marks.indexOf(55));
marks.pop(); //Anyway it delete last item
marks.shift() //removes 1st elements

console.log('After pop '+marks);
marks.slice(0,1);
console.log('Sliced array:  '+marks);
console.log('check if 99 is present in array or not :   ' +marks.includes(99));
console.log(typeof(marks)) //array is a object type 
console.log('update array to string' +marks.toString());
let s =marks.toString(); //stored array value in another variable called s
console.log(s); // now its String type but still the marks have object type if wont affect the marks array
console.log(typeof(s))
const person = {firstName:"John", lastName:"Doe", age:46};
console.log(person.firstName);
const numbers =[175, 50, 25];

numbers.forEach(num => {
    console.log(num * num);
});
console.log((numbers instanceof Array)); //The instanceof operator returns true if an object is created by a given constructor:

const result = numbers.reduce(myFunc);

function myFunc(total, num) {
    console.log('value in total: '+total);
    console.log('value in num: '+ num);
    return total - num;
}

console.log(result)
console.log(numbers.filter(numbers=>numbers % 2 == 0));
let y = new String("John");//non  primitive object type string
let z = new String("John"); //non  primitive object type string
let x = "John"; //primitive data type 'string'
console.log(x == y) //true coz y(object) unwraps value to compare it with x value
console.log(y == z);  // false coz both are non primitive and For objects, JavaScript does not check the content (the text). 
 //Instead, it checks the memory address.When you use the new keyword, you create a brand-new instance in memory. for y,z
console.log(y === z); // false
let text = `Welcome ${y}`;

console.log(`Welcome ${y}`);//Welcome john
console.log( 'Welcome ${y}'); //Welcome ${y}
console.log(text);;//Welcome john
let st = "    Hello world!   "
console.log(st.trim());
console.log(st.trim().length);




