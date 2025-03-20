"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

const dataBangunan = [
  {
    id: 1,
    title: "Gedung Merdeka",
    masa_pembangunan: {
      tahun_mulai: 1895,
      tahun_selesai: 1895,
    },
    address: "Jl. Asia Afrika No.65, Bandung",
    thumbnails: [
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Gedung.Merdeka.jpg",
      "https://d220hvstrn183r.cloudfront.net/attachment/376Concordia.large",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ-kCpcblmGIlMD2106UlkYhogqCAvTHlsNJxmLc0d0_qB08pyAveV97A6bHoiOHXbm_-2JoTYq2WobpQi0jZiv0ShxD7sHw5LewlYrVsvRpE6lGoUy6jqkh5QmjbgE9ihK0Ckdaof_Rg/s640/gedung_merdeka_bandung_tempo_dulu_05.jpg",
      "https://cdns.klimg.com/merdeka.com/i/w/news/2023/04/04/1538610/content_images/670x335/20230404153652-1-gedung-merdeka-asia-afrika-002-debby-restu-utomo.jpg",
    ],
    sejarah:
      "Gedung Merdeka sendiri awalnya merupakan bangunan Societeit Concordia, yaitu tempat rekreasi dan sosialisasi sejumlah ekspatriat Belanda yang bermukim di Bandung pada masa pendudukan Belanda. <br><br> Gedung ini menjadi tempat para pegawai perkebunan, pengusaha, para petinggi militer serta sipil untuk berkumpul, berdansa, menonton pertunjukan atau sekedar makan malam. <br><br> Gedung ini menjadi ikon rasisme dari masyarakat Belanda, karena pada masa pendudukan Belanda terdapat larangan keras bagi warga pribumi untuk masuk ke dalam area gedung ini yang berbunyi ‘Verbodden voor Honden en Inlander’ (dilarang masuk bagi anjing dan pribumi). <br><br> Didirikan tahun 1895, gedung ini sempat direnovasi total pada tahun 1926 oleh dua guru besar Arsitektur di Techniche Hogenschool (sekarang ITB), Van Galen Last dan C.P. Wolff Schoemaker. <br><br> Gedung yang awalnya cukup sederhana ini kemudian menjadi sebuah gedung megah dengan arsitektur modern (art deco). <br><br> Selanjutnya, Gedung ini sempat beralih fungsi menjadi pusat kebudayaan pada era pendudukan Jepang, dengan sebutan Dai Toa Kaman. <br><br> Antara tahun 1946-1950, wilayah Bandung termasuk yang diduduki oleh tentara NICA, gedung ini beralih fungsi menjadi gedung pertemuan umum. <br><br> Menjelang penyelenggaraan Konferensi Asia-Afrika, Presiden Soekarno menginstruksikan penggantian nama gedung itu menjadi Gedung Merdeka, bersamaan dengan penggantian nama sebagian ruas Jalan Raya Timur menjadi Jalan Asia Afrika dan Gedung Dana Pensiun (di sebelah Museum Geologi) menjadi Gedung Dwi Warna. <br><br> Pembenahan dilakukan mulai tahun 1968 dan sejak 1970 gedung ini digunakan untuk berbagai perhelatan nasional dan internasional. <br><br> Mulai tahun 1980, Presiden Soeharto meresmikan seluruh kompleks Gedung Merdeka sebagai Museum Konferensi Asia Afrika.",
    referensi:
      "https://indonesiakaya.com/pustaka-indonesia/gedung-merdeka-dari-societeit-concordia-hingga-museum-kaa/",
  },
  {
    id: 2,
    title: "Gedung Sate",
    masa_pembangunan: {
      tahun_mulai: 1920,
      tahun_selesai: 1924,
    },
    address: "Jl. Diponegoro No.22, Citarum, Bandung Wetan, Bandung",
    thumbnails: [
      "https://awsimages.detik.net.id/community/media/visual/2020/08/27/gedung-sate-1_169.jpeg?w=620",
      "https://catatanvecco.wordpress.com/wp-content/uploads/2014/08/collectie_tropenmuseum_luchtfoto_van_het_departement_van_gouvernementsbedrijven_in_bandoeng_tmnr_10015218.jpg",
      "https://i0.wp.com/javawisata.com/wp-content/uploads/2018/04/gedung-sate-tempo-dulu-java-wisata.jpg?fit=700%2C410&ssl=1",
    ],
    sejarah:
      "Gedung Sate merupakan salah satu bangunan tua yang ikonik di Kota Bandung. <br><br> Sejak 1980 hingga kini, bangunan yang beralamat di Jalan Diponegoro Nomor 22, Kota Bandung, difungsikan menjadi Kantor Gubernur Jawa Barat. <br><br> Dibangun pada tahun 1920-1924, arsitektur bangunan ini dirancang oleh tim yang dipimpin oleh Ir. J. Gerber, Eh. De Roo, dan G. Hendriks, serta Gemeente van Bandoeng yang diketuai oleh V.L. Sloors. <br><br> Pembangunan Gedung Sate merupakan bagian dari program pemindahan pusat militer pemerintah Hindia Belanda dari Meester Cornelis ke wilayah Bandung. <br><br> Gedung ini dirancang dalam satu komplek perkantoran untuk instansi pemerintah (Gouvernements Bedrijven/GB). <br><br> Saat itu, Gedung Sate merupakan gedung kantor Department Verkeer en Waterstaat (Departemen Pekerjaan Umum dan Pengairan) dan di sisi timur laut terdapat gedung Hoofdbureau Post Telegraaf en Telefoondienst (Pusat Pos, Telegraf, dan Telepon). <br><br> Gedung Sate mempunyai gaya arsitektur hybrid. Perpaduan antara beberapa gaya arsitektur di beberapa bagian. <br><br> Gedung ini menggunakan model Rennaisance Italia, desain jendela mengusung konsep Moor Spanyol, dan bagian atap yang mengadopsi arsitektur Asia seperti pura di Bali. <br><br> Bangunan ini terdapat 4 lantai, basement, dan ruang pada puncak gedung. Gedung ini juga dipengaruhi ornamen Hindu dan Islam. <br><br> Penataan bangunan ini berpola simetris, elemen lengkungan yang berulang-ulang, menciptakan ritme yang indah dan unik. <br><br> Pada bagian puncak atap gedung, terdapat ornamen 6 tusuk sate. 6 tusuk sate ini melambangkan 6 juta Gulden yang digunakan untuk membangun gedung ini. Hal tersebut yang menjadikan masyarakat sampai saat ini menyebut bangunan ini sebagai “Gedung Sate”. <br><br> Menurut Pemandu Gedung Sate, Dena Akhirawan, pada ruang di puncak gedung ini, terdapat sebuah alarm yang akan otomatis menyala ketika ada serangan dari musuh. <br><br> Dengan bunyi alarm yang besar, alarm mampu menjangkau hingga di luar Kota Bandung. Namun saat ini, alarm hanya dinyalakan sekali dalam setahun selama 10 menit saja. Dan suara alarm hanya terdengar di sekitar gedung.",
    referensi:
      "https://www.bandung.go.id/news/read/6954/hjkb212-mengenal-gedung-sate-oh-ternyata-ini-asal-usul-namanya",
  },
  {
    id: 3,
    title: "Monumen Perjuangan Rakyat Jawa Barat",
    masa_pembangunan: {
      tahun_mulai: 1991,
      tahun_selesai: 1995,
    },
    address: "Jl. Dipatiukur No.48, Bandung",
    thumbnails: [
      "https://tourbandung.id/wp-content/uploads/2019/05/Monumen-Perjuangan-BAndung-1030x541.jpg",
      "https://tourbandung.id/wp-content/uploads/2019/05/Monumen-Perjuangan-1030x541.jpg",
      "https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/1-Monumen-Perjuangan-Rakyat-Jawa-Barat.jpg",
    ],
    sejarah:
      "Monumen ini berhadapan langsung dengan Gedung Sate dan membelakangi Gunung Tangkuban Parahu. <br><br> Pemandu di Monumen Perjuangan, Mochamad Rikrik mengungkapkan, pembangunan Monumen Perjuangan memakan waktu selama 4 tahun. <br><br> Dimulai dari peletakkan batu pertama pada 1 Juni 1991, dan diresmikan oleh Gubernur Jawa Barat, Raden Nana Nuriana pada 23 Agustus 1995. <br><br>Arsitek dari bangunan ini ialah Slamet Wirasonjaya dan seorang seniman, Sunaryo. <br><br>Menuju ke atas, pengunjung akan menaiki 17 anak tangga dan juga terdapat 8 buah pilar. Bentuk dari monumen ini ialah lingkaran dengan diameter 45 meter. <br><br> Angka-angka tersebut melambangkan hari kemerdekaan Indonesia, yaitu 17 Agustus 1945. <br><br> Pada bagian atas, menjulang tinggi 5 buah tugu yang melambangkan simbol dasar Negara Indonesia, yaitu Pancasila. Tinggi tugunya ialah 17 meter yang menyimbolkan tanggal kemerdekaan Indonesia. <br><br> Tugu tersebut berbentuk seperti sebuah bambu yang merupakan simbol orang Bandung. Karena sejak zaman dahulu masyarakat Bandung sudah berkaitan dengan bambu. <br><br> Selain itu, bentuk tugu seperti bambu runcing juga menjelaskan bahwa alat perang yang digunakan rakyat Indonesia dalam melawan para penjajah yaitu bambu runcing. <br><br> Pada sisi kanan dan kiri dari Monumen Perjuangan, terdapat sebuah relief yang menceritakan perjalanan perjuangan rakyat Jawa Barat. <br><br> Dimulai dari masa kerajaan, kedatangan pasukan kolonial, hingga merebut dan mempertahankan kemerdekaan. <br><br> Di ujung relief, terdapat pintu masuk menuju ke Museum Monumen Perjuangan yang berlokasi tepat di bawah monumennya. <br><br> Isi museum menjelaskan seputar peristiwa dan tokoh-tokoh di Jawa Barat. Pada awal dirintis tahun 2012, museum masih disebut sebagai ruang pamer. Karena untuk menjadi sebuah museum, ada beberapa syarat yang harus dipenuhi. <br><br> Barulah pada 2018, ruang pamer tersebut dapat disebut sebagai museum, seiring dengan bertambahnya koleksi. <br><br> Museum ini menyediakan beberapa ruangan dan fasilitas yang dapat digunakan oleh pengunjung museum, seperti auditorium, ruang dokumenter, ruang diorama, ruang pamer benda bersejarah, dan perpustakaan.",
    referensi:
      "https://www.bandung.go.id/news/read/6977/yuk-mengenal-monumen-perjuangan-jawa-barat",
  },
];

export default function BangunanDetail() {
  const params = useParams();
  const id = params.id;

  const bangunan = dataBangunan.find((b) => b.id.toString() === id);

  if (!bangunan) {
    return (
      <p className="text-center mt-10 text-red-500">
        Bangunan tidak ditemukan!
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-10 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="flex flex-col gap-3 mt-4">
            {bangunan.thumbnails.map((thumb, index) => (
              <Image
                key={index}
                src={thumb}
                width={600}
                height={400}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {bangunan.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Dibangun: {bangunan.masa_pembangunan.tahun_mulai} -{" "}
            {bangunan.masa_pembangunan.tahun_selesai}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {bangunan.address}
          </p>
          <div
            className="mt-4 text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: bangunan.sejarah }}
          >
            {/* {bangunan.sejarah} */}
          </div>
          <a
            href={bangunan.referensi}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block px-5 py-3 text-white bg-primary rounded-lg hover:bg-primary-dark transition-all"
          >
            Lihat referensi
          </a>
        </div>
      </div>
    </div>
  );
}
