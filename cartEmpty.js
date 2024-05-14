import { getLocalStorageData } from "./getLocalStorageData";

let rightContainer = document.querySelector(".right-container");
let leftContainer = document.querySelector(".left-container");
let localStorageData = getLocalStorageData();

export let cartEmptyCheck = () => {
  if (localStorageData.length === 0) {
    let image = document.createElement("img");
    image.src =
      "https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png";
    image.classList.add("empty");
    leftContainer.innerHTML = "<h1 class='emty'>Your cart is empty! 😒</h1>";
    rightContainer.appendChild(image);
  }
};
