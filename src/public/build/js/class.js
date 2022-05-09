const url="http://localhost:4000"

//classe agent 
export class agent{

    //les attributes
    nom;
    prenom;
    email;
    tel;
    agence;
    ville;

    //declaration de constructeur
    constructor (n,p,e,t,a,v)
    {
            this.nom=n;
            this.prenom=p;
            this.email=e;
            this.tel=t;
            this.agence=a;
            this.ville=v;
    }

    //ajour d'un nouvelle agent par apport au role
    ajouteragent(){
        let  data={
              nom:this.nom,
              prenom:this.prenom,
              email:this.email,
              tel:this.tel,
              agence:this.agence,
              ville:this.ville
          }
       axios.post(`${url}/api/agents/store`,data);
    }

    
     //afficher des agents
     afficherallagents(){
      let aff= axios.get(`${url}/api/agents/`);
      return aff
  }

  //afficher par id agent
  affcheragent(id){
    let aff= axios.get(`${url}/api/agents/${id}`);
    return aff
}


  //supprimer agent
  supprimeragent(id){
       axios.delete(`${url}/api/agents/${id}`);
  }


  //modifier agent
  modifieragent(id){
    let  data={
              nom:this.nom,
              prenom:this.prenom,
              email:this.email,
              tel:this.tel,
              agence:this.agence,
              ville:this.ville
    }

     axios.put(`${url}/api/agents/updateagent/${id}`,data);
 }

 
}



//classe patient 
export class patient{

  //les attributes
  nom;
  prenom;
  cin;
  cnie;
  tel;
  adress;
  email;
  password;
  situationfamiliale;
  conjoint;
  nombreenfants;
  enfants;
  agence;
  ville;

  //declaration de constructeur
  constructor (n,pr,c,cn,t,ad,e,p,sf,cj,nbre,ef,a,v)
  {
          this.nom=n;
          this.prenom=pr;
          this.cin=c;
          this.cnie=cn;
          this.tel=t;
          this.adress=ad;
          this.email=e;
          this.password=p;
          this.situationfamiliale=sf;
          this.conjoint=cj;
          this.nombreenfants=nbre;
          this.enfants=ef;
          this.agence=a;
          this.ville=v;
  }

   

  //ajour d'un nouvelle patient 
  ajouterpatient(){
      let  data={
            nom:this.nom,
            prenom:this.prenom,
            cin:this.cin,
            cnie:this.cnie,
            tel:this.tel,
            adress:this.adress,
            email:this.email,
            password:this.password,
            situationfamiliale:this.situationfamiliale,
            conjoint:this.conjoint,
            nombreenfants:this.nombreenfants,
            enfants:this.enfants,
            agence:this.agence,
            ville:this.ville
        }
     axios.post(`${url}/api/patients/store`,data);
  }

  
   //afficher des patient
   afficherallpatients(){
    let aff= axios.get(`${url}/api/patients/`);
    return aff
}

//afficher par id patient
affcherpatient(id){
  let aff= axios.get(`${url}/api/patients/${id}`);
  return aff
}


//supprimer patient
supprimerpatient(id){
     axios.delete(`${url}/api/patients/${id}`);
}


//modifier patient
modifierpatient(id){
  let  data={
         nom:this.nom,
         prenom:this.prenom,
         cin:this.cin,
         cnie:this.cnie,
         tel:this.tel,
         adress:this.adress,
         email:this.email,
         situationfamiliale:this.situationfamiliale,
         conjoint:this.conjoint,
         nombreenfants:this.nombreenfants,
         enfants:this.enfants,
         agence:this.agence,
         ville:this.ville
  }

   axios.put(`${url}/api/patients/updatepatient/${id}`,data);
}

 //count 
 countpatient(){
  let aff= axios.get(`${url}/api/patients/countpatient`);
  return aff
}


}




//classe detailsmaladie 
export class detailsmaladie{

