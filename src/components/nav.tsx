export default function Nav() {
  return (
    <nav className="fixed bg-slate-400 w-full">
      <ul className="flex gap-4 p-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
