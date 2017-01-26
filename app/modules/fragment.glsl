varying vec3 vPosition;
varying vec3 vNormal;

uniform float time;

#pragma glslify: noise = require('glsl-noise/simplex/4d')

void main() {
  vec3 color = vNormal * (noise(vec4(vPosition, time)) + 0.01);
  gl_FragColor = vec4(color, 1.0);
}
