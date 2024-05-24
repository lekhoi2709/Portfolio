export default function Nav() {
  return (
    <nav className="fixed bg-slate-400 w-full flex justify-between items-center p-4">
      <h1>LeKo</h1>
      <ul className="flex gap-4">
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
