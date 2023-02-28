import { RouteObject } from "react-router-dom";
import RouteDefinitions from "./RouteDefinition";
import NotFound from "../pages/notFound/NotFound";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";

const RouteList: RouteObject[] = [
  {
    path: RouteDefinitions.ROUTE_NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: RouteDefinitions.ROUTE_HOME,
    element: <Login />,
  },
  {
    path: RouteDefinitions.ROUTE_LOGIN,
    element: <Login />,
  },
  {
    path: RouteDefinitions.ROUTE_DASHBOARD,
    element: <Dashboard />,
  },
];

export default RouteList;
