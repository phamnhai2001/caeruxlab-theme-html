Validator({
    form: '#formAddress',
    errorSelector: '.form_message',
    rules: [
        Validator.isCompany('#company'),
        Validator.isSurname('#first_name','#last_name'),
        Validator.isPhone('#first_block_phone_number'),
        Validator.isCode('#first_block_post_number'),
        Validator.isCity('#city'),
        Validator.isAddress('#street')

    ]
});