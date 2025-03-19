import FooterComponent from "@/components/FooterComponent";
import CardsSection from "@/components/homepage/CardsSection";
import HeroSection from "@/components/homepage/HeroSection";
import homepageContent from "../constans/homepage-content.json";

export default function Home() {
  return (
    <div>
      <HeroSection content={homepageContent.heroSection} />
      <CardsSection content={homepageContent.cardsSection} />
      <FooterComponent />
    </div>
  );
}
