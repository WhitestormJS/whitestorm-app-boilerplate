// Core
import {App} from '@whs/core/App';

import {
  ElementModule,
  SceneModule,
  CameraModule,
  RenderingModule
} from '@whs:app';

import {
  MeshBasicMaterial
} from '@whs^three';

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
