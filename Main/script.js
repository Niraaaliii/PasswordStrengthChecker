function checkPasswordStrength(password) {
    // Regular expressions to check for different criteria
    const regex = {
      lowercase: /[a-z]/,
      uppercase: /[A-Z]/,
      numeric: /[0-9]/,
      specialChars: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
      length: /.{8,}/
    };
  
    // Check for each criteria
    let strength = 0;
    if (regex.lowercase.test(password) || regex.uppercase.test(password) ) strength += 0.5;
    if (regex.lowercase.test(password) && regex.uppercase.test(password) ) strength ++;
    if (regex.numeric.test(password) || regex.specialChars.test(password)) strength+= 0.5;
    if (regex.numeric.test(password) && regex.specialChars.test(password)) strength++;
    if (regex.specialChars.test(password)) strength++;
    if (regex.length.test(password)) strength++;
  
    // Return the strength score
    return strength;
  }
  