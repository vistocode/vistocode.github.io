window.sr = ScrollReveal();
  sr.reveal('.card', {
    duration   : 2000,
    scale      : 1,
    distance   : '300px',
    origin     : 'bottom',
    reset      : true,
    easing     : 'ease-out',
    viewFactor : 0.5,
  });

   sr.reveal('.card-title, .card-text', {
    duration   : 500,
    scale      : 1,
    distance   : '100px',
    origin     : 'bottom',
    reset      : true,
    easing     : 'ease-out',
    viewFactor : 1,
  });