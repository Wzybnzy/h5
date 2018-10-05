
// 做移动端适配的

// window.innerWidth  获取的是屏幕的宽度

// 页面中的字体最小是  12px
var oHtml=document.getElementsByTagName('html')[0];

var fz=window.innerWidth/7.5;

oHtml.style.fontSize=fz+'px';