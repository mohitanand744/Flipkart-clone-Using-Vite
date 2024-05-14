import { getLocalStorageData } from "./getLocalStorageData";

export let updateTotalPrice = () => {
  let localStorageData = getLocalStorageData();
  let totalAmount = document.querySelector(".total-amount");

  let finalTotalAmount = document.querySelector(".totalAmount")

  let totalPrice = localStorageData.reduce((acc, lsData) => {
    let lsPrice = lsData.price;
    return acc + lsPrice;
  }, 0);

  totalAmount.innerText = `₹${totalPrice.toFixed(2)}`;
  finalTotalAmount.innerText = `₹${(totalPrice + 98).toFixed(2)}`
  

};
