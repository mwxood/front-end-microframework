const axios = require('axios');
const qs = require('qs');


const form = () => {
    const sendBtn = document.querySelector('#sendBtn')
    const firstname = document.querySelector('#firstname')
    const lastname = document.querySelector('#lastname')
    const phone = document.querySelector('#phone')
    const email = document.querySelector('#email')
    const messageForm = document.querySelector('.message-form')
    const messageHolder = document.createElement('div')
    const messageClasses = ['alert', 'alert-danger']
    messageHolder.classList.add(...messageClasses)
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    try {
        sendBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
        if(firstname.value.length ===  0 && lastname.value.length === 0 &&  phone.value.length === 0 &&  email.value.length === 0) {
            firstname.classList.add('input-error')
            lastname.classList.add('input-error')
            phone.classList.add('input-error')
            email.classList.add('input-error')
            messageForm.appendChild(messageHolder)
            messageHolder.innerText = 'All fields are required';
           
            return
        } else {
            if(email.value.length !== 0 && !email.value.match(mailFormat)) {
                email.classList.add('input-error')
                messageForm.appendChild(messageHolder)
                messageHolder.innerText = 'Please enter valid email format'
                return
            }
            firstname.classList.remove('input-error')
            lastname.classList.remove('input-error')
            phone.classList.remove('input-error')
            email.classList.remove('input-error')
            messageHolder.remove()
        }

        const data = qs.stringify({
        'email': email.value,
        'first_name': firstname.value,
        'last_name': lastname.value,
        'phone': phone.value,
        'funnel': 'bitcointrader',

        'first_name': firstname.value,
        'last_name':  lastname.value,
        'email': email.value,
        'funnel': 'cryptocfdtrader',
        'affid': '3',
        'phone': phone.value,
        })

        const config = {
            method: 'post',
            url: 'https://api.secureleadsnow.com/emails',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        }


        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data))
        })
        .catch(function (error) {
        console.log(error)
        })
    })

        
    } catch(e) {}

}

export default form