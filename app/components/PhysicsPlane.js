import {
  MeshPhongMaterial
} from 'three';

import {
  PlaneModule
} from 'physics-module-ammonext';

// Meshes
import {
  Plane
} from '@whs+meshes';

import {MeshComponent} from '@whs/core/MeshComponent';

export class PhysicsPlane extends Plane {
  /**
   * @name PhysicsPlane
   * @param params
   */
  constructor(params = {}) {

    params.modules = [
      new PlaneModule({
        mass: 0
      })
    ];

    params.geometry = {
      width: 100,
      height: 100
    };

    params.rotation = {
      x: -Math.PI / 2
    };

    params.material = new MeshPhongMaterial({color: 0x447F8B});

    super(params);
  }
}
