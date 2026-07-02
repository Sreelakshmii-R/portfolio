import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#001B52] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="flex justify-center items-center gap-2 text-gray-300">
          Designed & Developed with
          <FaHeart className="text-red-400" />
          by
          <span className="font-semibold text-white">
            Sreelakshmi Ramesh
          </span>
        </p>

        <p className="mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}