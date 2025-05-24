const URL_API = "https://script.google.com/macros/s/AKfycbysE2U4FStVMSAqoexL_D057mTdg_46P2vzR6_mpsHke6icpdrHzjqamUauFJqtYhUZ9Q/exec";

document.addEventListener("DOMContentLoaded", async () => {
  const labelNombre = document.querySelector(".name"); // El nombre grande en la tarjeta

  const correo = localStorage.getItem("correo");
  if (!correo) return;

  try {
    const res = await fetch(URL_API);
    const data = await res.json();

    const match = data.email.find(item => item.email.trim().toLowerCase() === correo.trim().toLowerCase());

    if (match) {
      labelNombre.textContent = match.name.toUpperCase();
    } else {
      labelNombre.textContent = "USUARIO NO ENCONTRADO";
    }
  } catch (err) {
    console.error("Error al cargar los datos:", err);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const duracionRotacion = 10;
  const app = document.querySelector('#app');
  const ticket = document.querySelector('.ticket');
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
