import React from "react";
import { useParams } from "react-router-dom";
import { Box, Skeleton, Typography } from "@mui/material";
import ProductForm from "../../../components/form/productForm/ProductForm";


const EditProduct = () => {
  const { id } = useParams();

  const onSubmitForm = async (product) => {};

  return (
    <Box>
      {isLoading ? (
        <Skeleton variant="rectangular" height={600} />
      ) : (
        <>
          <Typography variant="h3">Edit Product</Typography>
          <ProductForm
            product={product}
            onSubmitForm={onSubmitForm}
            isLoading={false}
          />
        </>
      )}
    </Box>
  );
};

export default EditProduct;
