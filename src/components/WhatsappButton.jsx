import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButtom() {
  return (
    <button className="bg-green-400 size-13 text-white rounded-full flex items-center justify-center fixed bottom-24 right-5 cursor-pointer">
      <FaWhatsapp className="size-5" />
    </button>
  );
}
