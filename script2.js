document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    // Clear any previous error styles
    nameField.classList.remove('error');
    emailField.classList.remove('error');
    messageField.classList.remove('error');

    // Validate form fields
    let hasError = false;
    formMessage.textContent = '';

    if (nameField.value.trim() === '') {
        nameField.classList.add('error');
        formMessage.textContent = 'Please fill out all fields correctly.';
        hasError = true;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
        emailField.classList.add('error');
        formMessage.textContent = 'Please enter a valid email address.';
        hasError = true;
    }

    if (messageField.value.trim() === '') {
        messageField.classList.add('error');
        formMessage.textContent = 'Please fill out all fields correctly.';
        hasError = true;
    }

    if (!hasError) {
        // If validation passes, send the email using SMTP.js
        Email.send({
            SecureToken: "678991b8-a205-4cd8-a620-cf8dba64ad91",  // Replace with your SMTP.js Secure Token
            To: "abrahamayesoro@gmail.com",              // Replace with the email where you want to receive the form data
            From: "abrahamayesoro@gmail.com",             // Use the user's email as the "From" address
            Subject: `New Contact Form Submission from ${nameField.value.trim()}`,
            Body: `Name: ${nameField.value.trim()}<br>
            Email: ${emailField.value.trim()}<br>
            Message: ${messageField.value.trim()}`
        }).then(function(message) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message has been sent successfully",
          showConfirmButton: false,
          timer: 1500
        });
            // Reset the form after successful submission
            document.getElementById('contactForm').reset();
        }).catch(function(error) {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Failed to send email. Please try again later.';
        });
    }
});
