const url = "https://corporate-setup.herokuapp.com/api/v1/user/signup";
const submitSignup = document.getElementById('signup-button');

submitSignup.addEventListener('click', function(e){
    e.preventDefault();
    
    const signupName = document.getElementById('signup-name').value;
    
    const signupUsername = document.getElementById('signup-username').value;
    
    const signupEmail = document.getElementById('signup-email').value;

    const signupPhoneNumber = document.getElementById('signup-phone-number').value;
    
    const signupPassword = document.getElementById('signup-pass').value;
    
    const signupConfirmPassword = document.getElementById('signup-confirm-pass').value;

 if (signupConfirmPassword === signupPassword) {
  let formData = new FormData();
  formData.append('name', signupName);
  formData.append('email', signupEmail);
  formData.append('username', signupUsername);
  formData.append('phone', signupPhoneNumber);
  formData.append('password', signupPassword);
  formData.append('role', 'user')
  fetch(url, {method:"POST", body:formData})
  .then(res => res.json())
  .then(x => {
    console.log(x.data);
    if (x.status != 'error') {
      // similar behavior as an HTTP redirect
    //  localStorage.setItem('token', x.data); 
     alert(x.data.message);
     window.location.replace("login.html");
    } else {
      alert(JSON.stringify(x.error));
    }
  })
 } else {
   alert ('password and confirm password must match')
 }
  
})
