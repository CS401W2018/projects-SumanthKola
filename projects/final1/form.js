document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country').value;
    const terms = document.querySelector('input[name="terms"]:checked');

    if (!username || !email) {
        alert('Please fill out all fields.');
        return;
    }
    if (!terms) {
        alert('You must agree to the terms and conditions.');
        return;
    }

    if (phone && phone.length !== 10) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }
    const formData = {
        username: username,
        email: email,
        phone: phone,
        gender: gender ? gender.value : '',
        country: country,
        comments: document.getElementById('comments').value
    };
    console.log('Form Data:', formData);

    const response = {
        message: 'Form submitted successfully. Thank you for signing up!'
    };

    document.getElementById('response').innerText = response.message;
    
    document.getElementById('myForm').reset();
});