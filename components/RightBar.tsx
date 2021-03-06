import React from 'react';

function RightBar() {
  return (
    <div className="bg-white w-4/12 rounded-xl border border-gray-100">
      <div className="border-b p-3 border-gray-100">
        <p className="font-semibold">Delegation</p>
      </div>
      <div className="flex flex-col items-center p-3">
        <p className="font-semibold text-lg text-hray-800">21 h 47 m 51s</p>
        <p className="text-gray-600 text-sm">
          until next rewards batch is distributed by
        </p>
      </div>
      <div className="p-4 flex items-center justify-center">
        <div className="flex justify-center items-center h-48 w-48 rounded-full">
          <div className="flex flex-col justify-center items-center border-gray-200 h-44 w-44 rounded-full">
            <div className=" flex flex-col justify-center items-center shadow-2xl h-32 w-32 rounded-full  ">
              <p className="text-gray-800 font-semibold"> 17.0216 EGLD</p>
              <p className="text-blue-700 font-semibold text-sm"> Claim Now</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-3">
        <p className="text-gray-600 text-sm text-center">
          These are rears available be claimed right now.
        </p>
      </div>
    </div>
  );
}

export default RightBar;
