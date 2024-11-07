import AbortBtn from "../components/AbortBtn.jsx";
import Navbar from "../components/Navbar.jsx";
import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

function DigitalTimer() {
  const { timerValue, isRunning } = useContext(TimerContext); // Access to TimerContext functions

  return (
    <>
      <Navbar />
      <main className="flex items-center flex-col gap-10">
        <section className="flex flex-col items-center gap-2 text-xl">
          <p>Digital Timer</p>
          <p>{timerValue}</p>
          <p>{isRunning ? "Timer Running..." : "Paused"}</p>
        </section>
        <AbortBtn />
      </main>
    </>
  );
}

export default DigitalTimer;
