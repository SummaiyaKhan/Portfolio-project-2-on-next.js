import Link from "next/link";
import Image from "next/image";
import logo from "../../../pictures/cv/logo1.png";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

export default function Component2() {
    return (
        <footer className="text-gray-600 body-font ">
            <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link href={""} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src={logo} width={100} height={100} alt="SK" className="w-14  border-black border-2 font-bold rounded-full" />
                        <span className="ml-3 text-3xl">Summai Shah</span>
                    </Link>
                
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-5 md:text-left text-center pb-14 ">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font text-gray-900 text-md tracking-wide font-semibold mb-3">Website Designing</h2>
                        <nav className="list-none mb-10">
                            <li><Link href={""}>Simple Website</Link></li>
                            <li><Link href={""}>WordPress Website</Link></li>
                            <li><Link href={""}>CMS Websites</Link></li>
                            <li><Link href={""}>E-Commerce Websites</Link></li>
                            <li><Link href={""}>Maintenance Contract</Link></li>
                            <li><Link href={""}>Landing Page</Link></li>
                            <h2 className="title-font text-gray-900 my-3 text-md tracking-wide  font-semibold">Managed Cloud Hosting</h2>
                            <li><Link href={""}>Digital Ocean</Link></li>
                            <li><Link href={""}>Linode</Link></li>
                            <li><Link href={""}>VULTR</Link></li>
                            <li><Link href={""}>Amazon Web Services</Link></li>
                            <li><Link href={""}>Google Cloud Platform</Link></li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font text-gray-900 mb-3 text-md tracking-wide  font-semibold">Graphics Designing</h2>
                        <nav className="list-none mb-10">
                            <li><Link href={""}>Logo Design</Link></li>
                            <li><Link href={""}>Brand Identity</Link></li>
                            <li><Link href={""}>Visiting Card Design</Link></li>
                            <li><Link href={""}>Brochure Design</Link></li>
                            <li><Link href={""}>Graphic Designing</Link></li>
                            <h2 className="title-font text-gray-900 my-3 text-md tracking-wide  font-semibold">Shared Cloud Hosting</h2>
                            <li><Link href={""}>Linux Web Hosting</Link></li>
                            <li><Link href={""}>Reseller Hosting</Link></li>
                            <li><Link href={""}>Windows Web Hosting</Link></li>
                            <li><Link href={""}>Cloud Hosting</Link></li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font text-gray-900 mb-3 text-md tracking-wide  font-semibold">Digital Marketing</h2>
                        <nav className="list-none mb-10">
                            <li><Link href={""}>Search Engine Optimization</Link></li>
                            <li><Link href={""}>Social Media Marketing</Link></li>
                            <li><Link href={""}>Content Writing</Link></li>
                            <li><Link href={""}>Animations</Link></li>
                            <h2 className="title-font text-gray-900 my-3 text-md tracking-wide  font-semibold">Email Hosting</h2>
                            <li><Link href={""}>G Suite Email Solutions</Link></li>
                            <li><Link href={""}>Hosted Exchange</Link></li>
                            <h2 className="title-font text-gray-900 my-3 text-md tracking-wide  font-semibold">VPS / Dedicated</h2>
                            <li><Link href={""}>VPS Website Hosting</Link></li>
                            <li><Link href={""}>Linux Dedicated Server</Link></li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200">
                <div className="container mx-auto pb-5 pt-5 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© Copyright 2023 BOUNDLESS TECHNOLOGIES. ALL RIGHT RESERVED -</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-end py-auto">
                        <Link href={""} className="ml-3 text-gray-500 text-3xl">
                            <IoLogoLinkedin />
                        </Link>
                        <Link href={""} className="ml-3 text-gray-500 text-3xl">
                            <IoLogoFacebook />
                        </Link>
                        <Link href={""} className="ml-3 text-gray-500 text-3xl">
                            <IoLogoTwitter />
                        </Link>
                        <Link href={""} className="ml-3 text-gray-500 text-3xl">
                            <IoLogoInstagram />
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
}
