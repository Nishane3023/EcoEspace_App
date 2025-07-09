// 1. Manejo del formulario del newsletter
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío tradicional del formulario (recarga de página)
  const email = this.email.value; // Obtiene el valor del campo email del formulario
  if (email) { // Verifica que el email no esté vacío
    alert(`Gracias por suscribirte con: ${email}`); // Muestra mensaje de confirmación
    this.reset(); // Limpia todos los campos del formulario
  }
});

// 2. Manejo del boton de Login
document.getElementById('loginBtn').addEventListener('click', () => {
  alert('Redirigiendo a Iniciar Sesión'); // Simula redirección mostrando alerta
});

// 3. Manejo del botón de Registro
document.getElementById('registerBtn').addEventListener('click', () => {
  alert('Redirigiendo a Registrarse'); // Simula redirección mostrando alerta
});

/*
NOTAS:
- El código JavaScript maneja la interactividad de la página, como el envío del formulario de newsletter y los botones de autenticación.
- Se utiliza `addEventListener` para escuchar eventos de envío del formulario y clics en los botones.
- El navegador trae una validacion nativa para el campo de email, por lo que no es necesario agregar validaciones adicionales, 
porque el campo esta definido como type="email" lo que activa validaciones automáticas del navegador.
    


*/