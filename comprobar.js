comprobar = function(){
    
    //Expresion regular    
    let exp = new RegExp ('[a-z]+\\s+[a-z]+');


    //Evalua el nombre
    valor1 = document.getElementById("name").value;
    var campo1 = exp.test(valor1);
    
    //Evalua  el nombre 2
    valor2 = document.getElementById("name2").value;
    var campo2 = exp.test(valor2);
    
    if(campo1 && campo2 == true){
        console.log("ambos son correctos");   
    }

    else if(campo2 && campo1 == false){
        console.log("el primer elemento es incorrecto");   
    }
    
    else if(campo1 && campo2 == false){
        console.log("el segundo elemento es incorrecto");   
    }

    else if(campo1 == false && campo2 == false){
        console.log(" ambos elementos son incorrectos");
    }        
}
