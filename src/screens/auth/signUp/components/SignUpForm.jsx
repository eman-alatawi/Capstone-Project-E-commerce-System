import React, { useState } from "react";
import CustomContainer from "../../../../components/common/layout/CustomContainer";
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link} from "react-router-dom";
import { SIGNIN } from "../../../../constants/routes";
import { useForm } from "react-hook-form";
import SignInWithGoogle from "../../../../components/common/button/SignInWithGoogle";
import Center from "../../../../components/common/layout/Center";
import SubmitButton from "../../../../components/common/button/SubmitButton";
import { ArrowForward, Visibility, VisibilityOff } from "@mui/icons-material";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });


  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <CustomContainer>
      <Center>
        <Typography variant="h3" mb={3}>
          Sign Up
        </Typography>

        <Stack spacing={2} alignItems="center">
          <Box width={{ xs: 300, md: 500 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                <FormControl>
                  <TextField
                    label="Full Name"
                    type="text"
                    {...register("fullname")}
                    error={!!errors.fullname}
                    helperText={errors.fullname?.message}
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    label="Email Address"
                    type="email"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    {...register("password")}
                    error={!!errors.password}
                  />
                  <FormHelperText error={!!errors.password}>
                    {errors.password?.message}
                  </FormHelperText>
                </FormControl>

                <SubmitButton  Icon={<ArrowForward />}>
                  Sign Up
                </SubmitButton>
                <SignInWithGoogle />
              </Stack>
            </form>
          </Box>

          <Typography variant="body1">
            Already have an account?
            <Link
              to={SIGNIN}
              style={{
                marginLeft: "1rem",
                textDecoration: "underline",
                color: "#ff9800",
              }}
            >
              Sign In
            </Link>
          </Typography>
        </Stack>
      </Center>
    </CustomContainer>
  );
};

export default SignUpForm;
