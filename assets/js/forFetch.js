/*const loginUsername = document.getElementById('#login-user').value;

const loginPassword = document.getElementById('#login-pass').value;

const submitLogin = document.getElementById('#login-button').value;

submitLogin.addEventListener('click', function() {
    console.log(loginUsername);
    console.log(loginPassword);
    console.log(submitLogin);
});

*/

/*const submitLogin = document.getElementById('#login-button');

submitLogin.addEventListener('click', function(e){
    e.preventDefault();
    
    const loginUsername = document.getElementById('#login-user').value;
    
    const loginEmail = document.getElementById('#login-email').value;

    const loginPassword = document.getElementById('#login-pass').value;
    */

  const params = {
    email: "olifedayo94@gmail.com",
    password: "Lovisgod94"
  };
  fetch("https://corporate-setup.herokuapp.com/api/v1/user/login", {method:"POST", body:params})
  .then(function(response){
  let res = response.
    console.log(response);
  })
  


  

