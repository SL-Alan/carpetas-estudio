$(document).ready(function(){
    $('#ejecutar').on('click', function(){
        $('.caja').slideUp(2000, function(){
            $(this).slideDown(2000);
        });
    });
});