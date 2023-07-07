import React from "react";
import ProductForm from "../../../components/form/productForm/ProductForm";
import { Box, Typography } from "@mui/material";

const AddProduct = () => {
  
  const onSubmitForm = async (product) => {};
  return (
    <Box>
      <Typography variant="h3">Add New Product</Typography>
      <ProductForm
        product={{
          name: "",
          brand: "",
          color: "",
          description: "",
          image: "",
          price: 0,
          maxQuantity: 0,
          remainingQty: 0,
          designDetails: [],
          sizes: [],
          imageCollection: [],
          isFeatured: false,
          isNewArrival: false,
          isRecommended: false,
        }}
        onSubmitForm={onSubmitForm}
        isLoading={false}
      />
    </Box>
  );
};

export default AddProduct;
