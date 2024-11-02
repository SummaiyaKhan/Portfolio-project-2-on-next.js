import Link from "next/link";
import logo from "../../../pictures/cv/logo1.png";
import Image from "next/image";
import { AiOutlineCloudDownload } from "react-icons/ai";

export default function Home() {
  return (
    <div className="z-50 sticky top-0">
      <header className="text-white body-font bg-black text-xl mx-auto">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={logo} width={100} height={100} alt="AN" className="w-12" />
            <span className="ml-3 text-3xl text-white shadow-lg">Summai Shah</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 ">Home</Link>
            <Link href="#about" className="mr-5 ">About</Link>
            <Link href="#skill" className="mr-5 ">Skills</Link>
            <Link href="#project" className="mr-5 ">Projects</Link>
            <Link href="#contact" className="mr-5 ">Contact</Link>
          </nav>
          <Link href="/pictures/cv/myCv.pdf" download >
            <button className=" inline-flex items-center border-0 py-1 px-3 focus:outline-none bg-white text-black rounded text-base mt-4 md:mt-0 shadow-inner" style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.6)' }}>
              Download CV
              <AiOutlineCloudDownload className="ml-2 text-xl" />
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
