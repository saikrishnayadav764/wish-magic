import { BirthdayHero } from "@/components/BirthdayHero";
import { PhotoSection } from "@/components/PhotoSection";
import { VideoSection } from "@/components/VideoSection";
import { WishesSection } from "@/components/WishesSection";
import { MeghalayaSection } from "@/components/MeghalayaSection";
import { FinalMessage } from "@/components/FinalMessage";
import { SparkleEffect } from "@/components/SparkleEffect";
import { FloatingHearts } from "@/components/FloatingHearts";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Magical effects */}
      <SparkleEffect />
      <FloatingHearts />
      
      {/* Main content */}
      <BirthdayHero />
      <PhotoSection />
      <VideoSection />
      <WishesSection />
      <MeghalayaSection />
      <FinalMessage />
    </div>
  );
};

export default Index;