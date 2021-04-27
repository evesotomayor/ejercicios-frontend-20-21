"use strict";

let app = new Vue({
    el: "#app",
    data: {
        monos: [
            {
                gif: "",
                descripcion: "vacio"
            },
            {
                gif: "https://media.tenor.com/images/2269701a0f9af59a8d7d89d32c4ac456/tenor.gif",
                descripcion: "quby barras"
            },
            {
                gif: "https://media1.tenor.com/images/4e13be6ee0aaa339106b8d1bee0d7500/tenor.gif?itemid=16099354",
                descripcion: "quby dancer"
            },
            {
                gif: "https://media1.tenor.com/images/a5e63270edf318f0d3da3c423cb2cbbe/tenor.gif?itemid=19125468",
                descripcion: "quby caminando"
            }
        ],
        elegir: undefined
    },
    mounted() {
        this.elegir = this.monos[0];
    } 
})