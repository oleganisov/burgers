/////////////////////////hamburger menu
const menu_btn = document.querySelector('#menu_btn'),
  ham_menu = document.querySelector('#ham_menu'),
  ham_list = document.querySelector('#ham_list'),
  body = document.querySelector('body');
//функция добавления/удаления активного класса меню и блокировка body
  function toggleMenu(){
    menu_btn.classList.toggle('is-active');
    ham_menu.classList.toggle('is-active');
    body.classList.toggle('is-locked');
  };
//обработчик клика на кнопке меню
menu_btn.addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});
//обработчик клика на ссылках меню
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

// устанавливает right; a - текущее значение right, b - шаг сдвига 
function shift_right(a,b){
  slide_list.style.right=a+b+'px';
};
// получает текущее свойство right
function current_right(){
  let cur_right=parseInt(style.right,10);
  if (!cur_right) {
    cur_right=0;
  };
  return cur_right;
};
//обработчик клика по кнопке next
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
//обработчик клика по кнопке prev
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
// вычисление высоты
function calcHeight(item){
  let pic_h=$(item).find('.team__pic').height();
  let desc_h=$(item).find('.team__desc').height();
  return pic_h+desc_h;
};
// вычисление ширины
function calcWidth(item){
  let win_w=$(window).width();
  let link_w=$(item).find('a').width();
  let calc_w=win_w-link_w*3;
  return calc_w > 550 ? 550 : calc_w;
};
// вешаем обработчик на ul
function addLsnUl(elem_ul,item_class,expand_class){
  elem_ul.addEventListener('click',function(e){
    e.preventDefault();
    const list_item=elem_ul.querySelectorAll(item_class);

    let activeItem=document.querySelector(item_class+'.is-active');
    let curItem=e.target.closest(item_class);
    list_item.forEach(item=>{
      if (item==activeItem){
        item.classList.remove('is-active');
        if (expand_class=='.accordeon__expand'){
          $(item).find(expand_class).width('0px');
        }else{
          $(item).find(expand_class).height('0px');
        };
      };
      if (item==curItem&&item!==activeItem){
        item.classList.add('is-active');
        if (expand_class=='.accordeon__expand'){
          $(item).find(expand_class).width(calcWidth(item));
        }
        else{
          $(item).find(expand_class).height(calcHeight(item));
        };
    };
  });
  });
};

addLsnUl(team_accord,'.team__item','.team__expand');
addLsnUl(menu_accord,'.accordeon__item','.accordeon__expand');

// модуль overlay
const modal=document.querySelector('#modal');
const modal_inner=document.querySelector('#modal_inner');
const template = document.querySelector("#overlayTemplate").innerHTML;
const review_btns=document.querySelectorAll('.reviews__btn');
const overlay = createOverlay(template);
// установка прослушивателя кликов на кнопках отзывов
review_btns.forEach(rev_btn => {
  rev_btn.addEventListener('click',function(e){
  e.preventDefault();
  let rev_text=rev_btn.previousElementSibling.textContent;
  let rev_tittle=rev_btn.previousElementSibling.previousElementSibling.textContent;
  overlay.open();
  overlay.setContent(rev_tittle,rev_text);
});
});
//функция создания оверлея
function createOverlay(template) {
  let fragment = document.createElement('div');

  fragment.innerHTML = template;

  const overlayElement = fragment.querySelector(".overlay");
  const contentTittle = fragment.querySelector("#tittle_mod");
  const contentText = fragment.querySelector("#text_mod");
  const closeBtn = fragment.querySelector("#close_btn");
  
  fragment = null;
// установка прослушивателя кликов на кнопке закрытия оверлея
  closeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    modal_inner.removeChild(overlayElement);
    modal.classList.remove('is-active');
    body.classList.remove('is-locked');
  });

  return {
    open() {
      modal_inner.appendChild(overlayElement);
      modal.classList.add('is-active');
      body.classList.add('is-locked');
    },
    close() {
      closeBtn.click();
    },
    setContent(tittle_mod,text_mod) {
      contentText.innerHTML = text_mod;
      contentTittle.innerHTML = tittle_mod;
    }
  };
};

/////////////////////////form data
const form_order=document.querySelector('#form_order');

  form_order.addEventListener('submit',function(e){
  e.preventDefault();
  const formData = new FormData(),
  
  xhr = new XMLHttpRequest();
  xhr.resposeType='json';
  xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

  formData.append('name',form_order.elements.firstname.value);
  formData.append('phone',form_order.elements.phone.value);
  formData.append('comment',form_order.elements.comment.value);
  formData.append('to','my@valid.em');
  
  xhr.send(formData);
  xhr.onload  = function() {
    let jsonResponse = JSON.parse(xhr.responseText);
    
    if (xhr.status!=200){
      overlay.setContent('Ошибка','Произошла ошибка отправки данных');
    } else {
      overlay.setContent('Сообщение',jsonResponse.message);
    }
    overlay.open();
 };
});
