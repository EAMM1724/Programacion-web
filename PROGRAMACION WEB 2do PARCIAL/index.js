
function power(base, exponent){
    return Math.pow(base,exponent);

}

let resultado = power(4,6);
//console.log(resultado);

//////////////////////////////////

function getLargerInt(number1,number2){
     if(number1 > number2){
        console.log('Este numero:' + number1 + '  Es mas grande que: ' + number2);

     } else {
        console.log('Este numero: ' + number2 + '  Es mas grande que: ' + number1);

     }


}

//console.log(getLargerInt(33, 78));

// SERIE FIBONACCI ///

function fibonacci(n) {
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
      fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }
    return fibArray.slice(0, n);
  }
  
  let limite = 10; // Cambia este valor para obtener más o menos términos de la serie
  let serie = fibonacci(limite);
//  console.log(serie);
  
          ///AVERAGE///

function calculateAverage(numbers){
let suma = 0;
    for(i = 0; i < numbers.length; i++){
     suma += numbers[i];
    }

    return suma / numbers.length;
}

let numbers = [4,4,4,4,4];
let calcularPromedio = calculateAverage(numbers);
console.log('El promeio es: ' + calcularPromedio);





