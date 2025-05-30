// deck.js
(function () {
  // ?src=xxx.md で MD ファイルを指定
  const params = new URLSearchParams(location.search);
  const md      = params.get('src') || 'slides.md';   // デフォルト

  // section 要素を生成して挿入
  const sec = document.createElement('section');
  sec.setAttribute('data-markdown', md);
  sec.setAttribute('data-separator', '^---$');
  document.querySelector('.slides').appendChild(sec);

  Reveal.initialize({
    hash: true,
    plugins: [ RevealMarkdown, FitText ],
  });
})();
