let cartValue = document.querySelector(".productListCount");

export let updateCartValue = (products) => {
  cartValue.innerText = products.length;
};
