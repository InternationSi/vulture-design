/*
 * @Author: sfy
 * @Date: 2022-12-07 22:06:10
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-10 23:05:51
 * @FilePath: /vulture-design/packages/vulture/src/components/graph-force/public-graph-force.tsx
 * @Description: update here
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks'
import ForceGraph3D from '3d-force-graph'
import { mockData } from './mock'
import SpriteText from 'three-spritetext';


export function PublicGraph() {
  const Graph = useRef<any>(null)
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



  const highlightNodes = useRef(new Set())
  const highlightLinks = useRef(new Set())
  const hoverNode = useRef(null)

  const updateHighlight = () => {
    Graph.current
      .nodeColor(Graph.current.nodeColor())
      .linkWidth(Graph.current.linkWidth())
      .linkDirectionalParticles(Graph.current.linkDirectionalParticles());
  };

  const handleNodeHover = node => {

    if ((!node && !highlightNodes.current.size) || (node && hoverNode === node)) return;

    highlightNodes.current.clear();
    highlightLinks.current.clear();
    if (node) {
      highlightNodes.current.add(node);
      node.neighbors?.forEach(neighbor => highlightNodes.current.add(neighbor));
      node.links?.forEach(link => highlightLinks.current.add(link));
    }
    hoverNode.current = node || null
    updateHighlight();
  };

  const handleLinkHover = link => {
    highlightNodes.current.clear();
    highlightLinks.current.clear();

    if (link) {
      highlightLinks.current.add(link);
      highlightNodes.current.add(link.source);
      highlightNodes.current.add(link.target);
    }

    updateHighlight();
  };


  useEffect(() => {
    // DOM初始化及数据挂载
    const elm = document.getElementById('3d-graph')

    Graph.current = ForceGraph3D()(elm)
      .graphData(data)

    // 设置画布样式、节点及关系样式、事件绑定等
    Graph.current.backgroundColor('#9dadc1')
      // 节点样式和标签设置
      .nodeRelSize(7)
      .nodeColor(node => {
        return highlightNodes.current.has(node) ? node === hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)' : 'rgba(0,255,255,0.6)'
      })
      // 给节点添加文字
      .nodeThreeObject(node => {
        const sprite = new SpriteText(node.name)
        sprite.material.depthWrite = false // make sprite background transparent
        // 设置文字颜色
        let i = 0
        sprite.color = '#1E90FF'
        sprite.textHeight = 8
        sprite.position.y -= 10
        return sprite
      })
      .nodeThreeObjectExtend(true)
      .nodeLabel(node => `${node.name}`)
      .nodeOpacity(0.75)
      .linkWidth(link => highlightLinks.current.has(link) ? 4 : 1)
      .linkDirectionalParticles(link => highlightLinks.current.has(link) ? 4 : 0)
      .linkDirectionalParticleWidth(4)
      .onNodeHover(handleNodeHover)
      .onLinkHover(handleLinkHover)
    // Spread nodes a little wider
    Graph.current.d3Force('charge').strength(-150)
  }, [])

  return (
    <>
      <div id="3d-graph" class="three-graph" style={{ width: '100vw', height: '100vh' }}></div>
    </>
  )
}
