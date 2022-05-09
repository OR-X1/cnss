import {dossiermedicals} from "./class.js";
//afficher tous les dossier medicals
window.addEventListener("load", async()=>{ 

    let  getJson = localStorage.getItem('cnie')
    let dossiermedical=new dossiermedicals();
    let dossier = await dossiermedical.afficheralldossiermedicals();
    let bodytable=document.getElementById("bodytable");
    
    dossier.data.forEach(element => {
        if(element.cnie==getJson){
            bodytable.innerHTML+=`
            <tr>
            <td>${element.cnie}</td>
            <td>${element.code}</td>
            <td>${element.quantite}</td>
            <td>${element.remboursement} DH</td>
            <td>${element.status}</td>
            </tr>
            ` 
        }
    });

});

//logout
document.getElementById('logout').addEventListener('click', (e) => {
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    localStorage.removeItem("role")
    localStorage.removeItem("cnie")
    localStorage.clear();
    window.location.href = "../../index.html"
})