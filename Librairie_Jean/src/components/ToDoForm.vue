<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const titre = ref("");
const quantite = "";
const prix = "";
const emit = defineEmits(["addC"]);
</script>

<template>
  <form @submit.prevent="$emit('addC', titre,quantite,prix )">
    <input class ="ligne" type="text" v-model="titre" placeholder="titre" />
    <input class ="ligne" type="integer" v-model="quantite" placeholder="quantite" />
    <input class ="ligne" type="integer" v-model="prix" placeholder="prix" />
    
    <input  class= "bout" type="submit" value="Ajouter" />
  </form>

</template>

<style scoped>
form {
        width: 500px;
        margin: 50px auto;
        text-align: center;
      }

      .bout {
  display: inline-block;
  margin: 10px;
  font-size: 15px;
  
  color: rgb(243, 238, 238);
  background-color: #00BFFF;
 
  
  transition: all 0.3s ease-in-out;
}

.bout:hover {
  transform: translateY(-3px);
  box-shadow: 4px 4px 10px black;
  cursor: pointer;
}
</style>
