const updateButton = document.getElementById('form-update-button');

const companyPhoneNumber = document.getElementById('companyInputPhoneNumber');

const companyEmail = document.getElementById('companyInputEmail');

const companyName = document.getElementById('companyInputName');

const uploadPicture = document.getElementById('upload-profile-picture-button');

const companyBriefSummary = document.getElementById('company-brief-summary');

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
      companyName.value = `${x.data.profile.name}`;
      companyPhoneNumber.value = `${x.data.profile.phone}`;
    //   email.value = `Email: <span style = "color: green;">${x.data.profile.email}</span>`;
    companyBriefSummary.value = `${x.data.profile.companyBriefDescription}`;
    } else if (x.status == 'error') {
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      if (authErrors.includes(message)) { window.location.replace("../login.html") }
      alert(message);
    }
  })
}

getProfile();

updateButton.addEventListener('click', function(e){
    e.preventDefault();
    console.log(companyBriefSummary.value);
    const updateProfile = (companyPhoneNumber, companyName, companyBriefSummary) => {
        const theToken = localStorage.getItem('token');
        if (!theToken) {
          alert('Please Login')
          window.location.replace("login.html");
        }
        console.log(email, service);
        const url = "https://corporate-setup.herokuapp.com/api/v1/user/update-user"
      let formData = new FormData();
      formData.append('company_phone_number', companyPhoneNumber);
      formData.append('company_name', companyName);
      formData.append('company_summary', companyBriefSummary);
      fetch(url, {
          method:"POST", 
          body:formData, 
          headers: new Headers({
        'Authorization': `Bearer ${theToken}`
        }),
    })
      .then(res => res.json())
      .then(x => {
        console.log(x.data);
        if (x.status != 'error') {
          alert(x.data)
          window.location.replace("company-profile.html")
        } else if (x.status == 'error') {
          const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
          if (authErrors.includes(message)) { window.location.replace("../login.html") }
          alert(message);
        }
      })
    }
});