import { FaPlay } from "react-icons/fa";

export default function VideoProfilSekolah() {
  return (
    <section className="flex gap-8 flex-col md:flex-row px-28 py-12 items-center">
      <img
        src="/Online-learning-amico.jpg"
        alt="Online-learning-amico"
        className="w-3 flex-1"
      />
      <div className="flex-1">
        <h4 className="text-primary text-2xl font-medium">Video Profil</h4>
        <h1 className="font-bold text-5xl mb-6">SMK Telkom 1 Medan</h1>
        <p className="text-[#787878] mb-6 text-lg">
          Ingin tahu seperti apa suasana belajar di sekolah berbasis teknologi ?
          Jelajahi SMK Telkom 1 Medan melalui video profil kami.
        </p>
        <p className="text-[#787878] mb-6 text-lg">
          Saksikan langsung fasilitas umum yang lengkap, ruang belajar, kegiatan
          siswa yang seru, lingkungan belajar yang inspiratif dan masih banyak
          lainnya.
        </p>
        <p className="text-[#787878] mb-6 text-lg">
          Kuy ! biar tidak penasaran apa saja yang ada di dalam SMK Telkom 1
          Medan, segera tonton video profilnya.
        </p>
        <a
          href="#"
          className="bg-primary flex w-28 text-white items-center justify-center gap-3 py-2 rounded-full"
        >
          <FaPlay /> <span>Play</span>
        </a>
      </div>
    </section>
  );
}
