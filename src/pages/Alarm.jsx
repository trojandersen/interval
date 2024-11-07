import Navbar from "../components/Navbar.jsx";

function Alarm() {
  return (
    <>
      <Navbar />
      <main className="flex items-center flex-col gap-10">
        <h1>Times up</h1>
        <p>The timer has completed.</p>
      </main>
    </>
  );
}

export default Alarm;
