# Pixel-art wizard casting a spell, pure Canvas code

Claude Opus 5.5 video case 7 of 60 · Motion Design & UI Animation · [简体中文](#中文)

By [@majidmanzarpour](https://x.com/majidmanzarpour) · [original post](https://x.com/majidmanzarpour/status/2102476258948927543) · [see the clip in the apimodels.app gallery](https://apimodels.app/claude-opus-5-5-video-prompts/motion-graphics)

- **Model:** Post: "opus 5.5, animated pixel art wizard, pure code prompt shared below" (launch day). Prompt shared in the reply.
- **Toolchain:** Single HTML, vanilla JS and Canvas 2D at a 128x96 logical resolution scaled by an integer factor, a fixed palette of about 24 colours, a state-machine animation and an allocation-free particle pool; the clip is a screen recording.
- **Clip:** About 11 s, 1080x890, about 450K views.
- **Pitfalls:** This one runs a live requestAnimationFrame loop rather than deterministic seek(t), so a screen recording depends on machine speed. For a stable MP4, rewrite it in the seek(t) style of the UI-morph template.

**Prompt (the author's own words)**

```text
Create a single self-contained HTML file that renders an animated pixel art wizard casting a spell, using vanilla JavaScript and Canvas 2D. No external assets, libraries, or network requests.
RENDERING
- Draw everything to an offscreen canvas at a fixed logical resolution of 128x96, then blit to a fullscreen display canvas scaled by the largest integer factor that fits the window, centered, with imageSmoothingEnabled = false and CSS image-rendering: pixelated.
- All drawing snaps to integer coordinates on the logical canvas. No sub-pixel positions, anti-aliasing, gradients, or shadowBlur.
- Fixed palette of ~24 hex colors: deep blues/purples for night sky, warm robe tones, 3-4 bright magic colors. Every pixel comes from this palette.
CHARACTER
- Build the wizard procedurally from filled rects and pixel runs, ~24x32 logical pixels: pointed hat with a bend, long beard, two-shade robe with darker outline, staff with a gem at the tip.
- Parameterize the pose (staff angle, arm raise, head tilt, robe sway). Animate parameters smoothly, then quantize to the pixel grid each frame so motion reads at an 8-12 fps pixel animation feel even though the loop runs at 60fps.
ANIMATION
- Looping state machine: IDLE (2-frame bob, beard sway) -> CHARGE (staff raises, gem flickers, sparks spiral inward) -> CAST (bright burst, projectile fires across the scene, 1-2 pixel screen shake) -> RECOVER (settle back). Ease pose parameters between keyframes.
- Pooled allocation-free particle system: preallocate and reuse. Sparks orbit the gem during CHARGE, explode outward on CAST, each particle stepping its palette index from white to magic color to dark before despawn. Snap particle positions to the grid when drawing.
- Fixed 60hz timestep update with rAF rendering. Zero object allocation inside the loop.
SCENE
- Minimal background: dark sky, a few twinkling 1px stars, moon, stone floor line. Character silhouette must read clearly.
- Subtle 1px rim light on the wizard from the gem, brightening during CHARGE and CAST.
QUALITY BAR
- Crisp pixels at any window size, seamless loop, stable 60fps, readable silhouette. Should look like a polished 16-bit sprite animation, not vector shapes scaled down.
```

To make one like it: the [six workflows with templates](../../METHODS.md) cover every route used in this collection, and [our own run](../../our-run/README.md) has a complete prompt, render script and cost.

## 中文

**纯代码像素风巫师施法循环动画**

作者:[@majidmanzarpour](https://x.com/majidmanzarpour) · [原帖](https://x.com/majidmanzarpour/status/2102476258948927543) · [在 apimodels.app 案例库看视频](https://apimodels.app/zh/claude-opus-5-5-video-prompts/motion-graphics)

- **模型依据:** 原帖:「opus 5.5, animated pixel art wizard, pure code prompt shared below」(发布当天),提示词在回复中公开。
- **工具链与做法:** 单 HTML、原生 JS + Canvas 2D、128x96 逻辑分辨率整数倍放大、约 24 色固定调色板、状态机动画、无分配粒子池;成片为录屏。
- **成片规格:** 约 11 秒,1080x890,约 45 万浏览。
- **踩坑:** 这条用 rAF 实时循环、不是 seek(t) 确定性渲染,录屏受机器性能影响;要出稳定 MP4,改成上面 UI 变形模板那种 seek(t) 写法。

**提示词(作者原文)**:见上方代码块。

想做类似的:[六条做法路线与模板](../../METHODS.zh-CN.md) 覆盖了本合集用到的所有路线,[我们自己的一次实跑](../../our-run/README.md) 有完整提示词、渲染脚本和花费。

---

← [Mobile-game reward and gacha reveal (Three.js toon shading + GSAP)](06-mobile-game-reward-and-gacha-reveal-three-js-toon-shading.md) · [All 60 cases](../../README.md) · [Colourful remix of the UI-morph template that exposed the default render pipeline](08-colourful-remix-of-the-ui-morph-template-that-exposed-the.md) →

Collected and checked against the original post by [apimodels.app](https://apimodels.app), the API platform that maintains this repository. The video belongs to its creator; our write-up is [CC BY 4.0](../../LICENSE). Call Claude Opus 5.5 through apimodels.app: [model page](https://apimodels.app/models/claude-opus-5-5).
