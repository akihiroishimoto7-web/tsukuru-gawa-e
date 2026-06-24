import { Hero } from "@/components/home/Hero";
import { WhatIs } from "@/components/home/WhatIs";
import { ForWhom } from "@/components/home/ForWhom";
import { AiHints } from "@/components/home/AiHints";
import { Future } from "@/components/home/Future";
import { Stories } from "@/components/home/Stories";
import { ZukanPreview } from "@/components/home/ZukanPreview";
import { Manifesto } from "@/components/home/Manifesto";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HistoryVoice } from "@/components/home/HistoryVoice";

// トップページ。「令和の松下村塾」＝AIを使って何かを始める、仲間の集まる実験場。
// 何の場所か(Hero/WhatIs) → 誰に(ForWhom) →〈声〉→ AIの威力(AiHints)
// → 参加後の未来(Future) → 仲間の物語(Stories) → 挑むテーマ(ZukanPreview)
// →〈声〉→ 精神(Manifesto) → 行動(FinalCTA)
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIs />
      <ForWhom />
      <HistoryVoice
        quote="おもしろき こともなき世を おもしろく"
        source="高杉晋作"
        note="辞世の句より"
      />
      <AiHints />
      <Future />
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
