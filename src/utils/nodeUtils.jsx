import React from 'react';
import CustomSourceNode from '../components/CustomSourceNode';
import CustomDestinationNode from '../components/CustomDestinationNode';

let sourceNodeId = 0; // Counter for source nodes
let destinationNodeId = 0; // Counter for destination nodes

const generateNode = (type) => {
  let id;
  let label;

  if (type === 'sourceNode') {
    id = `source-${sourceNodeId++}`;
    label = `Source ${sourceNodeId}`;
  } else if (type === 'destinationNode') {
    id = `destination-${destinationNodeId++}`;
    label = `Destination ${destinationNodeId}`;
  } else {
    return null;
  }

  const isSource = type === 'sourceNode';
  const xPosition = isSource ? 50 : window.innerWidth - 250;
  const yPosition = Math.random() * (window.innerHeight - 150);

  return {
    id,
    type,
    data: { label, type },
    position: { x: xPosition, y: yPosition },
    style: {
      width: '150px',
      height: '80px',
    },
    sourcePosition: isSource ? 'right' : 'left',
    targetPosition: isSource ? 'left' : 'right',
    render: isSource ? <CustomSourceNode /> : <CustomDestinationNode />,
  };
};

export default generateNode;
