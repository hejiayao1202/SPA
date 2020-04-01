$(function(){
    var $btn=$('.btn');
    var $txt=$('.txt');
    var $img=$('.img');
    var $tmpImg=$('<img>');

    var strImg=window.localStorage.getItem("img");
    if(strImg!==''){
        $img.attr('src',strImg);
    }

    $btn.click(function(){
        var url=$txt.val();
        if(url==""){
            return;
        }

        // 跨域 临时图片
        $tmpImg.attr('crossOrigin','anonymous');
        $tmpImg.attr('src',url);
    })
    $tmpImg.on('load',function(){
        //画布
        var can=$("<canvas>").get(0);
        var ctx=can.getContext('2d');
        can.width=$tmpImg.get(0).width;
        can.height=$tmpImg.get(0).height;

        ctx.drawImage($tmpImg.get(0),0,0,can.width,can.height);

        var str=can.toDataURL();
        console.log(str);

        window.localStorage.setItem('img',str);

        var strImg=window.localStorage.getItem("img");
        $img.attr('src',strImg);
    })
    
})