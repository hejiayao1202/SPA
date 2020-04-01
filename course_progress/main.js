$(function(){
    var $begin=$("#begin"),
        $stop=$("#stop"),
        $reset=$("#reset"),
        $pro=$("#pro");
    var num=0,timer;

    $begin.click(function(){
        timer=setInterval(function () { 
            num++;
            $pro.val(num);
        },100);
    })
    $stop.click(function(){
        clearInterval(timer);
    })
    $reset.click(function(){
        clearInterval(timer);
        num=0;
        $pro.val("0");
    })
})