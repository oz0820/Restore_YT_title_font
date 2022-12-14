// ==UserScript==
// @name         Restore Youtube title fonts
// @namespace    https://twitter.com/oz0820
// @version      2022.12.16.0
// @description  Youtubeのクソダサタイトルフォントを元に戻します。
// @author       oz0820
// @updateURL    https://github.com/oz0820/Restore_YT_title_font/raw/main/Restore_YT_title_font.user.js
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// ==/UserScript==

(function() {
    const sleep = ms => new Promise(res => setTimeout(res, ms))
    // タイトルを読み込むまで良い感じにループしながら待機する
    async function main() {
        for (let i=0; i<30; i++) {
            try {
                let elm = document.getElementsByTagName("h1")[1];
                let list = elm.classList;
                if (list[0] == 'style-scope' && list[1] == 'ytd-watch-metadata') {
                    func(elm);
                    return;
                }
            } catch(e) {
                // エラーが起きて当然なのでcatchは握りつぶします
            }
            await sleep(100);
        }
    }

    // スタイルを無理矢理上書きする。
    // CSSなぞ知らん
    function func(elm) {
        elm.style = "font-size: 18px; font-weight: 400;";
    }

    main();
})();