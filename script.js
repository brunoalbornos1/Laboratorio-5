// function togglePasswordVisibility(eyeIconId, passwordInputId) {
//     var passwordInput = document.getElementById(passwordInputId);
//     var eyeIcon = document.getElementById(eyeIconId);
  
//     if (passwordInput.type === "password") {
//       passwordInput.type = "text";
//       eyeIcon.classList.remove("fa-eye");
//       eyeIcon.classList.add("fa-eye-slash");
//     } else {
//       passwordInput.type = "password";
//       eyeIcon.classList.remove("fa-eye-slash");
//       eyeIcon.classList.add("fa-eye");
//     }
// }

// function validarContrasena(contrasena) {
//   var minLength = 8;
//   var minus = /[a-z]/.test(contrasena);
//   var mayus = /[A-Z]/.test(contrasena);
//   var numeros = /[0-9]/.test(contrasena);
//   var caracteres = /[!@#$%^&*(),.?":{}|<>]/.test(contrasena);

//   return (
//       contrasena.length >= minLength &&
//       minus &&
//       mayus &&
//       numeros &&
//       caracteres
//   );
// }
// function validarUsuario(username) {
//   var caracteresnombre = /[!@#$%^&*(),.?":{}|<>]/.test(username);
//   return !caracteresnombre;
// }
// function validateForm() {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("contrasena").value;
//   var minCaracteres = 8;
//   var maxCaracteres = 20;

//   if (username === "" || password === "") {
//       alert("Por favor, completa ambos campos.");
//       return false;
//   }

//   if (!validarUsuario(username)) { //verifica si cumple la funcion, sino devuelve la alerta
//       alert("El nombre de usuario no puede contener caracteres especiales.");
//       return false;
//   }

//   if (password.length < minCaracteres || password.length > maxCaracteres) {
//       alert("La contraseña debe tener un mínimo de 8 caracteres y un máximo de 20 caracteres");
//       return false;
//   } else if (!validarContrasena(password)) {
//       alert("La contraseña debe contener al menos una minúscula, una mayúscula, un número y un carácter especial.");
//       return false;
//   } 
// }