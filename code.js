function navbarMobile(){
	var x = document.getElementById("dropDown");
	if (x.style.display === "none"){
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function animaatio() {
	document.getElementById("dropDown").classList.add('animateMenu');
}

function change_opiskelu(){
	var x = document.getElementById("opiskelu-sub");
	x.style.display = x.style.display === 'none' ? '' : 'none';
}
 
function change_hae(){
	var x = document.getElementById("hae-sub");
	x.style.display = x.style.display === 'none' ? '' : 'none';
}

function change_linkki(){
	var x = document.getElementById("linkki-sub");
	x.style.display = x.style.display === 'none' ? '' : 'none';
}

function change_yhteystiedot(){
	var x = document.getElementById("yhteystiedot-sub");
	x.style.display = x.style.display === 'none' ? '' : 'none';
}