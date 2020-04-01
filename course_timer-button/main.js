require.config({
    'paths':{
        'jquery':'https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js'
    }
})

require(['jquery'],function($){
    $(function(){
        var $btn=$('#add');
        $btn.click(function(){
            require(['timer'],function(TimerButton){
                var title=$("#title").val();
                var tb=new TimerButton();
                tb.show({
                    num:10,
                    title:title,
                    onClick:function(){
                        console.log("ok");
                    }
                });
            })
        })
    })
})