   //les attributes
   type;
   nom;
   code;
   prix;
   remboursement;
 
   //declaration de constructeur
   constructor (t,n,c,p,r)
   {
               this.type=t;
               this.nom=n;
               this.code=c;
               this.prix=p;
               this.remboursement=r;

   }
 
    
 
   //ajour d'un nouvelle detailsmaladie 
   ajouterdetailsmaladie(){
       let  data={
               type:this.type,
               nom:this.nom,
               code:this.code,
               prix:this.prix,
               remboursement:this.remboursement
         }
      axios.post(`${url}/api/detailsmaladies/store`,data);
   }
 
   
    //afficher des detailsmaladie
    afficheralldetailsmaladie(){
     let aff= axios.get(`${url}/api/detailsmaladies/`);
     return aff
 }
 
 //afficher par id detailsmaladie
 affcherdetailsmaladie(id){
   let aff= axios.get(`${url}/api/detailsmaladies/${id}`);
   return aff
 }
 
 
 //supprimer detailsmaladie
 supprimerdetailsmaladie(id){
      axios.delete(`${url}/api/detailsmaladies/${id}`);
 }
 
 
 //modifier detailsmaladie
 modifierdetailsmaladie(id){
   let  data={
            type:this.type,
            nom:this.nom,
            code:this.code,
            prix:this.prix,
            remboursement:this.remboursement
   }
 
    axios.put(`${url}/api/detailsmaladies/updatedetailsmaladie/${id}`,data);
 }
 
 
  //count 
  countdetails(){
    let aff= axios.get(`${url}/api/detailsmaladies/countdetails`);
    return aff
  }
  
 }


 
//classe dossiermedicals 
export class dossiermedicals{

   //les attributes
   cnie;
   code;
   quantite;
   detailsmaladies;
   status;
 
   //declaration de constructeur
   constructor (cn,cd,q,dm,s)
   {
               this.cnie=cn;
               this.code=cd;
               this.quantite=q;
               this.detailsmaladies=dm;
               this.status=s;

   }
 
   //ajour d'un nouvelle dossiermedicals 
   ajouterdossiermedicals(){
       let  data={
               cnie:this.cnie,
               code:this.code,
               quantite:this.quantite,
               detailsmaladies:this.detailsmaladies,
               status:this.status

         }
     
      axios.post(`${url}/api/dossiermedicals/store`,data);
   }
 
   
    //afficher des dossiermedicals
    afficheralldossiermedicals(){
     let aff= axios.get(`${url}/api/dossiermedicals/`);
     return aff
 }
 
 //afficher par id dossiermedicals
 affcherdossiermedicals(id){
   let aff= axios.get(`${url}/api/dossiermedicals/${id}`);
   return aff
 }
 
 
 //supprimer dossiermedicals
 supprimerdossiermedicals(id){
      axios.delete(`${url}/api/dossiermedicals/${id}`);
 }
 
 
 //modifier dossiermedicals
 modifierdossiermedicals(id){
   let  data={
            cnie:this.cnie,
            code:this.code,
            quantite:this.quantite,
            detailsmaladies:this.detailsmaladies,
            status:this.status
   }
 
    axios.put(`${url}/api/dossiermedicals/updatedossiermedical/${id}`,data);
 }
 

 //count 
 countdossier(){
  let aff= axios.get(`${url}/api/dossiermedicals/countdossier`);
  return aff
}
 
 }


 export class authentification{
 //authentification
authentification = async(email,password,role,cnie)=>{
  let  data={
            email:email,
            password:password,
            cnie:cnie
  }

 const res=await  axios .post(`${url}/api/${role}/login`,data);

   if(res.data.id!=undefined){
      localStorage.setItem('id',res.data.id),
      localStorage.setItem('role',res.data.role),
      localStorage.setItem('cnie',res.data.cnie),
      localStorage.setItem('token',res.data.token)
      
       return true;
   }else{
       return false;
   }
  

}
 
}