const menu_btn = document.querySelector('#menu_btn'),
  ham_menu = document.querySelector('#ham_menu'),
  ham_list = document.querySelector('#ham_list'),
  body = document.querySelector('body');
  function toggleMenu(){
    menu_btn.classList.toggle('is-active');
    ham_menu.classList.toggle('is-active');
    body.classList.toggle('is-locked');
  };

menu_btn.addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});
ham_list.addEventListener('click', function (e) {
  let el=e.target;
  if (el.tagName=='A'){
    toggleMenu();
  };
});


/////////////////////////
const slide_next=document.querySelector('#slide-next'),
      slide_prev=document.querySelector('#slide-prev'),
      slide_list=document.querySelector('#slide-list'),
      style=getComputedStyle(slide_list),
      step=parseInt(getComputedStyle(slide_list.firstElementChild).width,10),
      list_width=parseInt(slide_list.children.length,10)*step;

function shift_right(a,b){
  slide_list.style.right=a+b+'px';
  // return result=a+b+'px';
};
slide_next.addEventListener('click',function(e){
  e.preventDefault();
  let cur_right=parseInt(style.right,10);

  if (!cur_right) {
    cur_right=0;
  };
  if (cur_right<list_width-step){
    // slide_list.style.right=cur_right+step+'px';
    // slide_list.style.right=shift(cur_right,step);
    shift_right(cur_right,step);
  } 
  else {
    // slide_list.style.right=0+'px';
    // slide_list.style.right=shift(0,0);
    shift_right(0,0);
}
});

slide_prev.addEventListener('click',function(e){
  e.preventDefault();
  let cur_right=parseInt(style.right,10);

  if (!cur_right) {
    cur_right=0;
  };
  if (cur_right>0){
    // slide_list.style.right=cur_right-step+'px';
    // slide_list.style.right=shift(cur_right,-step);
    shift_right(cur_right,-step);
  }
  else {
    // slide_list.style.right=list_width-step+'px';
    // slide_list.style.right=shift(list_width,-step);
    shift_right(list_width,-step);
  };
});