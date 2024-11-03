function checkPassword() {
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    const correctPassword = 'wedding2025';

    if (password === correctPassword) {
        window.location.href = 'mainpage.html';
    } else {
        alert('Incorrect password. Please try again.');
        passwordInput.value = ''; // Clear the password box
    }
}