import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  title: string;
  balance: number;
  icon: IconType;
  className?: string;
};

function Card({ title, balance, icon: Icon, className }: Props) {
  return (
    <div
      className={`transform hover:scale-105 cursor-pointer transition-all delay-100 w-1/4 p-2 h-32 shadow-xl border rounded-xl ${className}`}
    >
      <div className="flex justify-between">
        <div></div>
        <div className="w-10 h-10 flex items-center justify-center bg-gray-300 bg-opacity-30 rounded-xl m-1">
          <Icon className="text-white text-xs" />
        </div>
      </div>
      <p className="text-gray-200 text-xs">{title}</p>
      <p className="text-gray-50 text-lg font-semibold">{`${balance} EGLD`}</p>
      <p className="text-gray-300 text-sm">{`$${(balance * 0.93).toFixed(
        5
      )}`}</p>
    </div>
  );
}

export default Card;
