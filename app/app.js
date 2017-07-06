import {
  App,
  DefineModule,
  ElementModule,
  OrbitControlsModule,
  PerspectiveCamera,
  Plane,
  RenderingModule,
  SceneModule
} from 'whs';
import {FancyMaterialModule} from './modules/FancyMaterialModule';
import {BasicComponent} from './components/BasicComponent';

const app = new App([
  new ElementModule(document.getElementById('app')),
  new SceneModule(),
  new DefineModule('camera', new PerspectiveCamera({
    position: {
      z: -15
    }
  })),
  new RenderingModule({bgColor: 0x000001}),
  new OrbitControlsModule()
]);

app.add(new BasicComponent({
  modules: [
    new FancyMaterialModule(app)
  ]
}));

app.start();
