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
  margin-bottom: 20px;
  padding: auto;
  width: 50%;
  font-family:  Georgia, serif;
  color: white;
  background-color: rgba(117, 110, 110, 0.753);
  transition: all 0.5s ease-in-out;
}

li:hover {
  transform: scale(1.3);
  background-color: #7dcdcd(130, 92, 147);
  box-shadow: 2px 2px 5px #00BFFF;
  
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
