import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import LogoScroll from "@/components/logo-scroll";
import TabSection from "@/components/tab-section";
import { logos } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <div
        className="bg-[#04142B] relative"
        style={{
          background:
            "linear-gradient(to bottom, #04142B 20%, #0A2A5E 60%, #1A3F7A 90%)",
          backdropFilter: "blur(585.2px)",
          WebkitBackdropFilter: "blur(585.2px)",
        }}
      >
        <Navbar />
        <Hero />
      </div>

      <div className="bg-white">
        <LogoScroll logos={logos} />
        <TabSection />
      </div>
    </main>
  );
}
