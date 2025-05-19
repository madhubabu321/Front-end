let formClose = document.querySelector('#form-close');
let loginForm = document.querySelector('.login-form-container');
let loginBtn = document.querySelector('#login-btn');


loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');

});