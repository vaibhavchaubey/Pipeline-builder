import React from 'react';
import { Handle, Position } from 'reactflow';

const CustomSourceNode = ({ data, id }) => {
  console.log(data);

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7-7 7M5 12h16"
            />
          </svg>
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
