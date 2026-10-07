# Infinite zoom through vintage collage worlds, generated assets composited in code

Claude Opus 5.5 video case 31 of 60 · Directing Video Models · [简体中文](#中文)

By [@koldo2k](https://x.com/koldo2k) · [original post](https://x.com/koldo2k/status/2103129343253778767) · [see the clip in the apimodels.app gallery](https://apimodels.app/claude-opus-5-5-video-prompts/storyboard-to-video)

- **Model:** Post: "this animation made with Opus 5.5". The author shared the prompt ("I'll leave you the prompt").
- **Toolchain:** Generation through the Magnific MCP (Seedream 5 Pro landscapes, GPT 2.5 transparent cutouts, depth maps, Kling 2.5 animation, Lyria 3 music); Opus handled the depth layers and parallax, the exponential-zoom maths, green-screen keying, frame-by-frame cut checks, and delivered an interactive artifact plus an MP4.
- **Clip:** 20 s, 1920x1080, about 73K views.
- **Pitfalls:** Note the cost gate: list the generations and credit cost and wait for an OK first, and show screenshots before each expensive step.

**Prompt (the author's own words)**

```text
Build a looping "infinite zoom" animation, After Effects style: the camera
travels from landscape to landscape by flying through vintage objects.
LOOK: vintage collage realistic photo landscapes + black & white newspaper
cutout objects (halftone, white paper border, soft shadow). Film grain,
vignette, light flicker.
WORLDS (loop): snowy mountains → pocket watch (swinging on its chain) →
sea cliffs → box camera lens → desert dunes → magnifying glass →
misty lake → hand mirror → back to start.
Extras: floating hat, phone, umbrella, gramophone, key; a 1950s man walking
toward the watch; a whale swimming across the cliffs sky.
HOW:
- Generate everything via the Magnific MCP (Seedream 5 Pro landscapes,
GPT 2.5 transparent cutouts, depth maps, Kling 2.5 animation, Lyria 3
music). List the generations + credit cost and wait for my OK first.
- Split each landscape into 3 depth layers from its depth map and fill the
hidden areas. Parallax: layer scale = camera^Z, Z between 0.45 and 1.22.
- Each portal's glass holds the next world; cut seamlessly when it fills
the frame.
- Constant speed: exponential zoom to a fixed point, each segment's duration
proportional to log(zoom). Verify the cuts frame by frame.
- Man & whale: generate on pure green (#00B140), animate in place with
Kling, key out every frame, build a seamless loop (ping-pong if needed).
- Cutouts animate at 15 fps (on twos).
- 20 s loop, 1920×1080, 30 fps. Music: 96 BPM, cut to exactly 8 bars = 20 s.
DELIVER: an interactive artifact (viewer, AE-style timeline, music +
MP4 download) and a rendered MP4 with music under 30 MB.
Show me screenshots before each expensive step.
```

To make one like it: the [six workflows with templates](../../METHODS.md) cover every route used in this collection, and [our own run](../../our-run/README.md) has a complete prompt, render script and cost.

## 中文

**复古拼贴「无限缩放」(调多个生成模型出素材 + 代码合成)**

作者:[@koldo2k](https://x.com/koldo2k) · [原帖](https://x.com/koldo2k/status/2103129343253778767) · [在 apimodels.app 案例库看视频](https://apimodels.app/zh/claude-opus-5-5-video-prompts/storyboard-to-video)

- **模型依据:** 原帖:「this animation made with Opus 5.5」;作者主动公开提示词。
- **工具链与做法:** 通过 Magnific MCP 调用 Seedream 5 Pro(风景)、GPT 2.5(透明抠图)、深度图、Kling 2.5(动画)、Lyria 3(音乐);Opus 负责分层视差、指数缩放数学、绿幕抠像、逐帧核对切点,交付交互 artifact 和 MP4。
- **成片规格:** 20 秒,1920x1080,约 7.3 万浏览。
- **踩坑:** 注意提示词里的成本闸门:先列出要生成什么、花多少额度,等确认;每个贵的步骤前先给截图。

**提示词(作者原文)**:见上方代码块。

想做类似的:[六条做法路线与模板](../../METHODS.zh-CN.md) 覆盖了本合集用到的所有路线,[我们自己的一次实跑](../../our-run/README.md) 有完整提示词、渲染脚本和花费。

---

← ["The Beauty of Group Theory" promo film (Bilibili)](../explainer/30-the-beauty-of-group-theory-promo-film-bilibili.md) · [All 60 cases](../../README.md) · [Short film made through the Krea MCP in 10 minutes for $8](32-short-film-made-through-the-krea-mcp-in-10-minutes-for-8.md) →

Collected and checked against the original post by [apimodels.app](https://apimodels.app), the API platform that maintains this repository. The video belongs to its creator; our write-up is [CC BY 4.0](../../LICENSE). Call Claude Opus 5.5 through apimodels.app: [model page](https://apimodels.app/models/claude-opus-5-5).
