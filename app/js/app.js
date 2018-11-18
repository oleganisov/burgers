let menu_btn = document.querySelector('#menu_btn'),
  ham_menu = document.querySelector('#ham_menu'),
  body = document.querySelector('body');

menu_btn.addEventListener('click', function (e) {
  e.preventDefault();
  menu_btn.classList.toggle('is-active');
  ham_menu.classList.toggle('is-active');
  body.classList.toggle('is-locked');
});
/////////////////////////
const slide_next=document.querySelector('#slide-next'),
      slide_prev=document.querySelector('#slide-prev'),
      slide_list=document.querySelector('#slide-list'),
      style=getComputedStyle(slide_list),
      step=parseInt(getComputedStyle(slide_list.firstElementChild).width,10),
      //list_width=parseInt(style.width,10),
      list_width=parseInt(slide_list.children.length,10)*step;

slide_next.addEventListener('click',function(e){
  e.preventDefault();
  let cur_right=parseInt(style.right,10);

  if (!cur_right) {
    cur_right=0;
  };
  if (cur_right<list_width-step){
    slide_list.style.right=cur_right+step+'px';
  } 
  else {
    slide_list.style.right=0+'px';
}
});

slide_prev.addEventListener('click',function(e){
  e.preventDefault();
  let cur_right=parseInt(style.right,10);

  if (!cur_right) {
    cur_right=0;
  };
  if (cur_right>0){
    slide_list.style.right=cur_right-step+'px';
  }
  else {
    slide_list.style.right=list_width-step+'px';
  };
});