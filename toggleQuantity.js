export let toggleQuantity = (e, id) => {
  let currCard = document.querySelector(`#card${id}`);
  let productQuantity = currCard.querySelector(".product-count");

  let quantity =
    parseInt(productQuantity.getAttribute("productQuantitys")) || 1;

  if (e.target.className === "plus-quantity") {
    quantity++;
  }
  if (e.target.className === "minus-quantity") {
    if (quantity > 1) {
      quantity--;
    }
  }

  productQuantity.innerText = quantity;
  productQuantity.setAttribute("productQuantitys", quantity);

  return quantity;
};
