import { Image } from '~/interfaces/image'

export const useImageUtils = () => {
  const baseUrl = useStrapiUrl().replace('/api', '')

  const properties = (image: Image) => {
    const source = baseUrl + image.data.attributes.url
    const altText = image.data.attributes.alternativeText

    return { source, altText }
  }

  return { properties }
}
