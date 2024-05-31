import { twMerge } from "tailwind-merge";

type StyledLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function StyledLink({
  href,
  children,
  className,
}: StyledLinkProps) {
  return (
    <a
      href={href}
      className={twMerge(
        "rounded-md px-4 py-2 text-sm border dark:border-background border-dark-background transition ease-in-out duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:after:bg-blue-500 hover:shadow-[4px_4px_0px_0px] hover:shadow-blue-500",
        className
      )}
    >
      {children}
    </a>
  );
}
