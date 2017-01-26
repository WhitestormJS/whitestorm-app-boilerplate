varying vec3 vPosition;
varying vec3 vNormal;

uniform float time;

#pragma glslify: noise = require('glsl-noise/simplex/4d')

void main() {
  float displace = noise(vec4(position, time));

  vPosition = position + normal * displace * 0.1;
  vNormal = normal;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0 );
}
