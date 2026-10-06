import { About } from "../components/About";
import { Approach } from "../components/Approach";
import { Contact } from "../components/Contact";
import { FutureProducts } from "../components/FutureProducts";
import { Hero } from "../components/Hero";
import { Platform } from "../components/Platform";
import { Products } from "../components/Products";

export function Home() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Approach />
      <Platform />
      <FutureProducts />
      <Contact />
    </>
  );
}
