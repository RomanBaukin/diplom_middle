(()=>{"use strict";var e,t,n;n=document.querySelector(".popup-menu"),document.querySelector(".menu-button").addEventListener("click",(function(){n.style.display="flex"})),n.addEventListener("click",(function(e){e.target.matches(".close-menu-btn img, .scroll a")&&(n.style.display="none")})),e=document.querySelector(".top-menu"),t=document.getElementById("totop"),window.addEventListener("scroll",(function(){window.scrollY>187&&window.innerWidth<768?e.style="\n        position: fixed;\n        top: 0;\n      ":e.style.position="relative",window.scrollY>781?t.style.display="block":t.style.display="none"}))})();