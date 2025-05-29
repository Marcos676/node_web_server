//(() => {}) //Funcion agnostica o anónima, porque no tiene nombre
//(() => {})() //Funcion agnostica autocombocada (autocombocada porque se ejecuta inmediatamente con el ultimo parentesis)
/* (() => console.log("Hola, soy una función agnóstica autocombocada"))();

(() => console.log("Hola, soy otra función agnóstica autocombocada"))(); */


import { envs } from "./config/env.js";
import { startServer }  from "./server/server.js";

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

(async () => {
    main();
})()