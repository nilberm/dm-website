"use client";

import Image from "next/image";
import { useState } from "react";

interface MediaGalleryProps {
  images: string[];
}

export default function MediaGallery({ images }: MediaGalleryProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const currentImage = images[currentIdx];

  return (
    <div className="w-full">
      {/* Container com `relative` para que `fill` funcione */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
        <Image
          src={currentImage}
          alt={`Imagem ${currentIdx + 1}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-2 flex gap-2 overflow-x-auto">
        {images.map((src, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
              idx === currentIdx
                ? "border-yellow-600"
                : "border-transparent hover:border-gray-400"
            }`}
          >
            <Image
              src={src}
              alt={`Thumb ${idx + 1}`}
              width={64}
              height={64}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
