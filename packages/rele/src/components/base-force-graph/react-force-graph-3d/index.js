/*
 * @Author: sfy
 * @Date: 2023-03-28 15:04:10
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-28 21:56:56
 * @FilePath: /vulture-design/packages/rele/src/components/base-force-graph/react-force-graph-3d/index.js
 * @Description: update here
 */
import fromKapsule from '../react-kapsule';
import { ForceGraph3D } from '@vuld/common';
import { ForceGraph3DPropTypes } from './forcegraph-proptypes';

const ReactForceGraph3D = fromKapsule(
  ForceGraph3D,
  {
    methodNames: [ // bind methods
      'emitParticle',
      'd3Force',
      'd3ReheatSimulation',
      'stopAnimation',
      'pauseAnimation',
      'resumeAnimation',
      'cameraPosition',
      'zoomToFit',
      'getGraphBbox',
      'screen2GraphCoords',
      'graph2ScreenCoords',
      'postProcessingComposer',
      'scene',
      'camera',
      'renderer',
      'controls',
      'refresh'
    ],
    initPropNames: ['controlType', 'rendererConfig', 'extraRenderers']
  }
);

ReactForceGraph3D.displayName = 'ForceGraph3D';
ReactForceGraph3D.propTypes = ForceGraph3DPropTypes;

export default ReactForceGraph3D;
