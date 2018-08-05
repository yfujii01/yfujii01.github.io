$(function () {
    console.log('start!!');
});
//
// $(document).on('click', 'button', function () {
//     console.log('クリックされました！');
// });
//
// //ボタン１のイベント処理
// $(document).on('click', '#btn1', function () {
//     $('#btn2').click(); // ボタン２をクリックする
// })
//
//
// //ボタン２のイベント処理
// $(document).on('click', '#btn2', function () {
//     console.log('ボタン2がクリックされました！');
// })
//
// //藤のイベント処理
// $(document).on('click', '#fuji', function () {
//     console.log('藤がクリックされました！');
//     const txt = $('#fuji').text();
//     $('#fuji').text(txt + "藤");
//
//
//     $(document).ready(function() {
//         $('#header').load("header.html");
//     });
// })

$(document).ready(function() {
    $('.nav').load("html/nav.html");
    $('.content-left').load("html/content-left.html");
    $('.content-main').load("html/content-main.html");
    $('.content-right').load("html/content-right.html");
    $('.ad1').load("html/ad1.html");
});

