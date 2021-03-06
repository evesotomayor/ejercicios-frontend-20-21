"use strict";

class Cliente {
    constructor(nombre, rut, sueldo) {
        this.nombre = nombre
        this.rut = rut
        this.sueldo = sueldo
    }
    toString() {
        return `${this.nombre} ${this.rut} ${this.sueldo}`;
    }
}

let clientes = [
    new Cliente('Pedro', '14144144-4', 400000),
    new Cliente('Pepito', '13133133-3', 300000),
    new Cliente('María', '12122122-2', 200000),
    new Cliente('Ignacio', '15155155', 500000),
    new Cliente('Hector', '16166166-6', 600000),
    new Cliente('Patricio', '17177177-7', 700000),
    new Cliente('Juanita', '18188188-8', 800000),
    new Cliente('Polin', '19199199-9', 900000)
];

/*
    Ejercicio:
    parte 1: completar los compontentes clientes-lista y clientes-datos
    para que muestre el listado de clientes.
    parte 2: en clientes-lista, implementar una búsqueda activa.

    Parte 3: Crear otro componente para crear un nuevo cliente.
*/

Vue.component('clientes-datos', {
    template: /*html*/`
        <div>
            <p>Nombre: {{datos.nombre}}</p>
            <p>Rut: {{datos.rut}}</p>
            <p>Sueldo: {{datos.sueldo}}</p>
            <hr>
        </div>
    `,
    props: ["datos"]
})

Vue.component('clientes-lista', {
    template: /*html*/`
        <div>
        <input type="search" v-model="filtro">
            <clientes-datos v-for="cliente of filtrado" :datos="cliente" :key="cliente.rut"></clientes-datos>           
        </div>
    `,
    props: ["lista"],
    data() {
        return {
            filtro: ""
        }
    },
    computed: {
        filtrado() {
            return this.lista.filter((cliente) => cliente.toString().toUpperCase().includes(this.filtro.toUpperCase()));
        }
    }
})

Vue.component('clientes-nuevo', {
    template: /*html*/`
    <form @submit.prevent>
        <input type="text" v-model="nombre"><br><br>
        <input type="text" v-model="rut"><br><br>
        <input type="number" v-model.number="sueldo"><br><br>
        <button @click="agregar()">Agregar Clientes</button>      
    </form>
`,
props: ["lista"],
data() {
    return {
        nombre: "",
        rut: "",
        sueldo: 0
    }
},
methods: {
    agregar() {
        this.lista.push(new Cliente(this.nombre, this.rut, this.sueldo))      
    }
}
}) 

let app = new Vue({
    el: "#app",
    data: {
        clientes: clientes
    }
})

