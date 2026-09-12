"use client";

import { useRef, useState } from "react";

const VIDEO =
  "https://api.naano.xyz/storage/v1/object/public/marketing-assets/case-studies/blogseo-vincent-josse.mp4";

export function CaseStudyVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[#0E0F12] shadow-[0_24px_60px_-22px_rgba(23,24,28,0.4)]">
      <video
        ref={ref}
        src={VIDEO}
        playsInline
        preload="metadata"
        poster="/lp/blogseo-vincent-video-poster.png"
        className="absolute inset-0 size-full object-cover"
        onEnded={() => setPlaying(false)}
      />
      {!playing ? (
        <button type="button" aria-label="Play the BlogSEO case study video" onClick={toggle} className="absolute inset-0 bg-[#0E0F12]/20">
          <img
            src="/lp/naano-logo-footer.png"
            alt="Naano"
            className="absolute left-1/2 top-[42%] w-[52%] -translate-x-1/2 -translate-y-1/2"
          />
          <span className="absolute left-1/2 top-[58%] grid size-[66px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white">
            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-[#1652F0]" aria-hidden>
              <path d="M8 5.5 L19 12 L8 18.5 Z" />
            </svg>
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b0c0f]/80 to-transparent px-5 pb-[18px] pt-[22px] text-left">
            <span className="block text-[16px] font-bold text-white">Vincent Josse</span>
            <span className="mt-0.5 block text-[13.5px] text-white/80">CEO & Founder, BlogSEO</span>
          </span>
        </button>
      ) : (
        <button type="button" aria-label="Pause video" onClick={toggle} className="absolute inset-0" />
      )}
    </div>
  );
}
