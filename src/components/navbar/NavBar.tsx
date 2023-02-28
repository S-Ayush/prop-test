import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";
import { ContentDispaly, Header } from "../../styles/Navbar.style";
import RouteDefinitions from "../../router/RouteDefinition";

const NavBar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate(RouteDefinitions.ROUTE_LOGIN);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <Header>
      <ContentDispaly>
        <ThemeProvider theme={theme}>
          <p style={{ color: "white" }}>Welcome, {user?.name}&nbsp;&nbsp;</p>
          <Button
            style={{ marginLeft: "30px" }}
            variant="contained"
            onClick={handleSignOut}
          >
            Logout
          </Button>
        </ThemeProvider>
      </ContentDispaly>
    </Header>
  );
};
export default NavBar;
