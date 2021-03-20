// let barva = document.querySelector(“p”);
// barva.classList.add(“cerveny”);

function ztucni(udalost) {
    udalost.target.style.fontWeight = "bold";
}

function neztucni(udalost) {
    udalost.target.style.fontWeight = "normal";
}

//měním odstavec na červenou barvu
var odstavec;
odstavec = document.querySelector("p");


function zcervenej(udalost) {
    odstavec.classList.add("cerveny");
}

//zvětšení písma o 1px
var odstavec;
odstavec = document.querySelector("p");


function zvetsi(udalost) {
    odstavec.classList.add("vetsi");
}

//nastavení zvukové stopy


/**
 * Funkce, která přehraje předaný prvek
 * @param {string} elementSelector 
 */

 //Přehrávací button
function prehraj(elementSelector) {

	let audioElement = document.querySelector(elementSelector);
	audioElement.play();
}
//Pauzovací button
function pauzni(elementSelector) {

	let audioElement = document.querySelector(elementSelector);
	audioElement.pause();
}
//Zvuk se ztiší
function sound_0(elementSelector) {

	let audioElement = document.querySelector(elementSelector);
	audioElement.volume = 0;
}

//Zvuk se zesílí napůl
function sound_05(elementSelector) {

	let audioElement = document.querySelector(elementSelector);
	audioElement.volume = 0.5;
}

//Zvuk se zmaximalizuje
function sound_1(elementSelector) {

	let audioElement = document.querySelector(elementSelector);
	audioElement.volume = 1;
}

//Skladba se vrátí na začátek
function zacatek(elementSelector) {

	let audioElement = document.querySelector(elementSelector);
	audioElement.currentTime = 0;
}




