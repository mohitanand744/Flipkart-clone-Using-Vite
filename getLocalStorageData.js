import { updateCartValue } from "./updateCartValue";

export const getLocalStorageData = () => {
  let localStorageData = localStorage.getItem("productData");


  
  if (!localStorageData) {
    return [];
  }
  
  localStorageData = JSON.parse(localStorageData);

  updateCartValue(localStorageData);

  return localStorageData;
};
