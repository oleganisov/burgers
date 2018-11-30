//full page js
myFullpage = new fullpage('#fullpage', {
  anchors: ['Page1', 'Page2', 'Page3','Page4','Page5','Page6','Page7','Page8','Page9'],
  autoScrolling: true,
  scrollHorizontally: true,
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  navigation: true,
  navigationPosition: 'right',
  scrollBar: false
});

// переход на 2-ую секцию по стрелке
document.querySelector('.next-screen__link').addEventListener('click', e => {
	e.preventDefault();
	myFullpage.moveSectionDown();
})
// переход на секцию доставки с кнопок Заказать
const order_btns=document.querySelectorAll('.order-btn');
  order_btns.forEach(order_btn=>{
    order_btn.addEventListener('click', e => {
    e.preventDefault();
    myFullpage.moveTo(8);
});
});
// переход по секциям из 2-х меню
const nav_list=$('[data-menuanchor]').toArray();
nav_list.forEach(nav_item=>{
  nav_item.addEventListener('click', e => {
  e.preventDefault();
  let section_ind=$(e.currentTarget).data('menuanchor');
  myFullpage.moveTo(section_ind);
});
});