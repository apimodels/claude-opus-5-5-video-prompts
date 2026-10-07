# "Claude Pop" music video: a dictated brief and a 12-hour autonomous run

Claude Opus 5.5 video case 35 of 60 · Music Video · [简体中文](#中文)

By [@donaldjewkes](https://x.com/donaldjewkes) · [original post](https://x.com/donaldjewkes/status/2102801274173587569) · [see the clip in the apimodels.app gallery](https://apimodels.app/claude-opus-5-5-video-prompts/music-video)

- **Model:** Post: "I made this with one prompt using Opus 5.5. I spoke to my computer for 5mins, claude worked for 12 hours".
- **About the prompt:** Excerpt. The full brief is about 9,500 characters, in the post's replies; a full transcript is at claudevideo.org/videos/pixel-flower-illustrates-ai-time-horizon-progress-data. The "……" marks are cuts.
- **Toolchain:** Five minutes of dictation became the brief; Opus read a local reference library and skills; generated character sheets and scenes through an image API; used Seedance 2.5 for base footage with people and physics, split by lyric with lip-sync attempts; ElevenLabs for sound effects; then redrew the whole film in JavaScript over the footage ("shoot first, draw over"), watching it repeatedly and critiquing screenshots.
- **Reported cost:** A Max plan, a generation budget capped at about $2,000, and an ElevenLabs key; the brief told the agent to spend all available usage.
- **Clip:** About 141.5 s, 1920x1080, about 3.91M views.
- **Pitfalls:** "One prompt" here means a long brief plus a full environment. The brief has been copied widely; one analysis found 87% vocabulary overlap with another popular template.

**Prompt excerpt (the full prompt is in the original post)**

```text
I've included an MP4 file and an original link to a video that is called "Claude Pop." It's a pop song that is about increasing rate of progress and the experience of the singularity approaching.
I want you to independently do an end-to-end complete pass on making an updated version of this video. …
```

To make one like it: the [six workflows with templates](../../METHODS.md) cover every route used in this collection, and [our own run](../../our-run/README.md) has a complete prompt, render script and cost.

## 中文

**「Claude Pop」过夜 12 小时 MV(语音口述长 brief,视频模型打底 + JS 重绘)**

作者:[@donaldjewkes](https://x.com/donaldjewkes) · [原帖](https://x.com/donaldjewkes/status/2102801274173587569) · [在 apimodels.app 案例库看视频](https://apimodels.app/zh/claude-opus-5-5-video-prompts/music-video)

- **模型依据:** 原帖:「I made this with one prompt using Opus 5.5. I spoke to my computer for 5mins, claude worked for 12 hours」。
- **提示词说明:** 原文节选。全文约 9,500 字符,在原帖回复中;完整转录见 claudevideo.org/videos/pixel-flower-illustrates-ai-time-horizon-progress-data。「……」处为删节。
- **工具链与做法:** 5 分钟语音口述成 brief;Opus 读本地参考库与 skills;通过图像 API 生成角色设定图和场景;用 Seedance 2.5 生成带人物与物理的底片,按歌词分段并尝试对口型;ElevenLabs 做音效;最后「先拍后描」,用 JS 动画在底片上整体重绘,多次通看、截图自评。
- **作者自述投入:** Max 套餐、生成额度上限约 $2,000、ElevenLabs key;brief 里明说可以把额度用完。
- **成片规格:** 约 141.5 秒,1920x1080,约 391 万浏览。
- **踩坑:** 这里的「one prompt」= 长 brief + 完整环境。这份 brief 被大量复制,有统计测得它与另一份热门模板词汇重合 87%。

**提示词节选(完整版见原帖)**:见上方代码块。

想做类似的:[六条做法路线与模板](../../METHODS.zh-CN.md) 覆盖了本合集用到的所有路线,[我们自己的一次实跑](../../our-run/README.md) 有完整提示词、渲染脚本和花费。

---

← [Eight-stage siege game in 2 hours, then a 60-second trailer from video models](../storyboard-to-video/34-eight-stage-siege-game-in-2-hours-then-a-60-second-trailer.md) · [All 60 cases](../../README.md) · [1990s demoscene demo in C/C++ and OpenGL, synced to an S3M track](36-1990s-demoscene-demo-in-c-c-and-opengl-synced-to-an-s3m.md) →

Collected and checked against the original post by [apimodels.app](https://apimodels.app), the API platform that maintains this repository. The video belongs to its creator; our write-up is [CC BY 4.0](../../LICENSE). Call Claude Opus 5.5 through apimodels.app: [model page](https://apimodels.app/models/claude-opus-5-5).
