/* Author:Fernanda Anahi Flores
Name File:mis3371homework2.html
Date Created:6/22/26
Date Updated:
Version:2
Description:MIS Homework Assignment 3 requiring a registration form */

    function validateFirstName(fname) {
      const firstName = document.getElementById('fname').value;
      const regex = /^[A-Za-z'-]{1,30}$/;
      }
      if (regex.test(firstName)) 
        alert('First name is valid!');
       { else 
        window.alert('Please enter a valid first name (1 to 30 characters, letters, apostrophes, and dashes only).');
      }
    
    function validateLastName(lname) {
      const lastname= document.getElementById('lname').value;
      const regex = /^[A-Za-z'-]{1,30}$/;
      if (regex.test(lname)) {
        window.alert('Last name is valid');{
          else }
          alert ('Please enter a valid Last Name).');
      }
      }
