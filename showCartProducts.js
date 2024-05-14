import "./style.css";
import "./Media-Query.css";
import products from "./products.json";
import { getLocalStorageData } from "./getLocalStorageData";
import { removeCartProduct } from "./removeCartProduct";
import { quantityToggle } from "./quantityToggle";

let rightContainer = document.querySelector(".right-container");
let leftContainer = document.querySelector(".left-container");
let loginHoverDropDown = document.querySelector(".login-hover-dropDown");
document.querySelector(".login-container").addEventListener("click", () => {
  loginHoverDropDown.classList.toggle("activeDropDown");
});

let localStorageData = getLocalStorageData();

if (localStorageData.length === 0) {
  let image = document.createElement("img");
  image.src = "https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png";
  image.classList.add("empty");
  leftContainer.innerHTML = "<h1 class='emty'>Your cart is empty! 😒</h1>";
  rightContainer.appendChild(image);
}

let localStorageIds = localStorageData.map((data) => data.id);

let filterApiData = products.filter((product) =>
  localStorageIds.includes(product.id)
);

let templateOfProductsCard = document.querySelector("#product-template");
let cartContainer = document.querySelector(".right-container");

let showCarts = () => {
  filterApiData.forEach((product) => {
    let { price, description, image, id } = product;

    let cloneCard = document.importNode(templateOfProductsCard.content, true);

    let existingProduct = localStorageData.find((product) => product.id === id);

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
        quantityToggle(e, id, price);
      });

    cloneCard.querySelector(".remove").addEventListener("click", () => {
      removeCartProduct(id);
    });

    cartContainer.append(cloneCard);
  });
};

showCarts();
