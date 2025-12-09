import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="flex h-12 justify-between items-center mx-auto px-4 sm:h-20 sm:px-8 font-semibold">
        <Link className="text-lg font-semibold" href="/">
          GL.
        </Link>
        <Link
          className="text-neutral-600 font-semibold hover:text-neutral-800 duration-300"
          href="/about-me"
        >
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
