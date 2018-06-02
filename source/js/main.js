// Открытие формы
(function () {
    var openFormButton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');

    if(openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            form.open();
        })
    }
}());