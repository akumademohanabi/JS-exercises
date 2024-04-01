"use strict";



function Pullsite() {

	let omikuji = ["大吉","吉","中吉","小吉","末吉","凶","大凶"];
	let random = Math.floor( Math.random() * omikuji.length) ;
	document.getElementById("result").innerHTML = omikuji[random];

    var textForm = document.getElementById("itemName");
    textForm.value = '';
}

