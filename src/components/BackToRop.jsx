import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  return (
    <button className="bg-primary size-13 text-white rounded-full flex items-center justify-center fixed bottom-7 right-5 cursor-pointer">
      <FaArrowUp className="size-5" />
    </button>
  );
}
