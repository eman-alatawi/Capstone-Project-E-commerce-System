import React from "react";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import PropType from "prop-types";

const CartItemQuantity = ({ id, quantity, remainingQty }) => {

  const onIncreaseQty = () => {};

  const onDesreaseQty = () => {};
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body1" color="secondary.dark">
        Quantity:
      </Typography>
      <IconButton
        size="small"
        disabled={remainingQty === quantity}
        onClick={onIncreaseQty}
      >
        <AddOutlined />
      </IconButton>

      <Typography variant="body1">{quantity}</Typography>
      <IconButton
        size="small"
        disabled={quantity === 1}
        onClick={onDesreaseQty}
      >
        <RemoveOutlined />
      </IconButton>
    </Box>
  );
};

export default CartItemQuantity;
CartItemQuantity.propTypes = {
  id: PropType.string.isRequired,
  quantity: PropType.number.isRequired,
  remainingQty: PropType.number.isRequired,
};
