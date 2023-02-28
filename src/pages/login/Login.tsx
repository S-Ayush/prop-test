import { Grid } from "@mui/material";
import React, { useState } from "react";
import {
  LoginFormSection,
  LoginPageContainer,
  LogoSection,
  MobileImageSection,
  ScooterImageSection,
} from "../../styles/LoginPage.style";
import MobileManImage from "../../assets/mobile-man.png";
import ScooterManImage from "../../assets/Scooter-man.png";
import LoginForm from "../../components/loginComponents/LoginForm";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <LoginPageContainer>
      <Grid container columns={2} height="100vh">
        <Grid width={"50%"} sx={{ background: "#ECBC76" }}>
          <LogoSection>Your Logo</LogoSection>
          <ScooterImageSection>
            <img src={ScooterManImage} alt="mobileManImage" />
          </ScooterImageSection>
        </Grid>
        <Grid width={"50%"}>
          <MobileImageSection>
            <img src={MobileManImage} alt="mobileManImage" />
          </MobileImageSection>
        </Grid>
      </Grid>
      <LoginFormSection>
        <Grid container columns={2} sx={{ marginBottom: "44px" }}>
          <Grid width="50%">
            <p style={{ fontWeight: "500", fontSize: "20px" }}>
              Welcome to Lorem
            </p>
            <h1 style={{ fontSize: "55px", lineHeight: 0 }}>
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
          </Grid>
          <Grid width="50%">
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <div>
                <p style={{ color: "#8D8D8D" }}>
                  {isSignIn ? "No account?" : "Have an account?"}
                </p>
                <p
                  onClick={() => setIsSignIn(!isSignIn)}
                  style={{ color: "#B87514", lineHeight: "1px",cursor:"pointer" }}
                >
                  {isSignIn ? "Sign Up" : "Sign In"}
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
        <LoginForm isSignIn={isSignIn} />
        {/* <div style={{width:"100%"}}>
            <p style={{ width: "306px", height: "24px", paddingTop: "15%" }}>
              Enter your username or email address
            </p>
            <input
              type="text"
              placeholder="Username or email address"
              style={{ border: "1px solid #4285F4", borderRadius: "9px", width:"inherit",height:"30%" }}
            />
          </div> */}
      </LoginFormSection>
    </LoginPageContainer>
  );
}

export default Login;
