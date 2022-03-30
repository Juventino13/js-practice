//Codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado=5;
console.log("Los lados del cuadrado "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4; 
console.log("El perimetro del cuadrado "+ perimetroCuadrado+"cm");

const areaCuadrada= ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrad "+areaCuadrada+"cm2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6; 
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo= 5.5;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " +ladoTriangulo2+"cm, " + baseTriangulo + "cm, " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm ")
const areaTriangulo = (baseTriangulo*alturaTriangulo) /2;
console.log("El area del triangulo es " + areaTriangulo+"cm2")
console.groupEnd();

//Codigo del Circulo
console.group("Circulo")
const radioCirculo=4; 
console.log("El radio del circulo es: "+radioCirculo+"cm")
const diametroCirculo=radioCirculo*2;
console.log("El diametro del circulo es: "+diametroCirculo+"cm")
const pi=Math.PI;
console.log("pi es: "+pi)
//circunferencia 
const perimetroCirculo=diametroCirculo*pi;
console.log("El circunferencia del circulo es: "+perimetroCirculo+"cm");
const areaCirculo=(radioCirculo*radioCirculo)*pi;
console.log("El Area del circulo es: "+areaCirculo+"cm");

