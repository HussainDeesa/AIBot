import { createBrowserRouter } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { LoginSignUp } from "./pages/LoginSignUp";
import { Login } from "./pages/Login";
import { Dashboard } from "@pages/Dashboard";
import { Journal } from "@pages/Journal";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginSignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/journal",
    element: <Journal />,
  },
]);

export default Routes;
