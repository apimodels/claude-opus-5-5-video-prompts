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

共 60 个案例,发布于 2026 年 9 月 22 日至 10 月 3 日,逐条对照原帖核过。每条都标明正文是作者原文、节选、我们的概括,还是作者没有公开提示词。花费和耗时都是作者自述。

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

### 1. 15 秒动效设计师简历 Showreel(一句话原型)

作者:[@stephanlivera](https://x.com/stephanlivera) · [原帖](https://x.com/stephanlivera/status/2103315922098470926)

- **模型依据:** 原帖写明「Opus 5.5 on Max effort」。
- **工具链与做法:** 一句话、max effort。整理站描述成片为 Canvas 绘制、按 128 BPM 卡点;常见渲染路线是单 HTML + 无头浏览器逐帧 + FFmpeg。
- **成片规格:** 15 秒,1920x1080,约 225 万浏览(2026-10-06)。
- **同提示词复现:** @ajith_io(x.com/ajith_io/status/2103449416325890146);@kenn 用 xhigh(x.com/kenn/status/2103337314021937232);@himanshutwtxs 带音效版(x.com/himanshutwtxs/status/2103495232637882858);@thismacapital 法语产品广告版,自述「15 分钟、改 2-3 次、全用 HTML/JS/CSS」(x.com/thismacapital/status/2103773635714375808)。
- **踩坑:** 同一句话被大量复用,产出彼此「押韵」。一句话测的是环境,不是创意 —— 适合拿来验证本地管线跑通。

**提示词(作者原文)**

```text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
```

### 2. 加长版 Showreel 提示词(列出技术清单)

作者:[@lukasersil](https://x.com/lukasersil) · [原帖](https://x.com/lukasersil/status/2103742861971726495)

- **模型依据:** 原帖(捷克语):全部是 Opus 5.5(max effort)写的代码。
- **工具链与做法:** Three.js、WebGL 着色器、Canvas;作者称没用任何图像、视频或音乐生成器。
- **成片规格:** 两段各 15 秒,1920x1080。

**提示词节选(完整版见原帖)**

```text
Create a bold, dynamic 15-second motion graphics showreel that feels like the ultimate portfolio piece of an exceptionally talented motion designer. Showcase a wide range of advanced techniques: kinetic typography, smooth transitions, 2D and 3D animation, abstract geometry, fluid simulations, …
```

### 3. 一个形状踩着节拍变遍 12 种 UI 状态(可复用 XML 模板)

作者:[@twoclipping](https://x.com/twoclipping) · [原帖](https://x.com/twoclipping/status/2103273003555402193)

- **模型依据:** 原帖:「opus 5.5 is f*cking cracked at motion design this entire video is code, 0 after effects」;作者在原帖公开提示词并写「steal it」。
- **工具链与做法:** 单 HTML 1440x1440;所有样式在 seek(t) 里按时间计算;闭式弹簧;numpy 分析歌曲节拍;Playwright 每帧 4 个子帧 + FFmpeg tmix 做 60fps 运动模糊;全量渲染前先每拍渲一帧检查。
- **成片规格:** 14 秒,1440x1440,约 104 万浏览、1.2 万赞。
- **踩坑:** 需要 Node + Playwright + FFmpeg + Python numpy(Claude Code 这类环境)。模板里的 gotchas 就是作者踩过的坑:will-change 让被缩放的文字发糊、首尾帧不一致导致循环卡顿。音乐要用可商用授权的。

**提示词(作者原文)**

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

### 4. 一镜到底发布会风格品牌片(液态玻璃、光圈转场,5,200 字模板)

作者:[@twoclipping](https://x.com/twoclipping) · [原帖](https://x.com/twoclipping/status/2103835273813496100)

- **模型依据:** 原帖:「OPUS 5.5 IS THE ONLY MOTION DESIGNER YOU NEED… pure code」;5,200+ 字符完整提示词在原帖公开。
- **工具链与做法:** 单 HTML 1440x1440 + async seek(t);闭式弹簧;SVG feDisplacementMap 做液态玻璃;真实素材全 I 帧重编码后逐帧 seek;可商用音效按峰值对位;-14 LUFS 响度标准化;Playwright 4 子帧 + tmix 60fps;帧差扫描抓单帧跳变。
- **成片规格:** 约 29 秒,1440x1440,约 13 万浏览。
- **踩坑:** 照片、音乐、Pexels 素材要自己准备。Chromium 的 backdrop-filter:url() 读不对位移图,python http.server 不能 range-seek 视频,模板 gotchas 里都写了。

**提示词(作者原文)**

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

### 5. 极简高端产品片:竖屏素材扫描墙 + 卡点

作者:[@twoclipping](https://x.com/twoclipping) · [原帖](https://x.com/twoclipping/status/2102554209166000267)

- **模型依据:** 原帖:「this entire video is code opus picked the music, downloaded the sfx, built every frame and synced it all to the beat by itself」。
- **工具链与做法:** 单 HTML 1920x1080 + window.seek(t);真实视频用 FFmpeg 抽成 30fps JPEG 序列逐帧换图;numpy 分析速度、节拍网格、能量与 drop;3 子帧运动模糊;全量前先抽查 20+ 帧。
- **成片规格:** 20 秒,1920x1080。
- **提示词说明:** 原帖 build 第 1 条里被 X 自动插入了一个多余的「http://」,此处已去掉,其余未改。
- **踩坑:** preserve-3d 元素上设 opacity / filter 会被拍平、正反面都露出来,要淡出外层 wrapper。

**提示词(作者原文)**

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

### 6. 手游「高光时刻」结算 / 抽卡动效(中文长模板)

作者:[@op7418](https://x.com/op7418) · [原帖](https://x.com/op7418/status/2104085484347818226)

- **模型依据:** 原帖:「用 Opus 5.5 做游戏结算动画」「Opus 5.5 游戏动效制作提示词来了」。
- **工具链与做法:** 先出 2D SVG 版 → 改成 Three.js 真 3D(MeshToonMaterial 分阶着色、法线 + 深度后期描边)→ GSAP 时间线 → Canvas 2D 粒子 → Web Audio 合成音效 → 单文件网页,点一下播放,再录屏。
- **成片规格:** 抽卡版 + 提示词:约 17.6 秒,1920x1080,约 13 万浏览。宝箱版:x.com/op7418/status/2103724883301814408(约 14.7 秒,约 14 万浏览)。
- **踩坑:** 模板里大段「不要……」就是避坑经验:放大背面式描边粗细不均、CSS 3D 翻转大元素会铺满屏幕、循环补间不归零导致结算后还在抖。

**提示词(作者原文)**

```text
帮我做一个原创的手游「高光时刻」动效：[主体，例如：开宝箱 / 段位晋升 / 成就解锁 / Boss 掉落 / 角色升级]。
做成一个可以直接打开的单文件网页（HTML + CSS + JS），点一下就能完整播放，效果对标商业手游的结算 / 奖励演出。
【世界观与风格】
- 原创美术，不要模仿任何现有游戏的 IP、角色或 Logo。
- 卡通手游风：高饱和配色，统一的深色描边（例如 #1A1033），圆润厚重的造型。
- 配色随等级升级：[等级阶梯，例如：普通绿 → 稀有蓝 → 史诗紫 → 传说金]。每升一级都要切换主色、光效颜色和背景色调。
- 标题用圆胖的游戏字体（如 Titan One / Lilita One），描黑边，加投影；文字逐字「砸」进画面，带回弹。
【主体物：做成真 3D】
- 用 Three.js 建模，不要用平面 SVG 贴图。要有厚度、倒角，以及符合主体的结构细节（木板缝、铆钉、包边、宝石切面、锁扣等）；木板缝这类细节用真实几何体拼出来，不要贴黑线条。
- 着色用卡通分阶（MeshToonMaterial 加 3～4 阶的渐变贴图），配三种灯光：主光、天光、等级色的轮廓光。
- 描边用后期边缘检测：渲染法线图 + 深度图，再用着色器画线。外轮廓粗、零件交界细，粗细全程一致；另外做 1.5 倍超采样和多重采样抗锯齿。
不要用「放大一圈的黑色背面」那种描边，那样粗细不均、转角会断。
深度判断的阈值要放宽，接缝主要靠法线判断，否则斜着看的表面会冒出细碎斜纹。
- 活动部件要真实运动，比如箱盖绕铰链翻开、奖章绕竖轴旋转。
- 待机时主体缓慢左右转动，让人看到侧面和厚度，同时轻微上下浮动；脚下要有随高度变化的柔和投影。
【如果画面里有 2D 插画（卡面、奖励图标、角色）】
- 三层卡通着色：底色、成块的阴影色、高光色，不要只用一层渐变。
- 线条分粗细：外轮廓粗，内部结构线细。
- 每个角色或物件要有自己的表情和姿态，不要所有东西共用同一张脸。
- 脚下画投影，让主体「站」在画面里；背景按属性区分图案，不要全用同一套放射线。
【演出节奏：五个阶段，缺一不可】
1. 预备：主体待机浮动，每隔几秒抖一下提示可以点击，底部显示「点击」提示。
2. 升级：每点一次，主体跳起、在空中转一圈、落地时压扁再回弹；同时切换到下一等级的颜色，闪一下光，冒一圈粒子，标题更新。
3. 蓄力（约 1 秒）：主体越抖越剧烈，缝隙透出光，四周粒子往中心吸，音效音调持续上升；最后一刻猛地压扁。
4. 爆发：从爆点向外扩散的泛光闪白、屏幕震动、镜头往前一推、多层冲击波、细长流光迸射、闪光星点、金币和宝石（带旋转）。高等级的爆发要明显更强。彩带只在最高潮用一次，不要满屏彩带。
5. 揭晓与结算：
- 奖励卡片从主体里沿弧线飞出，落位时带超调和晃动收尾，数字滚动计数。
- 稀有物品带彩虹流光边框和「NEW!」角标。
- 点击领取后，金币和宝石沿贝塞尔曲线飞进右上角的余额，每到一个余额就跳一下。
【揭晓舞台：让主角独占画面】
- 最高稀有度揭晓时，其他元素收起或淡出，背后换成一层干净的渐变幕布加缓慢旋转的柔光，不要让主角压在杂乱的背景上。
- 幕布出现时，把场景里的其他 3D 物件隐藏掉，否则后期描边会把它们的轮廓线画在幕布上。
- 主角的外发光要放在主体背后，只从边缘溢出，不能盖在主体前面把它糊成一片白。
- 可以加一圈围绕主角盘旋的星尘拖尾，但轨道必须完整在主角轮廓外侧，不能从主体正面扫过。
【光效：必须柔和，不能有硬边】
- 背景光芒：用带渐变过渡的 conic-gradient，不要一刀切的色块边缘；叠 2～3 层不同密度、不同转速的光。
- 光柱：由 5～7 道带模糊的光束呈扇形散开，亮度各自轻微闪动；根部加一团柔光核心，光里有光尘缓慢上飘。
- 闪白：从爆点向外的径向泛光（mix-blend-mode: screen），强度不超过 0.8，不要整屏纯白过曝。
- 粒子：每个火花都带一圈低透明度的外晕；冲击波用三层描边（宽而淡、中等、细而亮）。
【材质与界面】
- 边框、名牌、按钮要有材质感：金属拉丝渐变、左上亮右下暗的倒角光、内阴影；按稀有度换镶嵌件（钢铆钉 → 银框宝石 → 金框钻石加小王冠）。
- 小卡片上不要塞小字数值；详细数值放到揭晓时的信息面板里，面板里的数字滚动上涨，并弹出「▲+数值」。
- 画在 Canvas 上的贴图，分辨率至少是屏幕上最大显示尺寸的 1.5 倍，否则放大时会发虚。
【动画原则】
- 用 GSAP 时间线编排。所有动作都要有挤压拉伸、超调和弹性回弹，不要匀速。
- 粒子系统用 Canvas 2D 自己写：重力、阻力、生命周期、叠加混合，以及「吸入」「曲线飞行」「环绕」三种运动。
- 不要用 CSS 3D 透视去翻转大尺寸元素，放大加侧翻时会被投影成铺满屏幕的平面，3D 翻转一律放在 WebGL 里做。
- 所有「抖动」「呼吸」类的循环补间，在状态切换时要先取消再归零，避免它比停止指令晚一帧结束，又把值设回去。
【音效】
- 全部用 Web Audio 实时合成，不用音频文件：跳起、落地、升级和弦、蓄力上升音、爆炸低频加噪声、弹出音、计数滴答、金币叮当、胜利号角。
- 第一次点击时才初始化音频；右上角放静音开关。
【界面与工程】
- 顶部 HUD：模式切换、金币和宝石余额、静音按钮。
- 手机宽度也要能用；遵守「减少动态效果」设置（关闭震屏，减少粒子）。
- 动画状态机要严谨：动画播放中忽略点击，不能出现点击被吞或状态错乱。
- 目标 60fps。第一次打开时就是完整的待机画面，不能是空白。
【交付前自检】
在蓄力、爆发、揭晓、结算这几个时刻各截一张图，逐张检查：
- 主角有没有被光晕、粒子或文字挡住？
- 有没有过曝成一片白？
- 背景是否杂乱，有没有穿帮的描边线？
- 小字是否能看清？
- 结算后是否还有东西在不该动的时候继续抖动？
最后告诉我：每个阶段的时长，以及哪些参数可以调整演出强度。
```

### 7. 纯代码像素风巫师施法循环动画

作者:[@majidmanzarpour](https://x.com/majidmanzarpour) · [原帖](https://x.com/majidmanzarpour/status/2102476258948927543)

- **模型依据:** 原帖:「opus 5.5, animated pixel art wizard, pure code prompt shared below」(发布当天),提示词在回复中公开。
- **工具链与做法:** 单 HTML、原生 JS + Canvas 2D、128x96 逻辑分辨率整数倍放大、约 24 色固定调色板、状态机动画、无分配粒子池;成片为录屏。
- **成片规格:** 约 11 秒,1080x890,约 45 万浏览。
- **踩坑:** 这条用 rAF 实时循环、不是 seek(t) 确定性渲染,录屏受机器性能影响;要出稳定 MP4,改成上面 UI 变形模板那种 seek(t) 写法。

**提示词(作者原文)**

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

### 8. 同模板「更彩色」复现,揭示 Opus 默认渲染管线

作者:[@__morse](https://x.com/__morse) · [原帖](https://x.com/__morse/status/2103485566570369333)

- **模型依据:** 原帖:「opus 5.5 is really amazing one shot」。
- **工具链与做法:** 作者原话概括:Opus 把所有代码放进单个 index.html,用 seek 函数 + eval 在无头 Playwright 窗口里逐帧渲染,再用 FFmpeg 合成 MP4;它偏好零依赖、从头手写,即使装了 Remotion / HyperFrames 也不主动用。
- **成片规格:** 约 15.4 秒,1440x1440。
- **踩坑:** 这条是「Opus 默认走单 HTML 路线」最直接的证据 —— 想用框架,必须在提示词里点名。

**做法概括(我们根据作者描述整理)**

```text
Ran @twoclipping's "one shape, a dozen UI states" template unchanged, with one extra instruction: make the video more colorful.
```

## 产品宣传片

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/product-launch](https://apimodels.app/claude-opus-5-5-video-prompts/product-launch)

### 9. 推理创业公司发布片(一句话)

作者:[@deedydas](https://x.com/deedydas) · [原帖](https://x.com/deedydas/status/2102787937482252537)

- **模型依据:** 原帖:「Opus 5.5 is incredible at instructional video generation. I made this launch video for a inference startup in 1min for ~$2」。
- **成片规格:** 26 秒,1920x1080,约 35 万浏览。
- **作者自述投入:** 作者自述约 1 分钟、约 $2;本页其他案例自述多在 $10 到 $400 之间,这只是一个数据点。

**提示词(作者原文)**

```text
make a modern slick and punchy video for a modern startup that works on inference
```

### 10. HyperFrames 三步教程(葡语):装 skill + 爆款提示词 + 指向项目文件夹

作者:[@thayto_dev](https://x.com/thayto_dev) · [原帖](https://x.com/thayto_dev/status/2104200591278739735)

- **模型依据:** 原帖(葡语):「modelo usado: opus 5.5 (effort: max)」。
- **工具链与做法:** 1)安装 hyperframes skill;2)用上面那句 Showreel 提示词;3)在提示词里引用你的项目文件夹;4)等待。作者说只用了 5 小时额度的约 5%。转述自 @gabrielbuzziv 的教程。
- **成片规格:** 15 秒,1920x1080,一个简历工具的宣传片。

**提示词(作者原文)**

```text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
```

### 11. 「给你的生意做 30 秒讲解片」通用模板

作者:[@alex_prompter](https://x.com/alex_prompter) · [原帖](https://x.com/alex_prompter/status/2103499977632997524)

- **模型依据:** 原帖:「Claude Opus 5.5 can make an explainer video for your business」。
- **成片规格:** 34.5 秒,1920x1080。
- **踩坑:** 作者的建议:「the trick is to direct it」—— 给它场景、时长和节奏;方括号里写清你卖什么、卖给谁、品牌色。

**提示词(作者原文)**

```text
Adopt the role of an expert motion designer. Build a 30-second animated explainer for my business as a single HTML page. 5 scenes. The customer's problem, what I do, how it works in 3 steps, one proof point, and my name at the end. Bold text, smooth transitions, my brand colours. My business [DESCRIBE WHAT YOU SELL, WHO IT'S FOR AND YOUR COLOURS]
```

### 12. 阿拉伯语竖屏 App 推广片(Remotion + TTS 配音)

作者:[@YarHmm](https://x.com/YarHmm) · [原帖](https://x.com/YarHmm/status/2103505435802341449)

- **模型依据:** 作者补充(阿语):用的是 Claude 的 Opus 5.5,思考强度中到高。
- **工具链与做法:** Remotion 方便预览;配音用 Gemini 3.8 Flash TTS;约 1.5 小时对话。
- **作者自述投入:** 约消耗 5 小时额度的四分之一。
- **成片规格:** 约 55.7 秒,1080x1920 竖屏。

**做法概括(我们根据作者描述整理)**

```text
Asked Opus 5.5 (medium to high effort) to build an Arabic, right-to-left vertical promo for an AI coding-tutor app in Remotion so it could be previewed quickly, limiting sound effects to camera shutter and lens sounds, with narration generated by a separate text-to-speech model.
```

### 13. Kotlin 官方推广片(HyperFrames skill + 指向官网)

作者:[JetBrains](https://x.com/jetbrains) · [原帖](https://x.com/jetbrains/status/2102459650125754812)

- **模型依据:** 原帖:「This product video was generated entirely by Claude Opus 5.5」。
- **发布方:** JetBrains 官方账号为自家语言发布,不是 apimodels.app 的客户案例。
- **成片规格:** 约 35 秒,2560x1440。
- **踩坑:** 说明「把官网 URL 给它,让它自己取素材」是可行的。

**做法概括(我们根据作者描述整理)**

```text
Installed the HyperFrames skills and pointed Opus 5.5 at kotlinlang.org, letting it gather the material and produce the product video on its own.
```

### 14. 3D 打印外壳产品动画(同一会话里先设计外壳再做宣传片)

作者:[@VectorCrossProd](https://x.com/VectorCrossProd) · [原帖](https://x.com/VectorCrossProd/status/2104093497561436573)

- **模型依据:** 原帖:「Claude Opus 5.5 created a 3D printable enclosure for an existing PCB. Then it created this promo video for it.」
- **工具链与做法:** Claude Code;外壳、可打印 STL 和宣传动画都由提示完成。
- **成片规格:** 10 秒,1920x1080。

**做法概括(我们根据作者描述整理)**

```text
In one Claude Code session: asked Opus 5.5 to design a 3D-printable enclosure for an existing PCB, then to make a promo animation for that enclosure.
```

### 15. Notion「列权限」功能预告片(Remotion,2 天 33 版)

作者:[@wustep](https://x.com/wustep) · [原帖](https://x.com/wustep/status/2104610435571884086)

- **模型依据:** 作者补充:「with @claude's opus 5.5 [xhigh]」。
- **作者自述投入:** 约 $400 Claude 额度(按 API 计);作者说 $100/月套餐也够。
- **相关链接:** 过程文档:notion.notion.site/column-permissions-trailer
- **发布方:** Notion 员工为 Notion 功能制作,不是 apimodels.app 的客户案例。
- **成片规格:** 约 31.9 秒,1920x1080。
- **踩坑:** 真实品牌片远不是一次出片:33 版才定稿。

**作者未公开提示词,只记录做法**

### 16. Shotbase 剪辑 App 发布片(HyperFrames,20 分钟内)

作者:[@Miguel07Code](https://x.com/Miguel07Code) · [原帖](https://x.com/Miguel07Code/status/2102441708395041170)

- **模型依据:** 原帖:「Claude Opus 5.5 1-shotted the launch video of @shotbaseapp using @HyperFrames_ in less than 20 mins」。
- **成片规格:** 约 58 秒,1920x1080,约 15 万浏览。

**作者未公开提示词,只记录做法**

### 17. Cosmos 情绪板 App 宣传片(HyperFrames,2 条提示词)

作者:[@kaolti](https://x.com/kaolti) · [原帖](https://x.com/kaolti/status/2103481296018092204)

- **模型依据:** 原帖:「Opus 5.5 is probably the biggest jump in output quality I've seen lately. Built this in @HyperFrames_ for Cosmos, 2 prompts only. No references at all.」
- **成片规格:** 39.5 秒,1920x1080。

**作者未公开提示词,只记录做法**

### 18. UX 设计决策讲解动画(面试作品集)

作者:[@moguzbulbul](https://x.com/moguzbulbul) · [原帖](https://x.com/moguzbulbul/status/2104206095313215591)

- **模型依据:** 原帖:「I was struggling to explain my UX decisions in interviews, so I made this kind of animation with Opus 5.5」。
- **成片规格:** 约 42 秒,1600x1200,约 20 万浏览。

**作者未公开提示词,只记录做法**

## 讲解与教育

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/explainer](https://apimodels.app/claude-opus-5-5-video-prompts/explainer)

### 19. Manim 导数概念教学片(edge-tts 配音)

作者:[@LinearUncle](https://x.com/LinearUncle) · [原帖](https://x.com/LinearUncle/status/2103128559174971663)

- **模型依据:** 原帖:「opus 5.5 + Manim制作导数的教学视频,显然opus 5.5非常擅长使用Manim」。
- **工具链与做法:** Claude Code;本地装 Manim、LaTeX、edge-tts。
- **成片规格:** 457 秒(约 7.6 分钟),1920x1080。
- **踩坑:** 没给时长,它自己规划出 7.6 分钟;需要控制时长就写上限。

**提示词(作者原文)**

```text
请用Manim给我制作一个导数概念学习的视频，要求通俗易懂，并且有例子，引人思考。配音使用edge-tts
```

### 20. 《什么是 Transformer》12 分钟中文讲解片(JS)

作者:[@dotey](https://x.com/dotey) · [原帖](https://x.com/dotey/status/2103683057689522564)

- **模型依据:** 原帖:「由 Claude Code + Opus 5.5 制作」。
- **成片规格:** 约 732 秒(12.2 分钟),1920x1080,约 19 万浏览。
- **踩坑:** 短提示词 + 高自主度(可装任何工具、可联网),时长和结构都由模型自己规划。

**提示词(作者原文)**

```text
帮我用js制作一个视频，主题是：什么是 Transformer
要深入浅出，让高中生也能看得懂，不仅high level说的清楚，也要有细节，包括注意力机制，甚至一些数学概念

你可以用任何工具或者安装工具，可以联网检索

请给我惊喜
```

### 21. 《中华文明史》史诗编年片(逐帧渲染 + ffmpeg,五声调式配乐)

作者:[@dotey](https://x.com/dotey) · [原帖](https://x.com/dotey/status/2103964025683927166)

- **模型依据:** 原帖:「《中华文明史》by Opus 5.5」。
- **成片规格:** 约 217 秒,1920x1080。
- **踩坑:** 中文风格化导演 brief 的好范例:配乐当时钟、先定拍点网格和分镜表再渲染、年代核对后交付、不画近现代真实人物。

**提示词(作者原文)**

```text
做一支史诗编年片《中华文明史》，可以写代码逐帧渲染，再用 ffmpeg 合成。
配乐当时钟：五声调式，乐器从骨笛、编钟一路演进到管弦，BPM 随年代加快，所有切点踩拍。
宣纸白描和玄底泥金两种画风交替；每卷一个主色和一套随时代演变的纹样（彩陶纹 → 饕餮纹 → 云气纹 → 卷草纹 → 缠枝纹 → 回纹）。
每镜一个按词组出现的书法大字关键词，配一幅线稿。全片 HUD：左上朱印卷号，右侧竖排朝代名，底部卷轴时间尺和年份计数。
卷交界用朱印盖下、鼓钟重击的冲击转场。先定拍点网格和分镜表，再渲染。
地图只画示意，不画近现代真实人物，年代核对后再交付。
```

### 22. 用九种视频风格解释「递归」

作者:[@emollick](https://x.com/emollick) · [原帖](https://x.com/emollick/status/2103688362960019567)

- **模型依据:** Ethan Mollick(沃顿商学院)原帖:「I had Claude Opus 5.5 make…」。
- **成片规格:** 约 75 秒,1920x1080,约 7 万浏览。
- **踩坑:** 「给一个概念 + 一条结构约束(每段换风格)」比堆形容词有效。

**提示词(作者原文)**

```text
A video explaining recursion, where every explanation about recursion has a radically different video style, make this self-referential & clever & fast moving.
```

### 23. 从一张照片生成鸡尾酒配方动画

作者:[@Ror_Fly](https://x.com/Ror_Fly) · [原帖](https://x.com/Ror_Fly/status/2102853258582880547)

- **模型依据:** 原帖:「Opus 5.5 rendered this in HTML from (1) image」。
- **工具链与做法:** 上传 1 张参考图 → HTML/JS 动画 → 录制。提示词里的拼写错误是原文,照原样保留。
- **成片规格:** 30 秒,1080x1080。
- **踩坑:** 图片输入、动画输出的典型用法:Opus 5.5 能看图,不能看视频。

**提示词(作者原文)**

```text
We're going to try a little test. Do you think you could render a recipe motion graphic animation using javascript or html (w/e you think will produce the best) to show the full recipe from start to finish (empty glass to completed cocktail) - Explainer video style - Showing the recipe ingreidents + measurements as they're going into the cup. Should be a 30s video.
```

### 24. 可拆解的猛禽 3 火箭发动机(交互网页 → 录屏)

作者:[@konstantinsaifo](https://x.com/konstantinsaifo) · [原帖](https://x.com/konstantinsaifo/status/2104094723887501736)

- **模型依据:** 原帖:「I asked Claude Opus 5.5 to explain how a rocket engine works by building an interactive Raptor 3」。
- **相关链接:** 在线体验:airsup.ai/rocket-engine;同作者聚变反应堆版:x.com/konstantinsaifo/status/2104216976801587629
- **成片规格:** 约 34.7 秒,1920x1080,约 115 万浏览。

**做法概括(我们根据作者描述整理)**

```text
Asked Opus 5.5 to explain how a rocket engine works by building an interactive Raptor 3 in the browser that you can take apart: cut it open, trace oxygen and methane through the two turbopumps, and throttle it to watch the shock diamonds move. The video is a screen recording of that page.
```

### 25. 双生子佯谬日文讲解(剪纸风,Canvas 1,395 帧)

作者:[@masahirochaen](https://x.com/masahirochaen) · [原帖](https://x.com/masahirochaen/status/2102722719502704941)

- **模型依据:** 原帖(日语):「Claude Code × Opus 5.5で日本語版にしてみました」。
- **工具链与做法:** Canvas 渲染 1,395 帧转 MP4,渲染约 2 分钟。
- **成片规格:** 46.5 秒,1080x1080。

**作者未公开提示词,只记录做法**

### 26. 3Blue1Brown 风格 VAE 讲解(Manim + 真实训练 MNIST + 克隆配音)

作者:[@ng169onX](https://x.com/ng169onX) · [原帖](https://x.com/ng169onX/status/2103183904563998809)

- **模型依据:** 原帖:「Opus 5.5 can now make animated explainer videos end to end, in a style similar to 3Blue1Brown」。
- **成片规格:** 约 5.6 分钟,1920x1080(浏览量很低,约 1.5K)。

**作者未公开提示词,只记录做法**

### 27. 3 分钟 AI 发展史(Remotion,约 7,400 行代码)

作者:[@kimmonismus](https://x.com/kimmonismus) · [原帖](https://x.com/kimmonismus/status/2102844654169575547)

- **模型依据:** 原帖:「This 3-minute film was made 100% in code by Claude in Claude Code」,主题句写明 with Opus 5.5。
- **作者自述投入:** 约 1 小时、周额度的 7%。
- **成片规格:** 约 180 秒,1920x1080,约 20 万浏览。

**作者未公开提示词,只记录做法**

### 28. 引力透镜黑洞实验室(三轮多 agent 评审-修复,过夜跑)

作者:[@Voxyz_ai](https://x.com/Voxyz_ai) · [原帖](https://x.com/Voxyz_ai/status/2103117246860345550)

- **模型依据:** 原帖:「I asked Opus 5.5 to explain gravitational lensing…」。
- **作者自述投入:** 全程 5 小时 28 分,按 API 价约 $90。
- **成片规格:** 约 21.8 秒,3840x2160。
- **踩坑:** 「评审-修复循环」方法最完整的公开样本。

**作者未公开提示词,只记录做法**

### 29. 地球 46 亿年进化史(B 站)

作者:第十一次元 · [原帖](https://www.bilibili.com/video/BV1Vfau6iE9Q/)

- **模型依据:** B 站标题「Opus5.5的神迹」。
- **成片规格:** 290 秒,2560x1440,约 8 万播放。

**作者未公开提示词,只记录做法**

### 30. 群论之美宣传片(B 站)

作者:sadssxa · [原帖](https://www.bilibili.com/video/BV12Zhm6oE6m/)

- **模型依据:** B 站标题「opus5.5真神降临 群论之美宣传片」。
- **成片规格:** 263 秒,1920x1080,约 34 万播放。

**作者未公开提示词,只记录做法**

## 分镜调视频模型

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/storyboard-to-video](https://apimodels.app/claude-opus-5-5-video-prompts/storyboard-to-video)

### 31. 复古拼贴「无限缩放」(调多个生成模型出素材 + 代码合成)

作者:[@koldo2k](https://x.com/koldo2k) · [原帖](https://x.com/koldo2k/status/2103129343253778767)

- **模型依据:** 原帖:「this animation made with Opus 5.5」;作者主动公开提示词。
- **工具链与做法:** 通过 Magnific MCP 调用 Seedream 5 Pro(风景)、GPT 2.5(透明抠图)、深度图、Kling 2.5(动画)、Lyria 3(音乐);Opus 负责分层视差、指数缩放数学、绿幕抠像、逐帧核对切点,交付交互 artifact 和 MP4。
- **成片规格:** 20 秒,1920x1080,约 7.3 万浏览。
- **踩坑:** 注意提示词里的成本闸门:先列出要生成什么、花多少额度,等确认;每个贵的步骤前先给截图。

**提示词(作者原文)**

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

### 32. 通过 Krea MCP 一次出片(10 分钟、$8)

作者:[@angrypenguinPNG](https://x.com/angrypenguinPNG) · [原帖](https://x.com/angrypenguinPNG/status/2102829318875537683)

- **模型依据:** 原帖:「Opus 5.5 has genuine creative taste. it one-shotted this video for $8 in 10 minutes using the Krea MCP」。
- **作者自述投入:** 约 $8、10 分钟。
- **成片规格:** 约 30 秒,1280x720。

**作者未公开提示词,只记录做法**

### 33. 日文竖屏评测短视频:Opus 图解动画 + TTS 配音 + Seedance 2.5 开场

作者:[@masahirochaen](https://x.com/masahirochaen) · [原帖](https://x.com/masahirochaen/status/2103872865770836012)

- **模型依据:** 原帖(日语):图解动画是 Claude Opus 5.5,声音是 Gemini 3.8 Flash TTS,开头的脸和声音是 Seedance 2.5。
- **成片规格:** 约 57 秒,1080x1920。

**作者未公开提示词,只记录做法**

### 34. 2 小时做完 8 关攻城游戏 + 60 秒宣传片(Seedance 2.5 / MiniMax H3 + CapCut)

作者:[@KanaWorks_AI](https://x.com/KanaWorks_AI) · [原帖](https://x.com/KanaWorks_AI/status/2102684116525437206)

- **模型依据:** 原帖:「Code:Claude Opus 5.5 Video: Seedance 2.5 & MInimax H3 @capcutapp_jp」。
- **成片规格:** 约 60 秒,1920x1080。

**作者未公开提示词,只记录做法**

## MV

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/music-video](https://apimodels.app/claude-opus-5-5-video-prompts/music-video)

### 35. 「Claude Pop」过夜 12 小时 MV(语音口述长 brief,视频模型打底 + JS 重绘)

作者:[@donaldjewkes](https://x.com/donaldjewkes) · [原帖](https://x.com/donaldjewkes/status/2102801274173587569)

- **模型依据:** 原帖:「I made this with one prompt using Opus 5.5. I spoke to my computer for 5mins, claude worked for 12 hours」。
- **提示词说明:** 原文节选。全文约 9,500 字符,在原帖回复中;完整转录见 claudevideo.org/videos/pixel-flower-illustrates-ai-time-horizon-progress-data。「……」处为删节。
- **工具链与做法:** 5 分钟语音口述成 brief;Opus 读本地参考库与 skills;通过图像 API 生成角色设定图和场景;用 Seedance 2.5 生成带人物与物理的底片,按歌词分段并尝试对口型;ElevenLabs 做音效;最后「先拍后描」,用 JS 动画在底片上整体重绘,多次通看、截图自评。
- **作者自述投入:** Max 套餐、生成额度上限约 $2,000、ElevenLabs key;brief 里明说可以把额度用完。
- **成片规格:** 约 141.5 秒,1920x1080,约 391 万浏览。
- **踩坑:** 这里的「one prompt」= 长 brief + 完整环境。这份 brief 被大量复制,有统计测得它与另一份热门模板词汇重合 87%。

**提示词节选(完整版见原帖)**

```text
I've included an MP4 file and an original link to a video that is called "Claude Pop." It's a pop song that is about increasing rate of progress and the experience of the singularity approaching.
I want you to independently do an end-to-end complete pass on making an updated version of this video. …
```

### 36. 90 年代 Demoscene(C/C++ + OpenGL,配 S3M 音轨,单提示词)

作者:[@gandamu_ml](https://x.com/gandamu_ml) · [原帖](https://x.com/gandamu_ml/status/2102919394775220530)

- **模型依据:** 原帖:「Opus 5.5 just one-shot this 90s-style demoscene demo for me… genuine one-shot (in colloquial X post sense - single prompt)」。
- **工具链与做法:** C/C++ + OpenGL,先分析并播放 S3M 模块再对齐效果;成片为录屏。
- **素材出处:** 配乐:Purple Motion(Future Crew)《Second Reality》原曲,由作者提供,版权归原作者;本页仅链接原帖展示作者的作品。
- **成片规格:** 约 382.7 秒(6.4 分钟),1920x1080。

**提示词节选(完整版见原帖)**

```text
I would like you to create a kickass, impressive 1990s style demoscene demo using this S3M track as the music. Prior to getting to work, please see how to best play and analyze the S3M track. This will be important since synchronization of effects and appropriateness of scenes to the musical vibe …
```

### 37. 「I'm Upping My P(Doom)」MV(p5.js + p5.brush,并行子 agent)

作者:[@other__reality](https://x.com/other__reality) · [原帖](https://x.com/other__reality/status/2102514581684052169)

- **模型依据:** 原帖:「Claude Opus 5.5 has the best visual design of any model I have tested so far」;仓库 README:第一版 Claude Opus 5.5(Medium),第二版 Claude Opus 5.5。
- **工具链与做法:** Opus 自己写了给并行子 agent 用的 ANIMATION_GUIDE.md(转述为 7 个子 agent)和 STORYBOARD.md;9 个章节各一个文件;studio.html 用 p5.js + p5.brush 绘制;render.mjs 用无头 Chrome 逐帧 + FFmpeg 编码。全部动画约 45 分钟。
- **作者自述投入:** 约耗 Max 5x 套餐周额度的 10%(论坛转述)。
- **素材出处:** 配乐:歌曲来自 2024 年的一个 YouTube 视频,非作者原创(README 自述「as far as I could find」),版权归原作者。
- **相关链接:** YouTube:youtu.be/8j-hR4fJywU;代码:github.com/JohnHeibel/PDoomVideo(未声明许可证,只链接);同作者起步模板:github.com/JohnHeibel/ClaudeAnimationBase(MIT)。
- **成片规格:** 约 156.6 秒,1920x1080,约 284 万浏览。

**做法概括(我们根据作者描述整理)**

```text
Gave Claude Code the lyrics and the audio. Pass one (medium effort): use the Clawd character and give every lyric line an interesting visual and transition, with no scene ideas specified. Pass two (xhigh): switch to p5 brush strokes, make the scenes more interesting and have each scene flow into the next.
```

### 38. 同一 brief + Midjourney + 情绪板重跑(本页浏览量最高)

作者:[@anabology](https://x.com/anabology) · [原帖](https://x.com/anabology/status/2103534482930491441)

- **模型依据:** 原帖:「Gave Opus 5.5 donald's prompt, Midjourney, and a moodboard 12 hours later, woke up to this」。
- **成片规格:** 约 306 秒,1920x1080,约 1,975 万浏览(本页最高)。
- **踩坑:** 同一份 brief 换参考素材,得到完全不同的片子。

**做法概括(我们根据作者描述整理)**

```text
Re-ran @donaldjewkes' "Claude Pop" brief (see the card above) almost unchanged, giving Opus 5.5 access to Midjourney and a moodboard, and let it work for 12 hours.
```

### 39. 比特币货币史 MV「Stroke of a Pen」(agent 群分镜,约 75 个卡点镜头)

作者:[@bradmillscan](https://x.com/bradmillscan) · [原帖](https://x.com/bradmillscan/status/2103108967194833310)

- **模型依据:** 原帖:「I told Opus 5.5 to read my Bitcoin & monetary-history wikis & make a music video with code only」。
- **工具链与做法:** 歌曲用 ElevenLabs 生成;一群 agent 分镜并写代码,3 分 23 秒竖屏、约 75 个卡拍镜头;第一轮修改时它重写了骨骼绑定。
- **成片规格:** 约 202.7 秒,1080x1920,约 19 万浏览。
- **踩坑:** 人物动画是代码动画的弱项,需要专门迭代骨骼。

**做法概括(我们根据作者描述整理)**

```text
Told Opus 5.5 to read the creator's Bitcoin and monetary-history wikis and make a music video with code only; the song was generated separately. Two revision rounds followed: the first because the characters looked like crude stick figures, the second to add Matrix-style code elements.
```

### 40. 中秋剪纸拼贴短片(p5.brush 逐帧 + Nano Banana Pro 出底稿)

作者:[@ring_hyacinth](https://x.com/ring_hyacinth) · [原帖](https://x.com/ring_hyacinth/status/2102986085328716066)

- **模型依据:** 原帖:「用 Opus 5.5 制作的小动画」。
- **成片规格:** 约 40 秒,1920x1080。
- **踩坑:** 人负责脚本与音乐、模型负责动画,是比较稳的分工。

**作者未公开提示词,只记录做法**

### 41. Suno 编曲演唱 + Opus 5.5 作词并做 MV(B 站)

作者:syline · [原帖](https://www.bilibili.com/video/BV1qihf6rE6f/)

- **模型依据:** B 站标题「suno编曲和演唱,opus5.5作词然后制作的mv」。
- **成片规格:** 162 秒,1920x1080(约 3K 播放,证据较弱)。

**作者未公开提示词,只记录做法**

## 叙事与历史短片

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/short-film](https://apimodels.app/claude-opus-5-5-video-prompts/short-film)

### 42. 美国 250 年历史沙画动画(一句话,含配乐音效)

作者:[@Michaelzsguo](https://x.com/Michaelzsguo) · [原帖](https://x.com/Michaelzsguo/status/2102592355165782312)

- **模型依据:** 原帖:「Opus 5.5,太牛逼了… 一个 prompt 到底,没有任何修改」。
- **成片规格:** 120 秒,1920x1080,约 7.6 万浏览。
- **踩坑:** 作者强调没用 Blender、没用 Three.js。

**提示词(作者原文)**

```text
Make a 2-minute sand animation that tells the story of 250 years of U.S. history. Keep it lively, engaging, and tasteful. Add appropriate background music and sound design.
```

### 43. 「鹈鹕骑自行车」剧场版(自写 GPU 光线步进渲染器)

作者:[@AxtonLiu](https://x.com/AxtonLiu) · [原帖](https://x.com/AxtonLiu/status/2103119648271290566)

- **模型依据:** 原帖:「Opus 5.5 《鹈鹕骑自行车》剧场版:提示词一次生成」。
- **工具链与做法:** 没用任何 3D 模型、贴图、音频素材;Opus 自己写了 GPU 光线步进渲染器,鹈鹕、自行车、栈桥、海面、天空、配乐都由代码计算;1,140 帧,每帧 40 次采样。
- **提示词说明:** 原提示词中的引号为中文全角引号,此处显示为半角,内容未改。
- **成片规格:** 38 秒,1920x1080。
- **踩坑:** 时间预算要放宽(原文:「不用着急,画一天都可以」)。

**提示词(作者原文)**

```text
每次一个新的模型出来呢，大家都让它去画 "鹈鹕骑自行车" 来判断这个模型的空间能力，基本上都是用 HTML、SVG 来画动画。当我实在看得都有审美疲劳了，我希望你能画一个最复杂、最精细、最精美的 "鹈鹕骑自行车"的动画视频，你可以用任何的技术，不用着急，画一天都可以。
```

### 44. 滕王阁·中秋夜(自由选题,WebGL2 逐像素 + Karplus-Strong 古筝)

作者:[@DemitiyaGeekzen](https://x.com/DemitiyaGeekzen) · [原帖](https://x.com/DemitiyaGeekzen/status/2103517910274818523)

- **模型依据:** 原帖:「opus5.5有点强,我让它自由选题做交互页面和视频」。
- **工具链与做法:** 作者转述模型说明:画面由一个 WebGL2 着色器逐像素算出,没用图片;按南昌纬度推算日月轨迹;Canvas 2D 画滕王阁立面;声音全用 Web Audio 实时合成,古筝用 Karplus-Strong 弦振动模型;同时交付可交互网页(可拖时间轴、放河灯、网页内录制视频)。
- **成片规格:** 30 秒,1920x1080(浏览量很低,约 500)。

**提示词(作者原文)**

```text
用你最强的思维和能力，根据对我的了解，自行寻找我可能喜欢的主题，制作一个30s的视频还有互动html，尽可能的展示你的前端能力！
```

### 45. 用 Web3D 复刻《红猪》日落空战(一句话)

作者:[@NFT_Chen](https://x.com/NFT_Chen) · [原帖](https://x.com/NFT_Chen/status/2103401780117938683)

- **模型依据:** 原帖:「Opus 5.5 用 Three.js 把宫崎骏《红猪》经典空战复刻出来了」;作者称只给了这一句。
- **素材出处:** 致敬作品:《红猪》,宫崎骏 / 吉卜力工作室;原作及其设计版权归权利方所有,本页仅链接原帖展示作者的致敬创作。
- **相关链接:** 带视频的转发:x.com/NFT_Chen/status/2103882415299350878(约 14 秒)。
- **成片规格:** 原帖约 5.1 万浏览。

**提示词(作者原文)**

```text
用 web3D 复刻宫崎骏《红猪》日落海面上的经典空战：白绿红涂装战斗机、紫色积云、海面反光、吉卜力运镜，画面写 just breathe.
```

### 46. 奥斯特里茨战役 5 分钟历史片(WebGL2,真实地形与日出方位)

作者:[@WinterArc2125](https://x.com/WinterArc2125) · [原帖](https://x.com/WinterArc2125/status/2103116235009347650)

- **模型依据:** 原帖:「OPUS 5.5 IS CRAZY… I just had it turn that morning into a complete 5 minute film. All code.」
- **作者自述投入:** 搭建 90 分钟、渲染 4 小时、云端 agent 额度约 $40。
- **相关链接:** 代码:github.com/WinterArc21/Battle-of-Austerlitz-Film(未声明许可证,只链接)。
- **成片规格:** 约 301 秒,1920x1080,24fps,约 64 万浏览。
- **踩坑:** 长片要工程化分层:旁白节拍 → 镜头计时 → 声音从画面推导。

**作者未公开提示词,只记录做法**

### 47. 《崂山道士》3D 讲解片(不写分镜,声音克隆旁白)

作者:[@wshuyi](https://x.com/wshuyi) · [原帖](https://x.com/wshuyi/status/2103308292613345504)

- **模型依据:** 原帖:「Opus 5.5 直出《崂山道士》3D 影片… 这次用 Claude Code 挂 Opus 5.5」。
- **相关链接:** 同作者前作《鸿门宴》:x.com/wshuyi/status/2103101793584796090
- **成片规格:** 约 359 秒,1920x1080。

**作者未公开提示词,只记录做法**

### 48. 「瘫坐长椅看原子弹爆炸」动画(B 站,跑 16 小时、每个画面一个着色器)

作者:一起Vibe · [原帖](https://www.bilibili.com/video/BV1jyaA6QEoH/)

- **模型依据:** B 站标题「Opus 5.5 把…做成了动画」。
- **作者自述投入:** 用掉 20x 套餐周额度的 40%。
- **成片规格:** 42 秒,1080x1440,约 17 万播放。

**作者未公开提示词,只记录做法**

## 3D、Blender 与着色器

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/3d-blender](https://apimodels.app/claude-opus-5-5-video-prompts/3d-blender)

### 49. 1906 年地震前的旧金山市场街(Blender Python,先建史料表再建模)

作者:[@alexalbert__](https://x.com/alexalbert__) · [原帖](https://x.com/alexalbert__/status/2102466523164274839)

- **模型依据:** 原帖:「I've been on a Blender kick with Opus 5.5. Its better 3D modeling and vision mean you can build an entire world from a single prompt.」
- **发布方:** 发布者为 Anthropic 员工。
- **成片规格:** 约 8 秒,960x680,约 16 万浏览。
- **踩坑:** 需要本地 Blender + Python 与联网检索。值得照抄的范式:先建带出处的数据源文件,再写可复用生成器,每栋楼都能追溯到数据。

**提示词节选(完整版见原帖)**

```text
Recreate Market Street, San Francisco as it stood on April 17, 1906, the afternoon before the earthquake, in Blender.
Scope: the Ferry Building up Market to Fifth Street, including the Palace Hotel, the Call Building, the Chronicle Building, Lotta's Fountain and the Emporium.
Before modeling …
```

### 50. Blender 程序化 10 秒镜头:Opus 5.5 vs GPT-6 Astra 对比

作者:[@Stefan_3D_AI](https://x.com/Stefan_3D_AI) · [原帖](https://x.com/Stefan_3D_AI/status/2102471841046786153)

- **模型依据:** 原帖:「First Opus 5.5 vs GPT-6 Astra test is 3D」。
- **作者自述投入:** Opus 5.5:35 分钟、19.96 万输出 token、约 $13.3;GPT-6 Astra:28 分钟、5.66 万输出 token、约 $14.5(作者自述)。
- **踩坑:** Opus 5.5 输出 token 多、单价低,预算要按输出算。

**做法概括(我们根据作者描述整理)**

```text
One prompt given to both Opus 5.5 and GPT-6 Astra: build a 10-second shot in Blender only, fully procedural, render it, and record a timelapse of the build.
```

### 51. Blender 里约 2 小时从零做章鱼(建模、贴图、绑定、动画,YouTube)

作者:Bad Decisions Studio · [原帖](https://www.youtube.com/watch?v=6ZHZ9aCZIR4)

- **模型依据:** 视频简介:「Claude Opus 5.5 just dropped… It modelled, textured, rigged and animated an octopus in Blender from scratch in about two hours」。
- **提示词说明:** 提示词在视频里,未逐字转录,此处为概括。

**做法概括(我们根据作者描述整理)**

```text
Asked Opus 5.5 to model, texture, rig and animate an octopus in Blender from scratch; it took about two hours. The video compares the result with GPT-6 Astra.
```

### 52. 只用 JavaScript 的 GPU 流体火焰短片(自评约 40 轮)

作者:[@NathanWilbanks_](https://x.com/NathanWilbanks_) · [原帖](https://x.com/NathanWilbanks_/status/2103881538592981110)

- **模型依据:** 原帖:「I asked opus 5.5 in @agnt_gg for the most realistic fire it could build using ONLY javascript」。
- **工具链与做法:** GPU 上的 3D 流体模拟,火焰颜色来自黑体辐射;评审循环抓出了火焰熄灭、地面环形伪影、炭块像奶酪片等问题;声音由每帧火焰亮度驱动;单 HTML、一次对话。
- **成片规格:** 38 秒,1920x1080(浏览量很低,约 1K)。

**做法概括(我们根据作者描述整理)**

```text
Asked Opus 5.5 for the most realistic fire it could build using only JavaScript, then had a vision model critique each rendered frame like a VFX supervisor, fixed the issues and repeated, about 40 rounds, before rendering a scripted shot offline frame by frame.
```

### 53. 「Opus5」随手涂鸦变 3D 拳击动画,并封装成 Skill

作者:[@MinLiBuilds](https://x.com/MinLiBuilds) · [原帖](https://x.com/MinLiBuilds/status/2102756822990180387)

- **模型依据:** 原帖:「Opus5.5做好这个动画后,我直接站起来了」。
- **素材出处:** 画面含真人形象(标注为 Dario Amodei 与 Sam Altman)的拳击对打,仅为原作者的创作展示,本页只链接原帖。
- **相关链接:** Skill:github.com/limin112/min-skill(未声明许可证,只链接)。
- **成片规格:** 约 103 秒,1920x1080。

**作者未公开提示词,只记录做法**

### 54. 风车建模-绑定-贴图-动画全流程(Blender + Higgsfield MCP,15 分钟)

作者:[Higgsfield](https://x.com/higgsfield_ai) · [原帖](https://x.com/higgsfield_ai/status/2102453658889953717)

- **模型依据:** 原帖:「Claude Opus 5.5 + Higgsfiled built this animated windmill in Blender in 15 minutes」。
- **发布方:** 厂商自家的宣传帖。
- **相关链接:** 相关长教程:YouTube「Claude Opus 5.5 + Blender: The Ultimate 3D AI Pipeline (Higgsfield)」youtube.com/watch?v=Xeq-BwMVBUA(Aaron Randall)。
- **成片规格:** 约 21 秒,1080x1920。

**作者未公开提示词,只记录做法**

## 剪辑与后期

在线浏览带视频的这一类:[https://apimodels.app/claude-opus-5-5-video-prompts/video-editing](https://apimodels.app/claude-opus-5-5-video-prompts/video-editing)

### 55. 口播原片剪成带字幕、图形、音乐的快节奏短视频(OpenEdit)

作者:[@sab8a](https://x.com/sab8a) · [原帖](https://x.com/sab8a/status/2103144778481475686)

- **模型依据:** 原帖:「Opus 5.5 + OpenEdit」。
- **作者自述投入:** 约 1 小时 51 分;token 约 $23,另有生成类 API 用量约 $49。
- **成片规格:** 约 37 秒,1920x1080。

**提示词(作者原文)**

```text
Cut a raw talking-head clip into a punchy, fun edit with subtitles, graphics and music
```

### 56. 让 Opus 5.5 操作 After Effects 加工 AI 视频(两次测试)

作者:[@aicreataro](https://x.com/aicreataro) · [原帖](https://x.com/aicreataro/status/2103757144789221819)

- **模型依据:** 原帖(日语):「Opus 5.5にAfter Effectsを操作させて」。
- **工具链与做法:** 作者结论:指令很粗也能做得不错,成果存成 .aep 工程、事后可以人工修改;能取到骨骼就不用手动跟踪,但何时显示跟踪效果还得人来判断。
- **相关链接:** 测试 1:x.com/aicreataro/status/2102656273112326609(15 秒,1440x1280)。
- **成片规格:** 测试 3:约 32 秒,1920x1080,约 38 万浏览。

**做法概括(我们根据作者描述整理)**

```text
Test 1: gave Opus 5.5 a 15-second clip generated by MiniMax H3 and had it drive After Effects to retime the cuts to the beat and add one effect per section (particles, light rays, kaleidoscope, datamosh). Test 3: Suno wrote the track, MiniMax H3 made a character dance to it, and Opus extracted full-body skeleton data frame by frame from the dance and fed it into After Effects to drive text, light and camera.
```

### 57. 让 Opus 5.5 通过 MCP 驱动 DaVinci Resolve 剪完整条 YouTube 视频

作者:[@NickSpisak_](https://x.com/NickSpisak_) · [原帖](https://x.com/NickSpisak_/status/2103511092043628807)

- **模型依据:** 原帖:「Claude Opus 5.5 edited my entire YouTube video」。
- **成片规格:** 约 539 秒(9 分钟),3840x2160。

**作者未公开提示词,只记录做法**

### 58. Grok 生成的原始舞蹈片段 → Opus 5.5 剪辑包装

作者:[@Gorden_Sun](https://x.com/Gorden_Sun) · [原帖](https://x.com/Gorden_Sun/status/2104009748874141941)

- **模型依据:** 原帖:「视频1:Opus 5.5剪辑后的视频 视频2:Grok生成的原始视频」。
- **成片规格:** 两段各约 15 秒(1920x1080 与 960x960)。

**作者未公开提示词,只记录做法**

### 59. 游戏试玩演示片:Opus 自己玩游戏、挑高光、剪辑成片

作者:[@rehan_shei](https://x.com/rehan_shei) · [原帖](https://x.com/rehan_shei/status/2103755997533839416)

- **模型依据:** 原帖:「I turned this into a full game with unity cli + opus 5.5, also opus did this full demo video, it played the game with multiple characters and spliced together the best bits」。
- **相关链接:** 可玩:rehan-remade.github.io/hollow-crown/
- **成片规格:** 约 29.7 秒,1920x1080。

**作者未公开提示词,只记录做法**

### 60. 11 万刚体 WebGPU 物理演示的宣传短片(一条提示词剪出)

作者:[@nybobs](https://x.com/nybobs) · [原帖](https://x.com/nybobs/status/2103385835328680050)

- **模型依据:** 原帖:「Opus 5.5 even put together this whole demo reel video just from a single text prompt in Claude Code」。
- **相关链接:** 代码(MIT):github.com/sbobyn/three-avbd;在线:three-avbd.vercel.app
- **成片规格:** 约 26 秒,1920x1080。

**作者未公开提示词,只记录做法**

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
