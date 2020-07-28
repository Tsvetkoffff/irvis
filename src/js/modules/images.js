const images = () => {
    const works = document.querySelector('.works'),
          imgPopup = document.createElement('div'),
          bigImg = document.createElement('img');

    bigImg.style.cssText = 'max-width: 720px; max-height: 800px; animation-name: bounceIn; animation-duration: 300ms;'

    imgPopup.style.cssText = 'display: none; justify-content: center; align-items: center'
    imgPopup.classList.add('popup')
    imgPopup.appendChild(bigImg)

    works.appendChild(imgPopup)

    works.addEventListener('click', e => {
        e.preventDefault()

        let target = e.target

        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex'
            document.body.style.overflow = 'hidden'
            bigImg.setAttribute('src', target.parentNode.getAttribute('href'))
        }

        if(target && target.matches('div.popup')) {
            imgPopup.style.display = 'none'
            document.body.style.overflow = ''
        }
    }) 
}

export default images