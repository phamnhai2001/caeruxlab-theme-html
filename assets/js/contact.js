Validator({
    form: '#contact',
    errorSelector: '.form_message',
    rules: [
        Validator.isFirstname('#firstName'),
        Validator.isLastname('#lastName'),
        Validator.isEmail('#email')
    ]
});