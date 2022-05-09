import {detailsmaladie} from "./class.js";

//ajouter patient
document.querySelector("#ajouter").addEventListener("click",()=>{

    let type=document.getElementById("type").value;
    let nom=document.getElementById("nom").value;
    let code=document.getElementById("code").value;
    let prix=document.getElementById("prix").value;
    let remboursement=document.getElementById("remboursement").value;
 

            let detailsmaladies=new detailsmaladie();
            detailsmaladies=new detailsmaladie(type,nom,code,prix,remboursement);
            detailsmaladies.ajouterdetailsmaladie();
            
            alert("detailsmaladie ajouté");
});
//afficher tous les patients
window.addEventListener("load", async()=>{  
    let detailsmaladies=new detailsmaladie();
    let detailss = await detailsmaladies.afficheralldetailsmaladie();
    let bodytable=document.getElementById("bodytable");
    
    detailss.data.forEach(element => {

        bodytable.innerHTML+=`
        <tr>
        <td>${element.type}</td>
        <td>${element.nom}</td>
        <td>${element.code}</td>
        <td>${element.prix}</td>
        <td>${element.remboursement}</td>
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
                let detailss=new detailsmaladie();
                detailss.supprimerdetailsmaladie(id);
                alert("detailsmaladie supprimer");
    });

}




// modifie une patients
const ModifieFunction =  () =>{
    document.querySelectorAll('.edit').forEach(Element =>{
            Element.addEventListener('click', async ()=>{
                let id=Element.getAttribute('data-type');
                let details=new detailsmaladie();
                let detailss=await details.affcherdetailsmaladie(id);

                document.getElementById("ttype").value= detailss.data.type;
                document.getElementById("tnom").value= detailss.data.nom;
                document.getElementById("tcode").value= detailss.data.code;
                document.getElementById("tprix").value= detailss.data.prix;
                document.getElementById("tremboursement").value= detailss.data.remboursement;
                document.getElementById("id").value = id;

            })
        });
}

//modifier patients
const updateFunction = () =>{
    document.querySelectorAll('#modifier').forEach(Element =>{
        Element.addEventListener('click', async ()=>{
            
            let id=document.getElementById("id").value;
            let type=document.getElementById("ttype").value;
            let nom=document.getElementById("tnom").value;
            let code=document.getElementById("tcode").value;
            let prix=document.getElementById("tprix").value;
            let remboursement=document.getElementById("tremboursement").value;
   
            let  details=new detailsmaladie();
            details=new detailsmaladie(type,nom,code,prix,remboursement);
            details.modifierdetailsmaladie(id);

           alert("detailsmaladie modifié");
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

