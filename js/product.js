const productContainer = document.querySelector(".product");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const baseUrl = "https://api.noroff.dev/api/v1/rainy-days/" + id;

async function getProduct() {
  try {
    const response = await fetch(baseUrl);
    const product = await response.json();
    createHtml(product);
  } catch (error) {
    console.error({ error: "Could not load content" });
  }
}

getProduct();

const changeTitle = document.title;


function createHtml(product) {
  productContainer.innerHTML = `
    <div class="card">
      <div class=card-img><img src="${product.image}" alt="${product.description}"/>
      </div>
      <div class=card-content>
      <h2>${product.title}</h2>
      <div class="padding-top"><br>${product.description}</div>        
      <h4 class="price">&euro; ${product.price}</h4>      
      <button class="button" data value=${product.id}>Add to cart</a></button>
      </div>
    </div>
`;
}
