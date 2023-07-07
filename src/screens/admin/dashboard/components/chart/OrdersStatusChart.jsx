import React from "react";
import ShadowContainer from "../../../../../components/common/layout/ShadowContainer";
import { Box } from "@mui/material";
import PropType from "prop-types";

const OrdersStatusChart = ({ orders }) => {
  return (
    <ShadowContainer>
      <Box py={3}>Orders Status Bar Chart Goes here</Box>
    </ShadowContainer>
  );
};

export default OrdersStatusChart;

OrdersStatusChart.propTypes = {
  orders: PropType.array.isRequired,
};
