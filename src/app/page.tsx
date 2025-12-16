// import { Suspense } from "react"; // Por ahora no se va a usar...
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/home/hero"));
const Article = dynamic(() => import("@/components/home/article"));

export const metadata = {
  title: `GL | Dev Blog`,
  description: "Blog personal de desarrollo web y tecnología.",
};

const styles = {
  container: "container mx-auto px-4 sm:px-16",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Article />
    </div>
  );
}
