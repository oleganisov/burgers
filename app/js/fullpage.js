//full page js
myFullpage = new fullpage('#fullpage', {
  anchors: ['Page1', 'Page2', 'Page3','Page4','Page5','Page6','Page7','Page8','Page9'],
  autoScrolling: true,
	scrollHorizontally: true,
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  navigation: true,
  navigationPosition: 'right',
  scrollBar: true
});

//methods
document.querySelector('.next-screen__link').addEventListener('click', e => {
	e.preventDefault();
	myFullpage.moveSectionDown();
})