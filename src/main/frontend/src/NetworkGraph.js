import React from 'react';
import ReactFlow from 'react-flow-renderer';
import './NetworkGraph.css';

const elements = [
  {
    id: 'a',
    sourcePosition: 'right',
    targetPosition: 'right',
    // type: 'input',
    data: { label: 'A' },
    position: { x: 10, y: 100 },
    connectable : false,
    draggable : false,
    className: 'nodestyle'
  },
  {
    id: 'b',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'B' },
    position: { x: 250, y: 0 },
    draggable : false,
    connectable : false,
    className: 'nodestyle'
  },
  {
    id: 'c',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'C' },
    position: { x: 250, y: 200 },
    draggable : false,
    connectable : false,
    className: 'nodestyle'
  },
  {
    id: 'd',
    sourcePosition: 'bottom',
    targetPosition: 'left',
    data: { label: 'D' },
    position: { x: 500, y: 0 },
    draggable : false,
    connectable : false,
    className: 'nodestyle'
  },
  {
    id: 'e',
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    data: { label: 'E' },
    position: { x: 350, y: 100 },
    draggable : false,
    connectable : false,
    className: 'nodestyle'
  },
  {
    id: 'f',
    sourcePosition: 'bottom',
    targetPosition: 'top',
    data: { label: 'F' },
    position: { x: 500, y: 200 },
    draggable : false,
    connectable : false,
    className: 'nodestyle'
  },
  {
    id: 'g',
    sourcePosition: 'bottom',
    targetPosition: 'left',
    data: { label: 'G' },
    position: { x: 750, y: 50 },
    draggable : false,
    connectable : false,
    className: 'nodestyle'
  },
  {
    id: 'h',
    sourcePosition: 'left',
    targetPosition: 'top',
    data: { label: 'H' },
    position: { x: 750, y: 300 },
    draggable : false,
    connectable : false,
    className: 'nodestyle'
  },
  {
    id: 'a-b',
    source: 'a',
    type: 'smoothstep',
    target: 'b',
    label: ran(),
    animated: true,
    className: 'edgestyle'
  },
  {
    id: 'a-c',
    source: 'a',
    type: 'smoothstep',
    target: 'c',
    label: ran(),
    animated: true,
    className: 'edgestyle'
  },
  {
    id: 'a-e',
    source: 'a',
    type: 'smoothstep',
    target: 'e',
    label: ran(),
    animated: true,
    className: 'edgestyle'
  },
  {
    id: 'b-d',
    source: 'b',
    type: 'smoothstep',
    target: 'd',
    label: ran(),
    animated: true,
    className: 'edgestyle'
  },
  {
    id: 'c-f',
    source: 'c',
    type: 'smoothstep',
    target: 'f',
    label: ran(),
    animated: true,
    className: 'edgestyle'
  },
  {
    id: 'd-f',
    source: 'd',
    type: 'smoothstep',
    target: 'f',
    label: ran(),
    animated: true,
    className: 'edgestyle'
  },
  {
    id: 'd-f',
    source: 'd',
    type: 'smoothstep',
    target: 'f',
    label: ran(),
    animated: true,
    className: 'edgestyle'
  },
  {
    id: 'g-h',
    source: 'g',
    type: 'smoothstep',
    target: 'h',
    label: ran(),
    animated: true,
    className: 'edgestyle'
  },
  {
    id: 'd-g',
    source: 'd',
    type: 'smoothstep',
    target: 'g',
    label: ran(),
    animated: true,
    className: 'edgestyle'
  },
  {
    id: 'f-h',
    source: 'f',
    type: 'smoothstep',
    target: 'h',
    label: ran(),
    animated: true,
    className: 'edgestyle'
  },
  {
    id: 'b-e',
    source: 'b',
    type: 'smoothstep',
    target: 'e',
    label: ran(),
    animated: true,
    className: 'edgestyle'
  },
  {
    id: 'c-e',
    source: 'c',
    type: 'smoothstep',
    target: 'e',
    label: ran(),
    animated: true,
    className: 'edgestyle'
  },
  {
    id: 'f-g',
    source: 'g',
    type: 'smoothstep',
    target: 'f',
    label: ran(),
    animated: true,
    className: 'edgestyle'
  },
];

  function ran() {
    return Math.ceil(Math.random() * (15 - 1) + 1);
  }

function NetworkGraph() {

  return (
    <div style={{ height: 400, width: 1000 }}>
      <ReactFlow elements={elements} 
      zoomOnScroll = {false}
      paneMoveable = {false}
      zoomOnDoubleClick = {false}  />
    </div>
  );
}
export default NetworkGraph