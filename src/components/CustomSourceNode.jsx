import React from 'react';
import { Handle, Position } from 'reactflow';
import RightArrowIcon from './arrowIcons/RightArrowIcon';

const CustomSourceNode = ({ data, id }) => {
  return (
    <>
      <Handle
        type="source"
        position={Position.Right}
        style={{
          background: '#4CAF50',
          width: '7px',
          height: '30px',
          borderRadius: '2px',
        }}
      />
      <div className="custom-node shadow-md p-1 rounded bg-blue-200 flex border border-black">
        <div className="flex items-center bg-slate-300 py-6 rounded-sm">
          <RightArrowIcon />
        </div>
        <div className="flex flex-col justify-center items-center flex-grow">
          <div className="text-sm font-bold">{data.label}</div>
          <div className="text-xs font-bold text-gray-600 mt-auto">
            {'Source'}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomSourceNode;
