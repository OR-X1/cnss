import {patient} from "./class.js";

//ajouter patient
document.querySelector("#ajouter").addEventListener("click",()=>{

    let nom=document.getElementById("nom").value;
    let prenom=document.getElementById("prenom").value;
    let cin=document.getElementById("cin").value;
    let cnie=document.getElementById("cnie").value;
    let tel=document.getElementById("tel").value;
    let adress=document.getElementById("adress").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let situationfamiliale=document.getElementById("situationfamiliale").value;
    let conjoint=document.getElementById("conjoint").value;
    let enfants=document.getElementById("enfants").value;
    let agence=document.getElementById("agence").value;
    let ville=document.getElementById("ville").value;
    let arrayenfants=[];

    //verifier le nombre enfants
    if(enfants==""){
          enfants=0;
    }
   
   for (let index = 0; index < enfants; index++) {
         arrayenfants.push(document.getElementById("e"+index).value);
   }

            let patients=new patient();
            patients=new patient(nom,prenom,cin,cnie,tel,adress,email,password,situationfamiliale,conjoint,enfants,arrayenfants,agence,ville);
            patients.ajouterpatient(); 
      
});
