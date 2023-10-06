'use strict'
import loadHome from './home.js'
import loadMenu from './menu.js'

function header() {


    const header = document.createElement('div')
    header.classList.add('header')

    const name = document.createElement('p')
    name.innerHTML = 'drochilnya'
    name.classList.add('name')

    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('header__buttons')

    const home_btn = document.createElement('button')
    home_btn.innerHTML = 'Home'
    home_btn.addEventListener('click', function() {
        const main = document.querySelector('.main')
        main.innerHTML = ''
        loadHome()
    })

    const menu_btn = document.createElement('button')
    menu_btn.innerHTML = 'Menu'
    menu_btn.addEventListener('click', function() {
        const main = document.querySelector('.main')
        main.innerHTML = ''
        loadMenu()
    })

    buttonDiv.appendChild(home_btn)
    buttonDiv.appendChild(menu_btn)

    header.appendChild(name)
    header.appendChild(buttonDiv)

    return header
    
}

function main(){
    const main = document.createElement('main')
    main.classList.add('main')
    return main
}


function loadBrowser() {
    const content = document.getElementById('content')
    content.appendChild(header())
    content.appendChild(main())

    loadHome()
}

export default loadBrowser;