"use client";

import Link from "next/link";
import { DrawingTypeConfig } from "../data/drawingTypes";
import Image from "next/image";

interface DrawingTypeCardsProps {
  allTypes: DrawingTypeConfig[];
  currentSlug: string;
}

export default function DrawingTypeCards({
  allTypes,
  currentSlug,
}: DrawingTypeCardsProps) {
  const otherTypes = allTypes.filter((dt) => dt.slug !== currentSlug);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        Outros tipos de desenho
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherTypes.map((dt) => (
          <Link
            key={dt.slug}
            href={`/order/${dt.slug}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="w-full h-48 bg-gray-200 overflow-hidden">
              <Image
                src={dt.images[0]}
                alt={dt.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{dt.name}</h3>
              <p className="text-gray-600 text-sm mt-1 truncate">
                {dt.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
