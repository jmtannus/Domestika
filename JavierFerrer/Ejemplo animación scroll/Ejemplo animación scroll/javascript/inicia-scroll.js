var cabecera = basicScroll.create({
  elem: document.querySelector('.cabecera'),
  from: 'top-top',
  to: 'bottom-top',
  props: {
    '--opacidad-nav': {
      from: 0,
      to: 1
    },
    '--titular-pos': {
      from: '0',
      to: '60vh'
    }
  }
});

var imagen1 = basicScroll.create({
  elem: document.querySelector('.imagen-1'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--imagen1': {
      from: '0',
      to: '-50%'
    }
  }
});

var imagen2 = basicScroll.create({
  elem: document.querySelector('.imagen-2'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--imagen2': {
      from: '0',
      to: '-50%'
    }
  }
});

var cita = basicScroll.create({
  elem: document.querySelector('.cita'),
  from: 'top-bottom',
  to: 'bottom-middle',
  props: {
    '--cita': {
      from: '50%',
      to: '0'
    },
    '--cita-opacidad': {
      from: 0,
      to: 1
    }
  }
});

cabecera.start();
imagen1.start();
imagen2.start();

cita.start();
