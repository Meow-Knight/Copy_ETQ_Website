"use strict"
var image = document.getElementById('text');
var header = document.getElementById('header');
var header_button_containter = document.getElementById('header_button_container');
var header_buttons = document.getElementsByClassName('header_buttons');
var men_button = document.getElementById('btMen');
var women_button = document.getElementById('btWomen');
var collection_button = document.getElementById('btCollection');
var background_img = document.getElementById('first_background_image');
var men_extend = document.getElementById('first_header_extend');
var women_extend = document.getElementById('second_header_extend');
var collection_extend = document.getElementById('third_header_extend');

var extend_buttons = [men_button, women_button, collection_button];
var header_extends = [men_extend, women_extend, collection_extend];

background_img.className = 'show_elements images';

// change color of header when scroll down
window.addEventListener('scroll', function(){
	var y = this.scrollY;
	if(y !== 0){
		header_button_containter.style.backgroundColor = "rgba(256, 256, 256, 0.95)";
		changeColorOfHeaderButton('black');
	} else {
		header_button_containter.style.backgroundColor = "rgba(256, 256, 256, 0.2)";
		changeColorOfHeaderButton('white');
	}
}, true);


var j;

// show extend when hover on it (men, women, collection button)
for(var i = 0; i < extend_buttons.length; i++){

	extend_buttons[i].addEventListener("mouseover", function(){
		if(this.id === 'btMen'){
			j = 0;
		} else if (this.id === 'btWomen'){
			j = 1;
		} else {
			j = 2;
		}

		changeColorOfHeaderButton('black');
		header_extends[j].style.display = 'block';
		header.style.backgroundColor = 'white';

		var divId = '#' + header_extends[j].id;
		$(divId).hover(function(){
			hideAllExtends();
			var y = window.scrollY;
			if(y !== 0){
				changeColorOfHeaderButton('white');
			} else {
				changeColorOfHeaderButton('black');
			}
			header.style.backgroundColor = 'white';
			header_extends[j].style.display = 'block';
		}, function(){
			var y = window.scrollY;
			if(y !== 0){
				changeColorOfHeaderButton('black');
			} else {
				changeColorOfHeaderButton('white');
			}
			header.style.backgroundColor = 'transparent';
			header_extends[j].style.display = 'none';
			$(this).unbind('mouseenter mouseleave');
		})
	})

	this.addEventListener("mouseout", function(){
		if(typeof(j) === 'undefined' || header_extends[j].style.display === 'none'){
			return;
		}

		changeColorOfHeaderButton('white');
		header.style.backgroundColor = 'transparent';
		header_extends[j].style.display = 'none';
	});
}

function changeColorOfHeaderButton(color){
	for(var i = 0; i < header_buttons.length; i++){
		header_buttons[i].style.color = color;
	}
}

function hideAllExtends(){
	men_extend.style.display = 'none';
	women_extend.style.display = 'none';
	collection_extend.style.display = 'none';
}