<template>
 <footer>
  <div class="box">
  <div class="inner">
    <span>Nos incontournables</span>
  </div>
  <div class="inner">
    <span>Nos incontournables</span>
  </div>
</div>
  <div class="container">
    <ul>
      <li><a href="https://fr.wikipedia.org/wiki/Le_Seigneur_des_anneaux">Le Seigneur des Anneaux</a></li>
      <li><a href="https://fr.wikipedia.org/wiki/Harry_Potter">Harry Potter</a></li>
      <li><a href="https://fr.wikipedia.org/wiki/1984_(roman)">1984</a></li>
      <li><a href="https://fr.wikipedia.org/wiki/Les_Mis%C3%A9rables">Les Misérables</a></li>
      <li><a href="https://fr.wikipedia.org/wiki/Orgueil_et_Pr%C3%A9jug%C3%A9s">Orgueil et Préjugés</a></li>
    </ul>
  </div>
  
</footer>
 
</template>
  
  <style scoped>
  footer {
  
  background-color: rgb(1, 7, 98);
  padding: 10px 0;
  text-align: center;
  width: 70%;
  margin: auto;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

footer ul {
  list-style: none;
  margin: auto;
  margin-top: -2%;
  margin-left: 4%;
  padding: 2;
}



footer li {
  display: inline-block;
  margin-right: 3%;
 
  
}

footer li:last-child {
  margin-right: 0;
}

footer a {
  color: #666;
  text-decoration: none;
}

footer a:hover {
  color: white;
}


html,
body {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
}

.box {
	display: flex;
  margin-left: 3%;
}

.box .inner {
  
	width: 10%;
  box-shadow: 8px 8px 20px #00BFFF;
	height: 40px;
	line-height: 50px;
	font-size: 1em;
	font-family: sans-serif;
	font-weight: bold;
	white-space: nowrap;
	overflow: hidden;
 
}

.box .inner:first-child {
	background-color: #00BFFF;
	color: white;
	transform-origin: right;
	transform: perspective(100px) rotateY(-15deg);
}

.box .inner:last-child {
	background-color: white;
	color: #00BFFF;
	transform-origin: left;
	transform: perspective(100px) rotateY(15deg);
}

.box .inner span {
	position: absolute;
	animation: marquee 5s linear infinite;
}

.box .inner:first-child span {
	animation-delay: 2.5s;
	left: -100%;
}

@keyframes marquee {
	from {
		left: 100%;
	}

	to {
		left: -100%;
	}
}
 
  </style>
  