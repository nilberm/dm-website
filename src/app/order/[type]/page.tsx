// app/order/[type]/page.tsx

import { DrawingTypeConfig } from "@/data/drawingTypes";
import OrderPage from "@/components/OrderPage";

async function getDrawingTypes(): Promise<DrawingTypeConfig[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/drawing-types`, {
      cache: 'no-store' // Sempre buscar dados atualizados
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch drawing types');
    }
    
    return await response.json();
  } catch (error) {
    console.error("Erro ao carregar tipos de desenho:", error);
    // Fallback para dados padrão
    const { drawingTypes } = await import("@/data/drawingTypes");
    return drawingTypes;
  }
}

export default async function OrderTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const drawingTypes = await getDrawingTypes();
  const drawing = drawingTypes.find((dt) => dt.slug === type);

  if (!drawing) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <h2 className="text-xl font-semibold text-red-600">
          Tipo de desenho &quot;{type}&quot; não encontrado.
        </h2>
      </div>
    );
  }

  return <OrderPage drawing={drawing} allDrawings={drawingTypes} />;
}
