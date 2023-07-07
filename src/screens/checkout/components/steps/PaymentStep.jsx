import { Box, Stack } from "@mui/material";
import React from "react";
import StepHeader from "./StepHeader";
import CheckoutSummery from "../CheckoutSummery";

const PaymentStep = () => {
 
  return (
    <Box my={5}>
      <StepHeader header="Payment" desc="Pay with Stripe (Test mode only)." />

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 2, md: 10 }}
      >
        <Box width={{ xs: "100%", md: "50%" }}>
          <CheckoutSummery />
        </Box>

        <Box width={{ xs: "100%", md: "50%" }}>
          {/* Show Stripe Payment Form Component */}
        </Box>
      </Stack>
    </Box>
  );
};

export default PaymentStep;
