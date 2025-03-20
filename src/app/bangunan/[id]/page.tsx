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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Gedung.Merdeka.jpg",
    thumbnails: [
      "https://d220hvstrn183r.cloudfront.net/attachment/376Concordia.large",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ-kCpcblmGIlMD2106UlkYhogqCAvTHlsNJxmLc0d0_qB08pyAveV97A6bHoiOHXbm_-2JoTYq2WobpQi0jZiv0ShxD7sHw5LewlYrVsvRpE6lGoUy6jqkh5QmjbgE9ihK0Ckdaof_Rg/s640/gedung_merdeka_bandung_tempo_dulu_05.jpg",
      "https://indonesiakaya.com/pustaka-indonesia/gedung-merdeka-dari-societeit-concordia-hingga-museum-kaa/",
    ],
    sejarah:
      "Gedung Merdeka awalnya merupakan Societeit Concordia, tempat rekreasi ekspatriat Belanda di Bandung. Dibangun tahun 1895, direnovasi tahun 1926 oleh arsitek Van Galen Last dan C.P. Wolff Schoemaker. Gedung ini menjadi saksi sejarah Konferensi Asia-Afrika tahun 1955 yang dipimpin oleh Presiden Soekarno. Sebelum itu, gedung ini pernah menjadi pusat kebudayaan saat pendudukan Jepang dan kemudian menjadi tempat pertemuan umum saat Bandung diduduki oleh tentara NICA. Kini, Gedung Merdeka menjadi Museum Konferensi Asia-Afrika.",
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
    image:
      "https://awsimages.detik.net.id/community/media/visual/2020/08/27/gedung-sate-1_169.jpeg?w=620",
    thumbnails: [
      "https://awsimages.detik.net.id/community/media/visual/2020/08/27/gedung-sate-1_169.jpeg?w=620",
      "https://catatanvecco.wordpress.com/wp-content/uploads/2014/08/collectie_tropenmuseum_luchtfoto_van_het_departement_van_gouvernementsbedrijven_in_bandoeng_tmnr_10015218.jpg",
      "https://i0.wp.com/javawisata.com/wp-content/uploads/2018/04/gedung-sate-tempo-dulu-java-wisata.jpg?fit=700%2C410&ssl=1",
    ],
    sejarah:
      "Gedung Sate dibangun pada tahun 1920-1924 sebagai bagian dari program pemindahan pusat militer pemerintah Hindia Belanda ke Bandung. Dirancang oleh Ir. J. Gerber dan timnya, gedung ini awalnya merupakan kantor Departemen Pekerjaan Umum dan Pengairan. Gedung ini memiliki arsitektur hybrid dengan model Rennaisance Italia, jendela bergaya Moor Spanyol, dan atap yang mengadopsi arsitektur Asia seperti pura di Bali. Terdapat 6 tusuk sate di puncaknya yang melambangkan biaya pembangunan sebesar 6 juta Gulden. Saat ini, gedung ini berfungsi sebagai Kantor Gubernur Jawa Barat.",
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
    image:
      "https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/1-Monumen-Perjuangan-Rakyat-Jawa-Barat.jpg",
    thumbnails: [
      "https://tourbandung.id/wp-content/uploads/2019/05/Monumen-Perjuangan-BAndung-1030x541.jpg",
      "https://tourbandung.id/wp-content/uploads/2019/05/Monumen-Perjuangan-1030x541.jpg",
      "https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/1-Monumen-Perjuangan-Rakyat-Jawa-Barat.jpg",
    ],
    sejarah:
      "Monumen ini berhadapan langsung dengan Gedung Sate dan membelakangi Gunung Tangkuban Parahu. Dibangun selama 4 tahun sejak peletakan batu pertama pada 1 Juni 1991 dan diresmikan oleh Gubernur Jawa Barat, Raden Nana Nuriana pada 23 Agustus 1995. Monumen ini berbentuk bambu runcing yang melambangkan perjuangan rakyat Bandung dan terdiri dari 5 pilar tinggi yang mewakili Pancasila. Pada bagian bawah monumen terdapat museum yang memuat diorama perjuangan rakyat Jawa Barat dari masa kerajaan hingga kemerdekaan.",
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
          <Image
            src={bangunan.image}
            width={600}
            height={400}
            alt={bangunan.title}
            className="rounded-lg w-full object-cover"
          />
          <div className="flex gap-3 mt-4">
            {bangunan.thumbnails.map((thumb, index) => (
              <Image
                key={index}
                src={thumb}
                width={100}
                height={75}
                alt={`Thumbnail ${index + 1}`}
                className="cursor-pointer rounded-md border hover:border-primary w-24"
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
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            {bangunan.sejarah}
          </p>
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
