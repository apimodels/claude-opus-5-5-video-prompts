# Claude Opus 5.5 做视频:60 个真实案例与提示词

[English](README.md) · 简体中文

60 个用 Claude Opus 5.5 做出来的真实视频案例。每条都署名原作者、链回原帖,写明用了哪些工具;作者公开过提示词的,逐字收录原文。Opus 5.5 自己不画像素:这里的每一条成片,要么是它写的代码渲染出来的,要么是它指挥视频模型生成素材后剪出来的。

先说关系:这个仓库由 [apimodels.app](https://apimodels.app) 整理维护,我在这个平台工作。apimodels.app 是一个多模型 API 网关:一个 API key、OpenAI / Anthropic 兼容接口,可以调用 Claude Opus 5.5 以及约 150 个图像、视频、音频和语言模型。带视频播放的在线版本在 [apimodels.app 的 Opus 5.5 做视频案例库](https://apimodels.app/claude-opus-5-5-video-prompts)。

## 一句话说清

Claude Opus 5.5(模型 ID claude-opus-5-5,Anthropic 2026 年 9 月 22 日发布)是语言模型。官方文档写明:当前模型只接受文字和图片输入、只输出文字,Claude 不能生成或编辑图片,也没有视频输入(GIF 动图只读第一帧)。所以社区里「Opus 5.5 做的视频」只有三种来路:一是它写动画代码(带 seek(t) 的单文件 HTML、Remotion / HyperFrames 合成、Manim 场景、Three.js 与 WebGL 着色器、Blender Python),再由无头浏览器或渲染器逐帧出图、FFmpeg 编码成 MP4;二是它当导演,通过 API 调用视频、图像、音乐模型,分镜和每一条生成提示词都由它写,最后再剪;三是它驱动 FFmpeg、After Effects 或 DaVinci Resolve 剪已有素材。所谓「一句话出片」,很多背后是几千字的导演 brief、预装好的 skills 和 API key,外加几个小时的自主运行 —— 所以下面每条都写清作者实际给了什么、自述花了多少。本页 60 个案例发布于 2026 年 9 月 22 日至 10 月 3 日,逐条对照原帖核过。在 apimodels.app 上调用 Opus 5.5 为每百万 token 输入 $2.40、输出 $12,官方价为 $4 / $20。

## 目录

- [动效设计与 UI 动画](#动效设计与-ui-动画) (8)
- [产品宣传片](#产品宣传片) (10)
- [讲解与教育](#讲解与教育) (12)
- [分镜调视频模型](#分镜调视频模型) (4)
- [MV](#mv) (7)
- [叙事与历史短片](#叙事与历史短片) (7)
- [3D、Blender 与着色器](#3dblender-与着色器) (6)
- [剪辑与后期](#剪辑与后期) (6)
- [写法要点](#写法要点)
- [六条做法路线与模板](METHODS.zh-CN.md)
- [我们自己的一次实跑(提示词、渲染脚本、成本)](our-run/README.md)
- [常见问题](#常见问题)
- [版权与许可](#版权与许可)

共 60 个案例,发布于 2026 年 9 月 22 日至 10 月 3 日,逐条对照原帖核过。每个案例在 [cases/](cases) 下有单独一页(作者说明、工具链、提示词),每页都标明正文是作者原文、节选、我们的概括,还是作者没有公开提示词。花费和耗时都是作者自述。

## 写法要点

- **先要计划,再写代码.** 本页最好的几份 brief 结尾都一样:先给我看分镜表、拍点网格或状态列表,等我确认。改分镜只要一条消息;改一部渲染好的片子要重渲,往往还要重写。
- **让每一帧都是时间的函数.** 要求它暴露 window.seek(t),所有样式都由 t 计算:不用定时器、不用 requestAnimationFrame 循环、不用 CSS transition、不用未设种子的随机数。这样无头浏览器可以随取随渲任意一帧,FFmpeg 能编出稳定的 60fps。实时动画靠录屏,机器一忙就掉帧。
- **要用框架就点名,否则它不会用.** 放任不管时,Opus 5.5 会从零手写一个零依赖的 HTML,哪怕本机装了 Remotion 或 HyperFrames。想要 React 时间轴、Manim 的公式动画或 Blender 的渲染器,第一行就写明,并装好对应的 skill。
- **点名禁用默认风格.** Anthropic 官方给 Opus 5.5 的提示词指南自己也承认:只说「别像 AI 做的」,它只会从一种默认风格换到另一种。出彩的 brief 会逐条列出禁用项(居中大字配渐变底、全部淡入、粒子爆炸、霓虹光晕、弹跳缓动、镜头光晕),再配一个强调色、一种字体。
- **先渲静帧,让它自己挑错.** 它能看图、不能看视频,所以自查要靠帧:每拍一张,或抽 20 帧,看过再全量渲染。本页好几位作者把这个循环跑了几十轮,或者拆成「评审 agent + 修复 agent」,并说成片好坏的差距主要就在这一步。
- **把音乐给它,让它去算拍子.** 给一首授权覆盖你用途的曲子,让它测速度和节拍(numpy 就够)、切点落在强拍、音效按测出的峰值而不是文件起点对位、响度标准化到 -14 LUFS。没有曲子时,它也能在同一条时间轴上用 Web Audio 或 Python 合成音乐和音效。
- **每一次付费调用前加成本闸门.** 让它调视频或图像模型时,先列出每一次生成和预计花费、等你点头,每个贵的步骤前先给你看静帧。不写这一句,一个连跑几小时的 agent 会把 key 允许的额度花到底。
- **effort 和时间按活来给.** 作者们的经验是:传播开的那些片子用的是 xhigh 或 max,小修小改用 medium;Anthropic 的建议是只在测得到质量提升的地方调高。时间也要留够:本页一条 5 分钟的历史片搭建 90 分钟、渲染 4 小时,一条 MV 跑了一整夜。

**导演 brief 公式:** 导演 brief = 先向你要哪些素材 + 方向(一种风格、一个强调色、一种字体、明确的禁用清单)+ 结构(每个镜头都落在拍点网格上)+ 构建约定(分辨率、帧率、seek(t)、用什么渲染、怎么抽帧检查)+ 已知的坑 + 开工指令(先交计划、再写代码)

## 动效设计与 UI 动画

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/motion-graphics](https://apimodels.app/claude-opus-5-5-video-prompts/motion-graphics)

| # | 案例 | 作者 | 提示词 |
| --- | --- | --- | --- |
| 1 | [15 秒动效设计师简历 Showreel(一句话原型)](cases/motion-graphics/01-the-15-second-motion-designer-showreel.md#中文) | [@stephanlivera](https://x.com/stephanlivera) | 全文 |
| 2 | [加长版 Showreel 提示词(列出技术清单)](cases/motion-graphics/02-showreel-brief-that-lists-the-techniques.md#中文) | [@lukasersil](https://x.com/lukasersil) | 节选 |
| 3 | [一个形状踩着节拍变遍 12 种 UI 状态(可复用 XML 模板)](cases/motion-graphics/03-one-shape-morphs-through-a-dozen-ui-states-on-the-beat.md#中文) | [@twoclipping](https://x.com/twoclipping) | 全文 |
| 4 | [一镜到底发布会风格品牌片(液态玻璃、光圈转场,5,200 字模板)](cases/motion-graphics/04-one-take-keynote-style-launch-film-with-liquid-glass-and-an.md#中文) | [@twoclipping](https://x.com/twoclipping) | 全文 |
| 5 | [极简高端产品片:竖屏素材扫描墙 + 卡点](cases/motion-graphics/05-minimal-product-launch-scanning-wall-of-vertical-clips-cut.md#中文) | [@twoclipping](https://x.com/twoclipping) | 全文 |
| 6 | [手游「高光时刻」结算 / 抽卡动效(中文长模板)](cases/motion-graphics/06-mobile-game-reward-and-gacha-reveal-three-js-toon-shading.md#中文) | [@op7418](https://x.com/op7418) | 全文 |
| 7 | [纯代码像素风巫师施法循环动画](cases/motion-graphics/07-pixel-art-wizard-casting-a-spell-pure-canvas-code.md#中文) | [@majidmanzarpour](https://x.com/majidmanzarpour) | 全文 |
| 8 | [同模板「更彩色」复现,揭示 Opus 默认渲染管线](cases/motion-graphics/08-colourful-remix-of-the-ui-morph-template-that-exposed-the.md#中文) | [@__morse](https://x.com/__morse) | 做法概括 |

## 产品宣传片

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/product-launch](https://apimodels.app/claude-opus-5-5-video-prompts/product-launch)

| # | 案例 | 作者 | 提示词 |
| --- | --- | --- | --- |
| 9 | [推理创业公司发布片(一句话)](cases/product-launch/09-punchy-launch-video-for-an-inference-startup-from-one-line.md#中文) | [@deedydas](https://x.com/deedydas) | 全文 |
| 10 | [HyperFrames 三步教程(葡语):装 skill + 爆款提示词 + 指向项目文件夹](cases/product-launch/10-three-step-hyperframes-recipe-install-the-skill-reuse-the.md#中文) | [@thayto_dev](https://x.com/thayto_dev) | 全文 |
| 11 | [「给你的生意做 30 秒讲解片」通用模板](cases/product-launch/11-reusable-30-second-business-explainer-template.md#中文) | [@alex_prompter](https://x.com/alex_prompter) | 全文 |
| 12 | [阿拉伯语竖屏 App 推广片(Remotion + TTS 配音)](cases/product-launch/12-arabic-vertical-promo-for-an-ai-coding-tutor-app-remotion.md#中文) | [@YarHmm](https://x.com/YarHmm) | 做法概括 |
| 13 | [Kotlin 官方推广片(HyperFrames skill + 指向官网)](cases/product-launch/13-kotlin-promo-generated-from-the-languages-website-with.md#中文) | [JetBrains](https://x.com/jetbrains) | 做法概括 |
| 14 | [3D 打印外壳产品动画(同一会话里先设计外壳再做宣传片)](cases/product-launch/14-promo-animation-for-a-3d-printed-din-rail-enclosure-it.md#中文) | [@VectorCrossProd](https://x.com/VectorCrossProd) | 做法概括 |
| 15 | [Notion「列权限」功能预告片(Remotion,2 天 33 版)](cases/product-launch/15-notion-column-permissions-trailer-in-remotion-2-days-33.md#中文) | [@wustep](https://x.com/wustep) | 未公开 |
| 16 | [Shotbase 剪辑 App 发布片(HyperFrames,20 分钟内)](cases/product-launch/16-shotbase-launch-video-with-hyperframes-under-20-minutes.md#中文) | [@Miguel07Code](https://x.com/Miguel07Code) | 未公开 |
| 17 | [Cosmos 情绪板 App 宣传片(HyperFrames,2 条提示词)](cases/product-launch/17-cosmos-moodboard-app-promo-two-prompts-in-hyperframes.md#中文) | [@kaolti](https://x.com/kaolti) | 未公开 |
| 18 | [UX 设计决策讲解动画(面试作品集)](cases/product-launch/18-ux-case-study-animation-explaining-design-decisions.md#中文) | [@moguzbulbul](https://x.com/moguzbulbul) | 未公开 |

## 讲解与教育

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/explainer](https://apimodels.app/claude-opus-5-5-video-prompts/explainer)

| # | 案例 | 作者 | 提示词 |
| --- | --- | --- | --- |
| 19 | [Manim 导数概念教学片(edge-tts 配音)](cases/explainer/19-manim-lesson-on-derivatives-with-edge-tts-narration.md#中文) | [@LinearUncle](https://x.com/LinearUncle) | 全文 |
| 20 | [《什么是 Transformer》12 分钟中文讲解片(JS)](cases/explainer/20-12-minute-chinese-explainer-what-is-a-transformer-rendered.md#中文) | [@dotey](https://x.com/dotey) | 全文 |
| 21 | [《中华文明史》史诗编年片(逐帧渲染 + ffmpeg,五声调式配乐)](cases/explainer/21-epic-chronicle-of-chinese-civilization-frame-rendered-with.md#中文) | [@dotey](https://x.com/dotey) | 全文 |
| 22 | [用九种视频风格解释「递归」](cases/explainer/22-explaining-recursion-in-nine-radically-different-video.md#中文) | [@emollick](https://x.com/emollick) | 全文 |
| 23 | [从一张照片生成鸡尾酒配方动画](cases/explainer/23-negroni-recipe-motion-graphic-from-a-single-photo.md#中文) | [@Ror_Fly](https://x.com/Ror_Fly) | 全文 |
| 24 | [可拆解的猛禽 3 火箭发动机(交互网页 → 录屏)](cases/explainer/24-interactive-raptor-3-rocket-engine-you-can-take-apart-screen.md#中文) | [@konstantinsaifo](https://x.com/konstantinsaifo) | 做法概括 |
| 25 | [双生子佯谬日文讲解(剪纸风,Canvas 1,395 帧)](cases/explainer/25-twin-paradox-explainer-in-japanese-paper-cutout-style-1-395.md#中文) | [@masahirochaen](https://x.com/masahirochaen) | 未公开 |
| 26 | [3Blue1Brown 风格 VAE 讲解(Manim + 真实训练 MNIST + 克隆配音)](cases/explainer/26-3blue1brown-style-explainer-on-variational-autoencoders.md#中文) | [@ng169onX](https://x.com/ng169onX) | 未公开 |
| 27 | [3 分钟 AI 发展史(Remotion,约 7,400 行代码)](cases/explainer/27-three-minute-history-of-ai-100-code-in-remotion.md#中文) | [@kimmonismus](https://x.com/kimmonismus) | 未公开 |
| 28 | [引力透镜黑洞实验室(三轮多 agent 评审-修复,过夜跑)](cases/explainer/28-black-hole-lensing-lab-polished-by-reviewer-and-fixer-agents.md#中文) | [@Voxyz_ai](https://x.com/Voxyz_ai) | 未公开 |
| 29 | [地球 46 亿年进化史(B 站)](cases/explainer/29-4-6-billion-years-of-earths-evolution-bilibili.md#中文) | 第十一次元 | 未公开 |
| 30 | [群论之美宣传片(B 站)](cases/explainer/30-the-beauty-of-group-theory-promo-film-bilibili.md#中文) | sadssxa | 未公开 |

## 分镜调视频模型

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/storyboard-to-video](https://apimodels.app/claude-opus-5-5-video-prompts/storyboard-to-video)

| # | 案例 | 作者 | 提示词 |
| --- | --- | --- | --- |
| 31 | [复古拼贴「无限缩放」(调多个生成模型出素材 + 代码合成)](cases/storyboard-to-video/31-infinite-zoom-through-vintage-collage-worlds-generated.md#中文) | [@koldo2k](https://x.com/koldo2k) | 全文 |
| 32 | [通过 Krea MCP 一次出片(10 分钟、$8)](cases/storyboard-to-video/32-short-film-made-through-the-krea-mcp-in-10-minutes-for-8.md#中文) | [@angrypenguinPNG](https://x.com/angrypenguinPNG) | 未公开 |
| 33 | [日文竖屏评测短视频:Opus 图解动画 + TTS 配音 + Seedance 2.5 开场](cases/storyboard-to-video/33-japanese-vertical-review-short-opus-diagrams-tts-voice.md#中文) | [@masahirochaen](https://x.com/masahirochaen) | 未公开 |
| 34 | [2 小时做完 8 关攻城游戏 + 60 秒宣传片(Seedance 2.5 / MiniMax H3 + CapCut)](cases/storyboard-to-video/34-eight-stage-siege-game-in-2-hours-then-a-60-second-trailer.md#中文) | [@KanaWorks_AI](https://x.com/KanaWorks_AI) | 未公开 |

## MV

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/music-video](https://apimodels.app/claude-opus-5-5-video-prompts/music-video)

| # | 案例 | 作者 | 提示词 |
| --- | --- | --- | --- |
| 35 | [「Claude Pop」过夜 12 小时 MV(语音口述长 brief,视频模型打底 + JS 重绘)](cases/music-video/35-claude-pop-music-video-a-dictated-brief-and-a-12-hour.md#中文) | [@donaldjewkes](https://x.com/donaldjewkes) | 节选 |
| 36 | [90 年代 Demoscene(C/C++ + OpenGL,配 S3M 音轨,单提示词)](cases/music-video/36-1990s-demoscene-demo-in-c-c-and-opengl-synced-to-an-s3m.md#中文) | [@gandamu_ml](https://x.com/gandamu_ml) | 节选 |
| 37 | [「I'm Upping My P(Doom)」MV(p5.js + p5.brush,并行子 agent)](cases/music-video/37-im-upping-my-p-doom-music-video-painted-with-p5-brush-and.md#中文) | [@other__reality](https://x.com/other__reality) | 做法概括 |
| 38 | [同一 brief + Midjourney + 情绪板重跑(本页浏览量最高)](cases/music-video/38-the-same-brief-re-run-with-midjourney-and-a-moodboard.md#中文) | [@anabology](https://x.com/anabology) | 做法概括 |
| 39 | [比特币货币史 MV「Stroke of a Pen」(agent 群分镜,约 75 个卡点镜头)](cases/music-video/39-stroke-of-a-pen-bitcoin-music-video-storyboarded-by-an-agent.md#中文) | [@bradmillscan](https://x.com/bradmillscan) | 做法概括 |
| 40 | [中秋剪纸拼贴短片(p5.brush 逐帧 + Nano Banana Pro 出底稿)](cases/music-video/40-mid-autumn-paper-collage-short-p5-brush-frames-over.md#中文) | [@ring_hyacinth](https://x.com/ring_hyacinth) | 未公开 |
| 41 | [Suno 编曲演唱 + Opus 5.5 作词并做 MV(B 站)](cases/music-video/41-suno-sung-song-with-lyrics-and-mv-by-opus-5-5-bilibili.md#中文) | syline | 未公开 |

## 叙事与历史短片

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/short-film](https://apimodels.app/claude-opus-5-5-video-prompts/short-film)

| # | 案例 | 作者 | 提示词 |
| --- | --- | --- | --- |
| 42 | [美国 250 年历史沙画动画(一句话,含配乐音效)](cases/short-film/42-two-minute-sand-animation-of-250-years-of-u-s-history.md#中文) | [@Michaelzsguo](https://x.com/Michaelzsguo) | 全文 |
| 43 | [「鹈鹕骑自行车」剧场版(自写 GPU 光线步进渲染器)](cases/short-film/43-pelican-riding-a-bicycle-theatrical-cut-with-a-custom-gpu.md#中文) | [@AxtonLiu](https://x.com/AxtonLiu) | 全文 |
| 44 | [滕王阁·中秋夜(自由选题,WebGL2 逐像素 + Karplus-Strong 古筝)](cases/short-film/44-tengwang-pavilion-on-mid-autumn-night-one-webgl2-shader.md#中文) | [@DemitiyaGeekzen](https://x.com/DemitiyaGeekzen) | 全文 |
| 45 | [用 Web3D 复刻《红猪》日落空战(一句话)](cases/short-film/45-porco-rosso-style-sunset-dogfight-recreated-in-three-js-from.md#中文) | [@NFT_Chen](https://x.com/NFT_Chen) | 全文 |
| 46 | [奥斯特里茨战役 5 分钟历史片(WebGL2,真实地形与日出方位)](cases/short-film/46-austerlitz-2-december-1805-a-five-minute-film-made-entirely.md#中文) | [@WinterArc2125](https://x.com/WinterArc2125) | 未公开 |
| 47 | [《崂山道士》3D 讲解片(不写分镜,声音克隆旁白)](cases/short-film/47-low-poly-3d-retelling-of-the-taoist-of-laoshan.md#中文) | [@wshuyi](https://x.com/wshuyi) | 未公开 |
| 48 | [「瘫坐长椅看原子弹爆炸」动画(B 站,跑 16 小时、每个画面一个着色器)](cases/short-film/48-slumped-on-a-bench-watching-the-blast-meme-turned-into-a.md#中文) | 一起Vibe | 未公开 |

## 3D、Blender 与着色器

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/3d-blender](https://apimodels.app/claude-opus-5-5-video-prompts/3d-blender)

| # | 案例 | 作者 | 提示词 |
| --- | --- | --- | --- |
| 49 | [1906 年地震前的旧金山市场街(Blender Python,先建史料表再建模)](cases/3d-blender/49-market-street-san-francisco-the-afternoon-before-the-1906.md#中文) | [@alexalbert__](https://x.com/alexalbert__) | 节选 |
| 50 | [Blender 程序化 10 秒镜头:Opus 5.5 vs GPT-6 Astra 对比](cases/3d-blender/50-same-procedural-blender-shot-opus-5-5-vs-gpt-6-astra.md#中文) | [@Stefan_3D_AI](https://x.com/Stefan_3D_AI) | 做法概括 |
| 51 | [Blender 里约 2 小时从零做章鱼(建模、贴图、绑定、动画,YouTube)](cases/3d-blender/51-octopus-modelled-textured-rigged-and-animated-in-blender-in.md#中文) | Bad Decisions Studio | 做法概括 |
| 52 | [只用 JavaScript 的 GPU 流体火焰短片(自评约 40 轮)](cases/3d-blender/52-gpu-fluid-simulated-campfire-film-in-javascript-self.md#中文) | [@NathanWilbanks_](https://x.com/NathanWilbanks_) | 做法概括 |
| 53 | [「Opus5」随手涂鸦变 3D 拳击动画,并封装成 Skill](cases/3d-blender/53-hand-scribbled-opus5-turned-into-a-3d-boxing-animation.md#中文) | [@MinLiBuilds](https://x.com/MinLiBuilds) | 未公开 |
| 54 | [风车建模-绑定-贴图-动画全流程(Blender + Higgsfield MCP,15 分钟)](cases/3d-blender/54-windmill-modelled-rigged-textured-and-animated-in-blender.md#中文) | [Higgsfield](https://x.com/higgsfield_ai) | 未公开 |

## 剪辑与后期

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/video-editing](https://apimodels.app/claude-opus-5-5-video-prompts/video-editing)

| # | 案例 | 作者 | 提示词 |
| --- | --- | --- | --- |
| 55 | [口播原片剪成带字幕、图形、音乐的快节奏短视频(OpenEdit)](cases/video-editing/55-raw-talking-head-clip-cut-into-a-punchy-captioned-edit.md#中文) | [@sab8a](https://x.com/sab8a) | 全文 |
| 56 | [让 Opus 5.5 操作 After Effects 加工 AI 视频(两次测试)](cases/video-editing/56-opus-5-5-driving-after-effects-to-post-process-generated.md#中文) | [@aicreataro](https://x.com/aicreataro) | 做法概括 |
| 57 | [让 Opus 5.5 通过 MCP 驱动 DaVinci Resolve 剪完整条 YouTube 视频](cases/video-editing/57-a-full-youtube-video-edited-by-opus-5-5-through-a-davinci.md#中文) | [@NickSpisak_](https://x.com/NickSpisak_) | 未公开 |
| 58 | [Grok 生成的原始舞蹈片段 → Opus 5.5 剪辑包装](cases/video-editing/58-grok-generated-dance-clip-recut-and-packaged-by-opus-5-5.md#中文) | [@Gorden_Sun](https://x.com/Gorden_Sun) | 未公开 |
| 59 | [游戏试玩演示片:Opus 自己玩游戏、挑高光、剪辑成片](cases/video-editing/59-opus-played-its-own-game-and-cut-the-best-moments-into-a.md#中文) | [@rehan_shei](https://x.com/rehan_shei) | 未公开 |
| 60 | [11 万刚体 WebGPU 物理演示的宣传短片(一条提示词剪出)](cases/video-editing/60-demo-reel-for-a-110k-rigid-body-webgpu-physics-solver.md#中文) | [@nybobs](https://x.com/nybobs) | 未公开 |

## 常见问题

### Claude Opus 5.5 能直接生成视频吗?

不能直接出像素。Anthropic 官方文档写明当前模型是文字和图片输入、文字输出,Claude 不能生成、制作或编辑图片。本页每一条视频,要么是 Opus 5.5 写的代码(HTML 与 Canvas、Remotion、HyperFrames、Manim、Three.js、Blender Python 等)经无头浏览器或渲染器加 FFmpeg 渲出来的,要么是它通过 API 指挥视频模型生成素材再剪成的。在没有命令行的聊天窗口里,你拿到的是一个能打开、能录屏的 HTML 动画;想直接出 MP4,需要能执行命令的 agent 环境。

### Opus 5.5 能看我给它的视频吗?

不能。它没有视频输入,GIF 动图也只读第一帧。本页所有剪辑类案例的做法都是:让它用 FFmpeg 抽帧(并转写音频),再看这些静帧。它检查自己渲染的成片也是这么做的。

### 「一句话出片」是真的只有一句话吗?

有的是,比如那条 15 秒 Showreel 的提示词就一句话。但很多传播很广的案例,背后是几千字的 brief、提前装好的 skills、配音 / 音乐 / 视频模型的 API key,外加一到十二个小时的自主运行,有的还跑了几十轮评审。卡片上的花费都是作者自述:从 26 秒发布片约 $2,到一支产品预告片 33 个版本约 $400 额度不等。每张卡片都标明正文是作者原文、我们对作者所述做法的概括,还是作者没有公开提示词。

### 想复现这些案例,要装什么?

出 MP4 的基本盘:一个能执行命令的 agent(Claude Code 或同类工具)、Node.js、Playwright 或其他无头 Chromium、FFmpeg。UI 动效那几份模板还要 Python + numpy 分析音乐;Manim 案例要装 Manim 和 LaTeX;Blender 案例要装 Blender;MV 和「当导演」类案例通常还需要配音、音乐或视频模型的 API key。

### 新手先从哪条路线开始?

产品短片、UI 动效:先走单文件 HTML 或 Remotion 这类框架,本页都有完整提示词。讲课:用 Manim。需要真人、自然运动或物理效果的:让 Opus 当导演去调视频模型,brief 里一定写成本闸门。手里已经有素材的:走剪辑路线,节奏还是得你自己拿主意。

### 在 apimodels.app 上用 Opus 5.5 做这些要花多少?

每百万 token 输入 $2.40、输出 $12(Anthropic 官方 $4 / $20),按 token 计费,失败不收费;支持 /v1/messages 和 OpenAI 兼容的 /v1/chat/completions,Claude Code 等 Anthropic 兼容的 agent 填好 base URL 和 key 就能接。做视频很吃输出 token:一位作者的 Blender 测试写了约 20 万输出 token,按我们的价格输出部分约 $2.40。我们自己经 apimodels.app 跑过一次单文件 HTML 路线:一次调用、31,786 个输出 token、实扣 $0.368,得到一段 12 秒 1280x720 的短片。如果让 Opus 去调视频模型,那部分按各模型单独计费;Seedance 2.5、MiniMax H3、可灵 Kling V3、万相 Wan 3.0 用同一个 key 就能调。

## 版权与许可

- **视频归原作者所有。** 本仓库不托管、不转存任何视频,每个案例只链回原帖。
- **提示词带署名和原帖链接引用。** 明确欢迎复用的作者(@twoclipping、@op7418、@alex_prompter、@majidmanzarpour、@koldo2k)的提示词全文收录;其他作者公开的提示词,短的全文引用、长的只节选;没公开的不补写。商用前请先看原帖说明。
- 部分案例用了第三方音乐、致敬已有影视作品或含真人形象,对应条目里写明了素材出处。
- **我们自己写的部分**(写法要点、六条路线与模板、our-run 目录里的提示词和代码、案例的整理与说明)按 [CC BY 4.0](LICENSE) 授权,转载请署名 apimodels.app 并附链接。
- 如果你是案例作者,希望撤下或更正署名,请提 issue,我们会尽快处理。

在 apimodels.app 上调用 Claude Opus 5.5:[模型页](https://apimodels.app/zh/models/claude-opus-5-5) · [API 文档](https://apimodels.app/zh/docs/llm)
