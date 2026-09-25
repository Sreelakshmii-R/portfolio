import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#001B52] text-white py-7 sm:py-8">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center">

        <p className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-sm sm:text-base text-gray-300">
          <span>Designed &amp; Developed with</span>

          <FaHeart className="text-red-400 flex-shrink-0" />

          <span>by</span>

          <span className="font-semibold text-white">
            Sreelakshmi Ramesh
          </span>
        </p>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}