let bestSellingProductsContainer = document.querySelector(
  ".bestselling-products"
);
let templateBestsellingProducts = document.querySelector(
  "#template-bestselling-products"
);

export let showBestSellingProduct = (bestSellingProducts) => {
  if (!bestSellingProducts) {
    return false;
  }
  bestSellingProducts.forEach((bestSellingProducts) => {
    let { id, image, price } = bestSellingProducts;
    let cloneImageOfBestSellingProducts = document.importNode(
      templateBestsellingProducts.content,
      true
    );

    cloneImageOfBestSellingProducts.querySelector("img").src = image;

    bestSellingProductsContainer.append(cloneImageOfBestSellingProducts);
  });
};

let btnContainer = document.querySelector(".bestselling");
let prevBtn = btnContainer.querySelector(".prev");
let nextBtn = btnContainer.querySelector(".next");

nextBtn.onclick = () => {
  bestSellingProductsContainer.scrollLeft += 200;
};
prevBtn.onclick = () => {
  bestSellingProductsContainer.scrollLeft -= 200;
};
