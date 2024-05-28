import AnimateLink from "./animation-link";

export default function Footer() {
  const THIS_YEAR = new Date().getFullYear();

  return (
    <footer className="h-fit p-4 font-custom flex items-center justify-center text-xs text-slate-500">
      <p>
        {THIS_YEAR} Inspired by{" "}
        <AnimateLink
          textClassName="cursor-pointer hover:text-blue-500 text-xs"
          underlineClassName="md:group-hover/item:bg-blue-500"
          href="https://v4.brittanychiang.com"
          target="_blank"
        >
          Brittany Chiang
        </AnimateLink>
        . Built by <strong>Le Dinh Khoi</strong>
      </p>
    </footer>
  );
}
