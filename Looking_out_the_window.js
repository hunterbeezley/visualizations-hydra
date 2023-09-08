// Looking out the window
// By Hunter



voronoi(.22, .04).mask(shape(4, 0.4, .22).rotate(0, 2))
.mult(osc(1.0,0.1,()=>Math.sin(time)*3).saturate(3).scrollY(200))
.modulate(o0,0.5)
.modulate(o0,0.8)
.scrollY(-20.01)
.scale(-0.99)
.modulateScale(voronoi(.8,1),0.008)
.hue(0.3)
.out()


speed = 0.1
