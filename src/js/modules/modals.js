import closeAllModals from './closeAllModals'

const modals = () => {
    const bindModals = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              body = document.querySelector('body');

        trigger.forEach(item => {
            item.addEventListener('click', e => {
                if(e.target) {
                    e.preventDefault();
                }

                closeAllModals()

                const widthBefore = body.offsetWidth

                modal.style.display = 'block'
                body.style.overflow = 'hidden'
                body.style.marginRight = body.offsetWidth - widthBefore + 'px'
            })
        })

        close.addEventListener('click', () => {
            closeAllModals()
        })

        modal.addEventListener('click', e => {
            if(e.target === modal && closeClickOverlay) {
            closeAllModals()
            }
        })
    }

    const showPopupByTime = (selector, time) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            body.style.overflow = 'hidden';
        }, time)
    }

    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModals('.phone_link', '.popup', '.popup .popup_close')
    bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
    bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false)
    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
    showPopupByTime('.popup_engineer', 60000);
}

export default modals