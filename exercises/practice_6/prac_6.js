"use strict";

function btnClick(){
 let wordValue = document.getElementById("wordInput").value;
 let result = document.getElementById("result");
 result.textContent = wordValue;

}

let changeText = document.getElementById("result");

function btnClick1(){
  changeText.classList.remove("change");
  changeText.classList.remove("change2");
  changeText.classList.remove("change3");
  changeText.classList.remove("change4");
  changeText.classList.remove("change5");
}

function btnClick2(){
  changeText.classList.add("change2");
}

function btnClick3(){
  changeText.classList.add("change3");
  }

function btnClick4(){
  changeText.classList.add("change4");
}

function btnClick5(){
  changeText.classList.add("change5");
}