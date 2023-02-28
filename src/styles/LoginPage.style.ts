import { styled, width } from "@mui/system";

export const LoginPageContainer = styled("div")({
  height: "100vh",
  width: "100%",
});
export const LoginFormSection = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "540px",
  background: "white",
  borderRadius: "40px",
  boxShadow: "0px 4px 35px 0px #00000014",
  padding: "44px",
});

export const LogoSection = styled("p")({
  marginTop: "31px",
  marginLeft: "42px",
  fontWeight: 600,
  fontSize: "20px",
  color: "#C6553B",
});
export const ScooterImageSection = styled("div")({
  position: "absolute",
  top: "193px",
  left: "181px",
});
export const MobileImageSection = styled("div")({
  position: "absolute",
  top: "144px",
  right: "61px",
});
