# Claude Opus 5.5 Video Prompts: 60 Real Cases

English · [简体中文](README.zh-CN.md)

Sixty real videos made with Claude Opus 5.5, each credited to its creator and linked to the original post, with the toolchain they used and, where they published it, the prompt word for word. Opus 5.5 does not draw pixels: every clip here was rendered from code it wrote, or cut together from video models it directed.

Disclosure: this collection is curated by [apimodels.app](https://apimodels.app), the API platform I work on. apimodels.app is a multi-model API gateway: one API key and OpenAI- and Anthropic-compatible endpoints for Claude Opus 5.5 and about 150 image, video, audio and language models. A browsable version with the videos playing inline is the [Claude Opus 5.5 video case library on apimodels.app](https://apimodels.app/claude-opus-5-5-video-prompts).

## In one paragraph

Claude Opus 5.5 (model id claude-opus-5-5, released by Anthropic on 22 September 2026) is a language model. Anthropic's documentation lists text and image input and text output only, states that Claude cannot generate or edit images, and offers no video input: an animated GIF is read as its first frame. The videos credited to it are made in one of three ways. It writes animation code (a self-contained HTML page driven by a seek(t) function, Remotion or HyperFrames compositions, Manim scenes, Three.js and WebGL shaders, Blender Python) that a headless browser or renderer turns into frames and FFmpeg encodes into an MP4. It directs video, image and music models through APIs, writing the shot list and every prompt, then edits the results. Or it edits existing footage through FFmpeg, After Effects or DaVinci Resolve. A video billed as "one prompt" is often a brief of several thousand characters, run inside an agent with skills, API keys and hours of autonomous work, so each case below records what the creator actually supplied and what they reported spending. The 60 cases were posted between 22 September and 3 October 2026 and each was checked against the original post. On apimodels.app, Opus 5.5 is $2.40 per 1M input tokens and $12 per 1M output tokens, against Anthropic's $4 / $20 list.

## Contents

- [Motion Design & UI Animation](#motion-design--ui-animation) (8)
- [Product Launch](#product-launch) (10)
- [Explainer & Education](#explainer--education) (12)
- [Directing Video Models](#directing-video-models) (4)
- [Music Video](#music-video) (7)
- [Narrative & History Short](#narrative--history-short) (7)
- [3D, Blender & Shader](#3d-blender--shader) (6)
- [Editing & Post-Production](#editing--post-production) (6)
- [What the best briefs do](#what-the-best-briefs-do)
- [Six workflows with templates](METHODS.md)
- [Our own run: prompt, render script, cost](our-run/README.md)
- [FAQ](#faq)
- [Credits, copyright and licence](#credits-copyright-and-licence)

60 cases published between 22 September and 3 October 2026, each checked against the original post. Every case says whether the text is the author's own prompt, an excerpt, our summary of their method, or unpublished. Costs and times are as the creators reported them.

## What the best briefs do

- **Ask for the plan before the code.** The strongest briefs in this library end the same way: show me the shot list, the beat grid or the list of states, then wait. Fixing a storyboard costs one message; fixing a rendered film costs a re-render and often a rewrite.
- **Make every frame a function of time.** Have it expose window.seek(t) and compute every style from t: no timers, no requestAnimationFrame loop, no CSS transitions, no unseeded randomness. Then a headless browser can render any frame on demand and FFmpeg can encode a steady 60fps. A live animation captured by screen recording drops frames whenever the machine is busy.
- **Name the framework, or it will not use one.** Left alone, Opus 5.5 writes one dependency-free HTML file from scratch even when Remotion or HyperFrames is installed. If you want a React timeline, Manim's equation animation or Blender's renderer, say so in the first line and install the matching skill.
- **Ban the defaults by name.** Anthropic's own prompting guide for Opus 5.5 notes that asking it to avoid a generic look only swaps one default style for another. The briefs that stand out list exactly what is banned (centered text on a gradient, everything fading in, particle bursts, neon glows, bouncy easing, lens flares) and pair that with one accent colour and one typeface.
- **Render stills and make it critique them.** It can read images but not video, so the review loop runs on frames: one still per beat, or twenty sampled frames, inspected before the full render. Several creators here ran that loop dozens of times or split it into reviewer and fixer agents, and credit it for the difference between a good clip and a forgettable one.
- **Hand it the soundtrack, then let it do the maths.** Give it a track whose licence covers your use and ask it to measure tempo and beats (numpy is enough), cut on downbeats, place each sound effect by its measured peak rather than where the file starts, and normalise loudness to -14 LUFS. With no track, it can synthesise music and effects in Web Audio or Python on the same timeline.
- **Put a cost gate in front of every paid call.** When it directs video or image models, make it list every generation with its estimated cost and wait for your OK, and show you stills before each expensive step. Without that line, an agent running for hours will happily spend whatever the keys allow.
- **Match effort and time to the job.** Creators report xhigh or max effort on the pieces that travelled and medium for small fixes; Anthropic suggests raising effort only where you measure a quality gain. Budget wall-clock time too: a five-minute history film here took 90 minutes to build and four hours to render, and one music video ran overnight.

**The director-brief formula:** Director brief = the inputs it must ask you for + direction (one style, one accent colour, one typeface, an explicit banned list) + structure (every shot timed on a beat grid) + build contract (resolution, fps, seek(t), renderer, how to check frames) + known gotchas + a start line that asks for the plan before any code

## Motion Design & UI Animation

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/motion-graphics](https://apimodels.app/claude-opus-5-5-video-prompts/motion-graphics)

### 1. The 15-second motion-designer showreel

By [@stephanlivera](https://x.com/stephanlivera) · [original post](https://x.com/stephanlivera/status/2103315922098470926)

- **Model:** Post: "Opus 5.5 on Max effort".
- **Toolchain:** One sentence at max effort. Indexers describe the result as Canvas drawing cut to a 128 BPM grid; the usual route is one HTML file rendered frame by frame by a headless browser, then FFmpeg.
- **Clip:** 15 s, 1920x1080, about 2.25M views (6 Oct 2026).
- **Same prompt, other runs:** @ajith_io (x.com/ajith_io/status/2103449416325890146), @kenn at xhigh (x.com/kenn/status/2103337314021937232), @himanshutwtxs with sound (x.com/himanshutwtxs/status/2103495232637882858), @thismacapital as a French product ad, "15 minutes, 2-3 revisions, all HTML/JS/CSS" (x.com/thismacapital/status/2103773635714375808).
- **Pitfalls:** Thousands of people ran this exact sentence, so the results rhyme with each other. A one-liner tests the setup, not an idea; use it to check your environment works.

**Prompt (the author's own words)**

```text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
```

### 2. Showreel brief that lists the techniques

By [@lukasersil](https://x.com/lukasersil) · [original post](https://x.com/lukasersil/status/2103742861971726495)

- **Model:** Post (Czech): all of it is code made in Opus 5.5 at max effort.
- **Toolchain:** Three.js, WebGL shaders and Canvas; the creator says no image, video or music generator was used.
- **Clip:** Two 15 s clips, 1920x1080.

**Prompt excerpt (the full prompt is in the original post)**

```text
Create a bold, dynamic 15-second motion graphics showreel that feels like the ultimate portfolio piece of an exceptionally talented motion designer. Showcase a wide range of advanced techniques: kinetic typography, smooth transitions, 2D and 3D animation, abstract geometry, fluid simulations, …
```

### 3. One shape morphs through a dozen UI states on the beat

By [@twoclipping](https://x.com/twoclipping) · [original post](https://x.com/twoclipping/status/2103273003555402193)

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

### 4. One-take keynote-style launch film with liquid glass and an iris transition

By [@twoclipping](https://x.com/twoclipping) · [original post](https://x.com/twoclipping/status/2103835273813496100)

- **Model:** Post: "OPUS 5.5 IS THE ONLY MOTION DESIGNER YOU NEED… pure code". Full prompt (5,200+ characters) published in the post.
- **Toolchain:** Single 1440x1440 HTML with async seek(t); closed-form springs; SVG feDisplacementMap liquid glass; real footage re-encoded all-intra and seeked per frame; licensed SFX placed by measured peak; loudness normalised to -14 LUFS; Playwright 4 subframes + tmix at 60fps; frame-difference scan for single-frame pops.
- **Clip:** About 29 s, 1440x1440, about 130K views.
- **Pitfalls:** You supply the photos, the track and a stock clip. Chromium's backdrop-filter: url() misreads displacement maps, and python http.server cannot range-seek video; both are in the gotchas.

**Prompt (the author's own words)**

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

### 5. Minimal product launch: scanning wall of vertical clips, cut on the beat

By [@twoclipping](https://x.com/twoclipping) · [original post](https://x.com/twoclipping/status/2102554209166000267)

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

### 6. Mobile-game reward and gacha reveal (Three.js toon shading + GSAP)

By [@op7418](https://x.com/op7418) · [original post](https://x.com/op7418/status/2104085484347818226)

- **Model:** Posts: "using Opus 5.5 to make game result animations" and "the Opus 5.5 game motion prompt is here" (Chinese).
- **Toolchain:** A 2D SVG version first, then rebuilt in Three.js as real 3D (MeshToonMaterial bands, normal + depth post-process outlines), a GSAP timeline, Canvas 2D particles and Web Audio synthesised effects, in one HTML page that plays on click and is screen-recorded.
- **Clip:** Gacha version with the prompt: about 17.6 s, 1920x1080, about 130K views. Treasure-chest version: x.com/op7418/status/2103724883301814408 (about 14.7 s, about 140K views).
- **Pitfalls:** The long "do not" lists are the lessons: inverted-hull outlines vary in width, CSS 3D flips of large elements project across the whole screen, and looping tweens that are not reset keep shaking after the reveal.

**Prompt (the author's own words)**

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

### 7. Pixel-art wizard casting a spell, pure Canvas code

By [@majidmanzarpour](https://x.com/majidmanzarpour) · [original post](https://x.com/majidmanzarpour/status/2102476258948927543)

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

### 8. Colourful remix of the UI-morph template that exposed the default render pipeline

By [@__morse](https://x.com/__morse) · [original post](https://x.com/__morse/status/2103485566570369333)

- **Model:** Post: "opus 5.5 is really amazing one shot".
- **Toolchain:** Per the author: Opus put all the code in one index.html, rendered it frame by frame in a headless Playwright window via a seek function plus eval, then assembled the MP4 with FFmpeg. It prefers zero dependencies and writes everything from scratch, and did not reach for Remotion or HyperFrames even though they were available.
- **Clip:** About 15.4 s, 1440x1440.
- **Pitfalls:** This post is the clearest evidence that the single-HTML route is the default. If you want a framework, name it in the prompt.

**Method summary (our words, from what the author described)**

```text
Ran @twoclipping's "one shape, a dozen UI states" template unchanged, with one extra instruction: make the video more colorful.
```

## Product Launch

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/product-launch](https://apimodels.app/claude-opus-5-5-video-prompts/product-launch)

### 9. Punchy launch video for an inference startup, from one line

By [@deedydas](https://x.com/deedydas) · [original post](https://x.com/deedydas/status/2102787937482252537)

- **Model:** Post: "Opus 5.5 is incredible at instructional video generation. I made this launch video for a inference startup in 1min for ~$2".
- **Clip:** 26 s, 1920x1080, about 350K views.
- **Reported cost:** About 1 minute and about $2 by the author's account; most other cases here report $10 to $400, so treat it as one data point.

**Prompt (the author's own words)**

```text
make a modern slick and punchy video for a modern startup that works on inference
```

### 10. Three-step HyperFrames recipe: install the skill, reuse the showreel line, point at your project

By [@thayto_dev](https://x.com/thayto_dev) · [original post](https://x.com/thayto_dev/status/2104200591278739735)

- **Model:** Post (Portuguese): "model used: opus 5.5 (effort: max)".
- **Toolchain:** 1) Install the HyperFrames skill. 2) Use the one-line showreel prompt above. 3) Reference your project folder in the prompt. 4) Wait. The author says it used about 5% of a five-hour usage window. Relays a tutorial by @gabrielbuzziv.
- **Clip:** 15 s, 1920x1080, a promo for a résumé tool.

**Prompt (the author's own words)**

```text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
```

### 11. Reusable 30-second business explainer template

By [@alex_prompter](https://x.com/alex_prompter) · [original post](https://x.com/alex_prompter/status/2103499977632997524)

- **Model:** Post: "Claude Opus 5.5 can make an explainer video for your business".
- **Clip:** 34.5 s, 1920x1080.
- **Pitfalls:** The author's advice: direct it. Give it the scenes, the length and the pace; fill the bracket with what you sell, who it is for and your colours.

**Prompt (the author's own words)**

```text
Adopt the role of an expert motion designer. Build a 30-second animated explainer for my business as a single HTML page. 5 scenes. The customer's problem, what I do, how it works in 3 steps, one proof point, and my name at the end. Bold text, smooth transitions, my brand colours. My business [DESCRIBE WHAT YOU SELL, WHO IT'S FOR AND YOUR COLOURS]
```

### 12. Arabic vertical promo for an AI coding-tutor app (Remotion + TTS)

By [@YarHmm](https://x.com/YarHmm) · [original post](https://x.com/YarHmm/status/2103505435802341449)

- **Model:** Author's follow-up (Arabic): used Claude with Opus 5.5, medium to high effort.
- **Toolchain:** Remotion for previews; voice from Gemini 3.8 Flash TTS; about 1.5 hours of conversation.
- **Reported cost:** About a quarter of a five-hour usage window.
- **Clip:** About 55.7 s, 1080x1920 vertical.

**Method summary (our words, from what the author described)**

```text
Asked Opus 5.5 (medium to high effort) to build an Arabic, right-to-left vertical promo for an AI coding-tutor app in Remotion so it could be previewed quickly, limiting sound effects to camera shutter and lens sounds, with narration generated by a separate text-to-speech model.
```

### 13. Kotlin promo generated from the language's website with HyperFrames

By [JetBrains](https://x.com/jetbrains) · [original post](https://x.com/jetbrains/status/2102459650125754812)

- **Model:** Post: "This product video was generated entirely by Claude Opus 5.5".
- **Who posted it:** Posted by JetBrains' own account about its own language; not an apimodels.app customer case.
- **Clip:** About 35 s, 2560x1440.
- **Pitfalls:** Shows that pointing it at a site URL and letting it fetch its own material works.

**Method summary (our words, from what the author described)**

```text
Installed the HyperFrames skills and pointed Opus 5.5 at kotlinlang.org, letting it gather the material and produce the product video on its own.
```

### 14. Promo animation for a 3D-printed DIN-rail enclosure it designed first

By [@VectorCrossProd](https://x.com/VectorCrossProd) · [original post](https://x.com/VectorCrossProd/status/2104093497561436573)

- **Model:** Post: "Claude Opus 5.5 created a 3D printable enclosure for an existing PCB. Then it created this promo video for it."
- **Toolchain:** Claude Code; the PCB enclosure, printable STL and the promo animation all came from prompts.
- **Clip:** 10 s, 1920x1080.

**Method summary (our words, from what the author described)**

```text
In one Claude Code session: asked Opus 5.5 to design a 3D-printable enclosure for an existing PCB, then to make a promo animation for that enclosure.
```

### 15. Notion column-permissions trailer in Remotion: 2 days, 33 versions

By [@wustep](https://x.com/wustep) · [original post](https://x.com/wustep/status/2104610435571884086)

- **Model:** Author's note: "with @claude's opus 5.5 [xhigh]".
- **Reported cost:** About $400 of Claude credit at API rates; the author says a $100-a-month plan would also cover it.
- **Links:** Process document: notion.notion.site/column-permissions-trailer
- **Who posted it:** Made by a Notion employee for a Notion feature; not an apimodels.app customer case.
- **Clip:** About 31.9 s, 1920x1080.
- **Pitfalls:** A real brand film is far from one-shot: 33 versions before sign-off.

**Prompt not published: method only**

### 16. Shotbase launch video with HyperFrames, under 20 minutes

By [@Miguel07Code](https://x.com/Miguel07Code) · [original post](https://x.com/Miguel07Code/status/2102441708395041170)

- **Model:** Post: "Claude Opus 5.5 1-shotted the launch video of @shotbaseapp using @HyperFrames_ in less than 20 mins".
- **Clip:** About 58 s, 1920x1080, about 150K views.

**Prompt not published: method only**

### 17. Cosmos moodboard-app promo, two prompts in HyperFrames

By [@kaolti](https://x.com/kaolti) · [original post](https://x.com/kaolti/status/2103481296018092204)

- **Model:** Post: "Opus 5.5 is probably the biggest jump in output quality I've seen lately. Built this in @HyperFrames_ for Cosmos, 2 prompts only. No references at all."
- **Clip:** 39.5 s, 1920x1080.

**Prompt not published: method only**

### 18. UX case-study animation explaining design decisions

By [@moguzbulbul](https://x.com/moguzbulbul) · [original post](https://x.com/moguzbulbul/status/2104206095313215591)

- **Model:** Post: "I was struggling to explain my UX decisions in interviews, so I made this kind of animation with Opus 5.5".
- **Clip:** About 42 s, 1600x1200, about 200K views.

**Prompt not published: method only**

## Explainer & Education

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/explainer](https://apimodels.app/claude-opus-5-5-video-prompts/explainer)

### 19. Manim lesson on derivatives with edge-tts narration

By [@LinearUncle](https://x.com/LinearUncle) · [original post](https://x.com/LinearUncle/status/2103128559174971663)

- **Model:** Post (Chinese): Opus 5.5 + Manim made a lesson on derivatives; "Opus 5.5 is clearly very good at Manim".
- **Toolchain:** Claude Code with Manim, LaTeX and edge-tts installed locally.
- **Clip:** 457 s (about 7.6 minutes), 1920x1080.
- **Pitfalls:** No length was given and it planned a 7.6-minute lesson; add a time limit if you need one.

**Prompt (the author's own words)**

```text
请用Manim给我制作一个导数概念学习的视频，要求通俗易懂，并且有例子，引人思考。配音使用edge-tts
```

### 20. 12-minute Chinese explainer "What is a Transformer", rendered in JS

By [@dotey](https://x.com/dotey) · [original post](https://x.com/dotey/status/2103683057689522564)

- **Model:** Post (Chinese): made with Claude Code + Opus 5.5.
- **Clip:** About 732 s (12.2 minutes), 1920x1080, about 190K views.
- **Pitfalls:** A short prompt with wide autonomy (any tool, web search allowed); the model chose the length and structure itself.

**Prompt (the author's own words)**

```text
帮我用js制作一个视频，主题是：什么是 Transformer
要深入浅出，让高中生也能看得懂，不仅high level说的清楚，也要有细节，包括注意力机制，甚至一些数学概念

你可以用任何工具或者安装工具，可以联网检索

请给我惊喜
```

### 21. Epic chronicle of Chinese civilization, frame-rendered with FFmpeg

By [@dotey](https://x.com/dotey) · [original post](https://x.com/dotey/status/2103964025683927166)

- **Model:** Post title: "Chinese Civilization by Opus 5.5" (Chinese).
- **Clip:** About 217 s, 1920x1080.
- **Pitfalls:** A model Chinese director brief: the score is the clock, the beat grid and shot table come before rendering, dates are checked before delivery, and real modern people are kept out of frame.

**Prompt (the author's own words)**

```text
做一支史诗编年片《中华文明史》，可以写代码逐帧渲染，再用 ffmpeg 合成。
配乐当时钟：五声调式，乐器从骨笛、编钟一路演进到管弦，BPM 随年代加快，所有切点踩拍。
宣纸白描和玄底泥金两种画风交替；每卷一个主色和一套随时代演变的纹样（彩陶纹 → 饕餮纹 → 云气纹 → 卷草纹 → 缠枝纹 → 回纹）。
每镜一个按词组出现的书法大字关键词，配一幅线稿。全片 HUD：左上朱印卷号，右侧竖排朝代名，底部卷轴时间尺和年份计数。
卷交界用朱印盖下、鼓钟重击的冲击转场。先定拍点网格和分镜表，再渲染。
地图只画示意，不画近现代真实人物，年代核对后再交付。
```

### 22. Explaining recursion in nine radically different video styles

By [@emollick](https://x.com/emollick) · [original post](https://x.com/emollick/status/2103688362960019567)

- **Model:** Post by Ethan Mollick: "I had Claude Opus 5.5 make…".
- **Clip:** About 75 s, 1920x1080, about 70K views.
- **Pitfalls:** A concept plus one structural rule (every section changes style) works better than a pile of adjectives.

**Prompt (the author's own words)**

```text
A video explaining recursion, where every explanation about recursion has a radically different video style, make this self-referential & clever & fast moving.
```

### 23. Negroni recipe motion graphic from a single photo

By [@Ror_Fly](https://x.com/Ror_Fly) · [original post](https://x.com/Ror_Fly/status/2102853258582880547)

- **Model:** Post: "Opus 5.5 rendered this in HTML from (1) image".
- **Toolchain:** One reference photo uploaded, then an HTML/JS animation, then recorded. Typos in the prompt are the author's and kept as published.
- **Clip:** 30 s, 1080x1080.
- **Pitfalls:** The typical image-in, animation-out use: Opus 5.5 can read a photo, not a video.

**Prompt (the author's own words)**

```text
We're going to try a little test. Do you think you could render a recipe motion graphic animation using javascript or html (w/e you think will produce the best) to show the full recipe from start to finish (empty glass to completed cocktail) - Explainer video style - Showing the recipe ingreidents + measurements as they're going into the cup. Should be a 30s video.
```

### 24. Interactive Raptor 3 rocket engine you can take apart (screen recording)

By [@konstantinsaifo](https://x.com/konstantinsaifo) · [original post](https://x.com/konstantinsaifo/status/2104094723887501736)

- **Model:** Post: "I asked Claude Opus 5.5 to explain how a rocket engine works by building an interactive Raptor 3".
- **Links:** Live page: airsup.ai/rocket-engine. Same author, fusion-reactor version: x.com/konstantinsaifo/status/2104216976801587629
- **Clip:** About 34.7 s, 1920x1080, about 1.15M views.

**Method summary (our words, from what the author described)**

```text
Asked Opus 5.5 to explain how a rocket engine works by building an interactive Raptor 3 in the browser that you can take apart: cut it open, trace oxygen and methane through the two turbopumps, and throttle it to watch the shock diamonds move. The video is a screen recording of that page.
```

### 25. Twin-paradox explainer in Japanese, paper-cutout style, 1,395 Canvas frames

By [@masahirochaen](https://x.com/masahirochaen) · [original post](https://x.com/masahirochaen/status/2102722719502704941)

- **Model:** Post (Japanese): "made a Japanese version with Claude Code x Opus 5.5".
- **Toolchain:** Canvas rendered 1,395 frames and converted them to MP4; rendering took about 2 minutes.
- **Clip:** 46.5 s, 1080x1080.

**Prompt not published: method only**

### 26. 3Blue1Brown-style explainer on variational autoencoders

By [@ng169onX](https://x.com/ng169onX) · [original post](https://x.com/ng169onX/status/2103183904563998809)

- **Model:** Post: "Opus 5.5 can now make animated explainer videos end to end, in a style similar to 3Blue1Brown".
- **Clip:** About 5.6 minutes, 1920x1080 (low reach, about 1.5K views).

**Prompt not published: method only**

### 27. Three-minute history of AI, 100% code in Remotion

By [@kimmonismus](https://x.com/kimmonismus) · [original post](https://x.com/kimmonismus/status/2102844654169575547)

- **Model:** Post: "This 3-minute film was made 100% in code by Claude in Claude Code", with Opus 5.5.
- **Reported cost:** About 1 hour and 7% of a weekly usage allowance.
- **Clip:** About 180 s, 1920x1080, about 200K views.

**Prompt not published: method only**

### 28. Black-hole lensing lab polished by reviewer and fixer agents overnight

By [@Voxyz_ai](https://x.com/Voxyz_ai) · [original post](https://x.com/Voxyz_ai/status/2103117246860345550)

- **Model:** Post: "I asked Opus 5.5 to explain gravitational lensing…".
- **Reported cost:** 5 hours 28 minutes in total, about $90 at API prices.
- **Clip:** About 21.8 s, 3840x2160.
- **Pitfalls:** The most complete public example of the review-and-fix loop.

**Prompt not published: method only**

### 29. 4.6 billion years of Earth's evolution (Bilibili)

By 第十一次元 · [original post](https://www.bilibili.com/video/BV1Vfau6iE9Q/)

- **Model:** Bilibili title: "Opus 5.5's miracle" (Chinese).
- **Clip:** 290 s, 2560x1440, about 80K plays.

**Prompt not published: method only**

### 30. "The Beauty of Group Theory" promo film (Bilibili)

By sadssxa · [original post](https://www.bilibili.com/video/BV12Zhm6oE6m/)

- **Model:** Bilibili title: "opus5.5 has arrived: The Beauty of Group Theory promo" (Chinese).
- **Clip:** 263 s, 1920x1080, about 340K plays.

**Prompt not published: method only**

## Directing Video Models

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/storyboard-to-video](https://apimodels.app/claude-opus-5-5-video-prompts/storyboard-to-video)

### 31. Infinite zoom through vintage collage worlds, generated assets composited in code

By [@koldo2k](https://x.com/koldo2k) · [original post](https://x.com/koldo2k/status/2103129343253778767)

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

### 32. Short film made through the Krea MCP in 10 minutes for $8

By [@angrypenguinPNG](https://x.com/angrypenguinPNG) · [original post](https://x.com/angrypenguinPNG/status/2102829318875537683)

- **Model:** Post: "Opus 5.5 has genuine creative taste. it one-shotted this video for $8 in 10 minutes using the Krea MCP".
- **Reported cost:** About $8 and 10 minutes.
- **Clip:** About 30 s, 1280x720.

**Prompt not published: method only**

### 33. Japanese vertical review short: Opus diagrams, TTS voice, Seedance 2.5 opening

By [@masahirochaen](https://x.com/masahirochaen) · [original post](https://x.com/masahirochaen/status/2103872865770836012)

- **Model:** Post (Japanese): diagram animation by Claude Opus 5.5, voice by Gemini 3.8 Flash TTS, opening face and voice by Seedance 2.5.
- **Clip:** About 57 s, 1080x1920.

**Prompt not published: method only**

### 34. Eight-stage siege game in 2 hours, then a 60-second trailer from video models

By [@KanaWorks_AI](https://x.com/KanaWorks_AI) · [original post](https://x.com/KanaWorks_AI/status/2102684116525437206)

- **Model:** Post: "Code: Claude Opus 5.5 Video: Seedance 2.5 & MInimax H3 @capcutapp_jp".
- **Clip:** About 60 s, 1920x1080.

**Prompt not published: method only**

## Music Video

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/music-video](https://apimodels.app/claude-opus-5-5-video-prompts/music-video)

### 35. "Claude Pop" music video: a dictated brief and a 12-hour autonomous run

By [@donaldjewkes](https://x.com/donaldjewkes) · [original post](https://x.com/donaldjewkes/status/2102801274173587569)

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

### 36. 1990s demoscene demo in C/C++ and OpenGL, synced to an S3M track

By [@gandamu_ml](https://x.com/gandamu_ml) · [original post](https://x.com/gandamu_ml/status/2102919394775220530)

- **Model:** Post: "Opus 5.5 just one-shot this 90s-style demoscene demo for me… genuine one-shot (in colloquial X post sense - single prompt)".
- **Toolchain:** C/C++ with OpenGL, analysing and playing the S3M module for sync; the clip is a screen recording.
- **Source material:** Music: "Second Reality" by Purple Motion (Future Crew), supplied by the creator; copyright belongs to its authors. Shown here only as the creator's own demo, via the original post.
- **Clip:** About 382.7 s (6.4 minutes), 1920x1080.

**Prompt excerpt (the full prompt is in the original post)**

```text
I would like you to create a kickass, impressive 1990s style demoscene demo using this S3M track as the music. Prior to getting to work, please see how to best play and analyze the S3M track. This will be important since synchronization of effects and appropriateness of scenes to the musical vibe …
```

### 37. "I'm Upping My P(Doom)" music video painted with p5.brush and parallel subagents

By [@other__reality](https://x.com/other__reality) · [original post](https://x.com/other__reality/status/2102514581684052169)

- **Model:** Post: "Claude Opus 5.5 has the best visual design of any model I have tested so far"; repo README: first generation Claude Opus 5.5 (Medium), second generation Claude Opus 5.5.
- **Toolchain:** Opus wrote an ANIMATION_GUIDE.md for parallel subagents (reported as seven) and a STORYBOARD.md; nine chapters, one file each; studio.html draws with p5.js and p5.brush; render.mjs renders frames in headless Chrome and encodes with FFmpeg. All animation took about 45 minutes.
- **Reported cost:** About 10% of a Max 5x weekly allowance (as relayed by a forum post).
- **Source material:** Music: the song comes from a 2024 YouTube video and is not the creator's own (README: "as far as I could find"); copyright belongs to its original authors.
- **Links:** YouTube: youtu.be/8j-hR4fJywU. Code: github.com/JohnHeibel/PDoomVideo (no licence stated, link only). Starter template by the same author: github.com/JohnHeibel/ClaudeAnimationBase (MIT).
- **Clip:** About 156.6 s, 1920x1080, about 2.84M views.

**Method summary (our words, from what the author described)**

```text
Gave Claude Code the lyrics and the audio. Pass one (medium effort): use the Clawd character and give every lyric line an interesting visual and transition, with no scene ideas specified. Pass two (xhigh): switch to p5 brush strokes, make the scenes more interesting and have each scene flow into the next.
```

### 38. The same brief re-run with Midjourney and a moodboard

By [@anabology](https://x.com/anabology) · [original post](https://x.com/anabology/status/2103534482930491441)

- **Model:** Post: "Gave Opus 5.5 donald's prompt, Midjourney, and a moodboard 12 hours later, woke up to this".
- **Clip:** About 306 s, 1920x1080, about 19.75M views (the most viewed case here).
- **Pitfalls:** The same brief with different reference material produced a completely different film.

**Method summary (our words, from what the author described)**

```text
Re-ran @donaldjewkes' "Claude Pop" brief (see the card above) almost unchanged, giving Opus 5.5 access to Midjourney and a moodboard, and let it work for 12 hours.
```

### 39. "Stroke of a Pen" Bitcoin music video storyboarded by an agent swarm

By [@bradmillscan](https://x.com/bradmillscan) · [original post](https://x.com/bradmillscan/status/2103108967194833310)

- **Model:** Post: "I told Opus 5.5 to read my Bitcoin & monetary-history wikis & make a music video with code only".
- **Toolchain:** Song generated with ElevenLabs; a swarm of agents storyboarded and coded about 75 shots on the beat for a 3 min 23 s vertical video. In round one it rewrote the skeletal rig.
- **Clip:** About 202.7 s, 1080x1920, about 190K views.
- **Pitfalls:** Character animation is a weak spot of code animation and needs its own iteration on the rig.

**Method summary (our words, from what the author described)**

```text
Told Opus 5.5 to read the creator's Bitcoin and monetary-history wikis and make a music video with code only; the song was generated separately. Two revision rounds followed: the first because the characters looked like crude stick figures, the second to add Matrix-style code elements.
```

### 40. Mid-Autumn paper-collage short: p5.brush frames over generated backdrops

By [@ring_hyacinth](https://x.com/ring_hyacinth) · [original post](https://x.com/ring_hyacinth/status/2102986085328716066)

- **Model:** Post (Chinese): "a small animation made with Opus 5.5".
- **Clip:** About 40 s, 1920x1080.
- **Pitfalls:** Person on script and music, model on animation: a steady split of work.

**Prompt not published: method only**

### 41. Suno-sung song with lyrics and MV by Opus 5.5 (Bilibili)

By syline · [original post](https://www.bilibili.com/video/BV1qihf6rE6f/)

- **Model:** Bilibili title: "Suno arrangement and vocals, Opus 5.5 lyrics, then the MV it made" (Chinese).
- **Clip:** 162 s, 1920x1080 (about 3K plays; thin evidence).

**Prompt not published: method only**

## Narrative & History Short

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/short-film](https://apimodels.app/claude-opus-5-5-video-prompts/short-film)

### 42. Two-minute sand animation of 250 years of U.S. history

By [@Michaelzsguo](https://x.com/Michaelzsguo) · [original post](https://x.com/Michaelzsguo/status/2102592355165782312)

- **Model:** Post (Chinese): Opus 5.5, one prompt from start to finish with no edits.
- **Clip:** 120 s, 1920x1080, about 76K views.
- **Pitfalls:** The author stresses that neither Blender nor Three.js was used.

**Prompt (the author's own words)**

```text
Make a 2-minute sand animation that tells the story of 250 years of U.S. history. Keep it lively, engaging, and tasteful. Add appropriate background music and sound design.
```

### 43. Pelican riding a bicycle, theatrical cut with a custom GPU ray-marcher

By [@AxtonLiu](https://x.com/AxtonLiu) · [original post](https://x.com/AxtonLiu/status/2103119648271290566)

- **Model:** Post (Chinese): Opus 5.5, "Pelican riding a bicycle" theatrical cut, generated from one prompt.
- **Toolchain:** No 3D models, textures or audio assets: Opus wrote its own GPU ray-marcher, and the pelican, bicycle, pier, sea, sky and score are all computed in code; 1,140 frames at 40 samples per frame.
- **About the prompt:** The original uses full-width Chinese quotation marks around the title; they are shown as straight quotes here. Wording unchanged.
- **Clip:** 38 s, 1920x1080.
- **Pitfalls:** Give it a generous time budget ("take a whole day if you need").

**Prompt (the author's own words)**

```text
每次一个新的模型出来呢，大家都让它去画 "鹈鹕骑自行车" 来判断这个模型的空间能力，基本上都是用 HTML、SVG 来画动画。当我实在看得都有审美疲劳了，我希望你能画一个最复杂、最精细、最精美的 "鹈鹕骑自行车"的动画视频，你可以用任何的技术，不用着急，画一天都可以。
```

### 44. Tengwang Pavilion on Mid-Autumn night, one WebGL2 shader (topic chosen by the model)

By [@DemitiyaGeekzen](https://x.com/DemitiyaGeekzen) · [original post](https://x.com/DemitiyaGeekzen/status/2103517910274818523)

- **Model:** Post (Chinese): Opus 5.5 is strong; I let it pick its own topic for an interactive page and a video.
- **Toolchain:** As the model described it: one WebGL2 shader computes every pixel with no images; sun and moon paths from Nanchang's latitude; the pavilion facade in Canvas 2D; all sound synthesised live in Web Audio, the guzheng via a Karplus-Strong string model; also delivered an interactive page (scrub the timeline, float lanterns, record video in-page).
- **Clip:** 30 s, 1920x1080 (low reach, about 500 views).

**Prompt (the author's own words)**

```text
用你最强的思维和能力，根据对我的了解，自行寻找我可能喜欢的主题，制作一个30s的视频还有互动html，尽可能的展示你的前端能力！
```

### 45. Porco Rosso-style sunset dogfight recreated in Three.js, from one line

By [@NFT_Chen](https://x.com/NFT_Chen) · [original post](https://x.com/NFT_Chen/status/2103401780117938683)

- **Model:** Post (Chinese): Opus 5.5 used Three.js to recreate the classic dogfight from Hayao Miyazaki's Porco Rosso. The author says this one line was the whole prompt.
- **Source material:** Homage: Porco Rosso, Hayao Miyazaki / Studio Ghibli. The film and its designs belong to their rights holders; shown here only as the creator's fan recreation, via the original post.
- **Links:** Repost with the video: x.com/NFT_Chen/status/2103882415299350878 (about 14 s).
- **Clip:** About 51K views on the original post.

**Prompt (the author's own words)**

```text
用 web3D 复刻宫崎骏《红猪》日落海面上的经典空战：白绿红涂装战斗机、紫色积云、海面反光、吉卜力运镜，画面写 just breathe.
```

### 46. Austerlitz, 2 December 1805: a five-minute film made entirely in code

By [@WinterArc2125](https://x.com/WinterArc2125) · [original post](https://x.com/WinterArc2125/status/2103116235009347650)

- **Model:** Post: "OPUS 5.5 IS CRAZY… I just had it turn that morning into a complete 5 minute film. All code."
- **Reported cost:** 90 minutes to set up, 4 hours to render, about $40 of cloud-agent credit.
- **Links:** Code: github.com/WinterArc21/Battle-of-Austerlitz-Film (no licence stated, link only).
- **Clip:** About 301 s, 1920x1080, 24fps, about 640K views.
- **Pitfalls:** Long films need layers: narration beats, then shot timing, then sound derived from the picture.

**Prompt not published: method only**

### 47. Low-poly 3D retelling of "The Taoist of Laoshan"

By [@wshuyi](https://x.com/wshuyi) · [original post](https://x.com/wshuyi/status/2103308292613345504)

- **Model:** Post (Chinese): Opus 5.5 made the 3D film directly; this time run in Claude Code with Opus 5.5.
- **Links:** Earlier film by the same author, "The Feast at Hong Gate": x.com/wshuyi/status/2103101793584796090
- **Clip:** About 359 s, 1920x1080.

**Prompt not published: method only**

### 48. "Slumped on a bench, watching the blast" meme turned into a shader animation (Bilibili)

By 一起Vibe · [original post](https://www.bilibili.com/video/BV1jyaA6QEoH/)

- **Model:** Bilibili title: "Opus 5.5 turned … into an animation" (Chinese).
- **Reported cost:** About 40% of a 20x plan's weekly allowance.
- **Clip:** 42 s, 1080x1440, about 170K plays.

**Prompt not published: method only**

## 3D, Blender & Shader

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/3d-blender](https://apimodels.app/claude-opus-5-5-video-prompts/3d-blender)

### 49. Market Street, San Francisco, the afternoon before the 1906 earthquake, in Blender

By [@alexalbert__](https://x.com/alexalbert__) · [original post](https://x.com/alexalbert__/status/2102466523164274839)

- **Model:** Post: "I've been on a Blender kick with Opus 5.5. Its better 3D modeling and vision mean you can build an entire world from a single prompt."
- **Who posted it:** Posted by an Anthropic employee.
- **Clip:** About 8 s, 960x680, about 160K views.
- **Pitfalls:** Needs local Blender with Python and web access. The pattern to copy: build a sourced data file first, then reusable generators, so every building traces back to data.

**Prompt excerpt (the full prompt is in the original post)**

```text
Recreate Market Street, San Francisco as it stood on April 17, 1906, the afternoon before the earthquake, in Blender.
Scope: the Ferry Building up Market to Fifth Street, including the Palace Hotel, the Call Building, the Chronicle Building, Lotta's Fountain and the Emporium.
Before modeling …
```

### 50. Same procedural Blender shot: Opus 5.5 vs GPT-6 Astra

By [@Stefan_3D_AI](https://x.com/Stefan_3D_AI) · [original post](https://x.com/Stefan_3D_AI/status/2102471841046786153)

- **Model:** Post: "First Opus 5.5 vs GPT-6 Astra test is 3D".
- **Reported cost:** Opus 5.5: 35 minutes, 199.6K output tokens, about $13.3. GPT-6 Astra: 28 minutes, 56.6K output tokens, about $14.5 (author's figures).
- **Pitfalls:** Opus 5.5 writes many more output tokens at a lower unit price; budget for output.

**Method summary (our words, from what the author described)**

```text
One prompt given to both Opus 5.5 and GPT-6 Astra: build a 10-second shot in Blender only, fully procedural, render it, and record a timelapse of the build.
```

### 51. Octopus modelled, textured, rigged and animated in Blender in about 2 hours (YouTube)

By Bad Decisions Studio · [original post](https://www.youtube.com/watch?v=6ZHZ9aCZIR4)

- **Model:** Video description: "Claude Opus 5.5 just dropped… It modelled, textured, rigged and animated an octopus in Blender from scratch in about two hours".
- **About the prompt:** The prompt is shown in the video and was not transcribed word for word; this card summarises it.

**Method summary (our words, from what the author described)**

```text
Asked Opus 5.5 to model, texture, rig and animate an octopus in Blender from scratch; it took about two hours. The video compares the result with GPT-6 Astra.
```

### 52. GPU fluid-simulated campfire film in JavaScript, self-critiqued about 40 times

By [@NathanWilbanks_](https://x.com/NathanWilbanks_) · [original post](https://x.com/NathanWilbanks_/status/2103881538592981110)

- **Model:** Post: "I asked opus 5.5 in @agnt_gg for the most realistic fire it could build using ONLY javascript".
- **Toolchain:** A 3D fluid simulation on the GPU with flame colour from blackbody radiation; the review loop caught the fire dying out, ring artefacts on the ground and embers that looked like cheese slices; sound driven by per-frame flame brightness; one HTML file, one conversation.
- **Clip:** 38 s, 1920x1080 (low reach, about 1K views).

**Method summary (our words, from what the author described)**

```text
Asked Opus 5.5 for the most realistic fire it could build using only JavaScript, then had a vision model critique each rendered frame like a VFX supervisor, fixed the issues and repeated, about 40 rounds, before rendering a scripted shot offline frame by frame.
```

### 53. Hand-scribbled "Opus5" turned into a 3D boxing animation, packaged as a skill

By [@MinLiBuilds](https://x.com/MinLiBuilds) · [original post](https://x.com/MinLiBuilds/status/2102756822990180387)

- **Model:** Post (Chinese): when Opus 5.5 finished this animation, I literally stood up.
- **Source material:** The animation depicts real public figures (labelled Dario Amodei and Sam Altman) in a boxing match. It is the creator's own work, shown here via the original post.
- **Links:** Skill: github.com/limin112/min-skill (no licence stated, link only).
- **Clip:** About 103 s, 1920x1080.

**Prompt not published: method only**

### 54. Windmill modelled, rigged, textured and animated in Blender via MCP in 15 minutes

By [Higgsfield](https://x.com/higgsfield_ai) · [original post](https://x.com/higgsfield_ai/status/2102453658889953717)

- **Model:** Post: "Claude Opus 5.5 + Higgsfiled built this animated windmill in Blender in 15 minutes".
- **Who posted it:** The vendor's own promotional post.
- **Links:** Longer tutorial: YouTube, "Claude Opus 5.5 + Blender: The Ultimate 3D AI Pipeline (Higgsfield)", youtube.com/watch?v=Xeq-BwMVBUA (Aaron Randall).
- **Clip:** About 21 s, 1080x1920.

**Prompt not published: method only**

## Editing & Post-Production

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/video-editing](https://apimodels.app/claude-opus-5-5-video-prompts/video-editing)

### 55. Raw talking-head clip cut into a punchy captioned edit

By [@sab8a](https://x.com/sab8a) · [original post](https://x.com/sab8a/status/2103144778481475686)

- **Model:** Post: "Opus 5.5 + OpenEdit".
- **Reported cost:** About 1 h 51 min; about $23 of tokens plus about $49 of generation-API usage.
- **Clip:** About 37 s, 1920x1080.

**Prompt (the author's own words)**

```text
Cut a raw talking-head clip into a punchy, fun edit with subtitles, graphics and music
```

### 56. Opus 5.5 driving After Effects to post-process generated clips (two tests)

By [@aicreataro](https://x.com/aicreataro) · [original post](https://x.com/aicreataro/status/2103757144789221819)

- **Model:** Post (Japanese): had Opus 5.5 operate After Effects.
- **Toolchain:** Author's conclusions: rough instructions still give decent results, and the output is saved as an .aep project a person can edit afterwards; skeleton data removes manual tracking, but deciding when to show the tracked effect still takes a human.
- **Links:** Test 1: x.com/aicreataro/status/2102656273112326609 (15 s, 1440x1280).
- **Clip:** Test 3: about 32 s, 1920x1080, about 380K views.

**Method summary (our words, from what the author described)**

```text
Test 1: gave Opus 5.5 a 15-second clip generated by MiniMax H3 and had it drive After Effects to retime the cuts to the beat and add one effect per section (particles, light rays, kaleidoscope, datamosh). Test 3: Suno wrote the track, MiniMax H3 made a character dance to it, and Opus extracted full-body skeleton data frame by frame from the dance and fed it into After Effects to drive text, light and camera.
```

### 57. A full YouTube video edited by Opus 5.5 through a DaVinci Resolve MCP

By [@NickSpisak_](https://x.com/NickSpisak_) · [original post](https://x.com/NickSpisak_/status/2103511092043628807)

- **Model:** Post: "Claude Opus 5.5 edited my entire YouTube video".
- **Clip:** About 539 s (9 minutes), 3840x2160.

**Prompt not published: method only**

### 58. Grok-generated dance clip recut and packaged by Opus 5.5

By [@Gorden_Sun](https://x.com/Gorden_Sun) · [original post](https://x.com/Gorden_Sun/status/2104009748874141941)

- **Model:** Post (Chinese): video 1 is the Opus 5.5 edit, video 2 is the raw Grok output.
- **Clip:** Two clips of about 15 s each (1920x1080 and 960x960).

**Prompt not published: method only**

### 59. Opus played its own game and cut the best moments into a demo reel

By [@rehan_shei](https://x.com/rehan_shei) · [original post](https://x.com/rehan_shei/status/2103755997533839416)

- **Model:** Post: "I turned this into a full game with unity cli + opus 5.5, also opus did this full demo video, it played the game with multiple characters and spliced together the best bits".
- **Links:** Playable: rehan-remade.github.io/hollow-crown/
- **Clip:** About 29.7 s, 1920x1080.

**Prompt not published: method only**

### 60. Demo reel for a 110K-rigid-body WebGPU physics solver

By [@nybobs](https://x.com/nybobs) · [original post](https://x.com/nybobs/status/2103385835328680050)

- **Model:** Post: "Opus 5.5 even put together this whole demo reel video just from a single text prompt in Claude Code".
- **Links:** Code (MIT): github.com/sbobyn/three-avbd. Live: three-avbd.vercel.app
- **Clip:** About 26 s, 1920x1080.

**Prompt not published: method only**

## FAQ

### Can Claude Opus 5.5 generate a video by itself?

Not as pixels. Anthropic's documentation lists text and image input and text output for its current models and states that Claude cannot generate, produce or edit images. Every video on this page was either rendered from code Opus 5.5 wrote (HTML and Canvas, Remotion, HyperFrames, Manim, Three.js, Blender Python and so on) by a headless browser or renderer plus FFmpeg, or made by video models it directed through an API and then cut together. In a chat window with no shell you get the animation as an HTML page you can open and screen-record; producing an MP4 directly needs an agent environment that can run commands.

### Can Opus 5.5 watch a video I give it?

No. It has no video input, and an animated GIF is read as its first frame only. The workaround every editing case here uses is to have it extract frames (and transcribe the audio) with FFmpeg and look at those stills. It reviews its own renders the same way.

### Do the "one prompt" videos really come from one sentence?

Some do: the 15-second showreel prompt is a single sentence. Many of the widely shared cases ran on briefs of thousands of characters, with skills installed in advance, API keys for voice, music or video models, and runs of one to twelve hours, sometimes with dozens of review rounds. Costs on these cards are what each creator reported, from about $2 for a 26-second launch clip to around $400 of credits across 33 versions of a product trailer. Every card is marked as an original prompt, our summary of a method the creator described, or a case whose prompt was never published.

### What do I need installed to reproduce these?

For an MP4: an agent that can run commands (Claude Code or a similar tool), Node.js, Playwright or another headless Chromium, and FFmpeg. The UI-motion templates also use Python with numpy to analyse the soundtrack; Manim cases need Manim and LaTeX; Blender cases need Blender; music-video and director cases usually need API keys for voice, music or video models.

### Which approach should I start with?

For a product clip or a UI animation, start with the single-HTML route or a framework such as Remotion; both are on this page with full prompts. For a lesson, use Manim. For anything with real people, natural motion or physics, let Opus direct a video model and keep a cost gate in the brief. For footage you already shot, use the editing route and expect to make the pacing calls yourself.

### How much does Opus 5.5 cost for this on apimodels.app?

$2.40 per 1M input tokens and $12 per 1M output tokens (Anthropic lists $4 / $20), billed per token with failed calls free, through /v1/messages or the OpenAI-compatible /v1/chat/completions, so Claude Code and other Anthropic-compatible agents connect with a base URL and a key. Video work is output-heavy: one creator's Blender test wrote about 200K output tokens, roughly $2.40 of output at our rate. Our own single-HTML test through apimodels.app was one call of 31,786 output tokens, billed $0.368, for a 12-second 1280x720 promo. If Opus directs video models, those calls are billed separately per model; Seedance 2.5, MiniMax H3, Kling V3 and Wan 3.0 run under the same key.

## Credits, copyright and licence

- **The videos belong to their creators.** This repository hosts and re-uploads none of them; every case links to the original post.
- **Prompts are quoted with credit and a link.** Authors who explicitly invited reuse (@twoclipping, @op7418, @alex_prompter, @majidmanzarpour, @koldo2k) are quoted in full; other published prompts are quoted in full when short and excerpted when long; unpublished prompts are never filled in. Check the original post before using one commercially.
- Some cases use third-party music, pay homage to an existing film or show real people; those cases name the source material.
- **Our own material** (the brief-writing notes, the six workflows and templates, the prompt and code in `our-run/`, and the case write-ups) is licensed under [CC BY 4.0](LICENSE). Please credit apimodels.app with a link.
- If you made one of these videos and want it removed or the credit corrected, open an issue and we'll handle it promptly.

Call Claude Opus 5.5 through apimodels.app: [model page](https://apimodels.app/models/claude-opus-5-5) · [API docs](https://apimodels.app/docs/llm)
