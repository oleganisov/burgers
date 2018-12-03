// HTML5 video api
var video,
    duration,
    startDuration,
    volume;
      
window.onload=function(){
  video=document.querySelector('.player__video');
  // инициализация элемента управления видео
  duration=document.querySelector('.player__progress');
  duration.value=0;
  duration.min=0;
  duration.max=video.duration;
  // инициализация элемента управления звуком
  volume=document.querySelector('.player__volume');
  volume.value=2;
  volume.min=0;
  volume.max=10;
// выбор кнопок старта видео и громкости
const player_start=document.querySelectorAll('.player-start'),
      volume_img=document.querySelector('.player__volume-img');
// для кнопок старт вешаем обработчик клика
player_start.forEach(playpause =>{
playpause.addEventListener('click', function(){
  PlayPause();
});
});
// обработчик нажатия на кнопку мыши на input range для длительности видео
duration.addEventListener('mousedown', function(){
  videoSeekStart();
});
// обработчик отпуска кнопки мыши на input range для длительности видео
duration.addEventListener('mouseup', function(){
  videoSeekEnd();
});
// обработчик на input range для изменения громкости звука видео
volume.addEventListener('mousemove', function(){
  changeVolume();
});
// обработчик клика на кнопке громкости
volume_img.addEventListener('click', function(){
  muteVolume();
});
};
// воспроизведение видео
function PlayPause(){
  start_img=document.querySelector('.player__start-img');
  if (video.paused){
    video.play();
    startDuration=setInterval(initDuration,1000/66);
    start_img.classList.remove('is-active');
  }else{
    video.pause();
    clearInterval(startDuration);
    start_img.classList.add('is-active');
  }
};
// выставление позиции на input range длительности
function initDuration(){
  duration.value=video.currentTime;
};
// окончание поиска по видео
function videoSeekEnd(){
  video.currentTime=duration.value;
  PlayPause();
};
// начало поиска по видео
function videoSeekStart(){
  clearInterval(startDuration);
  if (video.paused){
  }else {
    PlayPause();
  };
};
// Управление звуком
function changeVolume(){
  video.volume=volume.value/10;
}
// вкл/выкл звука
function muteVolume(){
  if (video.volume===0){
    video.volume=volume_pos/10;
    volume.value=volume_pos;
  }else {
    volume_pos=volume.value;
    video.volume=0;
    volume.value=0;
  };
};
