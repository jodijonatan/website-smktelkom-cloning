import { galeris } from "../data/galeris";
import SelengkapnyaButton from "../components/SelengkapnyaButton";

export default function Galeri() {
  return (
    <section className="px-28 py-12 text-center">
      <h4 className="text-primary text-2xl font-medium">Galeri</h4>
      <h1 className="font-bold text-5xl mb-6">Sekolah</h1>
      <p className="text-[#787878] mb-6 text-lg">
        Berikut ini beberapa dokumentasi kegiatan di SMK Telkom 1 Medan
      </p>
      <div className="grid grid-cols-4 gap-6">
        {galeris.map((galeri) => (
          <div className="bg-[#FAFAFA] rounded-md text-left overflow-hidden group hover:shadow-2xl transition duration-700">
            <div className="overflow-hidden rounded-t-md">
              <img
                src={galeri.image}
                className="object-cover w-full group-hover:scale-110 transition duration-700"
              />
            </div>
            <div className="px-6 pb-6">
              <p className="font-medium my-7 cursor-pointer hover:text-primary">
                {galeri.description}
              </p>
              <SelengkapnyaButton name="Selengkapnya" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
