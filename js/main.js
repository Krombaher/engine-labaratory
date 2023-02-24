//Map
function init() {
    let map = new ymaps.Map('geoMap', {
        center: [55.706802, 37.709290],
        zoom: 10
    })

    let placeMark = new ymaps.Placemark([55.706802, 37.709290], {}, {})

    map.geoObjects.add(placeMark);
}

ymaps.ready(init)

//Modal
const modal = document.getElementById('modal')
const closeBtnModal = document.querySelectorAll('[data-close]')
const viewModal = document.getElementById('modalOpen')

closeBtnModal.forEach(item => {
    item.addEventListener('click', closeModal);
});

viewModal.addEventListener('click', openModal)

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
}

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
}