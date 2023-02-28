import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
});

export const StyledTextField = styled(TextField)({
  width: "100%",
});

export const StyledButton = styled(Button)({
  width: "inherit",
  height: "54px",
});

export const StyledLoadingButton = styled(Button)({
  width: "190px",
  height: "45px",
});
