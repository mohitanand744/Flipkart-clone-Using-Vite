export let offerProducts = () => {
  let bestSellingProductsContainer = document.querySelector(
    ".offer-products"
  );

  let btnContainer = document.querySelector(".Offers-products");
  let prevBtn = btnContainer.querySelector(".prev");
  let nextBtn = btnContainer.querySelector(".next");

  nextBtn.onclick = () => {
    bestSellingProductsContainer.scrollLeft += 300;
  };
  prevBtn.onclick = () => {
    bestSellingProductsContainer.scrollLeft -= 300;
  };
};
