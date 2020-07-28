const closeAllModals = () => {
    const allModals = document.querySelectorAll('[data-modal]');

    allModals.forEach(item => {
        item.style.display = 'none'
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
    })
}

export default closeAllModals