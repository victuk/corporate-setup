// var e = document.getElementById("country");
// var result = e.options[e.selectedIndex].value;

function getOption() {
    var checkboxes = document.getElementsByName('service[]');
    console.log(checkboxes)
    for(var i=0;i<checkboxes.length;i++){
    checkboxes[i].addEventListener('click', getParent);
  }

  function getParent(){
  console.log(this.value);
 }
}

function getIndex(){ 
    const selectOption = document.getElementById("sector");
    let selected = selectOption.options[selectOption.selectedIndex].value;
    let showProduct = document.getElementById("show_product");
    
    if(selected == 0){
        showProduct.innerHTML = "";
    }
    
    if(selected == 1){
        
        showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="7" value="7"> OFFICE ACQUISITION/OFFICE EQUIPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="8" value="8"> OPEN A COMPANY BANK ACCOUNT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="11" value="11"> REGISTER COMPANY AS A BRAND DEALER</div> 

</div>`; 
    }
    if(selected == 2){
        showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="1" value="1"> CENTRAL BANK LICENSE</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="6" value="6"> OFFICE ACQUISITION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="12" value="12"> REGISTER COMPANY WITH A PENSION ADMINISTRATOR</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="13" value="13"> REGISTER COMPANY WITH STATE PAYEE</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div> 

</div>`; 
    }
    if(selected == 3){
    
    showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="6" value="6"> OFFICE ACQUISITION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="8" value="8"> OPEN A COMPANY BANK ACCOUNT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div> 

</div>`;
    }
    if(selected == 4){
    
        showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="6" value="6"> OFFICE ACQUISITION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="8" value="8"> OPEN A COMPANY BANK ACCOUNT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div> 
    
    </div>`;
        }
        if(selected == 5){
    
            showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="6" value="6"> OFFICE ACQUISITION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="8" value="8"> OPEN A COMPANY BANK ACCOUNT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div> 
        
        </div>`;
            }
            if(selected == 6){
    
                showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="6" value="6"> OFFICE ACQUISITION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="8" value="8"> OPEN A COMPANY BANK ACCOUNT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div> 
            
            </div>`;
                }

                getOption();
}
