// Открытие формы
(function () {
    var me = {};
    var form = document.querySelector('.form-container');
    var closeButton = null;


    function onClose() {

        me.close()
        closeButton.removeEventListener('click', onClose);
    }

    me.open = function() {
        // плавность открытия формы
        document.querySelector('.form-container').animate({
            opacity: [ 0, 1 ]
        }, 500);

        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose);

    };

    me.close = function() {
        // Плавность закрытия формы
        var formAnimation = form.animate({
            opacity: [ 1, 0 ]
        }, 300);

        formAnimation.addEventListener('finish', function() {
            form.classList.add('is-hidden');
        });
    };

    document.addEventListener('keydown', function(e) {
        var key = e.which || e.keyCode || 0;
        if(key == 27) {
            onClose();
        }
    });

    me.isValid = function () {
        if (!me.isAllCompleted(document.querySelectorAll('[data-valid="required"]'))) {
            console.log('Заполните обязательные поля');
            return false;
        } else if (!SK.validation.isEmail(document.querySelector('[data-email]'))) {
            console.log('Не верно указан email');
            return false;
        } else if (!SK.validation.isNumber(document.querySelector('[data-email]'))) {
            console.log('Не верно указан номер телефона');
            return false;
        }

        return true;
    };

    me.isAllCompleted = function (data) {
        var result = true;

        for(var i=0; i < data.length; i++) {
            if (!SK.validation.isNotEmpty(data[i].value)) {
                result = false;
                break;
            }
        }
        return result;
    };

    SK.form = me;
}());