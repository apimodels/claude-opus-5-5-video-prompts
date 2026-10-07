# GPU fluid-simulated campfire film in JavaScript, self-critiqued about 40 times

Claude Opus 5.5 video case 52 of 60 · 3D, Blender & Shader · [简体中文](#中文)

By [@NathanWilbanks_](https://x.com/NathanWilbanks_) · [original post](https://x.com/NathanWilbanks_/status/2103881538592981110) · [see the clip in the apimodels.app gallery](https://apimodels.app/claude-opus-5-5-video-prompts/3d-blender)

- **Model:** Post: "I asked opus 5.5 in @agnt_gg for the most realistic fire it could build using ONLY javascript".
- **Toolchain:** A 3D fluid simulation on the GPU with flame colour from blackbody radiation; the review loop caught the fire dying out, ring artefacts on the ground and embers that looked like cheese slices; sound driven by per-frame flame brightness; one HTML file, one conversation.
- **Clip:** 38 s, 1920x1080 (low reach, about 1K views).

**Method summary (our words, from what the author described)**

```text
Asked Opus 5.5 for the most realistic fire it could build using only JavaScript, then had a vision model critique each rendered frame like a VFX supervisor, fixed the issues and repeated, about 40 rounds, before rendering a scripted shot offline frame by frame.
```

To make one like it: the [six workflows with templates](../../METHODS.md) cover every route used in this collection, and [our own run](../../our-run/README.md) has a complete prompt, render script and cost.

## 中文

**只用 JavaScript 的 GPU 流体火焰短片(自评约 40 轮)**

作者:[@NathanWilbanks_](https://x.com/NathanWilbanks_) · [原帖](https://x.com/NathanWilbanks_/status/2103881538592981110) · [在 apimodels.app 案例库看视频](https://apimodels.app/zh/claude-opus-5-5-video-prompts/3d-blender)

- **模型依据:** 原帖:「I asked opus 5.5 in @agnt_gg for the most realistic fire it could build using ONLY javascript」。
- **工具链与做法:** GPU 上的 3D 流体模拟,火焰颜色来自黑体辐射;评审循环抓出了火焰熄灭、地面环形伪影、炭块像奶酪片等问题;声音由每帧火焰亮度驱动;单 HTML、一次对话。
- **成片规格:** 38 秒,1920x1080(浏览量很低,约 1K)。

**做法概括(我们根据作者描述整理)**:见上方代码块。

想做类似的:[六条做法路线与模板](../../METHODS.zh-CN.md) 覆盖了本合集用到的所有路线,[我们自己的一次实跑](../../our-run/README.md) 有完整提示词、渲染脚本和花费。

---

← [Octopus modelled, textured, rigged and animated in Blender in about 2 hours (YouTube)](51-octopus-modelled-textured-rigged-and-animated-in-blender-in.md) · [All 60 cases](../../README.md) · [Hand-scribbled "Opus5" turned into a 3D boxing animation, packaged as a skill](53-hand-scribbled-opus5-turned-into-a-3d-boxing-animation.md) →

Collected and checked against the original post by [apimodels.app](https://apimodels.app), the API platform that maintains this repository. The video belongs to its creator; our write-up is [CC BY 4.0](../../LICENSE). Call Claude Opus 5.5 through apimodels.app: [model page](https://apimodels.app/models/claude-opus-5-5).
