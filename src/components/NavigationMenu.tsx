import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToogle";

export default function NavigationMenuNavbar() {
  // const navigation: { title: string; href: string; description: string }[] = [
  //   {
  //     title: "Sejarah Penamaan Tempat",
  //     href: "/sejarah-tempat",
  //     description:
  //       "Cari tahu asal-usul nama tempat di Kota Bandung dan kisah unik di baliknya.",
  //   },
  //   {
  //     title: "Bangunan Bersejarah",
  //     href: "/bangunan",
  //     description:
  //       "Lihat sejarah bangunan bersejarah di Bandung dalam visualisasi timeline interaktif.",
  //   },
  //   {
  //     title: "Galeri Tempo Dulu",
  //     href: "/galeri-foto",
  //     description:
  //       "Nikmati koleksi foto lama Bandung dan lihat perbedaannya dengan kondisi sekarang.",
  //   },
  //   {
  //     title: "Kuis",
  //     href: "/quiz-sejarah",
  //     description:
  //       "Uji pengetahuanmu tentang sejarah Kota Bandung melalui kuis interaktif!",
  //   },
  // ];
  const navigation: { title: string; href: string; description: string }[] = [
    {
      title: "Bangunan Bersejarah",
      href: "/bangunan",
      description:
        "Lihat sejarah bangunan bersejarah di Bandung dalam visualisasi timeline interaktif.",
    },
    {
      title: "Fun Fact Bangunan Bersejarah",
      href: "/funfact",
      description:
        "Kumpulan fakta unik dan menarik tentang bangunan bersejarah di Bandung.",
    },
    {
      title: "Tempo Doeloe",
      href: "/tempo-dulu",
      description:
        "Galeri foto keadaan Bandung tempo dulu yang menarik untuk dilihat.",
    },
    {
      title: "Kuis",
      href: "/quiz",
      description:
        "Uji pemahaman kalian setelah mengexplorasi sejarah Kota Bandung",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigation.map((nav, i) => {
          return (
            <NavigationMenuItem key={i} className="hidden md:block">
              <Link href={nav.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {nav.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
        <div className="md:hidden flex items-center ">
          <ModeToggle />
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <MenuIcon />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] sm:w-[400px] gap-3 p-2 sm:grid-cols-2 grid-cols-1">
                {navigation.map((nav) => (
                  <ListItem key={nav.title} title={nav.title} href={nav.href}>
                    {nav.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href = "#", ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href as string}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-md",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
