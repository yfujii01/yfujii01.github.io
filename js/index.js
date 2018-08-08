//起動時イベント
$(function () {
    console.log('start!!');
});

//起動時ロード
$(document).ready(function() {
    $('.nav').load("html/nav.html");
    $('.content-main').load("html/home.html");
    $('.ad1').load("html/ad1.html");
    $('.footer').load("html/footer.html");
});
