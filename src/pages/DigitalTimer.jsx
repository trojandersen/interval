import AbortBtn from "../components/AbortBtn.jsx";
import Navbar from "../components/Navbar.jsx";

function DigitalTimer() {
  return (
    <>
      <Navbar />
      <main className="flex items-center flex-col gap-10">
        <section>
          <h1>PLACEHOLDER TIMER</h1>
        </section>
        <AbortBtn />
      </main>
    </>
  );
}

export default DigitalTimer;
