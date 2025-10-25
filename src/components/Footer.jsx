import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-gray text-white">
      <div className="py-14 px-18 grid grid-cols-4 gap-4">
        <div className="flex flex-col gap-3">
          <img
            src="/logo3-SMK-Telkom-1-Medan.png"
            alt="logo"
            className="w-52"
          />
          <p className="max-w-80 leading-8">
            SMK Pusat Keunggulan🏅 Sekolah berbasis IT ter-baik di Sumatera
            Utara dengan Akreditasi "A".
          </p>
        </div>
        <div className="flex flex-col gap-3 mx-auto">
          <h4 className="text-3xl">Menu Utama</h4>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-1 hover:text-primary cursor-pointer">
              <IoIosArrowForward />
              Beranda
            </li>
            <li className="flex items-center gap-1 hover:text-primary cursor-pointer">
              <IoIosArrowForward />
              Tentang Kami
            </li>
            <li className="flex items-center gap-1 hover:text-primary cursor-pointer">
              <IoIosArrowForward />
              Profil Jurusan
            </li>
            <li className="flex items-center gap-1 hover:text-primary cursor-pointer">
              <IoIosArrowForward />
              PPDB
            </li>
          </ul>
          <h4 className="text-3xl">Hubungi Kami</h4>
          <ul>
            <li className="flex items-center gap-1 hover:text-primary cursor-pointer">
              <IoIosArrowForward />
              FAQs
            </li>
            <li className="flex items-center gap-1 hover:text-primary cursor-pointer">
              <IoIosArrowForward />
              Whatsapp
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 max-w-56">
          <h4 className="text-3xl">Informasi Kontak</h4>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary size-6" />
            Jl. Jamin Ginting Km. 11 No. 9C, Kec. Medan Tuntungan, Kota Medan,
            Sumatera Utara
          </p>
          <p className="flex items-center gap-2">
            <MdEmail className="text-primary" />
            smktelkommedan01@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-primary" />
            08116500153 & 085176900154
          </p>
          <div className="flex gap-3">
            <FaFacebookF className="size-9 bg-primary rounded-full text-white p-2" />
            <FaWhatsapp className="size-9 bg-primary rounded-full text-white p-2" />
            <FaInstagram className="size-9 bg-primary rounded-full text-white p-2" />
            <FaWhatsapp className="size-9 bg-primary rounded-full text-white p-2" />
            <FaTiktok className="size-9 bg-primary rounded-full text-white p-2" />
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.7848730439462!2d98.62047117518517!3d3.5228652478420037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031257487ec36b7%3A0xf835dac8905a90db!2sTelkom%20School%20Medan!5e0!3m2!1sen!2sid!4v1761394277921!5m2!1sen!2sid"
          className="w-full h-80 shadow-xl"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="bg-black py-6 flex justify-center items-center">
        2024 &copy; Copyright SMK Telkom 1 Medan,
        <span className="text-[#787878]"> All right reserved.</span>
      </div>
    </footer>
  );
}
