import Link from "next/link";
import Image from "next/image";
import img1 from "../../../pictures/cv/img.jpg"; 
import img4 from "../../../pictures/cv/Microsoft clone.jpg"; 
import img3 from "../../../pictures/cv/Facebook clone with tailwind.jpg"; 

export default function Projects() {
    return (
        <div id="project">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-40 mx-auto -mt-10">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-700">
                            My Projects
                        </h1>
                    </div>
                    {/* Project 1 */}
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <Image
                                    src={img1}
                                    width={400} 
                                    height={250} 
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    alt="Facebook Clone Next.js"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                                        Facebook-Clone-Next.js
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-700 mb-3">
                                        Facebook-Clone
                                    </h1>
                                    <p className="leading-relaxed">
                                        This is my first Facebook-Clone-Next.js project.
                                    </p>
                                    <Link href="https://facebook-clone-next-js-mu.vercel.app" target="_blank" className="text-purple-700 hover:underline">
                                        <p className="leading-relaxed">
                                            View project...
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Project 4 */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <Image
                                    src={img3}
                                    width={400} 
                                    height={250} 
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    alt="Facebook Clone Tailwind"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                                        Facebook-Clone-Tailwind
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-700 mb-3">
                                        Facebook-Clone
                                    </h1>
                                    <p className="leading-relaxed">
                                        This is my first Facebook-Clone-Tailwind project.
                                    </p>
                                    <Link href="file:///C:/Users/User/Desktop/Tailwind%20journey/Tialwind%20CSS/class_no.14/class_14.html" target="_blank" className="text-purple-700 hover:underline">
                                        <p className="leading-relaxed">
                                            View project...
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Project 3 */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <Image
                                    src={img4}
                                    width={400} 
                                    height={250} 
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    alt="Microsoft Clone Tailwind"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                                        Microsoft-Clone-Tailwind
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-700 mb-3">
                                        Microsoft-Clone
                                    </h1>
                                    <p className="leading-relaxed">
                                        This is my first Microsoft-Clone-Tailwind project.
                                    </p>
                                    <Link href="file:///C:/Users/User/Desktop/Tailwind%20journey/Tialwind%20CSS/class-no.15/class_no.15.html" target="_blank" className="text-purple-700 hover:underline">
                                        <p className="leading-relaxed">
                                            View project...
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
        </div>
    );
}
