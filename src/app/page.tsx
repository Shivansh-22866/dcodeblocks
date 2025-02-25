import Image from "next/image";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Details from "./sections/Details";

export default function Home() {
  return (
    <div className="dark">
      <Header/>
      <Hero/>
      <Details/>
    </div>
  );
}
