
// Validation

document.addEventListener('DOMContentLoaded' ,function(){
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const Number = document.getElementById('Number');
    const messages = document.getElementById('message');
    const form = document.getElementById('submit_form');
    
    
    form.addEventListener('submit', (e) =>{

        let error = [];

        if (name.value === '' || /^\d+$/.test(name.value)){
            error.push('Name is required and must not be a number');
        }
            
        if (email.value === '' || !isValidEmail(email.value)) {
            error.push('Email is required and must be a valid email address');
        }

        if (Number.value === '' || isNaN(Number.value)) {
            error.push('Phone number is required and must be a number')
        }

        if (messages.value === ''){
            error.push('message is required');
        }

        if (error.length > 0) {
            e.preventDefault();
            alert(error.join ('\n'));
            e.preventDefault();
        }
    })
        
// Email validation check
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    
    }
});








  
