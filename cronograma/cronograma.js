// crono.js
document.addEventListener('DOMContentLoaded', () => {
  const dias = document.querySelectorAll('.dia');

  dias.forEach(dia => {
    const btn = dia.querySelector('.ver-horarios');
    const horario = dia.querySelector('.horario');

    if (btn) {
      btn.addEventListener('mouseenter', () => {
        dias.forEach(d => {
          const h = d.querySelector('.horario');
          if (h) h.classList.remove('visible');
        });
        horario.classList.add('visible');
      });
    }
  });
});
