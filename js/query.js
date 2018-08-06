//起動時イベント
$(function () {
    console.log('start!!');
});

//起動時ロード
$(document).ready(function() {
    $('.nav').load("html/nav.html");
    $('.content-main').load("html/bookmark.html");
    $('.ad1').load("html/ad1.html");
});

//ナビバークリックイベント
$(document).on('click', '.nav-link', function () {
    alert('クリックされました！');
    console.log('クリックされました！');
    var linkpage = this.dataset.linkpage;
    $('.content-main').load("html/" + linkpage);

    //アクティブなページをナビに表示
    $('.nav-item').removeClass("active");
    jQuery(this).parent('li').addClass('active');
});

//画面上をクリックすることでナビバーを閉じる
$(document).on('click', 'body', function () {
    $(".navbar-collapse").collapse('hide');
});
