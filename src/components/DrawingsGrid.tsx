// src/components/DrawingsGrid.tsx
"use client";

import Link from "next/link";
import DrawingCard from "./DrawingCard";
import { drawingTypes, DrawingTypeConfig } from "../data/drawingTypes";

export default function DrawingsGrid() {
  const categories: DrawingTypeConfig[] = drawingTypes;

  return (
    <section id="types" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900">
        Types of Drawings
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/order/${cat.slug}`}>
              <DrawingCard
                title={cat.name}
                description={cat.description}
                imgSrc={cat.images[0]}
              />
          </Link>
        ))}
      </div>
    </section>
  );
}
