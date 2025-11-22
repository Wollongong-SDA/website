export const API_URL = import.meta.env.CMS_BASE
export const TRANSFORMATION = `${API_URL}/cdn-cgi/image/format=avif`
export const ASSET_URL = (path: string) => `${API_URL}/assets/${path}`
export const IMAGE_URL = (path: string) => `${TRANSFORMATION}/assets/${path}`