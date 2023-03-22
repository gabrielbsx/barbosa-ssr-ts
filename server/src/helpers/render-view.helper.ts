import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { type RenderView } from '../contracts'

const fullRootPath = join(__dirname, '..', '..', '..', 'web', 'src', 'pages')

const replaceFileToEndpoint = (file: string): string => {
  const endpoint = file.replace('.html', '').replace(fullRootPath, '').replace('index', '')
  return endpoint
}

const recursiveDirectoryViewer = (path: string): Array<Omit<RenderView, 'data'>> => {
  const files = readdirSync(path)
  const filesWithFullPath = files.map((file) => join(path, file))
  const filesWithFullPathAndExtension = filesWithFullPath.map((file) => {
    const fileExtension = file.split('.').pop()
    if (fileExtension === 'html') {
      const endpoint = replaceFileToEndpoint(file)
      const view = file
      return {
        endpoint,
        view
      }
    }
    return recursiveDirectoryViewer(file)
  })
  return filesWithFullPathAndExtension.flat()
}

export const renderListEndpointView = (): RenderView[] => {
  const pagesFolder = fullRootPath
  const pageViewers = recursiveDirectoryViewer(pagesFolder)
  return pageViewers
}
