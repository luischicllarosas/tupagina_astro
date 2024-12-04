"use client";

import { useEffect, useMemo, useRef } from "react";

interface props {
  text: string;
}

export default function TextFlip({ text }: props) {
  const words = useMemo(
    () => [
      "Identidad digital",
      "Experiencias unicas",
      "Comunicar eficazmente",
      "Diseñar soluciones",
      "Impacto"
    ],
    []
  );

  const tallestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tallestRef.current) {
      let maxHeight = 0;

      words.forEach((word) => {
        const span = document.createElement("span");
        span.className = "absolute opacity-1";
        span.textContent = word;
        tallestRef.current?.appendChild(span);
        const height = span.offsetHeight;
        tallestRef.current?.removeChild(span);

        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      tallestRef.current.style.height = `${maxHeight}px`;
    }
  }, [words]);

  return (
    <div className="box-content flex gap-4 text-3xl font-semibold">
      <p className="text-foreground">{text}</p>
      <div
        ref={tallestRef}
        className="flex flex-col overflow-hidden text-secondary h-8"
      >
        {words.map((word, index) => (
          <span key={index} className="animate-flip-words">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
