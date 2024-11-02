import Image from "next/image";
import pic from "../../../pictures/pic3.jpg";
import Link from "next/link";


export default function About() {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container flex px-5 py-32 md:flex-row flex-col items-center mx-auto">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[15rem]" 
              alt="pic"
              src={pic} 
              width={500} 
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-lg font-bold mb-4 text-black">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              I’m Summai Shah, a 16-year-old full-stack web developer and UI/UX designer. I have completed my matriculation and am currently pursuing my first year in Computer Science.
            </p>
            <p className="mb-8 leading-relaxed">
              My goal is to become an expert full-stack developer and a successful freelancer, so I can deliver exceptional, 100% reliable results to my clients.
            </p>
            <div className="flex justify-center">
            <Link href="/pictures/cv/mycv.pdf" target="_blank" rel="noopener noreferrer">
            <button
              className="border-2 font-medium py-2 px-6 focus:outline-none focus:ring-2 focus:ring-black text-lginline-flex items-center bg-black text-white hover:bg-gray-950 rounded mt-4 md:mt-0 active:bg-gray-800 active:shadow-inner active:shadow-black">
              View CV
            </button>

             </Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

