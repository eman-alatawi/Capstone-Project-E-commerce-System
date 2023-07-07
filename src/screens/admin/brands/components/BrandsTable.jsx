import React from "react";
import PropType from "prop-types";

const BrandsTable = ({ isLoading, data, handleDialogOpen }) => {
  return <h1>Brands Table goes here</h1>;
};

export default BrandsTable;

BrandsTable.propTypes = {
  isLoading: PropType.bool.isRequired,
  data: PropType.array,
  handleDialogOpen: PropType.func.isRequired,
};
