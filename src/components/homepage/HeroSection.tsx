import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function HeroSection({ content }) {
  return (
    <div className="h-[100vh] py-10 px-4 text-center flex flex-col gap-y-5 justify-center items-center overflow-x-hidden relative">
      <p
        className="text-sm font-semibold text-primary uppercase"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        {content.preTitle}
      </p>
      <p
        className="text-4xl md:text-5xl font-bold text-primary"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {content.title}
      </p>
      <p
        className="text-base md:text-xl md:w-[60vw] text-primary"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        {content.subTitle.map((text, index) => (
          <span key={index} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
      </p>
      <Link href="/bangunan" data-aos="fade-in" data-aos-delay="1200">
        <Button className="rounded-full font-bold" size={"lg"}>
          {content.buttonText}
        </Button>
      </Link>
      <ChevronDown className="text-primary mt-8 w-8 h-8 animate-bounce" />
      <div
        className="absolute top-0 -left-12 -z-0 w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] md:max-w-[350px] md:max-h-[350px]"
        data-aos="fade-up"
      >
        <Image
          src={"/svg/megdung-1.svg"}
          objectFit="contain"
          fill
          alt="angklung"
        />
      </div>
      <div
        className="absolute bottom-5 -right-12 -z-0 w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] md:max-w-[350px] md:max-h-[350px]"
        data-aos="fade-up"
      >
        <Image
          src={"/svg/megdung-2.svg"}
          objectFit="contain"
          fill
          alt="angklung"
        />
      </div>
    </div>
  );
}
