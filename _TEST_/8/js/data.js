"use strict";

const page_header = {
    logo: 'b1.jpg',
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

function generate( target, data ){
    let HTML = '',
        html_template = document.querySelector(`${target}`).innerHTML,
        template = '';
    const keywords = Object.keys( data[0] );

    data.forEach( item => {
        template = html_template;
        
        keywords.forEach( keyword => {
            template = template.replace('{{'+keyword+'}}', item[keyword] );
        });
        
        HTML += template;
    });

    return document.querySelector(target).innerHTML = HTML;
}
generate('.test', page_header);