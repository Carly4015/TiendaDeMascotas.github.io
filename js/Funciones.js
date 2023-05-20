let  bloqueIntroduccion= document.getElementById("Introduccion");
let bloqueDetalle= document.getElementById("detalle");

let Comentarios= ["Paz", "María José", "Judy", "Carlos", "Jorge"];
function verMas(numeroCard){
    if(numeroCard === 1){
        bloqueIntroduccion.setAttribute("style", "display:none");
        bloqueDetalle.setAttribute("style", "display:block");
        contarComentarios();
    } else if
    (numeroCard === 2){
        alert("Trabajo 2 en progreso");
    }else{
        console.log("Card número 3");
    }
}
function volver(){
    bloqueIntroduccion.setAttribute("style", "display:block");
    bloqueDetalle.setAttribute("style", "display:none");
}

function contarComentarios(){
    let totalComentarios= 0;
    for(let i=0; i<Comentarios.length; i++){
        totalComentarios = totalComentarios + 1;
    }
    document.getElementById("comentarios").innerText =`Total de comentarios es ${totalComentarios}`;
}