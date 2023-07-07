import React from "react";
import AdminTopToolbar from "../../../components/common/toolbar/AdminTopToolbar";
import OrdersTable from "./components/OrdersTable";

const Orders = () => {
  return (
    <>
      <AdminTopToolbar
        heading="Orders"
        isLoading={false}
        totalCount={0}
      />

      <OrdersTable isLoading={false} data={[]} />
    </>
  );
};

export default Orders;
