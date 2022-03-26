Validator({
    form: '#login',
    errorSelector: '.form_message',
    rules: [
        Validator.isEmail('#email'),
        Validator.isPassword('#password',8)
    ]
});

