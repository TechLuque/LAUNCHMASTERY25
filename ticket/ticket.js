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



const speed = 7;
const r = gsap.timeline({ repeat: -1 });
const o = gsap.timeline({ repeat: -1 });
const h = gsap.timeline({ repeat: -1 });

const $ticket = document.querySelector(".ticket");
$ticket.addEventListener("mouseenter", () => {
  r.pause();
  o.pause();
  h.pause();
});
$ticket.addEventListener("mouseleave", () => {
  r.play();
  o.play();
  h.play();
});

r.to("#app", {
  "--r": "180deg",
  "--p": "0%",
  duration: speed,
  ease: "sine.in"
});
r.to("#app", {
  "--r": "360deg",
  "--p": "100%",
  duration: speed,
  ease: "sine.out"
});
o.to("#app", {
  "--o": 1,
  duration: speed / 2,
  ease: "power1.in"
});
o.to("#app", {
  "--o": 0,
  duration: speed / 2,
  ease: "power1.out"
});

h.to("#app", {
  "--h": "100%",
  duration: speed / 2,
  ease: "sine.in"
});
h.to("#app", {
  "--h": "50%",
  duration: speed / 2,
  ease: "sine.out"
});
h.to("#app", {
  "--h": "0%",
  duration: speed / 2,
  ease: "sine.in"
});
h.to("#app", {
  "--h": "50%",
  duration: speed / 2,
  ease: "sine.out"
});
