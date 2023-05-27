//Ocultar contenedor y mostrar resultado
function ocultar(){
    let contenedor_resultado = document.getElementById("contenedor_resultado");
    let contenedor_imagen = document.getElementById("contenedor_img");
    
    //Ocultar y mostrar contenedor
    if (contenedor_resultado.style.display === "none") {
        contenedor_resultado.style.display = "none";
        contenedor_imagen.style.display = "flex";
    }else{
        contenedor_imagen.style.display = "none";
        contenedor_resultado.style.display = "flex";
    }
}


//Encriptar texto
function encriptar(){
    let oracion = document.getElementById("texto").value;
    let nueva_oracion = "";

    ocultar();

    if (oracion === ""){
        document.getElementById("resultado").value = "No ha ingresado nada para encriptar ( ´•︵•` )";
    }else{
        //Recorrer cadena de texto
        for (let letra of oracion){
            if(letra == "e"){
                letra = "enter";
            }else if (letra == "i"){
                letra = "imes";
            }else if (letra == "a"){
                letra = "ai";
            }else if (letra == "o"){
                letra = "ober";
            }else if(letra == "u"){
                letra = "ufat";
            }
            else{
                //No se requiere ninguna accion adicional
            }
            nueva_oracion += letra;
        }
    
        document.getElementById("resultado").value = nueva_oracion;
        oracion = document.getElementById("texto").value = "";
    }
}

//Desencriptar texto
function desencriptar(){
    let oracion_encriptada = document.getElementById("texto").value;
    let oracion_desencriptada = "";

    ocultar()

    if(oracion_encriptada === ""){
        document.getElementById("resultado").value = "No ha ingresado nada para desencriptar ( ＞﹏＜ )";
    }else{
        oracion_desencriptada = oracion_encriptada.replace(/enter|imes|ai|ober|ufat/g, function(cambiar){
            switch(cambiar){
                case "enter":
                    return "e";
                case "imes":
                    return "i";
                case "ai":
                    return "a";
                case "ober":
                    return "o";
                case "ufat":
                    return "u";
            }
        });
    
        document.getElementById("resultado").value = oracion_desencriptada;
        oracion_encriptada = document.getElementById("texto").value = "";
    }

}

//Copiar texto
function copiar_texto(){
    var copiar = document.getElementById("resultado");
    copiar.select();
    document.execCommand("copy");
    alert("¡Texto copiado!");
}
