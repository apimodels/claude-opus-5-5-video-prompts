# Six ways to make a video with Opus 5.5

English · [简体中文](METHODS.zh-CN.md) · [Back to the cases](README.md)

The templates are our own distillation of the cases in this repository, not any one author's prompt. Replace the bracketed parts with your own.

## 1. One HTML file rendered frame by frame (its default)

**How:** Opus writes a self-contained HTML page (Canvas, SVG, CSS or WebGL) that exposes window.seek(t), so every pixel is a pure function of time. Playwright or another headless Chromium captures each frame, and FFmpeg encodes the frames and mixes the audio. Left without instructions, this is the route Opus 5.5 picks on its own, with zero dependencies.

**Strengths:** Nothing to install beyond a browser and FFmpeg; change one line and re-render; beat-accurate cuts and real motion blur (render several subframes and blend them) are easy; the same file plays live in a browser.

**Limits:** An MP4 needs an agent that can run commands. In a plain chat you get the HTML and have to screen-record it, which drops frames on a busy machine. Long films bloat into one very large file.

**Template:**

```text
Make a [length]-second, [width]x[height] video about [topic] for [audience]. Output one self-contained HTML file with no network requests. Expose async window.seek(t); compute every style from t (no timers, no requestAnimationFrame loop, no CSS transitions, no unseeded randomness). Style: [one named style], one accent colour [hex], font [name]. Banned: [the default looks you do not want]. Structure: [each shot by second or by beat]. Render with Playwright at [fps] fps and encode H.264 with FFmpeg. Before the full render, show me one still every [N] seconds.
```

