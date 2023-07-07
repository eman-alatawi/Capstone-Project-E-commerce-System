import React, { useState } from "react";
import BannerImage from "../../assets/recommended-products-banner.png";
import ProductCategory from "../../components/productCategory/ProductCategory";
import { productData } from "../../data/productData";

const Recommended = () => {
  
  const [data, setData] = useState([productData])
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ProductCategory
      isLoading={isLoading}
      categoriesdProducts={data}
      bannerDesc="Recommended Products"
      bannerImg={BannerImage}
    />
  );
};

export default Recommended;
