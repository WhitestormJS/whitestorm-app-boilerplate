# whitestorm-app-boilerplate
[WIP] WhitestormJS 2 App boilerplate

![](http://i.imgur.com/kLu62Ih.png)

## `app.js`

```javascript
// Core
import {App} from '@whs/core/App';

import {
  ElementModule,
  SceneModule,
  CameraModule,
  RenderingModule
} from '@whs:app';

import {OrbitModule} from '@whs:controls/orbit';

import {RedMaterialModule} from './modules/RedMaterialModule';

// Components
import {Sphere} from '@whs+meshes/sphere';
import {BasicComponent} from './components/BasicComponent';

const app = new App([
  new ElementModule({
    container: document.getElementById('app')
  }),
  new SceneModule(),
  new CameraModule({
    position: {
      z: -20
    }
  }),
  new RenderingModule(),
  new OrbitModule()
]);

app.add(new BasicComponent({
  modules: [
    new RedMaterialModule()
  ]
}));

app.start();

```

## `./components/BasicComponent.js`

```javascript
import {MeshComponent} from '@whs:core/MeshComponent';
import * as THREE from '@whs^three';

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
```

## `./modules/RedMaterialModule.js`

```javascript
export class RedMaterialModule {
  constructor() {
    this.bridge = {
      material(material) {
        material.color.setRGB(1, 0, 0);
        return material;
      }
    }
  }
}
```
