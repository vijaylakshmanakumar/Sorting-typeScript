var number = [290, 28, 23, 123, 21, 3, 4];
var names = ['Hello', 'String', 'Welcome', 'To', 'All', 'I'];

var val = number.sort();
console.log(val);
var value = names.sort();
console.log(value);

let i: number;
let values: any = new Array();
for (i = 0; i <= 5; i++) {
  values[i] = new Array(prompt('Enter an integer: '));
}
console.log('Sorted values are...');
console.log(values.sort());
console.log('Reversed values are...');
console.log(values.reverse());
