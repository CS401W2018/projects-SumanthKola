document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value.trim();

    if (!username || !email || !age) {
        alert('Please fill out all fields.');
        return;
    }
    if (age < 18 || age > 100) {
        alert('Age must be between 18 and 100.');
        return;
    }

    const formData = {
        username: username,
        email: email,
        age: age
    };
    console.log('Form Data:', formData);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'form.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('response').innerText = response.message;
            document.getElementById('myForm').reset();
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send();
});