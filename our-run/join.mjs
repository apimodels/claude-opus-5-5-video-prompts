// join.mjs: join the streamed answer in stream.txt into promo.html
import { readFileSync, writeFileSync } from 'node:fs'

let html = ''
for (const line of readFileSync('stream.txt', 'utf8').split('\n')) {
  if (!line.startsWith('data:') || line.includes('[DONE]')) continue
  try {
    const delta = JSON.parse(line.slice(5)).choices?.[0]?.delta?.content
    if (delta) html += delta
  } catch { /* skip non-JSON lines */ }
}
// the model sometimes wraps the file in a ```html fence; strip it
html = html.replace(/^```html\s*/i, '').replace(/```\s*$/, '')
writeFileSync('promo.html', html)
console.log('chars:', html.length)
