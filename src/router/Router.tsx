import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import RouteDefinitions from "./RouteDefinition";
import RouteList from "./Routes";

function Router() {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user") && currentPath) {
      navigate(RouteDefinitions.ROUTE_LOGIN);
    } else if (localStorage.getItem("user") && currentPath) {
      navigate(RouteDefinitions.ROUTE_DASHBOARD);
    }
  }, [currentPath]);

  const checkValidRoute = () => {
    if (
      !localStorage.getItem("user") &&
      currentPath &&
      !currentPath.includes("login")
    ) {
      return false;
    }
    return true;
  };

  return (
    <Routes>
      {checkValidRoute() &&
        RouteList.map((route: any, i) => <Route {...route} key={i}></Route>)}
    </Routes>
  );
}

export default Router;
