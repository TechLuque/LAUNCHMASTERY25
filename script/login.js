const URL_API = "https://script.google.com/macros/s/AKfycbysE2U4FStVMSAqoexL_D057mTdg_46P2vzR6_mpsHke6icpdrHzjqamUauFJqtYhUZ9Q/exec";

document.getElementById("login").addEventListener("click", async () => {
  const emailInput = document.getElementById("email");
  const mensaje = document.getElementById("msg");
  const email = emailInput.value.trim().toLowerCase();

  if (!email) {
    mensaje.innerText = "Ingresa un correo válido.";
    return;
  }

  try {
    const res = await fetch(URL_API);
    const data = await res.json();
    console.log(data);
    // Buscar el objeto que coincide por correo
    const user = data.email.find(item => item.email.trim().toLowerCase() === email);

    if (user) {
      localStorage.setItem("sesionIniciada", "true");
      localStorage.setItem("correo", email);
      localStorage.setItem("nombre", user.name); // Guardar el nombre
      window.location.href = "preview.html";
    } else {
      mensaje.innerText = "Correo no autorizado.";
    }
  } catch (error) {
    console.error(error);
    mensaje.innerText = "Error al validar el correo.";
  }
});
