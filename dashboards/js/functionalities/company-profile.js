//Template to make naming easy ;)
//const  = document.getElementById("");
const authErrors = ['Authentication required', 'Please Login to perform this operation']

// const searchInput = document.getElementById("search-input");

// const searchButton = document.getElementById("search-button");

const profilePicture = document.getElementById("profile-picture");

const uploadPicButton = document.getElementById("upload-profile-picture-button");

const companyProfileDetails = document.getElementById("company-profile-details");

const companyName = document.getElementById("name__");

const phone = document.getElementById("phone__");

const email = document.getElementById("email__");

const briefDescription = document.getElementById("brief-description__");

// const _name = document.getElementById("name__");


const getProfile = () => {
    const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("../../login.html");
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
      companyName.innerHTML = `Company Name: <span style = "color: green;">${x.data.profile.name}</span>`;
      phone.innerHTML = `Phone: <span style = "color: green;">${x.data.profile.phone}</span>`;
      email.innerHTML = `Email: <span style = "color: green;">${x.data.profile.email}</span>`;
      briefDescription.innerHTML = `Brief Company Description: <span style = "color: green;">${x.data.profile.companyBriefDescription}</span>`
    } else if (x.status == 'error') {
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      if (authErrors.includes(message)) { window.location.replace("../login.html") }
      alert(message);
    }
  })
}

getProfile();

