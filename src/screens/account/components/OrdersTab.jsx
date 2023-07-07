import React, { useState } from "react";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import Order from "../../../components/order/Order";

const OrdersTab = () => {

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box>
      {isLoading ? (
        <>
          <Skeleton height={100}  sx={{mb: 3}}/>
          <Skeleton variant="rectangular" height={300} />
        </>
      ) : !isLoading && !orders ? (
        <Box
          height="60vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack>
            <Typography variant="body1">
              You don't have any orders yet
            </Typography>
          </Stack>
        </Box>
      ) : (
        <Box my={5} px={2}>
          <Typography variant="h2">All Orders ({orders?.length})</Typography>

          {orders?.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default OrdersTab;
