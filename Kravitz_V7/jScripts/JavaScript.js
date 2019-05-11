var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
navItems.forEach(function (e, i) {
    e.addEventListener("click", function (e) {
        navItems.forEach(function (e2, i2) {
            e2.classList.remove("mobile-bottom-nav__item--active");
        })
        this.classList.add("mobile-bottom-nav__item--active");
    });
});

$(document).ready(function () {
    $("#q2").hide();
    $("#q22").hide();

    $("#t").click(function () {
        $(this).css("background-color", "green");
        $("#f1").css("background-color", "grey");
        $("#f2").css("background-color", "gray");
        $("#q2").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");
    });

    $("#f1").click(function () {
        $("#t").css("background-color", "green");
        $(this).css("background-color", "red");
        $("#f2").css("background-color", "gray");
        $("#q2").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");
    });

    $("#f2").click(function () {
        $("#t").css("background-color", "green");
        $("#f1").css("background-color", "grey");
        $(this).css("background-color", "red");
        $("#q2").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");

    });

    $("#q2").click(function () {
        $("#q22").show();
        $("#t2").click(function () {
            $(this).css("background-color", "green");
            $("#f12").css("background-color", "grey");
            $("#f22").css("background-color", "gray");
            $("#t2").off("click");
            $("#f12").off("click");
            $("#f22").off("click");
        });

        $("#f12").click(function () {
            $("#t2").css("background-color", "green");
            $(this).css("background-color", "red");
            $("#f22").css("background-color", "gray");
            $("#t2").off("click");
            $("#f12").off("click");
            $("#f22").off("click");
        });

        $("#f22").click(function () {
            $("#t2").css("background-color", "green");
            $("#f12").css("background-color", "grey");
            $(this).css("background-color", "red");
            $("#t2").off("click");
            $("#f12").off("click");
            $("#f22").off("click");
        });
    });

});


//var acc = document.getElementsByClassName("accordion");
//var i;

//for (i = 0; i < acc.length; i++) {
//    acc[i].addEventListener("click", function () {
//        this.classList.toggle("active");
//        var panel = this.nextElementSibling;
//        if (panel.style.maxHeight) {
//            panel.style.maxHeight = null;
//        } else {
//            panel.style.maxHeight = panel.scrollHeight + "px";
//        }
//    });
//}