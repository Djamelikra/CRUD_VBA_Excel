$(document).ready(function(){
  alert("CRUD");

});




let names = [];

function addUserInfo(){
    let userAdd = document.getElementById('userInput').value;
    //check if the input field is empty then do nothing
    if(userAdd!=''){
    names.push(userAdd);
    showUserInfo();
    }
    else{
      alert("Veuillez rentrer un nom")
    }
}


// function showUserInfo(){
//     let addNewName='';
//     let counter = 0;
//     names.forEach(name => 
//         addNewName += `
//         <li class="list-group-item m-1">
//             <p class="display-4">${word}<span class="float-end"><button value="${counter++}" onClick="removeName(this)"  class="btn btn-danger">X</button></span></p>
//         </li>
//         `
//         );
//         document.getElementById("display").innerHTML=addNewName;
//         document.getElementById('userInput').value = null;
// }


//function that will show the values contained in the word variable
function showUserInfo(){
    let addNewName= "";
    for(let i = 0;i<names.length;i++){
        addNewName += `
                <li class="list-group-item m-1">
                    <p class="display-6">${names[i]}<span class="float-end"><button value="${i}" onClick="removeName(this)"  class="btn btn-danger">X</button></span></p>
                </li>
        `;
    };
    document.getElementById("display").innerHTML=addNewName;
    document.getElementById('userInput').value = null;
}

function removeName(btnValue){
        names.splice(parseInt(btnValue.value),1);
        showUserInfo();
}

function removeName(e){
        names.splice(parseInt(e.value),1);
        showUserInfo();
}