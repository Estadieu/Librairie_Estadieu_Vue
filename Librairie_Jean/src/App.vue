<script setup>
import ToDoFooter from "./components/ToDoFooter.vue";
import ToDoHeader from "./components/ToDoHeader.vue";
import ToDoList from "./components/ToDoList.vue";
import ToDoDooter from "./components/ToDoFooter.vue";
document.addEventListener("mousemove", function(event) {
  let cursor = document.querySelector(".cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});

</script>

<template>
 
 <div class="cursor-container">
  <ToDoHeader />
  
<div class="cursor"></div>
  <ToDoList />
  <ToDoFooter/>

</div>
</template>

<style scoped>

.cursor-container {
  position: relative;
  height: 100%;
}

.cursor {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #00BFFF;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: cursor-animate 1s infinite;
}

@keyframes cursor-animate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

</style>
