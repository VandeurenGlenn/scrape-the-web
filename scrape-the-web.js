export default async url => {
  if (!globalThis.fetch) {
    const importee = await import('node-fetch')
    globalThis.fetch = importee.default
  }
  const importee = await import('cheerio')
  const cheerio = importee.default
  const response = await fetch(url)
  return cheerio.load(await response.text())
}
