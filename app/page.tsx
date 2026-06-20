import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { WorldShift } from "@/components/home/WorldShift";
import { Stories } from "@/components/home/Stories";
import { Manifesto } from "@/components/home/Manifesto";
import { ZukanPreview } from "@/components/home/ZukanPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

// トップページ。
// 希望(Hero) → 数字で実感(Stats) → 世界の変化(WorldShift)
// → 実在の姿(Stories) → 作れる具体例(ZukanPreview) → 世界観(Manifesto) → 行動(FinalCTA)
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WorldShift />
      <Stories />
      <ZukanPreview />
      <Manifesto />
      <FinalCTA />
    </>
  );
}
