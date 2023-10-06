'use strict'

function menu() {

    const menu = document.createElement('div')
    menu.classList.add('menu')

    const h1 = document.createElement('h1')
    h1.innerHTML = 'Menu'
    
    const hr = document.createElement('hr')

    menu.appendChild(h1)
    menu.appendChild(hr)
    for (let i = 0; i<3; i++){
        const place = document.createElement('div')
        place.classList.add('menu__elem')

        const placeHr = document.createElement('hr')

        const h4 = document.createElement('h4')
        h4.innerHTML = 'Ipsum'

        const p = document.createElement('p')
        p.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, cum.'
        p.classList.add('menu__p')

        const cost = document.createElement('h4')
        cost.innerHTML = '35$'

        place.appendChild(h4)
        place.appendChild(p)
        place.appendChild(cost)
        place.appendChild(placeHr)

        menu.appendChild(place)
    }

    return menu
}

function loadMenu() {
    const main = document.querySelector('.main')
    main.appendChild(menu())
}

export default loadMenu;