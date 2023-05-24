import { getExistingProducts } from "./addcart.js";

const productsAdded = getExistingProducts();

const cartContainer = document.querySelector(".product");

if (productsAdded.length === 0) {
  cartContainer.innerHTML = "No jackets in your basket at the moment";
}

productsAdded.forEach((product) => {
  cartContainer.innerHTML += `<div class="product">
                                    <h4>${productsAdded.name}</h4>
                                    <p>${productsAdded.description}</p>
                                    <p>${productsAdded.price}</p>
                                    <i class="fa fa-heart"></i>
                                </div>`;
});
