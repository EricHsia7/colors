function getligrd(nscol) {
var uj = 35 ;
var co = hexToRgb(nscol)
var hsg = rgbtohsv(co.r,co.g,co.b)

var yy_deg = Math.floor(Math.random()*360)

var ya_h = 0
var yb_h = 0

var ya_s = 0
var yb_s = 0

var ya_v = 0
var yb_v = 0

if(hsg.h < uj) {
  ya_h = hsg.h+Math.floor(Math.random()*uj)
  yb_h = hsg.h+Math.floor(Math.random()*uj)
}
if(hsg.h > uj && hsg.h < (360-uj)) {
  ya_h = hsg.h+Math.floor((0-uj)+Math.random()*(uj+uj))
  yb_h = hsg.h+Math.floor((0-uj)+Math.random()*(uj+uj))
}
if(hsg.h > (360-uj)) {
  ya_h = hsg.h-Math.floor(Math.random()*uj)
  yb_h = hsg.h-Math.floor(Math.random()*uj)
}

if(hsg.s < uj) {
  ya_s = hsg.s+Math.floor(Math.random()*uj)
  yb_s = hsg.s+Math.floor(Math.random()*uj)
}
if(hsg.s > uj && hsg.s < (100-uj)) {
  ya_s = hsg.s+Math.floor((0-uj)+Math.random()*(uj+uj))
  yb_s = hsg.s+Math.floor((0-uj)+Math.random()*(uj+uj))
}
if(hsg.s > (100-uj)) {
  ya_s = hsg.s-Math.floor(Math.random()*uj)
  yb_s = hsg.s-Math.floor(Math.random()*uj)
}

if(hsg.v < uj) {
  ya_v = hsg.v+Math.floor(Math.random()*uj)
  yb_v = hsg.v+Math.floor(Math.random()*uj)
}
if(hsg.v > uj && hsg.v < (100-uj)) {
  ya_v = hsg.v+Math.floor((0-uj)+Math.random()*(uj+uj))
  yb_v = hsg.v+Math.floor((0-uj)+Math.random()*(uj+uj))
}
if(hsg.v > (100-uj)) {
  ya_v = hsg.v-Math.floor(Math.random()*uj)
  yb_v = hsg.v-Math.floor(Math.random()*uj)
}
var yac = hsvToRgb(ya_h,ya_s,ya_v)
var ybc = hsvToRgb(yb_h,yb_s,yb_v)

var yar = rgbToHex(yac[0],yac[1],yac[2])
var ybr = rgbToHex(ybc[0],ybc[1],ybc[2])

return [yy_deg,yar,ybr]
}
