export function getStrapiURL(path = '') {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    'http://localhost:1337'}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith('/')
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}

export const IMAGE_TYPE = {
  THUMBNAIL: 'thumbnail',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
};
export function getSpecificImage(type, image_obj) {
  switch (type) {
    case IMAGE_TYPE.THUMBNAIL:
    case IMAGE_TYPE.LARGE:
    case IMAGE_TYPE.MEDIUM:
    case IMAGE_TYPE.SMALL:
      return getStrapiMedia(image_obj.formats[type]);
    default:
      return getStrapiMedia(image_obj);
  }
}
