// Realiza una consulta, en este caso relacionada a la ventana del navegador

const resolucion =  window.matchMedia('screen and (max-width: 360px)');

// Escucha los cambios de resolucion
resolucion.addListener(validacion);

function validacion(evento){

  // matches evalua a evento con un true o un false
  // Dependiendo la condición establecida en resolución

  if(evento.matches){

    // Agregando un evento al burgerButton
    // La función addEventListener() recibe 2 parámetros
    // (1) Tipo de evento
    // (2) Que se quiere hacer con ese click
    // Es este caso se va a pasar una función definidad por nosotros.

    burgerButton.addEventListener('click', mostrar);

  } else{

    // Eliminando el evento si no se cumple la condición

    burgerButton.removeEventListener('click', mostrar);

  }
}

// Asociando a la variable menu  el selector .menu
const menu = document.querySelector('.menu');

// Asociando a la variable burgerButton  el id #burger-menu
const burgerButton = document.querySelector('#burger-menu');

validacion(resolucion);

function mostrar(){

  // Determina si la clase menu contiene la clase is-active
  if(menu.classList.contains('is-active')){

    // Eliminando la clase is-active a la clase .menu
    menu.classList.remove('is-active');

  } else{

    // Agregando la clase is-active a la clase .menu
    menu.classList.add('is-active');

  }

}
