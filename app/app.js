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
