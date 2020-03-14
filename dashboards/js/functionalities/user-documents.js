//Template to make naming easy ;)
//const  = document.getElementById("");

const authErrors = ['Authentication required', 'Please Login to perform this operation']

const cardTitle = document.getElementById("card-title");

const cardDescription = document.getElementById("card-description");

const shareCardButton = document.getElementById("share-card-button");

const deleteCardButton = document.getElementById("delete-card-button");

const modalShareButton = document.getElementById("modal-share-button");

const modalConfirmDeleteButton = document.getElementById("modal-confirm-delete-button");

const uploadDocumentButton = document.getElementById("upload-document-button");

const recipientName = document.getElementById("recipient-name");

const cardContainer = document.getElementById("card_container");

const documentTextTitle = document.getElementById("Document-title");

const theFileItself = document.getElementById("upload-document-button2");

const modalUploadButton = document.getElementById("upload-document-modal-button");





const inflateCard = (data) => {
    const el = ` <div class="col-sm-6">
    <div class="card" id ="${data.uuid}" data-file= "${data.file}">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        
        <a href="#" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">Share</a>
        <a href="#" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">Delete</a>
        <!-- Second card ends here -->


    <!-- Modal for the second cards' share button starts here -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Share To...</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Recipients E-mail:</label>
            <input type="text" class="form-control" id="recipient-name" style="border:1px solid green;" autofocus>
          </div>
          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Share</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal for second cards' share button ends here -->

<!-- Modal for second button delete button starts here -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Delete Document</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Are you sure you want to delete this document?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
        <button type="button" class="btn btn-success">Yes</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal for second button delete ends here -->
      </div>
    </div>
  </div>`;
  return el;
};




const fetchDocuments = () => {
    const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("login.html");
    }
    const url = "https://corporate-setup.herokuapp.com/api/v1/list-documents"
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
            const x = inflateCard(d);
            el.push(x)
        });
        cardContainer.innerHTML = el;
    } else if (x.status == 'error') {
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      if (authErrors.includes(message)) { window.location.replace("../../login.html") }
      alert(message);
    }
  })
}

// upload a file 
const uploadDocuments = () => {
  console.log(theFileItself.files[0])
  const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("login.html");
    }
    const url = "https://corporate-setup.herokuapp.com/api/v1/user/upload"
    const formData = new FormData();
    formData.append('title', documentTextTitle.value)
    formData.append('type', 'uploaded')
    formData.append('file', theFileItself.files[0])
   fetch(url, {
      method:"POST", 
      headers: new Headers({
    'Authorization': `Bearer ${theToken}`
    }),
   })
  .then(res => res.json())
  .then(x => {
    if (x.status != 'error') {
        location.reload()
    } else if (x.status == 'error') {
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      if (authErrors.includes(message)) { window.location.replace("../../login.html") }
      alert(message);
    }
  })
}

fetchDocuments();
modalUploadButton.addEventListener('click', () => uploadDocuments())
