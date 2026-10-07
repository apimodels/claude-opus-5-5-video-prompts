# One shape morphs through a dozen UI states on the beat

Claude Opus 5.5 video case 3 of 60 · Motion Design & UI Animation · [简体中文](#中文)

By [@twoclipping](https://x.com/twoclipping) · [original post](https://x.com/twoclipping/status/2103273003555402193) · [see the clip in the apimodels.app gallery](https://apimodels.app/claude-opus-5-5-video-prompts/motion-graphics)

- **Model:** Post: "opus 5.5 is f*cking cracked at motion design this entire video is code, 0 after effects". The author open-sourced the prompt and wrote "steal it".
- **Toolchain:** Single 1440x1440 HTML; every style computed inside seek(t); closed-form springs; numpy beat analysis of the song; Playwright renders 4 subframes per frame blended with FFmpeg tmix for 60fps motion blur; one frame per beat is checked before the full render.
- **Clip:** 14 s, 1440x1440, about 1.04M views and 12K likes.
- **Pitfalls:** Needs Node, Playwright, FFmpeg and Python with numpy (a Claude Code-style environment). The gotchas block is the author's own scar tissue: will-change blurs scaled text; a last frame that differs from the first makes the loop stutter. Use music licensed for commercial use.

**Prompt (the author's own words)**

```text
<inputs>
Ask me for: 8 to 12 UI states I want the shape to become (e.g. button, loader, player, slider, toggle, tabs, chart, command palette, toast), pure black and white or one accent color, and a royalty-free song around 120 BPM (e.g. Mixkit, free for commercial use).
</inputs>
<direction>
Dribbble-level UI motion. One shape, never cut: every state is the same element morphing its size, radius and color while its content swaps with a short blur. A cursor drives every change with real clicks and drags. Light warm-gray canvas, black and white components, one clean UI font (Geist). Springs everywhere, a tiny overshoot at most. The camera zooms so each state fills the frame. The last frame is the first frame, so it loops.
Banned: bouncy easing, particle bursts, glows, gradients on UI chrome, mismatched icon strokes, dead time, anything that looks like a template.
</direction>
<structure>
120 BPM, 7 bars, something happens on every beat.
Button → loader → check → dynamic island → music player with a play/pause morph → scrub the progress bar → it becomes a volume slider that stretches when dragged past max → a toggle flips on the beat → the knob becomes a liquid tab indicator → the tabs open into a chart that draws itself, with a tooltip on hover → it collapses into ⌘K → type to filter → enter → toast → back to the button.
</structure>
<build>
1. One HTML file, square 1440x1440. Every style is computed from time inside seek(t): no CSS transitions, no timers, no state carried between frames.
2. Springs are closed-form step responses. A value that changes target many times is the sum of one spring per change, so it stays a pure function of time.
3. The tab indicator's two edges ride different springs, so the leading edge stretches ahead of the trailing one. Same trick for the toggle knob.
4. Drags are direct manipulation: while the cursor is held, the value is computed from its position. On release it springs back from wherever it was.
5. Analyze the song with numpy for the beat grid and start on a downbeat. Place every UI sound by its measured peak.
6. Render with Playwright: 4 subframes per frame, blended with ffmpeg tmix for motion blur at 60fps.
7. Render one frame per beat before the full render. Fix anything off the grid, cramped or hard to read.
</build>
<gotchas>
Never put will-change on anything the camera scales or the text renders blurry. Text that swaps inside a morphing container needs its own enter and exit timing or it overlaps. Make the last frame identical to the first, cursor position and speed included, or the loop stutters.
</gotchas>
<start>
Ask me for the inputs, then show me the state list on the beat grid before you write any code.
</start>
```

To make one like it: the [six workflows with templates](../../METHODS.md) cover every route used in this collection, and [our own run](../../our-run/README.md) has a complete prompt, render script and cost.

## 中文

**一个形状踩着节拍变遍 12 种 UI 状态(可复用 XML 模板)**

作者:[@twoclipping](https://x.com/twoclipping) · [原帖](https://x.com/twoclipping/status/2103273003555402193) · [在 apimodels.app 案例库看视频](https://apimodels.app/zh/claude-opus-5-5-video-prompts/motion-graphics)

- **模型依据:** 原帖:「opus 5.5 is f*cking cracked at motion design this entire video is code, 0 after effects」;作者在原帖公开提示词并写「steal it」。
- **工具链与做法:** 单 HTML 1440x1440;所有样式在 seek(t) 里按时间计算;闭式弹簧;numpy 分析歌曲节拍;Playwright 每帧 4 个子帧 + FFmpeg tmix 做 60fps 运动模糊;全量渲染前先每拍渲一帧检查。
- **成片规格:** 14 秒,1440x1440,约 104 万浏览、1.2 万赞。
- **踩坑:** 需要 Node + Playwright + FFmpeg + Python numpy(Claude Code 这类环境)。模板里的 gotchas 就是作者踩过的坑:will-change 让被缩放的文字发糊、首尾帧不一致导致循环卡顿。音乐要用可商用授权的。

**提示词(作者原文)**:见上方代码块。

想做类似的:[六条做法路线与模板](../../METHODS.zh-CN.md) 覆盖了本合集用到的所有路线,[我们自己的一次实跑](../../our-run/README.md) 有完整提示词、渲染脚本和花费。

---

← [Showreel brief that lists the techniques](02-showreel-brief-that-lists-the-techniques.md) · [All 60 cases](../../README.md) · [One-take keynote-style launch film with liquid glass and an iris transition](04-one-take-keynote-style-launch-film-with-liquid-glass-and-an.md) →

Collected and checked against the original post by [apimodels.app](https://apimodels.app), the API platform that maintains this repository. The video belongs to its creator; our write-up is [CC BY 4.0](../../LICENSE). Call Claude Opus 5.5 through apimodels.app: [model page](https://apimodels.app/models/claude-opus-5-5).
