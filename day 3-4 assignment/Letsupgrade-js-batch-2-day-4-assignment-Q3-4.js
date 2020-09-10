/* Q3.Create an array of objects with objects having the following properties
    (a){name(string),age(number),country(string),hobbies array(string[])}
    (b)Write a function to display all the objects on the console

   Q4.Following the 3rd question 
    (a)Write a function to display all the objects having age less than 30
    (b)Write a function to display all the objects having country India
*/

// Answer Of Question 3

let arr = [
    {
        name: "Ram",
        age: 34,
        country: "India",
        hobbies: ["cricket", "reading books", "dancing"]
    },
    {
        name: "Sita",
        age: 26,
        country: "India",
        hobbies: ["Singing", "cooking", "travelling"]
    },
    {
        name: "Lucifer",
        age: 50,
        country: "USA",
        hobbies: ["MOJO", "Solving case", "Partying"]
    },
    {
        name: "Amanediel",
        age: 65,
        country: "Canada",
        hobbies: ["Stopping Time", "playing", "Fighting practice"]
    },
    {
        name: "Rohandas",
        age: "26",
        country: "India",
        hobbies: ["cricket", "reading books", "dancing"]
    },

];

function display(arr) {
    console.log(arr);
}

display(arr);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// Answer Of Question 4

function displayAge(arr) {
    console.log("People having age less than 30");
    arr.forEach(element => {
        if (element.age < 30) {
            console.log(element)
        }
    });
}

function displayCountry(arr) {
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("People having country as INDIA");

    arr.forEach(element => {
        if (element.country == "India") {
            console.log(element)
        }
    });
}
displayAge(arr);
displayCountry(arr);