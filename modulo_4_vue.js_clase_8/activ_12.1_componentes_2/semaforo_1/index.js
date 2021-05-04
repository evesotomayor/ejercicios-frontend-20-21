"use strict";

Vue.component("semaforo", {
    props: ['titulo', 'roja', 'amarilla', 'verde', 'value'],
    template: /*html*/ `
    <div class="componentesemaforo">
        <h1>{{titulo}}</h1>
        <div class="semaforo">
            <div class="luzsemaforo roja" :class="{encendido: value=='roja'}"></div>
            <div class="luzsemaforo amarilla" :class="{encendido: value=='amarilla'}"></div>
            <div class="luzsemaforo verde" :class="{encendido: value=='verde'}"></div>
        </div>
        <div class="controles">
            <label><input type="radio" v-bind:checked="value==''" @input="$emit('input', '')">--elija un color--</label><br>
            <label><input type="radio" v-bind:checked="value=='roja'" @input="$emit('input', 'roja')">{{roja}}</label><br>
            <label><input type="radio" v-bind:checked="value=='amarilla'" @input="$emit('input', 'amarilla')">{{amarilla}}</label><br>
            <label><input type="radio" v-bind:checked="value=='verde'" @input="$emit('input', 'verde')">{{verde}}</label><br>
        </div>
    </div>
    `,
    data() {
        return {
            luzactiva: "",
        }
    }, 
})

let app = new Vue({
    el: "#app",
    data: {
        semaforos: [
            {
                titulo: "Riesgo de incendio",
                roja: "Alto",
                amarilla: "Moderado",
                verde: "Bajo"
            },
            {
                titulo: "Rayos UV",
                roja: "Peligroso",
                amarilla: "Muy alto",
                verde: "Alto"
            },
            {
                titulo: "Riesgo de lluvias",
                roja: "Diluvio",
                amarilla: "Lloviznas",
                verde: "Nubarrones"
            }       
        ]
    }
})