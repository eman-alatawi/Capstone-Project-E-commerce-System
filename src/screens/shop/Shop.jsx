import React, { lazy, Suspense, useState } from "react";

import AsideFilters from "./components/AsideFilters";
const ProductGrid = lazy(() => import("../../components/product/ProductGrid"));

import ProductsList from "../../components/product/ProductsList";
import ProductGridSkeleton from "../../components/product/skeleton/ProductGridSkeleton";

import VerticalLayout from "../../components/common/layout/VerticalLayout";
import CustomContainer from "../../components/common/layout/CustomContainer";
import { productData } from "../../data/productData";

const Shop = () => {

  const [products, setProducts] = useState([productData, productData, productData])
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CustomContainer>
      <VerticalLayout>
        <AsideFilters />
        <ProductsList >
          <Suspense fallback={<ProductGridSkeleton columns={4} />}>
            <ProductGrid
              products={products}
              isLoading={isLoading}
              columns={4}
            />
          </Suspense>
        </ProductsList>
      </VerticalLayout>
    </CustomContainer>
  );
};

export default Shop;
