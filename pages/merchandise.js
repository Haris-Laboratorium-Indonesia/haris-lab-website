import Judul from "../components/Judul";
import Posters from "../components/Posters";
import { tshirts } from "../lib/tshirts";
import { posters } from "../lib/posters";
import Tshirts from "../components/Tshirts";

const merchandise = () => {
  return (
    <main>
      <Judul page="Merchandise" />

      <div className="mt-20 mb-5 text-4xl font-semibold ">Kaos</div>
      <div className="grid grid-cols-2 gap-10 my-5 sm:grid-cols-4 md:grid-cols-4 gap-y-10 sm:gap-x-10">
        {tshirts.map((a) => (
          <Tshirts key={a.id} title={a.title} image={a.image} />
        ))}
      </div>
      <div className="mt-20 mb-5 text-4xl font-semibold">Poster</div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {posters.map((p) => (
          <Posters key={p.id} title={p.title} image={p.image} />
        ))}
      </div>
    </main>
  );
};

export default merchandise;
