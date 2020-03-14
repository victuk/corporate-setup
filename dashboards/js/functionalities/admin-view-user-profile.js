const basicProfile = document.getElementById('user-basic-profile');
console.log(localStorage.getItem('user_id'));


const createUserProfile = (data) => {
    return `<li class="list-group-item">Name: ${data.name}</li>
    <li class="list-group-item"><i class="fa fa-envelope">: </i>${data.email}</li>
    <li class="list-group-item"><i class="fa fa-phone">: </i>${data.phone}</li>
    <li class="list-group-item"><a href="#" class="btn btn-success" id="suspend-user">Suspend</a> <a href="#" class="btn btn-success" id="delete-user">Delete</a></li>`
}



const suspendUserButton = document.getElementById('suspend-user');
const deleteUserButton = document.getElementById('delete-user');