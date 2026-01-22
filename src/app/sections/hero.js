const Judul = "Rizal Hafiizh Ikmaluddin"
let pesan = "Halo Rizal, kami ingin menawarkan kolaborasi dalam pembuatan projek IT kami !";
let link = "https://wa.me/6281217670336?text=" + encodeURIComponent(pesan);

const Hero = () => {
  return (
    <section className="relative py-24 px-6 bg-linear-to-br from-blue-600 via-cyan-600 to-purple-600 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium mb-6">
          ✨ Welcome to my Portofolio Websites
        </span>

        <div className="flex items-center gap-1 justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="size-[55px] sm:size-[64px] md:size-[78px] lg:size-[98px] text-primary animate-spin [animation-duration:5s]"
          >

            <circle cx="12" cy="12" r="1.5" />


            <path d="M12 3l2 5-2 2-2-2 2-5z" />
            <path d="M21 12l-5 2-2-2 2-2 5 2z" />
            <path d="M12 21l-2-5 2-2 2 2-2 5z" />
            <path d="M3 12l5-2 2 2-2 2-5-2z" />
          </svg>


          {/* <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold text-foreground "><span className="text-blue-900 text-shadow-white-700">RIZAL HAFIIZH </span>IKMALUDDIN
          </h1> */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 pt-6">

            {Judul}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="size-[55px] sm:size-[64px] md:size-[78px] lg:size-[98px] text-primary animate-spin [animation-duration:5s]"
          >

            <circle cx="12" cy="12" r="1.5" />


            <path d="M12 3l2 5-2 2-2-2 2-5z" />
            <path d="M21 12l-5 2-2-2 2-2 5 2z" />
            <path d="M12 21l-2-5 2-2 2 2-2 5z" />
            <path d="M3 12l5-2 2 2-2 2-5-2z" />
          </svg>
        </div>

        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          I'm a junior programmer who never stop to study everyday.<br /> This web is my first NEXT.JS project.
        </p>
        <a href={link} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
          HIRE ME ?
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
      <div className="flex space-x-1 justify-center items-end h-8 translate-y-24">
        <div className="w-9 h-10 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.1s]"></div>
        <div className="w-9 h-14 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.2s]"></div>
        <div className="w-9 h-18 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.3s]"></div>
        <div className="w-9 h-14 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.4s]"></div>
        <div className="w-9 h-16 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.5s]"></div>
        <div className="w-9 h-18 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.6s]"></div>
        <div className="w-9 h-16 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.7s]"></div>
        <div className="w-9 h-17 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.8s]"></div>
        <div className="w-9 h-14 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.9s]"></div>
        <div className="w-9 h-13 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.1s]"></div>
        <div className="w-9 h-14 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.2s]"></div>
        <div className="w-9 h-12 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.3s]"></div>
        <div className="w-9 h-18 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.4s]"></div>
        <div className="w-9 h-15 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.5s]"></div>
        <div className="w-9 h-13 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.6s]"></div>
        <div className="w-9 h-16 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.7s]"></div>
        <div className="w-9 h-12 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.8s]"></div>
        <div className="w-9 h-14 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.9s]"></div>
        <div className="w-9 h-12 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.1s]"></div>
        <div className="w-9 h-16 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.2s]"></div>
        <div className="w-9 h-15 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.3s]"></div>
        <div className="w-9 h-14 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.4s]"></div>
        <div className="w-9 h-17 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.5s]"></div>
        <div className="w-9 h-15 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.6s]"></div>
        <div className="w-9 h-10 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.7s]"></div>
        <div className="w-9 h-12 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.8s]"></div>
        <div className="w-9 h-16 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.9s]"></div>
        <div className="w-9 h-15 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.1s]"></div>
        <div className="w-9 h-14 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.2s]"></div>
        <div className="w-9 h-17 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.4s]"></div>
        <div className="w-9 h-15 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.6s]"></div>
        <div className="w-9 h-10 bg-yellow-500 animate-[pulse_1s_ease-in-out_infinite] [animation-delay:-0.7s]"></div>

      </div>
    </section>
  )
}


export default Hero