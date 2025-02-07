import Image from "next/image";

export default function kartu_keluarga() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <section className="text-center">
        <h2 className="text-4xl font-bold">Kartu Keluarga</h2>
        <div className="text-gray-600 mt-2">
          <i className="bi bi-calendar"></i> Publish 04 Jan 2022
        </div>
      </section>

      {/* Gambar */}
      <section className="flex justify-center mt-6">
        <Image
          src="/img/persyaratan_20220321_1647848315.jpeg"
          alt="Kartu Keluarga"
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Informasi Kartu Keluarga */}
      <section className="mt-10">
        <table className="w-full border-collapse border border-gray-300 shadow-lg">
          <tbody>
            <tr className="bg-black">
              <th className="border border-gray-300 px-4 py-2 text-left">Judul</th>
              <td className="border border-gray-300 px-4 py-2">Kartu Keluarga</td>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Tanggal</th>
              <td className="border border-gray-300 px-4 py-2">04 Jan 2022</td>
            </tr>
            <tr className="bg-black">
              <th className="border border-gray-300 px-4 py-2 text-left">Deskripsi</th>
              <td className="border border-gray-300 px-4 py-2">
                <p className="font-bold">- Terjadi penambahan Anggota Keluarga akibat kelahiran :</p>
                <ul className="list-disc ml-5">
                  <li>Surat Pengantar RT/ RW dan Lurah</li>
                  <li>Formulir permohonan KK (F-1.01) yang ditandatangani Pemohon dan Lurah</li>
                  <li>KK lama</li>
                  <li>Kutipan Akta Kelahiran</li>
                </ul>

                <p className="font-bold mt-3">- Menumpang kedalam KK bagi penduduk yang pindah datang :</p>
                <ul className="list-disc ml-5">
                  <li>Surat Pengantar RT/ RW dan Lurah</li>
                  <li>Formulir permohonan KK (F-1.01) yang ditandatangani Pemohon dan Lurah</li>
                  <li>KK lama Atau KK yang ditumpangi</li>
                  <li>Paspor</li>
                  <li>Surat keterangan Pindah datang bagi penduduk yang pindah datang antar daerah</li>
                </ul>

                <p className="font-bold mt-3">- Karena Pengurangan akibat kematian atau pindah pergi dan/ atau perubahan biodata :</p>
                <ul className="list-disc ml-5">
                  <li>Surat Pengantar RT/ RW dan Lurah</li>
                  <li>Formulir permohonan KK (F-1.01) yang ditandatangani Pemohon dan Lurah</li>
                  <li>KK lama</li>
                  <li>KK yang ditumpangi</li>
                  <li>Akta Cerai</li>
                  <li>Akta Kawin</li>
                  <li>Akta Kematian</li>
                  <li>Surat Keterangan Pindah Datang bagi penduduk yang pindah dalam wilayah daerah</li>
                  <li>Surat Keterangan Datang dari Luar negeri bagi WNI yang datang dari Luar Negeri Karena pindah</li>
                </ul>

                <p className="font-bold mt-3">- Karena Hilang atau Rusak :</p>
                <ul className="list-disc ml-5">
                  <li>Surat Pengantar RT/ RW dan Lurah</li>
                  <li>Formulir permohonan KK (F-1.01) yang ditandatangani Pemohon dan Lurah</li>
                  <li>Surat Keterangan Kehilangan dari Kepolisian</li>
                  <li>Kartu Keluarga yang Rusak</li>
                  <li>Foto Copy KTP atau menunjukkan Dokumen Kependudukan dari salah satu anggota Keluarga</li>
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
