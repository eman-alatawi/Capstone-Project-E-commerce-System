import { Skeleton, Stack } from "@mui/material";
import React, { useState } from "react";
import InfoCard from "./InfoCard";
import {
  AttachMoney,
  Inventory,
  People,
  ShoppingCart,
} from "@mui/icons-material";

const InfoContainer = () => {

  const [isLoadingOrders, setIsLoadingOrders] = useState(false);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);

  return (
    <>
      {isLoadingOrders || isLoadingProducts || isLoadingUsers ? (
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Skeleton width={250} height={170} />
          <Skeleton width={250} height={170} />
          <Skeleton width={250} height={170} />
          <Skeleton width={250} height={170} />
        </Stack>
      ) : (
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
        >
          <InfoCard
            title="Earnings"
            count={0}
            icon={<AttachMoney sx={{ color: "#F65868" }} />}
            bgColor="#F9DDDC"
          />
          <InfoCard
            title="Orders"
            count={0}
            icon={<ShoppingCart sx={{ color: "#2EC1BA" }} />}
            bgColor="#D5F3F2"
          />
          <InfoCard
            title="Products"
            count={0}
            icon={<Inventory sx={{ color: "#EE9D02" }} />}
            bgColor="#F8ECDC"
          />
          <InfoCard
            title="Users"
            count={0}
            icon={<People sx={{ color: "#8498A4" }} />}
            bgColor="#D3EDF9"
          />
        </Stack>
      )}
    </>
  );
};

export default InfoContainer;
