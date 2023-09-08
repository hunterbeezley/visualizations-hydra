// FuzzTV_2
// by Hunter
s0.initCam();
src(s0)
	.saturate(-0.052)
	.contrast(1.074)
	.blend(src(o0)
		.mask(noise(0.02, 0.4, 0.02)
			.repeatY(0.349)
			.repeatX(0.894))
		.scale(0.01))
	.modulate(o0, 0.049)
	.out(o0);