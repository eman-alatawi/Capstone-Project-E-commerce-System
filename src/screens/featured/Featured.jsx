import React, { useState } from "react";
import BannerImage from "../../assets/featured-products-banner.png";
import ProductCategory from "../../components/productCategory/ProductCategory";
import { productData } from "../../data/productData";

const Featured = () => {

  const [data, setData] = useState([productData])
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ProductCategory
      isLoading={isLoading}
      categoriesdProducts={data}
      bannerDesc="Featured Products"
      bannerImg={BannerImage}
    />
  );
};

export default Featured;
