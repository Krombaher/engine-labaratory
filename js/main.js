function init() {
    let map = new ymaps.Map('geoMap', {
        center: [55.706802, 37.709290],
        zoom: 10
    })

    let placeMark = new ymaps.Placemark([55.706802, 37.709290],{}, {

    })

    map.geoObjects.add(placeMark);
}

ymaps.ready(init)