import checkNumInputs from './checkNumInputs'
import closeAllModals from './closeAllModals'

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]')

    const messages = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с Вами свяжемся...',
        failure: 'Что-то пошло не так'
    }

    const postData = async (url = '', data = {}) => {
        document.querySelector('.status').textContent = messages.loading
        const res = await fetch(url, {
            method: 'POST',
            body: data
        })
        return await res.text()
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = ''
        })
    }

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault()

            const statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            item.appendChild(statusMessage)

            const formData = new FormData(item)
            if(item.getAttribute('data-calc') === 'end') {
                for(let key in state) {
                    formData.append(key, state[key])
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res)
                    document.querySelector('.status').textContent = messages.success
                })
                .catch(() => document.querySelector('.status').textContent = messages.failure)
                .finally(() => {
                    clearInputs()
                    setTimeout(() => {
                        statusMessage.remove()
                        closeAllModals()
                    }, 5000)
                })
        })
    })
}

export default forms