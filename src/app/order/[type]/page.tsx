import OrderPage from "@/components/OrderPage";
import { drawingTypes } from "@/data/drawingTypes";

interface Params {
  params: { type: string };
}

export default function OrderTypePage({ params }: Params) {
  const { type } = params;

  const drawing = drawingTypes.find((dt) => dt.slug === type);

  if (!drawing) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <h2 className="text-xl font-semibold text-red-600">
          Tipo de desenho `&quot;`{type}`&quot;` não encontrado.
        </h2>
      </div>
    );
  }

  return <OrderPage drawing={drawing} allDrawings={drawingTypes} />;
}
