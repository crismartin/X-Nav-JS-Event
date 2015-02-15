
function CambiarColor() {
	color = document.getElementById("color");
	mostrar = document.getElementById("color_mod");
  	color.addEventListener('input', handler);
}

handler = function (e) {	
	mostrar.style.backgroundColor = color.value;
};