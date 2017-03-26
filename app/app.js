// Core
import {App} from '@whs/core/App';

// Core Modules
import {
  ElementModule,
  SceneModule,
  CameraModule,
  RenderingModule
} from '@whs:app';

import {
    AmbientLight
} from '@whs+lights';

// Physics Modules
import {
    WorldModule,
    PlaneModule,
    SphereModule
} from 'physics-module-ammonext';

// Modules
import {OrbitModule} from '@whs:controls/orbit';
import {FancyMaterialModule} from './modules/FancyMaterialModule';

// Components
import {BasicComponent} from './components/BasicComponent';

// Mesh Components
import {
    Plane,
    Sphere
} from '@whs+meshes';

// App
const app = new App([
  new WorldModule({
    ammo: 'http://localhost:8080/node_modules/three/examples/js/libs/ammo.js'
  }),
  new ElementModule({
    container: document.getElementById('app')
  }),
  new SceneModule(),
  new CameraModule({
    position: {
      y: 40,
      z: 40,
    }
  }),
  new RenderingModule({bgColor: 0x000001}),
  new OrbitModule()
]);

// Physics Sphere
new Sphere({
    position: {y: 40},
    geometry: {
        radius:         2,
        widthSegments:  32,
        heightSegments: 32
    },
    material: new THREE.MeshNormalMaterial(),
    modules: [
        new FancyMaterialModule(app),
        new SphereModule({
            mass:        10,
            restitution: 2.5
        })
    ]
}).addTo(app);

// Physics Plane
new Plane({
    geometry: {
        width: 100,
        height: 100
    },
    rotation: {
        x: -Math.PI / 2
    },
    material: new THREE.MeshPhongMaterial({color: 0x447F8B}),
    modules: [
        new PlaneModule({
            mass: 0,
            restitution: 0.333
        })
    ]
}).addTo(app);

// Global light
new AmbientLight({
    light: {
        intensity: 0.7
    }
}).addTo(app);

app.start();
