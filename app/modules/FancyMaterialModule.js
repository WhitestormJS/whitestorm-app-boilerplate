import {ShaderMaterial} from 'three';
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
