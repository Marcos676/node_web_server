//importo dotenv para cargar las variables de entorno desde un archivo .env
import { config } from 'dotenv';
config()
//importo env-var para manejar las variables de entorno como numeros y cadenas
import env from 'env-var'

//exporto las variables de entorno que necesito convirtiendo los tipos de datos
// y estableciendo valores por defecto si es necesario
// y marcando como requeridas aquellas que son imprescindibles
export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: env.get('PUBLIC_PATH').default('public').asString()
}