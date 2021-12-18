// alert('Bem-Vindos');
var x= false;
console.log(typeof(x));
// Vetores
var array= [10,20,30,40,50,60];
console.log(array[0]);
array.push(7);
console.log(array);
array.unshift(8);
console.log(array);
array.forEach(function(item,index){console.log(item,index)})
/*array.pop();
console.log(array);
/array.shift();
console.log(array);
console.log(array.indexOf(3));
array.splice(0 , 3);
console.log(array);
array.slice(0 , 2);*/
console.log(array);
//*****************************************************************
for (var i = 0; i < array.length; i++) {
		console.log(array[i]);
}
console.log('*****************************************************************')
for (i in array) {
		console.log(i);
}
console.log('*****************************************************************')
for (i of array) {
		console.log(i);
}
