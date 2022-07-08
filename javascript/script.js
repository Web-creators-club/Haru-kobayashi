const ham = document.querySelector('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納

ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
  ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.classList.toggle('active');
});

("#manu a").on("click", function() {
  (".header__nav ul").slideToggle();
  (".header").removeClass("#js-hamburger");
  });
  window.addEventListener("scroll", function () {
    // ヘッダーを変数の中に格納する
    const header = document.querySelector("header");
    // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
    header.classList.toggle("scroll-nav", window.scrollY > 870);
  });
  window.addEventListener("scroll", function () {
    // ヘッダーを変数の中に格納する
    const header = document.querySelector("header");
    // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
    header.classList.toggle("scroll-nav-contact-page", window.scrollY > 460);
  });