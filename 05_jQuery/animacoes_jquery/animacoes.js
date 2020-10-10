$(document).ready(function(){
    $("#btn-teste").click(function(){
        
        $("div").animate({
            marginLeft: "200px",
            borderRadius: "20px"
        }, "slow");

        $("div").animate({
            marginTop: "200px",
            borderRadius: "40px"
        }, "slow");

        $("div").animate({
            marginLeft: "0px",
            borderRadius: "60px"
        }, "slow");

        $("div").animate({
            marginTop: "0px",
            borderRadius: "0px"
        }, "slow");
    });
});