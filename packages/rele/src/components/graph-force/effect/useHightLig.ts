/*
 * @Author: sfy
 * @Date: 2022-12-12 21:27:41
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-27 23:23:08
 * @FilePath: /vulture-design/packages/rele/src/components/graph-force/effect/useHightLig.ts
 * @Description: update here
 */

import { useState } from "react";

export const useHightLig = () => {
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

  return {
    highlightNodes,
    highlightLinks,
    hoverNode,
    handleNodeHover,
    handleLinkHover
  }

}