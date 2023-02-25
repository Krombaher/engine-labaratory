"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal')
    const closeBtnModal = document.querySelectorAll('[data-close]')
    const viewModal = document.getElementById('modalOpen')
    const menu = document.querySelector('.toggle__menu')
    const sectionTitle = document.querySelector('.section__title')
    const nav = document.querySelector('.nav__mobile')
    const headerContactText = document.querySelectorAll('.header__contact-text')
    const mobileInfo = document.querySelector('.mobile')
    const toggleBar = document.querySelectorAll('.bar')
    const form = document.getElementById('form');
    const tel = document.getElementById('tel');
    const checkbox = document.getElementById('checkbox');

    form.addEventListener('submit', formSubmit);

    function formSubmit(e) {
        e.preventDefault();

        if (checkbox.checked === true) {
            formSend()
            alert('Send')
            tel.value = ''
        } else {
            alert('Error')
        }
    }

    function formSend() {
        const formData = new FormData(form);
        const object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });

        fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object)
        })
            .then(res => {
                console.log(res);
            })
            .catch(res => {
                console.error(res)
            });
    }


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
        if (sectionTitle.style.display === 'flex') {
            sectionTitle.style.display = 'none'
            nav.style.display = 'block'
            mobileInfo.style.display = 'flex'
            toggleBar.forEach(el => {
                el.style.background = '#2A2A2A'
            })
            headerContactText.forEach(el => {
                el.style.color = '#2A2A2A'
            })
        } else {
            sectionTitle.style.display = 'flex'
            nav.style.display = 'none'
            mobileInfo.style.display = 'none'
            toggleBar.forEach(el => {
                el.style.background = '#FFFFFF'
            })
            headerContactText.forEach(el => {
                el.style.color = '#FFFFFF'
            })
        }
    }
})