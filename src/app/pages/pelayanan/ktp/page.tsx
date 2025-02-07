import Image from "next/image";

export default function ktp() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <section className="text-center">
        <h2 className="text-4xl font-bold">KTP Elektronik</h2>
        <div className="text-gray-600 mt-2">
          <i className="bi bi-calendar"></i> Publish 04 Jan 2022
        </div>
      </section>

      {/* Gambar */}
      <section className="flex justify-center mt-6">
        <Image
          src="/img/persyaratan_20220321_1647848321.jpeg"
          alt="KTP Elektronik"
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Informasi KTP */}
      <section className="mt-10">
        <table className="w-full border-collapse border border-gray-300 shadow-lg">
          <tbody>
            <tr className="bg-black">
              <th className="border border-gray-300 px-4 py-2 text-left">Judul</th>
              <td className="border border-gray-300 px-4 py-2">KTP Elektronik</td>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Tanggal</th>
              <td className="border border-gray-300 px-4 py-2">04 Jan 2022</td>
            </tr>
            <tr className="bg-black">
              <th className="border border-gray-300 px-4 py-2 text-left">Deskripsi</th>
              <td className="border border-gray-300 px-4 py-2">
                <p className="font-bold">- PENERBITAN KTP BARU :</p>
                <ul className="list-disc ml-5">
                  <li>Surat Pengantar RT/ RW dan Lurah</li>
                  <li>Telah Berusia 17 tahun atau sudah menikah</li>
                  <li>Formulir permohonan KTP (F-1.21) yang ditandatangani pemohon dan Lurah</li>
                  <li>Fotokopi Kartu Keluarga, Akta Nikah/Akta Kawin, dan Akta Kelahiran</li>
                </ul>

                <p className="font-bold mt-3">- PENERBITAN KTP KARENA HILANG ATAU RUSAK :</p>
                <ul className="list-disc ml-5">
                  <li>Surat Pengantar RT/ RW dan Lurah</li>
                  <li>Formulir permohonan KK (F-1.01) yang ditandatangani pemohon dan Lurah</li>
                  <li>Surat keterangan kehilangan dari kepolisian atau KTP yang rusak</li>
                  <li>Fotokopi Kartu Keluarga</li>
                </ul>

                <p className="font-bold mt-3">- PENERBITAN KTP KARENA PINDAH DATANG :</p>
                <ul className="list-disc ml-5">
                  <li>Surat Pengantar RT/ RW dan Lurah</li>
                  <li>Formulir permohonan KK (F-1.01) yang ditandatangani pemohon dan Lurah</li>
                  <li>Fotokopi Kartu Keluarga</li>
                  <li>Surat Keterangan Pindah Datang</li>
                </ul>

                <p className="font-bold mt-3">- PENERBITAN KTP KARENA PERPANJANGAN :</p>
                <ul className="list-disc ml-5">
                  <li>Surat Pengantar RT/ RW dan Lurah</li>
                  <li>Formulir permohonan KK (F-1.01) yang ditandatangani pemohon dan Lurah</li>
                  <li>Fotokopi Kartu Keluarga</li>
                  <li>KTP lama</li>
                </ul>

                <p className="font-bold mt-3">- PENERBITAN KTP KARENA PERUBAHAN DATA :</p>
                <ul className="list-disc ml-5">
                  <li>Surat Pengantar RT/ RW dan Lurah</li>
                  <li>Formulir permohonan KK (F-1.01) yang ditandatangani pemohon dan Lurah</li>
                  <li>Fotokopi Kartu Keluarga</li>
                  <li>KTP lama</li>
                  <li>Surat Keterangan perubahan data seperti Akta Kelahiran, Ijazah, Surat Nikah, Surat Cerai</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Jangka Waktu Pelayanan</th>
              <td className="border border-gray-300 px-4 py-2">7 hari kerja</td>
            </tr>
            <tr className="bg-black">
              <th className="border border-gray-300 px-4 py-2 text-left">Biaya</th>
              <td className="border border-gray-300 px-4 py-2">Gratis</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
