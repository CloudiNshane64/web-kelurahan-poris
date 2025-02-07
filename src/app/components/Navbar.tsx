import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-md flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        SMART
      </Link>

      {/* Menu Navigasi */}
      <div className="hidden md:flex justify-center space-x-20 w-full">
  <Link href="/" className="hover:underline">Home</Link>
  <Link href="/pages/profile" className="hover:underline">Profil</Link>
  <Link href="/pages/tentang" className="hover:underline">Tentang</Link>
  <Link href="/pages/kontak" className="hover:underline">Kontak</Link>
  <Link href="/pages/pelayanan" className="hover:underline">Pelayanan</Link>
  <a href="https://sobatdukcapil.tangerangkota.go.id/" className="hover:underline" target="_blank" rel="noopener noreferrer">
    Sobat Dukcapil
  </a>
</div>


      {/* Menu Mobile (Hamburger) */}
      <div className="md:hidden">
        <button id="menu-toggle" className="text-2xl focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
