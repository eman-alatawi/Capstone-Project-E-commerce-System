import React from "react";
import PropType from "prop-types";

const ProductsTable = ({ isLoading, data }) => {
  return <h1>product Table goes here</h1>;
};

export default ProductsTable;

ProductsTable.propTypes = {
  isLoading: PropType.bool.isRequired,
  data: PropType.array,
};
