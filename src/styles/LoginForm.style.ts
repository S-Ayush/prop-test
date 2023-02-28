import { styled } from "@mui/system";

export const LoginDisplay = styled("div")({
  width: "475px",
  padding: "64px",
  marginTop: "130px",
  marginLeft: "110px",
  zIndex: "9",
  background: "white",
  borderRadius: "24px",
  position: "relative",
  textAlign: "initial",
  "&.error": {
    border: "2px solid #ff00007a",
  },
});

export const LoginFormHeader = styled("div")({
  marginBottom: "45px",
});

export const Header = styled("p")({
  fontWeight: "600",
  fontSize: "32px",
  lineHeight: "39px",
  color: "#444647",
});

export const SubHeader = styled("p")({
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "17px",
  color: "#798ea3",
});

export const Form = styled("form")({
  width: "100%",
  margin: "0px",
  padding: "0px",
});
export const InputDiv = styled("div")({
  height: "90px",
});

export const LoginActionButtons = styled("div")({
  width: "100%",
  marginTop: "64px",
});

export const LoginError = styled("div")({
  height: "45px",
  marginTop: "15px",
  color: "red",
});
