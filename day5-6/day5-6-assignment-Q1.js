/* Q1. Create an array containing five objects with properties{names,age,city,salary}
(A) Display all the objects in a table
(B)Create a search functionality for name and city
(C)Delete button to delete records
(D)Data is not permanent
*/


let learners = [
    {
        name: "Ram",
        age: 50,
        city: "Ayodhya",
        salary: 45000
    },
    {
        name: "Siddharth",
        age: 35,
        city: "Mumbai",
        salary: 56000
    },
    {
        name: "Rohandas",
        age: 20,
        city: "New Delhi",
        salary: 40000
    },
]

function display(superarray) {
    let tabledata = "";
    sno = 0
    superarray.forEach(function (learner, index) {
        let currentrow = `<tr>
        <td>${sno + 1}</td>
        <td>${learner.name}</td>
        <td>${learner.age}</td>
        <td>${learner.city}</td>
        <td>${learner.salary}</td>
        <td><button onclick="deletebyindex(${index})">Delete</button></td>
        </tr>`

        tabledata += currentrow;
        sno++;
    })
    document.getElementById('tdata').innerHTML = tabledata;
}
display(learners)

function addnerd(event) {
    event.preventDefault();
    let obj = {};
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let city = document.getElementById('city').value;
    let salary = document.getElementById('salary').value;

    obj.name = name;
    obj.age = Number(age);
    obj.city = city;
    obj.salary = Number(salary);

    learners.push(obj);
    display(learners);

    name = document.getElementById('name').value = "";
    age = document.getElementById('age').value = "";
    city = document.getElementById('city').value = "";
    salary = document.getElementById('salary').value = "";

}

function searchbyname() {

    let searchbyname = document.getElementById('sname').value;

    let newdata = learners.filter(function (learner) {
        return learner.name.toUpperCase().indexOf(searchbyname.toUpperCase()) != -1;
    });
    display(newdata)
}


function searchbycity() {

    let searchbycity = document.getElementById('scity').value;

    let newdata1 = learners.filter(function (learner) {
        return learner.city.toUpperCase().indexOf(searchbycity.toUpperCase()) != -1;
    });
    display(newdata1)
}


function deletebyindex(index) {
    learners.splice(index, 1)
    display(learners);
}












