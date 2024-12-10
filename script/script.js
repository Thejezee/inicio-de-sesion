document.getElementById('generateEmail').addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value.trim().toLowerCase();
    const lastName = document.getElementById('lastName').value.trim().toLowerCase();
    const emailField = document.getElementById('email');

    if (firstName && lastName) {
        emailField.value = `${firstName}.${lastName}@example.com`;
    } else {
        alert("Por favor, completa los campos de Nombre y Apellido antes de generar el correo.");
    }
});

// Validar contraseña al enviar el formulario de registro
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const password = document.getElementById('password').value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (!passwordRegex.test(password)) {
        alert("La contraseña no cumple con los requisitos de seguridad.");
        return;
    }

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
});

// Validar inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simulación de credenciales válidas
    const validEmail = "usuario@example.com";
    const validPassword = "Pass@123";

    if (email === validEmail && password === validPassword) {
        window.location.href = "https://thejezee.github.io/johnnie-walker/";
    } else {
        document.getElementById('error-message').style.display = "block";
    }
});