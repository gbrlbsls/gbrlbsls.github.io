$(document).ready(()=> {
    var links = $("nav div ul li");

    links.click((e) => {
        links.removeClass("active");
        e.currentTarget.className += " active";


        var menu = $(".collapse");

        if(menu.hasClass("show")){
            menu.collapse("toggle");
        }
    });
});