const menu = [
    'Camper Vans',
    'Trip Ideas',
    'Terms & Conditions',
    'Blog',
    'Contact',
]

const footerMenu = [
    'Terms & Conditions',
    'Cancellation Policy',
    'Privacy Policy',
    'Cookie Policy',
    'Contact',
]

const menuHelper = item => item.toLowerCase().split(' ').join('-').split('&').join('and');

export {
    menu,
    footerMenu,
    menuHelper
}