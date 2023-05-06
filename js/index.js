const productsContainer = document.querySelector(".products");

const baseUrl = "https://api.noroff.dev/api/v1/rainy-days";

async function getProducts() {
  try {
    const response = await fetch(baseUrl);
    const products = await response.json();

    productsContainer.innerHTML = "";

    for (let i = 9; i < products.length; i++) {
      productsContainer.innerHTML += `
      <div class="product-item">
          <img src="${products[i].image}" alt="${products[i].description}" />
          <h4>${products[i].title}</h4>
                <button class="button"><a href="product.html?id=${products[i].id}">Explore</a></button>
      </div>
      `;
    }
  } catch (error) {
    console.error({ error: "Could not load content" });
  }
}

getProducts();
