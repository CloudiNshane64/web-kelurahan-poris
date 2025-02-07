export default function Profil() {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Section Profil */}
        <main className="flex-grow">
          <section className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-4xl font-bold">Profil Kelurahan Poris Plawad Indah</h2>
          </section>
  
          {/* Tabel Profil */}
          <section className="container mx-auto px-6 py-12">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 shadow-lg">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Nama</th>
                    <th className="border border-gray-300 px-4 py-2">Jabatan</th>
                  </tr>
                </thead>
                <tbody>
                  {staffData.map((staff, index) => (
                    <tr key={index} className="bg-white text-gray-900 hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">{staff.nama}</td>
                      <td className="border border-gray-300 px-4 py-2">{staff.jabatan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    );
  }
  
  // Data Staff Kelurahan
  const staffData = [
    { nama: "KUNDARTO, SKM., M.Si", jabatan: "Lurah Poris Plawad Indah" },
    { nama: "TAUFIK, S.Kom", jabatan: "Sekretaris Lurah Poris Plawad Indah" },
    { nama: "HJ. MIFTAHUL ZANNAH, SE., M.Si", jabatan: "Kepala Seksi Tata Pemerintahan" },
    { nama: "LISA MASITOH, ST.", jabatan: "Kepala Seksi Ekonomi Pembangunan" },
    { nama: "SAMRO KURNIASARI, S.Sos", jabatan: "Kepala Seksi Kemasyarakatan" },
  ];
  