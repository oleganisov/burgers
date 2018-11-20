///ex1
var div=document.createElement('div');
div.textContent="Этот элемент создан при помощи DOM API";
document.body.appendChild(div);

//ex2
var divInner=document.createElement('div');

divInner.classList.add('inner');
divInner.textContent="Этот элемент тоже создан при помощи DOM API";
div.appendChild(divInner);

//ex3
divInner.style.color='red';

//ex4
div.addEventListener('click',  function(){
console.log('Этот текст говорит о том, что я всё сделал правильно');
}
);
//ex5
var link=document.createElement('a');
link.href='https://loftschool.com';
link.textContent='https://loftschool.com';
document.body.appendChild(link);
link.addEventListener('click',function(e){
  e.preventDefault();
  console.log('Я кликнул на ссылку '+link.href);
});
//ex6
var input=document.createElement('input');
var btn=document.createElement('button');
btn.addEventListener('click',function(){
  console.log(input.value);
}
);
btn.textContent="BUTTON";
document.body.appendChild(input);
document.body.appendChild(btn);