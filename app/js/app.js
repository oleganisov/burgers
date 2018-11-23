/////////////////////////hamburger menu
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
/////////////////////////slider
const slide_next=document.querySelector('#slide-next'),
      slide_prev=document.querySelector('#slide-prev'),
      slide_list=document.querySelector('#slide-list'),
      style=getComputedStyle(slide_list),
      step=parseInt(getComputedStyle(slide_list.firstElementChild).width,10),
      list_width=parseInt(slide_list.children.length,10)*step;

function shift_right(a,b){
  slide_list.style.right=a+b+'px';
};
function current_right(){
  let cur_right=parseInt(style.right,10);
  if (!cur_right) {
    cur_right=0;
  };
  return cur_right;
};

slide_next.addEventListener('click',function(e){
  e.preventDefault();
  let cur_right=current_right();
  if (cur_right<list_width-step){
    shift_right(cur_right,step);
  } 
  else {
    shift_right(0,0);
}
});

slide_prev.addEventListener('click',function(e){
  e.preventDefault();
  let  cur_right=current_right();
  if (cur_right>0){
    shift_right(cur_right,-step);
  }
  else {
    shift_right(list_width,-step);
  };
});
/////////////////////////accordeon team & menu
const team_accord=document.querySelector("#team_accord"),
      menu_accord=document.querySelector("#menu_accord");

function closeAccord(list_item){
  for (let i=0;i<list_item.length;i++){
    list_item[i].classList.remove('is-active');
  };
};

function addLsnUl(elem_ul,item_class){
  elem_ul.addEventListener('click',function(e){
    const list_item=elem_ul.children;
    e.preventDefault();
    closeAccord(list_item);
    e.target.closest(item_class).classList.add('is-active');
  });
};

addLsnUl(team_accord,'.team__item');
addLsnUl(menu_accord,'.accordeon__item');
/////////////////////////reviews-modal
const review_btn=document.querySelector('#review_btn'),
      review_modal=document.querySelector('#review_modal');

function toggleNod(toggleElem){
  toggleElem.classList.toggle('is-active');
  body.classList.toggle('is-locked');
};

review_btn.addEventListener('click',function(e){
  e.preventDefault();
  toggleNod(review_modal);
});
  const review__btns=document.querySelectorAll('.reviews__btn'),
        tittle_mod=document.querySelector('#tittle_mod'),
        text_mod=document.querySelector('#text_mod');
        
    review__btns.forEach(rev_btn => {
    rev_btn.addEventListener('click',function(e){
    e.preventDefault();
    toggleNod(review_modal);
    text_mod.textContent=rev_btn.previousElementSibling.textContent;
    tittle_mod.textContent=rev_btn.previousElementSibling.previousElementSibling.textContent;
  });
});
/////////////////////////form data
const form_order=document.querySelector('#form_order'),
      btn_send=document.querySelector('#btn_send');

btn_send.addEventListener('click',function(e){
  e.preventDefault();
  const formData = new FormData(),
  
  xhr = new XMLHttpRequest();
  xhr.resposeType='json';
  xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
  
  formData.append('name',form_order.elements.firstname.value);
  formData.append('phone',form_order.elements.phone.value);
  formData.append('comment',form_order.elements.comment.value);
  formData.append('to','my@valid.em');
  
  xhr.send(formData);
  xhr.onload  = function() {
    let jsonResponse = JSON.parse(xhr.responseText);
    if (jsonResponse.status==0){  //status 0 fail send
      alert(jsonResponse.message);
    } else {
      alert(jsonResponse.message); //status 1 success send
    }
 };
});
