import { twMerge } from "tailwind-merge";

export default function AnimateLink({
  href,
  children,
  textClassName,
  underlineClassName,
  target,
}: {
  href: string;
  children: React.ReactNode;
  textClassName?: string;
  underlineClassName?: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      className={twMerge("font-bold relative group/item w-fit", textClassName)}
      target={target}
    >
      <span
        className={twMerge(
          "w-0 h-[1px] absolute bottom-0 right-0 transition-all duration-500 md:group-hover/item:w-full md:group-hover/item:left-0 md:group-hover/item:bg-black/40",
          underlineClassName
        )}
        aria-hidden
      ></span>
      {children}
    </a>
  );
}
