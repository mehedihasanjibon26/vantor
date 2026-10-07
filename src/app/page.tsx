import Preloader from "@/components/Preloader/Preloader";
import NextGear from "@/sections/NextGear/NextGear";
import BuiltForRiders from "@/sections/BuiltForRiders/BuiltForRiders";
import NewDrops from "@/sections/NewDrops/NewDrops";
import Athletes from "@/sections/Athletes/Athletes";
import Footer from "@/sections/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Preloader />
      <NextGear />
      <BuiltForRiders />
      <NewDrops />
      <Athletes />
      <Footer />
    </main>
  );
}