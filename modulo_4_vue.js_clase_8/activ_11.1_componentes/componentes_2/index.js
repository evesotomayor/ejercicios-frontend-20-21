"use strict";

Vue.component('foto', {
    props: ["cual"],
    template: /*html*/ `
    <div class="imagen">
    <img v-if="cual=='sol'" src="img/sol.png" alt="">
    <img v-if="cual=='auto'" src="img/auto.png" alt="">
    <img v-if="cual=='gato'" src="img/gato.png" alt="">
    </div>
    ` 
}) 

let app = new Vue({
    el: "#app"
}) 