// Shared horizontal spacing so every page lines up with the logo.
export const gutter = "px-5 sm:px-8 lg:px-12";

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`w-full ${gutter} ${className}`}>{children}</div>;
}
