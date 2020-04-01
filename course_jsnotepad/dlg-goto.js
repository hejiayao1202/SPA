var $dlgGoto=(function(){
    var cfg={
        container:'body',
    };
    var html='<div class="notepad-dlg-goto">'+
        '<div class="dialog-box">'+
            '<div class="titlebar">'+
                '<p class="title">转到指定行</p>'+
                '<span class="close-btn">×</span>'+
            '</div>'+
            '<div class="main">'+
                '<label class="linenum">行号(L):</label><br/>'+
                '<input class="txt-linenum" type="text" autofocus/><br/>'+
                '<input class="btn-goto" type="button" value="转到"/>'+
                '<input class="btn-cancel" type="button" value="取消"/>'+
            '</div>'+
        '</div>'+
    '</div>';
    var $dlg=$(html);
    function show(conf){
        $(cfg.container).append($dlg);
        // $.extend(cfg,conf);

        // 关闭和取消
        var $close=$(".close-btn");
        $close.click(function(){ 
            // console.log(1);
            $dlg.remove();
        })
        var $cancel=$(".btn-cancel");
        $cancel.click(function(){ 
            // console.log(1);
            $dlg.remove();
        })

        // 换行
        var $goto=$(".btn-goto");
        $goto.click(function(){ 
            var line=$('.txt-linenum').val();
            // console.log(line);
            if(line>=0){
                if(line!=0&&line<10){
                    console.log("goto-btn click!GOTO "+line+" lines");
                }else{
                    alert("行数超出了总行数");
                }
            }else{
                alert("show error message");
            }
        })

    }

    return{
        show:show
    };

}());