"use strict";

let app = new Vue({
    el: "#app",
    data: {
        inset: false,
        offsetX: 0,
        offsetY: 0,
        blur: 0,
        spread: 0,
        color: "#000000",
        opacity: 0,
        unit: "px"
    },
    computed: {
        shadow() {
            // return (this.inset ? "inset " : "") + this.offsetX + "px " + this.offsetY + "px " + this.blur + "px " + this.spread + "px rgb(230 10 10 / 90%)";
            return `${this.inset ? "inset " : ""}${this.offsetX}${this.unit} ${this.offsetY}${this.unit} ${this.blur}${this.unit} ${this.spread}${this.unit} rgb(${parseInt(this.color.substr(1,2),16)} ${parseInt(this.color.substr(3,2),16)} ${parseInt(this.color.substr(5,2),16)} / ${this.opacity}%)`;

        }
    }

})