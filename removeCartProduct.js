import { cartEmptyCheck } from "./cartEmpty";
import { getLocalStorageData } from "./getLocalStorageData";
import { updateCartValue } from "./updateCartValue";
import { updateTotalPrice } from "./updateTotalPrice";

export let removeCartProduct = (id) => {
  cartEmptyCheck();
  let localStorageData = getLocalStorageData();

  let filteredData = localStorageData.filter((data) => data.id !== id);
  localStorage.setItem("productData", JSON.stringify(filteredData));

  let div = document.getElementById(`card${id}`);
  if (div) {
    div.remove();
  }

  updateCartValue(filteredData);
  updateTotalPrice();
};
