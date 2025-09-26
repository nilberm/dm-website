// src/components/DrawingsGrid.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DrawingCard from "./DrawingCard";
import { DrawingTypeConfig } from "../data/drawingTypes";

export default function DrawingsGrid() {
  const [categories, setCategories] = useState<DrawingTypeConfig[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDrawingTypes = async () => {
      try {
        const response = await fetch("/api/drawing-types");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Erro ao carregar tipos de desenho:", error);
        // Fallback para dados padrão se a API falhar
        const { drawingTypes } = await import("../data/drawingTypes");
        setCategories(drawingTypes);
      } finally {
        setLoading(false);
      }
    };

    loadDrawingTypes();
  }, []);

  if (loading) {
    return (
      <section id="types" className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900">
          Types of Drawings
        </h2>
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="text-lg">Carregando...</div>
        </div>
      </section>
    );
  }

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
