import React from 'react';
import {
  MdDashboard,
  MdCropLandscape,
  MdApps,
  MdExitToApp,
} from 'react-icons/md';

function Header() {
  return (
    <div className="flex shadow-sm bg-gray-50 p-3 justify-between">
      <div className="flex space-x-3 items-center">
        <p className="text-gray-400">Address</p>
        <p>df34f765-9467-4cdf-87c4-b629e107a461</p>
        <MdCropLandscape className="text-gray-300" />
        <MdDashboard className="text-gray-300" />
      </div>
      <div className="flex space-x-2 items-center text-gray-400 mr-3">
        <MdApps />
        <MdExitToApp />
        <p className="text-gray-600 font-semibold text-lg">Close</p>
      </div>
    </div>
  );
}

export default Header;
