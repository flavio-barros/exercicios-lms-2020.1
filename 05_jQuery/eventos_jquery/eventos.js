$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).hide();
    });
    /*
    $("div").mouseenter(function(){
        $(this).css({
            "background-color": "red",
            "width": "300px"
        });
    });

    $("div").mouseleave(function(){
        $(this).css("background-color", "black");
    });
    */

    $("div").hover(function(){
        $(this).css({
            "background-color": "red",
            "width": "300px"
        });
    }, function(){
        $(this).css("background-color", "black");
    });

    /*
    $("input").focus(function(){
        $(this).css({
            "background-color": "black",
            "padding": "10px",
            "color": "white"
        });
    });

    $("input").blur(function(){
        $(this).css({
            "background-color": "white",
            "padding": "2px",
            "color": "black"
        });
    });
    */

    $("input").on({
        focus: function(){
            $(this).css({
                "background-color": "black",
                "padding": "10px",
                "color": "white"
            });
        },
        blur: function(){
            $(this).css({
                "background-color": "white",
                "padding": "2px",
                "color": "black"
            });
        }
    });
});