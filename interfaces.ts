interface Person
{
    name :String;
    lname : String;
    
}
function details(emp:Person)
{
console.log(emp.name,emp.lname);
}
let emp1: Person ={name:"ragni",lname:"prabhala"};
let emp2: Person ={name:"rani",lname:"abc"};
details(emp2);