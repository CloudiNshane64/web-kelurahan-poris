import Image from "next/image";
import Link from "next/link";

export default function Pelayanan() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow">
        {/* Section Pelayanan */}
        <section className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-4xl font-bold">Layanan Kelurahan Poris Plawad Indah</h2>
        </section>

        {/* Kartu Pelayanan */}
        <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image 
                src={service.image} 
                alt={service.title} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-600">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.date}</p>
                <Link 
                  href={service.link} 
                  className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

// Data layanan
const servicesData = [
  { 
    title: "Kartu Keluarga", 
    date: "04 Jan 2022 13:59", 
    image: "/img/persyaratan_20220321_1647848315.jpeg", 
    link: "/pages/pelayanan/kartu_keluarga"
  },
  { 
    title: "KTP Elektronik", 
    date: "01 Jan 2022 13:56", 
    image: "/img/persyaratan_20220321_1647848321.jpeg",
    link: "/pages/pelayanan/ktp"
  }
];
