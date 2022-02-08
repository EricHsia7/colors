
var loadtimeloge = new Date() ;
  var getUrlString = location.href;
var url = new URL(getUrlString);
function gup(param) {
param = String(param)
return url.searchParams.get(param)
}

var sharecolor = gup('s') ;
var shcolor = atob(gup('c')) ;
  var gc1 = atob(gup('ga')) ;
  var gc2 = atob(gup('gb')) ;
  var gcdeg = gup('gdeg') ;
  var open = gup('open') ;
  var favadd = gup('favadd') ;
  var favda = atob(gup('favda')).split('&');
  var favdel = gup('del') ;
  var favscroll = gup('scroll') ;
  var shortcuts = gup('shortcuts') ;
  var opensou = gup('sou') ;
  var toimgbackid = gup('backid') ;
  var toimg = gup('toimg');
var copycolmode = 0 ;
  var usedslideclosepp = 0 ;
var dpb = gup('dpb') ;
var moreoptd = '0' ;
  
var ccw = 256;
var ccwa = (ccw*ccw) ;
document.getElementById('cc').width = ccw ;
document.getElementById('cc').height = ccw ;

function gettimerandomnumber(min,max) {
  var timeseedrandom = new Date().getTime();
  var myrng = new Math.seedrandom(String(timeseedrandom + '.' + Math.random()));
  return Math.floor(myrng()*(max - min) + min)
}
function setthemecol(hexcolsjs,delaytimems) {
  setTimeout(function() {
  $('meta[name="theme-color"]').attr('content',hexcolsjs);
  },delaytimems);
}
function darkmodehexcol() {
if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
  return '#1a1a1a'
}
else {
return '#fff'
}
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
  
  
  
let getMode=e=>{let t={};e.forEach(e=>{t[e]=(t[e]||0)+1});let l=0,r=[];for(let e in t)if(t[e]>l?(l=t[e],r=[e]):t[e]===l&&r.push(e),r.length===Object.keys(t).length)return[];return r};
  
  
  
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function rgbtocmyk(r, g, b, normalized){
    var c = 1 - (r / 255);
    var m = 1 - (g / 255);
    var y = 1 - (b / 255);
    var k = Math.min(c, Math.min(m, y));
    
    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);
    
    if(!normalized){
        c = Math.round(c * 10000) / 100;
        m = Math.round(m * 10000) / 100;
        y = Math.round(y * 10000) / 100;
        k = Math.round(k * 10000) / 100;
    }
    
    c = isNaN(c) ? 0 : c;
    m = isNaN(m) ? 0 : m;
    y = isNaN(y) ? 0 : y;
    k = isNaN(k) ? 0 : k;
    
    return {
        c: c,
        m: m,
        y: y,
        k: k,
        cmykstr:c + ',' + m + ',' + y + ',' + k
    }
}

function rgbtohsv(r, g, b) {
    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs),
    diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: percentRoundFn(s * 100),
        v: percentRoundFn(v * 100),
        hsvstr: Math.round(h * 360) + ',' + percentRoundFn(s * 100) + ',' + percentRoundFn(v * 100)
    };
}





function rgbtohsl(r,g,b){
    var rgbArr = [r,g,b]
    var r1 = rgbArr[0] / 255;
    var g1 = rgbArr[1] / 255;
    var b1 = rgbArr[2] / 255;
 
    var maxColor = Math.max(r1,g1,b1);
    var minColor = Math.min(r1,g1,b1);
    //Calculate L:
    var L = (maxColor + minColor) / 2 ;
    var S = 0;
    var H = 0;
    if(maxColor != minColor){
        //Calculate S:
        if(L < 0.5){
            S = (maxColor - minColor) / (maxColor + minColor);
        }else{
            S = (maxColor - minColor) / (2.0 - maxColor - minColor);
        }
        //Calculate H:
        if(r1 == maxColor){
            H = (g1-b1) / (maxColor - minColor);
        }else if(g1 == maxColor){
            H = 2.0 + (b1 - r1) / (maxColor - minColor);
        }else{
            H = 4.0 + (r1 - g1) / (maxColor - minColor);
        }
    }
 
    L = L * 100;
    S = S * 100;
    H = H * 60;
    if(H<0){
        H += 360;
    }
    
    return {
        h: H,
        s: S,
        l: L,
        hslstr: H + ',' + S + ',' + L
    };;
}

function hsvToRgb(h, s, v) {
    var r, g, b;
    var i;
    var f, p, q, t;
     
    // Make sure our arguments stay in-range
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    v = Math.max(0, Math.min(100, v));
     
    // We accept saturation and value arguments from 0 to 100 because that's
    // how Photoshop represents those values. Internally, however, the
    // saturation and value are calculated from a range of 0 to 1. We make
    // That conversion here.
    s /= 100;
    v /= 100;
     
    if(s == 0) {
        // Achromatic (grey)
        r = g = b = v;
        return [
            Math.round(r * 255), 
            Math.round(g * 255), 
            Math.round(b * 255)
        ];
    }
     
    h /= 60; // sector 0 to 5
    i = Math.floor(h);
    f = h - i; // factorial part of h
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));
     
    switch(i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
     
        case 1:
            r = q;
            g = v;
            b = p;
            break;
     
        case 2:
            r = p;
            g = v;
            b = t;
            break;
     
        case 3:
            r = p;
            g = q;
            b = v;
            break;
     
        case 4:
            r = t;
            g = p;
            b = v;
            break;
     
        default: // case 5:
            r = v;
            g = p;
            b = q;
    }
     
    return [
        Math.round(r * 255), 
        Math.round(g * 255), 
        Math.round(b * 255)
    ];
}

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

