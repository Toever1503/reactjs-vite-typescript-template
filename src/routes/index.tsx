import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import CounterPage from "../pages/counter/CounterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
              path: "/contacts",
              element: <div>Hello world!</div>,
            },
          ],
    },
    {
        path: "/counter",
        element: <CounterPage />
    }
]);

export default router;