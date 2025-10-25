import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 shadow-sm left-0 w-full z-50 flex justify-between py-3 px-10 items-center transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <img src="/logo.png" alt="logo" className="w-52" />
      <ul
        className={`flex space-x-6 ${isScrolled ? "text-black" : "text-white"}`}
      >
        <li className="flex items-center gap-1 cursor-pointer hover:text-primary">
          Beranda
          <IoIosArrowDown />
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-primary">
          Tentang
          <IoIosArrowDown />
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-primary">
          Program
          <IoIosArrowDown />
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-primary">
          Alumni
          <IoIosArrowDown />
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-primary">
          Kontak
          <IoIosArrowDown />
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-primary">
          E-library
          <IoIosArrowDown />
        </li>
        <li className="bg-primary py-2 px-6 rounded-full text-white">SPMB</li>
      </ul>
    </nav>
  );
}
