import { FaFacebookF, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url(/carousel-6.jpg)] bg-cover relative flex justify-end items-center pr-20">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative max-w-2xl flex flex-col items-end">
        <h1 className="text-5xl font-semibold text-white text-right mb-4">
          Daftar Sekarang !!
          <br /> jadilah bagian dari{" "}
          <span className="text-primary">T1mers!</span>
        </h1>
        <h4 className="text-white text-right text-3xl mb-8">
          AKHLAK is Number One
          <br /> & Pusat Keunggulan 🏅
        </h4>
        <a
          href="#"
          className="bg-primary py-4 px-12 rounded-full font-bold text-white mb-6"
        >
          Join Us
        </a>
        <div className="flex items-center gap-2">
          <h1 className="text-white text-3xl">Follow us: </h1>
          <FaFacebookF className="size-10 bg-white rounded-full text-primary p-2" />
          <FaWhatsapp className="size-10 bg-white rounded-full text-primary p-2" />
          <FaInstagram className="size-10 bg-white rounded-full text-primary p-2" />
          <FaWhatsapp className="size-10 bg-white rounded-full text-primary p-2" />
          <FaTiktok className="size-10 bg-white rounded-full text-primary p-2" />
        </div>
      </div>
    </div>
  );
}
