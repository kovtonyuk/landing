(function($){
    $(function() {
        $('.nav__icon').on('click', function() {
            $(this).closest('.nav').toggleClass('menu_state_open');
        });
    });
})(jQuery);