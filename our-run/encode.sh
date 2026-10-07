#!/usr/bin/env bash
ffmpeg -framerate 30 -i frames/f%04d.png -c:v libx264 -pix_fmt yuv420p -crf 20 -movflags +faststart promo.mp4
# add a soundtrack afterwards if you have one:
# ffmpeg -i promo.mp4 -i beat.mp3 -c:v copy -shortest promo-with-audio.mp4
