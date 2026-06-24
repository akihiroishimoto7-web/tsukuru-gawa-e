import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { WorldShift } from "@/components/home/WorldShift";
import { AiHints } from "@/components/home/AiHints";
import { Stories } from "@/components/home/Stories";
import { Manifesto } from "@/components/home/Manifesto";
import { ZukanPreview } from "@/components/home/ZukanPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

// トップページ。
// 希望(Hero) → 数字で実感(Stats) → 世界の変化(WorldShift)
// → 使い方のヒント(AiHints) → 大きく育てた人(Stories) → 挑むテーマ(ZukanPreview)
// → 世界観(Manifesto) → 行動(FinalCTA)
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WorldShift />
      <AiHints />
      <Stories />
      <ZukanPreview />
      <Manifesto />
      <FinalCTA />
    </>
  );
}
