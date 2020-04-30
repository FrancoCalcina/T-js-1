// 4.1

let salario = 1500;
let i=0;
while( i<6){
    salario= salario + i*10/100*salario;
    console.log(`Salario--Anio ${i+1} : ${salario}`);
    i++;
}
console.log(`Salario al cabo de 2 anios ${salario}`);

// // 4.3

let Cantidad = +prompt("cuantos numeros desea ingresar");
let numero = 0;
let c = 0;
let c1=0;
let c2=0;
let c3=0;
while(c<Cantidad){
      numero= +prompt("ingrese numero");
      if(numero ===0){
           c1++;
      }else if(numero>0){
          c2++;
      }else {
          c3++;
      }
      c++;
}
console.log(`DelosNumerosIngresados: ${c1} son cero ,${c2} mayores a cero, ${c3} menores a`);


// // 4.9

let Mensual;
let mensualAcumulado = 0;
let Continuar = "SI";
while(Continuar ==="SI"){
    s=0
    while(s<12){
        mensual= +prompt("deposito del mes");
        mensualAcumulado=mensualAcumulado+mensual;
        s++;
    }
    console.log(`depositado durante el año ${mensualAcumulado}, interes 10% anual:${0.1*mensualAcumulado}`);
    mensualAcumulado=0;
    s=0;
    Continuar = prompt("continua su deposito un año mas? SI/NO")
}
console.log("Eligio no depositar mas en este banco");


// 4.13
// Un vendedor ha realizado N ventas y desea saber cuántas fueron
// por 10,000 o menos, cuántas fueron por más de 10,000 pero por
// menos de 20,000, y cuánto fue el monto de las ventas de cada una y
// el monto global. Realice un algoritmo para determinar  los totales.
// Represente la solución mediante diagrama de flujo, pseudocódigo y
// diagrama N/S

let cont_1=0;
let cont_2=0;
let suma_1=0;
let suma_2=0;
let sumaToatl=0;
let numVentas = +prompt("ingrese Numero de ventas");
let montirijillo = 0;
let x=0
while(x<numVentas){
    montirijillo= +prompt("ingrese monto del Articulo");
    if(montirijillo<=10000){
        cont_1++;
        suma_1=suma_1+montirijillo;
    }else if(montirijillo>10000 && montirijillo<20000){
        cont_2++;
        suma_2=suma_2+montirijillo;
    }
    sumaToatl=sumatoatl+montirijillo;
    x++;
}
console.log(`cantidad: articulos de costo <=10000: ${cont_1} ; Monto total: ${suma_1}`);
console.log(`cantidad: articulos de costo >10000 y <20000: ${cont_2} ; Monto total: ${suma_2}`);
console.log(`Monto general recoudado: ${sumaToatl}`);









  







