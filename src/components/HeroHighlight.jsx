import { useEffect, useState } from "react";

const phrases = [
  "丁寧な手仕事で生まれた暮らしの道具",
  "日々の時間を豊かにする季節のセレクト",
  "つくり手の物語とともに届ける適正価格",
];

export default function HeroHighlight() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <p className="hero-highlight" data-active={index}>
      {phrases[index]}
    </p>
  );
}
