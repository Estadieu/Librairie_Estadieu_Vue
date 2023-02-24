<script setup>
import { reactive, onMounted } from "vue";
import ToDoListItem from "./ToDoListItem.vue";
import ToDoForm from "./ToDoForm.vue";
import ToDoRecherche from "./ToDoRecherche.vue";
import Livre from "../Livre";

const listeC = reactive([]);

// -- l'url de l'API
let url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/17/livres";

// -- handle pour supprimer une Livre à prtir de l'id de la Livre
function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  // -- l'id de la Livre à supprimer doit être
  //  ajouté à la fin de l'url
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getTodos();
    })
    .catch((error) => console.log(error));
}
// -- handle pour ajouter une nouvelle Livre à prtir du libelle saisi dans le formulaire
function handlerAdd(titre, quantite, prix) {
  console.log(titre);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // --  le libelle de la nouvelle Livre est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ titre: titre,qtestock: quantite,prix: prix }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getTodos();
    })
    .catch((error) => console.log(error));
}

function handlerRecherche(motsCle) {
  
  let myHeaders = new Headers();
  url= url+ "?search="+ motsCle;
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = { method: "GET" , headers: myHeaders};
  fetch(url , fetchOptions)
    .then((response) => {
      console.log(url + "?search="+ motsCle)
      return response.json();
    })
    .then((dataJSON) => {
      // -- vider la liste des Livres  
      getTodos();
    })
    .catch((error) => console.log(error));
  }


  
  function handlerFaire(livre) {
  console.log(livre); 
  let id = livre.id
  let titre = livre.titre
  let prix = livre.prix

  let qtestock = livre.qtestock+1; 


  let myHeaders = new Headers(); 
  myHeaders.append("Content-Type", "application/json"); 
  const fetchOptions = {
    method: "PUT",
    headers : myHeaders,
    body: JSON.stringify({id: id, titre: titre, qtestock: qtestock, prix:  prix}),
  };

  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
     getTodos(); 
  })
    .catch((error) => console.log(error));
}



function handlerDecr(livre) {
  console.log(livre); 
  let id = livre.id
  let titre = livre.titre
  let prix = livre.prix
  let qtestock = livre.qtestock-1; 

  if(qtestock >0){
    let myHeaders = new Headers(); 
  myHeaders.append("Content-Type", "application/json"); 
  const fetchOptions = {
    method: "PUT",
    headers : myHeaders,
    body: JSON.stringify({id: id, titre: titre, qtestock: qtestock, prix:  prix}),
  };

  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
     getTodos(); 
  })
    .catch((error) => console.log(error));

  }else{
    handlerDelete(id);
  }
}





// -- req AJAX pour récupérer les todos
//    et les stocker dans le state listeC
function getTodos() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- vider la liste des Livres
      listeC.splice(0, listeC.length);
      // pour chaque donnée renvoyée par l'API
      //  créer un objet instance de la classe Livre
      //  et l'ajouter dans la liste listeC
      dataJSON.forEach((v) => listeC.push(new Livre(v.id, v.titre, v.qtestock, v.prix)));
      url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/17/livres";
    })
    .catch((error) => console.log(error));
}
// -- fonction du cycle de vie du composant
// exécutée 1 seule fois à la création
onMounted(() => {
  getTodos();
});
</script>

<template>
  
  <div class="container">
  
  <ToDoForm @addC="handlerAdd"></ToDoForm>
  

  <ul>
    <ToDoListItem
      v-for="livre of listeC"
      :key="livre.id"
      :livre="livre"
      @deleteC="handlerDelete"
      @faireC="handlerFaire"
      @decreC="handlerDecr"
    />
    
  </ul>
  <ToDoRecherche @recherche="handlerRecherche"></ToDoRecherche>
</div>
</template>

<style scoped>
.container{
  margin: auto;
  margin-top: -3%;
  width: 80%;
  border: solid 10px black(114, 113, 113, 0.753);
  transition: all 2.5s ease-in-out;
  border-radius: 10%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  
}

.container:hover{
  margin: auto;
  margin-top: -3%;
  background: rgb(1, 7, 98);
  width: 90%;
  border: solid px black;
  
  box-shadow: 4px 4px 10px #00BFFF;
  
  
}


ul{
  list-style-type: none;
  margin: auto;
  
}
</style>
