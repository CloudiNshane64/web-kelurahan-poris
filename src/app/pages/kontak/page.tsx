import Image from "next/image";

export default function Kontak() {
  return (
    <div>
      {/* Section Kontak */}
      <section className="container mx-auto px-6 py-12 text-center">
  <Image 
    src="/img/kontak.jpg" 
    alt="Contact Icon" 
    width={100} 
    height={100} 
    className="mx-auto"
  />
  <h2 className="text-3xl font-bold mt-4">Kontak Kelurahan</h2>
</section>


      {/* Informasi Kontak */}
      <section className="container mx-auto px-6 py-12 grid grid-cols-1 gap-6">
  {/* WhatsApp */}
  <div className="bg-black shadow-lg p-6 rounded-lg text-center">
    <h3 className="text-2xl font-semibold mb-3">Whatsapp</h3>
    <p>Jika anda ingin menghubungi Kelurahan ini Via Whatsapp bisa Menghubungi nomor berikut:</p>
    <p className="font-bold text-lg mt-2">0811-1500-293</p>
    <a href="https://api.whatsapp.com/send?phone=628111500293&text=Saya%20ingin%20bertanya%20sesuatu"
      className="inline-block mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
      target="_blank">
      Hubungi sekarang
    </a>
  </div>

  {/* Instagram */}
  <div className="bg-black shadow-lg p-6 rounded-lg text-center">
    <h3 className="text-2xl font-semibold mb-3">Instagram</h3>
    <p>Jika anda ingin melihat informasi kegiatan dari Kelurahan ini silahkan Follow Instagram kami.</p>
    <a href="https://www.instagram.com/kel_porisplawadindah"
      className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
      target="_blank">
      Buka Instagram
    </a>
  </div>
</section>


      {/* Lokasi Google Maps */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h4 className="text-2xl font-bold">Lokasi Kami</h4>
        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.183044070864!2d106.64931672535012!3d-6.19147996803612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f99900988cd7%3A0xe0a93eb9e39f23a!2sKantor%20Kelurahan%20Poris%20Plawad%20Indah!5e0!3m2!1sid!2sid!4v1733175135523!5m2!1sid!2sid"
            width="600"
            height="450"
            className="w-full max-w-3xl mx-auto"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy">
          </iframe>
        </div>
      </section>
    </div>
  );
}
