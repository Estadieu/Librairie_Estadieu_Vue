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

  livre.ajouter()
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
  background: rgba(8, 0, 0, 0.753);
  height: 600px;
  border: thick double white;
  
}


ul{
  list-style-type: none;
  margin: auto;
  
}
</style>
