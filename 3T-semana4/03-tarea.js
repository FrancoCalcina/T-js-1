// 5.6
// del problema entiendo que los 10 alumnos
// se repartiran en las dos listas: 
// lista-1--->5 alumnos, lista-2 --->5 alumnos

let n = 10;
let lista1 = [];
let lista2 = [];
for (let i = 0; i < n; i++) {
    let alumnos = [];
    if (i < 5) {
        alumnos[0] = prompt("Ingrese si nombre");
        alumnos[1] = +prompt("Ingrese su edad");
        lista1.push(alumnos);
    } else {

        alumnos[0] = prompt("Ingrese si nombre");
        alumnos[1] = +prompt("Ingrese su edad");
        lista2.push(alumnos)
    }
}
let mayorsito = lista1[0][1];
for (let i = 0; i < 5; i++) {
    if (lista1[i][1] >= mayorsito) {
        mayorcito = lista[i][1];
    }
}
console.log(`el mayor de la 1ra lista es ${mayorcito[0][0]}`);
let mayorsito2 = lista2[0][1];
for (let i = 0; i < 5; i++) {
    if (lista2[i][1] >= mayorsito2) {
        mayorcito2 = lista2[i][1];
    }
}
console.log(`el mayor de la 2ra lista es ${mayorcito[0][0]}`);



// 5.8
let vec1 = [1, 2, 3, 4];
let vec2 = [];
for (let i = 0; i < vec1.length; i++) {
    vec2[i]=vec1[(i+1) % vec1.length];
}
console.log(vec2);




// 5.10
// 5.10  Realice un algoritmo que lea dos vectores de cien 
// elementos y que cal- cule la suma de éstos guardando 
// su resultado en otro vector,
// el cual se debe presentar en forma impresa.

let vector1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let vector2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let vectorFinal = [];
let suma = 0;
let suma2 = 0;
for (let i = 0; i < vector1.length; i++) {
    suma = suma + vector1[i];
    suma2 = suma2 + vector2[i];
}
vectorFinal.push(suma);
vectorFinal.push(suma2);
console.log(`vector que contiene las sumas ${vectorFinal} `);


