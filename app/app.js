// Core
import {App} from 'whs/src/core/App';
import * as THREE from 'whs/src/three';

// Modules
import {ElementModule} from 'whs/src/modules/app/ElementModule';
import {SceneModule} from 'whs/src/modules/app/SceneModule';
import {CameraModule} from 'whs/src/modules/app/CameraModule';
import {RenderingModule} from 'whs/src/modules/app/RenderingModule';
import {OrbitModule} from 'whs/src/modules/controls/OrbitModule';

import {RedMaterialModule} from './modules/RedMaterialModule';

// Components
import {Sphere} from 'whs/src/components/meshes/sphere';
import {BasicComponent} from './components/BasicComponent';

const app = new App([
  new ElementModule(),
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
