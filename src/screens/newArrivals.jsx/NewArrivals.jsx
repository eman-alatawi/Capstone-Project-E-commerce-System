import React, { useState } from "react";
import BannerImage from "../../assets/new-arrivals-banner.png";
import ProductCategory from "../../components/productCategory/ProductCategory";
import { productData } from "../../data/productData";

const NewArrivals = () => {
  const [data, setData] = useState([productData])
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ProductCategory
      isLoading={isLoading}
      categoriesdProducts={data}
      bannerDesc="NewArrivals"
      bannerImg={BannerImage}
    />
  );
};

export default NewArrivals;
