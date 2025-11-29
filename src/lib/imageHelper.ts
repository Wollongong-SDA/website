interface ImageDetails {
  id: string
  title: string
  description: string | null
  tags: string[] | null
  location: string | null
  storage: string
  filename_disk: string
  filename_download: string
  metadata: Record<string, any>
  type: string
  filesize: string
  width: number
  height: number
}

export default async function getImageDetails(path: string): Promise<ImageDetails> {
  let image = await fetch(`${import.meta.env['CMS_BASE']}/files/${path}`)
  return (await image.json()).data
}
