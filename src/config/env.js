//importo dotenv para cargar las variables de entorno desde un archivo .env
require('dotenv').config()
//importo env-var para manejar las variables de entorno como numeros y cadenas
const {get} = require('env-var');

//exporto las variables de entorno que necesito convirtiendo los tipos de datos
// y estableciendo valores por defecto si es necesario
// y marcando como requeridas aquellas que son imprescindibles
const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

module.exports = envs;