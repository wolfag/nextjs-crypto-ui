import React from 'react';
import {
  MdDonutLarge,
  MdArrowUpward,
  MdClearAll,
  MdSync,
  MdArrowDownward,
  MdLayers,
  MdLock,
  MdAcUnit,
} from 'react-icons/md';

function Sidebar() {
  return (
    <div className="md:w-1/4 w-1/2 h-screen shadow-2xl">
      <div className="border-b py-3 flex justify-around items-center">
        <p className="text-xl font-semibold">Wolfag</p>
        <p className="border-r border-gray-700 h-3"></p>
        <p className="text-gray-400 text-lg">wallet</p>
      </div>
      <div className="p-4 space-y-14">
        <div className="space-y-6">
          <h1 className="text-gray-400">Menu</h1>
          <div className="">
            <div className="flex space-x-4 items-center text-grey-600 p-3 hover:text-blue-600 hover:bg-gray-50 cursor-pointer">
              <MdDonutLarge className="text-gray-300" />
              <p className="">Dashboard</p>
            </div>
          </div>
          <div className="">
            <div className="flex space-x-4 items-center text-grey-600 p-3 hover:text-blue-600 hover:bg-gray-50 cursor-pointer">
              <MdClearAll className="text-gray-300" />
              <p className="text-grey-600">Transaction</p>
            </div>
          </div>
          <div className="">
            <div className="flex space-x-4 items-center text-grey-600 p-3 hover:text-blue-600 hover:bg-gray-50 cursor-pointer">
              <MdArrowUpward className="text-gray-300" />
              <p className="text-grey-600">Send</p>
            </div>
          </div>
          <div className="">
            <div className="flex space-x-4 items-center text-grey-600 p-3 hover:text-blue-600 hover:bg-gray-50 cursor-pointer">
              <MdArrowDownward className="text-gray-300" />
              <p className="text-grey-600">Receive</p>
            </div>
          </div>
          <div className="">
            <div className="flex space-x-4 items-center text-grey-600 p-3 hover:text-blue-600 hover:bg-gray-50 cursor-pointer">
              <MdSync className="text-gray-300" />
              <p className="text-grey-600">Buy</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-gray-400">Delegation</h1>
          <div className="">
            <div className="flex space-x-4 items-center text-grey-600 p-3 hover:text-blue-600 hover:bg-gray-50 cursor-pointer">
              <MdLock className="text-gray-300" />
              <p className="text-grey-600">Delegate</p>
            </div>
          </div>
          <div className="">
            <div className="flex space-x-4 items-center text-grey-600 p-3 hover:text-blue-600 hover:bg-gray-50 cursor-pointer">
              <MdAcUnit className="text-gray-300" />
              <p className="text-grey-600">Claim Reward</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-gray-400">Staking</h1>
          <div className="">
            <div className="flex space-x-4 items-center text-grey-600 p-3 hover:text-blue-600 hover:bg-gray-50 cursor-pointer">
              <MdLayers className="text-gray-300" />
              <p className="text-grey-600">Validate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
