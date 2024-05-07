import "./style.css";
import "./Media-Query.css";
import showSliderImage from "./imageSlider";
import bestSellingProducts from "./bestselling.json";
import { showBestSellingProduct } from "./bestSellingProducts";

showSliderImage();

showBestSellingProduct(bestSellingProducts);

