

////


src(o0)
  .diff(shape(4))
  .modulate(shape(2,2,3))
  .diff(shape(200))
  .diff(osc(.4,4))
  
  .out(o0)