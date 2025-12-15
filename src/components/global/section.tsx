import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className: string;
}

const section = ({ children, className }: Props) => {
  return (
    <section className={cn(`container mx-auto px-4 sm:px-16 my-8`, className)}>
      {children}
    </section>
  );
};

export default section;
