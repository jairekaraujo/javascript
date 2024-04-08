

const peso=80
const altura = 170

function calcularIMC(peso,altura){
    const imc = peso / (altura ** 2);
    return imc
}

function interIMC(imc){

    if(imc < 18.5){
        console.log("Bajo Peso");
    } else if(imc < 24.9 || imc >= 18.5){
       console.log("Peso Saludable");
    } else if(imc < 29.9 || imc >= 25){
        console.log("Sobrepreso");
    }  else if (imc >= 30){
        console.log("Obesidad")
    }
}


    let imc = calcularIMC(peso, altura)
    console.log("su imc es: ", imc );
    console.log("Resultado: ", interIMC(imc)); 