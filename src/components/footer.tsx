export default function Footer() {
  const THIS_YEAR = new Date().getFullYear();

  return (
    <footer className="h-fit p-4 font-custom flex items-center justify-center">
      <p className="text-xs text-slate-500">
        {THIS_YEAR} Built by Le Dinh Khoi
      </p>
    </footer>
  );
}
