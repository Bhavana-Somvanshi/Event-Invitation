// Function to handle Reply submission with enhanced form validation
function submitReply() {
    // Get input values
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const attendingYes = document.getElementById('yes');
    const attendingNo = document.getElementById('no');

    // Get values from inputs
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const attendingValue = attendingYes.checked ? attendingYes.value : attendingNo.checked ? attendingNo.value : '';

    // Validate inputs
    if (name === '' || email === '' || attendingValue === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If all validation passes, show a confirmation message and reset the form
    const confirmationMessage = attendingValue === 'yes' ? 'Great! We look forward to seeing you at the event.' : 'Thank you for letting us know. We hope to see you at our future events.';
    
    alert(`${confirmationMessage}\n\nName: ${name}\nEmail: ${email}`);
    document.getElementById('reply-form').reset();
}
