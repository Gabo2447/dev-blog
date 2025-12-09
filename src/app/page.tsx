import Hero from "./components/hero";
import Filters from "./components/filters";

export default function Page() {
  return (
    <main className="w-full mx-auto p-4 sm:p-8 mb-16 flex-1 gap-16">
      <Hero />
      <main className="my-6 sm:my-12">
        <Filters />
      </main>
    </main>
  );
}
