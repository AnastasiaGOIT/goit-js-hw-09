!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("div");t.addEventListener("click",(function(){a=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),o(!0)})),e.addEventListener("click",(function(){clearInterval(a),o(!1)})),n.classList.add("start");var a=null;function o(n){e.disabled=!n,t.disabled=n}}();
//# sourceMappingURL=01-color-switcher.82edfe21.js.map
