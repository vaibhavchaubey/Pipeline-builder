import React from 'react';
import { Handle, Position } from 'reactflow';
import LeftArrowIcon from './arrowIcons/LeftArrowIcon';

const CustomDestinationNode = ({ data, id }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{
          background: '#4CAF50',
          width: '7px',
          height: '30px',
          borderRadius: '2px',
        }}
      />
      <div className="custom-node shadow-md p-1 rounded bg-green-200 flex border border-black">
        <div className="flex flex-col justify-center items-center flex-grow">
          <div className="text-sm font-bold">{data.label}</div>
          <div className="text-xs font-bold text-gray-600 mt-auto">
            {'Destination'}
          </div>{' '}
        </div>

        <div className="flex items-center bg-slate-300 py-6 rounded-sm ml-2">
          <LeftArrowIcon />
        </div>
      </div>
    </>
  );
};

export default CustomDestinationNode;
