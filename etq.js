"use strict"
var image = document.getElementById('text');
var header = document.getElementById('header');
var header_buttons = document.getElementsByClassName('header_buttons');

window.addEventListener('scroll', function(){
	var y = this.scrollY;
	if(y !== 0){
		header.style.backgroundColor = "rgba(256, 256, 256, 0.95)";
		for(var i = 0; i < header_buttons.length; i++){
			header_buttons[i].style.color = 'black';
			console.log('yes');
		}
	} else {
		header.style.backgroundColor = "rgba(256, 256, 256, 0.2)";
		for(var i = 0; i < header_buttons.length; i++){
			header_buttons[i].style.color = 'white';
		}
	}
}, true);