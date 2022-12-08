/*
 * @Author: sfy
 * @Date: 2022-12-07 22:06:10
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-08 23:13:46
 * @FilePath: /vulture-design/packages/vulture/app.tsx
 * @Description: update here
 */
import { useCallback, useMemo, useState } from 'preact/hooks'
import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';

function genRandomTree(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map(i => ({ id: i, label:'sam'+i })),
      links: [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      [reverse ? 'target' : 'source']: id,
      [reverse ? 'source' : 'target']: Math.round(Math.random() * (id-1))
    }))
  };
}

export function App() {
  const NODE_R = 8;
  const data = useMemo(() => {
    const gData = genRandomTree(80);

    // cross-link node objects
    gData.links.forEach(link => {
      const a = gData.nodes[link.source];
      const b = gData.nodes[link.target];
      !a.neighbors && (a.neighbors = []);
      !b.neighbors && (b.neighbors = []);
      a.neighbors.push(b);
      b.neighbors.push(a);

      !a.links && (a.links = []);
      !b.links && (b.links = []);
      a.links.push(link);
      b.links.push(link);
    });

    return gData;
  }, []);

  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [hoverNode, setHoverNode] = useState(null);

  const updateHighlight = () => {
    setHighlightNodes(highlightNodes);
    setHighlightLinks(highlightLinks);
  };

  const handleNodeHover = node => {
    highlightNodes.clear();
    highlightLinks.clear();
    if (node) {
      highlightNodes.add(node);
      node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
      node.links.forEach(link => highlightLinks.add(link));
    }

    setHoverNode(node || null);
    updateHighlight();
  };

  const handleLinkHover = link => {
    highlightNodes.clear();
    highlightLinks.clear();

    if (link) {
      highlightLinks.add(link);
      highlightNodes.add(link.source);
      highlightNodes.add(link.target);
    }

    updateHighlight();
  };

  const paintRing = useCallback((node, ctx) => {
    // add ring just for highlighted nodes
    ctx.beginPath();
    ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
    ctx.fillStyle = node === hoverNode ? 'red' : 'orange';
    ctx.fill();
  }, [hoverNode]);

  return (
    <>
      <ForceGraph3D
        graphData={data}
        autoPauseRedraw={false}
        nodeLabel="label"
        nodeVisibility={(...rest) => {
          return true
        }}
        nodeThreeObject={(node) => new THREE.Mesh(
          new THREE.SphereGeometry( 10),
          new THREE.MeshLambertMaterial({
            color: Math.round(Math.random() * Math.pow(2, 24)),
            transparent: true,
            opacity: 1
          })
        )}
        linkWidth={link => highlightLinks.has(link) ? 5 : 1}
        linkDirectionalParticles={4}
        linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 4 : 0}
        nodeCanvasObjectMode={node => highlightNodes.has(node) ? 'before' : undefined}
        nodeCanvasObject={paintRing}
        onNodeHover={handleNodeHover}
        onLinkHover={handleLinkHover}
      />
    </>
  )
}
