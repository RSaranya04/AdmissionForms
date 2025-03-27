function validateForm() {
    let name = document.getElementById("name").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let gender = document.getElementById("gender").value.trim();
    let classSelected = document.getElementById("class").value;
    let fatherName = document.getElementById("fatherName").value.trim();
    let motherName = document.getElementById("motherName").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value.trim();
    let zip = document.getElementById("zip").value.trim();

    if (name === "" || dob === "" || gender === "" || classSelected === "" || 
        fatherName === "" || motherName === "" || phone === "" || email === "" ||
        address === "" || city === "" || state === "" || zip === "") {
        alert("All fields must be filled!");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address!");
        return false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number!");
        return false;
    }

    let zipPattern = /^[0-9]{5,6}$/;
    if (!zip.match(zipPattern)) {
        alert("Please enter a valid ZIP Code!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
