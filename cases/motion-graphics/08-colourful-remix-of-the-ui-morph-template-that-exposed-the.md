# Colourful remix of the UI-morph template that exposed the default render pipeline

Claude Opus 5.5 video case 8 of 60 · Motion Design & UI Animation · [简体中文](#中文)

By [@__morse](https://x.com/__morse) · [original post](https://x.com/__morse/status/2103485566570369333) · [see the clip in the apimodels.app gallery](https://apimodels.app/claude-opus-5-5-video-prompts/motion-graphics)

- **Model:** Post: "opus 5.5 is really amazing one shot".
- **Toolchain:** Per the author: Opus put all the code in one index.html, rendered it frame by frame in a headless Playwright window via a seek function plus eval, then assembled the MP4 with FFmpeg. It prefers zero dependencies and writes everything from scratch, and did not reach for Remotion or HyperFrames even though they were available.
- **Clip:** About 15.4 s, 1440x1440.
- **Pitfalls:** This post is the clearest evidence that the single-HTML route is the default. If you want a framework, name it in the prompt.

**Method summary (our words, from what the author described)**

```text
Ran @twoclipping's "one shape, a dozen UI states" template unchanged, with one extra instruction: make the video more colorful.
```

To make one like it: the [six workflows with templates](../../METHODS.md) cover every route used in this collection, and [our own run](../../our-run/README.md) has a complete prompt, render script and cost.

## 中文

**同模板「更彩色」复现,揭示 Opus 默认渲染管线**

作者:[@__morse](https://x.com/__morse) · [原帖](https://x.com/__morse/status/2103485566570369333) · [在 apimodels.app 案例库看视频](https://apimodels.app/zh/claude-opus-5-5-video-prompts/motion-graphics)

- **模型依据:** 原帖:「opus 5.5 is really amazing one shot」。
- **工具链与做法:** 作者原话概括:Opus 把所有代码放进单个 index.html,用 seek 函数 + eval 在无头 Playwright 窗口里逐帧渲染,再用 FFmpeg 合成 MP4;它偏好零依赖、从头手写,即使装了 Remotion / HyperFrames 也不主动用。
- **成片规格:** 约 15.4 秒,1440x1440。
- **踩坑:** 这条是「Opus 默认走单 HTML 路线」最直接的证据 —— 想用框架,必须在提示词里点名。

**做法概括(我们根据作者描述整理)**:见上方代码块。

想做类似的:[六条做法路线与模板](../../METHODS.zh-CN.md) 覆盖了本合集用到的所有路线,[我们自己的一次实跑](../../our-run/README.md) 有完整提示词、渲染脚本和花费。

---

← [Pixel-art wizard casting a spell, pure Canvas code](07-pixel-art-wizard-casting-a-spell-pure-canvas-code.md) · [All 60 cases](../../README.md) · [Punchy launch video for an inference startup, from one line](../product-launch/09-punchy-launch-video-for-an-inference-startup-from-one-line.md) →

Collected and checked against the original post by [apimodels.app](https://apimodels.app), the API platform that maintains this repository. The video belongs to its creator; our write-up is [CC BY 4.0](../../LICENSE). Call Claude Opus 5.5 through apimodels.app: [model page](https://apimodels.app/models/claude-opus-5-5).
