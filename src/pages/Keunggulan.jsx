import { keunggulans } from "../data/keunggulans";

export default function Keunggulan() {
  return (
    <section className="px-28 py-12 text-center border">
      <h4 className="text-primary text-2xl font-medium">Program</h4>
      <h1 className="font-bold text-5xl mb-6">SMK Telkom 1 Medan</h1>
      <p className="text-[#787878] mb-6 text-lg">
        Beberapa keunggulan SMK Telkom 1 Medan
      </p>
      <div className="flex justify-around">
        {keunggulans.map((keunggulan) => (
          <div className="border max-w-96 text-left">
            <img src={keunggulan.image} />
            <h5 className="text-xl font-medium">{keunggulan.judul}</h5>
            <p className="text-[#787878] mb-6 text-lg">
              {keunggulan.paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
