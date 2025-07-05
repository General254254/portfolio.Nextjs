import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-500 text-xl font-bold">
          Mark&apos;s Portfolio
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-green-500">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-green-500">
            About
          </Link>
          <Link href="/skills" className="text-white hover:text-green-500">
            Skills
          </Link>
          <Link href="/contact" className="text-white hover:text-green-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
