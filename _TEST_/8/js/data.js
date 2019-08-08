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

function generateHeader( data ){
    let HTML = `<div class="logo">
                    <img src="/_TEST_/8/img/${data.logo}" alt="logo">
                </div>
                <nav>`;

    for ( let i=0; i<data.nav.length; i++ ){
    HTML += `<a href="${data.nav[i].link}" class="">${data.nav[i].title}</a>`
    }

    HTML += `</nav>`

    return HTML;
}

document.querySelector('#navbar').innerHTML = generateHeader( page_header );