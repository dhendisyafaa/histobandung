import Image from "next/image";
import Link from "next/link";
import React from "react";

const funFactData = [
  {
    id: 1,
    title: "Gedung Sate",
    image:
      "https://awsimages.detik.net.id/community/media/visual/2020/08/27/gedung-sate-1_169.jpeg?w=620",
    fact: "Di puncak Gedung Sate terdapat alarm yang akan menyala otomatis saat ada serangan musuh. Suaranya dulunya bisa terdengar hingga luar Kota Bandung, namun kini hanya dinyalakan sekali dalam setahun selama 10 menit saja.",
  },
  {
    id: 2,
    title: "Monumen Perjuangan Rakyat Jawa Barat",
    image:
      "https://img.bandung.go.id/images/news/2022/09/09/header/166272905353-yuk-mengenal-monumen-perjuangan-jawa-barat.jpeg",
    fact: "Tugu Monumen Perjuangan berbentuk seperti bambu runcing, melambangkan alat perang yang digunakan rakyat Indonesia dalam melawan penjajah.",
  },
  {
    id: 3,
    title: "Gedung Merdeka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Gedung.Merdeka.jpg",
    fact: "Pada masa kolonial Belanda, terdapat tulisan 'Verbodden voor Honden en Inlander' di pintu masuk Gedung Merdeka, yang berarti 'Dilarang Masuk Bagi Anjing dan Pribumi'.",
  },
];

export default function FunFactList() {
  return (
    <div className="container mx-auto px-4 lg:px-10 my-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Kumpulan Fun-Fact Bangunan Bersejarah
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {funFactData.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-all"
          >
            <Image
              src={item.image}
              width={500}
              height={300}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 h-full bg-white dark:bg-black">
              <h3 className="text-xl font-semibold text-primary">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                {item.fact}
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Link href={`/bangunan/${item.id}`} passHref>
                <button className="px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary-dark transition-all">
                  Lihat Detail
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
