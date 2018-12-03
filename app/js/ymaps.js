ymaps.ready(init);
// массив маркеров карты
var placemarks=[
  {
    latitude:59.97,
    longitude:30.31,
    hintContent:'<div class="map__hint">ул. Литераторов, д.19</div>',
    balloonContent:[
      '<div class="map__balloon">ул. Литераторов, д.19</div>',
      '<div>Санкт-Петербург, Россия</div>'
    ]
  },
  {
    latitude:59.94,
    longitude:30.25,
    hintContent:'<div class="map__hint">Малый проспект В.О., д.64</div>',
    balloonContent:[
      '<div class="map__balloon">Малый проспект В.О., д.64</div>',
      '<div>Санкт-Петербург, Россия</div>'
    ]
  },
  {
    latitude:59.93,
    longitude:30.34,
    hintContent:'<div class="map__hint">наб. реки Фонтанки, д.56</div>',
    balloonContent:[
      '<div class="map__balloon">наб. реки Фонтанки, д.56</div>',
      '<div>Санкт-Петербург, Россия</div>'
    ]
  },
  {
    latitude:59.984597,
    longitude:30.368939,
    hintContent:'<div class="map__hint">проспект маршала Блюхера 6</div>',
    balloonContent:[
      '<div class="map__balloon">проспект маршала Блюхера 6</div>',
      '<div>Санкт-Петербург, Россия</div>'
    ]
  }
];
// инициализация карты с указанием центра коор-т
  function init(){ 
    var map = new ymaps.Map("yandex_map", {
      center: [59.94, 30.32],
      zoom: 12,
      controls:['zoomControl'],
      behaviors:['drag']
    }); 
// добавление маркеров на карту
placemarks.forEach(obj =>{
  var placemark=new ymaps.Placemark([obj.latitude,obj.longitude],{
    hintContent:obj.hintContent,
    balloonContent:obj.balloonContent.join('')
  },
  {
    iconLayout:'default#image',
    iconImageHref:'./img/icons/map-marker.svg',
    iconImageSize:[46,57],
    iconImageOffset:[-23,-57]
  })
  map.geoObjects.add(placemark);
});
}