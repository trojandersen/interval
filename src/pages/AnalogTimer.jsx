import Menu from "../components/Menu.jsx";
import clock from "../assets/clock.svg";

function AnalogTimer() {
  return (
    <>
      <Menu />
      <main className="flex justify-center">
        <section>
          <img src={clock} />
        </section>
      </main>
    </>
  );
}

export default AnalogTimer;
