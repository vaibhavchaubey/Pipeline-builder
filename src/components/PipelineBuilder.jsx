import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';
import NodeTypeSelector from './NodeTypeSelector';
import CustomSourceNode from './CustomSourceNode';
import CustomDestinationNode from './CustomDestinationNode';
import generateNode from '../utils/generateNode';

const nodeTypes = {
  sourceNode: CustomSourceNode,
  destinationNode: CustomDestinationNode,
};

const PipelineBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const addNode = (type) => {
    const newNode = generateNode(type, nodes);
    setNodes((nds) => [...nds, newNode]);
  };

  const onConnect = useCallback(
    (params) => {
      if (validateConnection(params)) {
        const animatedEdge = { ...params, animated: true };
        setEdges((eds) => addEdge(animatedEdge, eds));
      }
    },
    [nodes]
  );

  const onNodeClick = (event, node) => {
    setSelectedNode(node.id);
  };

  const onEdgeClick = (event, edge) => {
    setEdges((eds) => eds.filter((e) => e.id !== edge.id));
  };

  const onNodeDragStop = useCallback((event, node) => {
    setSelectedNode(node.id);
  }, []);

  const validateConnection = (params) => {
    const sourceNode = nodes.find((node) => node.id === params.source);
    const targetNode = nodes.find((node) => node.id === params.target);
    return sourceNode && targetNode && sourceNode.type !== targetNode.type;
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Backspace' && selectedNode) {
        setNodes((nds) => nds.filter((node) => node.id !== selectedNode));
        setSelectedNode(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedNode]);

  const nodeColor = (node) => {
    if (node.type === 'destinationNode') return '#48bb78';
    return 'rgb(59 130 246)';
  };

  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-full">
        <div className="p-4">
          <NodeTypeSelector addNode={addNode} />
        </div>
        <div className="flex-grow h-full">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onEdgeClick={onEdgeClick}
            onNodeDragStop={onNodeDragStop}
            nodeTypes={nodeTypes}
            deleteKeyCode={46}
            style={{ width: '100%', height: '100%' }}
          >
            <MiniMap nodeColor={nodeColor} zoomable pannable />
            <Controls />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
    </ReactFlowProvider>
  );
};

export default PipelineBuilder;
