import React, { useState } from "react";

import {
  Badge,
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useLocation } from "react-router-dom";

import CartContents from "./CartContents";
import { CloseOutlined } from "@mui/icons-material";
import { CHECKOUT, FORGOT_PASSWORD, SIGNIN, SIGNUP } from "../../../constants/routes";
import CartFooter from "./CartFooter";

const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([])

  const { pathname } = useLocation();

  const toggleDrawer = (openState) => (event) => {
    setOpen(openState);
  };

  const cartDisabledpathnames = [
    SIGNIN,
    SIGNUP,
    FORGOT_PASSWORD,
    CHECKOUT
  ];

  return (
    <Box>
      <IconButton
        id="cart-button"
        onClick={toggleDrawer(true)}
        sx={{ mr: 4, display: "flex" }}
        disabled={cartDisabledpathnames.includes(pathname)}
      >
        <Badge
          badgeContent={cart.length}
          invisible={cart.length === 0}
          color="primary"
        >
          <LocalMallOutlinedIcon />
        </Badge>
      </IconButton>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: { xs: "80vw", md: "35vw" },
            height: "100%",
            p: 3,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            mb={1}
            height="5%"
          >
            <Box display="flex" alignItems="center">
              <Typography variant="h6" mr={2}>
                My Cart
              </Typography>
              <Typography variant="body2" color="secondary.dark">
                ({` ${cart.length} ${cart.length > 1 ? "items" : "item"}`})
              </Typography>
            </Box>

            <Box>
              {cart.length > 0 && (
                <Button 
                // onClick={() => }
                >Clear All</Button>
              )}

              <IconButton onClick={toggleDrawer(false)}>
                <CloseOutlined />
              </IconButton>
            </Box>
          </Box>
          <CartContents cart={cart} />
         <CartFooter cart={cart}/>
        </Box>
      </Drawer>
    </Box>
  );
};

export default CartDrawer;
