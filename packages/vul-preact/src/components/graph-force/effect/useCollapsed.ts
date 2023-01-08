/*
 * @Author: sfy
 * @Date: 2022-12-12 21:51:28
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-12 22:15:06
 * @FilePath: /vulture-design/packages/vulture/src/components/graph-force/effect/useCollapsed.ts
 * @Description: update here
 */

import { useCallback, useMemo, useState } from "preact/hooks";

export const useCollapsed = (graphData) => {

  const rootId = "299087127457563139";

  const nodesById = useMemo(() => {
    const nodesById = Object.fromEntries(graphData.nodes.map(node => [node.id, node]));

    // link parent/children
    graphData.nodes.forEach(node => {
      node.collapsed = false;
      node.childLinks = [];
    });
    graphData.links.forEach(link => nodesById[link.source].childLinks.push(link));

    return nodesById;
  }, [graphData]);

  const getPrunedTree = useCallback(() => {
    const visibleNodes = [];
    const visibleLinks = [];
    (function traverseTree(node = nodesById[rootId]) {
      visibleNodes.push(node);
      if (node?.collapsed) return;
      visibleLinks.push(...node?.childLinks);
      node.childLinks
        .map(link => ((typeof link.target) === 'object') ? link.target : nodesById[link.target]) // get child node
        .forEach(traverseTree);
    })();

    return { nodes: visibleNodes, links: visibleLinks };
  }, [nodesById]);

  const [prunedTree, setPrunedTree] = useState(getPrunedTree());

  const collaspedEvent = useCallback(node => {
    node.collapsed = !node.collapsed; // toggle collapse state
    setPrunedTree(getPrunedTree())
  }, []);


  return {
    collaspedEvent,
    prunedTree
  }
}