export class RedMaterialModule {
  constructor() {
    this.bridge = {
      material(material) {
        material.color.setRGB(1, 0, 0);
        return material;
      }
    }
  }
}
