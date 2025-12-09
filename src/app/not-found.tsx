import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 place-items-center w-full mx-auto p-4 sm:p-8">
      <div className="flex flex-col mx-auto text-center">
        <h2 className="text-6xl font-bold">Not Found</h2>
        <p className="text-lg">Could not find requested resource</p>
        <Link href="/" className="text-neutral-700 underline my-4">
          Return Home
        </Link>
      </div>
    </main>
  );
}

// <main className="w-full mx-auto p-4 sm:p-8 mb-16 flex-1 gap-16">
//   {children}
// </main>;
