var e = document.getElementById("country");
var result = e.options[e.selectedIndex].value;



function getIndex(){ 
    const selectOption = document.getElementById("sector");
    let selected = selectOption.options[selectOption.selectedIndex].value;
    let showProduct = document.getElementById("show_product");
    
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
        showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="8" value="8"> OPEN A COMPANY BANK ACCOUNT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="6" value="6"> OFFICE ACQUISITION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="14" value="14"> REGISTER WITH NAFDAC</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="13" value="13"> REGISTER COMPANY WITH STATE PAYEE</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="12" value="12"> REGISTER COMPANY WITH A PENSION ADMINISTRATOR</div> 

</div>`;
    }
    if(selected == 5){
    
    showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="2" value="2"> DEPARTMENT OF PETROLEUM REGISTRATION/LICENSE</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="4" value="4"> NIMASA REGISTRATION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="5" value="5"> NIPEX REGISTRATION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="9" value="9"> OPEN A CURRENT ACCOUNT WITH A NIGERIAN BANK</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="8" value="8"> OPEN A COMPANY BANK ACCOUNT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="6" value="6"> OFFICE ACQUISITION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="13" value="13"> REGISTER COMPANY WITH STATE PAYEE</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="12" value="12"> REGISTER COMPANY WITH A PENSION ADMINISTRATOR</div> 

</div>`;
    }
    if(selected == 6){
    
    showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="2" value="2"> DEPARTMENT OF PETROLEUM REGISTRATION/LICENSE</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="9" value="9"> OPEN A CURRENT ACCOUNT WITH A NIGERIAN BANK</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="8" value="8"> OPEN A COMPANY BANK ACCOUNT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="7" value="7"> OFFICE ACQUISITION/OFFICE EQUIPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="13" value="13"> REGISTER COMPANY WITH STATE PAYEE</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="12" value="12"> REGISTER COMPANY WITH A PENSION ADMINISTRATOR</div> 

</div>`;
    }

}
