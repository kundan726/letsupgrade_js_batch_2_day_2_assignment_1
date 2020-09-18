/* Q2. Create a blank array and later on create a add bus functionality bus object contains{name,source,destination,number,passenger capacity}
    (A).A form to add new bus
    (B).Display data in table format
    (C).Search by source and destinaton
    (D).Data should be stored permanently in localstorage 

*/


window.onload = function(){
    let buses=[];
    if(localStorage.getItem("buses")==null){
        let stringbuses=JSON.stringify(buses);
        localStorage.setItem("buses",stringbuses)
    }
}

function display(bus_data=undefined){
    let resbuses;
    document.getElementById("tbody").innerHTML="";
    if(bus_data==undefined){
        resbuses=JSON.parse(localStorage.getItem("buses"))
    }
    else{
        resbuses=bus_data
    }

    resbuses.forEach((ele,i)=>{
        document.getElementById('tbody').innerHTML+=`<tr>
        <td>${ele.name}</td>
        <td>${ele.source}</td>
        <td>${ele.destination}</td>
        <td>${ele.number}</td>
        <td>${ele.capacity}</td>
        </tr>`
    });
}

display();


function addbus(event){
    event.preventDefault();
    let bus={};
    let nameid=document.getElementById('name').value;
    let sourceid=document.getElementById('source').value;
    let destid=document.getElementById('dest').value;
    let numid=document.getElementById('num').value;
    let capid=document.getElementById('cap').value;

    bus.name=nameid;
    bus.source=sourceid;
    bus.destination=destid;
    bus.number=numid;
    bus.capacity=capid;

    let arrbus= JSON.parse(localStorage.getItem("buses"));
    arrbus.push(bus);
    localStorage.setItem("buses",JSON.stringify(arrbus));


    let arrbus1=JSON.parse(localStorage.getItem("buses"));

    display(arrbus1)

    document.getElementById('name').value="";
    document.getElementById('source').value="";
    document.getElementById('dest').value="";
    document.getElementById('num').value="";
    document.getElementById('cap').value="";

}

function searchbysource(){
    let search_value=document.getElementById('searchsource').value;
    let arrbus=JSON.parse(localStorage.getItem("buses"));
    let result=arrbus.filter((ele,i)=>{
        return ele.source.toLowerCase().indexOf(search_value.toLowerCase())!=-1;
    })

    display(result)
}

function searchbydestination(){
    let search_value=document.getElementById('searchbydest').value;
    let arrbus=JSON.parse(localStorage.getItem("buses"));
    let result=arrbus.filter((ele,i)=>{
        return ele.destination.toLowerCase().indexOf(search_value.toLowerCase())!=-1;
    })

    display(result)
}