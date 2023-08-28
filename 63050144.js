const productsContainer = document.querySelector(".products-container");
const searchField = document.querySelector(".search-field");

const displayProducts = (arrayData) => {
  productsContainer.innerHTML = "";

  arrayData.forEach((element) => {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `  <div class="product-card">
            <img
              src="${element.thumbnail}"
              alt="img"
            />
            <div class="card-content">
              <h3>${element.title}</h3>
              <p>${element.description}</p>
            </div>
            <div class="card-footer">
              <div>฿ ${element.price}</div>
            </div> 
          </div>
            `
    );
  });
};

const getData = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=12");
  const responseJson = await response.json();

  const { products } = responseJson;
  console.log(products);

  /*products.forEach((element) => {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `  <div class="product-card">
      <img
        src="${element.thumbnail}"
        alt="img"
      />
      <div class="card-content">
        <h3>${element.title}</h3>
        <p>${element.description}</p>
      </div>
      <div class="card-footer">
        <div>฿ ${element.price}</div>
      </div> 
    </div>
      `
    );
  }); */

  displayProducts(products);

  /*searchField.addEventListener("input", (Event) => {
    const { value } = Event.target;

    const filter = products.filter((el) => {
      return el.title.toLowerCase().includes(value.toLowerCase());
    });

    displayProducts(filter);
  });*/
};
getData();
