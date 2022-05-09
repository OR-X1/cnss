import {patient} from "./class.js";


//afficher tous les patients
window.addEventListener("load", async()=>{  
    let patients = new patient();
    let patientss = await patients.afficherallpatients();
    let bodytable=document.getElementById("bodytable");
    let sconjoint;
    let senfants;
    patientss.data.forEach(element => {

        if(element.conjoint==""){
            sconjoint="sans";
        }else{
            sconjoint=element.conjoint;
        }

        if(element.enfants==""){
            senfants="sans";

         }else{
            senfants=element.enfants;
         }

        bodytable.innerHTML+=`
        <tr>
        <td>${element.nom}</td>
        <td>${element.prenom}</td>
        <td>${element.cin}</td>
        <td>${element.cnie}</td>
        <td>${element.tel}</td>
        <td>${element.adress}</td>
        <td>${element.email}</td>
        <td>${element.situationfamiliale}</td>
        <td>${sconjoint}</td>
        <td>${element.nombreenfants}</td>
        <td>${senfants}</td>
        <td>${element.agence}</td>
        <td>${element.ville}</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-type=${element._id} data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-type=${element._id} data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
        </tr>
        ` 
    });

    SupprimerFunction();
    updateFunction();
    ModifieFunction();
});


const SupprimerFunction = () =>{
    let id;
    document.querySelectorAll('.delete').forEach(Element =>{
            Element.addEventListener('click', async ()=>{
                 id=Element.getAttribute('data-type');
            })
    });
    document.querySelector("#supprimer").addEventListener("click",()=>{
                let patients=new patient();
                patients.supprimerpatient(id);
                alert("patient supprimer");
    });

}




// modifie une patients
const ModifieFunction =  () =>{
    document.querySelectorAll('.edit').forEach(Element =>{
            Element.addEventListener('click', async ()=>{
                let id=Element.getAttribute('data-type');
                let patients=new patient();
                let patientss=await patients.affcherpatient(id);

                document.getElementById("nom").value= patientss.data.nom;
                document.getElementById("prenom").value = patientss.data.prenom;
                document.getElementById("cin").value= patientss.data.nom;
                document.getElementById("cnie").value = patientss.data.prenom;
                document.getElementById("tel").value = patientss.data.tel;
                document.getElementById("adress").value = patientss.data.adress;
                document.getElementById("email").value =patientss.data.email;
                document.getElementById("situationfamiliale").value =patientss.data.situationfamiliale;
                if(patientss.data.conjoint==""){
                    document.getElementById("conjoint").value = "sans";
                }else{
                    document.getElementById("conjoint").value =patientss.data.conjoint;
                }

                document.getElementById("enfants").value =patientss.data.nombreenfants;
                document.getElementById("agence").value = patientss.data.agence;
                document.getElementById("ville").value = patientss.data.ville;
                document.getElementById("id").value = id;

            })
        });
}

//modifier patients
const updateFunction = () =>{
    document.querySelectorAll('#modifier').forEach(Element =>{
        Element.addEventListener('click', async ()=>{
            let nom=document.getElementById("nom").value;
            let prenom=document.getElementById("prenom").value;
            let cin=document.getElementById("cin").value;
            let cnie=document.getElementById("cnie").value;
            let tel=document.getElementById("tel").value;
            let adress=document.getElementById("adress").value;
            let email=document.getElementById("email").value;
            let situationfamiliale=document.getElementById("situationfamiliale").value;
            let conjoint=document.getElementById("conjoint").value;
            let enfants=document.getElementById("enfants").value;
            let agence=document.getElementById("agence").value;
            let ville=document.getElementById("ville").value;
            let id=document.getElementById("id").value;
            let pass="";
            let arrayenfants=[];

    //verifier le nombre enfants
    if(enfants==""){
          enfants=0;
    }
   
   for (let index = 0; index < enfants; index++) {
         arrayenfants.push(document.getElementById("e"+index).value);
   }

   
            let  patients=new patient();
            patients=new patient(nom,prenom,cin,cnie,tel,adress,email,pass,situationfamiliale,conjoint,enfants,arrayenfants,agence,ville);
            patients.modifierpatient(id);

           alert("patient modifié");
    });
});


}


//logout
document.getElementById('logout').addEventListener('click', (e) => {
  localStorage.removeItem("token")
  localStorage.removeItem("id")
  localStorage.removeItem("role")
  localStorage.removeItem("cnie")
  localStorage.clear();
  window.location.href = "../../index.html"
})