// 3.2

let Horas = +prompt("cuantas horas de trabajo al dia realiza?");
let pHora = +prompt("cuanto le pagan por hora?");
let pagoSemanal = 0;
if((Horas*7)>40){
  pagoSemanal = 40*pHora+((Horas*7-40)*(pHora*2));
}else{
  pagoSemanal = Horas*7*pHora;
}
console.log(`Semanalmente recivira ${pagoSemanal}`);

// 3.3

let Capital = +prompt("de cuanto dinero dispone?");
let Regalo = "";
if(Capital<11){
    Regalo="Tarjeta";
}
if(Capital>10 && Capital<101){
    Regalo ="Chocolates";
}
if(Capital>100 && Capital<251){
    Regalo ="Flores";
}
if(Capital>=251){
    Regalo ="Anillo";
}
console.log(`Elregalo es: ${Regalo}`);

// 3.4
// Las dos primeras horas a $5.00 c/u.
// Las siguientes tres a $4.00 c/u.
// Las cinco siguientes a $3.00 c/u.
// Después de diez horas el costo por cada una es de dos pesos.

let horasCumplidas = +prompt("Cuantas horas utilizo el estacionamiento?");
let Pago = 0;
if(horasCumplidas<=10){
    if(horasCumplidas<6){
        if(horasCumplidas<3){
            Pago =horasCumplidas*5;
        }else{
            pago =2*5 + (horasCumplidas-2)*4;
        }
    }else{
        pago =2*5 + 3*4 + (horasCumplidas-5)*3;
    }
}else{
    Pago = 2*5 + 3*4 + 5*3 +(horasCumplidas-10)*2;
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

if(anios>2 && anios<5){
      bono1 = sueldaso*0.2;
}else if(anios>=5){
    bono1 = sueldaso*0.3;
}

if(sueldaso<=1000){
    bono2 =sueldaso*0.25;
}else if(sueldaso>1000 && sueldaso<=3500){
    bono2 =sueldaso*0.15;
}else if(sueldaso>3500){
    bono2 =sueldaso*0.10;
}

if(bono1>bono2){
    bonoMayor=bono1;
}else{
    bonoMayor=bono2;
}
console.log(`Bono antiguedad:${bono1}, Bono por monto de sueldo:${bono2}`);
console.log(`Bono que se le asigno:${bonoMayor}`);






