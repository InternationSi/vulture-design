/*
 * @Author: sfy
 * @Date: 2022-12-11 13:11:02
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-11 15:35:34
 * @FilePath: /vulture-design/packages/vulture/src/components/graph-force/react-graph-force.tsx
 * @Description: update here
 */
/*
 * @Author: sfy
 * @Date: 2022-12-07 22:06:10
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-08 23:13:46
 * @FilePath: /vulture-design/packages/vulture/app.tsx
 * @Description: update here
 */
import { useEffect } from 'preact/hooks';
import { useCallback, useMemo, useState, useRef } from 'preact/hooks'
import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';
import SpriteText from 'three-spritetext';
import { mockData } from './mock'


export function ReactGraph() {
  const curRef = useRef<any>()
  const data = useMemo(() => {
    const gData = {
      nodes: mockData.data.nodes,
      links: mockData.data.edges
    }

    // cross-link node objects
    gData.links.forEach(link => {
      const a: any = gData.nodes.find(item => item.id === link.source);
      const b: any = gData.nodes.find(item => item.id === link.target);
      if (!a || !b) return
      !a?.neighbors && (a.neighbors = []);
      !b?.neighbors && (b.neighbors = []);
      a?.neighbors.push(b);
      b?.neighbors.push(a);

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
    if (!node) return
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


  useEffect(() => {
    console.log(curRef);
    if (!curRef.current) return
    const result = curRef.current.d3Force('link').distance(node => {
      console.log(node.type);
      if (node.type == 'mfr') {
        return 200

      }
      return 90
    })
    console.log(result, 'result');

  }, [])

  return (
    <>
      <ForceGraph3D
        ref={curRef}
        graphData={data}
        backgroundColor="#ffffff"
        nodeRelSize={15}
        nodeColor={node => {
          return highlightNodes.has(node) ? node === hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)' : 'rgba(0,255,255,0.6)'
        }}
        nodeThreeObject={node => {
          const sprite = new SpriteText(node.name);
          sprite.color = '#9dadc1';
          sprite.textHeight = 20;
          sprite.position.y -= 40
          return sprite;
        }}
        nodeThreeObjectExtend={true}
        // linkOpacity={0.5}
        linkWidth={link => highlightLinks.has(link) ? 8 : 4}
        linkDirectionalArrowLength={15}
        linkDirectionalArrowRelPos={1}
        linkDirectionalParticles={4}
        linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 8 : 0}
        onNodeHover={handleNodeHover}
        onLinkHover={handleLinkHover}
      />
    </>
  )
}
