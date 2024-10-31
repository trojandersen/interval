import Menu from "../components/Menu.jsx";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

function SetTimer() {
  return (
    <>
      <Menu />
      <main className="flex items-center flex-col gap-10">
        <section className="flex gap-10">
          <img src={arrowLeft} />
          <section className="flex items-center flex-col">
            <h1>10</h1>
            <h3>minutes</h3>
          </section>
          <img src={arrowRight} />
        </section>
        <button className="border-2 rounded-lg border-black p-2">
          Start Timer
        </button>
      </main>
    </>
  );
}

export default SetTimer;
