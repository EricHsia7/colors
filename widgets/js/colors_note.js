// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: cyan; icon-glyph: sticky-note;
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
var widget = new ListWidget()
var setoi = args.queryParameters.seto
var file = FileManager.iCloud()
if(setoi === 'true') {
  
file.writeString(file.joinPath(file.documentsDirectory(),'colornoteop.txt'), atob(args.queryParameters.col)) ;

  let myAlert = new Alert();
myAlert.title = '顏色已設定！';
myAlert.addAction("完成");
await myAlert.present();

}
else {
  if(config.runsInWidget) {
    if(file.fileExists(file.joinPath(file.documentsDirectory(),'colornoteop.txt'))) {
    var note_text = args.widgetParameter
    if(note_text === null || note_text === '') {
      note_text = '在Parameter欄位輸入文字。'
    }
  await file.downloadFileFromiCloud(file.joinPath(file.documentsDirectory(),'colornoteop.txt'))
var coiol = file.readString(file.joinPath(file.documentsDirectory(),'colornoteop.txt'))
widget.backgroundColor = new Color(coiol, 100)
var textobj = widget.addText(note_text)
if((hexToRgb(coiol).r+hexToRgb(coiol).g+hexToRgb(coiol).b)/3 > 128) {
  textobj.textColor = new Color('#000', 100)
}
else {
  textobj.textColor = new Color('#fff', 100)
}
textobj.centerAlignText()
textobj.font = Font.blackSystemFont(20)
widget.url = 'scriptable:///run/' + encodeURIComponent(Script.name())
}
else {
  var tre = widget.addText('請先執行指令碼以設定背景顏色。')
tre.centerAlignText()
  
}
Script.setWidget(widget)
Script.complete()
}
  else {
  
  var scriptname = Script.name()
  Safari.open('https://erichsia7.github.io/colors/widgets/colors_note/?scriptable_name=' + encodeURIComponent(scriptname) + '&r=' + Math.random(), true)
}

}
