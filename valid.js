

 function validateForm() {
		

        // Clear previous error messages
        document.getElementById('emailError').textContent = "";
        document.getElementById('passwordError').textContent = "";

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let valid = true;

        // Validate email
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            document.getElementById('emailError').textContent = "Please enter a valid email address.";
            valid = false;
        }

        // Validate password
        if (password.length < 6) {
            document.getElementById('passwordError').textContent = "Password must be at least 6 characters long.";
            valid = false;
        }

        // Check email and password
        const correctEmail = "ihshaon.sg@gmail.com";
        const correctPassword = "Shaon@123456";

        if (valid) {
            if (email === correctEmail && password === correctPassword) {
                alert("Login successful!");
            } else {
                alert("Invalid email or password.");
            }
        } 
    }