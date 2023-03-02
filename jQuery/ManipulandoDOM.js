$(document).ready(function(){
    var nombre= $('#nombre');
    nombre.on('change', function(){
        $('#titulo').text(nombre.val());
    })

    // $('#titulo').text('Encabezado modificado');
    $('#titulo').html('<u>Encabezado modificado </u>');

    // $('#enlace').text('falconmaster.com');
    // $('#enlace').attr('href', 'http://www.falconmaster.com');

    $('#enlace').attr({
        'class': 'azul',
        'target': '_blank',
        'id': 'Enlace'
    })
});