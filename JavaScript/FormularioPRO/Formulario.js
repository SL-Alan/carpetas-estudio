const formulario= document.getElementById('formulario');

const inputs= document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
   switch (e.target.name) {
    case "nombre":
        validarCampo(expresiones.nombre, e.target, 'nombre');
        break;   

    case "correo":
        validarCampo(expresiones.correo, e.target, 'correo');            
    break;
    case "password":
        validarCampo(expresiones.password, e.target, 'password');
    break;
    case "password2":
        validarPassword2();
    break;
   }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`${campo}`).classList.remove('formulario-grupo-incorrecto');
        document.getElementById(`${campo}`).classList.add('formulario-grupo-correcto');
        document.querySelector(`#${campo} i`).classList.add('fa-check');
        document.querySelector(`#${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#${campo} .formulario-input-error`).classList.remove('formulario-input-error-activo');
    } else {
        document.getElementById(`${campo}`).classList.add('formulario-grupo-incorrecto');
        document.getElementById(`${campo}`).classList.remove('formulario-grupo-correcto');
        document.querySelector(`#${campo} i`).classList.remove('fa-check');
        document.querySelector(`#${campo} i`).classList.add('fa-circle-xmark');  
        document.querySelector(`#${campo} .formulario-input-error`).classList.add('formulario-input-error-activo');          
    }
}

function validarPassword2(){
    var Password= document.getElementById('password').value;
    var confirm= document.getElementById('confirm-password').value;

    if(Password !== confirm){
        document.getElementById('confirm-password').classList.remove('formulario-grupo-correcto');
        document.getElementById('confirm-password').classList.add('formulario-grupo-incorrecto');
        document.querySelector('#confirm-password i').classList.add('fa-circle-xmark'); 
        document.querySelector('#confirm-password i').classList.remove('fa-check');  
        document.querySelector('#confirm-password .formulario-input-error').classList.add('formulario-input-error-activo');
    } else {
        document.getElementById('confirm-password').classList.remove('formulario-grupo-correcto');
        document.getElementById('confirm-password').classList.add('formulario-grupo-incorrecto');
        document.querySelector('#confirm-password i').classList.add('fa-circle-xmark'); 
        document.querySelector('#confirm-password i').classList.remove('fa-check');  
        document.querySelector('#confirm-password .formulario-input-error').classList.add('formulario-input-error-activo');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
});