
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === '112233') {
        alert('Login successful!');
        // Redirect to the home page
        window.location.href = "hm.html"; // Replace 'home.html' with the actual path to your home page
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});