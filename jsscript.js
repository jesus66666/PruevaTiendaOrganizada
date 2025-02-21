document.addEventListener("DOMContentLoaded", function() {
    let productosContainer = document.getElementById("productos-container");

    // Lista de archivos HTML con los productos
    let productos = [
    "productos/ropa.html", 
    "productos/martillo.html", 
    "productos/cuchara.html", 
    "productos/comida.html"];

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
