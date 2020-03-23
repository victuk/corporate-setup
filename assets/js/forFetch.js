const url = "https://corporate-setup.herokuapp.com/api/v1/user/login"
const submitLogin = document.getElementById('login-button');



    

submitLogin.addEventListener('click', function(e){
    e.preventDefault();
    
    const loginEmail = document.getElementById('login-email').value;

    const loginPassword = document.getElementById('login-pass').value;

    const loginCheckBox = document.getElementById('login-check-box');

    if(loginCheckBox.checked){
      const params = {
        email: loginEmail,
        password: loginPassword
      };
      console.log(JSON.stringify(params))
      let formData = new FormData();
      formData.append('email', loginEmail);
      formData.append('password', loginPassword);
      fetch(url, {method:"POST", body:formData})
      .then(res => res.json())
      .then(x => {
        console.log(x.data);
        if (x.status != 'error') {
          // similar behavior as an HTTP redirect
         localStorage.setItem('token', x.data);
         localStorage.setItem('role', 'user'); 
         window.location.replace("/dashboards/company-profile.html");
        } else {
          alert(x.error.username);
        }
      })
    }
    else{
      console.log(false);
      alert("Please check the terms and condition box.");
    }

  
  
})
