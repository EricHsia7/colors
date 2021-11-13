// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: palette;
  function genid(mode) {
if(mode === "random"){
var genidchars = "0123456789abcdefghijklmnopqrstuvwxyz";
            var genid = "";
            for (var i = 0; i < 16; i++) {
                var genrandomNumber = Math.floor(Math.random() * genidchars.length);
                genid += genidchars.substring(genrandomNumber, genrandomNumber + 1);
            }
  return genid ;
}
          
 if(mode === "time"){
   var gtoday=new Date();
   var genid2 = (gtoday.getMonth()+1) + '_' + gtoday.getDate() + '_' + gtoday.getHours() + '_' + gtoday.getMinutes() + '_' + gtoday.getSeconds() + '-' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8)) + '' + (1+Math.floor(Math.random() * 8));
   
   return genid2
 }
  
  if(mode === "number"){
   
   var genid3 = '' ;
for (var i = 0; i < 16; i++) {
  genid3 += '' + (0+Math.floor(Math.random() * 9))
}
   return genid3
 }
  
  if(mode === "uuid"){
var genidchars4 = "abcdef012345678";
    var geniduu = [8,4,4,4,12];
            var genid4 = "";
            var genid5 = "";
    for (var ia = 0; ia < geniduu.length; ia++) {
      var genid4 = "";
            for (var i = 0; i < geniduu[ia]; i++) {
                var genrandomNumber4 = Math.floor(Math.random() * genidchars4.length);
                genid4 += genidchars4.substring(genrandomNumber4, genrandomNumber4 + 1);
            }
genid5 += '-' + genid4 ;
    }
    return genid5.substring(1,genid5.length)
  }

}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function randomnumber(min,max) {
  return Math.floor(Math.random()*(max - min) + min)
}

var rand_r = randomnumber(0,255);
var rand_g = randomnumber(0,255);  
var rand_b = randomnumber(0,255);
var randomcolor = rgbToHex(rand_r,rand_g,rand_b) ;
var colorslink = 'https://erichsia7.github.io/colors/?s=1&c=' + btoa(randomcolor) + '&sou=widget&r=' + genid('random') ;
var textcolori = '#000000' ;
if((rand_r+rand_g+rand_b)/3 > 128) {
  textcolori = '#000000' ;
}
else {
  textcolori = '#ffffff' ;
}
var widget = new ListWidget()
widget.backgroundColor = new Color(randomcolor, 100) ;

var iconurl = 'https://erichsia7.github.io/colors/c2_512.png' ;
var iconimg = await new Request(iconurl).loadImage() 
var stack = widget.addStack()
var imagestack = stack.addImage(iconimg)
imagestack.imageSize = new Size(27,27)
imagestack.cornerRadius = 7
stack.addSpacer(3)
let randomcolortextobj = stack.addText(randomcolor) ;
randomcolortextobj.centerAlignText()
randomcolortextobj.textColor = new Color(textcolori, 100)
randomcolortextobj.font = new Font('Noto Sans TC', 16.5)

widget.url = colorslink ;

Script.setWidget(widget)
Script.complete()
