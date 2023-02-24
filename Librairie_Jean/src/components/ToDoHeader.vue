<template>
  <div class="header">
  <div>
    <p>La librairie de jean </p>
    </div>
  </div>
  
</template>

<style scoped>
.header {
        
        text-align: center;
        height: 100px;
        width: 70%;
        margin:auto;
        background-color: rgb(1, 7, 98);
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
      }
   

      div {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        
      }
      p {
        font-family: Geneva, sans-serif;
        font-style: oblique 60deg;
        font-size: 4em;
        text-transform: uppercase;
        background: linear-gradient(60deg, #00BFFF, #fff, #004b64);
        background-repeat: no-repeat;
        background-size: 70%;
        animation: animate 10s infinite;
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
