"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DrawingTypeConfig } from "../data/drawingTypes";
import MediaGallery from "./MediaGallery";
import QuantitySelector from "./QuantitySelector";
import SizeSelector from "./SizeSelector";
import DeliveryInfo from "./DeliveryInfo";
import PaymentInfo from "./PaymentInfo";
import DrawingTypeCards from "./DrawingTypeCards";

interface OrderPageProps {
  drawing: DrawingTypeConfig;
  allDrawings: DrawingTypeConfig[];
}

type FormValues = {
  size: "busto" | "meioCorpo" | "corpoInteiro";
  qtdPessoas: number;
  qtdPets: number;
};

export default function OrderPage({ drawing, allDrawings }: OrderPageProps) {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      size: "meioCorpo",
      qtdPessoas: 1,
      qtdPets: 0,
    },
  });

  const selectedSize = watch("size");
  const qtdPessoas = watch("qtdPessoas");
  const qtdPets = watch("qtdPets");

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const pricePorPessoa = drawing.personPrices[selectedSize];
    const pessoasValue = pricePorPessoa * qtdPessoas;
    const petsValue = drawing.petPrice * qtdPets;
    setTotalPrice(pessoasValue + petsValue);
  }, [selectedSize, qtdPessoas, qtdPets, drawing]);

  function onSubmit(data: FormValues) {
    const tamanhoMap: Record<string, string> = {
      busto: "Busto",
      meioCorpo: "Meio Corpo",
      corpoInteiro: "Corpo Inteiro",
    };

    const mensagem = `
Olá Debora! 👋

Gostaria de fazer um pedido de ilustração do tipo *${drawing.name}*.

📋 *Detalhes do Pedido:*
• Tamanho: ${tamanhoMap[data.size]}
• Quantidade de pessoas: ${data.qtdPessoas}
• Quantidade de pets: ${data.qtdPets}

💲 *Preço Total:* R$ ${totalPrice.toFixed(2)}

Por favor, me informe o próximo passo para seguirmos com o pagamento. Obrigado(a)! 😊
    `.trim();

    const phoneNumber = "558597884320"; // +55 85 9788-4320 → 558597884320
    const whatsappURL =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(mensagem);

    window.open(whatsappURL, "_blank");

    toast.success("Mensagem aberta no WhatsApp com sucesso!", {
      position: "top-center",
      autoClose: 2500,
    });
  }

  return (
    <>
      <div className="px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">{drawing.name}</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <MediaGallery images={drawing.images} />
          </div>

          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow">
            <div className="mb-4">
              <span className="text-2xl font-semibold text-yellow-600">
                R$ {totalPrice.toFixed(2)}
              </span>
            </div>

            <p className="text-gray-700 mb-6">{drawing.description}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <SizeSelector register={register} selectedSize={selectedSize} />
              {errors.size && (
                <p className="text-red-500 text-sm">Selecione um tamanho.</p>
              )}

              <div>
                <span className="text-sm font-medium">
                  Quantidade de pessoas
                </span>
                <QuantitySelector
                  value={qtdPessoas}
                  min={1}
                  onChange={(val) => setValue("qtdPessoas", val)}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Crianças e bebês contam como 1 pessoa.
                </p>
              </div>

              <div>
                <span className="text-sm font-medium">
                  Pets – R$ {drawing.petPrice.toFixed(2)} cada
                </span>
                <QuantitySelector
                  value={qtdPets}
                  min={0}
                  onChange={(val) => setValue("qtdPets", val)}
                />
              </div>

              <DeliveryInfo />

              <PaymentInfo />

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-md transition"
                >
                  Enviar Encomenda
                </button>
              </div>
            </form>
          </div>
        </div>

        <DrawingTypeCards allTypes={allDrawings} currentSlug={drawing.slug} />
      </div>

      <ToastContainer />
    </>
  );
}
