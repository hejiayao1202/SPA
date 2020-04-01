define(['jquery'],function($){
    function TimerButton(){
        var timer;
        var cfg={
            container:'body',
            num:6,
            title:"同意",
            onClick:null
        };
        var $btn=$("<input class='timerbutton' type='button' value='同意（6s）' disabled/>");
        this.show=function(conf){
            // DOM绘制
            // $(container).html(html);
            $(cfg.container).append($btn);
            // 把默认的参数更新成传过来的参数 
            $.extend(cfg,conf);
    
            $btn.val(cfg.title+"("+cfg.num+"s)");
    
            timer=setInterval(function(){
                cfg.num--;
                if(cfg.num===0){
                    clearInterval(timer);
                    $btn.val(cfg.title);
                    $btn.removeAttr("disabled");
                }else{
                    $btn.val(cfg.title+"("+cfg.num+"s)");
                }
            }, 1000);
    
            $btn.click(cfg.onClick)
        }
    };    
})

return TimerButton;