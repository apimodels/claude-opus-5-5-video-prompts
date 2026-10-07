# Minimal product launch: scanning wall of vertical clips, cut on the beat

Claude Opus 5.5 video case 5 of 60 · Motion Design & UI Animation · [简体中文](#中文)

By [@twoclipping](https://x.com/twoclipping) · [original post](https://x.com/twoclipping/status/2102554209166000267) · [see the clip in the apimodels.app gallery](https://apimodels.app/claude-opus-5-5-video-prompts/motion-graphics)

- **Model:** Post: "this entire video is code opus picked the music, downloaded the sfx, built every frame and synced it all to the beat by itself".
- **Toolchain:** Single 1920x1080 HTML with window.seek(t); real clips extracted to 30fps JPEG sequences and swapped per frame; numpy tempo, beat grid, energy and drop analysis; 3 subframes of motion blur; 20+ frames probed before the full render.
- **Clip:** 20 s, 1920x1080.
- **About the prompt:** X auto-inserted a stray "http://" into build step 1 of the posted text; it is removed here and nothing else is changed.
- **Pitfalls:** Opacity or filter on a preserve-3d element flattens it and shows both faces; fade the wrapper instead.

**Prompt (the author's own words)**

```text
<inputs>
Ask me for: the product name and a one-line promise, 3 to 5 UI moments to show, one accent color, 10 to 20 real vertical clips I own, and a royalty-free song with a clear drop (e.g. Mixkit, free for commercial use).
</inputs>
<direction>
High-end minimal. One idea per shot, lots of empty space, one accent color, one clean sans (Geist or Inter) with tight tracking. Masked type reveals, match cuts, one smooth camera language. Real footage only, never placeholder cards. No full stops in on-screen text.
Banned: shockwave rings, particle bursts, RGB split, camera shake, lens flares, neon glows, grid floors, flashing backgrounds, bouncy easing.
</direction>
<structure>
10 bars at 120 BPM, 2 seconds each.
Bar 1: the hook lands word by word on the beats.
Bar 2: one hook word morphs into the product UI. A cursor types and clicks.
The drop: a circle opens out of the button into a dark scene.
Then one move per bar: a wall of real clips with a scan line and 3 winners, the key output as big type, a 3D carousel of real videos with floor reflections and a motion-blurred whip onto one hero clip, the hero in a phone next to a panel that flips into results, big stats on push cuts, a 3-word ticker, a logo reveal, a fade to black.
</structure>
<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state between frames.
2. Real video: extract clips to 30fps JPEG sequences with ffmpeg and swap img sources per frame. seek awaits the image decodes.
3. Analyze the song with numpy: tempo, beat grid, energy per bar, the drop. Calibrate the grid to the real kick hits. Every cut sits on a downbeat, every UI hit on a beat.
4. Render with Playwright: 3 subframes per frame at t minus, at, and plus 1/240s, then blend with ffmpeg tmix for real motion blur at 60fps.
5. Place each sound effect so its measured peak, not its file start, lands on the event. Keep the effects quiet under the music. Loudnorm to -14 LUFS.
6. Probe 20 or more frames before the full render. Fix anything cluttered, overlapping or hard to read.
</build>
<gotchas>
Never set opacity or filter on a preserve-3d element, because it flattens and both faces show. Fade its wrapper instead. Measure element positions at runtime for match cuts. Only use music and sound effects whose license allows commercial use.
</gotchas>
<start>
Ask me for the inputs, then show me a storyboard with every timing on the beat grid before you write any code.
</start>
```

To make one like it: the [six workflows with templates](../../METHODS.md) cover every route used in this collection, and [our own run](../../our-run/README.md) has a complete prompt, render script and cost.

## 中文

**极简高端产品片:竖屏素材扫描墙 + 卡点**

作者:[@twoclipping](https://x.com/twoclipping) · [原帖](https://x.com/twoclipping/status/2102554209166000267) · [在 apimodels.app 案例库看视频](https://apimodels.app/zh/claude-opus-5-5-video-prompts/motion-graphics)

- **模型依据:** 原帖:「this entire video is code opus picked the music, downloaded the sfx, built every frame and synced it all to the beat by itself」。
- **工具链与做法:** 单 HTML 1920x1080 + window.seek(t);真实视频用 FFmpeg 抽成 30fps JPEG 序列逐帧换图;numpy 分析速度、节拍网格、能量与 drop;3 子帧运动模糊;全量前先抽查 20+ 帧。
- **成片规格:** 20 秒,1920x1080。
- **提示词说明:** 原帖 build 第 1 条里被 X 自动插入了一个多余的「http://」,此处已去掉,其余未改。
- **踩坑:** preserve-3d 元素上设 opacity / filter 会被拍平、正反面都露出来,要淡出外层 wrapper。

**提示词(作者原文)**:见上方代码块。

想做类似的:[六条做法路线与模板](../../METHODS.zh-CN.md) 覆盖了本合集用到的所有路线,[我们自己的一次实跑](../../our-run/README.md) 有完整提示词、渲染脚本和花费。

---

← [One-take keynote-style launch film with liquid glass and an iris transition](04-one-take-keynote-style-launch-film-with-liquid-glass-and-an.md) · [All 60 cases](../../README.md) · [Mobile-game reward and gacha reveal (Three.js toon shading + GSAP)](06-mobile-game-reward-and-gacha-reveal-three-js-toon-shading.md) →

Collected and checked against the original post by [apimodels.app](https://apimodels.app), the API platform that maintains this repository. The video belongs to its creator; our write-up is [CC BY 4.0](../../LICENSE). Call Claude Opus 5.5 through apimodels.app: [model page](https://apimodels.app/models/claude-opus-5-5).
