var array = [15,20,25,30,35];
console.log(array);

 var fiend = array[2]; //fiend indevisul index
 console.log(fiend);

 array[2] = 100;//change array valeu
console.log(array);

var position = array.indexOf(30);//find position. if print "-1" the value couldn't find the array.
console.log(position);

var add = array.push(40);//add last value in array.
console.log(array);
console.log(array.length);//find array length.

array.pop()//delete last value in the array;
console.log(array);

array.unshift(50);//add value in first index in the array.
console.log(array);

array.shift();//delet first value in the array.
console.log(array);

var slice = array.slice(2 , 4);// slice array (form,to)
console.log(slice);//but slice don't change mean array.
// console.log(array);

//splice add/remove value in the array
//array.splice(position , remove , add.. ) ,,splice change the array.
array.splice(1 , 1,  111 ,2222, 333);
console.log(array);



