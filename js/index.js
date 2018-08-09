//起動時イベント
$(function () {
    console.log('start!!');
});

//起動時ロード
$(document).ready(function() {
    $('.nav').load("html/nav.html");
    // $('.content-main').load("html/access.html");
    $('.content-main').load("html/home.html");
    $('.footer').load("html/footer.html");
});
