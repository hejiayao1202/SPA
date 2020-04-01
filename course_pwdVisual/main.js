$(function(){
    var $eye=$("#eye"),$pwd=$("#pwd");

    $eye.hover(function(){
        $pwd.attr("type","text");
        $eye.css("background-image","url('./see.jpg')");
    },function(){
        $pwd.attr("type","password");
        $eye.css("background-image","url('./nosee.jpg')");
    })
})