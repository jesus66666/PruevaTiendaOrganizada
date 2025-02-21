        function sendWhatsApp(phone, productId, description) {
            let currentUrl = window.location.href.split('#')[0]; // Obtener la URL base sin fragmentos
            let productUrl = `${currentUrl}#producto-${productId}`; // Construir URL con ID del producto
            let message = encodeURIComponent(`Hola, estoy interesado en este producto: ${description}\n\nMira aquí: ${productUrl}`);
            let url = `https://wa.me/${phone}?text=${message}`;
            window.open(url, '_blank'); // Abrir WhatsApp en una nueva pestaña
        }

        function scrollToProduct() {
            let hash = window.location.hash; // Obtener el fragmento de la URL
            if (hash) {
                let element = document.querySelector(hash);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave al producto
                        highlightProductImage(element); // Aplicar sombreado
                    }, 500);
                }
            }
        }

        function highlightProductImage(productElement) {
            if (productElement) {
                let productImage = productElement.querySelector(".Articulo"); // Seleccionar solo la imagen del producto
                if (productImage) {
                    productImage.classList.add("highlighted"); // Agregar sombreado púrpura
                }
            }
        }

        document.getElementById('searchInput').addEventListener('input', function() {
            let searchValue = this.value.toLowerCase();
            let products = document.querySelectorAll('.container');

            products.forEach(product => {
                let keywords = product.getAttribute('data-keywords'); // Obtener palabras clave del producto
                if (keywords.toLowerCase().includes(searchValue) || searchValue === '') {
                    product.style.display = "flex"; // Mostrar producto si coincide
                } else {
                    product.style.display = "none"; // Ocultar producto si no coincide
                }
            });
        });