const menu = [
    { side: 'left', content: 'Bipper' },
    { side: 'left', content: 'Cielito Lindo' },
    { side: 'left', content: 'Travel Tips' },
    { side: 'right', content: 'About Us' },
    { side: 'right', content: 'Contact' },
    { side: 'right', content: 'T&C' },
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