# One-take keynote-style launch film with liquid glass and an iris transition

Claude Opus 5.5 video case 4 of 60 · Motion Design & UI Animation · [简体中文](#中文)

By [@twoclipping](https://x.com/twoclipping) · [original post](https://x.com/twoclipping/status/2103835273813496100) · [see the clip in the apimodels.app gallery](https://apimodels.app/claude-opus-5-5-video-prompts/motion-graphics)

- **Model:** Post: "OPUS 5.5 IS THE ONLY MOTION DESIGNER YOU NEED… pure code". Full prompt (5,200+ characters) published in the post.
- **Toolchain:** Single 1440x1440 HTML with async seek(t); closed-form springs; SVG feDisplacementMap liquid glass; real footage re-encoded all-intra and seeked per frame; licensed SFX placed by measured peak; loudness normalised to -14 LUFS; Playwright 4 subframes + tmix at 60fps; frame-difference scan for single-frame pops.
- **Clip:** About 29 s, 1440x1440, about 130K views.
- **Pitfalls:** You supply the photos, the track and a stock clip. Chromium's backdrop-filter: url() misreads displacement maps, and python http.server cannot range-seek video; both are in the gotchas.

**Prompt (the author's own words)**

```text
<inputs>
Ask me for: a one-word brand name for the wordmark (a verb works best), 9 to 12 high-res photos, a royalty-free song around 120 BPM with a drop and a quiet breakdown (Mixkit, free for commercial use), and a free stock clip of a plain wall with moving plant shadows (Pexels).
</inputs>
<direction>
An Apple-keynote launch film, 2D only, one continuous take. Every scene is made out of the previous one: nothing fades, blurs or cuts. Objects change shape instead: text rises out of a mask line, icons pop from zero on a spring, bars draw across, pages push, and a black shape floods the whole frame and contracts into the next scene. Warm off-white canvas, black UI, iOS 26 liquid glass over the photos. Archivo (wdth 125, weight 800) for the wordmark, Geist for UI. A cursor drives every change with real clicks, drags and long-presses. The camera zooms screen-studio style so each moment fills the square, and the cursor scales with it.
Banned: crossfades, blur-ins, brightness "developing", 3D flips, particles, glows, holds longer than 1s, anything that looks like a template.
</direction>
<structure>
120 BPM, 54 beats, something happens on every beat.
Open: the wordmark squeezes into its own period like an accordion, the dot grows into a black pill, a label rises inside it. Click: six iris blades close over the label and snap open onto a photo. The circle becomes a square, shrinks, the grid unfolds from behind it like a paper map (center, plus, corners), reflows into a bento, and a click zooms into one tile, landing exactly on the drop.
Glass: a glass word pops in letter by letter, melts into a droplet that stretches into a glass toolbar. The adjust icon turns it into a slider. Dragging relights the photo from day to golden hour (two aligned shots), and the knob turns into a glass lens while held. It lifts into a glass orb, the next photo opens inside it as a circle, and the orb expands into a lock screen: glass clock digits, date, and a home bar that stretches into a glass music player.
Stage: the lock screen pulls back into a phone (the bezel grows out of the screen edge). The Dynamic Island stretches like liquid, pinches off, flies over and grows into a Mac window that rolls up like a blind. Long-press the wallpaper, drag it onto a Safari tab, the page pushes in, drop it and it becomes the hero of a landing page. Scroll: the hero morphs into a framed print on a product card, with the mat and molding growing out of the photo's edge. Pick a frame color (it paints across) and a size, then the nav button flies down into "Order print".
Order: one black shape keeps morphing: Ordered ✓ → Printing % → On its way (a van on a route) → Delivered ✓.
Wall: the delivered circle floods the frame edge to edge, holds black for a beat, and contracts into the framed print hanging on the real wall footage. The same iris opens onto the print, closes again, the frame floods the screen and contracts into the pill → the dot → the letters spring back out, landing on the beat return. Last frame = first frame.
</structure>
<build>
1. One HTML file, square 1440x1440. Every style is computed from time inside an async seek(t): no CSS transitions, no timers, no state between frames.
2. Springs are closed-form step responses. A value with many targets is the sum of one spring per change, so it stays a pure function of time.
3. Liquid glass: each glass element holds its own clone of the scene behind it, filtered with an SVG feImage displacement map (a rounded-rect distance field) through three feDisplacementMaps at slightly different scales for chromatic edges, plus a rim light. Glass letters: a canvas distance field per glyph gives the map, mask and highlights.
4. Goo: blur + alpha threshold, then composite the source atop it so the glass stays sharp inside.
5. Iris: 6 blades around a hexagonal aperture. Each blade is its two vertices, both edge extensions and the SHORT arc between them.
6. Wordmark squeeze: every letter moves toward the dot by the same factor and its drawn width follows (narrow the wdth axis, scale the rest), so the letters stay touching.
7. Footage: re-encode all-intra (ffmpeg -g 1), load it as a blob URL, await 'seeked' before drawing each frame.
8. Sound: a downloaded SFX for every event (Mixkit), never synthesized, each placed by its measured peak. The song starts on a downbeat: the zoom lands on the drop, the wall sits in the breakdown, the wordmark returns with the beat. Loudnorm to -14 LUFS.
9. Render with Playwright: 4 subframes per frame blended with ffmpeg tmix, 60fps. Check one frame per beat, then scan for single-frame pops (frame-difference spikes 3x their neighbours).
</build>
<gotchas>
backdrop-filter: url() misreads displacement maps in Chromium, so clone the scene instead. A flood must overscale past the corners and take about 0.3s, or half the screen changes in one frame. A child with visibility: visible shows through a hidden parent, so use inherit. Text that swaps inside a morphing shape needs its own mask. python http.server can't range-seek video, so use the blob URL.
</gotchas>
<start>
Ask me for the inputs, then show me the beat map and 4 stills (open, glass, stage, wall) before you write the full film.
</start>
```

To make one like it: the [six workflows with templates](../../METHODS.md) cover every route used in this collection, and [our own run](../../our-run/README.md) has a complete prompt, render script and cost.

## 中文

**一镜到底发布会风格品牌片(液态玻璃、光圈转场,5,200 字模板)**

作者:[@twoclipping](https://x.com/twoclipping) · [原帖](https://x.com/twoclipping/status/2103835273813496100) · [在 apimodels.app 案例库看视频](https://apimodels.app/zh/claude-opus-5-5-video-prompts/motion-graphics)

- **模型依据:** 原帖:「OPUS 5.5 IS THE ONLY MOTION DESIGNER YOU NEED… pure code」;5,200+ 字符完整提示词在原帖公开。
- **工具链与做法:** 单 HTML 1440x1440 + async seek(t);闭式弹簧;SVG feDisplacementMap 做液态玻璃;真实素材全 I 帧重编码后逐帧 seek;可商用音效按峰值对位;-14 LUFS 响度标准化;Playwright 4 子帧 + tmix 60fps;帧差扫描抓单帧跳变。
- **成片规格:** 约 29 秒,1440x1440,约 13 万浏览。
- **踩坑:** 照片、音乐、Pexels 素材要自己准备。Chromium 的 backdrop-filter:url() 读不对位移图,python http.server 不能 range-seek 视频,模板 gotchas 里都写了。

**提示词(作者原文)**:见上方代码块。

想做类似的:[六条做法路线与模板](../../METHODS.zh-CN.md) 覆盖了本合集用到的所有路线,[我们自己的一次实跑](../../our-run/README.md) 有完整提示词、渲染脚本和花费。

---

← [One shape morphs through a dozen UI states on the beat](03-one-shape-morphs-through-a-dozen-ui-states-on-the-beat.md) · [All 60 cases](../../README.md) · [Minimal product launch: scanning wall of vertical clips, cut on the beat](05-minimal-product-launch-scanning-wall-of-vertical-clips-cut.md) →

Collected and checked against the original post by [apimodels.app](https://apimodels.app), the API platform that maintains this repository. The video belongs to its creator; our write-up is [CC BY 4.0](../../LICENSE). Call Claude Opus 5.5 through apimodels.app: [model page](https://apimodels.app/models/claude-opus-5-5).
