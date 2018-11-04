const menu = [
    'Campers',
    'About Us',
    'Travel Tips',
    'Inspiration',
    'Terms & Conditions',
    'Contact',
]

const footerMenu = [
    'Terms & Conditions',
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