function validateForm() {
  const mobile = document.getElementById("mobile").value.trim();
  const otp = document.getElementById("otp").value.trim();
  const password = document.getElementById("password").value;

  // Validate mobile number
  if (!/^\d{10}$/.test(mobile)) {
    alert("Mobile number must be exactly 10 digits.");
    return false;
  }

  // Validate OTP
  if (!/^\d{4}$/.test(otp)) {
    alert("OTP must be exactly 4 digits.");
    return false;
  }

  // Validate password
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  return true; // All validations passed
}
