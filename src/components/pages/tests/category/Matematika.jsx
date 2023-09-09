import MathTestBox from "../../../views/mathTest/MathTestsBox";
import TopResult from "../../../views/topResult/TopResult";

const Matematika = () => {
  return (
    <section className="math__container">
      <main className="math__test-list">
        <MathTestBox />
      </main>
      <aside className="math__top-users">
        <TopResult />
      </aside>
    </section>
  );
};

export default Matematika;
