import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center p-6" style={{ backgroundImage: "url('/img/Kantor-Kelurahan.jpeg')" }}>
        <h1 className="text-4xl font-bold">Kami Siap Melayani Anda</h1>
        <p className="mt-4 text-lg">Informasi pengaduan dan pelayanan Masyarakat Kelurahan Poris Plawad Indah</p>
        <a href="https://api.whatsapp.com/send?phone=628111500293&text=Saya%20ingin%20bertanya%20sesuatu"
           className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all">
          Klik Disini
        </a>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center">Berita Terbaru</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {newsData.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src={item.image} alt={item.title} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-700">{item.date}</h3>
                <p className="text-gray-700">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Data berita terbaru
const newsData = [
  { date: "Rabu, 14 Agustus 2024", title: "Monitoring Penyaluran Bantuan Pangan Cadangan Beras Pemerintah Tahap 3", image: "/img/img1.jpeg" },
  { date: "Jumat, 2 Agustus 2024", title: "Kegiatan Pemberdayaan Makanan Tambahan Dapur PKK DASHAT", image: "/img/img2.jpeg" },
  { date: "Minggu, 28 Juli 2024", title: "Lurah Poris Plawad Indah Meninjau Langsung Kegiatan Pekan Imunisasi Nasional Polio", image: "/img/img3.jpeg" },
  { date: "Sabtu, 27 Juli 2024", title: "Lurah Bersama Ketua TP PKK Meninjau Kegiatan Pekan Imunisasi Nasional Polio", image: "/img/img4.jpeg" },
  { date: "Rabu, 24 Juli 2024", title: "Monitoring Pos Gizi Pemberian Makanan Tambahan", image: "/img/img5.jpeg" },
  { date: "Rabu, 19 Juni 2024", title: "Pembukaan Seleksi Tilawatil Qur'an Tingkat Kecamatan Cipondoh", image: "/img/img6.jpeg" },
  { date: "Senin, 21 Mei 2024", title: "Perlombaan Kelurahan Tingkat Kota Tangerang 2024", image: "/img/img7.jpeg" },
  { date: "Sabtu, 23 Maret 2024", title: "Penyelidikan Epidemiologi Dengan Meningkatnya Kasus DBD", image: "/img/img8.jpeg" },
];
