const animalArray = ["Cat", "Cow", "Dog", "Donkey", "Duck", "Goat", "Goose", "Chicken", "Horse", "Pig", "Sheep", "Turkey", "Armadillo", "Elephant", "Panda", "Giraffe", "Lion", "Monkey"];
const hrefArray = ["./images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg", "./images/amber-kipp-Mm_D_kbvTUM-unsplash.jpg", "./images/karsten-winegeart-NE0XGVKTmcA-unsplash.jpg", "./images/jacques-bopp-tE2rnQHjdv8-unsplash.jpg", "./images/kerin-gedge-JDzoTGfoogA-unsplash.jpg", "./images/marwan-ahmed-_e_fe1OF-AI-unsplash.jpg", "./images/zacke-feller-RD0eB54EvRY-unsplash.jpg", "./images/egor-myznik-WDKEg5sDz0Y-unsplash.jpg", "./images/jacques-bopp-aBKYaN4c25Q-unsplash.jpg", "./images/laura-anderson-CP9GGy_LkIY-unsplash.jpg", "./images/john-fowler-jmYJBQXvLNI-unsplash.jpg", "./images/mana5280-5j1Yn5HHraU-unsplash.jpg", "./images/suzanne-d-williams-JPeXRsEu1NY-unsplash.jpg", "./images/zoe-reeve-9hSejnboeTY-unsplash.jpg", "./images/lukas-w-e3mu-MTj7Xk-unsplash.jpg", "./images/sutirta-budiman-Wdq1B_wZQUQ-unsplash.jpg", "./images/jean-wimmerlin-onzE7gzbyyM-unsplash.jpg", "./images/etienne-delorieux-NZpl4yxYcMg-unsplash.jpg"];

function randNum(number) {
	// Returns a random integer from 0 to (number - 1)
	return Math.floor(Math.random() * number);
}

function generate(){
	let index = randNum(animalArray.length);
	document.getElementById("result").innerHTML = animalArray[index];
	document.getElementById("resultImage").setAttribute("alt", animalArray[index]);
	document.getElementById("resultImage").setAttribute("src", hrefArray[index]);
	document.getElementById("resultsContainer").style.display = "flex";
	document.getElementById("generate").innerHTML = "Again";
	let top = document.getElementById("generatorTop");
	setTimeout(function (){top.scrollIntoView();}, 500)
}