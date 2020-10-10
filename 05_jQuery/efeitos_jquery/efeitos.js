$(document).ready(function(){
    $("#btn-ocultar").click(function (){
        $("#box1").hide();
        $("#box2").hide("slow");
        $("#box3").hide(5000, function(){
            alert("A div foi ocultada");
        });
    });

    $("#btn-fadeout").click(function(){
        $("#box1").fadeOut();
        $("#box2").fadeOut("slow");
        $("#box3").fadeOut(5000);
    });

    $("#btn-fadein").click(function(){
        $("#box1").fadeIn();
        $("#box2").fadeIn("slow");
        $("#box3").fadeIn(5000);
    });

    $("#btn-alternar-slide").click(function(){
        $("#box1").slideToggle();
        $("#box2").slideToggle("slow");
        $("#box3").slideToggle(5000);
    });
});