Related: [Our own run: a 12-second promo for $0.368](https://apimodels.app/access/claude-opus-5-5-video) · [That run's prompt and render script](https://apimodels.app/models/claude-opus-5-5#opus-5-5-motion-video)

## 2. A video framework: Remotion or HyperFrames

**How:** Ask for Remotion (React and TypeScript) or HyperFrames (HTML compositions) by name and install the matching agent skill. Point it at your product site or project folder so it pulls real screenshots, logos and colours. Most of the product-launch cases here took this route.

**Strengths:** A precise timeline with live preview; versions and templates are easy to keep; long pieces stay structured; fits team review and brand work.

**Limits:** Needs Node and the framework installed; Opus will not pick a framework unless you name it; Remotion has its own licence terms for commercial teams, so check them.

**Template:**

```text
Use [Remotion / HyperFrames] in this project to make a [length]-second, [aspect ratio] launch video for [product]. Take real screenshots, the logo and the brand colours from [URL] yourself; it must have music. Structure: hook (2 s) → the problem → three features, [N] s each → one proof point → logo and call to action. Give me the shot list with durations first; after I approve it, build each scene and render one still per scene to check it.
```

## 3. Math and science explainers in Manim

**How:** Say "use Manim" and name a text-to-speech engine (edge-tts, Kokoro or a cloned voice) for narration. A one-line request is enough to start; the model plans the lesson itself.

**Strengths:** Equations and geometry look right by default, in the familiar 3Blue1Brown idiom; prompts can be very short.

**Limits:** Manim and LaTeX must be installed locally; length runs away without a limit (a one-line request in this library came back at 7.6 minutes); narration and animation need an explicit sync rule.

**Template:**

```text
Use Manim to make a video explaining [concept] for [audience], under [N] minutes. Keep it plain, with concrete examples and a question that makes the viewer think. Derive each formula step by step, with a matching change in the picture at every step. Narrate with [TTS engine], aligned sentence by sentence with the animation. Output a 1920x1080 MP4 and an SRT subtitle file.
```

## 4. 3D and real-time graphics: Three.js, shaders, Blender, game engines

**How:** Have it build the scene in Three.js or raw WebGL, write its own shader or ray-marcher, script Blender in Python (or drive Blender through an MCP server), or play a game it built and record the best moments. The strongest briefs make it gather sources into a data file before modelling anything.

**Strengths:** The highest visual ceiling in this library, and the area where Opus 5.5's graphics and visual reasoning get the most praise.

**Limits:** Slow and token-hungry (one Blender shot took 35 minutes; one shader film ran for 16 hours); character animation is weak until you make it rebuild the rig; needs local software.

**Template:**

```text
Rebuild [scene] in [Blender / Three.js]. Before modelling, build a source file from [references]; record size, material and source for every object. Generate everything procedurally in [Blender Python / code]: no downloaded models, textures or HDRIs; write reusable generators, then assemble the scene. Deliver a [length]-second, [resolution] shot: [camera move]. Show me three key frames before the final render.
```

## 5. Opus as director: a shot list, then video models

**How:** Opus writes the logline, character sheets, a timed shot list and every generation prompt, calls video, image, voice and music models through their APIs or an MCP server, then cuts the results and adds titles, transitions or a code-drawn layer on top. On apimodels.app the video models in these cases (Seedance 2.5, MiniMax H3) and others such as Kling V3 and Wan 3.0 run on the same API key as Opus 5.5.

**Strengths:** Real people, motion and physics that code alone cannot draw; a consistent look comes from the code layer and the edit.

**Limits:** The least predictable cost: one widely copied brief told the agent to use up the whole plan; copyright and likeness questions in the generated footage carry into the final film; it needs an explicit cost gate.

**Template:**

```text
You are directing a [length]-second video. Tools: [image model], [video model], [voice / music model]; the keys are in .env. 1) Write a one-line logline, a character sheet and a shot list timed to the second, and wait for my approval. 2) List every generation call with its estimated cost and wait for my OK. 3) Generate the footage with [video model]; if a shot needs lip-sync, pass the matching audio segment as a reference and check sync afterwards. 4) Add titles and transitions in code, assemble with FFmpeg and normalise loudness to -14 LUFS. 5) Watch the whole cut, take stills at [N] timestamps, fix the three worst problems, then deliver.
```

Related: [Seedance 2.5](https://apimodels.app/models/seedance-2.5) · [MiniMax H3](https://apimodels.app/models/minimax-h3) · [Kling V3](https://apimodels.app/models/kling-v3) · [Wan 3.0](https://apimodels.app/models/wan-3.0-video)

## 6. Editing footage you already have

**How:** Give it raw footage (a talking-head take, generated clips, a gameplay capture) and have it cut, caption, add graphics and music with FFmpeg, or drive After Effects or DaVinci Resolve through scripts or an MCP server.

**Strengths:** Aims at the most common job (short-form edits); the After Effects route leaves an editable project file a human can finish.

**Limits:** It cannot watch the footage, only sampled frames and a transcript; bridging into professional apps takes setup; pacing calls still need a person.

**Template:**

```text
Cut the raw talking-head footage at [path] into a [length]-second vertical short. First extract one frame per second with FFmpeg and transcribe the audio, then give me a timecoded summary and proposed cut points. Remove pauses and fluffs; add word-by-word captions ([font], [position]) with key words enlarged; put a B-roll shot or graphic every [N] seconds; add music licensed for this use, ducked under the voice. Output a 1080x1920 MP4.
```

## Director-brief formula and example

Director brief = the inputs it must ask you for + direction (one style, one accent colour, one typeface, an explicit banned list) + structure (every shot timed on a beat grid) + build contract (resolution, fps, seek(t), renderer, how to check frames) + known gotchas + a start line that asks for the plan before any code

```text
Example: <inputs> Ask me for the app name, three screenshots and a 100 BPM track I hold a licence for. </inputs> <direction> 20 seconds, 1080x1920, one continuous take. Off-white background, one green accent, Inter. Banned: gradients, particle bursts, glows, bouncy easing. </direction> <structure> Eight bars: the name types on; a screenshot rises into a phone; a cursor taps through three screens on the beat; a delivery route draws itself; logo and the line "Fresh beans every Friday". </structure> <build> One HTML file, every style computed inside window.seek(t). Render with Playwright at 60fps, encode with FFmpeg, check one frame per bar first. </build> <start> Ask for the inputs, then show me the bar-by-bar plan before writing any code. </start>
```
