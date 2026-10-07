You are writing a program that renders a video. Output one complete, self-contained HTML file and nothing else.

Rules for the program (these make it renderable frame by frame):
1. A single <canvas> of exactly 1280x720, no CSS scaling, black page background.
2. Expose a global function window.renderFrame(t) that draws the frame at time t (seconds, 0 <= t < 12) from scratch. Everything on screen must be a pure function of t: no Date.now, no performance.now, no Math.random (use a seeded PRNG if you need noise), no accumulated state between calls, no requestAnimationFrame loop.
3. Also expose window.DURATION = 12 and window.FPS = 30. When the page is opened normally, play it once in a loop with requestAnimationFrame by calling renderFrame, so a human can preview it.
4. No external assets, fonts, images or libraries. Use system-ui for text.
5. The rhythm is 120 BPM: a beat every 0.5 s. Put every major cut, text entrance and impact on a beat time (a multiple of 0.5). List the beat plan as a comment at the top of the script.

The story (tell this, then decide the visuals):
A 12-second promo for "APIMODELS", an API gateway. Problem, then turn, then payoff:
- 0-3 s: a developer's screen is cluttered with many different API keys and SDK logos flying in from every side, overlapping, getting chaotic (draw them as simple rounded labels such as "image", "video", "LLM", "audio", "key_1", "key_2", "sdk", not real company logos).
- 3-4.5 s: everything snaps together on a beat and collapses into one glowing key.
- 4.5-9 s: from that one key, lines fan out to a grid of model cards that light up one per beat (label them "145 models", "image", "video", "LLM", "audio", "one endpoint").
- 9-12 s: clean end card: the word APIMODELS, the line "One key. Every model.", and "apimodels.app" small underneath; hold still for the last second.

Style: dark background, one accent colour (electric violet #7c5cff) plus white, motion with easing (easeOutCubic / easeInOutQuad written by you), subtle depth (scale and blur fall-off), no clutter in the final 3 seconds.

Before the code, do not explain. Return only the HTML.
