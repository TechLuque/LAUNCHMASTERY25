const URL_API = "https://script.google.com/macros/s/AKfycbysE2U4FStVMSAqoexL_D057mTdg_46P2vzR6_mpsHke6icpdrHzjqamUauFJqtYhUZ9Q/exec";

document.addEventListener("DOMContentLoaded", async () => {
  const labelNombre = document.querySelector(".number"); // El nombre grande en la tarjeta

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
