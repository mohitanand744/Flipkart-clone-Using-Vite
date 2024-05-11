import "./style.css";
import "./Media-Query.css";
import products from "./products.json";
import { getLocalStorageData } from "./getLocalStorageData";

let localStorageData = getLocalStorageData();

let localStorageIds = localStorageData.map((data) => data.id);

let filterApiData = products.filter((product) => {
  return localStorageIds.includes(product.id);
});

console.log(filterApiData);

let templateOfProductsCard = document.querySelector("#product-template");
let cartContainer = document.querySelector(".right-container");

let showCarts = () => {
  filterApiData.forEach((product) => {
    let { price, description, image, id } = product;

    let cloneCard = document.importNode(templateOfProductsCard.content, true);

    let existingProduct = localStorageData.find((product) => product.id === id);

    let quantity = existingProduct.quantity;
    let pricess = existingProduct.price;

    let quantityNum = cloneCard.querySelector(".product-count");
    let cardImage = cloneCard.querySelector("img");
    let desc = cloneCard.querySelector(".discription p");
    let orgPrice = cloneCard.querySelector(".org-price");
    let prices = cloneCard.querySelector(".price");
    cloneCard.querySelector(`#card`).setAttribute("id", `card${id}`);
    cardImage.src = image;
    desc.innerText = description;
    prices.innerText = `₹${pricess}`;
    orgPrice.innerText = `₹${pricess * 2}`;
    quantityNum.innerText = quantity

    cartContainer.append(cloneCard);
  });
};

showCarts();
