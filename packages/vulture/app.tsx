/*
 * @Author: sfy
 * @Date: 2022-12-07 22:06:10
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-11 13:12:50
 * @FilePath: /vulture-design/packages/vulture/app.tsx
 * @Description: update here
 */
import { PublicGraph, ReactGraph } from './src/components'


export function App() {


  return (
    <>
      {/* <PublicGraph /> */}
      <ReactGraph />
    </>
  )
}

{/* <ForceGraph3D
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
/> */}
