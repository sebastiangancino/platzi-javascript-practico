//código del cuadrado
console.group("Cuadrados");

//const ladocuadrado =5;
//console.log("El lado de los cuadrados es de: " + ladocuadrado + "cm");

function perimetroCuadrado(lado) {
   return lado*4; 
}
//console.log("El perimetro del cuadrado es de:  " + perimetroCuadrado + "cm");


//const areaCuadrado = ladocuadrado*ladocuadrado;

function areaCuadrado(lado) {
    return lado*lado; 
 }
//console.log("El área del cuadrado es de:  " + areaCuadrado  + "cm^2");

console.groupEnd();

//código del triangulo
console.group("Triangulos");


/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;

console.log("Los lados del triangulo son de:  " 
+ ladoTriangulo1 
 +", "
 + ladoTriangulo2
   +", "
  + baseTriangulo3);*/

 // const alturaTriangulo = 5.5;
  //console.log("La altura del triangulo es de: "+ alturaTriangulo);
  
  function perimetroTriangulo(lado1, lado2,base){
      return lado1 + lado2 + base;
  }
  //console.log("El perimetro del  triangulo es de: "+ alturaTriangulo);


  function areaTriangulo(base, altura){
    return (base*altura)/2;
}
  console.log("El área del triangulo es de:  " + areaTriangulo  + "cm^2");

  console.groupEnd();


//código del circulo
console.group("Circulos");

//const radioCirculo = 4 ;
//console.log("El radio del circulo es de: "+ radioCirculo);

//Diametro
function diametroCirculo (radio){
 return radio*2;
}

//PI
const PI = Math.PI;
console.log("El valor de PI es de: "+ PI);

//Perimetro
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return PI *diametro;
}

 function areaCirculo (radio){
     return(radio*radio)* PI;
 }
console.groupEnd();

// Interactuamos con el HTML

 function  calcularPerimetroCuadrado(){
 const input = document.getElementById("InputCuadrado");
  const value= input.value; // obtenemos el valor de input
  
   const perimetro =  perimetroCuadrado(value);//le pasamos el valor value para que haga calculo la función
    alert(perimetro);
}
 
 function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value= input.value;

    const area = areaCuadrado(value);
    alert(area);
 }


 //Taller
 function calculaAlturaTriangulo(lado1, lado2, lado3){
  if (lado1 == lado2 || lado1 == lado3) {
      alert("Si es");
     
  }
  else{
      alert("El triangulo no es isóceles");
  }
 }