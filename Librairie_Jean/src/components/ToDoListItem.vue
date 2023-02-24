<script setup>
defineProps(["livre"]);
const emit = defineEmits(["deleteC", "faireC","decreC"]);
</script>

<template>
  <li>
   
    <!-- cette fois en param du handler 
          on n'utilise pas l'index dans le tableau
          mais directement l'id de la chose
    -->
    <button @click="$emit('deleteC', livre.id)">Supprimer</button>
    <!-- cette fois en param du handler 
          on n'utilise pas l'index dans la tableau 
          mais directement la chose à modifier
    -->
    <button @click="$emit('faireC', livre)">
      +1
    </button>

    <button @click="$emit('decreC', livre)">
      -1
    </button>

    {{ livre.pourAfficher() }}
  </li>
</template>

<style scoped>
li {
  
  margin: auto;
  margin-bottom: 50px;
  padding: auto;
  width: 70%;
  font-family:  Georgia, serif;
  color: white;
  background-color: rgb(1, 7, 98);
  transition: all 0.2s ease-in-out;
  border: solid 2px white;
  box-shadow: rgba(2, 154, 60, 0.007) 0px 0px 0px 2px inset, rgb(223, 220, 220) 10px -10px 0px -3px, rgb(212, 211, 211) 10px -10px, rgb(141, 140, 140) 20px -20px 0px -3px, rgb(125, 125, 124) 20px -20px, rgb(94, 94, 94) 30px -30px 0px -3px, rgb(70, 70, 70) 30px -30px;;
}

li:hover {
  transform: scale(1.3);
  background-color: #7dcdcd(130, 92, 147);
  box-shadow: 2px 2px 5px black;
  
}

button {
  display: inline-block;
  
  margin: 1%;
  font-size: 10px;
  text-transform: uppercase;
  color: white;
  background-color: #00BFFF;
  border-radius: 10%;
  box-shadow: 1px 1px 3px #00BFFF;
  transition: all 0.3s ease-in-out;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 4px 4px 10px #00BFFF;
  cursor: pointer;
}
</style>
