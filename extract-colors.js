 let extractColors = async (cssContent, baseUrl = import.meta.url) => {
  const colorRegex = /--([a-zA-Z0-9-]+):\s*(.*?);/g
  const colors = []

  let match
  while ((match = colorRegex.exec(cssContent)) !== null) {
    const [, variable, value] = match
    colors.push({ variable, value })
  }

  const importRegex = /@import\s*['"](.*)['"];/g
  while ((match = importRegex.exec(cssContent)) !== null) {
    const [, importPath] = match
    const absoluteUrl = new URL(importPath, baseUrl)
    const importedResponse = await fetch(absoluteUrl)
    const importedCssContent = await importedResponse.text()
    const importedColors = await extractColors(
      importedCssContent,
      absoluteUrl.href,
    )
    colors.push(...importedColors)
  }

  return colors
}

export {extractColors}