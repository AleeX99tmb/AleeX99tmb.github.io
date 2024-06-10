document.addEventListener('DOMContentLoaded', function() {
    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        fetchProductDetails(productId);
    }

    function fetchProductDetails(id) {
        fetch(`/productos/product${id}.json`)
            .then(response => response.json())
            .then(data => {
                displayProductDetails(data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }

    function displayProductDetails(product) {
        const productDetailsDiv = document.getElementById('product-details');
        productDetailsDiv.innerHTML = `
            <section id="novedades" class="py-5">
                <div class="container">
                    <!-- Línea amarilla encima del título -->
                    <div class="border-top border-warning mb-2" style="border-width: 5px;"></div>
                    <h2 class="text-center mb-4">${product.name}</h2>

                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img src="${product.image}" class="img-fluid img-thumbnail" alt="${product.name}">
                        </div>
                        <div class="col-md-6">
                            <p>${product.description}</p>
                            <p>Precio: ${product.price}€</p>
                            <button class="btn btn-dark btn-lg">Anadir a la cesta</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    document.getElementById('add-to-cart').addEventListener('click', function() {
        alert('Producto añadido a la cesta');
    });
});
