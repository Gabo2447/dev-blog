interface Props {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<Props> = ({
  children,
  className = "bg-neutral-200 text-neutral-600", // Por default
}) => {
  return (
    <span className={`rounded-full px-4 py-2 text-xs font-bold ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
