$(document).ready(function () {
    $("#toggler").click(function () {
        const className = $("#toggle-btn").attr("class");
        $(".current-image").toggle(200);
        
        if(className == "on"){
            $("#toggle-btn").removeClass("on")
             $("#toggle-btn").addClass("off")
            $("#fill-percentage").removeClass("animate-fill")
        }
        else {
            $("#toggle-btn").removeClass("off")
            $("#toggle-btn").addClass("on")
            $("#fill-percentage").addClass("animate-fill")
        }
    });
});