var lfo = () => osc(Math.PI*2.5,.3,2)
setResolution(1024,1024)

shape(200).color(.2,10,0).modulate(lfo()).rotate(1,.3, 1)
  .add(shape(200).color(0,0,1).modulate(lfo().invert()),1).rotate(1,.3, 1)
  .add(shape(200).color(7,0,0).modulate(lfo().invert()),1).rotate(1,.3, 1)
  .rotate(1,.10)



  .out(o0)
