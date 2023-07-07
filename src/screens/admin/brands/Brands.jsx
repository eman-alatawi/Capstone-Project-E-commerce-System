import React, { useState } from "react";
import AdminTopToolbar from "../../../components/common/toolbar/AdminTopToolbar";
import BrandsFormDialog from "./components/BrandsFormDialog";
import BrandsTable from "./components/BrandsTable";

const Brands = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onAddSubmit = async (brand) => {};

  return (
    <>
      <AdminTopToolbar heading="Brands" isLoading={false} totalCount={0} />
      <BrandsFormDialog
        open={open}
        handleClose={handleClose}
        onSubmitForm={onAddSubmit}
      />

      <BrandsTable
        isLoading={false}
        data={[]}
        handleDialogOpen={handleClickOpen}
      />
    </>
  );
};

export default Brands;
