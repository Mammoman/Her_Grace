

function validateLogin(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginMessage = document.getElementById('login-message');

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === 'Cutie potato' && password === '230809') {
        loginMessage.textContent = 'Identify Confirmed!';
        loginMessage.style.color = 'green';

        // Clear input fields
        usernameInput.value = '';
        passwordInput.value = '';

        // Add a class to initiate the transition
        document.body.classList.add('page-hidden');

        // Redirect to the Valentine's proposal page after a delay (adjust as needed)
        setTimeout(() => {
            window.location.href = 'Loading.html';
        }, 500); // This value should match the transition duration in CSS
    } else {
        loginMessage.textContent = 'Uhh Try harder.';
        loginMessage.style.color = 'red';
    }
}
