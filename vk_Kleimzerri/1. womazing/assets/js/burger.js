"use strict"

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('body_lock');
        iconMenu.classList.toggle('icon_active');
        menuBody.classList.toggle('menu__body_active');
    });
}