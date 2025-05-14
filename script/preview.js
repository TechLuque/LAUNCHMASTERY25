  // const status = document.getElementById("status");
  // const sesion = localStorage.getItem("sesionIniciada");
  // const correo = localStorage.getItem("correo");
  // const name = localStorage.getItem("name");

  // if (sesion === "true" && correo) {
  //   status.innerText = `Sesión activa para: ${correo}`;
  // } else {
  //   // Redirigir si no hay sesión
  //   window.location.href = "index.html";
  // }



  const sesion = localStorage.getItem("sesionIniciada");
const correo = localStorage.getItem("correo");
const name = localStorage.getItem("name");

if (sesion === "true" && correo) {
  // continúa normalmente
} else {
  window.location.href = "index.html";
}
