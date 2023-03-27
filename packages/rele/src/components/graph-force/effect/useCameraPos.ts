/*
 * @Author: sfy
 * @Date: 2022-12-12 21:36:50
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-27 23:22:57
 * @FilePath: /vulture-design/packages/rele/src/components/graph-force/effect/useCameraPos.ts
 * @Description: update here
 */

import { useCallback } from "react";

export const useCameraPos = (curRef) => {

  const camePay = useCallback(node => {
    // Aim at node from outside it
    const distance = 700;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

    curRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      3000  // ms transition duration
    );
  }, [curRef]);

  return {
    camePay
  }
}