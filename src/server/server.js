const express = require('express');
const path = require('path'); // para leer rutas de archivos estaticos, es decir, archivos que no cambian, como imagenes, css, html, js, etc. // path es propio de node.js

const startServer = (options) => {
    const { port, public_path } = options
    
    const app = express();

    //Para poder utilizar middlewares, se usa la palabra "use" la cual, es propia de express
    // Middleware para servir archivos estáticos
    app.use(express.static(public_path)); // contenido estatico para uso

    //ruta global para servir el index.html
    // Si no se define esta ruta, el navegador no podrá cargar la aplicación y mostrará un error 404
    // La ruta '*' significa que cualquier ruta que no sea una ruta estática, se redirigirá a index.html // Esto es útil para aplicaciones de una sola página (SPA) donde el enrutamiento se maneja del lado del cliente como React o Angular
    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `/../../${public_path}/index.html`);
        res.sendFile(indexPath);// Enviar el archivo index.html como respuesta
    })

    //listen para escuchar peticiones del cliente en el puerto definido
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
})
}

module.exports = startServer;