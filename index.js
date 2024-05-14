document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // You can replace this with your authentication logic
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').innerHTML = 'Login successful!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerHTML = 'Invalid username or password.';
        document.getElementById('message').style.color = 'red';
    }
});
