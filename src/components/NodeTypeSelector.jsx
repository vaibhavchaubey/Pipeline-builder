import React from 'react';

const NodeTypeSelector = ({ addNode }) => {
  return (
    <div className="flex justify-between p-4">
      <button
        className="bg-blue-400 text-white px-4 py-2 rounded"
        onClick={() => addNode('sourceNode')}
      >
        Add Source
      </button>
      <h1 className="text-2xl font-bold text-gray-800">Pipeline Builder</h1>
      <button
        className="bg-green-400 text-white px-4 py-2 rounded"
        onClick={() => addNode('destinationNode')}
      >
        Add Destination
      </button>
    </div>
  );
};

export default NodeTypeSelector;
