const menu = [
    'Bipper',
    'Cielito Lindo',
    'Travel Tips',
    'About Us',
    'Inspiration',
    'Contact',
    'T&C',
]

const footerMenu = [
    'T&C',
    'Privacy Policy',
    'Cookie Policy',
    'Contact',
]

const menuHelper = item => item.toLowerCase().split(' ').join('-').split('&').join('-and-');

export {
    menu,
    footerMenu,
    menuHelper
}