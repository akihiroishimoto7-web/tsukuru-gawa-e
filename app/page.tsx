import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { WorldShift } from "@/components/home/WorldShift";
import { AiHints } from "@/components/home/AiHints";
import { Stories } from "@/components/home/Stories";
import { Manifesto } from "@/components/home/Manifesto";
import { ZukanPreview } from "@/components/home/ZukanPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HistoryVoice } from "@/components/home/HistoryVoice";

// トップページ。
// 希望(Hero) → 数字で実感(Stats) → 世界の変化(WorldShift) → 〔声〕
// → 使い方のヒント(AiHints) → 大きく育てた人(Stories) → 挑むテーマ(ZukanPreview)
// → 〔声〕 → 世界観(Manifesto) → 行動(FinalCTA)
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WorldShift />
      <HistoryVoice
        quote="おもしろき こともなき世を おもしろく"
        source="高杉晋作"
        note="辞世の句より"
      />
      <AiHints />
      <Stories />
      <ZukanPreview />
      <HistoryVoice
        quote="志を立てて、もって万事の源と為す。"
        source="吉田松陰"
        note="松下村塾"
      />
      <Manifesto />
      <FinalCTA />
    </>
  );
}
