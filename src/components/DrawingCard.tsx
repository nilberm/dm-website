"use client";

import Image from "next/image";

interface DrawingCardProps {
  title: string;
  description: string;
  imgSrc: string;
  onClick?: () => void;
}

export default function DrawingCard({
  title,
  description,
  imgSrc,
  onClick,
}: DrawingCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
    >
      <div className="relative h-40 w-full">
        <Image src={imgSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
}
