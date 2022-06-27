const
    NombEst = document.getElementById('NombEst'),
    boton = document.getElementById('boton'),
    saludos = document.getElementById('Saludos'),
    NombMat = document.getElementById('NombMat'),
    CostMat = document.getElementById('CostMat'),
    boton2 = document.getElementById('boton2'),
    Materias = document.getElementById('Materias'),
    boton3 = document.getElementById('boton3'),
    MsgFinal = document.getElementById('MsgFinal'),
    MsgFinal2 = document.getElementById('MsgFinal2'),
    MsgFinal3 = document.getElementById('MsgFinal3'),
    botonL = document.getElementById('botonL')

var baseDatos=[];
let clicks = 0;

boton.addEventListener('click', () => {
    if(NombEst.value == ""){
        alert("Ingresa por favor tú nombre");
    }
    else{
        saludos.innerHTML="Estimado estudiante " + NombEst.value + " por favor ingrese las asignaturas a matricular";
    }   
})

boton2.addEventListener('click', () => {
    if((NombMat.value == "") || (CostMat.value == "")){
        alert("Completa los campos vacios");
    }
    else{
        if(baseDatos.length  < 7){
            function Materia(nombre,costo){
                this.nombre=nombre;
                this.costo=costo;
            }
            nuevaMateria = new Materia(NombMat.value,CostMat.value);
            console.log(nuevaMateria);
            agregar();
            NombMat.value=null; CostMat.value=null;
        }
        else{
            alert("Ten en cuenta que no puedes inscribir más de 7 asignaturas");
        }
    }
})

function agregar(){
    baseDatos.push(nuevaMateria);
    document.getElementById("tabla").innerHTML += '<tbody><td>' + 
    nuevaMateria.nombre + '</td><td>$ ' +nuevaMateria.costo + '</td></tbody>';
};

boton3.addEventListener('click', () => {
    let costFijos=28000;
        costoMatricula=[];
        sum=0;
        masCostoFijo=0;
        conDescuento=0;

    if(baseDatos == ""){
        alert("Para consultar el valor de tu matricula es necesario que registres al menos una asignatura")
    }
    else{
        
        for (let j=0; j<baseDatos.length; j++) {
            costoMatricula.push(parseInt(baseDatos[j].costo))
        }

        for (let i = 0; i < costoMatricula.length; i++){ 
            sum += costoMatricula[i];
        }

        masCostoFijo = sum + costFijos;
        conDescuento = masCostoFijo * 0.8;

        MsgFinal.innerHTML="Usted ha registrado un total de: " + 
        baseDatos.length + " Materias";
        MsgFinal2.innerHTML="Por lo tanto el costo de su matricula es: $ " + sum;
        MsgFinal3.innerHTML="Teniendo en cuenta los costos fijos que son de $28.000, la matricula le queda en: $ " + masCostoFijo
        + '<br>' + "Con el descuento del 20% el total final de su matricula es: $ " + conDescuento;
    }
})

let click=0;

botonL.addEventListener('click', () => {
    click = click + 1; 
    if((baseDatos == "")){
        alert("No hay campos registrados que eliminar");
    }
    else{
       alert("No se como hacer para borrar esto jejeje, queda pendiente")
    }
})