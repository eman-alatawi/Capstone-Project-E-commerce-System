import React from "react";
import AdminTopToolbar from "../../../components/common/toolbar/AdminTopToolbar";
import ProductsTable from "./components/ProductsTable";

const Products = () => {

  return (
    <>
      <AdminTopToolbar
        heading="Products"
        isLoading={false}
        totalCount={0}
      />
      <ProductsTable isLoading={false} data={[]} />
    </>
  );
};

export default Products;
