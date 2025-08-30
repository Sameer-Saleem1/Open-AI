import {
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa6";

export default function BottomFooter() {
  return (
    <div className=" border-gray-200 mt-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex space-x-4 text-xl text-gray-700">
          <a href="#" className="hover:text-black">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-red-600">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-gray-800">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-black">
            <FaTiktok />
          </a>
          <a href="#" className="hover:text-indigo-600">
            <FaDiscord />
          </a>
        </div>

        <div className="text-sm text-gray-800 text-center">
          OpenAI © 2015–{new Date().getFullYear()}
          <a href="#" className="ml-2 hover:underline">
            Manage Cookies
          </a>
        </div>

        <div>
          <button className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-800 hover:bg-gray-200">
            English <span className="text-gray-400">United States</span>
          </button>
        </div>
      </div>
    </div>
  );
}
