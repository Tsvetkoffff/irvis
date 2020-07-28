const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    const hideContent = () => {
        content.forEach(item => {
            item.style.display = 'none'
        })
        tabs.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    const showContent = (i = 0) => {
        content[i].style.display = display
        tabs[i].classList.add(activeClass)
    }

    hideContent()
    showContent()

    header.addEventListener('click', e => {
        const target = e.target
        const selector = tabSelector.replace(/\./, '')

        if(target && (target.classList.contains(selector) || 
           target.parentNode.classList.contains(selector))) {

            tabs.forEach((item, i) => {
                if(target == item || target.parentNode == item) {
                    hideContent()
                    showContent(i)
                }
            })
        }
    })
    }

export default tabs