
window.onload=function(){
document.onkeydown=function(){
var e=window.event||arguments[0];
if(e.keyCode==123){
alert("对不起，禁止使用此功能^_^");
return false;
}else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
alert("对不起，禁止使用此功能^_^");
return false;
}
};
document.oncontextmenu=function(){
alert("对不起，禁止使用此功能^_^");
return false;
}
}
