import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let who = ['Mi Hijo', 'Mi Esposa', 'Mi Vecina', 'Mi Coche'];
let action = ['jugaba', 'comio', 'rompio', 'estuvo'];
let what = ['Minecraft', 'Lasaña', 'Encendido'];
let when = ['antes del colegio', 'cuando estuve trabajando', 'esta mañana', 'cuando almorzaba', 'la semana pasada'];

//const randomNumber = Math.floor(Math.random() * excusas.length)

window.onload = function () {
  //write your code here
//document.querySelector("#excusa").innerHTML = "holaaaaaaaaaaaaaaaaa"
//DIOS ESTA COSA ME VA A LICUAR EL CEREBRO D: 
//console.log(randomNumber);
const nombres = ["Mi Hijo", "Mi esposa", "Mi vecina", "Mi madre"];
const accion = ["juega", "come", "observa", "camina"]
const relleno = ["cuando trabajo", "antes del colegio", "en la mañana", "la semana pasada"]

let nombresAleat = nombres[Math.floor(Math.random() * nombres.length)];
let accionAleat = accion[Math.floor(Math.random() * accion.length)];
let rellenoAleat = relleno[Math.floor(Math.random() * relleno.length)];

//const resultado = `${nombres} ${accion} ${relleno}`
const resultado = `${nombresAleat} ${accionAleat} ${rellenoAleat}`;

document.querySelector("#resultado").innerHTML = resultado;


};
