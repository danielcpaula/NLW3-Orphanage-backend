import Image from "../models/Image";

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.254.1/uploads/${image.path}`,
    }
  },

  rederMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
}