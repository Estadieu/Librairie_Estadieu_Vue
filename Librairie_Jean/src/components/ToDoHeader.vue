<template>
  <div class="header">
  <div>
    <p>La librairie de jean </p>
    </div>
  </div>
  
</template>

<style scoped>
.header {
        background-color: #00BFFF;
        text-align: center;
        height: 100px;
      }
      div {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: #00BFFF;
      }
      p {
        font-family: Geneva, sans-serif;
        font-style: oblique 40deg;
        font-size: 4em;
        text-transform: uppercase;
        background: linear-gradient(90deg, #00BFFF, #fff, #004b64);
        background-repeat: no-repeat;
        background-size: 70%;
        animation: animate 15s infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: rgba(255, 255, 255, 0);
        box-shadow: 4px 4px 10px rgba(255, 255, 255, 0);
      }
      @keyframes animate {
        0% {
          background-position: -300%;
        }
        100% {
          background-position: 300%;
        }
      }
</style>
