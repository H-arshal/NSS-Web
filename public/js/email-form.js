var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@sggs+(?:\.ac)+(?:\.in+)*$/;
const contactform = document.querySelector('.php-email-form');
let name1 = document.getElementById('name')
let email = document.getElementById('email')
let year = document.getElementById('year')
let message = document.getElementById('message')

contactform.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name1.value,
        email: email.value,
        year: year.value,
        message: message.value
    }

    // console.log(formData)
    if (email.value.match(validRegex)) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.responseText == 'success') {
                alert('NSS received your Idea, Thank you!!!');
                name1.value = '';
                email.value = '';
                year.value = '';
                message.value = '';
            }
            else {
                alert('something went wrong');
                // console.log("");
                name1.value = '';
                email.value = '';
                year.value = '';
                message.value = '';
            }
        }
        xhr.send(JSON.stringify(formData))
    }
    else {
        alert('use sggs account to message sorry for incovience');
        name1.value = '';
        email.value = '';
        message.value = '';
        year.value = '';
    }
})