import { getLocalStorageData } from "./getLocalStorageData";
import { updateTotalPrice } from "./updateTotalPrice";

export let quantityToggle = (e, id, price) => {
  let currCard = document.querySelector(`#card${id}`);
  let productQuantity = currCard.querySelector(".product-count");
  let productPrice = currCard.querySelector(".price");
  let orgPrice = currCard.querySelector(".org-price");
  let quantity = 1;
  let localStoragePrice = 0;

  let localStorageData = getLocalStorageData();

  let existingProduct = localStorageData.find((product) => product.id === id);

  if (existingProduct) {
    quantity = existingProduct.quantity;
    localStoragePrice = existingProduct.price;
  }

  if (e.target.className === "plus-quantity") {
    quantity++;
  }
  if (e.target.className === "minus-quantity") {
    if (quantity > 1) {
      quantity--;
    }
  }

  localStoragePrice = Number((price * quantity).toFixed(2));

  orgPrice.innerText = `₹${localStoragePrice * 2}`;

  productPrice.innerText = `₹${localStoragePrice}`;
  productQuantity.innerText = quantity;

  let updatedData = { id, quantity, price: localStoragePrice };

  updatedData = localStorageData.map((product) => {
    return product.id === id ? updatedData : product;
  });

  localStorage.setItem("productData", JSON.stringify(updatedData));

  updateTotalPrice();
};
