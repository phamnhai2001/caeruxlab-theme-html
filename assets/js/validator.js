function Validator(options) {

    var selectorRules = {};
    function validate(inputElement,rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage;
        var rules = selectorRules[rule.selector];

        for(var i=0; i<rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }

        if(errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }

    }

    var formElement = document.querySelector(options.form);

    if(formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                validate(inputElement,rule);
               
            });
            
        }
        options.rules.forEach(function(rule) {

            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }else {
                selectorRules[rule.selector] = [rule.test];
            }
            var inputElement = formElement.querySelector(rule.selector);
            
            if(inputElement) {

                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });

    }
}
Validator.isCompany = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : '*Please enter your name company';
        }
    };
}
Validator.isFirstname = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : '*Firstname is required';
        }
    };
}

Validator.isLastname = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : '*Lastname is required';
        }
    };
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : '*Enter email is required';
        }
    };
}
Validator.isPassword = function (selector,min) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : `Password needs to be at least ${min} characters`;
        }
    };
}

Validator.isEnterpassword = function (selector, getConfirmValue) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : '*Password is wrong';
        }
    };
}
Validator.isSurname = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : '*Please enter your surname';
        }
    };
}
Validator.isPhone = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : '*Please enter your phone';
        }
    };
}
Validator.isCode = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : '*Please enter your code';
        }
    };
}
Validator.isCity = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : '*Please enter the city';
        }
    };
}
Validator.isAddress = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : '*Please enter your address';
        }
    };
}

Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : ' ';
        }
    };
}