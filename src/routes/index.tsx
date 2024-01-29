import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import CounterPage from "../pages/counter/CounterPage";
import LandingPage from "../pages/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true, 
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/counter",
    element: <CounterPage />
  }
]);

export default router;