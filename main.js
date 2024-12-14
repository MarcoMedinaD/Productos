const divProductos = document.getElementById("divProductos");
const URLMain = "https://fakestoreapi.com/products"; 
const alertError = document.getElementById("alertError");


function getData() {
    fetch(URLMain)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); 
        })
        .then((res) => {
           
            createCards(res);
        }) 
        .catch((err) => {
            
            alertError.innerText = `Problema al traer la información: ${err.message}`;
            alertError.style.display = "block";
        });//error
}


function createCards(products) {
    products.forEach((product) => {
        divProductos.insertAdjacentHTML(
            "beforeend",
            `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h3 class="card-title">${product.title}</h3>
                    <p class="card-text">${product.description}</p>
                    <p><strong>Precio:</strong> $${product.price}</p>
                </div>
            </div>
            `
        );
    });//Tarjetas
}




getData();

