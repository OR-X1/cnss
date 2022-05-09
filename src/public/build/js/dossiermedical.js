import {dossiermedicals} from "./class.js";
import {detailsmaladie} from "./class.js";
//ajouter patient
document.querySelector("#ajouter").addEventListener("click",()=>{

    let cnie=document.getElementById("cnie").value;
    let code=document.getElementById("code").value;
    let quantite=document.getElementById("quantite").value;
    let detailsmaladie=document.getElementById("nommaladie").value;
    let status="encours";
     let arraycode = [];
     arraycode.push(code);
     let arrayquantite = [];
     arrayquantite.push(quantite);


            let dossiermedical=new dossiermedicals();
            dossiermedical=new dossiermedicals(cnie,arraycode,arrayquantite,detailsmaladie,status);
            dossiermedical.ajouterdossiermedicals();
            
            alert("dossiermedical ajouté");
});
//afficher tous les dossier medicals
window.addEventListener("load", async()=>{ 

    let dossiermedical=new dossiermedicals();
    let dossier = await dossiermedical.afficheralldossiermedicals();
    let bodytable=document.getElementById("bodytable");
    
    dossier.data.forEach(element => {

        bodytable.innerHTML+=`
        <tr>
        <td>${element.cnie}</td>
        <td>${element.code}</td>
        <td>${element.quantite}</td>
        <td>${element.remboursement} DH</td>
        <td>${element.status}</td>
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

    //remplire select type maladie
    let typemaladie=new detailsmaladie();
    let type = await typemaladie.afficheralldetailsmaladie();
    let select=document.getElementById("typemaladie");

    type.data.forEach(element => {
        select.innerHTML+=`
        <option value="${element.type}">${element.type}</option>
        `
    }
    );

});


//remplire select nom maladie
document.getElementById("typemaladie").addEventListener("change", async ()=>{
    let idtype=document.getElementById("typemaladie").value;
    let typemaladie=new detailsmaladie();
    let type = await typemaladie.afficheralldetailsmaladie(); 
    let select=document.getElementById("nommaladie");
    select.innerHTML+="";
    type.data.forEach(element => {
        if(element.type==idtype){
        select.innerHTML+=`
        <option value="${element._id}">${element.nom}</option>
        `
        }
    }
    );
});



const SupprimerFunction = () =>{
    let id;
    document.querySelectorAll('.delete').forEach(Element =>{
            Element.addEventListener('click', async ()=>{
                 id=Element.getAttribute('data-type');
            })
    });
    document.querySelector("#supprimer").addEventListener("click",()=>{
                let dossier=new dossiermedicals();
                dossier.supprimerdossiermedicals(id);
                alert("dossiermedicals supprimer");
    });

}



// modifie une patients
const ModifieFunction =  () =>{
    document.querySelectorAll('.edit').forEach(Element =>{

            Element.addEventListener('click', async ()=>{
                let id=Element.getAttribute('data-type');
                let dossier=new dossiermedicals();
                let dossiers=await dossier.affcherdossiermedicals(id);

                document.getElementById("dcnie").value= dossiers.data.cnie;
                document.getElementById("dcode").value= dossiers.data.code;
                document.getElementById("dquantite").value= dossiers.data.quantite;
                document.getElementById("id").value = id;
            })

        });
}

//modifier patients
const updateFunction = () =>{
    document.querySelectorAll('#modifier').forEach(Element =>{
        Element.addEventListener('click', async ()=>{
            
            let id=document.getElementById("id").value;
            let cnie=document.getElementById("dcnie").value;
            let code=document.getElementById("dcode").value;
            let quantite=document.getElementById("dquantite").value;
            let detailsmaladie="";
            let status=document.getElementById("status").value;
            let  dossier=new dossiermedicals();
            dossier=new dossiermedicals(cnie,code,quantite,detailsmaladie,status);
            dossier.modifierdossiermedicals(id);

           alert("dossiermedicals modifié");
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