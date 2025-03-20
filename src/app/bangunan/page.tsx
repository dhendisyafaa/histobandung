import Image from "next/image";
import Link from "next/link";
import React from "react";

const listBangunan = [
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
    sejarah:
      "Gedung Merdeka awalnya merupakan Societeit Concordia, tempat rekreasi ekspatriat Belanda di Bandung.",
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
    sejarah:
      "Gedung Sate dibangun pada tahun 1920-1924 sebagai bagian dari program pemindahan pusat militer pemerintah Hindia Belanda ke Bandung.",
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
    sejarah:
      "Monumen ini berhadapan langsung dengan Gedung Sate dan membelakangi Gunung Tangkuban Parahu. ",
  },
];

export default function ListBangunan() {
  return (
    <div className="container mx-auto px-4 lg:px-10 mt-5">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {listBangunan.map((item, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-4 h-4 rounded-full -start-2.5 border-4 border-white dark:border-gray-900 bg-primary"></div>
            <time className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 block">
              {item.masa_pembangunan.tahun_mulai} -{" "}
              {item.masa_pembangunan.tahun_selesai}
            </time>
            <div className="flex flex-col lg:flex-row items-center lg:items-start border-transparent border hover:border-primary p-5 rounded-lg gap-5 shadow-md">
              <div className="w-full lg:w-1/3">
                <Image
                  src={item.image}
                  width={500}
                  height={300}
                  alt={item.title}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-base font-normal text-gray-600 dark:text-gray-400 mt-2">
                  {item.sejarah}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.address}
                </p>
                <Link
                  href={`/bangunan/${item.id}`}
                  className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-all"
                >
                  Pelajari lebih lanjut
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
