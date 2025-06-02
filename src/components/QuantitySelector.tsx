"use client";

interface QuantitySelectorProps {
  label?: string;
  value: number;
  min?: number;
  onChange: (newValue: number) => void;
}

export default function QuantitySelector({
  label,
  value,
  min = 0,
  onChange,
}: QuantitySelectorProps) {
  function decrease() {
    if (value - 1 >= min) {
      onChange(value - 1);
    }
  }

  function increase() {
    onChange(value + 1);
  }

  return (
    <div className="flex flex-col">
      {label && <span className="text-sm font-medium">{label}</span>}
      <div className="mt-1 flex items-center space-x-2">
        <button
          type="button"
          onClick={decrease}
          className="w-8 h-8 flex items-center justify-center border rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50"
          disabled={value <= min}
        >
          −
        </button>
        <span className="w-8 text-center text-lg font-medium">{value}</span>
        <button
          type="button"
          onClick={increase}
          className="w-8 h-8 flex items-center justify-center border rounded-md text-gray-600 hover:bg-gray-100"
        >
          +
        </button>
      </div>
    </div>
  );
}
