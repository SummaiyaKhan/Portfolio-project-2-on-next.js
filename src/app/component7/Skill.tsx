
import { IoMdCheckbox } from "react-icons/io";

export default function Skill() {
    return(
        <div id="skill">
            <section className="text-gray-600 body-font ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-2xl text-blue-600 tracking-widesttext-2xl font-medium title-font mb-1">
        Skill
      </h2>
      <h1 className="sm:text-3xl text-3xl title-font text-black font-medium">
        My Skill
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
    <div className="p-4 md:w-1/3 cursor-pointer">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
            <IoMdCheckbox className="text-xl font-bold"/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             HTML
            </h2>
          </div>
          <div className="flex-grow">
  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
    <div className="absolute bg-blue-600 rounded-xl h-full w-full">
    </div>
  </div>
  <p className="text-green-500 font-bold text-right">
    100%
  </p>
</div>

        </div>
      </div>
      <div className="p-4 md:w-1/3 cursor-pointer">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
            <IoMdCheckbox className="text-xl font-bold"/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             Tailwind CSS/CSS
            </h2>
          </div>
          <div className="flex-grow">
  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
    <div className="absolute bg-blue-600 rounded-xl h-full w-[95%]">
    </div>
  </div>
  <p className="text-green-500 font-bold text-right">
    95%
  </p>
</div>

        </div>
      </div>
      <div className="p-4 md:w-1/3 cursor-pointer">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
            <IoMdCheckbox className="text-xl font-bold"/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             Javascript/Typescript
            </h2>
          </div>
          <div className="flex-grow">
  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
    <div className="absolute bg-blue-600 rounded-xl h-full w-[90%]">
    </div>
  </div>
  <p className="text-green-500 font-bold text-right">
    90%
  </p>
</div>

        </div>
      </div>
      <div className="p-4 md:w-1/3 cursor-pointer">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
            <IoMdCheckbox className="text-xl font-bold"/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             Next.js
            </h2>
          </div>
          <div className="flex-grow">
  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
    <div className="absolute bg-blue-600 rounded-xl h-full w-[80%]">
    </div>
  </div>
  <p className="text-green-500 font-bold text-right">
    80%
  </p>
</div>

        </div>
      </div>
    </div>
  </div>
</section>

   </div>     
    )
}