Validator({
    form: '#register',
    errorSelector: '.form_message',
    rules: [
        Validator.isFirstname('#firstname'),
        Validator.isLastname('#lastname'),
        Validator.isEmail('#email'),
        Validator.isPassword('#password', 8),
        Validator.isEnterpassword('#password2', function(){
            return document.querySelector('#password').value;
        }),
    ]
});