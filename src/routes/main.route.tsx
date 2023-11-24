import MainLayout from "src/layout/MainLayout";
import WelcomePage from "src/pages/welcomePage/WelcomePage";
import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "src/components/notFound/NotFound";
import VendorsList from "src/pages/vendorsList/VendorsList";

export const mainRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        element: <WelcomePage />,
        path: "/",
      },
      {
        element: <VendorsList />,
        path: "/vendorsList",
      },
    ],
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to={"/404"} replace />,
  },
]);
