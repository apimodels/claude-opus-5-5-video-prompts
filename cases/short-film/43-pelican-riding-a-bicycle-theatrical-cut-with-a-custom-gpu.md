# Pelican riding a bicycle, theatrical cut with a custom GPU ray-marcher

Claude Opus 5.5 video case 43 of 60 · Narrative & History Short · [简体中文](#中文)

By [@AxtonLiu](https://x.com/AxtonLiu) · [original post](https://x.com/AxtonLiu/status/2103119648271290566) · [see the clip in the apimodels.app gallery](https://apimodels.app/claude-opus-5-5-video-prompts/short-film)

- **Model:** Post (Chinese): Opus 5.5, "Pelican riding a bicycle" theatrical cut, generated from one prompt.
- **Toolchain:** No 3D models, textures or audio assets: Opus wrote its own GPU ray-marcher, and the pelican, bicycle, pier, sea, sky and score are all computed in code; 1,140 frames at 40 samples per frame.
- **About the prompt:** The original uses full-width Chinese quotation marks around the title; they are shown as straight quotes here. Wording unchanged.
- **Clip:** 38 s, 1920x1080.
- **Pitfalls:** Give it a generous time budget ("take a whole day if you need").

**Prompt (the author's own words)**

```text
每次一个新的模型出来呢，大家都让它去画 "鹈鹕骑自行车" 来判断这个模型的空间能力，基本上都是用 HTML、SVG 来画动画。当我实在看得都有审美疲劳了，我希望你能画一个最复杂、最精细、最精美的 "鹈鹕骑自行车"的动画视频，你可以用任何的技术，不用着急，画一天都可以。
```

To make one like it: the [six workflows with templates](../../METHODS.md) cover every route used in this collection, and [our own run](../../our-run/README.md) has a complete prompt, render script and cost.

## 中文

**「鹈鹕骑自行车」剧场版(自写 GPU 光线步进渲染器)**

作者:[@AxtonLiu](https://x.com/AxtonLiu) · [原帖](https://x.com/AxtonLiu/status/2103119648271290566) · [在 apimodels.app 案例库看视频](https://apimodels.app/zh/claude-opus-5-5-video-prompts/short-film)

- **模型依据:** 原帖:「Opus 5.5 《鹈鹕骑自行车》剧场版:提示词一次生成」。
- **工具链与做法:** 没用任何 3D 模型、贴图、音频素材;Opus 自己写了 GPU 光线步进渲染器,鹈鹕、自行车、栈桥、海面、天空、配乐都由代码计算;1,140 帧,每帧 40 次采样。
- **提示词说明:** 原提示词中的引号为中文全角引号,此处显示为半角,内容未改。
- **成片规格:** 38 秒,1920x1080。
- **踩坑:** 时间预算要放宽(原文:「不用着急,画一天都可以」)。

**提示词(作者原文)**:见上方代码块。

想做类似的:[六条做法路线与模板](../../METHODS.zh-CN.md) 覆盖了本合集用到的所有路线,[我们自己的一次实跑](../../our-run/README.md) 有完整提示词、渲染脚本和花费。

---

← [Two-minute sand animation of 250 years of U.S. history](42-two-minute-sand-animation-of-250-years-of-u-s-history.md) · [All 60 cases](../../README.md) · [Tengwang Pavilion on Mid-Autumn night, one WebGL2 shader (topic chosen by the model)](44-tengwang-pavilion-on-mid-autumn-night-one-webgl2-shader.md) →

Collected and checked against the original post by [apimodels.app](https://apimodels.app), the API platform that maintains this repository. The video belongs to its creator; our write-up is [CC BY 4.0](../../LICENSE). Call Claude Opus 5.5 through apimodels.app: [model page](https://apimodels.app/models/claude-opus-5-5).
