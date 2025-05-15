// crono.js
document.addEventListener('DOMContentLoaded', () => {
  const dias = document.querySelectorAll('.dia');

  dias.forEach(dia => {
    const btn = dia.querySelector('.ver-horarios');
    const horario = dia.querySelector('.horario');

    if (btn) {
      btn.addEventListener('mouseenter', () => {
        // Ocultar todos los demás
        dias.forEach(d => {
          const h = d.querySelector('.horario');
          if (h) h.classList.remove('visible');
        });
        // Mostrar solo el actual
        horario.classList.add('visible');
      });
    }
  });
});
