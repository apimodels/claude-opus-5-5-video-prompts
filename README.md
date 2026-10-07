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

60 cases published between 22 September and 3 October 2026, each checked against the original post. Each case has its own page under [cases/](cases) with the creator's notes, the toolchain and the prompt, and every page says whether the text is the author's own prompt, an excerpt, our summary of their method, or unpublished. Costs and times are as the creators reported them.

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

| # | Case | Creator | Prompt |
| --- | --- | --- | --- |
| 1 | [The 15-second motion-designer showreel](cases/motion-graphics/01-the-15-second-motion-designer-showreel.md) | [@stephanlivera](https://x.com/stephanlivera) | Full prompt |
| 2 | [Showreel brief that lists the techniques](cases/motion-graphics/02-showreel-brief-that-lists-the-techniques.md) | [@lukasersil](https://x.com/lukasersil) | Excerpt |
| 3 | [One shape morphs through a dozen UI states on the beat](cases/motion-graphics/03-one-shape-morphs-through-a-dozen-ui-states-on-the-beat.md) | [@twoclipping](https://x.com/twoclipping) | Full prompt |
| 4 | [One-take keynote-style launch film with liquid glass and an iris transition](cases/motion-graphics/04-one-take-keynote-style-launch-film-with-liquid-glass-and-an.md) | [@twoclipping](https://x.com/twoclipping) | Full prompt |
| 5 | [Minimal product launch: scanning wall of vertical clips, cut on the beat](cases/motion-graphics/05-minimal-product-launch-scanning-wall-of-vertical-clips-cut.md) | [@twoclipping](https://x.com/twoclipping) | Full prompt |
| 6 | [Mobile-game reward and gacha reveal (Three.js toon shading + GSAP)](cases/motion-graphics/06-mobile-game-reward-and-gacha-reveal-three-js-toon-shading.md) | [@op7418](https://x.com/op7418) | Full prompt |
| 7 | [Pixel-art wizard casting a spell, pure Canvas code](cases/motion-graphics/07-pixel-art-wizard-casting-a-spell-pure-canvas-code.md) | [@majidmanzarpour](https://x.com/majidmanzarpour) | Full prompt |
| 8 | [Colourful remix of the UI-morph template that exposed the default render pipeline](cases/motion-graphics/08-colourful-remix-of-the-ui-morph-template-that-exposed-the.md) | [@__morse](https://x.com/__morse) | Method summary |

## Product Launch

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/product-launch](https://apimodels.app/claude-opus-5-5-video-prompts/product-launch)

| # | Case | Creator | Prompt |
| --- | --- | --- | --- |
| 9 | [Punchy launch video for an inference startup, from one line](cases/product-launch/09-punchy-launch-video-for-an-inference-startup-from-one-line.md) | [@deedydas](https://x.com/deedydas) | Full prompt |
| 10 | [Three-step HyperFrames recipe: install the skill, reuse the showreel line, point at your project](cases/product-launch/10-three-step-hyperframes-recipe-install-the-skill-reuse-the.md) | [@thayto_dev](https://x.com/thayto_dev) | Full prompt |
| 11 | [Reusable 30-second business explainer template](cases/product-launch/11-reusable-30-second-business-explainer-template.md) | [@alex_prompter](https://x.com/alex_prompter) | Full prompt |
| 12 | [Arabic vertical promo for an AI coding-tutor app (Remotion + TTS)](cases/product-launch/12-arabic-vertical-promo-for-an-ai-coding-tutor-app-remotion.md) | [@YarHmm](https://x.com/YarHmm) | Method summary |
| 13 | [Kotlin promo generated from the language's website with HyperFrames](cases/product-launch/13-kotlin-promo-generated-from-the-languages-website-with.md) | [JetBrains](https://x.com/jetbrains) | Method summary |
| 14 | [Promo animation for a 3D-printed DIN-rail enclosure it designed first](cases/product-launch/14-promo-animation-for-a-3d-printed-din-rail-enclosure-it.md) | [@VectorCrossProd](https://x.com/VectorCrossProd) | Method summary |
| 15 | [Notion column-permissions trailer in Remotion: 2 days, 33 versions](cases/product-launch/15-notion-column-permissions-trailer-in-remotion-2-days-33.md) | [@wustep](https://x.com/wustep) | Not published |
| 16 | [Shotbase launch video with HyperFrames, under 20 minutes](cases/product-launch/16-shotbase-launch-video-with-hyperframes-under-20-minutes.md) | [@Miguel07Code](https://x.com/Miguel07Code) | Not published |
| 17 | [Cosmos moodboard-app promo, two prompts in HyperFrames](cases/product-launch/17-cosmos-moodboard-app-promo-two-prompts-in-hyperframes.md) | [@kaolti](https://x.com/kaolti) | Not published |
| 18 | [UX case-study animation explaining design decisions](cases/product-launch/18-ux-case-study-animation-explaining-design-decisions.md) | [@moguzbulbul](https://x.com/moguzbulbul) | Not published |

## Explainer & Education

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/explainer](https://apimodels.app/claude-opus-5-5-video-prompts/explainer)

| # | Case | Creator | Prompt |
| --- | --- | --- | --- |
| 19 | [Manim lesson on derivatives with edge-tts narration](cases/explainer/19-manim-lesson-on-derivatives-with-edge-tts-narration.md) | [@LinearUncle](https://x.com/LinearUncle) | Full prompt |
| 20 | [12-minute Chinese explainer "What is a Transformer", rendered in JS](cases/explainer/20-12-minute-chinese-explainer-what-is-a-transformer-rendered.md) | [@dotey](https://x.com/dotey) | Full prompt |
| 21 | [Epic chronicle of Chinese civilization, frame-rendered with FFmpeg](cases/explainer/21-epic-chronicle-of-chinese-civilization-frame-rendered-with.md) | [@dotey](https://x.com/dotey) | Full prompt |
| 22 | [Explaining recursion in nine radically different video styles](cases/explainer/22-explaining-recursion-in-nine-radically-different-video.md) | [@emollick](https://x.com/emollick) | Full prompt |
| 23 | [Negroni recipe motion graphic from a single photo](cases/explainer/23-negroni-recipe-motion-graphic-from-a-single-photo.md) | [@Ror_Fly](https://x.com/Ror_Fly) | Full prompt |
| 24 | [Interactive Raptor 3 rocket engine you can take apart (screen recording)](cases/explainer/24-interactive-raptor-3-rocket-engine-you-can-take-apart-screen.md) | [@konstantinsaifo](https://x.com/konstantinsaifo) | Method summary |
| 25 | [Twin-paradox explainer in Japanese, paper-cutout style, 1,395 Canvas frames](cases/explainer/25-twin-paradox-explainer-in-japanese-paper-cutout-style-1-395.md) | [@masahirochaen](https://x.com/masahirochaen) | Not published |
| 26 | [3Blue1Brown-style explainer on variational autoencoders](cases/explainer/26-3blue1brown-style-explainer-on-variational-autoencoders.md) | [@ng169onX](https://x.com/ng169onX) | Not published |
| 27 | [Three-minute history of AI, 100% code in Remotion](cases/explainer/27-three-minute-history-of-ai-100-code-in-remotion.md) | [@kimmonismus](https://x.com/kimmonismus) | Not published |
| 28 | [Black-hole lensing lab polished by reviewer and fixer agents overnight](cases/explainer/28-black-hole-lensing-lab-polished-by-reviewer-and-fixer-agents.md) | [@Voxyz_ai](https://x.com/Voxyz_ai) | Not published |
| 29 | [4.6 billion years of Earth's evolution (Bilibili)](cases/explainer/29-4-6-billion-years-of-earths-evolution-bilibili.md) | 第十一次元 | Not published |
| 30 | ["The Beauty of Group Theory" promo film (Bilibili)](cases/explainer/30-the-beauty-of-group-theory-promo-film-bilibili.md) | sadssxa | Not published |

## Directing Video Models

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/storyboard-to-video](https://apimodels.app/claude-opus-5-5-video-prompts/storyboard-to-video)

| # | Case | Creator | Prompt |
| --- | --- | --- | --- |
| 31 | [Infinite zoom through vintage collage worlds, generated assets composited in code](cases/storyboard-to-video/31-infinite-zoom-through-vintage-collage-worlds-generated.md) | [@koldo2k](https://x.com/koldo2k) | Full prompt |
| 32 | [Short film made through the Krea MCP in 10 minutes for $8](cases/storyboard-to-video/32-short-film-made-through-the-krea-mcp-in-10-minutes-for-8.md) | [@angrypenguinPNG](https://x.com/angrypenguinPNG) | Not published |
| 33 | [Japanese vertical review short: Opus diagrams, TTS voice, Seedance 2.5 opening](cases/storyboard-to-video/33-japanese-vertical-review-short-opus-diagrams-tts-voice.md) | [@masahirochaen](https://x.com/masahirochaen) | Not published |
| 34 | [Eight-stage siege game in 2 hours, then a 60-second trailer from video models](cases/storyboard-to-video/34-eight-stage-siege-game-in-2-hours-then-a-60-second-trailer.md) | [@KanaWorks_AI](https://x.com/KanaWorks_AI) | Not published |

## Music Video

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/music-video](https://apimodels.app/claude-opus-5-5-video-prompts/music-video)

| # | Case | Creator | Prompt |
| --- | --- | --- | --- |
| 35 | ["Claude Pop" music video: a dictated brief and a 12-hour autonomous run](cases/music-video/35-claude-pop-music-video-a-dictated-brief-and-a-12-hour.md) | [@donaldjewkes](https://x.com/donaldjewkes) | Excerpt |
| 36 | [1990s demoscene demo in C/C++ and OpenGL, synced to an S3M track](cases/music-video/36-1990s-demoscene-demo-in-c-c-and-opengl-synced-to-an-s3m.md) | [@gandamu_ml](https://x.com/gandamu_ml) | Excerpt |
| 37 | ["I'm Upping My P(Doom)" music video painted with p5.brush and parallel subagents](cases/music-video/37-im-upping-my-p-doom-music-video-painted-with-p5-brush-and.md) | [@other__reality](https://x.com/other__reality) | Method summary |
| 38 | [The same brief re-run with Midjourney and a moodboard](cases/music-video/38-the-same-brief-re-run-with-midjourney-and-a-moodboard.md) | [@anabology](https://x.com/anabology) | Method summary |
| 39 | ["Stroke of a Pen" Bitcoin music video storyboarded by an agent swarm](cases/music-video/39-stroke-of-a-pen-bitcoin-music-video-storyboarded-by-an-agent.md) | [@bradmillscan](https://x.com/bradmillscan) | Method summary |
| 40 | [Mid-Autumn paper-collage short: p5.brush frames over generated backdrops](cases/music-video/40-mid-autumn-paper-collage-short-p5-brush-frames-over.md) | [@ring_hyacinth](https://x.com/ring_hyacinth) | Not published |
| 41 | [Suno-sung song with lyrics and MV by Opus 5.5 (Bilibili)](cases/music-video/41-suno-sung-song-with-lyrics-and-mv-by-opus-5-5-bilibili.md) | syline | Not published |

## Narrative & History Short

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/short-film](https://apimodels.app/claude-opus-5-5-video-prompts/short-film)

| # | Case | Creator | Prompt |
| --- | --- | --- | --- |
| 42 | [Two-minute sand animation of 250 years of U.S. history](cases/short-film/42-two-minute-sand-animation-of-250-years-of-u-s-history.md) | [@Michaelzsguo](https://x.com/Michaelzsguo) | Full prompt |
| 43 | [Pelican riding a bicycle, theatrical cut with a custom GPU ray-marcher](cases/short-film/43-pelican-riding-a-bicycle-theatrical-cut-with-a-custom-gpu.md) | [@AxtonLiu](https://x.com/AxtonLiu) | Full prompt |
| 44 | [Tengwang Pavilion on Mid-Autumn night, one WebGL2 shader (topic chosen by the model)](cases/short-film/44-tengwang-pavilion-on-mid-autumn-night-one-webgl2-shader.md) | [@DemitiyaGeekzen](https://x.com/DemitiyaGeekzen) | Full prompt |
| 45 | [Porco Rosso-style sunset dogfight recreated in Three.js, from one line](cases/short-film/45-porco-rosso-style-sunset-dogfight-recreated-in-three-js-from.md) | [@NFT_Chen](https://x.com/NFT_Chen) | Full prompt |
| 46 | [Austerlitz, 2 December 1805: a five-minute film made entirely in code](cases/short-film/46-austerlitz-2-december-1805-a-five-minute-film-made-entirely.md) | [@WinterArc2125](https://x.com/WinterArc2125) | Not published |
| 47 | [Low-poly 3D retelling of "The Taoist of Laoshan"](cases/short-film/47-low-poly-3d-retelling-of-the-taoist-of-laoshan.md) | [@wshuyi](https://x.com/wshuyi) | Not published |
| 48 | ["Slumped on a bench, watching the blast" meme turned into a shader animation (Bilibili)](cases/short-film/48-slumped-on-a-bench-watching-the-blast-meme-turned-into-a.md) | 一起Vibe | Not published |

## 3D, Blender & Shader

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/3d-blender](https://apimodels.app/claude-opus-5-5-video-prompts/3d-blender)

| # | Case | Creator | Prompt |
| --- | --- | --- | --- |
| 49 | [Market Street, San Francisco, the afternoon before the 1906 earthquake, in Blender](cases/3d-blender/49-market-street-san-francisco-the-afternoon-before-the-1906.md) | [@alexalbert__](https://x.com/alexalbert__) | Excerpt |
| 50 | [Same procedural Blender shot: Opus 5.5 vs GPT-6 Astra](cases/3d-blender/50-same-procedural-blender-shot-opus-5-5-vs-gpt-6-astra.md) | [@Stefan_3D_AI](https://x.com/Stefan_3D_AI) | Method summary |
| 51 | [Octopus modelled, textured, rigged and animated in Blender in about 2 hours (YouTube)](cases/3d-blender/51-octopus-modelled-textured-rigged-and-animated-in-blender-in.md) | Bad Decisions Studio | Method summary |
| 52 | [GPU fluid-simulated campfire film in JavaScript, self-critiqued about 40 times](cases/3d-blender/52-gpu-fluid-simulated-campfire-film-in-javascript-self.md) | [@NathanWilbanks_](https://x.com/NathanWilbanks_) | Method summary |
| 53 | [Hand-scribbled "Opus5" turned into a 3D boxing animation, packaged as a skill](cases/3d-blender/53-hand-scribbled-opus5-turned-into-a-3d-boxing-animation.md) | [@MinLiBuilds](https://x.com/MinLiBuilds) | Not published |
| 54 | [Windmill modelled, rigged, textured and animated in Blender via MCP in 15 minutes](cases/3d-blender/54-windmill-modelled-rigged-textured-and-animated-in-blender.md) | [Higgsfield](https://x.com/higgsfield_ai) | Not published |

## Editing & Post-Production

Browse this category with the videos: [https://apimodels.app/claude-opus-5-5-video-prompts/video-editing](https://apimodels.app/claude-opus-5-5-video-prompts/video-editing)

| # | Case | Creator | Prompt |
| --- | --- | --- | --- |
| 55 | [Raw talking-head clip cut into a punchy captioned edit](cases/video-editing/55-raw-talking-head-clip-cut-into-a-punchy-captioned-edit.md) | [@sab8a](https://x.com/sab8a) | Full prompt |
| 56 | [Opus 5.5 driving After Effects to post-process generated clips (two tests)](cases/video-editing/56-opus-5-5-driving-after-effects-to-post-process-generated.md) | [@aicreataro](https://x.com/aicreataro) | Method summary |
| 57 | [A full YouTube video edited by Opus 5.5 through a DaVinci Resolve MCP](cases/video-editing/57-a-full-youtube-video-edited-by-opus-5-5-through-a-davinci.md) | [@NickSpisak_](https://x.com/NickSpisak_) | Not published |
| 58 | [Grok-generated dance clip recut and packaged by Opus 5.5](cases/video-editing/58-grok-generated-dance-clip-recut-and-packaged-by-opus-5-5.md) | [@Gorden_Sun](https://x.com/Gorden_Sun) | Not published |
| 59 | [Opus played its own game and cut the best moments into a demo reel](cases/video-editing/59-opus-played-its-own-game-and-cut-the-best-moments-into-a.md) | [@rehan_shei](https://x.com/rehan_shei) | Not published |
| 60 | [Demo reel for a 110K-rigid-body WebGPU physics solver](cases/video-editing/60-demo-reel-for-a-110k-rigid-body-webgpu-physics-solver.md) | [@nybobs](https://x.com/nybobs) | Not published |

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
