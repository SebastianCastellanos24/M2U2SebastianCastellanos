const
    A = document.getElementById('Numb1'),
    B = document.getElementById('Numb2'),
    C = document.getElementById('Numb3'),
    D = document.getElementById('Numb4'),
    boton = document.getElementById('boton'),
    numMax = document.getElementById('ValMayor'),
    numMin = document.getElementById('ValMenor'),
    ValCorrect = document.getElementById('ValCorrect'),
    boton2 = document.getElementById('boton2')


boton.addEventListener('click', () => {
    if((A.value == "") || (B.value == "") || (C.value == "") || (D.value == "")){
        window.alert("Por favor termine de ingresar los valores");
    }
    else if((A.value == B.value) || (A.value == C.value) || (A.value == D.value)){
        window.alert("No puede ingresar valores iguales");
    }
    else if((B.value == C.value) || (B.value == D.value)){
        window.alert("No puede ingresar valores iguales");
    }
    else if((C.value == D.value)){
        window.alert("No puede ingresar valores iguales");
    }
    else{
        ValCorrect.innerHTML="&#128079 Has ingresado de forma correcta los valores :)";
        var valores = [A.value, B.value, C.value, D.value];
        var vMax = Math.max(...valores);
        var vMin = Math.min(...valores);
        numMax.innerHTML= "&#128200  El numero mayor es: " + vMax;
        numMin.innerHTML= "&#128201  El numero menor es: " + vMin;
    }
})
    
    let cont=0;
boton2.addEventListener('click', () =>{
    cont = cont + 1;
    if((A.value == "") || (B.value == "") || (C.value == "") || (D.value == "")){
        alert("No hay datos almacenados para borrar");
    }
    else if(cont === 1){
        alert("¿Esta seguro de que desea borrar los datos almacenados?  En caso de que SI vuelva a presionar el boton Limpiar");
    }
    else{
        A.value=null; B.value=null; C.value=null; D.value=null;
    }
    
})