function setcookie(cookiename,cookievalue) {
document.cookie = cookiename + '=' + cookievalue + '; max-age='+60*10;
}
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}


  //userid
  function systeminfodata(uid) {
  var nav = window.navigator ;
   gtag('event', 'user_system_appcodename', {
    'event_category': nav.appCodeName,
    'event_label':uid ,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
		
	gtag('event', 'user_system_appname', {
    'event_category': nav.appName,
    'event_label':uid ,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
		
	gtag('event', 'user_system_appver', {
    'event_category': nav.appVersion,
    'event_label':uid ,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
		
	gtag('event', 'user_system_lang', {
    'event_category': nav.language,
    'event_label':uid ,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
		
	gtag('event', 'user_system_platform', {
    'event_category': nav.platform,
    'event_label':uid ,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
	
	gtag('event', 'user_system_product', {
    'event_category': nav.product,
    'event_label':uid ,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
		
	gtag('event', 'user_system_productsub', {
    'event_category': nav.productSub,
    'event_label':uid ,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
		
	gtag('event', 'user_system_useragent', {
    'event_category': nav.userAgent,
    'event_label':uid ,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
	
	gtag('event', 'user_system_vendor', {
    'event_category': nav.vendor,
    'event_label':uid ,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
  }

  var user_id ;
  if(localStorage.getItem('user_id_r') === '1') {
    user_id = localStorage.getItem('user_id') ;
    gtag('event', 'user_start', {
    'event_category': 'count',
    'event_label': user_id,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    //systeminfodata(user_id)
    }
  });
  }
  else {
  var user_id_chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            user_id = "";
            for (var useridi = 0; useridi < 64; useridi++) {
                var user_id_randomNumber = Math.floor(Math.random() * user_id_chars.length);
                user_id += user_id_chars.substring(user_id_randomNumber, user_id_randomNumber + 1);
            }
  localStorage.setItem('user_id_r', '1');
  localStorage.setItem('user_id',user_id);
   var hyatav = {'appcodename':window.navigator.appCodeName,'appname':window.navigator.appName,'appver':window.navigator.appVersion,'lang':window.navigator.language,'platform':window.navigator.platform,'product':window.navigator.product,'productsub':window.navigator.productSub,'useragent':window.navigator.userAgent,'vendor':window.navigator.vendor} ;
   
   var newuseridbackurl = 'https://docs.google.com/forms/d/e/1FAIpQLSeu19oOI34etg9rGCah1l50AkJVqy2gi5d1uhW-g-zYDsCJCw/formResponse?usp=pp_url&entry.584799207=' + user_id + '&entry.1702628837=' + encodeURIComponent(JSON.stringify(hyatav)) + '&entry.688790589=' + encodeURIComponent(location.href) ;
   $(document).ready(function() {
   var newuseridbackurlajaxee = $.ajax({url:newuseridbackurl ,async:false});
   });
   gtag('event', 'user_start', {
    'event_category': 'count',
    'event_label': user_id,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    systeminfodata(user_id)
    }
  });
    
  }
  //useridend
  //darkmode
let darkmodematched = window.matchMedia('(prefers-color-scheme: dark)').matches;
var darkmodematchedstr = 'undefined' ;
if(darkmodematched) {
  darkmodematchedstr = 'true' ;
  setthemecol('#1a1a1a',1)
}
else {
  darkmodematchedstr = 'false' ;
}
  
  gtag('event', 'dark_mode', {
    'event_category': darkmodematchedstr,
    'event_label': user_id,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
  
  //darkmodeend
  //windowresize
  var window_sou_width = $(window).width();
var window_sou_height = $(window).height();
$(window).resize(function() {
  var window_width_change = (window_sou_width-$(window).width()) ;
  var window_height_change = (window_sou_height-$(window).height()) ;
	gtag('event', 'window_resize', {
    'event_category':'{"before":"' + window_sou_width + ',' + window_sou_height + '","after":"' + $(window).width() + ',' + $(window).height() + '","change":"' + window_width_change + ',' + window_height_change + '"}',
    'event_label': user_id,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
});
	
  //windowresizeend
  //settings
  if(localStorage.getItem('settings_lowspeed') === null) {
    localStorage.setItem('settings_lowspeed','1')
  }
  if(localStorage.getItem('settings_sharefav') === null) {
    localStorage.setItem('settings_sharefav','1')
  }
  //settingsend
  //usage_point
function initializeusagepoint() {
		var todaygg = new Date()
		var tddatehh = todaygg.getFullYear() + '-' + (todaygg.getMonth()+1) + '-' + todaygg.getDate()
		if(localStorage.getItem('usage_point_' + tddatehh) === undefined || localStorage.getItem('usage_point_' + tddatehh) === null) {
			var usagepoint_json = {"date":tddatehh,"events":{}}
		}
		else {
			var usagepoint_json = JSON.parse(String(localStorage.getItem('usage_point_' + tddatehh)))
		}
		localStorage.setItem('usage_point_' + tddatehh,JSON.stringify(usagepoint_json))
	}
	
  function usagepoint(eventname,points) {
	  var todaygg = new Date()
		var tddatehh = todaygg.getFullYear()+ '-' + (todaygg.getMonth()+1) + '-' + todaygg.getDate()
    var ydhstdjson = JSON.parse(String(localStorage.getItem('usage_point_' + tddatehh)))
	eval('ydhstdjson.events.a_' + eventname + '_' + new Date().getTime() + ' = "' + points + '"')
	localStorage.setItem('usage_point_' + tddatehh,JSON.stringify(ydhstdjson))
  }
	
	initializeusagepoint()
	

  //usage_point_end
  //usage_point_send
  function usgaepointresultjsoncalc(dayy,datau) {
   var keys = [];
   var keysnorep = [] ;
  var keysrepcount = {}
  var keysreppoint = {}
  var pointtotal = 0
   for(var k in datau) {
     keys.push(k);
   }
  for (var i = 0; i < keys.length; i++) {
    eval('pointtotal = pointtotal' + eval('datau.' + keys[i]))
    if(!(keysnorep.join(',').indexOf(keys[i].replaceAll('_' + String(keys[i]).split('_')[(String(keys[i]).split('_').length-1)],'')) > -1)) {
      keysnorep.push(keys[i].replaceAll('_' + String(keys[i]).split('_')[(String(keys[i]).split('_').length-1)],''))
      eval('keysrepcount.' + keys[i].replaceAll('_' + String(keys[i]).split('_')[(String(keys[i]).split('_').length-1)],'') + ' = 1')
      eval('keysreppoint.' + keys[i].replaceAll('_' + String(keys[i]).split('_')[(String(keys[i]).split('_').length-1)],'') + ' = 0 + (' + eval('datau.' + keys[i]) + ')')
    }
    else {
      eval('keysrepcount.' + keys[i].replaceAll('_' + String(keys[i]).split('_')[(String(keys[i]).split('_').length-1)],'') + ' = ' + 'parseInt(keysrepcount.' + keys[i].replaceAll('_' + String(keys[i]).split('_')[(String(keys[i]).split('_').length-1)],'') + ')+1' )
      eval('keysreppoint.' + keys[i].replaceAll('_' + String(keys[i]).split('_')[(String(keys[i]).split('_').length-1)],'') + ' = (keysreppoint.' + keys[i].replaceAll('_' + String(keys[i]).split('_')[(String(keys[i]).split('_').length-1)],'') + ')+(' + eval('datau.' + keys[i]) + ')')
    }
  }
  
  var resultjsonddcsowcjfi = {"date":dayy.date,"events":{"event_count":keysrepcount,"event_point":keysreppoint,"event_point_total":pointtotal,"event_type_count":keysnorep.length}}
   return resultjsonddcsowcjfi
}
function sendusagepoint() {
  var todaydated = new Date()
  for (var i = 1; i < 366; i++) {
  var lastdaydated = new Date()
  lastdaydated.setTime(todaydated.getTime()-60*60*24*1000*i)
  var lastdatese = lastdaydated.getFullYear() + '-' + (lastdaydated.getMonth()+1) + '-' + lastdaydated.getDate()
  
  if(String(localStorage.getItem('usage_point_' + lastdatese)).length > 10 && !(localStorage.getItem('usage_point_' + lastdatese + '_send') === '1') && !(localStorage.getItem('usage_point_' + lastdatese) === null) && !(localStorage.getItem('usage_point_' + lastdatese) === undefined)) {
  var lastdayresultjson = usgaepointresultjsoncalc(JSON.parse(String(localStorage.getItem('usage_point_' + lastdatese))), JSON.parse(String(localStorage.getItem('usage_point_' + lastdatese))).events)
  
  var lastdayresultjson_event_count = lastdayresultjson.events.event_count
  var lastdayresultjson_event_point = lastdayresultjson.events.event_point
  var lastdayresultjson_event_point_total = lastdayresultjson.events.event_point_total
  var lastdayresultjson_event_type_count = lastdayresultjson.events.event_type_count
  //send
  for(var hssu_1 in lastdayresultjson_event_count) {
     //event_count
     var thskeyname = hssu_1
     var thskeyvalue = eval('lastdayresultjson_event_count.' + hssu_1)
     
     gtag('event', 'event_count_' + thskeyname, {
    'event_category':thskeyvalue,
    'event_label': user_id,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
	
   }
   for(var hssu_2 in lastdayresultjson_event_point) {
     //event_point
     var thskeyname = hssu_2
     var thskeyvalue = eval('lastdayresultjson_event_point.' + hssu_2)
     
	   
     gtag('event', 'event_point_' + thskeyname, {
    'event_category':thskeyvalue,
    'event_label': user_id,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
	   
   }
   
   gtag('event', 'event_point_total', {
    'event_category':lastdayresultjson_event_point_total,
    'event_label': user_id,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
   gtag('event', 'event_type_count', {
    'event_category':lastdayresultjson_event_type_count,
    'event_label': user_id,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
   localStorage.setItem('usage_point_' + lastdatese + '_send','1')
  //sendend  
  }
  if(localStorage.getItem('usage_point_' + lastdatese + '_send') === '1') {
    localStorage.removeItem('usage_point_' + lastdatese)
    localStorage.removeItem('usage_point_' + lastdatese + '_send')
  }
  }

}
	sendusagepoint()
  //usage_point_send_end
  function showuserid() {
    $('.alert_blur').fadeIn(333);
    $('.alert').css({'display':'block'});
    $('.alert_content').html('UserId: ' + user_id);
    setTimeout(function(){ 
    $('.alert').css({'transform':'translate(-50%,-50%) scale(1)','opacity':'1'});
    }, 1);
  }
    $('.alert_btn').click(function() {
  $('.alert_blur').fadeOut(333);
       
      $('.alert').css({'transform':'translate(-50%,-50%) scale(0.8)','opacity':'0'});
    setTimeout(function(){ 
    $('.alert').css({'display':'none'});
    }, 510);
    });
if (window.File && window.FileReader && window.FileList && window.Blob) {
  document.getElementById('files2').addEventListener('change', handleFileSelect, false);
} else {
  //tvenyu6kcvw3zz16
}

function handleFileSelect(evt) {
  $('.loadbar').css({'width':'0%'})
  var f = evt.target.files[0]; // FileList object
  var reader = new FileReader();
  // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
      var binaryData = e.target.result;
      //Converting Binary Data to base 64
      var base64String = window.btoa(binaryData);
      //showing file converted to base64
      $('#colorjsloading').fadeIn(1).css({'display':'flex'});
      var ctx = document.getElementById('cc').getContext('2d');
  var img = new Image();
  img.onload = function(){
    ctx.drawImage(img,0,0,ccw,ccw);
  };
  img.src = 'data:image/jpeg;base64,' + base64String;
var rgb_r = 0 ;     
var rgb_g = 0 ;   
var rgb_b = 0 ; 
var rgb_rm = [] ;
var rgb_gm = [] ;
var rgb_bm = [] ;
var jsprognu = 0 ;

var load = 0 ;
      gtag('event', 'photo', {
    'event_category': 'color',
    'event_label': '--',
    'transport_type': 'beacon',
    'event_callback': function(){
    setTimeout(function() {
   for (var xi=0; xi<ccw; xi++){
     for (var yi=0; yi<ccw; yi++){
  rgb_r += ctx.getImageData(xi, yi, 1, 1).data[0] ;
  rgb_g += ctx.getImageData(xi, yi, 1, 1).data[1] ;
  rgb_b += ctx.getImageData(xi, yi, 1, 1).data[2] ; 
  rgb_rm.push(ctx.getImageData(xi, yi, 1, 1).data[0]) ;
  rgb_gm.push(ctx.getImageData(xi, yi, 1, 1).data[1]) ;
  rgb_bm.push(ctx.getImageData(xi, yi, 1, 1).data[2]) ;
       jsprognu += 1 ;
     }
     //prog
     var cojsprogw = Math.ceil((jsprognu/ccwa)*100) ;
     $('#colorjsloading').html('解析中(' + cojsprogw + '%)');
     
     //progend
   }
    if(getMode(rgb_rm).length > 0 && getMode(rgb_gm).length > 0 && getMode(rgb_bm).length > 0) {
      var rgbs = getMode(rgb_rm) + ',' + getMode(rgb_gm) + ',' + getMode(rgb_bm) ;
      var rgbvfr = rgbToHex(parseInt(getMode(rgb_rm)),parseInt(getMode(rgb_gm)),parseInt(getMode(rgb_bm))) ;
    }
      else {
        var rgbs = Math.ceil(rgb_r/ccwa) + ',' + Math.ceil(rgb_g/ccwa) + ',' + Math.ceil(rgb_b/ccwa) ;
        var rgbvfr = rgbToHex(Math.ceil(rgb_r/ccwa), Math.ceil(rgb_g/ccwa), Math.ceil(rgb_b/ccwa)) ;
      }
    $('#rgb').val(rgbvfr);
    $('.color').css({'background':rgbvfr });
    if((Math.ceil(rgb_r/ccwa)+Math.ceil(rgb_g/ccwa)+Math.ceil(rgb_b/ccwa))/3 > 128) {
      $('#rgb').css({'color':'#000'});
    }
    else {
      $('#rgb').css({'color':'#fff'});
    }
    location.href = 'https://erichsia7.github.io/colors/?s=1&c=' + btoa(rgbvfr) + '&r=' + genid('random');
  },200);
    }
  }); 
    };

  })(f);
  // Read in the image file as a data URL.
  reader.readAsBinaryString(f);
}
  //touch
      $.extend($.support, { touch: "ontouchend" in document });
	
$('.fi').click(function() {
  $('.moreoptbg').fadeOut(1);
  $('.moreopt').css({'transform':'scale(0)','opacity':'0'});
  setTimeout(function() {   $('.moreopt').css({'display':'none'});
  },300)
    moreoptd = '0' ;
  
if(sharecolor === "1" || sharecolor === "2") {
    if(open === "fav") {
      $('body').css({'background':''});
      $(".color").css({'transform':'translateY(0px)','transition':'0s','opacity':'1'});
      location.href = 'https://erichsia7.github.io/colors/favorite/?open=col&scroll=' + favscroll + '&oani=' + url.searchParams.get('oani') + '&oanc=' + url.searchParams.get('oanc') + '&fgx=' + url.searchParams.get('fgx') + '&fgy=' + url.searchParams.get('fgy') + '&fgw=' + url.searchParams.get('fgw') + '&fgh=' + url.searchParams.get('fgh') + '&rg=' + url.searchParams.get('rg') + '&rgc=' + url.searchParams.get('rgc') + '&scale=' + $('.color').attr('scale') + '&lig=' + url.searchParams.get('lig') + '&usc=' + usedslideclosepp + '&r=' + genid('random') ;
    }
    else {
      if(open === 'camera' || open === 'palette') {
        window.close();
      }
      else {
        if(open === 'picker') {
          $('body').css({'background':''});
          $('.color').fadeOut(222);
          setTimeout(function(){
          location.href = 'https://erichsia7.github.io/colors/picker/?open=col&pih=' + url.searchParams.get('pih') + '&pis=' + url.searchParams.get('pis') + '&piv=' + url.searchParams.get('piv') + '&r=' + genid('random') ;
          }, 222);
        }
        else {
      $('body').css({'background':'','transition':'0.222s'});
      $('.color').fadeOut(222);
      setTimeout(function(){
    location.href = 'https://erichsia7.github.io/colors/?r=' + genid('random') ;
        }, 222);
          
        }
        
      }
      
    }
}
});
  $('.favy').click(function() {
  location.href = 'https://erichsia7.github.io/colors/favorite/?r=' + genid('random') ;
  });
  $('.filed-camera').click(function() {
  location.href = 'https://erichsia7.github.io/colors/camera/?r=' + genid('random') ;
  });
$('.ft2').click(function() {
  location.href = 'https://erichsia7.github.io/colors/text/?r=' + genid('random') ;
  });
$('.fi2').click(function() {
  var gingdzyxyj = ['#rgb','rgb','cmyk','hsl','hsv']
  if(copycolmode === 0) {
   var copys2 = $('#rgb');
   usagepoint('copy_color_hex','+3')
  }
  else {
  var copys2 = $('input[t="' + gingdzyxyj[copycolmode] + '"]');
  usagepoint('copy_color_' + gingdzyxyj[copycolmode],'+3')
  }
	
copys2.select();
document.execCommand("Copy");
});

$('.fi3').click(function() {
  usagepoint('sharelink','+5')
  if(sharecolor === "1") {
  var shur = 'https://erichsia7.github.io/colors/?s=1&c=' + btoa($('#rgb').val()) + '&r=' + genid('random') ;
  }
  if(sharecolor === "2") {
  var shur = 'https://erichsia7.github.io/colors/?s=2&ga=' + btoa($('#rgb').attr('shga')) + '&gb=' + btoa($('#rgb').attr('shgb')) + '&gdeg=' + $('#rgb').attr('shdeg') + '&r=' + genid('random') ;
  }
if (navigator.share) { 
   navigator.share({
      title: document.title,
      url: shur
    }).then(() => {
      
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }

})
$('.fti').click(function() {
  $('.colorte').fadeOut(222);
});
  
  $('li[f="qrcode"]').click(function() {
usagepoint('qrcode','+5.5')
    $('.moreoptbg').fadeOut(1);
  $('.moreopt').css({'transform':'scale(0)','opacity':'0'});
  setTimeout(function() {   $('.moreopt').css({'display':'none'});
  },300)
    moreoptd = '0' ;
    
$('#qrbg').fadeIn(333);
 $('#qrbox').css({'display':'block'});
    setTimeout(function(){ 
    $('#qrbox').css({'transform':'translate(-50%,-50%) scale(1)','opacity':'1'});
    }, 1);
  
    if(sharecolor === "1") {
  var shurw = 'https://erichsia7.github.io/colors/?s=1&c=' + btoa($('#rgb').val()) + '&r=' + genid('random') ;
  }
  if(sharecolor === "2") {
  var shurw = 'https://erichsia7.github.io/colors/?s=2&ga=' + btoa($('#rgb').attr('shga')) + '&gb=' + btoa($('#rgb').attr('shgb')) + '&gdeg=' + $('#rgb').attr('shdeg') + '&r=' + genid('random') ;
  }
    document.querySelector('#qr').innerHTML = '';
var qrcode = new QRCode(document.querySelector('#qr') , {
    text: shurw,
    width: 512,
    height: 512,
    colorDark : "#000",
    colorLight : "#fff",
    correctLevel : QRCode.CorrectLevel.H
});
  });
    $('#qrclbtn').click(function() {
  $('#qrbg').fadeOut(333);
       
      $('#qrbox').css({'transform':'translate(-50%,-50%) scale(0.8)','opacity':'0'});
    setTimeout(function(){ 
    $('#qrbox').css({'display':'none'});
    }, 510);
    });

	

  $('.favt').click(function() {
    usagepoint('favorite','+1.5')
    if(sharecolor === "1") {
      if(getCookie('colorfav2').indexOf('&' + shcolor) != -1) {
    }
      else {
    document.cookie = 'colorfav2=' +  getCookie('colorfav2') + '&' + $('#rgb').val() + '; max-age='+60*60*24*30 + '; domain=erichsia7.github.io' ;
      if(opensou === 'recommend' || opensou === 'trend') {
    
      }
     else {
     if(localStorage.getItem('settings_sharefav') === '1') {
var favrecommendforms = $.ajax({url:"https://docs.google.com/forms/d/e/1FAIpQLSeMGuvbZSK1mqORhroslYL_j1yCJ0WLvw2vIqk9_LpCmAYj5Q/formResponse?usp=pp_url&entry.450237995=%23" + $('#rgb').val().split('#')[1] ,async:false});
      }
     }  
    $('.favt').css({'background':'rgba(245,245,245,0.8) url(https://erichsia7.github.io/colors/favorited.png)','background-size':'25px','background-position':'center','background-repeat':'no-repeat'});
    $('body').prompt({'message':'已新增至喜好項目','time':1200,'animate':'slide'});
    } 
    }
    if(sharecolor === "2") {
      if(getCookie('colorfav2').indexOf('&li]' + $('#rgb').attr('shdeg') + ']' + $('#rgb').attr('shga') + ']' + $('#rgb').attr('shgb')) != -1) {
    }
      else {
if(opensou === 'recommend' || opensou === 'trend') {
    
      }
     else {
if(localStorage.getItem('settings_sharefav') === '1') {
var favrecommendforms = $.ajax({url:'https://docs.google.com/forms/d/e/1FAIpQLScLxMmjmZNWrv7yyYazyAkuxp0eQAaN8jkYgx1I7BlXQWA4dg/formResponse?usp=pp_url&entry.1247563127=%23' + $('#rgb').attr('shga').split('#')[1] + '&entry.293943510=%23' + $('#rgb').attr('shgb').split('#')[1] + '&entry.123365810=' + $('#rgb').attr('shdeg') ,async:false});
      }
     }
    document.cookie = 'colorfav2=' + getCookie('colorfav2') + '&li]' + $('#rgb').attr('shdeg') + ']' + $('#rgb').attr('shga') + ']' + $('#rgb').attr('shgb') + '; max-age='+60*60*24*30 + '; domain=erichsia7.github.io' ;
    
    $('.favt').css({'background':'rgba(245,245,245,0.8) url(https://erichsia7.github.io/colors/favorited.png)','background-size':'25px','background-position':'center','background-repeat':'no-repeat'});
            $('body').prompt({'message':'已新增至喜好項目','time':1200,'animate':'slide'});
    } 
    }
  });
  var morecardloaded = 0 ;
  var morecardv = 'gl2xddas4lia2j51'
  $('.mor').click(function() {
    if(morecardloaded === 0) {
    morecardloaded = 1
    for (var i = 0; i < 8; i++) {
$('.cmore').prepend('<div class="morecard"><div class="morecardimage"></div><div class="morecardtitle"></div><div class="morecardbtn"></div></div>')
    }
if(localStorage.getItem('moreopt_d') === morecardv) {
   usagepoint('more_options_open','+1.5')
  var morecardjson = JSON.parse(localStorage.getItem('moreopt')) ;
  for (var i = 0; i < 8; i++) {
    var morebtnid = genid('random')
    var morecardthisjson = morecardjson[i] ;
    $('.morecardimage').eq(i).css({'background':'url(https://erichsia7.github.io/colors/more_options_image/' + morecardthisjson.image + ')','background-size':'cover'})
$('.morecardtitle').eq(i).html(morecardthisjson.title).css({'background':'rgba(0, 0, 0, 0)'})
    $('.morecardbtn').eq(i).css({'background':'var(--morecard-btn-color)','border-radius':'10px','width':'auto','padding-left':'8px','padding-right':'8px','height':'35px','top':'10px'}).html(morecardthisjson.btn).attr('ripple-onclick',morecardthisjson.script).attr('poid',morebtnid)
    ripple('.morecardbtn[poid="' + morebtnid + '"]','var(--morecard-btn-ripple)','0.3',800,'false');
  }

}
else {
usagepoint('more_options_open','+1')
$.ajax({type:'get',url:"https://erichsia7.github.io/colors/json/more_options.json?r=" + genid('random'),dataType:'text',success:function(e) {
var morecardjson = JSON.parse(e) ;
  localStorage.setItem('moreopt',e)
  localStorage.setItem('moreopt_d',morecardv)
  for (var i = 0; i < 8; i++) {
    var morebtnid = genid('random')
    var morecardthisjson = morecardjson[i] ;
    $('.morecardimage').eq(i).css({'background':'url(https://erichsia7.github.io/colors/more_options_image/' + morecardthisjson.image + ')','background-size':'cover'})
$('.morecardtitle').eq(i).html(morecardthisjson.title).css({'background':'rgba(0, 0, 0, 0)'})
    $('.morecardbtn').eq(i).css({'background':'var(--morecard-btn-color)','border-radius':'10px','width':'auto','padding-left':'8px','padding-right':'8px','height':'35px','top':'10px'}).html(morecardthisjson.btn).attr('ripple-onclick',morecardthisjson.script).attr('poid',morebtnid)
    ripple('.morecardbtn[poid="' + morebtnid + '"]','var(--morecard-btn-ripple)','0.3',800,'false');	  
  }
}});

}
	    
    }
    $('.cmore').fadeIn(333).css({'display':'flexblock'});
    $('.favrecommendcardbox').css({'position':'fixed'});
  });
 $('.meoi').click(function() {
    $('.cmore').fadeOut(333);
   $('.favrecommendcardbox').css({'position':'absolute'});
usagepoint('more_options_close','+0.1')
  }); 
  $('.rand2').click(function() {
usagepoint('random_color','+3')
var rand_r = gettimerandomnumber(0,255);
var rand_g = gettimerandomnumber(0,255);  
var rand_b = gettimerandomnumber(0,255);
    //tag 
    var randtgrtag = 'other' ;
    if(Math.max(rand_r,rand_g,rand_b) === rand_r) {
       var randtgrtag = 'red' ;
       }
    if(Math.max(rand_r,rand_g,rand_b) === rand_g) {
       var randtgrtag = 'green' ;
       }
    if(Math.max(rand_r,rand_g,rand_b) === rand_b) {
       var randtgrtag = 'blue' ;
       }
    if(rand_r === rand_g && rand_g === rand_b) {
       var randtgrtag = 'other' ;
       }
    //tagend
    gtag('event', 'generator', {
    'event_category': 'color_' + randtgrtag,
    'event_label':user_id,
    'transport_type': 'beacon',
    'event_callback': function(){
    location.href = 'https://erichsia7.github.io/colors/?s=1&c=' + btoa(rgbToHex(rand_r,rand_g,rand_b)) + '&r=' + genid('random') ;
    if((rand_r+rand_g+rand_b)/3 > 128) {
      $('#rgb').css({'color':'#000'});
    }
    else {
      $('#rgb').css({'color':'#fff'});
    }
    //$('.color').fadeIn(222);
    $('.color').css({'background':rgbToHex(rand_r,rand_g,rand_b)});
      $('#rgb').val(rgbToHex(rand_r,rand_g,rand_b));
    }
  });
});
  $('.crtd').click(function() {
    location.href = 'https://erichsia7.github.io/colors/picker/?r=' + genid('random');
  });
  
  $('.grd').click(function() {
usagepoint('random_grd','+3')
var grd_r1 = gettimerandomnumber(0,255);
var grd_g1 = gettimerandomnumber(0,255);  
var grd_b1 = gettimerandomnumber(0,255);
var grd_r2 = gettimerandomnumber(0,255);
var grd_g2 = gettimerandomnumber(0,255);  
var grd_b2 = gettimerandomnumber(0,255);

var grd_deg = Math.floor(Math.random() * 360);
    //rgbToHex(grd_r1,grd_g1,grd_b1) + ',' + rgbToHex(grd_r2,grd_g2,grd_b2) + ',' + grd_deg
gtag('event', 'generator', {
    'event_category': 'linear-gradient',
    'event_label': user_id,
    'transport_type': 'beacon',
    'event_callback': function(){
    location.href = 'https://erichsia7.github.io/colors/?s=2&ga=' + btoa(rgbToHex(grd_r1,grd_g1,grd_b1)) + '&gb=' + btoa(rgbToHex(grd_r2,grd_g2,grd_b2)) + '&gdeg=' + grd_deg + '&r=' + genid('random') ;
    if((grd_r1+grd_g1+grd_b1+grd_r2+grd_g2+grd_b2)/6 > 128) {
      $('#rgb').css({'color':'#000'});
    }
    else {
      $('#rgb').css({'color':'#fff'});
    }
    //$('.color').fadeIn(222);
    $('.color').css({'background':'linear-gradient(' + grd_deg + 'deg ,' +  rgbToHex(grd_r1,grd_g1,grd_b1) + ' 0%,' +  rgbToHex(grd_r2,grd_g2,grd_b2) + ' 100%)'});
      $('#rgb').val('linear-gradient(' + grd_deg + 'deg ,' +  rgbToHex(grd_r1,grd_g1,grd_b1) + ' 0%,' +  rgbToHex(grd_r2,grd_g2,grd_b2) + ' 100%)').attr('shga',rgbToHex(grd_r1,grd_g1,grd_b1)).attr('shgb',rgbToHex(grd_r2,grd_g2,grd_b2)).attr('shdeg',grd_deg);
    }
});
    
});
  //moreoptset
  $('.moreopt').css({'bottom':'85px','right':(($(window).width()-$('#menuj').width())/2)+45+20});
  $('.colmorme').click(function() {
    $('.moreopt').css({'bottom':'85px','right':(($(window).width()-$('#menuj').width())/2)+45+20});
  if(moreoptd === '0') {
   $('.moreoptbg').fadeIn(1);
 $('.moreopt').css({'display':'block'});
  setTimeout(function() {   $('.moreopt').css({'transform':'scale(1.02)','opacity':'1'});
  },1);
    setTimeout(function() {   $('.moreopt').css({'transform':'scale(0.99)','opacity':'1','transitio':'0.2s'});
  },300);
    setTimeout(function() {   $('.moreopt').css({'transform':'scale(1)'});
  },500);
    moreoptd = '1' ;
  }
  else {
   $('.moreoptbg').fadeOut(1);
  $('.moreopt').css({'transform':'scale(0)','opacity':'0'});
  setTimeout(function() {   $('.moreopt').css({'display':'none'});
  },300)
    moreoptd = '0'
  }  
  });
  $('.moreoptbg').click(function() {
    $('.moreopt').css({'bottom':'85px','right':(($(window).width()-$('#menuj').width())/2)+45+20});
  $('.moreoptbg').fadeOut(1);
  $('.moreopt').css({'transform':'scale(0)','opacity':'0'});
  setTimeout(function() {   $('.moreopt').css({'display':'none'});
  },300)
  moreoptd = '0'
})
  //moreoptsetend
  
  if(shortcuts === "1") {
    $('.rand2').click()
  }
if(open === 'picker') {
  $('.pickerbg').css({'display':'block'});
}
if(dpb === '1') {
  history.pushState(null, null,'https://erichsia7.github.io/c/' + btoa(shcolor));
}
if(toimg === '1') {
  sessionStorage.removeItem(toimgbackid);
  history.pushState(null, null,String(location.href).split('&r=')[0] + '&r=' + genid('random'));
}  
if(sharecolor === "1") {
usagepoint('open_color','+2')
$('#filerj,.favrecommendcardbox').css({'position':'fixed'});
$('#rgb').attr('rgb',hexToRgb(shcolor).r + ',' + hexToRgb(shcolor).g + ',' + hexToRgb(shcolor).b);
$('#rgb').attr('hex', shcolor);
$('#rgb').attr('cmyk',rgbtocmyk(hexToRgb(shcolor).r,hexToRgb(shcolor).g,hexToRgb(shcolor).b).cmykstr);
$('#rgb').attr('hsl',rgbtohsl(hexToRgb(shcolor).r,hexToRgb(shcolor).g,hexToRgb(shcolor).b).hslstr);
$('#rgb').attr('hsv',rgbtohsv(hexToRgb(shcolor).r,hexToRgb(shcolor).g,hexToRgb(shcolor).b).hsvstr);

$('li[f="mixedgradient"]').css({'opacity':'0.3'});

$('input[t="rgb"]').val('rgb(' + $('#rgb').attr('rgb') + ')');
$('input[t="cmyk"]').val('cmyk(' + parseInt($('#rgb').attr('cmyk').split(',')[0]) + '%,' + parseInt($('#rgb').attr('cmyk').split(',')[1]) + '%,' + parseInt($('#rgb').attr('cmyk').split(',')[2]) + '%,' + parseInt($('#rgb').attr('cmyk').split(',')[3]) + '%)');
$('input[t="hsl"]').val('hsl(' + parseInt($('#rgb').attr('hsl').split(',')[0]) + ',' + parseInt($('#rgb').attr('hsl').split(',')[1]) + '%,' + parseInt($('#rgb').attr('hsl').split(',')[2]) + '%)');
$('input[t="hsv"]').val('hsv(' + parseInt($('#rgb').attr('hsv').split(',')[0]) + ',' + parseInt($('#rgb').attr('hsv').split(',')[1]) + '%,' + parseInt($('#rgb').attr('hsv').split(',')[2]) + '%)');

if((hexToRgb(shcolor).r+hexToRgb(shcolor).g+hexToRgb(shcolor).b)/3 > 128) {
      $('#rgb,.colorvlcm').css({'color':'#000'});
      $('.ladbar').css({'background':'#000'});
      $('.arrbtco').attr('class','arrow-right btn arrbtco');
      $('.arrbtco-2').attr('class','arrow-left btn arrbtco-2');
      //$('.toimg').attr('class','toimg toimg-d btn');
    }
    else {
      $('#rgb,.colorvlcm').css({'color':'#fff'});
      $('.ladbar').css({'background':'#fff'});
      $('.arrbtco').attr('class','arrow-right-light btn arrbtco');
      $('.arrbtco-2').attr('class','arrow-left-light btn arrbtco-2');
      //$('.toimg').attr('class','toimg toimg-l btn');
    }
  if(open === "fav") {
   usagepoint('open_color_fav','+5')
$('.color').css({'display':'block'});
    $('#filerj,.favrecommendcardbox').css({'opacity':'0','position':'fixed'});
setthemecol(shcolor,1);
  }
else {
  if($.support.touch === true) {
  $('.color').css({'transform':'translateY(' + $(window).height() + 'px)','border-radius':'15px 15px 0px 0px','opacity':'0'});
  setTimeout(function() {
$('.color').css({'transform':'translateY(0px)','transition':'0.3s','opacity':'1','border-radius':'0px'});
  },1);
$('.color').css({'display':'block'});
    setthemecol(shcolor,300);
  }
else {
$('.color').fadeIn(222);
setthemecol(shcolor,222);
}  
}
    $('li[f="similargradient"]').click(function() {
var yshgrdsyqhooa = getligrd(shcolor)
location.href = 'https://erichsia7.github.io/colors/?s=2&ga=' + btoa(yshgrdsyqhooa[1]) + '&gb=' + btoa(yshgrdsyqhooa[2]) + '&gdeg=' + yshgrdsyqhooa[0] + '&r=' + genid('random')
    });
    $('li[f="toimage"]').click(function() {
      usagepoint('toimage','+7')
      var toimgbackurlstorageid = genid('uuid') ;
      sessionStorage.setItem(toimgbackurlstorageid, location.href + '&toimg=1&backid=' + toimgbackurlstorageid);
      location.href = 'https://erichsia7.github.io/colors/image/?s=1&c=' + btoa(shcolor) + '&backid=' + toimgbackurlstorageid + '&r=' + genid('random');
    });
    $('li[f="openinpicker"]').click(function() {
      usagepoint('openpicker','+5')
      location.href = 'https://erichsia7.github.io/colors/picker/?open=col&pih=' + rgbtohsv(hexToRgb(shcolor).r,hexToRgb(shcolor).g,hexToRgb(shcolor).b).h + '&pis=' + rgbtohsv(hexToRgb(shcolor).r,hexToRgb(shcolor).g,hexToRgb(shcolor).b).s + '&piv=' + rgbtohsv(hexToRgb(shcolor).r,hexToRgb(shcolor).g,hexToRgb(shcolor).b).v + '&r=' + genid('random')
    });
    $('.color').css({'background':shcolor})
      $('#rgb').val(shcolor).attr('arc',shcolor);
  setTimeout(function() {
        $('body').css({'background':shcolor});
    },300); 
  if(getCookie('colorfav2').indexOf('&' + shcolor) != -1) {
      $('.favt').css({'background':'rgba(245,245,245,0.8) url(https://erichsia7.github.io/colors/favorited.png)','background-size':'25px','background-position':'center','background-repeat':'no-repeat'});
    }
  if (navigator.userAgent.indexOf("Line") > -1) {
  $('.linechat').fadeIn(1);
  $('#menuj').css({'width':'340px'});
        }
	
	//gf
	$(document).ready(function() {
	var gftvggyijcsddurl = 'https://docs.google.com/forms/d/e/1FAIpQLSdzcew5FPAcBdlH2mUbmZbpchdq1mYps9_32FXzWWCEMsSePQ/formResponse?usp=pp_url&entry.472720214=%23' + shcolor.replaceAll('#','') + '&entry.327016326=' + user_id
	$.ajax({type:'get',url:gftvggyijcsddurl,dataType:'text'})
	});
	//gf-end
	
}
  if(sharecolor === "2") {
usagepoint('open_grd','+3')
    $('#filerj,.favrecommendcardbox').css({'position':'fixed'});
    $('input[t="rgb"],input[t="cmyk"],input[t="hsl"],input[t="hsv"]').val('暫不支援');
    $('li[f="toimage"],li[f="openinpicker"],li[f="similargradient"]').css({'opacity':'0.3'});  
    if((hexToRgb(gc1).r+hexToRgb(gc1).g+hexToRgb(gc1).b+hexToRgb(gc2).r+hexToRgb(gc2).g+hexToRgb(gc2).b)/6 > 128) {
      $('#rgb,.colorvlcm').css({'color':'#000'});
      $('.ladbar').css({'background':'#000'});
      $('.arrbtco').attr('class','arrow-right btn arrbtco');
      $('.arrbtco-2').attr('class','arrow-left btn arrbtco-2');
    }
    else {
      $('#rgb,.colorvlcm').css({'color':'#fff'});
      $('.ladbar').css({'background':'#fff'});
      $('.arrbtco').attr('class','arrow-right-light btn arrbtco');
      $('.arrbtco-2').attr('class','arrow-left-light btn arrbtco-2');
    }
    
    var grdarc = rgbToHex(Math.ceil((hexToRgb(gc1).r+hexToRgb(gc2).r)/2),Math.ceil((hexToRgb(gc1).g+hexToRgb(gc2).g)/2),Math.ceil((hexToRgb(gc1).b+hexToRgb(gc2).b)/2)) ;
    var grd = 'linear-gradient(' + gcdeg + 'deg ,' +  gc1 + ' 0%,' +  gc2 + ' 100%)' ;
	  
    

if(open === "fav") {
usagepoint('open_grd_fav','+5')
//$('.color').fadeIn(1);
  $('.color').css({'display':'block'});
  $('#filerj,.favrecommendcardbox').css({'opacity':'0','position':'fixed'});
setthemecol(grdarc,1);
  }
else {
  
  
if($.support.touch === true) {
  $('.color').css({'transform':'translateY(' + $(window).height() + 'px)'});
  setTimeout(function() {
$('.color').css({'transform':'translateY(0px)','transition':'0.3s'});
  },1);
$('.color').css({'display':'block'});
setthemecol(grdarc,300);
  }
else {
$('.color').fadeIn(222);
setthemecol(grdarc,222);
}

}
    $('.color').css({'background':grd});
    $('#rgb').val(grd).attr('shga',gc1).attr('shgb',gc2).attr('shdeg',gcdeg).attr('arc',grdarc);
    setTimeout(function() {
        $('body').css({'background':grdarc});
    },300);
    
    
    if(getCookie('colorfav2').indexOf('li]' + gcdeg + ']' + gc1 + ']' + gc2) != -1) {
      $('.favt').css({'background':'rgba(245,245,245,0.8) url(https://erichsia7.github.io/colors/favorited.png)','background-size':'25px','background-position':'center','background-repeat':'no-repeat'});
    }
    
    $('li[f="mixedgradient"]').click(function() {
      location.href = 'https://erichsia7.github.io/colors/?s=1&c=' + btoa($('#rgb').attr('arc')) + '&sou=mixgrd&r=' + genid('random') ;
    });
    
  }
  var added = 0 ;
  var addte = favda.length ;
  var addno = 0 ;
  if(favadd === "1") {
    $('#deleting').css({'display':'flex'}).html('匯入喜好項目中');
for (var iwq = 0; iwq < favda.length; iwq++) {
      if(getCookie('colorfav2').indexOf('&' + favda[iwq]) != -1) {
        addno += 1;
    }
      else {
    document.cookie = 'colorfav2=' +  getCookie('colorfav2') + '&' + favda[iwq] + '; max-age='+60*60*24*30 + '; domain=erichsia7.github.io' ;
        added += 1;
    }
    }
    setTimeout(function(){
    location.href = 'https://erichsia7.github.io/colors/favorite/?fado=1&fadod=' + added + ',' + addno + ',' + addte + '&r=' + genid('random') ;
    },10);
  }
     if(favdel === "1") {
       document.cookie = 'colorfav2=' + '' + '; max-age='+60*60*24*30 + '; domain=erichsia7.github.io' ;
       $('#deleting').css({'display':'flex'});
       setTimeout(function(){ 
    location.href = 'https://erichsia7.github.io/colors/favorite/?r=' + genid('random') ;
    },10);
     }
     
var rgbinput =document.getElementById('rgb');
rgbinput.addEventListener('copy', (event) => {
        $('body').prompt({'message':'已複製(hex)','time':1200,'animate':'slide'});
});
var rgb2input =document.querySelector('input[t="rgb"]');
rgb2input.addEventListener('copy', (event) => {
        $('body').prompt({'message':'已複製(rgb)','time':1200,'animate':'slide'});
});
var cmykinput =document.querySelector('input[t="cmyk"]');
cmykinput.addEventListener('copy', (event) => {
        $('body').prompt({'message':'已複製(cmyk)','time':1200,'animate':'slide'});
});
var hslkinput =document.querySelector('input[t="hsl"]');
hslkinput.addEventListener('copy', (event) => {
        $('body').prompt({'message':'已複製(hsl)','time':1200,'animate':'slide'});
});
var hsvinput =document.querySelector('input[t="hsv"]');
hsvinput.addEventListener('copy', (event) => {
        $('body').prompt({'message':'已複製(hsv)','time':1200,'animate':'slide'});
});
 
  $(document).ready(function() {
 var googlefontloadtime = new Date().getTime() ;
 if(googlefontloadtime-parseInt(localStorage.getItem('googlefontNotoSansTCloaded')) < 2592000000) {
  $('body').append('<style>' + localStorage.getItem('googlefontNotoSansTC') + '</style>');
}
else {
 $.ajax({type:'get',url:"https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap",dataType:'text',success:function(e) {
  var googlefontloadtimedd = new Date().getTime() ;
  localStorage.setItem('googlefontNotoSansTC', e); localStorage.setItem('googlefontNotoSansTCloaded', googlefontloadtimedd);
   $('body').append('<style>' + e + '</style>');
   }
}); 
}
 //testend
$('#promptedcs').html(':root {--mjw-trjs:' + $('#menuj').width() + 'px}')
      if(getCookie('hdloaded') === 'true') {
        var ldiilist = 'grd,filed-camera,filed-img,fi,fi2,fi3,ft2,colmorme,crtd,rand2,vis,favy,meoi,mor' ;
    var ldiilists = ldiilist.split(',') ;
    var ldiihdlist = 'gradient,camera,img,close2,copy2,share3,text2,more,color-picker,random3,invisible,favorited,close2,more' ;
    var ldiihdlists = ldiihdlist.split(',');
	      if(!(localStorage.getItem('settings_lowspeed') === '1')) {
for (var ldii=0; ldii<ldiilists.length; ldii++){  
                 $('.' + ldiilists[ldii]).css({'background':'rgba(245, 245, 245,0.8) url(https://erichsia7.github.io/colors/' + ldiihdlists[ldii] + '.png)','background-size':'25px','background-position':'center','background-repeat':'no-repeat'});
            }
		      
	      }
      }
      else {
        setTimeout(function() {
    var ldiilist = 'grd,filed-camera,filed-img,fi,fi2,fi3,ft2,colmorme,crtd,rand2,vis,favy,meoi,mor' ;
    var ldiilists = ldiilist.split(',') ;
    var ldiihdlist = 'gradient,camera,img,close2,copy2,share3,text2,more,color-picker,random3,invisible,favorited,close2,more' ;
    var ldiihdlists = ldiihdlist.split(',');
if(!(localStorage.getItem('settings_lowspeed') === '1')) {
	
for (var ldii=0; ldii<ldiilists.length; ldii++){
    $('.' + ldiilists[ldii]).css({'background':'rgba(245, 245, 245,0.8) url(https://erichsia7.github.io/colors/' + ldiihdlists[ldii] + '.png)','background-size':'25px','background-position':'center','background-repeat':'no-repeat'});
            }
	}
      setcookie('hdloaded','true');
              },3000);
      }
  });

  if(sharecolor === "2" || sharecolor === "1") {

    if($.support.touch === true) {
  if(getCookie('mgpp') === 'true') {
}
else {
  //str
  if(open === 'fav') {
  }
  else {
  $('#mobile-gesture-prompt-bg').delay(800).fadeIn(300);
  $('.mgp-arrow').attr('src','https://erichsia7.github.io/colors/draw-arrow.png')
  }
  //end
}
    }
    else {
      if(getCookie('mgpp-p') === 'true') {
}
else {
  //str
  if(open === 'fav') {
  }
  else {
  $('#hotkey-prompt-bg').delay(800).fadeIn(300);
  }
  //end
}
    }
  }
  
var mgpcl = 0 ;
$('#mobile-gesture-prompt-bg').click(function() {
  mgpcl += 1 ;
  if(mgpcl === 1) {
  $('#mobile-gesture-prompt-bg').attr('class','mobile-gesture-prompt-bg nw-bot');
}
if(mgpcl === 2) {
  $('#mobile-gesture-prompt-bg').fadeOut(300);
  document.cookie = 'mgpp' + '=' + 'true' + '; max-age='+60*60*24*7;
}
});
  
$('#hotkey-prompt-bg').click(function() {
  $('#hotkey-prompt-bg').fadeOut(300);
  document.cookie = 'mgpp-p' + '=' + 'true' + '; max-age='+60*60*24*7;
});
  var startx, starty;
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    };

    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;

        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }
 
        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }
 
        return result;
    }
    document.addEventListener("touchstart", function(e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    document.addEventListener("touchend", function(e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                break;
            case 1:
                if(sharecolor === "2" || sharecolor === "1") {
                $('.favt').click();
            }
                break;
            case 2:
            
                break;
            case 3:
            
                break;
            case 4:
  
                break;
            default:
        }
    }, false);
  
  let mouseX = 0
let mouseY = 0
let offsetX = 0
let offsetY = 0
let isDown = false
var div = document.querySelector(".color");

div.addEventListener('touchstart', function(e) {
  isDown = true
  mouseX = e.pageX
  mouseY = e.pageY
  document.addEventListener('touchmove', move)
}, {passive: true});

document.addEventListener('touchend', function(e) {
  if(open === 'fav') {
    const dx = e.pageX - mouseX
    const dy = e.pageY - mouseY
    
    var favorite_close_percentage = dy/(Math.abs(($(window).height()-mouseY-95)-mouseY)) ;
    if(favorite_close_percentage > 0.3) {
      usedslideclosepp = 1 ;
      setTimeout(function() {
    $('.fi').click();
            },300);
      favorite_close_percentage = 1 ;
     var favorite_close_per_w = parseInt(url.searchParams.get('fgw'))+($(window).width()-parseInt(url.searchParams.get('fgw')))*(1-favorite_close_percentage) ;
     var favorite_close_per_h = parseInt(url.searchParams.get('fgh'))+($(window).height()-parseInt(url.searchParams.get('fgh')))*(1-favorite_close_percentage) ;
     var favorite_close_per_x = (parseInt(url.searchParams.get('fgx'))+15)*favorite_close_percentage ;
     var favorite_close_per_y = (parseInt(url.searchParams.get('fgy'))+10)*favorite_close_percentage ;
    var favorite_close_per_border_radius = 15*favorite_close_percentage ;
      
        $('.color').css({'width':favorite_close_per_w,'height':favorite_close_per_h,'top':favorite_close_per_y,'left':favorite_close_per_x,'border-radius':favorite_close_per_border_radius,'transition':'0.3s'});
$('.colorinps2').css({'transform':'translateX(' + 0 + '%) translateY(-50%)','transition':'0.3s'});
        $('.colorinps2 input').css({'opacity':'1'});
      $('#menuj').css({'opacity':(0.5),'transition':'0.3s'});
    }
    else {
      usedslideclosepp = 0 ;
      favorite_close_percentage = 0 ;
      var favorite_close_per_w = parseInt(url.searchParams.get('fgw'))+($(window).width()-parseInt(url.searchParams.get('fgw')))*(1-favorite_close_percentage) ;
     var favorite_close_per_h = parseInt(url.searchParams.get('fgh'))+($(window).height()-parseInt(url.searchParams.get('fgh')))*(1-favorite_close_percentage) ;
      
     var favorite_close_per_x = (parseInt(url.searchParams.get('fgx'))+15)*favorite_close_percentage ;
     var favorite_close_per_y = (parseInt(url.searchParams.get('fgy'))+10)*favorite_close_percentage ;
      
      var favorite_close_per_border_radius = 15*favorite_close_percentage ;
      
        $('.color').css({'width':favorite_close_per_w,'height':favorite_close_per_h,'top':favorite_close_per_y,'left':favorite_close_per_x,'border-radius':favorite_close_per_border_radius,'transition':'0.3s'});
      $('body').css({'background':$('#rgb').attr('arc')});
      setthemecol($('#rgb').attr('arc'),1)
      $('.colorinps2').css({'transform':'translateX(' + (-20*copycolmode) + '%) translateY(-50%)','transition':'0s'});
      
      $('#menuj').css({'opacity':(1),'transition':'0.3s'});
      
    }
    
    
    
  }
  else {
  if (isDown) {
    offsetX += e.pageX - mouseX
    offsetY += e.pageY - mouseY
  }
  isDown = false
  if(parseInt($(".color").attr('topi')) < ($(window).height()*0.12)) {
    $(".color").css({'transform':'translateY(0px)','border-radius':'0px','transition':'0.3s','opacity':'1'});
    $('body').css({'background':$('#rgb').attr('arc')});
    setthemecol($('#rgb').attr('arc'),1)
  }
  else {
    
    
    $('.color').css({'transform':'translateY(' + $(window).height() + 'px)','border-radius':'15px 15px 0px 0px','opacity':'0','transition':'0.3s'});
            setTimeout(function() {
    $('.fi').click();
            },50);
  }
  document.removeEventListener('touchmove',move)
  }
});


function move(e) {
  $('.moreoptbg').fadeOut(1);
  $('.moreopt').css({'transform':'scale(0)','opacity':'0'});
  setTimeout(function() {   $('.moreopt').css({'display':'none'});
  },300)
    moreoptd = '0' ;
  
  if(open === 'fav') {
    if (isDown) {
    const dx = e.pageX - mouseX
    const dy = e.pageY - mouseY
    
      //test-favorite-close-percentage-calculate
    
      var favorite_close_percentage = dy/(Math.abs(($(window).height()-mouseY-95)-mouseY)) ;

      var favorite_close_per_w = parseInt(url.searchParams.get('fgw'))+($(window).width()-parseInt(url.searchParams.get('fgw')))*(1-favorite_close_percentage) ;
      var favorite_close_per_h = parseInt(url.searchParams.get('fgh'))+($(window).height()-parseInt(url.searchParams.get('fgh')))*(1-favorite_close_percentage) ;
      
      var favorite_close_per_x = (parseInt(url.searchParams.get('fgx'))+15)*favorite_close_percentage ;
      var favorite_close_per_y = (parseInt(url.searchParams.get('fgy'))+10)*favorite_close_percentage ;
      
      var favorite_close_per_border_radius = 15*favorite_close_percentage ;
      
      if(favorite_close_percentage < 1 && favorite_close_percentage > 0) {
      $('.color').css({'width':favorite_close_per_w,'height':favorite_close_per_h,'top':favorite_close_per_y,'left':favorite_close_per_x,'border-radius':favorite_close_per_border_radius,'transition':'0s'});
      $('body').css({'background':''});
      setthemecol(darkmodehexcol(),1)
      }
      else {
        
        if(favorite_close_percentage > 1) {
        favorite_close_percentage = 1 ;
          $('body').css({'background':''});
	  setthemecol(darkmodehexcol(),1)
        }
        if(favorite_close_percentage < 0) {
        favorite_close_percentage = 0 ;
          $('body').css({'background':$('#rgb').attr('arc')});
	  setthemecol($('#rgb').attr('arc'),1)
        }
        
      favorite_close_per_w = parseInt(url.searchParams.get('fgw'))+($(window).width()-parseInt(url.searchParams.get('fgw')))*(1-favorite_close_percentage) ;
      favorite_close_per_h = parseInt(url.searchParams.get('fgh'))+($(window).height()-parseInt(url.searchParams.get('fgh')))*(1-favorite_close_percentage) ; 
      favorite_close_per_x = (parseInt(url.searchParams.get('fgx'))+15)*favorite_close_percentage ;
      favorite_close_per_y = (parseInt(url.searchParams.get('fgy'))+10)*favorite_close_percentage ;  
       favorite_close_per_border_radius = 15*favorite_close_percentage ; 
        $('.color').css({'width':favorite_close_per_w,'height':favorite_close_per_h,'top':favorite_close_per_y,'left':favorite_close_per_x,'border-radius':favorite_close_per_border_radius,'transition':'0.3s'});
        
        
        
        $('.colorinps2').css({'transform':'translateX(' + (-20*copycolmode) + '%) translateY(-50%)','transition':'0s','transform-origin': '100% 50%'});
      }
      //tested-ok
      $('.colorinps2').css({'transform':'translateX(' + (-20*copycolmode) + '%) translateY(-50%)','transition':'0s','transform-origin': '100% 50%'});
      
      //testing-menuopacity
      $('#menuj').css({'opacity':(0.5+(1-favorite_close_percentage)*0.5),'transition':'0s'});
      //test-favorite-close-percentage-calculate-end
      
  }

  }
  else {
  if (isDown) {
    const dx = e.pageX - mouseX
    const dy = e.pageY - mouseY
    var gtip = (dy*1.5);
   if(gtip > -1) {
     $('.color').css({'transform':'translateY(' + gtip + 'px)','border-radius':'15px 15px 0px 0px','transition':'0s'}).attr('topi',gtip);
     $('.color').css({'opacity':1-(parseInt($(".color").attr('topi'))/$(window).height()),'transition':'0.1s'});
     $('body').css({'background':''});
     setthemecol(darkmodehexcol(),1)
   }
    else {
       $('.color').css({'border-radius':'0px','transition':'0.3s'});
    }
  }
 }
}
  
  document.onkeydown=function(e){
var keyNum=window.event ? e.keyCode :e.which;
    if(sharecolor === "2" || sharecolor === "1") {
if(keyNum==70){  
    $('.favt').click();
}
  if(keyNum==67){  
    $('.fi2').click();
}
  if(keyNum==88){  
    $('.fi').click();
}
  if(keyNum==81){  
    $('.qrt').click();
}
  if(keyNum==83){  
    $('.fi3').click();
}
    }
}
  
  $('.linechat').click(function() {
    location.href = 'http://line.me/R/app/1656197609-DznLgN7A?c=' + btoa(shcolor) ;
  });
  
  function arrbtcoctft() {
    $('.colorinps2').css({'transform':'translateX('+ (1-($(window).width()*copycolmode)) + 'px) translateY(-50%)','transition':'0.5s'});
     
    if(copycolmode === 0) {
  var atrxtgtww = '#rgb' ;
  }
  if(copycolmode === 1) {
   var atrxtgtww = 'input[t="rgb"]' ;
  }
  if(copycolmode === 2) {
   var atrxtgtww = 'input[t="cmyk"]' ;
  }
  if(copycolmode === 3) {
   var atrxtgtww = 'input[t="hsl"]' ;
  }
  if(copycolmode === 4) {
   var atrxtgtww = 'input[t="hsv"]' ;
  }
    $('#rgb,input[t="rgb"],input[t="cmyk"],input[t="hsl"],input[t="hsv"]').css({'opacity':'0'});
    $(atrxtgtww).css({'opacity':'1'});
  }
  
  
  
  $('.arrbtco').click(function() {
    if(copycolmode < 4) {
     copycolmode += 1 ;
    }
    else {
      copycolmode = 0 ;
    }
    arrbtcoctft();
    usagepoint('switch_color','+3.5')
  });
  $('.arrbtco-2').click(function() {
    if(copycolmode > 0) {
     copycolmode -= 1 ;
    }
    else {
      copycolmode = 4 ;
    }
arrbtcoctft();
usagepoint('switch_color','+3.5')
  });
  
 window.addEventListener('resize', function(e) {
  $('.colorinps2').css({'transform':'translateX('+ (0-($(window).width()*copycolmode)) + 'px) translateY(-50%)','transition':'0.5s'});
   $('.color').css({'width':'100%','height':'100%'});
});

function getunsplashimgurlbyid(picid) {
var ggyiyunpkiggvgsdx = $.ajax({type:'get',url:'https://picsum.photos/id/' + picid + '/info',dataType:'text',async:false});
var unpinfojson = JSON.parse(ggyiyunpkiggvgsdx.responseText)
return String(unpinfojson.url)
}
function newrandomimagecolors() {
var imgid = 'd-' + genid('uuid')
$('body').append('<img id="' + imgid + '" style="display:none;">')
var rcimgwh = (document.querySelector('.favrecommendcardbox').clientWidth-20)*0.6
if(rcimgwh <= 256) {
rcimgwh = 256
}
//var rcimgwh = 350
var rcimg = 'https://picsum.photos/' + rcimgwh + '?' + Math.random();

    $.ajax({type:'GET',url:rcimg,beforeSend:function (xhr) {xhr.overrideMimeType('text/plain; charset=x-user-defined');},async: true,success:function(result, textStatus, jqXHR) {
    var binary = "";
    var responseText = jqXHR.responseText;
    var responseTextLen = responseText.length;
    for ( i = 0; i < responseTextLen; i++ ) {
        binary += String.fromCharCode(responseText.charCodeAt(i) & 255)
    }
  $('#' + imgid).attr('src','data:image/jpeg;base64,' + btoa(binary))
    var bigsizerdimgurl = String('https://picsum.photos/id/' + jqXHR.getResponseHeader('picsum-id') + '/1024/1024')
    $('#' + imgid).ready(function() {
    setTimeout(function() {
    const colorThief = new ColorThief();
    const imgee = document.querySelector('#' + imgid);

    if (imgee.complete) {
	    
      var imgcolorpalette = colorThief.getPalette(imgee) ;
        var hfur = 'k-' + genid('random')
        var imgsrcffd = String($('#' + imgid).attr('src'))
	if(!(localStorage.getItem('settings_lowspeed') === '1')) {
	var bigimgrdgghtmlcc = '<div style="background:url(' + bigsizerdimgurl + ');background-size:cover;background-position:center;" class="rdimgbigsize"></div>'
	}
	else {
	var bigimgrdgghtmlcc = '' ;
	}
	var fyhhutfcdseid = 'k-' + genid('random')
        $('.favrecommendcardbox').append('<div class="rrimgcard" id="' + hfur + '"><div class="rrimgbox" style="background:url(' + imgsrcffd + ');background-size:cover;background-position:cenetr;" id="' + fyhhutfcdseid + '" imageid="' + jqXHR.getResponseHeader('picsum-id') + '" imagelinkld="0">' + bigimgrdgghtmlcc + '</div></div>')
        $('#' + hfur + ' .rrimgbox').css({'height':(document.querySelector('#' + hfur).clientWidth-20)})
	$('#' + fyhhutfcdseid).click(function() {
	  if($(this).attr('imagelinkld') === '0') {
	  $('body').prompt({'message':'正在載入連結','time':10000,'animate':'slide'});
	  var thsfijfpwkxkclinkur = getunsplashimgurlbyid(String($(this).attr('imageid')))
	  $(this).attr('imagelink',thsfijfpwkxkclinkur)
	  $(this).attr('imagelinkld','1')
	  usagepoint('copy_explore_image_link','+5')
	  }
	  else {
	  var thsfijfpwkxkclinkur = $(this).attr('imagelink')
	  usagepoint('copy_explore_image_link','+0.1')
	  }
	  var textArea = document.createElement("textarea");
        textArea.value = thsfijfpwkxkclinkur ;
        textArea.setAttribute('readonly','readonly') ;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
	      $('body').prompt({'message':'已複製圖片連結','time':1200,'animate':'slide'});
	});
      var pltcchexpej = []
      for (var i = 0; i < imgcolorpalette.length; i++) {
        var thsvstehecbwinsoiwpks = rgbToHex(imgcolorpalette[i][0],imgcolorpalette[i][1],imgcolorpalette[i][2])
        pltcchexpej.push(thsvstehecbwinsoiwpks)
        if((imgcolorpalette[i][0]+imgcolorpalette[i][1]+imgcolorpalette[i][2])/3 > 128) {
      var aafhi9ooiyg = '000' 
    }
    else {
      var aafhi9ooiyg = 'fff' 
    }
        
         $('#' + hfur).append('<div class="favrecommendcard" dp="lo" type="recommend" style="background:' + thsvstehecbwinsoiwpks + '"><div class="favrecommendcardcontent"><h4 style="color:#' + aafhi9ooiyg + '">' + thsvstehecbwinsoiwpks + '</h4><div class="favrecommendcarddescription">' + '<a href="' + 'https://erichsia7.github.io/colors/?s=1&c=' + btoa(thsvstehecbwinsoiwpks) + '&sou=randomrecommend&r=' + genid('random') + '">查看顏色</a>' + '</div></div></div>');
      }
var opcopjdid = 'o-' + genid('random')
      $('#' + hfur).append('<div class="faveeimpltbtn" id="' + opcopjdid + '">複製Palette連結</div>')
      $('#' + imgid).remove()
      $('#' + opcopjdid).attr('pltlink','https://erichsia7.github.io/colors/palette/?dt=1&cs=' + btoa(pltcchexpej.join(',')) + '&r=' + genid('random'))
      
      $('#' + opcopjdid).click(function() {
	  var thsttlikjio = String($(this).attr('pltlink'))
	  usagepoint('copy_explore_palette_link','+5')
	  
	  var textArea = document.createElement("textarea");
        textArea.value = thsttlikjio ;
        textArea.setAttribute('readonly','readonly') ;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
	      $('body').prompt({'message':'已複製Palette連結','time':1200,'animate':'slide'});
	});
      //hu
    }
	//ggg
    },150);
    });
   }
});

}
	
  //recommend-info-card
  var recommend_info_card_cu = 5 ;
  var favrecommenddataarr_color_html = [] ;
  var favrecommenddataarr_ligrd_html = [] ;
  var favrecommenddataarr_lastweektrend_html = [] ;
  var explore_load_count = 0 ;
  var dft = 0 ;
  var sga = 0 ;
  if(!(localStorage.getItem('settings_lowspeed') === '1')) {
   recommend_info_card_cu = 10 ;
  }
  for (var fygeeew = 0; fygeeew < recommend_info_card_cu; fygeeew++) { 
 $('.favrecommendcardbox').append('<div class="favrecommendcard loading" dp="lo" type="recommend"><div class="favrecommendcardcontent"><h4>&nbsp</h4><div class="favrecommendcarddescription">&nbsp</div></div></div>');
}
  if(sharecolor === '1') {
//ture
  }
 else {
//false
   if(sharecolor === '2') {
//ture
  }
 else {
//false
   //start
   var lastweaktrendcolorsrestult = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTsFdgG3Pj2WrwKd9xUzKE41XD47xy2LLekYDFD_K0B8exPBiE5QJAvHoh78dobt1TJaJQj-hLv4eeN/pub?gid=1926518771&single=true&output=csv&'  + genid('time') + '_' + genid('random') ; 
   var result10url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSKrUKs8Cq2a3Pubg_-MXmWp77GqLE0ImjKHy8VNAaVpqFH4Z94BeCcH-IQRsVnLTzmwaPG_66e35mH/pub?gid=1124579858&single=true&output=csv&" + genid('time') + '_' + genid('random') ;
   var result5url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSKrUKs8Cq2a3Pubg_-MXmWp77GqLE0ImjKHy8VNAaVpqFH4Z94BeCcH-IQRsVnLTzmwaPG_66e35mH/pub?gid=11228129&single=true&output=csv&'  + genid('time') + '_' + genid('random') ;
   var result10urlli = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQT08yDnvggfN_j-MxzVHnHFZQF307TYb09YV5Iab1MuzG0TY4-LSkiqLHZizZJxegTmcEtonh9ZKdn/pub?gid=1078464581&single=true&output=csv&' + genid('time') + '_' + genid('random') ;
   var result5urlli = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQT08yDnvggfN_j-MxzVHnHFZQF307TYb09YV5Iab1MuzG0TY4-LSkiqLHZizZJxegTmcEtonh9ZKdn/pub?gid=180621797&single=true&output=csv&' + genid('time') + '_' + genid('random') ;
   var resulturl = result5url ;
   var resulturlli = result5urlli ;
   if(!(localStorage.getItem('settings_lowspeed') === '1')) {
    resulturl = result10url ;
    resulturlli = result10urlli ;
   }
   $.ajax({type:'get',url:resulturl,dataType:'text',success:function(e) {
  var favrecommenddataarr = e.split(/[\s\n]/).filter(function(n){ return n.length > 0}) ;
	
  for (var fygeeew = 0; fygeeew < favrecommenddataarr.length; fygeeew++) {
  if((hexToRgb(favrecommenddataarr[fygeeew]).r+hexToRgb(favrecommenddataarr[fygeeew]).g+hexToRgb(favrecommenddataarr[fygeeew]).b)/3 > 128) {
   var favrecommendcardtitlecolor = '000' ;
  }
  else {
    var favrecommendcardtitlecolor = 'fff' ;
  }
   favrecommenddataarr_color_html.push('<div class="favrecommendcard" dp="lo" type="recommend" style="background:' + favrecommenddataarr[fygeeew] + '"><div class="favrecommendcardcontent"><h4 style="color:#' + favrecommendcardtitlecolor + '">' + favrecommenddataarr[fygeeew] + '</h4><div class="favrecommendcarddescription">' + '<a href="' + 'https://erichsia7.github.io/colors/?s=1&c=' + btoa(favrecommenddataarr[fygeeew]) + '&sou=recommend&r=' + genid('random') + '">查看顏色</a>' + '</div></div></div>')
    $('.favrecommendcard').eq(favrecommenddataarr.length-fygeeew-1).css({'background':favrecommenddataarr[fygeeew]}).attr('class','favrecommendcard');
    $('.favrecommendcardcontent h4').eq(favrecommenddataarr.length-fygeeew-1).css({'color':'#' + favrecommendcardtitlecolor}).html(favrecommenddataarr[fygeeew]);
    $('.favrecommendcarddescription').eq(favrecommenddataarr.length-fygeeew-1).html('<a href="' + 'https://erichsia7.github.io/colors/?s=1&c=' + btoa(favrecommenddataarr[fygeeew]) + '&sou=recommend&r=' + genid('random') + '">查看顏色</a>');
		
}
favrecommenddataarr_color_html = favrecommenddataarr_color_html.reverse().join('') ;
//fn

//randomrecommend

$(window).scroll(function() {
if(sga === 1) {
  if($(window).scrollTop() > $('#randomrecommendtitletags').offset().top) {  
$('.favrecommendfixedtitle').html('探索')
  }
  else {
$('.favrecommendfixedtitle').html($('.favrecommendfixedtitle').attr('srtitle'))

  }
}

  if($(window).scrollTop() > ($(document).height()-$(window).height()-$(window).height()*0.6)) {
    if(dft === 0) {
    if(sga === 0) {
 $('.favrecommendcardbox').append('<h5 id="randomrecommendtitletags">探索</h5>')
      sga = 1
    }
usagepoint('explore_load','+5')
explore_load_count += 1 ;
gtag('event', 'explore_load', {
    'event_category': explore_load_count,
    'event_label':user_id ,
    'transport_type': 'beacon',
    'event_callback': function(){
    }
  });

for (var i = 0; i < Math.round(($(window).height()*1.6)/100); i++) {
	var ffrand_r = gettimerandomnumber(0,255);
var ffrand_g = gettimerandomnumber(0,255);  
var ffrand_b = gettimerandomnumber(0,255);
	var ffrandhexff = rgbToHex(ffrand_r,ffrand_g,ffrand_b) ;
    if((ffrand_r+ffrand_g+ffrand_b)/3 > 128) {
      var fhi9ooiyg = '000' 
    }
    else {
      var fhi9ooiyg = 'fff' 
    }
 $('.favrecommendcardbox').append('<div class="favrecommendcard" dp="lo" type="recommend" style="background:' + ffrandhexff + '"><div class="favrecommendcardcontent"><h4 style="color:#' + fhi9ooiyg + '">' + ffrandhexff + '</h4><div class="favrecommendcarddescription">' + '<a href="' + 'https://erichsia7.github.io/colors/?s=1&c=' + btoa(ffrandhexff) + '&sou=randomrecommend&r=' + genid('random') + '">查看顏色</a>' + '</div></div></div>');
}

      newrandomimagecolors();
      dft = 1 ;
    }
    else {
      dft = 0
    }
  }
});
	   //randomrecommend end


$('#favrecommendcardtab_ligrd,#favrecommendcardtab_lastweektrend').attr('hu','0');
$('#favrecommendcardtab_color').click(function() {
usagepoint('switch_recommend','+3')
sga = 0 
$('.favrecommendcard,#randomrecommendtitletags,.rrimgcard').remove()
$('.favrecommendcardbox').append(favrecommenddataarr_color_html)
$('#favrecommendcardtab_color').attr('gj','1')
$('#favrecommendcardtab_ligrd,#favrecommendcardtab_lastweektrend').attr('gj','0')
$('.favrecommendfixedtitle').html('建議的顏色').attr('srtitle','建議的顏色')
});
  
$('#favrecommendcardtab_lastweektrend').click(function() {
usagepoint('switch_recommend','+3')
sga = 0
$('#favrecommendcardtab_lastweektrend').attr('gj','1');
$('#favrecommendcardtab_ligrd,#favrecommendcardtab_color').attr('gj','0');
$('.favrecommendfixedtitle').html('上週趨勢').attr('srtitle','上週趨勢')
$('.favrecommendcard,#randomrecommendtitletags,.rrimgcard').remove()
		for (var fygeeew = 0; fygeeew < 10; fygeeew++) { 
 $('.favrecommendcardbox').append('<div class="favrecommendcard loading" dp="lo" type="recommend" lastweektrendmo="0"><div class="favrecommendcardcontent"><h4>&nbsp</h4><div class="favrecommendcarddescription">&nbsp</div></div></div>');
}
	
	if(favrecommenddataarr_lastweektrend_html.length < 1) {
		
	$.ajax({type:'get',url:lastweaktrendcolorsrestult,dataType:'text',success:function(e) {
		
  var favrecommenddataarryyy = e.replaceAll('"','').split(',') ;
  for (var fygeeew = 0; fygeeew < favrecommenddataarryyy.length; fygeeew++) {
	var favrecommendgtfffctooyy = String(favrecommenddataarryyy[fygeeew]) ;

  if((hexToRgb(favrecommendgtfffctooyy).r+hexToRgb(favrecommendgtfffctooyy).g+hexToRgb(favrecommendgtfffctooyy).b)/3 > 128) {
   var favrecommendcardtitlecolor = '000' ;
  }
  else {
    var favrecommendcardtitlecolor = 'fff' ;
  }
  
//var favrecommendcardtitlecolor = 'fff' ;
   favrecommenddataarr_lastweektrend_html.push('<div class="favrecommendcard" dp="lo" type="recommend" style="background:' + favrecommendgtfffctooyy + ';" lastweektrendmo="1"><div class="favrecommendcardcontent"><h4 style="color:#' + favrecommendcardtitlecolor + '">' + favrecommendgtfffctooyy + '</h4><div class="favrecommendcarddescription">' + '<a href="' + 'https://erichsia7.github.io/colors/?s=1&c=' + btoa(favrecommendgtfffctooyy) + '&sou=trend&r=' + genid('random') + '">查看顏色</a>' + '</div></div></div>')
    $('.favrecommendcard').eq(favrecommenddataarryyy.length-fygeeew-1).css({'background':favrecommendgtfffctooyy}).attr('class','favrecommendcard').attr('lastweektrendmo','1');
    $('.favrecommendcardcontent h4').eq(favrecommenddataarryyy.length-fygeeew-1).css({'color':'#' + favrecommendcardtitlecolor}).html(favrecommendgtfffctooyy);
    $('.favrecommendcarddescription').eq(favrecommenddataarryyy.length-fygeeew-1).html('<a href="' + 'https://erichsia7.github.io/colors/?s=1&c=' + btoa(favrecommendgtfffctooyy) + '&sou=trend&r=' + genid('random') + '">查看顏色</a>');
}
$('.favrecommendcard[lastweektrendmo="0"]').remove()
	favrecommenddataarr_lastweektrend_html = favrecommenddataarr_lastweektrend_html.reverse().join('');
		}
		});
		//g
	}
	else {
	$('.favrecommendcard').remove()
	$('.favrecommendcardbox').append(favrecommenddataarr_lastweektrend_html);
	}
	//end
});

$('#favrecommendcardtab_ligrd').click(function() {
usagepoint('switch_recommend','+3')
sga = 0 
$('#favrecommendcardtab_color,#favrecommendcardtab_lastweektrend').attr('gj','0')
$('#favrecommendcardtab_ligrd').attr('gj','1')
$('.favrecommendfixedtitle').html('建議的漸層').attr('srtitle','建議的漸層')
$('.favrecommendcard,#randomrecommendtitletags,.rrimgcard').remove()

	if(favrecommenddataarr_ligrd_html.length < 1) {
		for (var fygeeew = 0; fygeeew < recommend_info_card_cu; fygeeew++) { 
 $('.favrecommendcardbox').append('<div class="favrecommendcard loading" dp="lo" type="recommend"><div class="favrecommendcardcontent"><h4>&nbsp</h4><div class="favrecommendcarddescription">&nbsp</div></div></div>');
}
		$.ajax({type:'get',url:resulturlli,dataType:'text',success:function(e) {
  var favrecommenddataarr = e.split(/[\s\n]/).filter(function(n){ return n.length > 0}) ;
  for (var fygeeew = 0; fygeeew < favrecommenddataarr.length; fygeeew++) {
	
	var favrecommendgtfffctoo = favrecommenddataarr[fygeeew].replaceAll('deg','').replaceAll('linear-gradient(','').replaceAll(')','').replaceAll('$0%','').replaceAll('$100%','').split('@') ;

  if((hexToRgb(favrecommendgtfffctoo[1]).r+hexToRgb(favrecommendgtfffctoo[1]).g+hexToRgb(favrecommendgtfffctoo[1]).b+hexToRgb(favrecommendgtfffctoo[2]).r+hexToRgb(favrecommendgtfffctoo[2]).g+hexToRgb(favrecommendgtfffctoo[2]).b)/6 > 128) {
   var favrecommendcardtitlecolor = '000' ;
  }
  else {
    var favrecommendcardtitlecolor = 'fff' ;
  }
  
//var favrecommendcardtitlecolor = 'fff' ;
   favrecommenddataarr_ligrd_html.push('<div class="favrecommendcard" dp="lo" type="recommend" style="background:' + favrecommenddataarr[fygeeew].replaceAll('@',',').replaceAll('$',' ') + ';"><div class="favrecommendcardcontent"><h4 style="color:#' + favrecommendcardtitlecolor + '">' + favrecommenddataarr[fygeeew].replaceAll('@',',').replaceAll('$',' ').replaceAll('linear-gradient(','').replaceAll(' ','').replaceAll('100%','').replaceAll('0%','').replaceAll(')','').replaceAll('deg','') + '</h4><div class="favrecommendcarddescription">' + '<a href="' + 'https://erichsia7.github.io/colors/?s=2&ga=' + btoa(favrecommendgtfffctoo[1]) + '&gb=' + btoa(favrecommendgtfffctoo[2]) + '&gdeg=' + favrecommendgtfffctoo[0] + '&sou=recommend&r=' + genid('random') + '">查看漸層</a>' + '</div></div></div>')
    $('.favrecommendcard').eq(favrecommenddataarr.length-fygeeew-1).css({'background':favrecommenddataarr[fygeeew].replaceAll('@',',').replaceAll('$',' ')}).attr('class','favrecommendcard');
    $('.favrecommendcardcontent h4').eq(favrecommenddataarr.length-fygeeew-1).css({'color':'#' + favrecommendcardtitlecolor}).html(favrecommenddataarr[fygeeew].replaceAll('@',',').replaceAll('$',' ').replaceAll('linear-gradient(','').replaceAll(' ','').replaceAll('100%','').replaceAll('0%','').replaceAll(')','').replaceAll('deg',''));
    $('.favrecommendcarddescription').eq(favrecommenddataarr.length-fygeeew-1).html('<a href="' + 'https://erichsia7.github.io/colors/?s=2&ga=' + btoa(favrecommendgtfffctoo[1]) + '&gb=' + btoa(favrecommendgtfffctoo[2]) + '&gdeg=' + favrecommendgtfffctoo[0] + '&sou=recommend&r=' + genid('random') + '">查看漸層</a>');
}
	favrecommenddataarr_ligrd_html = favrecommenddataarr_ligrd_html.reverse().join('');
		}
		});
	}
	else {
	$('.favrecommendcard').remove()
	$('.favrecommendcardbox').append(favrecommenddataarr_ligrd_html);
	}
});
//ed
}
});
   
   //end
 }
 }

  $(document).scroll(function(e) {
    if($(document).scrollTop() > $('.favrecommendtabbox').offset().top) {
      //ture
      $('.favrecommendfixedtitle').attr('class','favrecommendfixedtitle');
      $('.gotop').css({'display':'flex'});
    }
    else {
      //false
      $('.favrecommendfixedtitle').attr('class','favrecommendfixedtitle favrecommendfixedtitleopacity0');
      $('.gotop').css({'display':'none'});
    }
  });
$('.gotop').click(function() {
$(document).scrollTop(0)
});

	
function checkonline() {
  var onlinestr = '沒有網路連線' ;
  if(navigator.onLine) {
      usagepoint('online','+0.01')
      onlinestr = '已連上網路' ;
      $('.online').html(onlinestr).css({'background':'#00945e'});
      setTimeout(function() {
        $('.online').css({'bottom':'-30px'}).attr('h','0');
    },1500)
      setTimeout(function() {
        $('.online').css({'display':'none'});
    },1800)
    }
  else {
    usagepoint('offline','+0.01')
    $('.online').css({'display':'flex'});
    $('.online').html(onlinestr)
    setTimeout(function() {
    $('.online').css({'bottom':'0px','background':'#ac3c3d'}).attr('h','1');
    },1);
  }
}

var offlineoe = '0'
window.addEventListener('offline', function(e) {
    offlineoe = '1'
    checkonline()
});
document.addEventListener('offline', function(e) {
    offlineoe = '1'
    checkonline()
});

window.addEventListener('online', function(e) {
    offlineoe = '0'
    checkonline()
});
document.addEventListener('online', function(e) {
    offlineoe = '0'
    checkonline()
});

$(document).ready(function() {
var loadtimelogd = new Date()
var loadtimetotal = loadtimelogd.getTime()-loadtimeloge.getTime()

gtag('event', 'load_time_ms', {
    'event_category': loadtimetotal,
    'event_label':user_id ,
    'transport_type': 'beacon',
    'event_callback': function(){
    
    }
  });
});
