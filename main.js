// =========================================================================================
//  Carrusel de imagenes del "HERO"
// -----------------------------------------------------------------------------------------
let imagesHero = ["img/me.jpg","img/simple.jpg","img/ext.jpg"] 

let count = 0
// -----------------------------------------------------------------------------------------
// Para rotar de una imagen a otra (Izquierda):
// -----------------------------------------------------------------------------------------
function heroCarruselLeft () {
    if(count > 0 ){
        count--; 
     }else{
         count = (imagesHero.length - 1);
     }
     document.getElementById("galeria").src = imagesHero[count]
}

document.getElementById("izquierda").onclick = function () {
    heroCarruselLeft()
}
// -----------------------------------------------------------------------------------------
// Para rotar de una imagen a otra (Derecha):
// -----------------------------------------------------------------------------------------
function heroCarruselRight () {
    if(count < (imagesHero.length - 1)){
       count++; 
    }else{
        count = 0;
    }
    
    document.getElementById("galeria").src = imagesHero[count]
}

document.getElementById("derecha").onclick = function () {
    heroCarruselRight()
}

// =========================================================================================
//  Apartado de proyectos:
// -----------------------------------------------------------------------------------------
let proyect = [["Pokemon GO", "Unity 2.0", "8 de julio de 2016", "https://pokemongolive.com/es/", "./imgProyect/pokeGO.jpg"],["Undertale", "GameMaker: Studio", "15 de septiembre de 2015", "https://undertale.com/", "./imgProyect/Undertale.jpg"], ["CounterStrike: G.O.", "Source", "21 de agosto de 2012", "https://www.counter-strike.net/", "./imgProyect/counterStrikeGO.jpg"]] // Proyectos de ejemplo

let countP = 0
// -----------------------------------------------------------------------------------------
// Cambiar contenido de un proyecto a otro (Izquierda):
// -----------------------------------------------------------------------------------------
function expCarruselLeft () {
    if(countP > 0 ){
        countP--; 
     }else{
         countP = (proyect.length - 1);
     }
     document.getElementById("nameP").innerText = "Proyecto: " + proyect[countP][0]
     document.getElementById("tectP").innerText = "Tecnología: " + proyect[countP][1]
     document.getElementById("fechaP").innerText = "Fecha de lanzamiento: " + proyect[countP][2]
     document.getElementById("urlP").innerText = "Conozca el proyecto en: " + proyect[countP][3]
     document.getElementById("imageP").src = proyect[countP][4]
}

document.getElementById("izquierdaP").onclick = function () {
    expCarruselLeft()
}
// -----------------------------------------------------------------------------------------
// Para rotar (Derecha):
// -----------------------------------------------------------------------------------------
function expCarruselRight () {
    if(countP < (proyect.length - 1)){
       countP++; 
    }else{
        countP = 0;
    }
    document.getElementById("nameP").innerText = "Proyecto: " + proyect[countP][0]
    document.getElementById("tectP").innerText = "Tecnología: " + proyect[countP][1]
    document.getElementById("fechaP").innerText = "Fecha de lanzamiento: " + proyect[countP][2]
    document.getElementById("urlP").innerText = "Conozca el proyecto en" + proyect[countP][3]
    document.getElementById("imageP").src = proyect[countP][4]
}

document.getElementById("derechaP").onclick = function () {
    expCarruselRight()
}

// =========================================================================================
//  Apartado de skill:
// -----------------------------------------------------------------------------------------
const habilidades = {
    mec: "Mecanografia Rapida",
    fun: "Funciones",
    obj: "OPP",
    log: "logica",
    int: "Interfaces"
}

const lenguajes = {
    la: "HTML",
    lb: "CSS",
    lc: "JavaScrpit",
    ld: "Python",
    le: "Java"
}
// -----------------------------------------------------------------------------------------
const calificacion = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "🌟⭐⭐⭐⭐", "🌟🌟⭐⭐⭐", "🌟🌟🌟⭐⭐", "🌟🌟🌟🌟⭐", "🌟🌟🌟🌟🌟"]

let conocidoA = false
let conocidoB = false
let conocidoC = false
let conocidoD = false

