//Ejercicio 1
let thisName = "Cristhian"
let age = 35;
let isStudent = true;
console.log("%cEjercicio 1","color:red;");
console.log(`Nombre: ${thisName} - edad: ${age} es estudiante: ${isStudent}`)

//Ejercicio 2
let a = 4;
let b = 6;

console.log("%cEjercicio 2", "color:red;");
//Suma
console.log(`Suma de a=${a} y b=${b}: ${a+b}`)
//Resta
console.log(`Resta de a=${a} y b=${b}: ${a-b}`)
//Multiplicacion
console.log(`Multiplicación de a=${a} y b=${b}: ${a*b}`)
//Division
console.log(`Division de a=${a} y b=${b}: ${a/b}`)
//OPeradores condicionales
console.log(`a es igual b: ${a==b}`);
console.log(`a es diferente de b: ${a!=b}`);
console.log(`a es mayor que b: ${a>b}`);
console.log(`a es menor que b: ${a<b}`);
console.log(`a es mayor o igual de b: ${a>=b}`);
console.log(`a es menor o igual que b: ${a<=b}`);


//Ejercicio 3
//Operadores logicos
let isLegalAge = true;
let licensed = true;

console.log("%cEjercicio 3", "color:red;");

if(isLegalAge && licensed){
    console.log(`Puede conducir. Mayor de edad: ${isLegalAge} - licencia: ${licensed}`);
}else if(isLegalAge || licensed){
    console.log(`No pude conducir. Mayor de edad: ${isLegalAge} - licencia: ${licensed}`);
}
//Ejercicio 4

console.log("%cEjercicio 4", "color:red;");
let userName;
while(true){
    userName = prompt("¿Cuál es tu nombre?");
    
    if (userName === null) {
        alert("Operación cancelada");
        break;
    }
    
    userName = userName.trim();
    
    if (userName === "") {
        alert("Por favor, ingresa tu nombre. No puede estar vacío.");
    } else {
        break;
    }
}
let userAge;
do {
    let entry = prompt("¿Cuál es tu edad? (Ingresa solo números)");
    if (entry === null) {
        alert("Operación cancelada");
        break;
    }
    
    userAge = parseInt(entry);

    if (isNaN(userAge)) {
        alert("Por favor, ingresa solo números");
    }
} while (isNaN(userAge));

let isUserStudent; //type bool
while (true) {
    let entry = prompt("¿Eres estudiante? (sí/no)");
    
    if (entry === null) {
        alert("Operación cancelada");
        break;
    }
    
    entry = entry.toLowerCase().trim();
    
    if (entry === "sí" || entry === "si" || entry === "no") {
        isUserStudent = (entry === "sí" || entry === "si");
        break;
    } else {
        alert("Por favor, responde solo con 'sí' o 'no'");
    }
}
let message = `Hola ${userName}`;
message += ` tienes ${userAge} años.`;

if(userAge >= 18){
    message += ` Eres mayor de edad.`
}else{
    message += ` Eres menor de edad.`
}
if(isUserStudent){
    message += ` Tienes derecho a un descuento por ser estudiante.`
}
if(userName != null && userAge != null && isUserStudent != null){
    console.log(message);
}else{
    console.log(`Falta información`);
}