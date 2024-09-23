document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const closeButton = document.querySelector('.close-button');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;

        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(msg) {
            msg.remove();
        });

        // Validate First Name
        const firstName = document.getElementById('first-name').value.trim();
        if (firstName === "") {
            displayError('First Name is required', 'first-name');
            isValid = false;
        }

        // Validate Last Name
        const lastName = document.getElementById('last-name').value.trim();
        if (lastName === "") {
            displayError('Last Name is required', 'last-name');
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value.trim();
        if (email === "") {
            displayError('Email is required', 'email');
            isValid = false;
        } else if (!validateEmail(email)) {
            displayError('Invalid email format', 'email');
            isValid = false;
        }

        // Validate Phone Number
        const phoneNumber = document.getElementById('phone-number').value.trim();
        if (phoneNumber === "") {
            displayError('Phone Number is required', 'phone-number');
            isValid = false;
        } else if (!validatePhoneNumber(phoneNumber)) {
            displayError('Invalid phone number format', 'phone-number');
            isValid = false;
        }

        // Validate Inquiry Type
        const inquiryType = document.querySelector('input[name="inquiry-type"]:checked');
        if (!inquiryType) {
            displayError('Please select an Inquiry Type', 'inquiry-type');
            isValid = false;
        }

        // Validate Message
        const message = document.getElementById('message').value.trim();
        if (message === "") {
            displayError('Message is required', 'message');
            isValid = false;
        }

        if (isValid) {
            successModal.style.display = 'block';
            contactForm.reset();
        }
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        successModal.style.display = 'none';
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target === successModal) {
            successModal.style.display = 'none';
        }
    });

    function displayError(message, elementId) {
        const element = document.getElementById(elementId);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.style.color = 'red';
        errorMessage.textContent = message;
        element.parentNode.appendChild(errorMessage);
    }

    function validateEmail(email) {
        const atSymbol = email.indexOf('@');
        const dot = email.lastIndexOf('.');

        return atSymbol > 1 && dot > atSymbol + 1 && dot < email.length - 1;
    }

    function validatePhoneNumber(phoneNumber) {
        if (phoneNumber.length < 10) return false;

        for (let i = 0; i < phoneNumber.length; i++) {
            if (phoneNumber[i] < '0' || phoneNumber[i] > '9') {
                return false;
            }
        }
        return true;
    }
});


