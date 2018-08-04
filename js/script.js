'use strict';
(function(){ 
	/* W kodzie HTML i CSS dodaliśmy style dla prostego modala, który będzie zawsze wyśrodkowany w oknie. 
	
	Teraz wystarczy napisać funkcję otwierającą modal:
	*/
	
	var showModal = function(event){
		event.preventDefault();
	    var modalAttrib = event.target.getAttribute('href');
	    var allModals = document.querySelectorAll('.modal');
	    var overlayId = "#modal-overlay";
	    	for(var i = 0; i < allModals.length; i++) {
	      		allModals[i].classList.remove('show');
	    	}
			document.querySelector(modalAttrib).classList.add('show');
	    	document.querySelector(overlayId).classList.add('show');
	};

	// Mimo, że obecnie mamy tylko jeden link, stosujemy kod dla wielu linków. W ten sposób nie będzie trzeba go zmieniać, kiedy zechcemy mieć więcej linków lub guzików otwierających modale
	
	var modalLinks = document.querySelectorAll('.show-modal');
	
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}
	
	// Dodajemy też funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close". 

	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	// Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay. 
	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	// Musimy jednak pamiętać, aby zablokować propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 
	
	var modals = document.querySelectorAll('.modal');
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
	
	// I to wszystko - mamy już działający modal! 
	
})(); 