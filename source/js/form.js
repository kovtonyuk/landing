(function () {
    var me = {};
    var form = document.querySelector('.form-container');
    var closeButton = null;


    function onClose() {
        me.close();
        closeButton.removeEventListener('click', onClose);
    }

    me.open = function() {
        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose);

    };

    me.close = function() {
        form.classList.add('is-hidden');
    };

    document.addEventListener('keydown', function(e) {
        e.preventDefault();
        var key = e.which || e.keyCode || 0;
        if (key == 27) {
            onClose();
        }
    })

    window.form = me;
}());