
for (let i=0; i < document.getElementsByClassName('bookctn').length; i++) {
	
	document.getElementsByClassName('bookctn')[i].addEventListener('mouseover', function() {if (window.matchMedia("(max-width: 950px)").matches == false) {document.getElementsByClassName('buy-formats')[i].style.display='flex'}});
	document.getElementsByClassName('bookctn')[i].addEventListener('mouseout', function() {if (window.matchMedia("(max-width: 950px)").matches == false) {document.getElementsByClassName('buy-formats')[i].style.display='none'}});
	}




	const books = document.getElementsByClassName('bookctn');
	const bookSpace = books[1].getBoundingClientRect().left - books[0].getBoundingClientRect().left;
	let absMax = Math.floor((document.querySelector('.cataloguectn').getBoundingClientRect().width)/bookSpace);


	let max;

	if (absMax < 3) {max = 4; absMax = 4;}
	else if (absMax > 5) {max = 5; absMax = 5;}
	else {max = absMax;}


	if (absMax > 1) {
		let gapWidth = (document.querySelector('.cataloguectn').getBoundingClientRect().width - (absMax * books[0].getBoundingClientRect().width))/(absMax - 1);
		document.querySelector('.cataloguectn').style.columnGap = (gapWidth-1) + 'px';
	}




	for (let i=absMax; i < document.querySelector('.cataloguectn').children.length; i++) {
		document.querySelector('.cataloguectn').children[i].style.display = 'none';
	}

	function loadMoreBooks() {
		if (max >= document.querySelector('.cataloguectn').children.length) {
			max = document.querySelector('.cataloguectn').children.length;
		}

		if (max + absMax >= document.getElementsByClassName('bookctn').length) {
			document.getElementById('loadmorebtn').style.display = 'none';
		}

		for (let i = max; i < max + absMax; i++) {
			document.querySelector('.cataloguectn').children[i].style.display = 'flex';
			if (i == max) {
				document.querySelector('.cataloguectn').children[i].scrollIntoView({block: "nearest"});
			}
		}

		max += absMax;
	}


	if (window.matchMedia("(max-width: 950px)").matches) {
		document.querySelector('#latestframe').style.width = Math.min(window.innerWidth / 240) * 120 + 'px';
	}


	const navButtons = document.getElementsByClassName('nav-link');

	//shows and hides each .nav-link button
	function hideMenu() {
		for (let i=0; i< navButtons.length; i++) {
			navButtons[i].classList.toggle('navshow');
		}	
	}


	//adds activeNav() and hideMenu to each .nav-link button
	for (let i=0; i < navButtons.length; i++) {
		navButtons[i].addEventListener('click', navToButton);
	}

	function navToButton() {
		let blurCond = window.matchMedia("(max-width: 600px)");
		if (blurCond.matches) {
			document.querySelector('#hero-header').classList.toggle('mainblur');
			document.querySelector('main').classList.toggle('mainblur');
		}

		hideMenu();
	}

	document.querySelector('#menubtn').addEventListener('click', navToButton);
	window.addEventListener('resize', function() {if (document.querySelector('main').classList.contains('mainblur') && (window.matchMedia("(max-width: 600px)")).matches == false) {navToButton(); document.querySelector('#hero-header').classList.remove('mainblur'); document.querySelector('main').classList.remove('mainblur');}});
	document.getElementById('loadmorebtn').addEventListener('click', loadMoreBooks);
	document.querySelector('main').addEventListener('click', function() {if (this.classList.contains('mainblur')) {event.preventDefault(); event.stopPropagation(); navToButton()}}, true);
	document.querySelector('#hero-header').addEventListener('click', function() {if (this.classList.contains('mainblur')) {event.preventDefault(); event.stopPropagation(); navToButton()}}, true);
	







	function lightMode() {

		for (let i=0; i < document.getElementsByClassName('bookctn').length; i++) {
			document.getElementsByClassName('bookctn')[i].classList.toggle('bookctndark');
		}

		for (let i=0; i < document.getElementsByClassName('bookinfo').length; i++) {
			document.getElementsByClassName('bookinfo')[i].classList.toggle('bookctndark');
		}

		for (let i=0; i < document.getElementsByTagName('input').length; i++) {
			document.getElementsByTagName('input')[i].classList.toggle('inputdark');	
		}

		if (document.documentElement.style.getPropertyValue('--section-header') == 'lightgrey') {
			document.documentElement.style.setProperty('--header-border', 'rgb(134, 139, 142)');
			document.documentElement.style.setProperty('--section-header','rgb(134, 139, 142)');
			document.documentElement.style.setProperty('--section-divider','rgb(134, 139, 142)');
			document.documentElement.style.setProperty('--section-background','rgb(250, 240, 230)');
			document.documentElement.style.setProperty('--text-accent','rgba(193, 37, 37, 0.8)');
			document.documentElement.style.setProperty('--button-content','rgb(255, 127, 80)');
			document.documentElement.style.setProperty('--button-background','white');
			document.documentElement.style.setProperty('--form-legend','rgb(255, 127, 80)');
			document.documentElement.style.setProperty('--form-background','rgb(134, 139, 142)');
			document.documentElement.style.setProperty('--footer-colour','rgb(255, 127, 80)');
			document.documentElement.style.color = 'revert';
			document.getElementById('header').style.filter = 'revert';
			document.getElementById('logotext').style.filter = 'revert';


		} else {
			document.documentElement.style.setProperty('--header-border', 'lightgrey');
			document.documentElement.style.setProperty('--section-header','lightgrey');
			document.documentElement.style.setProperty('--section-divider','lightgrey');
			document.documentElement.style.setProperty('--section-background','rgb(70,70,70)');
			document.documentElement.style.setProperty('--text-accent','floralwhite');
			document.documentElement.style.setProperty('--button-content','slategrey');
			document.documentElement.style.setProperty('--button-background','white');
			document.documentElement.style.setProperty('--form-legend','slategrey');
			document.documentElement.style.setProperty('--form-background','rgb(40,40,40)');
			document.documentElement.style.setProperty('--footer-colour','rgb(40,40,40)');
			document.documentElement.style.color = 'white';
			document.getElementById('header').style.filter = 'invert(100%)';
			document.getElementById('logotext').style.filter = 'invert(100%)';

		}
	}

	document.getElementById('lightdark_large').addEventListener('click', lightMode);
	document.getElementById('lightdark_small').addEventListener('click', lightMode);
	//document.getElementById('submit').addEventListener('click', function() {event.preventDefault(); alert('This form is not active, and your information will not be collected.')});

	function dormantButtons() {
		event.preventDefault();
		if (this.getAttribute('type') == "submit") {alert('This form is not active, and your information will not be collected.');}
		else if (this.tagName === "BUTTON") {alert('This is not an active button.');}
		else {alert('This is not an active link.');}
	}

	document.getElementById('submit').addEventListener('click', dormantButtons);
	document.getElementById('contactsubmit').addEventListener('click', dormantButtons);

	const buyButtons = document.getElementsByClassName('buyformat');

	for (let i=0;i<buyButtons.length;i++) {buyButtons[i].addEventListener('click', dormantButtons);}
	document.getElementById('donate_small').addEventListener('click', dormantButtons);
	document.getElementById('donate_large').addEventListener('click', dormantButtons);




	function latestScroller(x) {
		if (x == 'forward') {
			document.querySelector('#latestdiv').scrollBy(250, 0);
		}
		else {
			document.querySelector('#latestdiv').scrollBy(-250, 0);
		}
	}


	function scrollEndCheck() {	
		let latestBooks = document.getElementsByClassName('latestctn');
		const frameCentreFromLeft = document.querySelector('#latestframe').getBoundingClientRect().left + (document.querySelector('#latestframe').getBoundingClientRect().width * 0.5);
		

		let sectionBack = [];

		for (let i=0; i < latestBooks.length; i++) {
			let bookCentreFromLeft = latestBooks[i].getBoundingClientRect().left + (latestBooks[i].getBoundingClientRect().width * 0.5);
			sectionBack.push(Math.abs(frameCentreFromLeft - bookCentreFromLeft));
		}

		let currentBack = sectionBack.indexOf(Math.min(...sectionBack));

		document.querySelector('#tracker-count').innerHTML = currentBack + 1;
		document.querySelector('#latestsum').innerHTML = latestBooks.length;

		if (currentBack == 0) {document.querySelector('#backbtn').disabled = true;}
		else if (currentBack == latestBooks.length-1) {document.querySelector('#forwardbtn').disabled = true;}
		else {document.querySelector('#forwardbtn').disabled = false; document.querySelector('#backbtn').disabled = false;}

	}


	document.querySelector('#latestdiv').addEventListener('scroll', scrollEndCheck);
	window.addEventListener('load', scrollEndCheck);
	document.querySelector('#forwardbtn').addEventListener('click', function() {latestScroller('forward');});
	document.querySelector('#backbtn').addEventListener('click', function() {latestScroller('back');});
	
	window.addEventListener('scroll', function() {if ((document.querySelector('main').getBoundingClientRect().top < window.innerHeight - 20) && (window.matchMedia("(max-width: 600px)").matches == false)) {document.querySelector('#hero-header').style.zIndex = -1; document.querySelector('#form').style.visibility = 'hidden';} else {document.querySelector('#hero-header').style.zIndex = 0; document.querySelector('#form').style.visibility = 'visible';}});


	