function skillLen(){
    if(conocidoA == false || conocidoC == true){
        document.getElementById("l1").innerText = lenguajes.la + ": " +calificacion[8]
        document.getElementById("l2").innerText = lenguajes.lb + ": " +calificacion[7]
        document.getElementById("l3").innerText = lenguajes.lc + ": " +calificacion[7]
        document.getElementById("l4").innerText = lenguajes.ld + ": " +calificacion[9]
        document.getElementById("l5").innerText = lenguajes.le + ": " +calificacion[7]
        document.getElementById("botoncito1").innerText = "Informacion calificativa"
        document.getElementById("calificativo1").innerText = ""
        conocidoA = true;
        if(conocidoC == true){
            conocidoC = false;
            conocidoD = true;
            document.getElementById("botoncito2").innerText = "Informacion calificativa"
            document.getElementById("calificativo2").innerText = ""
        }
    }else if(conocidoA == true && conocidoB == true){
        document.getElementById("botoncito1").innerText = "Ocultar"
        document.getElementById("calificativo1").innerText = "Desastroso: " + calificacion[0] + "\nTerrible: " + calificacion[1] + "\nMuy Malo: " + calificacion[2] + "\nMalo: " + calificacion[3] + "\nModerado: " + calificacion[4]
        document.getElementById("botoncito2").innerText = "Ocultar"
        document.getElementById("calificativo2").innerText = "Bueno: " + calificacion[5] + "\nMuy Bueno: " + calificacion[6] + "\nExcelente: " + calificacion[7] + "\nMagnifico: " + calificacion[8] + "\nApoteosico: " + calificacion[9]
        conocidoB = false;
        conocidoB = false;
        conocidoC = true;
    }else{
        alert("Se deben conocer ambos tipos de estadisticas para ver la informacion")
    }
}

function skillGen(){
    if(conocidoB == false || conocidoC == true){
        document.getElementById("a1").innerText = habilidades.mec + ": " +calificacion[6]
        document.getElementById("a2").innerText = habilidades.fun + ": " +calificacion[8]
        document.getElementById("a3").innerText = habilidades.obj + ": " +calificacion[5]
        document.getElementById("a4").innerText = habilidades.log + ": " +calificacion[7]
        document.getElementById("a5").innerText = habilidades.int + ": " +calificacion[6]
        document.getElementById("botoncito1").innerText = "Informacion calificativa"
        document.getElementById("calificativo1").innerText = ""
        conocidoB = true;
        if(conocidoC == true){
            conocidoC = false;
            conocidoD = true;
            document.getElementById("botoncito2").innerText = "Informacion calificativa"
            document.getElementById("calificativo2").innerText = ""
        }
    }else if((conocidoA == true && conocidoB == true) || (conocidoC == false && conocidoD == true)){
        document.getElementById("botoncito1").innerText = "Ocultar"
        document.getElementById("calificativo1").innerText = "Desastroso: " + calificacion[0] + "\nTerrible: " + calificacion[1] + "\nMuy Malo: " + calificacion[2] + "\nMalo: " + calificacion[3] + "\nModerado: " + calificacion[4]
        document.getElementById("botoncito2").innerText = "Ocultar"
        document.getElementById("calificativo2").innerText = "Bueno: " + calificacion[5] + "\nMuy Bueno: " + calificacion[6] + "\nExcelente: " + calificacion[7] + "\nMagnifico: " + calificacion[8] + "\nApoteosico: " + calificacion[9]
        conocidoB = false;
        conocidoA = false;
        conocidoC = true;
    }else{
        alert("Se deben conocer ambos tipos de estadisticas para ver la informacion")
    }
}

document.getElementById("botoncito1").onclick = function () {
    skillLen()
}

document.getElementById("botoncito2").onclick = function () {
    skillGen()
}
// =========================================================================================
//  Apartado de contacto:
// -----------------------------------------------------------------------------------------
//  Reforzar envio:
// -----------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------
//  Redes sociales:
// -----------------------------------------------------------------------------------------
const redesSociales = ["https://www.facebook.com/javierarturo.teixeiragoncalves","https://twitter.com/JavierTxr","https://www.instagram.com/javier_._a_._teixeira._g/?hl=es","https://es.quora.com/profile/Javier-Arturo-Teixeira-Goncalves","https://web.whatsapp.com/"]

document.getElementById("fb").onclick = function() {
    window.open(redesSociales[0], "FaceBook", "width=600, height=600")
}

document.getElementById("tw").onclick = function() {
    window.open(redesSociales[1], "Twitter", "width=600, height=600")
}

document.getElementById("ig").onclick = function() {
    window.open(redesSociales[2], "Instagram", "width=600, height=600")
}

document.getElementById("qo").onclick = function() {
    window.open(redesSociales[3], "Quora", "width=600, height=600")
}

document.getElementById("ws").onclick = function() {
    window.open(redesSociales[4], "WhatsApp", "width=600, height=600")
}
// ----------------------------------------------------------------------------------------