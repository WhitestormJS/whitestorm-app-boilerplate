import {MeshComponent} from 'whs/src/core/MeshComponent';
import * as THREE from 'whs/src/three';

export class BasicComponent extends MeshComponent {
  build() {
    return new THREE.Mesh(
      new THREE.SphereGeometry(3, 16, 16),
      this.applyBridge({
        material: new THREE.MeshBasicMaterial({color: 0xffffff})
      }).material
    )
  }
}
