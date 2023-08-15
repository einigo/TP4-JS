"use strict";
/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está
 encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó */

const auto = {
  color: "Rojo",
  marca: "Fiat",
  modelo: "Cronos",
  año: "2022",
  encenderAuto() {
    console.log("El auto esta encendido");
  },
  apagarAuto() {
    console.log("El auto esta apagado");
  },
};
console.log(auto);

auto.encenderAuto();
auto.apagarAuto();
