FORKED AND ADDED TOO, ORIGINAL CODE IS FROM WILL HALL

I went ahead and added real time Date, Time, and Weather.

Demo of automatic contrast effects for the UI tiles of a smart mirror

How can we ensure that the UI elements of a smart mirror have appropriate contrast so that they stay visible even when the background has low contrast with the UI content?

This demo uses canvas and webrtc to:
1. Examine each UI tile's position relative to the video
2. Look at the image data "behind" that UI tile
3. Find the average brightness of that image block
4. Apply an appropriate background contrast effect for the respective tile to ensure readability

This process happens every half second currently, to keep tile contrast updated in real-time.

For example, if the background behind you is bright, the tiles will adjust to be dark.

Requires: webcam; works best on a wide screen

Tested on: Windows Firefox, Windows Chrome, iPad Safari
