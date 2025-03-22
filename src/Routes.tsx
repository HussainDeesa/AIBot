import { createBrowserRouter } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { LoginSignUp } from "./pages/LoginSignUp";
import { Login } from "./pages/Login";

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
]);

export default Routes;
