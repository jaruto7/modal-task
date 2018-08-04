'use strict';
(function(){ 
	/* W kodzie HTML i CSS dodaliśmy style dla prostego modala, który będzie zawsze wyśrodkowany w oknie. 
	
	Teraz wystarczy napisać funkcję otwierającą modal:
	*/

	// Deklaruje zmienna i przypisuje do niej funkcje z argumentem event
	var showModal = function(event){
		// Uzywam argumentu z funkcji i dolaczam funkcje preventDefault() ktora zapobiega zaladowaniu sie strony po kliknieciu na link
		event.preventDefault();
	// Deklaruje zmienna ktora przechowuje zdarzenie i uzywam parametru target w celu wyszukania wszystkich atrybutow parametru href 	
    var modalAttrib = event.target.getAttribute('href');
    // Deklaruje zmienna i przechowuje w dokumencie wyszukanie wszystkich klas o nazwie modal
    var allModals = document.querySelectorAll('.modal');
    // Deklaruje i przechowuje string parametru id
    var overlayId = "#modal-overlay";
    
    
    // Deklaruje zmienna i przechowuje string do pozniejszego wykorzystania
    var changeContent = "Shadows die twice";
    // Tworze petle i przechodze przez wszystkie elementy
    for(var i = 0; i < allModals.length; i++) {
      // Uzywam zmiennej i wyswietlam ja jako tablice do wyszukania wszystkich -
      // - elementow klasy "modal" a nastepnie usuwam z nich po kolei klase show
      // aby schowac obecny modal i tym samym nie przykrywac reszte linkow / elementow rodzica 		
      allModals[i].classList.remove('show');
    }
    // Drugi sposob zapisu nadpisywania contentu dla modalu pierwszego
    // var searchContent = document.querySelector('.content');
    // searchContent.innerHTML = changeContent;
    
    // Szukam w dokumencie konkretnego atrbutu id i klasy elementu a nastepnie uzyje funkcje 
    //ktora nadpisze zawartosc nowego contentu w pierwszym modalu za pomoca utworzonej wczesniej zmiennej
    document.querySelector('#modal-one .content').innerHTML = changeContent;
    // document.querySelector('.content').insertAdjacentHTML('afterBegin', changeContent);
    
    // Wyszukuje w dokumencie atrybut parametru href i dodaje klase show aby wyswietlic wszystkie modale
    document.querySelector(modalAttrib).classList.add('show');
    // To samo co wyzej tylko ze zamiast szukania atrybutu wyszukuje parametr id overlaya ktory ma byc aktywny gdy uzytkownik kliknie w link
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