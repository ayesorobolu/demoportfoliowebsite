
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get form values
//     const nameField = document.getElementById('name');
//     const emailField = document.getElementById('email');
//     const messageField = document.getElementById('message');
//     const formMessage = document.getElementById('formMessage');

//     // Clear any previous error styles
//     nameField.classList.remove('error');
//     emailField.classList.remove('error');
//     messageField.classList.remove('error');

//     // Validate form fields
//     let hasError = false;
//     formMessage.textContent = '';

//     if (nameField.value.trim() === '') {
//         nameField.classList.add('error');
//         formMessage.textContent = 'Please fill out all fields correctly.';
//         hasError = true;
//     }

//     // Simple email validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(emailField.value.trim())) {
//         emailField.classList.add('error');
//         formMessage.textContent = 'Please enter a valid email address.';
//         hasError = true;
//     }

//     if (messageField.value.trim() === '') {
//         messageField.classList.add('error');
//         formMessage.textContent = 'Please fill out all fields correctly.';
//         hasError = true;
//     }

//     if (!hasError) {
//         // If validation passes, send the email using SMTP.js
//         Email.send({
//             Host: "smtp.gmail.com",
//             Username : " ",
//             Password  : " ",
//             // SecureToken: "D77A641BABB31695E3EFA161C03AFDB890EEB87107BFF07CA49D0D1FDBD75918943C256EF84ACE792C7BBA70EA871CE8",  
//             To: "abrahamayesoro@gmail.com",              // Replace with the email where you want to receive the form data
//             From: document.getElementById("email").value,             // Use the user's email as the "From" address
//             Subject: `New Contact Form Submission from ${nameField.value.trim()}`,
//             Body: "Name: " + document.getElementById("name").value + 
//             "<br> Email : " + document.getElementById("email").value +
//             "<br> Message  : " + document.getElementById("message").value 
//             // Body: `Name: ${nameField.value.trim()}<br>Email: ${emailField.value.trim()}<br>Message: ${messageField.value.trim()}`
//         }).then(function(message) {
//             formMessage.style.color = 'green';
//             formMessage.textContent = 'Form submitted successfully and  sent!';
//             // Reset the form after successful submission
//             document.getElementById('contactForm').reset();
//         }).catch(function(error) {
//             formMessage.style.color = 'red';
//             formMessage.textContent = 'Failed to send email. Please try again later.';
//         });
//     }
// });

// const form = document.querySelector("form");

// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "abrahamayesoro@gmail.com",
//         Password : "B0561E0DDE0F18E66D317D54B5C134CBAD07",
//         To : "abrahamayesoro@gmail.com",
//         From : " abrahamayesoro@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//  sendEmail();   
// });






const form = document.querySelector("form");
   const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

function sendEmail(){
    const bodyMessage = `Name: ${nameField.value}<br> 
    Email: ${emailField.value}<br>
    Message: ${messageField.value}`
    Email.send({
      SecureToken : "678991b8-a205-4cd8-a620-cf8dba64ad91",
        To : "abrahamayesoro@gmail.com",
        From :"abrahamayesoro@gmail.com",
        Subject : `New Contact Form Submission from ${nameField.value}`,
        Body : bodyMessage
    }).then(
      message => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message has been sent successfully",
          showConfirmButton: false,
          timer: 1500
        });
        const form = document.querySelector("form").reset();
      }
    );
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();  
});