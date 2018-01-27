// @flow

import path from 'path'
import { Image } from 'ascii-art'
import { crop } from 'aspectratio'

type Options = {
  width?: number,
  height?: number,
}

type ImageOptions = Options & { filepath: string }

export default (options?: Options = {}): Promise<string> => {
  return new Promise((resolve, reject) => {
    const imageOptions: ImageOptions = {
      filepath: path.join(__dirname, 'lil-pump.jpg'),
      ...determineWidthAndHeight(options),
    }
    const image = new Image(imageOptions)
    image.write((err, rendered) => {
      return err ? reject(err) : resolve(rendered)
    })
  })
}

function determineWidthAndHeight({ width, height }: Options): Options {
  if (!width || !height) {
    return {}
  }

  const [, , newWidth, newHeight] = crop(width * 1.5, height * 1.5, '1:1')
  return { width: newWidth, height: newHeight }
}
