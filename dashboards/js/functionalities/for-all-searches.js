const searchACompany = document.getElementById('search-a-company');

const searchACompanyButton = document.getElementById('search-a-company-button');

const companyList = document.getElementById('company-list');

userDropDown = () =>{
    companyList.innerHTML =`
    
    <option value="Becky@gmail.com">Becky</option>
    <option value="Agatevureglory@gmail.com">Glory</option>
    <option value="Justin@gmail.com">Justin</option>
    <option value="Ikpejs@gmail.com">Mercyikpe</option>
    <option value="lovisgod94@gmail.com">Loveisgod</option>`;
    console.log(searchACompany.value);
  }

  searchACompanyButton.addEventListener('click', function(e){
    e.preventDefault();
    console.log(searchACompany.value);
  });