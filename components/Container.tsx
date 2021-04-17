import React from 'react';
import Card from './Card';
import { MdAllOut, MdDone, MdLock, MdAcUnit } from 'react-icons/md';
import Middle from './Middle';
import RightBar from './RightBar';

function Container() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-50 h-full">
      <div className="px-8 py-1">
        <p className="text-gray-500 text-lg">Elrond</p>
        <p className="font-bold text-2lg transform -translate-y-2">Hei</p>
      </div>
      <div className="flex p-4 space-x-3">
        <Card
          title="Total"
          balance={409.079}
          icon={MdAllOut}
          className="bg-gradient-to-r from-indigo-500 to-blue-500"
        />
        <Card
          title="Available"
          balance={409.079}
          icon={MdDone}
          className="bg-gradient-to-r from-blue-400 to-blue-300"
        />
        <Card
          title="Claimable reward"
          balance={409.079}
          icon={MdAcUnit}
          className="bg-gradient-to-r from-green-500 to-green-400"
        />
        <Card
          title="Delegated"
          balance={409.079}
          icon={MdLock}
          className="bg-gradient-to-r from-yellow-600 to-yellow-500"
        />
      </div>
      <div className="flex ml-3 mt-6 space-x-6 mr-4">
        <Middle />
        <RightBar />
      </div>
    </div>
  );
}

export default Container;
