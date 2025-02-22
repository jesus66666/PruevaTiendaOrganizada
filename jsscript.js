document.addEventListener("DOMContentLoaded", function() {
    let productosContainer = document.getElementById("productos-container");

    //ruta dentro de las comillas de los archivos HTML Lista de archivos HTML con los productos
    let productos = [
    "ropa.html", 
    "martillo.html", 
    "cuchara.html", 
    "comida.html"];

    // Cargar cada archivo y agregarlo al contenedor
    productos.forEach(producto => {
        fetch(producto)
            .then(response => response.text())
            .then(html => {
                let div = document.createElement("div");
                div.innerHTML = html;
                productosContainer.appendChild(div);
            })
            .catch(error => console.error("Error al cargar el producto:", producto, error));
    });
});
