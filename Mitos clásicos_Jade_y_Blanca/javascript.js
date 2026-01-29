let animacionActiva = null;
let  = null;
const btn = document.getElementById("btnContar");
const musica = document.getElementById("musicaFondo");

btn.addEventListener("click", function() {
    if (musica.paused) {
        musica.volume = 0.4; 
        musica.play().catch(err => console.log("Error al reproducir audio:", err));
    }

    tellStory();
});

function tellStory(){

   var txtAmigo = document.getElementById("txtAmigo");
    var txtAños = document.getElementById("txtAños");
    var txtLugar = document.getElementById("txtLugar");
    var txtProfesion = document.getElementById("txtProfesion");
    var txtColor = document.getElementById("txtColor");
    var txtTamaño = document.getElementById("txtTamaño");
    var txtObjeto = document.getElementById("txtObjeto");
    var output = document.getElementById("output");

    var amigo = txtAmigo.value;
    var años = txtAños.value;
    var lugar = txtLugar.value;
    var profesion = txtProfesion.value;
    var color = txtColor.value;
    var tamaño = txtTamaño.value;
    var objeto = txtObjeto.value;

   var imagen;
   switch(objeto)
      {
      case "arco":
         imagen='<img src="media/arco.png" alt = "Imagen de un arco" style="width: 35px;" />';
         break
      case "escudo":
         imagen='<img src="media/escudo.png" alt = "Imagen de un escudo" style="width: 35px;"/>';
         break
      case "casco":
         imagen='<img src="media/casco.png" alt = "Imagen de un casco" style="width: 25px;"/>';
         break
      default:
         imagen='....';  
      }

   var imagen2;
   switch(lugar)
      {
      case "playa":
         imagen2='<img src="media/playa.png" alt = "Imagen de una playa" style="width: 35px;" />';
         break
      case "montaña":
         imagen2='<img src="media/montaña.png" alt = "Imagen de una montaña" style="width: 45px;"/>';
         break
      case "pradera":
         imagen2='<img src="media/pradera.png" alt = "Imagen de una pradera" style="width: 35px;"/>';
         break
      default:
         imagen2='....';  
      }
   var aleatoriedad = Math.floor(Math.random() * 2);

   switch(aleatoriedad) {
      case 0:
         continuacion = "Cuando la encontraron, se dieron cuenta de que no era malvada sino que solo se sentía muy sola. A ";
         continuacion += amigo +  " se le ocurrió hablar con la criatura y la convenció para que les devolviera el " + objeto;
         continuacion += ". Finalmente el " + imagen + " fue llevado de vuelta y colorín colorado este cuento se ha acabado.";
         break
      case 1:
         continuacion = "Cuando la encontraron, Edipo y " + amigo + " lucharon con todas sus fuerzas y tras una larga batalla ";
         continuacion += "consiguieron vencer a la criatura. Gracias a ellos, recuperaron el " + imagen + ", ";
         continuacion += "que fue llevado de vuelta al pueblo y colorín colorado este cuento se ha acabado."
         break
      default:
         continuacion = ""
   }

 //historia
    var story = "<br/>" + "Al volver de hablar con la esfinge, Edipo se encontró a un chico que se llamaba " + amigo + ". ";
    story += "Pasaron mucho tiempo juntos y siempre se iban a la " + imagen2 + ". ";
    story += años + " años después, Edipo nombró " + profesion.toLowerCase() + " de la corte suprema a " + amigo + "." + "<br/>";
    story += "<br/>" + "Un día, apareció una criatura monstruosa de color " + color.toLowerCase() + ". Era " + tamaño + ", con escamas, garras afiladas y dos alas para poder volar. ";
    story += "Esta criatura había robado uno de los tesoros más valiosos del mundo, un " + imagen + "  mágico. Muchos antes habían intentado derrotarla para recuperarlo, pero todos habían fracasado en el intento.";
    story += "<br/>" + "<br/>" + "El pueblo ya había perdido la esperanza de recuperar el " + imagen + " de nuevo, pero Edipo y " + amigo;
    story += " no, y una mañana fueron en busca de la criatura misteriosa. " + continuacion + "<br/>" + "<br/>"

output.classList.remove("mostrar");
void output.offsetWidth;
output.classList.add("mostrar");

maquinaDeEscribir(output, story, 30);

document.getElementById("btnContar").disabled = true;

setTimeout(() => {
   document.getElementById("btnContar").disabled = false;
}, story.length * 25);
}

function reproducirMusica() {
   const musica = document.getElementById("musicaFondo");
   musica.muted = false;
   musica.volume = 1;
   musica.currentTime = 0;
   musica.play().catch(err => console.log(err));
}


function borrar() {
   output.innerHTML ="";
   output.classList.remove("mostrar");
   document.getElementById("txtAmigo").value = "";
   document.getElementById("txtAños").value = "";
   document.getElementById("txtProfesion").value = "";
   document.getElementById("txtColor").value = "";
   document.getElementById("txtLugar").selectedIndex = 0;
   document.getElementById("txtTamaño").selectedIndex = 0;
   document.getElementById("txtObjeto").selectedIndex = 0;
}

function maquinaDeEscribir(elemento, texto, velocidad = 30) {

   if (animacionActiva) {
      clearTimeout(animacionActiva);
      animacionActiva = null;
   }

   elemento.innerHTML = "";
   let i = 0;

   function escribir() {
      if (i < texto.length) {

         if (texto[i] === "<") {
            let finEtiqueta = texto.indexOf(">", i);
            elemento.innerHTML += texto.substring(i, finEtiqueta + 1);
            i = finEtiqueta + 1;
         } else {
            elemento.innerHTML += texto[i];
            i++;
         }

         animacionActiva = setTimeout(escribir, velocidad);
      }
   }

   escribir();
}
