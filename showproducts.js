import { addToCard } from "./addtocard";
import { toggleQuantity } from "./toggleQuantity";

let productsContainer = document.querySelector(
  ".product-you-may-like-container"
);

let templateOfProductsCard = document.querySelector("#template-products");

export let showCards = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((product) => {
    let { price, description, image, id } = product;

    let cloneCard = document.importNode(templateOfProductsCard.content, true);

    let cardImage = cloneCard.querySelector("img");
    let desc = cloneCard.querySelector(".discription p");
    let orgPrice = cloneCard.querySelector(".org-price");
    let prices = cloneCard.querySelector(".price");
    cloneCard.querySelector(`#card`).setAttribute("id", `card${id}`);
    cardImage.src = image;
    desc.innerText = description;
    prices.innerText = `₹${price}`;
    orgPrice.innerText = `₹${price * 2}`;

    cloneCard
      .querySelector(".product-quantity")
      .addEventListener("click", (e) => {
        toggleQuantity(e, id);
      });

    cloneCard.querySelector(".addtocard").addEventListener("click", (e) => {
      addToCard(e, id);
    });
    productsContainer.append(cloneCard);
    
  });
};
