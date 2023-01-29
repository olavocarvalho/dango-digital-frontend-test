"use client";

import { Minus, Plus } from "phosphor-react";

interface QuantityInputProps {
  quantity?: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

export function QuantityInput({
  quantity = 0,
  onDecrease,
  onIncrease,
}: QuantityInputProps) {
  const shouldDisablIncreaseButton = quantity > 8 ? true : false;
  const shouldDisablDecreaseButton = quantity < 1 ? true : false;

  return (
    <div className="flex flex-col justify-items-stretch border-t border-b border-l border-slate-600">
      <button
        onClick={onDecrease}
        disabled={shouldDisablDecreaseButton}
        className={`hover:bg-slate-300 block text-center px-2 py-1  text-slate-600 font-serif ${
          shouldDisablDecreaseButton ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <Minus size={14} weight="bold" />
      </button>
      <div className="border-y border-slate-600 block text-center py-1 cursor-not-allowed">
        {quantity}
      </div>
      <button
        onClick={onIncrease}
        disabled={shouldDisablIncreaseButton}
        className={`hover:bg-slate-300 block text-center px-2 py-1  text-slate-600 font-serif ${
          shouldDisablIncreaseButton ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <Plus size={14} weight="bold" />
      </button>
    </div>
  );
}
