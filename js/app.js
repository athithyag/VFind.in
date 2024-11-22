document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
  
    // Select input elements by their IDs
    const nameInput = document.getElementById('Name');
    const emailInput = document.getElementById('Email-1');
    const messageInput = document.getElementById('Message');
  
    // Send email using SMTPJS
    Email.send({
      SecureToken: "83d1d6ed-39bd-474e-8cc4-e69d44d59009", // Replace with your SecureToken
      To: 'vandhana.jayakumar1106@gmail.com',
      From: emailInput.value,
      Subject: "Contact Form Submission",
      Body: `Name: ${nameInput.value}<br>Email: ${emailInput.value}<br>Message: ${messageInput.value}`
    }).then(
      () => document.getElementById("alert").showModal() // Show the alert modal
    ).catch(
      error => console.error("Error sending email:", error)
    );
  });
  
  // Handle focus and blur for inputs
  const inputs = document.querySelectorAll("#Name, #Email-1, #Message");
  
  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
  
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
      parent.classList.remove("focus");
    }
  }
  
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
  
  // Notify function to close the alert modal
  function notify() {
    document.getElementById("alert").close();
  }
  