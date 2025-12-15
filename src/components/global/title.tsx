import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
  as?: React.ElementType;
  children?: React.ReactNode;
}

const title = ({ className, props, as, children }: Props) => {
  const Component = as || "h1";
  return (
    <Component className={cn("text-2xl font-bold", className)} {...props}>
      {children}
    </Component>
  );
};

export default title;
