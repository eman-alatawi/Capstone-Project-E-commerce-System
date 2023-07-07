import React from "react";
import ShadowContainer from "../../../../../components/common/layout/ShadowContainer";
import { Box } from "@mui/material";
import PropType from "prop-types";

const EarningsChart = ({ orders }) => {
  return (
    <ShadowContainer>
      <Box py={3}>Earnings Line Chart Goes here</Box>
    </ShadowContainer>
  );
};

export default EarningsChart;
EarningsChart.propTypes = {
  orders: PropType.array.isRequired,
};
