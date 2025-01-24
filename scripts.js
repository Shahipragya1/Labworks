function validateForm() { 
    // Validation for first name and last name 
    var firstName = document.getElementById('firstName').value; 
    var lastName = document.getElementById('lastName').value; 
    if (firstName.trim() === '' || lastName.trim() === '') { 
        alert('First name and last name cannot be blank.'); 
        return false; 
    } 

    // Validation for address, city, state, and zip code 
    var address = document.getElementById('address').value; 
    var city = document.getElementById('city').value; 
    var state = document.getElementById('state').value; 
    var zipCode = document.getElementById('zipCode').value; 
    if (address.trim() === '' || city.trim() === '' || state.trim() === '' || zipCode.trim() === '') { 
        alert('Address, city, state, and zip code cannot be blank.'); 
        return false; 
    } 

    // Validation for phone number 
    var phone = document.getElementById('phone').value; 
    if (!/^\d{10}$/.test(phone)) { 
        alert('Please enter a valid 10-digit phone number.'); 
        return false; 
    } 

    // Validation for email address 
    var email = document.getElementById('email').value; 
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) { 
        alert('Please enter a valid email address.'); 
        return false; 
    } 

    // Validation for birth date 
    var birthDate = document.getElementById('birthDate').value; 
    var currentDate = new Date().toISOString().split('T')[0]; 
    if (birthDate > currentDate) { 
        alert('Please enter a valid birth date.'); 
        return false; 
    } 

    // Display confirmation 
    document.getElementById('confirmFirstName').textContent = firstName; 
    document.getElementById('confirmLastName').textContent = lastName; 
    document.getElementById('confirmAddress').textContent = address; 
    document.getElementById('confirmCity').textContent = city; 
    document.getElementById('confirmState').textContent = state; 
    document.getElementById('confirmZipCode').textContent = zipCode; 
    document.getElementById('confirmPhone').textContent = phone; 
    document.getElementById('confirmEmail').textContent = email; 
    document.getElementById('confirmBirthDate').textContent = birthDate; 
    document.getElementById('confirmMessage').textContent = document.getElementById('message').value; 

    // Show confirmation page 
    document.getElementById('userForm').style.display = 'none'; 
    document.getElementById('confirmation').style.display = 'block'; 

    return false; // Prevent form submission 
} 