var student = {
    Id: 221002124 ,
    name: "abu rahat" ,
    phone: 1988228482,
} ;//object
console.log(student);

//object proparti accase in 3 type
var phone1 = student.phone; //type 1
console.log(phone1);

var id = student ["Id"];//type 2
console.log(id);

var name1 = "name"; //type 3
name1 = student[name1];
console.log(name1);

//update value in 3 type
student.phone = 11111111;
console.log(student);

student["Id"]= 2222;
console.log(student);

student["name"] ="shaum";
console.log(student);