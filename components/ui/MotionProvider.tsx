"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// OS/ブラウザの「視差効果を減らす」設定を、アプリ全体のアニメーションに反映する。
// reducedMotion="user" にすると、その設定の人には動きが自動で抑えられる。
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
