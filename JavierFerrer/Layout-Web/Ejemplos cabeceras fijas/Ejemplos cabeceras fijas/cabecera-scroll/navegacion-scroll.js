function navegacionScroll() {
  var elementoNavegacion = document.querySelector('.navegacion');
  var navegacionAltura = elementoNavegacion.clientHeight;
  var elementoReferencia = document.querySelector('.cabecera');

  function revisarPosicion() {
    var posicionY = elementoReferencia.getBoundingClientRect().bottom;
    if (posicionY - navegacionAltura < 0) {
      elementoNavegacion.classList.add('scroll');
    } else {
      elementoNavegacion.classList.remove('scroll');
    }
  }

  window.addEventListener('scroll', revisarPosicion);
}
navegacionScroll();
