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

background_img.className = 'show_elements images';

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

men_button.addEventListener("mouseover", function(){
	changeColorOfHeaderButton('black');
	header.style.backgroundColor = 'white';
	men_extend.style.display = 'block';

	var showMenExtends = function(){
		hideAllExtends();
		changeColorOfHeaderButton('black');
		header.style.backgroundColor = 'white';
		men_extend.style.display = 'block';
	};

	$('#first_header_extend').hover(showMenExtends, function(){
		console.log('not hover');
		changeColorOfHeaderButton('white');
		header.style.backgroundColor = 'transparent';
		men_extend.style.display = 'none';
		$(this).unbind('mouseenter mouseleave');
	})
})

men_button.addEventListener("mouseout", function(){
	changeColorOfHeaderButton('white');
	header.style.backgroundColor = 'transparent';
	men_extend.style.display = 'none';
});

women_button.addEventListener("mouseover", function(){
	changeColorOfHeaderButton('black');
	header.style.backgroundColor = 'white';
	women_extend.style.display = 'block';

	var showWomenExtends = function(){
		hideAllExtends();
		changeColorOfHeaderButton('black');
		header.style.backgroundColor = 'white';
		women_extend.style.display = 'block';
	};

	$('#second_header_extend').hover(showWomenExtends, function(){
		console.log('not hover');
		changeColorOfHeaderButton('white');
		header.style.backgroundColor = 'transparent';
		women_extend.style.display = 'none';
	})
	
})

women_button.addEventListener("mouseout", function(){
	changeColorOfHeaderButton('white');
	header.style.backgroundColor = 'transparent';
	women_extend.style.display = 'none';
});

collection_button.addEventListener("mouseover", function(){
	changeColorOfHeaderButton('black');
	header.style.backgroundColor = 'white';
	collection_extend.style.display = 'block';

	var showWomenExtends = function(){
		hideAllExtends();
		changeColorOfHeaderButton('black');
		header.style.backgroundColor = 'white';
		collection_extend.style.display = 'block';
	};

	$('#third_header_extend').hover(showWomenExtends, function(){
		console.log('not hover');
		changeColorOfHeaderButton('white');
		header.style.backgroundColor = 'transparent';
		collection_extend.style.display = 'none';
	})
	
})

collection_button.addEventListener("mouseout", function(){
	changeColorOfHeaderButton('white');
	header.style.backgroundColor = 'transparent';
	collection_extend.style.display = 'none';
});

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