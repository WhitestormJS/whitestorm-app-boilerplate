# whitestorm-app-boilerplate
[WIP] WhitestormJS 2 App boilerplate

<a href="http://whs-boilerplate-app.surge.sh/"><img src="http://i.giphy.com/26xByvPQnomT4eANy.gif" width="100%" height="100%"/></a>

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

import {FancyMaterialModule} from './modules/FancyMaterialModule';

// Components
import {Plane} from '@whs+meshes/Plane';
import {BasicComponent} from './components/BasicComponent';

const app = new App([
  new ElementModule({
    container: document.getElementById('app')
  }),
  new SceneModule(),
  new CameraModule({
    position: {
      z: -15
    }
  }),
  new RenderingModule({bgColor: 0x000001}),
  new OrbitModule()
]);

app.add(new BasicComponent({
  modules: [
    new FancyMaterialModule(app)
  ]
}));

app.start();
```

## `./components/BasicComponent.js`

```javascript
import {
  Mesh,
  IcosahedronGeometry,
  MeshBasicMaterial
} from '@whs^three';

import {MeshComponent} from '@whs/core/MeshComponent';

export class BasicComponent extends MeshComponent {
  build() {
    return new Mesh(
      new IcosahedronGeometry(3, 5),
      this.applyBridge({
        material: new MeshBasicMaterial({color: 0xffffff})
      }).material
    )
  }
}
```

## `./modules/FancyMaterialModule.js`

```javascript
import {ShaderMaterial} from '@whs^three';
import {Loop} from '@whs/core/Loop';
import glsl from 'glslify';

import vertex from './vertex.glsl';
import fragment from './fragment.glsl';

export class FancyMaterialModule {
  constructor(app) {
    this.bridge = {
      material() {
        const material = new ShaderMaterial({
          uniforms: {
            time: {value: 1.0}
          },
          vertexShader: vertex,
          fragmentShader: fragment
        });

        new Loop(c => {
          material.uniforms.time.value += c.getDelta();
        }).start(app);

        return material;
      }
    }
  }
}
```
