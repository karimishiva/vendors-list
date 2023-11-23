import MainLayout from "src/layout/MainLayout";
import WellcomePage from "src/pages/wellcomePage/WellcomePage";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "src/components/notFound/NotFound";
import VendorsList from "src/pages/vendorsList/VendorsList";

export const mainRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <WellcomePage />,
        path: "/",
      },
      {
        element: <VendorsList />,
        path: "/vendorsList",
      },
    ],
  },
]);
