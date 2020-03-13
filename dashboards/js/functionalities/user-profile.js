//Template to make naming easy ;)
//const  = document.getElementById("");

const searchInput = document.getElementById("search-input");

const searchButton = document.getElementById("search-button");

const profilePicture = document.getElementById("profile-picture");

const uploadPicButton = document.getElementById("upload-profile-picture-button");

const userProfileDetails = document.getElementById("user-profile-details");
const userName = document.getElementById("username__");
const phone = document.getElementById("phone__");
const email = document.getElementById("email__");
const _status = document.getElementById("status__");
const _name = document.getElementById("name__");


const getProfile = () => {
    const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("../login.html");
    }
    const url = "https://corporate-setup.herokuapp.com/api/v1/user/profile"
   fetch(url, {
      method:"GET", 
      headers: new Headers({
    'Authorization': `Bearer ${theToken}`
    }),
   })
  .then(res => res.json())
  .then(x => {
    if (x.status != 'error') {
      userName.innerHTML = `USername: <span style = "color: green;">${x.data.profile.username}</span>`;
      phone.innerHTML = `Phone: <span style = "color: green;">${x.data.profile.phone}</span>`;
      _name.innerHTML = `Name: <span style = "color: green;">${x.data.profile.name}</span>`;
      email.innerHTML = `Email: <span style = "color: green;">${x.data.profile.email}</span>`;
      _status.innerHTML = `Status: <span style = "color: green;">${x.data.profile.status}</span>`
    } else if (x.status == 'error') {
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      if (authErrors.includes(message)) { window.location.replace("../../login.html") }
      alert(message);
    }
  })
}

getProfile();

