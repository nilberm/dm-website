/* eslint-disable @typescript-eslint/no-unused-vars */
import { drawingTypes } from "@/data/drawingTypes";
import OrderPage from "@/components/OrderPage";

export default function OrderTypePage({
  params,
  searchParams,
}: {
  params: { type: string };
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const { type } = params;
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
