window.sr = ScrollReveal();
  sr.reveal('.card', {
    duration   : 2000,
    scale      : 1,
    distance   : '85px',
    origin     : 'bottom',
    reset      : false,
    easing     : 'ease-out',
    viewFactor : 0.2,
  });

   sr.reveal('.card-title, .card-text', {
    duration   : 500,
    scale      : 1,
    distance   : '50px',
    origin     : 'bottom',
    reset      : true,
    easing     : 'ease-out',
    viewFactor : 1,
  });

  sr.reveal('.btn-primary', {
    duration: 500,
    delay: 500,
    distance: '50px',
    origin: 'bottom',
    reset: true,
    easing: 'ease-out',
    viewFactor: 1,
  });

  sr.reveal('.contact--form', {
    duration: 500,
    delay: 500,
    distance: '300px',
    origin: 'left',
    reset: true,
    easing: 'ease-out',
    viewFactor: 0.2,
  });

  sr.reveal('.social-sites', {
    duration: 500,
    delay: 500,
    distance: '300px',
    origin: 'right',
    reset: true,
    easing: 'ease-out',
    viewFactor: 0.2,
  });
