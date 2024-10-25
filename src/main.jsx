import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AnalogTimer from "./pages/AnalogTimer";
import Alarm from "./pages/Alarm";
import Loading from "./pages/loading";
import DigitalTimer from "./pages/DigitalTimer";
import SetTimer from "./pages/SetTimer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loading />,
  },
  {
    path: "/alarm",
    element: <Alarm />,
  },
  {
    path: "/analog-timer",
    element: <AnalogTimer />,
  },
  {
    path: "/digital-timer",
    element: <DigitalTimer />,
  },
  {
    path: "/set-timer",
    element: <SetTimer />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
