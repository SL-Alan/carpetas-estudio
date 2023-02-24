$(document).ready(function(){
    var boton= $('#boton');

    // boton.click(function(){
    //     alert('Hola');
    // });

    //---- Evento con funcion
    // function saludo(){
    //     alert('Saludos');
    // }
    // boton.click(saludo);
    // boton.on('click', saludo);

    //---- Evento con fallback (funcion anonima que se ejecuta cuando se cumple un evento)
//     boton.on('mouseenter', function(){
//         document.body.style.background= '#000';
//     })
//     boton.on('mouseleave', function(){
//         document.body.style.background= '#fff';
//     })

    //---- Eliminando eventos
    // boton.on('click', function(){
    //     alert('Saludos');
    //     console.log('Saludos');
    // })
    // $('#desactivar').on('click', function(){
    //     boton.off('click');
    //     console.log('Boton de ejecutar desactivado');
    // })

    //---- Previniendo el comportamiento de enlaces
    $('a').on('click', function(e){
        e.preventDefault();
        alert('Link desactivado'); 
    })
});