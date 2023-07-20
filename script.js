$(function () {
    $(".menu-link").click(function () {
        $(".menu-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
});

$(function () {
    $(".main-header-link").click(function () {
        $(".main-header-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdowns.forEach((c) => c.classList.remove("is-active"));
        dropdown.classList.add("is-active");
    });
});

$(".search-bar input")
.focus(function () {
    $(".header").addClass("wide");
})
.blur(function () {
    $(".header").removeClass("wide");
});

$(document).click(function (e) { 
    var container = $(".status-button");
    var dd = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        dd.removeClass("is-active");
    }
});

$(function () {
    $(".dropdown").on("click", function (e) {
        $(".content-wrapper").addClass("overlay");
        e.stopPropagation();
    });
    $(document).on("click", function (e) {
        if ($(e.target).is(".dropdown") === false) {
            $(".content-wrapper").removeClass("overlay");
        }
    });
});

const togglebutton = document.querySelector('.dark-light');

togglebutton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});


