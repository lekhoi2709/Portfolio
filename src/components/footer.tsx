export default function Footer() {
  const THIS_YEAR = new Date().getFullYear();

  return (
    <footer className="h-fit">
      <p>&copy; {THIS_YEAR} Le Dinh Khoi</p>
    </footer>
  );
}
