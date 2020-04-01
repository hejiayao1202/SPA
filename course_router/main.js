$(function(){
    window.onhashchange=function(){
        var $block=$('.main');
        var strHash=window.location.hash;
        // console.log(strHash)
        var color=strHash.substring(3,strHash.length);
        $block.css({
            "background-color":color
        })
    }
})