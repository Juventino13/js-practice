//Codigo del cuadrado
console.group("Cuadrado");
//const ladoCuadrado=5;
//console.log("Los lados del cuadrado "+ ladoCuadrado + "cm");
//console.log("El perimetro del cuadrado "+ perimetroCuadrado+"cm");
//const areaCuadrada= ladoCuadrado*ladoCuadrado;

//console.log("El area del cuadrad "+areaCuadrada+"cm2");

//FUNCIONES

// function  perimetroCuadrado (lado){
//     return lado*4
// }
// function areaCuadrado(lado){
//     return lado *lado;
// }


//Arrow function 
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;


console.groupEnd();

//Codigo del triangulo
// console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo= 5.5;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " +ladoTriangulo2+"cm, " + baseTriangulo + "cm, " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm ")
// const areaTriangulo = (baseTriangulo*alturaTriangulo) /2;
// console.log("El area del triangulo es " + areaTriangulo+"cm2")

//FUNCIONES
// function perimetroTriangulo(lado1,lado2,base){
//     return lado1+lado2+base;
// }
// function areaTriangulo(base,altura){
//     return (base*altura)/2;
// }

const perimetroTriangulo = (l1,l2,b) => l1+l2+b;
const areaTriangulo = (b,a) => (b*a)/2


console.groupEnd();

//Codigo del Circulo
console.group("Circulo")
// const radioCirculo=4;
// console.log("El radio del circulo es: "+radioCirculo+"cm")
// const diametroCirculo=radioCirculo*2;
// console.log("El diametro del circulo es: "+diametroCirculo+"cm")
// const pi=Math.PI;
// console.log("pi es: "+pi)
//circunferencia
// const perimetroCirculo=diametroCirculo*pi;
// console.log("El circunferencia del circulo es: "+perimetroCirculo+"cm");
// const areaCirculo=(radioCirculo*radioCirculo)*pi;
// console.log("El Area del circulo es: "+areaCirculo+"cm");
// function diametroCirculo(r){
//     return r*2;
// }
// function perimetroCirculo(r){
//     const diametro = diametroCirculo(r);
//     return diametro * Math.PI; 
// }
// function areaCirculo (r){
//     return (r*r) * Math.PI
// }



const diametroCirculo = (r) => r * 2;

const perimetroCirculo = (r) =>  diametroCirculo(r) * Math.PI;

const areaCirculo= (r)=> (r*r)*Math.PI;

console.groupEnd();


function calcularPerimetroCuadrado(){
const input= document.getElementById("InputCuadrado");
const value=input.value; 

const perimetro=perimetroCuadrado(value);
alert(perimetro)
}

function calcularAreaCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value=input.value; 
    const area=areaCuadrado(value);
    alert(area)
}


function calcularAreaTriangulo() {
    const inputAltura = document.getElementById("InputAlturaTriangulo");
    const inputBase = document.getElementById("InputTrianguloBase");
    const h = parseInt(inputAltura.value);
    const bs = parseInt(inputBase.value);
    const area = areaTriangulo(bs, h);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputL1 = document.getElementById("InputTriangulolado1");
    const inputL2 = document.getElementById("InputTriangulolado2");
    const inputBase = document.getElementById("InputTrianguloBase");
    const l1 = parseInt(inputL1.value);
    const l2 = parseInt(inputL2.value);
    const b=parseInt(inputBase.value);
    const area = perimetroTriangulo(l1, l2,b);
    alert(area);
    console.log(area);
}