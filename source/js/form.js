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

    window.form = me;
}());