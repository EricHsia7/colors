// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: th-large;

function getwsize() {
  var sizemap = {
  'z428x926':['170x170','364x170','364x382'],
'z414x896':['169x169','360x169','360x379'],
'z414x736':['159x159','348x157','348x357'],
'z390x844':['158x158','338x158','338x354'],
'z375x812':['155x155','329x155','329x345'],
'z375x667':['148x148','321x148','321x324'],
'z360x780':['155x155','329x155','329x345'],
'z320x568':['141x141','292x141','292x311'],
'z768x1024':['120x120','260x120','260x260','540x260'],
'z810x1080':['124x124','272x124','272x272','568x272'],
'z834x1112':['132x132','288x132','288x28','600x288'],
'z820x1180':['136x136','300x136','300x300','628x300'],
'z834x1194':['136x136','300x136','300x300','628x300'],
'z1024x1366':['160x160','356x160','356x356','748x356']
  }
  var widgetsize = config.widgetFamily ;
  if(widgetsize === 'small') {
    widgetsize = 0
  }
  if(widgetsize === 'medium') {
    widgetsize = 1
  }
  if(widgetsize === 'large') {
    widgetsize = 2
  }
  if(widgetsize === 'extraLarge') {
    widgetsize = 3
  }
  if(widgetsize === undefined) {
  return '0x0'
}
  var screensi = Device.screenSize()
  var scrsi_min = Math.min(screensi.width,screensi.height)
  var scrsi_max = Math.max(screensi.width,screensi.height)
  var scrstr = 'z' + scrsi_min + 'x' + scrsi_max
  return eval('sizemap.' + scrstr + '[widgetsize]')
}
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
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
async function loadrecdata() {
  let urlp = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSKrUKs8Cq2a3Pubg_-MXmWp77GqLE0ImjKHy8VNAaVpqFH4Z94BeCcH-IQRsVnLTzmwaPG_66e35mH/pub?gid=11228129&single=true&output=csv&' + genid('time') + '_' + genid('random') 
  let req = new Request(urlp)
  return req.loadString()
}

var widget = new ListWidget()
if(config.widgetFamily === 'large') {
  widget.backgroundColor = Color.dynamic(new Color('#ffffff', 100),new Color('#1a1a1a', 100))
//   widget.setPadding(0, 0, 0, 0)
  var erw = parseInt(String(getwsize()).split('x')[0])
  var erh = parseInt(String(getwsize()).split('x')[1])
if(Device.isPhone()) {
  erw -= 20;
  erh -= 20;
}
  var allsta = widget.addStack() ;
  allsta.size = new Size(erw, erh)
  allsta.layoutVertically()
  allsta.addSpacer(10)
  var rdata = await loadrecdata()
  var rdataarr = rdata.split(/[\s\n]/).filter(function(n){ return n.length > 0}).reverse()
var iconurl = 'https://erichsia7.github.io/colors/c2_512.png' ;
var iconimg = await new Request(iconurl).loadImage() 
  for (var ia = 0; ia < 3; ia++) {
    var sta = allsta.addStack()
    sta.backgroundColor = new Color(rdataarr[(ia)], 100)
    sta.size = new Size(erw, erh/3-10)
    sta.cornerRadius = 10
    sta.centerAlignContent()
    var icop = sta.addImage(iconimg)
    icop.imageSize = new Size(27,27)
    icop.cornerRadius = 7
    sta.addSpacer(3)
    var colorcod= sta.addText(rdataarr[(ia)])
    colorcod.centerAlignText()
    colorcod.font = new Font('Noto Sans TC', 20)
    if((hexToRgb(rdataarr[(ia)]).r+hexToRgb(rdataarr[(ia)]).g+hexToRgb(rdataarr[(ia)]).b)/3 > 128) {
  colorcod.textColor = new Color('#000', 100)
}
else {
  colorcod.textColor = new Color('#fff', 100)
}
sta.url = 'https://erichsia7.github.io/colors/?s=1&c=' + btoa(rdataarr[(ia)]) + '&sou=recommend&sou2=widget_rec&r=' + genid('random') ;
    if(ia<3){
    allsta.addSpacer(10)
  }
  }
}
else {
var netext = widget.addText('只能使用Large。') ;
  netext.centerAlignText()
  netext.textColor = new Color('#ff0000', 100)
}
Script.setWidget(widget)
Script.complete()
