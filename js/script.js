document.addEventListener('DOMContentLoaded', function() {
    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        fetchProductDetails(productId);
    }

    function fetchProductDetails(id) {
        fetch(`/products/product${id}.json`)
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
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h2>${product.name}</h2>
                <p>Precio: ${product.price}€</p>
                <p>${product.description}</p>
            </div>
        `;
    }

    document.getElementById('add-to-cart').addEventListener('click', function() {
        alert('Producto añadido a la cesta');
    });
});
