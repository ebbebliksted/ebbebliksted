# More responsive landing-page motion

## Changes
- Increase the range, rotation, and pace of each image’s idle movement so the collage feels livelier.
- Track pointer position across the landing page and offset each image at a different depth, creating a responsive parallax effect.
- Smooth pointer movement with animation frames and return images naturally toward center when the pointer leaves.
- Keep touch devices stable and continue respecting reduced-motion settings.

## Technical details
- Add pointer tracking and per-image depth values in the landing page.
- Combine CSS custom properties for pointer offsets with the existing independent keyframe animations.
- Verify the landing page visually and confirm navigation remains intact.
