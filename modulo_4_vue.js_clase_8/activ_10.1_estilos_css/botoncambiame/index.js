"use strict";

let app = new Vue({
    el: "#app",
    data: {
        demos: 0
    },
    methods: {
        cambiar() {
            this.demos++;
            if (this.demos>=7) {
                this.demos=0;
            }
        }
    }
})