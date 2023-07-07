import React from "react";
import ForgotPasswordForm from "./components/ForgotPasswordForm";


const ForgotPassword = () => {

  const onSubmitForm = async (data) => {
    console.log(data)
  };

  return (
    <ForgotPasswordForm  onSubmitForm={onSubmitForm} />
  );
};

export default ForgotPassword;
