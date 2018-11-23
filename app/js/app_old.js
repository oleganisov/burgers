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
slide_next.addEventListener('click',function(e){
  e.preventDefault();
  let cur_right=parseInt(style.right,10);
  if (!cur_right) {
    cur_right=0;
  };
  if (cur_right<list_width-step){
    shift_right(cur_right,step);
  } 
  else {
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
    shift_right(cur_right,-step);
  }
  else {
    shift_right(list_width,-step);
  };
});
/////////////////////////accordeon team & menu
const team_accord=document.querySelector("#team_accord"),
      team_items=team_accord.children,
      menu_accord=document.querySelector("#menu_accord")
      menu_items=menu_accord.children;
function addLsn(items_list){
for (let i=0;i<items_list.length;i++){
  items_list[i].addEventListener('click',function(e){
    e.preventDefault();
    toggleAccord(items_list,this);
  });
};
};
function toggleAccord(items_list1,cur_item){
  for (let i=0;i<items_list1.length;i++){
    items_list1[i].classList.remove('is-active');
  };
  cur_item.classList.add('is-active');
};
addLsn(team_items);
addLsn(menu_items);