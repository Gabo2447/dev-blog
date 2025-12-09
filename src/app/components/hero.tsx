const Hero: React.FC = () => {
  return (
    <header className="flex flex-col items-center gap-2 py-9">
      <h1 className="font-bold text-4xl sm:text-6xl text-center tracking-tighter leading-tight">
        Web Dev and Design
      </h1>
      <h2 className="text-center">
        {"I'm"}{" "}
        <span className="text-blue-400 selection:text-blue-100">
          Gabriel De Olival
        </span>{" "}
        and I talk about technology, programming, and personal experiences
      </h2>
    </header>
  );
};

export default Hero;
