import { Box, Typography } from "@mui/material";
import React from "react";
import SubmitButton from "../../../../components/common/button/SubmitButton";
import { CreditCard } from "@mui/icons-material";

const CheckoutForm = () => {
  const handlePaymentSubmit = async (e) => {};

  return (
    <Box>
      <Typography variant="h3" mb={4}>
        Stripe Checkout
      </Typography>
      <form id="payment-form" onSubmit={handlePaymentSubmit}>
        {/* show PaymentElement */}

        <SubmitButton
          sx={{ my: 4, width: "100%" }}
          Icon={<CreditCard />}
        >
          Pay Now
        </SubmitButton>
      </form>
    </Box>
  );
};

export default CheckoutForm;
