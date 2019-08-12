"use strict";

const page_header = {
    logo: 'b1.png',
    nav: [
        {
            link: '/',
            title: 'Home'
        },
        {
            link: '/services',
            title: 'Services',
            active: true
        },
        {
            link: '/about-us',
            title: 'About us'
        },
        {
            link: '/contact-us',
            title: 'Contact'
        }
    ]
}

function header(data) {
    let HTML = '', 
        nuorodos = '';

    // logotipas
    HTML += `<img src="./img/${data.logo}" alt="logo">`;

    // nuorodos
    for ( let i=0; i<data.nav.length; i++ ) {
        nuorodos += `<a href="${data.nav[i].link}"
                        class="${data.nav[i].active === true ? 'active' : ''}">
                        ${data.nav[i].title}
                    </a>`;
    }

    // navigacija
    HTML += `<nav>
                ${nuorodos}
            </nav>`


    return HTML;
}

document.querySelector('header').innerHTML = header(page_header);