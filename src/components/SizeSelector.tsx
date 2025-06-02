// src/components/SizeSelector.tsx
"use client";

import { UseFormRegister } from "react-hook-form";

interface SizeSelectorProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>; 
  selectedSize: string; 
}

export default function SizeSelector({
  register,
  selectedSize,
}: SizeSelectorProps) {
  return (
    <fieldset className="flex flex-col space-y-2">
      <legend className="text-sm font-medium">Tamanho</legend>

      <label className="inline-flex items-center space-x-2">
        <input
          type="radio"
          value="busto"
          {...register("size")}
          className="form-radio h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300"
        />
        <span
          className={`text-gray-700 ${
            selectedSize === "busto" ? "font-semibold" : ""
          }`}
        >
          Busto
        </span>
      </label>

      <label className="inline-flex items-center space-x-2">
        <input
          type="radio"
          value="meioCorpo"
          {...register("size")}
          className="form-radio h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300"
        />
        <span
          className={`text-gray-700 ${
            selectedSize === "meioCorpo" ? "font-semibold" : ""
          }`}
        >
          Meio Corpo
        </span>
      </label>

      <label className="inline-flex items-center space-x-2">
        <input
          type="radio"
          value="corpoInteiro"
          {...register("size")}
          className="form-radio h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300"
        />
        <span
          className={`text-gray-700 ${
            selectedSize === "corpoInteiro" ? "font-semibold" : ""
          }`}
        >
          Corpo Inteiro
        </span>
      </label>
    </fieldset>
  );
}
