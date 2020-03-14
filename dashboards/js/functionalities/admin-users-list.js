//Template to make naming easy ;)
//const  = document.getElementById("");

const userList = document.getElementById("user-list");

const searchInput = document.getElementById("search-input");

const searchButton = document.getElementById("search-button");


const createUser = (data) => {
        const el = `<ul class="list-group">
        <li class="list-group-item">Name: ${data.name}</li>
        <li class="list-group-item">E-mail: ${data.email}</li>
        <li class="list-group-item"><a href="admin-view-user-profile.html" class="btn btn-success">View</a></li>
        </ul><br>`;
      return el;
};

//list users on the platform

const fetchUsers = () => {
    const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("login.html");
    }
    const url = "https://corporate-setup.herokuapp.com/api/v1/admin/list-user"
   fetch(url, {
      method:"GET", 
      headers: new Headers({
    'Authorization': `Bearer ${theToken}`
    }),
   })
  .then(res => res.json())
  .then(x => {
    const el = [];  
    if (x.status != 'error') {
        x.data.forEach(d => {
            const user = createUser(d);
            el.push(user)
        });
        userList.innerHTML = el;
    } else if (x.status == 'error') {
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      if (authErrors.includes(message)) { window.location.replace("../../login.html") }
      alert(message);
    }
  })
}

fetchUsers();
