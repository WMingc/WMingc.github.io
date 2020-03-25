$("document").ready(function()
    {
    	console.log("0");
        //点击弹出浮层
        $("#show").click(function()
        {
        	console.log("1");
            //清除之前的样式
            $("#fullScreen,#floatLayer").remove();
            $("body").append
            (
                //占据整个屏幕Div
                "<div id='fullScreen'></div>"+
                //浮层区
                "<div id='floatLayer'>" +
                    "<a href='#' id='hide'>close</a>"+
                "</div>"
            );
            //隐藏浮层
            $("#hide").click(function()
            {
                $("#fullScreen,#floatLayer").remove();
            });
        });
    });