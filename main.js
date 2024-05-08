import "./style.css";
import "./Media-Query.css";
import showSliderImage from "./imageSlider";
import bestSellingProducts from "./bestselling.json";
import { showBestSellingProduct } from "./bestSellingProducts";
import { offerProducts } from "./offerProducts";
import products from "./products.json";
import { showCards } from "./showproducts";

showSliderImage();

showBestSellingProduct(bestSellingProducts);

offerProducts();

showCards(products);
