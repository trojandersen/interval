import AbortBtn from "../components/AbortBtn.jsx";
import AnalogClock from "../components/AnalogClock.jsx";
import Navbar from "../components/Navbar.jsx";

function AnalogTimer() {
  return (
    <>
      <Navbar />
      <main className="flex items-center flex-col gap-10">
        <AnalogClock />
        <AbortBtn />
      </main>
    </>
  );
}

export default AnalogTimer;
