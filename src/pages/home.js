'use strict'
import chef from '../assets/2.jpg'

function home() {
    const home = document.createElement('div');
    home.classList.add('home')

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Best pizza'

    const img = new Image();
    img.src = chef
    img.classList.add('image')

    const p = document.createElement('p')
    p.innerHTML = 'Order online or visit us!'

    home.appendChild(h1)
    home.appendChild(img)
    home.appendChild(p)
    return home
}

function loadHome() {
    const main = document.querySelector('.main')
    main.appendChild(home())
}

export default loadHome;