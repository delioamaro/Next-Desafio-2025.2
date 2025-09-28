import BestAlbums from "@/src/components/bestAlbums";
import HeroSection from "@/src/components/hero-section";
import SobreAlbumteria from "@/src/components/sobreAlbumteria";

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto">
      <HeroSection />
      <BestAlbums />
      <SobreAlbumteria />
    </div>
  );
}
