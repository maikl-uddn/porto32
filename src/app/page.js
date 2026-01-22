// import Image from "next/image";
import Hiring from "./sections/homebot";
import About from "./sections/hometop";
import Hero from '@/app/sections/hero'
import Home from '@/app/sections/homepage'
import Projek from '@/app/sections/projects'
import Contact from '@/app/sections/contact'
import Testi from '@/app/sections/testimoni'

        


const HomePage = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Home/>
      <Projek/>
      <Hiring/>
      <Testi/>
      <Contact/>
    </>
  );
}

export default HomePage;
