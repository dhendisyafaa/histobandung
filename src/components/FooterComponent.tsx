import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FooterComponent() {
  const year = new Date().getFullYear();
  return (
    <div
      className="bg-black text-primary border-primary border-2 mt-1 rounded-tr-3xl rounded-tl-3xl lg:rounded-tl-[100px] lg:rounded-tr-[100px]"
      data-aos="fade-up"
    >
      <div className="w-[90%] mx-auto py-6 space-y-5">
        <div className="min-h-[50vh] grid lg:grid-cols-2 space-y-5">
          <div className="flex flex-col gap-3 w-full justify-center">
            <Link href={"/"} className="w-fit">
              <Image
                src="/images/histobandung-logo.png"
                height={60}
                width={60}
                alt="Histobandung-logo"
                className="rounded-full"
              />
            </Link>
            <p className="text-lg font-semibold uppercase">Histobandung</p>
            <p className="text-sm lg:text-base leading-relaxed">
              Histobandung menyediakan materi untuk mempelajari sejarah Kota
              Bandung seperti membahas bangunan bersejarah yang disertain
              foto-foto tempo dulu.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3 justify-center md:items-end">
            <Link
              href={"https://dhensportfolio.vercel.app/"}
              className="text-lg font-semibold underline group inline-flex"
            >
              Kunjungi halaman pengembang{" "}
              <ArrowUpRight className="group-hover:rotate-45 duration-300 w-4 h-4" />
            </Link>
            <p className="text-sm lg:text-base leading-relaxed md:text-right">
              Histobandung dikembangkan sebagai bagian dari tugas mata kuliah
              Literasi TIK dan Media Pembelajaran - Universitas Pendidikan
              Indonesia
            </p>
            <Link
              href={"https://www.upi.edu/"}
              className="text-lg font-semibold underline group"
              target="_blank"
            >
              <Image
                src={"/images/logo-upi.png"}
                alt="upi-logo"
                width={120}
                height={120}
              />
            </Link>
          </div>
        </div>
        <div className="text-xs uppercase text-center">
          copyright &copy; {year} by dhendisyafaa
        </div>
      </div>
    </div>
  );
}
