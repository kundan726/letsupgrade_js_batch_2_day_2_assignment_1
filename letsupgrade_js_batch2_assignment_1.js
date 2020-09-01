// Q1.Program to search for a particular character in a string

let string = 'Hello My Name is Kundan Kumar';
// console.log(string.toLowerCase())
console.log(string.search('m')&&string.search('M'));



// Q2. Program to convert minutes to seconds

let minutes = 24;
let min = `We have to convert ${minutes} minute into second.`;
console.log(min);
let seconds = minutes*60;
let sec = `${minutes} minute will result into ${seconds} seconds`;
console.log(sec);


// Q3.Program to search for an element in a array of string

let arr = ['hello', 'ram ram', 'My name is ram', 'This is javascript tutorial'];
console.log(arr.indexOf('ram ram'));



// Q4.Program to display only elements containing 'a' in them from a array

let display = ['hello','digital','concepts', 'ram ram', 'My name is ram', 'This is javascript tutorial'];
for(let i=0;i<display.length;i++){
 if(display[i].match(/a/)){
     console.log(display[i])
 }
}



// Q5.Print an array in reverse order
let rev = [45,995,86,24,65,1,2,3,4,5,6,7,8,9];
console.log(rev.reverse());