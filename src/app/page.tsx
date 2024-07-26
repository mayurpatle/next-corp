
import Hero from "@/components/hero";

import Image from "next/image";
export default function Home() {
  return (
    <>
      <Hero imgData="/home.jpg" imgAlt="Home" title="Welcome to My Site" />
    </>
  );
}
