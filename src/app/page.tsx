import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#FFFFFF]">
      {/* Left Column - Image */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen overflow-hidden group">
        <Image
          src="/pfp.jpg"
          alt="Andrea Gatta - FPV Pilot"
          fill
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-[#3D5E79]/10 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none" />
      </div>

      {/* Right Column - Content */}
      <div className="flex flex-col justify-center w-full md:w-1/2 p-8 md:p-16 lg:p-24 bg-[#FFFFFF]">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="mb-6 inline-block">
            <span className="bg-[#B8C4CC]/30 text-[#3D5E79] px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm">
              Work In Progress
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-[#3D5E79] mb-4">
            Andrea<br />Gatta
          </h1>

          <p className="text-xl md:text-2xl text-[#3D5E79]/80 font-medium mb-8">
            22 y/o MSc Student & FPV Pilot
          </p>

          <p className="text-lg text-[#3D5E79]/70 mb-12 max-w-md leading-relaxed transition-colors">
            Building my digital home. In the meantime, feel free to reach out if you want to collaborate on video projects, talk tech, or say hi.
          </p>

          <a
            href="mailto:x@ndrw.cat"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#3D5E79] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#3D5E79]/20"
          >
            <span className="mr-2">Contact Me</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
