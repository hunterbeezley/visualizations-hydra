//floating shapes

// 
src(o0)
	.diff(shape(4).scrollY(.1,.2))
	.modulate(shape(2, 2, 3))
	.diff(shape(200)).add(osc(.4, 1.5))

	.out(o0)