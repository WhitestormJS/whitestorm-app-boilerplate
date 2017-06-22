import {
  App,
  ElementModule,
  Plane,
  SceneModule,
  CameraModule,
  OrbitControlsModule,
  RenderingModule
} from 'whs';
import {FancyMaterialModule} from './modules/FancyMaterialModule';
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
  new OrbitControlsModule()
]);

app.add(new BasicComponent({
  modules: [
    new FancyMaterialModule(app)
  ]
}));

app.start();
