'use strict'
import chef from '../assets/2.jpg'

function home() {
    const main = document.createElement('main');
    main.classList.add('main')

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Best pizza'

    const img = new Image();
    img.src = chef
    img.classList.add('image')

    const p = document.createElement('p')
    p.innerHTML = 'Order online or visit us!'

    main.appendChild(h1)
    main.appendChild(img)
    main.appendChild(p)
    return main
}

function loadHome() {
    const main = document.getElementById("content");
    main.appendChild(home())

}

export default loadHome;