const menu = [
    'Camper Vans',
    'Trip Ideas',
    'Terms & Conditions',
    'Blog',
    'Contact',
]

const menuHelper = item => item.toLowerCase().split(' ').join('-').split('&').join('and');

export {
    menu,
    menuHelper
}