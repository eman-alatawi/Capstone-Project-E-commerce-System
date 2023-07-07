import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  FormControl,
  FormLabel,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { ADMIN_ORDERS } from "../../../constants/routes";
import Order from "../../../components/order/Order";
import ShadowContainer from "../../../components/common/layout/ShadowContainer";
import { useForm } from "react-hook-form";
import CustomSelect from "../../../components/form/productForm/CustomSelect";
import SubmitButton from "../../../components/common/button/SubmitButton";
import { Check } from "@mui/icons-material";
import { DevTool } from "@hookform/devtools";
import { orderStatusOptions } from "../../../constants/selectOptions";

const ViewOrder = () => {
  const { id } = useParams();

  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    // console.log(data);
  };

  return (
    <Box>
      {isLoading ? (
        <>
          <Skeleton width={500} sx={{ mb: 3 }} />
          <Skeleton variant="rectangular" height={300} sx={{ mb: 3 }} />
          <Skeleton variant="rectangular" height={300} />
        </>
      ) : (
        <>
          <Breadcrumbs aria-label="breadcrumb" mb={2} mx={2}>
            <Link underline="hover" color="inherit" to={ADMIN_ORDERS}>
              Back to Orders
            </Link>

            <Typography>{order.id}</Typography>
          </Breadcrumbs>

          <Order order={order} />

          <ShadowContainer>
            <Stack
              width="100%"
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              my={4}
              spacing={5}
            >
              <Stack spacing={1}>
                <Typography variant="h3" mb={2}>
                  Customer information
                </Typography>

                <Typography variant="body1" sx={{ fontSize: "large" }}>
                  Name:{" "}
                  <span style={{ color: "#b0aeac" }}>
                    {order?.userFullname}
                  </span>
                </Typography>

                <Typography variant="body1" sx={{ fontSize: "large" }}>
                  Email Address:{" "}
                  <span style={{ color: "#b0aeac" }}>{order?.userEmail}</span>
                </Typography>

                <Typography variant="body1" sx={{ fontSize: "large" }}>
                  Phone Number:{" "}
                  <span style={{ color: "#b0aeac" }}>
                    {order?.shippingAddress.phone}
                  </span>
                </Typography>
              </Stack>

              <Stack spacing={1}>
                <Typography variant="h3" mb={2}>
                  Shippment details{" "}
                </Typography>

                <Typography variant="body1" sx={{ fontSize: "large" }}>
                  Address:{" "}
                  <span style={{ color: "#b0aeac" }}>
                    {order?.shippingAddress.line1}
                  </span>
                </Typography>

                <Typography variant="body1" sx={{ fontSize: "large" }}>
                  City:{" "}
                  <span style={{ color: "#b0aeac" }}>
                    {order?.shippingAddress.city}
                  </span>
                </Typography>

                <Typography variant="body1" sx={{ fontSize: "large" }}>
                  Country:{" "}
                  <span style={{ color: "#b0aeac" }}>
                    {order?.shippingAddress.country}
                  </span>
                </Typography>

                <Typography variant="body1" sx={{ fontSize: "large" }}>
                  Postal Code:{" "}
                  <span style={{ color: "#b0aeac" }}>
                    {order?.shippingAddress.postal_code}
                  </span>
                </Typography>
              </Stack>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={1}>
                  <Typography variant="h3">Update Order Status</Typography>

                  <FormControl error={!!errors.orderStatus} required>
                    <FormLabel sx={{ my: 2 }}> Order Status</FormLabel>
                    <CustomSelect
                      control={control}
                      selectName="orderStatus"
                      defaultValue={{
                        label: order?.orderStatus,
                        value: order?.orderStatus,
                      }}
                      selectPlaceholder="Select Order Status"
                      selectOptions={orderStatusOptions}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <SubmitButton
                    Icon={<Check />}
                    isLoading={isLoading}
                  >
                    Update Status
                  </SubmitButton>
                </Stack>
              </form>
            </Stack>
          </ShadowContainer>

          <DevTool control={control} />
        </>
      )}
    </Box>
  );
};

export default ViewOrder;
