import { writeFile, mkdir } from 'node:fs/promises'

export const generateFile = async (html: string, route: string[]) => {
  let imagePath = 'public/static'

  route.forEach(() => {
    imagePath = '../' + imagePath
  })

  const data = html.replaceAll("'/static", imagePath)

  const fileName = route.pop()
  const fileRoute = route.join('/') + '/'

  const projectFolder = new URL(`../../generated-emails/${fileRoute}`, import.meta.url)

  try {
    if (fileName == null) throw new Error('El nombre del archivo es obligatorio')
    await mkdir(projectFolder, { recursive: true })
    await writeFile(`generated-emails/${fileRoute}${fileName}.html`, data, { encoding: 'utf-8' })
  } catch (error) {
    console.log('Error creando archivo', error)
  }
}
