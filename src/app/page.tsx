import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/home/hero"));

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-16">
      <Hero />
    </div>
  );
}
