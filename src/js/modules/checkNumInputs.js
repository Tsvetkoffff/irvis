const checkNumInputs = (selector) => {
    const element = document.querySelectorAll(selector)

    element.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '')
        })
    })
}

export default checkNumInputs