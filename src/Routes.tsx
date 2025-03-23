import { createBrowserRouter } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { LoginSignUp } from "./pages/LoginSignUp";
import { Login } from "./pages/Login";
import { Dashboard } from "@pages/Dashboard";
import { Journal } from "@pages/Journal";
import { Profile } from "@pages/Profile";
import { JournalCreate } from "@pages/JournalCreate";

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
  {
    path: "/journal/create",
    element: <JournalCreate />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default Routes;
