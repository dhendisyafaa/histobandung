import Image from "next/image";
import React from "react";

const fotoBandungTempoDulu = [
  {
    id: 1,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/e/2/4/e24368961f64676f5702b2235826900cd12099d63bf4262b0745f178eab9641c/d_142.jpg",
    description: "Gedung Museum Mandala Wangsit Siliwangi",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 2,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/c/7/e/c7e4082449905bcc606e79fa6f1cfeb180158433bb41a07572431c580f6234bb/206_142.jpg",
    description:
      "Presiden Soeharto sedang berpidato pada acara peresmian Taman Hutan Raya Ir. H. Juanda",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 3,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/a/2/0/a200216377ba35e9964a6185c70e445611ae791001d5e396d78c65877d745484/112_142.jpg",
    description: "Foto Gedung Pakuan yang didirikan tahun 1819",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 4,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/a/a/8/aa8d3b3f189c9bf86c5fb622f1bdeb51c304912a97748c5db5848c1e64c41341/131_142.jpg",
    description:
      "Gedung BKP yang sekarang menjadi Gedung BJB di Jl. Naripan Bandung",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 5,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/1/e/3/1e322fd79dcc36146f378ec82c9ca8ca747bff2c1a2610261182211d023ef3da/132_142.jpg",
    description: "Kantor Pos dan Giro Besar Bandung",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 6,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/d/0/9/d09671f97ba59b15eab14926ae61d165922c32d4e1cd15e717d01f2fa952d5db/176_142.jpg",
    description:
      "Kantor Dinas Peternakan Provinsi Jawa Barat yang didirikan tahun 1961",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 7,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/6/2/b/62b5736122d6e52ecb5264f31e156c25bad742304b6e3d502ef5ad3ca245d51d/219_142.jpg",
    description:
      "Kantor Dinas Perikanan yang didirikan tahun 1947 dan direnovasi tahun 1975",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 8,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/b/a/9/ba936d975d8ad6bca14843e586685ab5956da9448c9fd551dbddadbd62907e93/225_142.jpg",
    description:
      "Mobil jemputan pegawai Gedung Sate terparkir di halaman Gedung Sate",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 9,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/b/a/d/bad1ecc338b5dc488d21b570a03fedede6c1d4bfdd90b94c8c08f34d1edcaf83/a_142.jpg",
    description: "Gedung Bio Farma di Jl. Pasteur",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 10,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/f/c/d/fcdbb1eb3628d91277c0fadaa394752414722a871deed1a3cd47285a609b6935/186_142.jpg",
    description: "Gedung ITB",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 11,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/c/5/6/c56f95a0765a1918ad424166822b2cdada10cc38208943cef03054c24e777d64/101_142.jpg",
    description: "Pemandangan Stasiun Kereta Api Bandung",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 12,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/7/9/0/790b0248c240f35c7fa38daf478c9c34f8ad4b630887efd5ae61174a4ad32867/93_142.jpg",
    description: "Rumah Sakit Immanuel Bandung",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 13,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/3/d/1/3d137733632bacd46a4bd482084504db1ffc4db65757baa55d99b0c11fd74e56/49_142.jpg",
    description: "Rumah Sakit Umum Hasan Sadikin Bandung",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 14,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/7/0/1/701b1276ff9fd5f1309a4fd09d55c63567f631274e58a303cb5a5c8b3b23df7a/34_142.jpg",
    description: "Suasana saat peresmian kolam renang Karang Setra Bandung",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 15,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/0/a/a/0aaec61a7da32b19cc906242cef81dc10bd33c2a7fb610638df64773b5bed3bd/154_142.jpg",
    description: "Gedung SMAN 35 Bandung",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
  {
    id: 16,
    image:
      "https://sikn.jabarprov.go.id/uploads/r/dispusipda-jawa-barat/a/8/3/a834958b170b1ea77932128888dd23998902961ba938f476f2f90ce0e79bbace/156_142.jpg",
    description: "Gedung Kantor Dinas Pertambangan",
    referensi: "https://sikn.jabarprov.go.id/index.php/bangunan-lainnya",
  },
];

export default function BandungTempoDulu() {
  return (
    <div className="container mx-auto px-4 lg:px-10 my-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Foto-Foto Bandung Tempo Dulu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fotoBandungTempoDulu.map((foto) => (
          <div
            key={foto.id}
            className="relative group overflow-hidden rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-all"
          >
            <Image
              src={foto.image}
              width={300}
              height={200}
              alt={foto.description}
              className="w-full h-48 object-cover"
            />
            <div className="p-3 bg-white dark:bg-black h-full">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {foto.description}
              </p>
              <a
                href={foto.referensi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xs underline mt-2 inline-block"
              >
                Lihat sumber
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
