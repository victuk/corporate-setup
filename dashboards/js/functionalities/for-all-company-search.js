const searchInput = document.getElementById("search-a-company");

const searchButton = document.getElementById("search-a-company-button");

const listCompanies = document.getElementById("company-list");


userDropDown = () =>{
  listCompanies.innerHTML =`
  
  <option value="Becky@gmail.com">Becky</option>
  <option value="Agatevureglory@gmail.com">Glory</option>
  <option value="Justin@gmail.com">Justin</option>
  <option value="Ikpejs@gmail.com">Mercyikpe</option>
  <option value="lovisgod94@gmail.com">Loveisgod</option>`;
  console.log(searchInput.value);
}

//list users on the platform

searchButton.addEventListener('click', function(e){
  e.preventDefault();
  console.log(searchInput.value);
});

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
    // const searchUser = `<input class="form-control mr-sm-2" type="search" id="search-input" placeholder="Search" aria-label="Search">
    // <button class="btn btn-outline-success my-2 my-sm-0" id="search-button" type="submit">Search</button>`;
  
  })
}

fetchUsers();


// fetch(url, {
//   method: 'GET',
// }).then(function (json) {
//   for (var i = 0; i< json.length; i++) {
//       var option = "<option value="+json[i]+'" >'+json[i]+'</option>';
//       dataList.appendChild(option);     
//       console.log(option);           
//   }

//   console.log(document.getElementById("datalist")); //returns null


// return (
// <div>
//   <input type="text" id="fetchList" placeholder="Select one..."  list="datalist" />
//   <datalist id="datalist"></datalist>
// </div>

// )
// }