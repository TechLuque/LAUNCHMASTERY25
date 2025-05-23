const URL_API = "https://script.google.com/macros/s/AKfycby56cG06rEqvPHvlQRvsmuZiUN-Ab2oOxx7SP8cqZdW5EKEEUSxr-V9B-_Rfi7A0fJKSg/exec";


document.addEventListener("DOMContentLoaded", () => {
  const labelNombre = document.querySelector(".name");

  // Obtener parámetros de URL
  const urlParams = new URLSearchParams(window.location.search);
  const nombre = urlParams.get("nombre");

  if (nombre) {
    labelNombre.textContent = decodeURIComponent(nombre).toUpperCase();
  } else {
    labelNombre.textContent = "ALVARO LUQUE";
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const duracionRotacion = 10;
  const app = document.querySelector('#app');
  const ticket = document.querySelector('.ticket');

  // Guardamos las animaciones en variables
  const rotacion = gsap.to(app, {
    "--r": "360deg",
    duration: duracionRotacion,
    ease: "none",
    repeat: -1,
    modifiers: {
      "--r": gsap.utils.unitize(v => parseFloat(v) % 360)
    }
  });

  const brillo = gsap.to(app, {
    "--p": "0%",
    duration: duracionRotacion / 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
  });

  const intensidad = gsap.to(app, {
    "--o": 1,
    duration: duracionRotacion / 4,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
  });

  const holo = gsap.to(app, {
    "--h": "100%",
    duration: duracionRotacion / 4,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });

  ticket.addEventListener("mouseenter", () => {
    rotacion.pause();
    brillo.pause();
    intensidad.pause();
    holo.pause();
  });

  ticket.addEventListener("mouseleave", () => {
    rotacion.play();
    brillo.play();
    intensidad.play();
    holo.play();
  });
});
