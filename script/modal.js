const URL_API = "https://script.google.com/macros/s/AKfycbysE2U4FStVMSAqoexL_D057mTdg_46P2vzR6_mpsHke6icpdrHzjqamUauFJqtYhUZ9Q/exec";

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("launchModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const loginBtn = document.getElementById("login");
  const emailInput = document.getElementById("email");
  const mensaje = document.getElementById("msg");


// Cierra el modal si haces clic fuera del contenido


  // Polyfill si es necesario
  if (modal && typeof modal.showModal !== "function" && typeof dialogPolyfill !== "undefined") {
    dialogPolyfill.registerDialog(modal);
  }

  if (openModalBtn) {
    openModalBtn.addEventListener("click", () => {
      mensaje.innerText = "";
      emailInput.value = "";
      modal.showModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.close();
    });
  }

  /*Funcionalidad de boton para cerrar modal*/
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      modal.close();
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      const email = emailInput.value.trim().toLowerCase();
      mensaje.innerText = "";

      if (!email || !email.includes("@")) {
        mensaje.innerText = "Ingresa un correo válido.";
        return;
      }

      try {
        const res = await fetch(URL_API);
        const data = await res.json();

        // const listaCorreos = data.email.map(item => item.email.trim().toLowerCase());


      const usuario = data.email.find(item => item.email.trim().toLowerCase() === email);


        if (usuario) {
          localStorage.setItem("sesionIniciada", "true");
          localStorage.setItem("correo", email);
          localStorage.setItem("nombre", usuario.name); // Guardar el nombre
          modal.close();
          window.location.href = "preview.html";
        } else {
          mensaje.innerText = "Correo no autorizado.";
        }
      } catch (error) {
        console.error(error);
        mensaje.innerText = "Error al validar el correo.";
      }
    });
  }
});



