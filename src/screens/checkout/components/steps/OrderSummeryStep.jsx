import React from "react";
import CartContents from "../../../../components/common/cart/CartContents";
import CartFooter from "../../../../components/common/cart/CartFooter";
import { Box } from "@mui/material";
import StepHeader from "./StepHeader";
import { Navigate } from "react-router-dom";
import { HOME } from "../../../../constants/routes";

const OrderSummeryStep = () => {
  //select cart from store

  return cart.length === 0 ? (
    <Navigate to={HOME} />
  ) : (
    <Box>
      <StepHeader header="Order Summary" desc="Review items in your cart." />
      <CartContents cart={cart} />
      <CartFooter cart={cart} />
    </Box>
  );
};

export default OrderSummeryStep;
