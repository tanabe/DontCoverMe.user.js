// ==UserScript==
// @name           don't cover me
// @namespace      http://blog.kaihatsubu.com
// @description    remove B! button's alt and title. its obstruction on Chrome.
// @version        1.0
// @include        http://b.hatena.ne.jp/*
// ==/UserScript==
(function() {
  var aTags = document.querySelectorAll(".addbookmark a");
  var images = document.querySelectorAll(".addbookmark a img");
  for (var i = 0; i < aTags.length; i++) {
    aTags[i].title = "";
    images[i].title = "";
    images[i].alt = "";
  }
})();
