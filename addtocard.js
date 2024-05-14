import { getLocalStorageData } from "./getLocalStorageData";
import { updateCartValue } from "./updateCartValue";

getLocalStorageData();

export const addToCard = (id) => {
  let arrLocalStorageData = getLocalStorageData();
  const currCard = document.querySelector(`#card${id}`);

  let quantity = Number(currCard.querySelector(".product-count").innerText);
  let price = currCard.querySelector(".price").innerText;
  price = Math.floor(Number(price.replace("₹", "") * quantity));

  let existingProduct = arrLocalStorageData.find(
    (products) => products.id === id
  );

  if (existingProduct && quantity > 1) {
    quantity = existingProduct.quantity + Number(quantity);
    price = Number(price * quantity);
    let updatedData = { id, quantity, price };

    updatedData = arrLocalStorageData.map((product) => {
      return product.id === id ? updatedData : product;
    });

    localStorage.setItem("productData", JSON.stringify(updatedData));
  }

  if (existingProduct) {
    if (existingProduct.quantity < 2) {
      return false;
    }
  }

  let updatedData = { id, quantity, price };

  arrLocalStorageData.push(updatedData);
  localStorage.setItem("productData", JSON.stringify(arrLocalStorageData));

  updateCartValue(arrLocalStorageData);
};
