import "./style.css";
import "./Media-Query.css";
import products from "./products.json";
import { getLocalStorageData } from "./getLocalStorageData";
import { removeCartProduct } from "./removeCartProduct";
import { quantityToggle } from "./quantityToggle";

let localStorageData = getLocalStorageData();

let localStorageIds = localStorageData.map((data) => data.id);

let filterApiData = products.filter((product) =>
  localStorageIds.includes(product.id)
);

console.log(filterApiData);

let templateOfProductsCard = document.querySelector("#product-template");
let cartContainer = document.querySelector(".right-container");

let showCarts = () => {
  filterApiData.forEach((product) => {
    let {price, description, image, id } = product;

    let cloneCard = document.importNode(templateOfProductsCard.content, true);

    let existingProduct = localStorageData.find((product) => product.id === id);

    console.log(existingProduct);

    let localStorageQuantity = existingProduct.quantity;
    let localStoragePrice = existingProduct.price;

    let quantityNum = cloneCard.querySelector(".product-count");
    let cardImage = cloneCard.querySelector("img");
    let desc = cloneCard.querySelector(".discription p");
    let orgPrice = cloneCard.querySelector(".org-price");
    let prices = cloneCard.querySelector(".price");
    cloneCard.querySelector(`#card`).setAttribute("id", `card${id}`);
    cardImage.src = image;
    desc.innerText = description;
    prices.innerText = `₹${localStoragePrice}`;
    orgPrice.innerText = `₹${localStoragePrice * 2}`;
    quantityNum.innerText = localStorageQuantity;

    cloneCard
      .querySelector(".product-quantity")
      .addEventListener("click", (e) => {
        quantityToggle(e, id, localStoragePrice);
      });

    cloneCard.querySelector(".remove").addEventListener("click", () => {
      removeCartProduct(id);
    });

    cartContainer.append(cloneCard);
  });
};

showCarts();
