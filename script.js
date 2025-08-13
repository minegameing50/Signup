function validateSignup(event) {
    event.preventDefault(); // Stop form from submitting

    const fullName = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const otp = document.getElementById("otp").value.trim();
    const password = document.getElementById("password").value;

    // Full name
    if (fullName === "") {
        alert("Full name is required.");
        return false;
    }

    // Username
    if (username === "") {
        alert("Username is required.");
        return false;
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Mobile
    if (!/^\d{10}$/.test(mobile)) {
        alert("Mobile number must be exactly 10 digits.");
        return false;
    }

    // OTP
    if (!/^\d{4}$/.test(otp)) {
        alert("OTP must be exactly 4 digits.");
        return false;
    }

    // Password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // ✅ Passed all validations
    alert("Signup successful!");
    window.location.href = "https://yourwebsite.com/welcome.html"; // Change link to your target page
    return true;
}
