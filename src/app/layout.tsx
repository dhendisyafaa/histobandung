import NavbarComponent from "@/components/NavbarComponent";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";
import Pwa from "@/components/pwa";
import { ThemeProvider } from "@/components/theme-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://histobandung.vercel.app/"),
  title: {
    template: "%s | Histobandung",
    default: "Histobandung",
  },
  authors: {
    name: "Histobandung",
  },
  description:
    "Histobandung menyediakan materi untuk mempelajari sejarah Kota Bandung seperti membahas bangunan bersejarah yang disertain foto-foto tempo dulu.",
  openGraph: {
    title: "Histobandung",
    description:
      "Histobandung menyediakan materi untuk mempelajari sejarah Kota Bandung seperti membahas bangunan bersejarah yang disertain foto-foto tempo dulu.",
    url: "https://histobandung.vercel.app/",
    siteName: "Histobandung",
    images: "/web-app-manifest-512x512.png",
    type: "website",
  },
  keywords: [
    "histobandung",
    "bandung",
    "kota bandung",
    "sejarah kota bandung",
    "history kota bandung",
    "Universitas Pendidikan Indonesia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id-ID" className="dark" suppressHydrationWarning>
      <AOSInit />
      <body className={`${plusJakartaSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarComponent />
          <main>{children}</main>
          <Toaster />
          <Pwa />
        </ThemeProvider>
      </body>
    </html>
  );
}
