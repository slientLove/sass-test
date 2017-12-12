var loadImg = {
    load:function(){
        let oImgs = $(".content").find("img");
        oImgs.each( function(value,index){
            console.log(this);
            let src = $(this).data("src");
            this.src = src;
        })
    },
    getData:function(){
        $.ajax({
            type:"get",
            url:"/data/getData",
            data:{},
            dataType:"json",
            beforesend:function(){
              console.log("发送之前");
            },
            success:function( result ){
               console.log(result);
            },
            error:function(){
                console.log("读取错误");
            }
        })
    }
};
exports = { loadImg }; 