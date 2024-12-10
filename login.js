
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === '112233') {
        alert('Login successful!');
        
        window.location.href = "hm.html"; 
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});