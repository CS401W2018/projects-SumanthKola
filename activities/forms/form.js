document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const pword = document.getElementById('pword').value;
    const formData = {
        fname:fname,
        lname:lname,
        pword:pword
    }
    if (!fname || !lname) {
        alert("First name and Last Name required");
        return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            message - JSON.parse(xhr.response)
            document.getElementById("message").innerHTML = response.message;
            document.getAnimations("myForm").innerHTML = "";
            alet('Subbmitted.');
        } else if (xhr.readyState === 4) {
            alert('Error Submitting Form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});