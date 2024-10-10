    document.getElementById('email').onclick = function() {
        this.style.borderColor = '#0866f';
        document.getElementById('password').style.borderColor = ''; // Reset password field
   
    };

    document.getElementById('password').onclick = function() {
        this.style.borderColor = 'blue';
        document.getElementById('email').style.borderColor = ''; // Reset password field
   
    };