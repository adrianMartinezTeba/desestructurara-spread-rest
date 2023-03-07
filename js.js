// 1.  Ejercicios destructuring
// Dado el siguiente objeto:
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
// Extrae la empleada Ana con todos sus datos personales:
// {"name":"Ana", "email":"Ana@gmail.com"}
// Extrae el email del empleado Luis --> Luis@gmail.com
// const [empleado1, empleado2, empleado3] = empleados
// console.log(empleado2)
// const { email: emailLuis } = empleado1
// console.log(emailLuis)
// Dado el siguiente objeto:
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
// Cambia el nombre de la propiedad “name” por “nombre
// Extrae el nombre del Pokemon
// Extrae el tipo de Pokemon que es
// Extrae el movimiento “Tackle”
const { name: nombre, type, moves } = pokemon
console.log(nombre)
console.log(type)
console.log(moves)
const [, entrada, , ,] = moves
console.log(entrada)
// 2. Ejercicios spread/rest
// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}
const pokemones = { ...pikachu, ...pokemon } //si se sobreescribe se queda el posicionado segundo
console.log(pokemones)
// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
//   sumEveryOther(6, 8, 2, 3, 1); //20
//   sumEveryOther(11, 3, 12); //26
function sumEveryOther(...numeros) {
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {//i++ si ponemos i+=2 salte de dos en dos si pones i+=5 el bucle va de 5 en 5
        suma += numeros[i]

    } return suma
}
console.log(sumEveryOther(1, 2, 6, 1, 1, 1))
// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
// addOnlyNums(1, 'perro', 2, 4); //7
function addOnlyNums(...anyArg) {
    let suma = 0
    for (let i = 0; i < anyArg.length; i++) {
        if (typeof anyArg[i] === 'number') {
            suma += anyArg[i]
        }

    } return suma
}
console.log(addOnlyNums(1, 2, 'hola'))
// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
// countTheArgs('gato', 'perro'); //2
// countTheArgs('gato', 'perro', 'pollo', 'oso'); //4
function countTheArgs(...argumentos) {
    return argumentos.length
}
console.log(countTheArgs(222, 4444, 4444, 'hola'))
// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
let array1a = [2, 3, 4]
let array2a = [5, 6, 7]
function combineTwoArrays(array1, array2) {
    const combinaçao = [...array1, ...array2]
    return combinaçao
}
console.log(combineTwoArrays(array1a, array2a))

// 3. Extras


// Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};
// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
const {today:maximaHoy,tomorrow:maximaManana}=HIGH_TEMPERATURES
console.log(maximaHoy)
console.log(maximaManana)


// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
// onlyUniques('gato', 'pollo', 'cerdo', 'cerdo');
// //['gato', 'pollo', 'cerdo']
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

function onlyUniques(...datos) {
    let arrayVacio = []
    // for (const dato of datos) {
    //     if (!arrayVacio.includes(dato)) {
    //         arrayVacio.push(dato)
    //     }
    // }return arrayVacio
    for (let i = 0; i < datos.length; i++) {
       if (!arrayVacio.includes(datos[i])) {
        arrayVacio.push(datos[i])
       }
        
    }return arrayVacio
}
console.log(onlyUniques(1,1,2,3,4))

// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
// combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
// // [3, 6, 7, 8, 2, 7, 3, 1]
// combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
// // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]
function combineAllArrays(...arrays) {
    let arrayVacio = []
//     for (let i = 0; i < arrays.length; i++) {
//          arrayVacio.push(...arrays[i])
        
//     }return arrayVacio
for (const array of arrays) {
    arrayVacio.push(...array)
}return arrayVacio
}

console.log(combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]))
// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
function sumAndSquare(...numeros) {
    let sumaycuadrado = 0
    let cuadrado = 0
    for (const numero of numeros) {
        cuadrado = numero*numero
        sumaycuadrado += cuadrado
    }return sumaycuadrado
}
console.log(sumAndSquare(2,3,5))