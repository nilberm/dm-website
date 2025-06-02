import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-semibold text-zinc-900">Debora Mara</span>
        </Link>
        <ul className="flex space-x-6 text-gray-700">
          <li>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <a href="#types">Portfolio</a>
          </li>
          <li>
            <Link href="/order">
              <span>Order</span>
            </Link>
          </li>
          <li>
            <span href="#contact">Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
