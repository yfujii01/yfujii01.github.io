//===============================
// 起動時イベント
//===============================
$(function () {
    console.log('nav.js start!!');

    //===============================
    // JSONからナビアイテム作成
    //===============================
    $.getJSON("json/nav.json", function (data) {
        let ulObj = $("#nav-items-ul");
        let len = data.length;

        for (let i = 0; i < len; i++) {
            let item_li = $("<li>").attr({
                "class": 'nav-item'
            });

            if (data[i].isActive == "true") {
                item_li.addClass("active");
            }

            let item = item_li.append($("<a>").attr({
                    "class": "nav-link",
                    "data-linkpage": data[i].link
                }).text(data[i].title)
            );

            ulObj.append(item);
        }

        eventLinkClick();

        //===============================
        //画面上をクリックすることでナビバーを閉じる
        //===============================
        $('body').on('click', function () {
            $(".navbar-collapse").collapse('hide');
        });
    });
});

function eventLinkClick() {
    //===============================
    //ナビバークリックイベント追加
    //===============================
    $('.nav-link').on('click', function () {
        // console.log('クリックされました！');
        var linkpage = this.dataset.linkpage;

        //1000msかけてゆっくり消える
        $('#mainContent').fadeOut(1000, function () {
            //コールバック

            //フェードアウトが完了したらリンク先のコンテンツを読み込む
            $('.content-main').load("html/" + linkpage);
        });

        //950ms後にフェードインを始める
        //※fadeOutのコールバックとして実装すると一瞬全てのコンテンツが消えるためスクロールバーも消えてしまう
        setTimeout(function () {
            $('#mainContent').fadeIn(1000);
        }, 950);

        //アクティブなページをナビに設定
        $('.nav-item').removeClass("active");
        $(this).parent('li').addClass('active');
    });
}