// ==UserScript==
// @name       				lzy刷课
// @version    				1.0.0
// @license    				MIT

// @grant      				GM_info
// @grant      				GM_getTab
// @grant      				GM_saveTab
// @grant      				GM_setValue
// @grant      				GM_getValue
// @grant      				unsafeWindow
// @grant      				GM_listValues
// @grant      				GM_deleteValue
// @grant      				GM_notification
// @grant      				GM_xmlhttpRequest
// @grant      				GM_getResourceText
// @grant      				GM_addValueChangeListener
// @grant      				GM_removeValueChangeListener
// @run-at     				document-start
// @namespace  				https://enncy.cn
// @source     				https://github.com/lzyszds/skip_school
// @icon       				https://cdn.ocsjs.com/logo.png
// @connect    				localhost
// ==/UserScript==
//学习通刷课脚本
var iframeArr, iframeItem
if (window.location.pathname == "/mycourse/studentstudy")
  setTimeout(() => {
    console.warn('欢迎使用脚本')
    iframeArr = $("#iframe").contents().find("iframe.ans-insertvideo-online");
    iframeItem = iframeArr[0];
    $(iframeItem).contents().find(".vjs-big-play-button").click()
    setInterval(() => {
      const video = $(iframeItem).contents().find("video")
      if (video[0].paused == true) {
        $(iframeItem).contents().find(".vjs-big-play-button").click();
        // $(iframeItem).contents().find("video")[0].play()
      }
    }, 2000)
  }, 3000)




