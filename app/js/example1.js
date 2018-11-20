///ex1
var array=['привет','loftschool'];

array.push('я изучаю');
array.push('java script');

console.log(array.length);

for (var i=0;i<array.length;i++){
  console.log(array[i]);
}

///ex2
var array2=[6,123,34,780,34,432,99,30,701,333];

for (var i=0;i<array2.length;i++){
  if (array2[i]>100) {
    console.log(array2[i]);
  }
}
///ex3
var person={name:'Oleg',lastName:'Anisov',age:38};

console.log(person.name);
console.log(person.lastName);
console.log(person.age);
person.gender='male';
console.log(person.gender);
///ex4
function hello(human){
  return 'Привет, меня зовут '+human.name+' '+human.lastName+
  ' и мне '+human.age+' лет!';
}
var person={name:'Oleg',lastName:'Anisov',age:38};

var result=hello(person);

console.log(result);
