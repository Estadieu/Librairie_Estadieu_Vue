<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const motsCle = ref("");


const emit = defineEmits(["recherche"]);
</script>

<template>
  <form @submit.prevent="$emit('recherche',motsCle )">
    <div class="form-group">
      <input class ="ligne" type="text" v-model="motsCle" placeholder="Titre du livre" />
    </div>
      
    <input type="submit" value="rechercher" />
  </form>
</template>

<style scoped>
form {
        width: 25%;
        margin: 20px auto;
        text-align: center;
      }
      
      input[type="text"],
      textarea {
        width: 40%;
        padding:3px;
        
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.753);
        font-size: 16px;
        transition: all 0.3s ease-in-out;
      }
      
      input[type="text"]:focus,
     
      textarea:focus {
        
        outline: none;
      }
      
      input[type="submit"] {
        padding: 5px 10px;
        border-radius: 5px;
        background-color: rgb(1, 7, 98);
        color: white;
        border: none;
        font-size: 13px;
        
        transition: all 0.3s ease-in-out;
      }
      
      input[type="submit"]:hover {
        background-color: rgb(124, 120, 125);
      }
      
      .form-group {
        margin: 10px 0;
      }


      
    


</style>
