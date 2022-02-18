const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


let isValid = false;
let passwordsMatch = false;

const displayStatus = (msg, canRegister) => {
    message.textContent = `${msg}`;
    canRegister ? message.style.color = 'green' : message.style.color = 'red';
    canRegister ? messageContainer.style.borderColor = 'green' : messageContainer.style.borderColor = 'red';

}

const validateForm = () => {

    isValid = form.checkValidity();
    
    if(!isValid) {
        //Style main message for ERR
        displayStatus('Please fill every field!', false);
        return;
    }
    if(password1El.value === password2El.value && password1El.value.length > 7) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        displayStatus('Make sure passwords match!', false);
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }

    // Form valid AND passwords match
    if (isValid && passwordsMatch) {
        displayStatus('Successfully Registered!', true);
    }
}

const storeFormData = () => {
    const user = {
        //This is why its good to add name='' parameter to form inputs
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    console.log(user);
}

const processFormData = (e) => {
    e.preventDefault();
    //Validate Form
    validateForm();
    if(isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);