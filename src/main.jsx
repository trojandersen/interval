import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AnalogTimer from "./pages/AnalogTimer";
import Alarm from "./pages/Alarm";
import Loading from "./pages/Loading";
import DigitalTimer from "./pages/DigitalTimer";
import SetTimer from "./pages/SetTimer";
import { TimerProvider } from "./contexts/TimerContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <TimerProvider>
        <Loading />
      </TimerProvider>
    ),
  },
  {
    path: "/alarm",
    element: (
      <TimerProvider>
        <Alarm />
      </TimerProvider>
    ),
  },
  {
    path: "/analog-timer",
    element: (
      <TimerProvider>
        <AnalogTimer />
      </TimerProvider>
    ),
  },
  {
    path: "/digital-timer",
    element: (
      <TimerProvider>
        <DigitalTimer />
      </TimerProvider>
    ),
  },
  {
    path: "/set-timer",
    element: (
      <TimerProvider>
        <SetTimer />
      </TimerProvider>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
