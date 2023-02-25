const modal = document.getElementById('modal')
const closeBtnModal = document.querySelectorAll('[data-close]')
const viewModal = document.getElementById('modalOpen')
const menu = document.querySelector('.toggle__menu')
const sectionTitle = document.querySelector('.section__title')
const nav = document.querySelector('.nav')
console.log(sectionTitle)

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

//Burger menu
menu.addEventListener('click', openMenu)

function openMenu() {
    if(sectionTitle.style.display === 'flex') {
        sectionTitle.style.display = 'none'
        nav.style.display = 'block'
    } else {
        sectionTitle.style.display = 'flex'
        nav.style.display = 'none'
    }
}