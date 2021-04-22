
$(document).ready(function () {
    $("#login-body").fadeIn(700);
    
    $("#sign-in-btm").click(function(){
        //$("#login-div").addClass("position-absolute").animate({ left: "+=200"}, 500);
        
        //$("#login-div").fadeOut(500,function(){$("#password-change-div").fadeIn(500)});
        
        $("#login-div").fadeOut(700,function(){$("#password-change-div").fadeIn(700)});
    });

    $("#change-password-back-btm").click(function(){

        $("#password-change-div").fadeOut(700,function(){$("#login-div").fadeIn(700)});

    });



    $("#change-password-btm").click(function (e) { 
        $("#login-body").fadeOut(700,function(){
          
            window.location.href = "index.html";

        });
        
    });




});