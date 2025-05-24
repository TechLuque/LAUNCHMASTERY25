const sesion = localStorage.getItem("sesionIniciada");
const correo = localStorage.getItem("correo");
const name = localStorage.getItem("name");

if (sesion === "true" && correo) {

} else {
  window.location.href = "index.html";
}
