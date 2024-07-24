function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.ri-earth-line')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function validateForm() {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  if (name === null || name.trim() === '') {
      alert('Please enter a valid name.');
      return false;
  }

  // Regular expression for a basic Gmail address format
  var emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

  if (email === null || email.trim() === '' || !emailRegex.test(email)) {
      alert('Please enter a valid Gmail address.');
      return false;
  }

  // If both name and email are valid, you can proceed with further actions
  // ...
  else{
  alert("Request sent successfully")
}

  return true;
}