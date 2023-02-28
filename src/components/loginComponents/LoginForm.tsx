import React, { ChangeEvent, useState } from "react";
import {
  Form,
  Header,
  LoginDisplay,
  LoginFormHeader,
  SubHeader,
  InputDiv,
  LoginActionButtons,
  LoginError,
} from "../../styles/LoginForm.style";
import { StyledButton, StyledTextField } from "../../styles/global.style";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import RouteDefinitions from "../../router/RouteDefinition";
import { useDispatch, useSelector } from "react-redux/es/exports";
import UserAction from "../../redux/actions/userActions";
import { Grid } from "@mui/material";

function LoginForm({ isSignIn }: { isSignIn: boolean }) {
  const [isCredentialValid, setIsCredentialValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();

  function validate(values: { [key: string]: string }) {
    const errors: { [key: string]: string } = {};
    if (!values.userName) {
      errors.userName = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.name && !isSignIn) {
      errors.name = "Required";
    }
    if (!values.number && !isSignIn) {
      errors.number = "Required";
    }
    return errors;
  }
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      name: "",
      number: "",
    },
    validate,
    onSubmit: (values) => {
      if (isSignIn) {
        handleSignIn(values.userName, values.password);
      } else {
        handelSignUp(values);
      }
    },
  });

  const handleSignIn = (userName: string, password: string) => {
    const user = userData.find(
      (user: any) => user.userName === userName && user.password === password
    );
    if (user) {
      navigate(RouteDefinitions.ROUTE_DASHBOARD);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      setIsCredentialValid(false);
    }
  };

  const handelSignUp = (values: any) => {
    dispatch(UserAction.setNewUserData({ ...values }));
    navigate(RouteDefinitions.ROUTE_DASHBOARD);
    localStorage.setItem(
      "user",
      JSON.stringify({ userName: values.userName, password: values.password })
    );
  };

  const handleChange = (e: ChangeEvent) => {
    setIsCredentialValid(true);
    formik.handleChange(e);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputDiv>
        <p>Enter your username or email address</p>
        <StyledTextField
          id="outlined-basic"
          label="Username or email address"
          type="text"
          name="userName"
          variant="outlined"
          value={formik.values.userName}
          onChange={handleChange}
          // helperText={formik.errors.userName}
          error={!formik.values.userName && !!formik.errors.userName}
        />
      </InputDiv>
      {!isSignIn && (
        <Grid container columns={2} gap={"19px"}>
          <Grid width={"48%"}>
            <InputDiv>
              <p>User name</p>
              <StyledTextField
                id="outlined-basic"
                label="Name"
                type="text"
                name="name"
                variant="outlined"
                value={formik.values.name}
                onChange={handleChange}
                // helperText={formik.errors.name}
                error={!formik.values.name && !!formik.errors.name}
              />
            </InputDiv>
          </Grid>
          <Grid width={"48%"}>
            <InputDiv>
              <p>Contact number</p>
              <StyledTextField
                id="outlined-basic"
                label="Number"
                type="number"
                name="number"
                variant="outlined"
                value={formik.values.number}
                onChange={handleChange}
                // helperText={formik.errors.number}
                error={!formik.values.number && !!formik.errors.number}
              />
            </InputDiv>
          </Grid>
        </Grid>
      )}
      <InputDiv>
        <p>Enter your Password</p>
        <StyledTextField
          id="outlined-basic"
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          value={formik.values.password}
          onChange={handleChange}
          // helperText={formik.errors.password}
          error={!formik.values.password && !!formik.errors.password}
        />
      </InputDiv>
      <LoginActionButtons>
        <StyledButton
          variant="contained"
          type="submit"
          disabled={
            isLoading || !formik.values.password || !formik.values.userName
          }
          style={{ background: "#E48700", color: "white" }}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </StyledButton>
      </LoginActionButtons>
      <LoginError>{!isCredentialValid && "Invalid Credentials!"}</LoginError>
    </Form>
  );
}

export default LoginForm;
