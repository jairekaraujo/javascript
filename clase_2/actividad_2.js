
function calcularIMC(pesoJ, alturaJ){
    const imc = pesoJ / alturaJ **2;
    console.log("Tu indice de masa corporal es", imc);
    return imc
}

const interIMC = (imc) => {

    if(isNaN(imc)){
        console.log("Error los valores iniciales no son validos.")
    }
     else if(imc < 18.5){
        console.log("Bajo Peso");
    } else if(imc < 24.9 || imc >= 18.5){
       console.log("Peso Saludable");
    } else if(imc < 29.9 || imc >= 25){
        console.log("Sobrepreso");
    }  else if (imc >= 30){
        console.log("Obesidad");
    }else{
        console.log("No se encontro valores");
    }
}

    const peso = 71;
    const altura = 1.70;

    const imcJeny = calcularIMC("70kg", "1.60");

    interIMC(imcJeny);
    