import React from "react";
import SecondaryButton from "./SecondaryButton";
import { Google } from "@mui/icons-material";

const SignInWithGoogle = () => {
  const onSignInWithGoogle = async () => {};

  return (
    <SecondaryButton
      startIcon={<Google />}
      type="button"
      size="large"
      onClickHandler={onSignInWithGoogle}
    >
      Continue With Google
    </SecondaryButton>
  );
};

export default SignInWithGoogle;
