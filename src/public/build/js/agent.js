import {agent} from "./class.js";

//ajouter agent

document.querySelector("#ajouter").addEventListener("click",()=>{

    let nom=document.getElementById("nom").value;
    let prenom=document.getElementById("prenom").value;
    let email=document.getElementById("email").value;
    let tel=document.getElementById("tel").value;
    let agence=document.getElementById("agence").value;
    let ville=document.getElementById("ville").value;

            let agents=new agent();
            agents=new agent(nom,prenom,email,tel,agence,ville);
            agents.ajouteragent(); 
            
            alert("agent ajouté");
});



//afficher tous les agents
window.addEventListener("load", async()=>{  
    let agents = new agent();
    let agentss = await agents.afficherallagents();
    let bodytable=document.getElementById("bodytable");
    
    agentss.data.forEach(element => {
        bodytable.innerHTML+=`
        <tr>
        <td>${element.nom}</td>
        <td>${element.prenom}</td>
        <td>${element.email}</td>
        <td>${element.tel}</td>
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
                let agents=new agent();
                agents.supprimeragent(id);
                alert("agent supprimer");
    });

}




// modifie une agents
const ModifieFunction =  () =>{
    document.querySelectorAll('.edit').forEach(Element =>{
            Element.addEventListener('click', async ()=>{
                let id=Element.getAttribute('data-type');
                let agents=new agent();
                let agentss=await agents.affcheragent(id);

                document.getElementById("nnom").value= agentss.data.nom;
                document.getElementById("nprenom").value = agentss.data.prenom;
                document.getElementById("nemail").value = agentss.data.email;
                document.getElementById("ntel").value =agentss.data.tel;
                document.getElementById("nagence").value = agentss.data.agence;
                document.getElementById("nville").value = agentss.data.ville;
                document.getElementById("id").value = id;

            })
        });
}

//modifier agents
const updateFunction = () =>{
    document.querySelectorAll('#modifier').forEach(Element =>{
        Element.addEventListener('click', async ()=>{
            let nom=document.getElementById("nnom").value;
            let prenom=document.getElementById("nprenom").value;
            let email=document.getElementById("nemail").value;
            let tel=document.getElementById("ntel").value;
            let agence=document.getElementById("nagence").value;
            let ville=document.getElementById("nville").value;
            let id=document.getElementById("id").value;

            let  agents=new agent();
            agents=new agent(nom,prenom,email,tel,agence,ville);
            agents.modifieragent(id);

           alert("agent modifié");
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
