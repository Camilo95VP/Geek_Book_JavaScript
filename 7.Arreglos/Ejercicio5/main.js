  
console.log("Promedio 5 numeros")
var numbers=[5,8,9,4,7];
numbers[5]=9;
var acom=0;
var promedio=0;

for (let i = 0; i < numbers.length; i++) {
    acom=acom+ numbers[i];
    
}
promedio=acom/numbers.length;
console.log("El promedio de los "+numbers.length+" numeros es: "+promedio);

console.log("Promedio 6 numeros")





promedio=acom/numbers.length;
console.log("El promedio de los "+numbers.length+" numeros es: "+promedio);