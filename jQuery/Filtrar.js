$(document).ready(function(){
    //---- PARA FILTRAR PRIMERA Y ULTIMA
    // $('.caja').first().css({
    //     background: '#000',
    // })
    // $('.caja').last().css({
    //     background: '#000'
    // })

    //---- PARA FILTRAR LAS DEL MEDIO
    // $('.caja').eq(1).css({
    //     background: '#000'
    // })

    //---- CON FILTER SE PUEDEN SELECCIONAR MAS DE UNA 
    // $('.caja').filter('#segunda').css({
    //     background: '#f9a03f'
    // });

    //---- PARA EXCLUIR CAJAS
    $('.caja').not('#segunda').css({
        background: '#f9a03f'
    })
})