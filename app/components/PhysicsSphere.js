import {
  MeshNormalMaterial
} from 'three';

import {
  SphereModule
} from 'physics-module-ammonext';

// Meshes
import {
  Sphere
} from '@whs+meshes';

export class PhysicsSphere extends Sphere {

  /**
   * @name PhysicsSphere
   * @param params
   */
  constructor(params = {}) {

    params.modules = [
      new SphereModule({
        mass: 10,
        restitution: 2.5
      })
    ];

    params.geometry = {
      radius: 2,
      widthSegments: 32,
      heightSegments: 24
    };

    params.material = new MeshNormalMaterial();

    super(params);
  }
}
