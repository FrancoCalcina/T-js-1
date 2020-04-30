// 3.2

let Horas = +prompt("cuantas horas de trabajo al dia realiza?");
let pHora = +prompt("cuanto le pagan por hora?");
let pagoSemanal = 0;
if ((Horas * 7) > 40) {
    pagoSemanal = 40 * pHora + ((Horas * 7 - 40) * (pHora * 2));
} else {
    pagoSemanal = Horas * 7 * pHora;
}
console.log(`Semanalmente recivira ${pagoSemanal}`);

// 3.3

let Capital = +prompt("de cuanto dinero dispone?");
let Regalo = "";
if (Capital < 11) {
    Regalo = "Tarjeta";
}
if (Capital > 10 && Capital < 101) {
    Regalo = "Chocolates";
}
if (Capital > 100 && Capital < 251) {
    Regalo = "Flores";
}
if (Capital >= 251) {
    Regalo = "Anillo";
}
console.log(`Elregalo es: ${Regalo}`);

// 3.4
// Las dos primeras horas a $5.00 c/u.
// Las siguientes tres a $4.00 c/u.
// Las cinco siguientes a $3.00 c/u.
// Después de diez horas el costo por cada una es de dos pesos.

let horasCumplidas = +prompt("Cuantas horas utilizo el estacionamiento?");
let Pago = 0;
if (horasCumplidas <= 10) {
    if (horasCumplidas < 6) {
        if (horasCumplidas < 3) {
            Pago = horasCumplidas * 5;
        } else {
            pago = 2 * 5 + (horasCumplidas - 2) * 4;
        }
    } else {
        pago = 2 * 5 + 3 * 4 + (horasCumplidas - 5) * 3;
    }
} else {
    Pago = 2 * 5 + 3 * 4 + 5 * 3 + (horasCumplidas - 10) * 2;
}
console.log(`Deve pagar ${Pago}`);

// 3.8
// Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga 20 % de su sueldo;
//  cuando es de 5 años o más, 30 %.
//  Ahora bien, el bono por concepto de sueldo,
//  si éste es menor a $1000, se da 25 % de éste,
//  cuando éste es mayor a $1000, pero menor o igual a $3500, se otorga 15% de su sueldo, 
// para más de $3500. 10%. 
let sueldaso = +prompt("cual es su sueldo?");
let anios = +prompt("cuanto lleva trabajando?");
let bono1 = 0;
let bono2 = 0;
let bonoMayor = 0;

if (anios > 2 && anios < 5) {
    bono1 = sueldaso * 0.2;
} else if (anios >= 5) {
    bono1 = sueldaso * 0.3;
}

if (sueldaso <= 1000) {
    bono2 = sueldaso * 0.25;
} else if (sueldaso > 1000 && sueldaso <= 3500) {
    bono2 = sueldaso * 0.15;
} else if (sueldaso > 3500) {
    bono2 = sueldaso * 0.10;
}

if (bono1 > bono2) {
    bonoMayor = bono1;
} else {
    bonoMayor = bono2;
}
console.log(`Bono antiguedad:${bono1}, Bono por monto de sueldo:${bono2}`);
console.log(`Bono que se le asigno:${bonoMayor}`);



// 3.9
let poliza = prompt("eliga su poliza: bertura amplia (A) / daños a terceros (B)");
let aclaracion = prompt("escriva SI / NO");
let caso_1 = prompt("tieneel habito de beber?");
let caso_2 = prompt("utiliza lentes?");
let caso_3 = prompt("sufre deficiencia cardiaca o diabetes?");
let caso_4 = +prompt("cuantos anios tiene");
let monto_A = 1200;
let monto_B = 950;
let montito=0;
let montazo=0;
if(poliza = "B"){
    montito=monto_B;
}else{
    montito=monto_A;
}
if(caso_1="SI"){
    montazo=montito+montito*0.1;
}
if(caso_2="SI"){
    montazo=montazo+montito*0.05;
}
if(caso_3="SI"){
    montazo=montazo+montito*0.05;
}
if(caso_4>40){
    montazo=montazo+montito*0.2;
}else{
    montazo=montazo+montito*0.1
}
console.log(`el monto para que contrate su tarifa es:${montazo}`);


// 3.11

let aniosEnChamba = +prompt("cuantos aniuos llega en el trabajo")
let bonirijillo = 0;
switch(aniosEnChamba){
    case 1:
        bonirijillo=100;
    break;
    case 2:
        bonirijillo=200;
    break;
    case 3:
        bonirijillo=300;
    break;
    case 4:
        bonirijillo=400;
    break;
    case 5:
        bonirijillo=500;
    break;
    default:
        bonirijillo=1000;
}
console.log(`el bono que le corresponde es ${bonirijillo}`);
