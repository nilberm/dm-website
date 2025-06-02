"use client";

export default function PaymentInfo() {
  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="text-lg font-semibold mb-2">Formas de pagamento</h3>
      <p className="text-sm text-gray-700 mb-4">
        É cobrado no mínimo 50% do valor total da ilustração antes de começá-la.
      </p>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl">💳</span>
          <span>Cartão de Crédito</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl">📄</span>
          <span>Boleto</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl">🔌</span>
          <span>Pix</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl">💰</span>
          <span>PayPal (Internacional)</span>
        </div>
      </div>
    </div>
  );
}
