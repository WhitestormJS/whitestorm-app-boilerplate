// Core
import {App} from '@whs/core/App';

// Core Modules
import {
  ElementModule,
  SceneModule,
  CameraModule,
  RenderingModule
} from '@whs:app';

// Modules
import {OrbitModule} from '@whs:controls/orbit';
import {FancyMaterialModule} from './modules/FancyMaterialModule';

// Components
import {BasicComponent} from './components/BasicComponent';
import {PhysicsSphere} from './components/PhysicsSphere';
import {PhysicsPlane} from './components/PhysicsPlane';

// World Module
import {WorldModule} from '../node_modules/physics-module-ammonext/src/modules/WorldModule';

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

app.add(new BasicComponent({
  modules: [
    new FancyMaterialModule(app)
  ]
}));

// Physics Objects
new PhysicsSphere({position: {y: 50}}).addTo(app);
new PhysicsPlane().addTo(app);

app.start();
