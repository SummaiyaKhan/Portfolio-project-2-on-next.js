"use client"

import pic from "../../../pictures/pic3.jpg";
import Image from "next/image";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (

    <section className="text-gray-600 body-font bg-gray-200 ">
      <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">
            Summai Shah
            <br className="hidden lg:inline-block" />
                  <Typewriter         
                  options={{
                  strings: ["Web Developer", "UI/UX designer", "Website designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
          </h1>
          <div className="w-[260px] h-[2px] ">
          

          </div>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quo cupiditate, magnam sapiente ipsum possimus pariatur 
            deserunt nemo fugiat quidem repudiandae vitae minima eos tempora vel.
            Nobis dolores deserunt totam perferendis!
          </p>
          <div className="flex justify-center" >
            <Link href="#contact">
            <button className="border-2 font-medium border-black py-2 px-6 focus:outline-none text-lg inline-flex items-center bg-white text-black rounded mt-4 md:mt-0 shadow-inner" style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.6)' }}>
              Contact
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 py-auto">
          <Image
            className="object-cover object-center rounded mx-auto w-[15rem]" 
            alt="pic"
            src={pic}
            width={500} 
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
