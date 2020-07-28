import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import modalStateModifier from './modules/modalStateModifier';
import timer from './modules/timer'
import images from './modules/images';

document.addEventListener('DOMContentLoaded', () => {

    const modalState = {form: 0, type: "tree"}

    modalStateModifier(modalState)
    modals()
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click')
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block')
    forms(modalState)
    timer('#timer', '2020-08-15T15:30:00')
    images()
})