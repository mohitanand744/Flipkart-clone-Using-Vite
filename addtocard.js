import { getLocalStorageData } from "./getLocalStorageData";
import { updateCartValue } from "./updateCartValue";

getLocalStorageData();

export const addToCard = (e, id) => {
  let arrLocalStorageData = getLocalStorageData();

  const currCard = document.querySelector(`#card${id}`);

  let quantity = Number(currCard.querySelector(".product-count").innerText);
  let price = currCard.querySelector(".price").innerText;
  price = Math.floor(Number(price.replace("₹", "") * quantity));

  let existingProduct = arrLocalStorageData.find(
    (products) => products.id === id
  );

  if (existingProduct) {
    return false;
  }

  let updatedData = { id, quantity, price };

  arrLocalStorageData.push(updatedData);
  localStorage.setItem("productData", JSON.stringify(arrLocalStorageData));

  updateCartValue(arrLocalStorageData);
};
