//  var cajas= document.getElementsByTagName('div');

// cajas[0].textContent='Hola mundo';
// cajas[0].innerHTML= '<h1>Hola</h1>';

var cajas= document.getElementsByClassName('caja');

// var primeraCaja= document.getElementById('primeraCaja');

//----- CREANDO NODOS -----
// 1. Crear el elemento
var caja= document.createElement('div');
// 2. Crear un nodo de texto
var contenido= document.createTextNode('Caja Nueva');
// 3. Añadir el nodo de texto al elemento
caja.appendChild(contenido);
// 4. Agregar atributos a la caja
caja.setAttribute('class', 'caja naranja');

// 5. Agregar el elemento al documento
var contenedor= document.getElementById('contenedor');
contenedor.appendChild(caja);

//----- MODIFICANDO LA CLASE O ID DE UN ELEMENTO -----
caja.id= 'primera';
caja.className='caja';

// ----- CONOCIENDO AL ELEMENTO PADRE -----
var padre= cajas[0].parentNode;
// padre.insertBefore(caja, cajas[2]);

// //----- REEMPLAZANDO Y ELIMINANDO NODOS -----
padre.replaceChild(caja, cajas[2]); 
padre.removeChild(cajas[3]);