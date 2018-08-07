//ナビバークリックイベント(この書き方だとiosで動かない)
$('.nav-link').on('click', function () {
    console.log('クリックされました！');
    var linkpage = this.dataset.linkpage;
    $('.content-main').load("html/" + linkpage);

    //アクティブなページをナビに表示
    $('.nav-item').removeClass("active");
    jQuery(this).parent('li').addClass('active');
});


//画面上をクリックすることでナビバーを閉じる
$('body').on('click', function () {
    $(".navbar-collapse").collapse('hide');
});
