/*
 * @Author: sfy
 * @Date: 2022-12-11 13:11:02
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-27 23:22:29
 * @FilePath: /vulture-design/packages/rele/src/components/graph-force/react-graph-force.tsx
 * @Description: update here
 */
import React from 'react';
import { useCallback, useMemo, useState, useRef,useEffect } from 'react'
import ForceGraph3D from 'react-force-graph-3d';
import SpriteText from 'three-spritetext';
import { useHightLig, useCameraPos, useCollapsed } from './effect'
import { mockData } from './mock'

export function ReactGraph() {
  const curRef = useRef<any>()
  const data = useMemo(() => {
    fetch('../mock.json')
      .then((res) => { return res.json(); })
      .then((data) => {
        console.log(data, 'data');

      })

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
  const { collaspedEvent, prunedTree } = useCollapsed(data)

  useEffect(() => {
    if (!curRef.current) return
    curRef.current.d3Force('link').distance(node => {
      if (node.type == 'mfr') {
        return 180
      }
      return 90
    })

  }, [])

  const { highlightNodes, highlightLinks, hoverNode, handleNodeHover, handleLinkHover } = useHightLig()

  const { camePay } = useCameraPos(curRef)




  return (
    <>
      <ForceGraph3D
        ref={curRef}
        graphData={prunedTree}
        backgroundColor="#ffffff"
        nodeRelSize={15}
        nodeResolution={20}
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
        // linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 8 : 0}
        linkDirectionalParticleWidth={8}
        onNodeHover={handleNodeHover}
        onLinkHover={handleLinkHover}
        onNodeClick={camePay}
        onNodeRightClick={collaspedEvent}
      />
    </>
  )
}
