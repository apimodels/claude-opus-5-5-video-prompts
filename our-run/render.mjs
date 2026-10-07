// render.mjs — pnpm add puppeteer-core; uses the Chrome you already have
import puppeteer from 'puppeteer-core'
import { mkdirSync, writeFileSync } from 'node:fs'

mkdirSync('frames', { recursive: true })
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
})
const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 720 })
await page.goto('file://' + process.cwd() + '/promo.html')
await page.evaluate(() => { window.requestAnimationFrame = () => 0 }) // stop the preview loop
const { DURATION, FPS } = await page.evaluate(() => ({ DURATION, FPS }))
for (let i = 0; i < DURATION * FPS; i++) {
  const png = await page.evaluate((t) => {
    window.renderFrame(t)
    return document.querySelector('canvas').toDataURL('image/png')
  }, i / FPS)
  writeFileSync(`frames/f${String(i).padStart(4, '0')}.png`, Buffer.from(png.split(',')[1], 'base64'))
}
await browser.close()
