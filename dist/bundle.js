(()=>{"use strict";var e,t,n,l,o,s,c,a,i,r,d,u,y,m,v,p,f,g,h,k,E,b;b=document.querySelector(".popup-menu"),document.querySelector(".menu-button").addEventListener("click",(function(){b.style.display="flex"})),b.addEventListener("click",(function(e){e.target.matches(".close-menu-btn img, .scroll a")&&(b.style.display="none")})),k=document.querySelector(".top-menu"),(E=document.getElementById("totop")).style.display="none",window.addEventListener("scroll",(function(){window.scrollY>187&&window.innerWidth<768?k.style="\n        position: fixed;\n        top: 0;\n      ":k.style.position="static",window.scrollY>781?E.style.display="block":E.style.display="none"})),f=document.querySelector(".clubs-list ul"),g=document.getElementById("free_visit_form"),h=document.getElementById("callback_form"),f.style.display="none",document.addEventListener("click",(function(e){var t=e.target;t.matches(".clubs-list>p")&&"none"===f.style.display?f.style.display="block":f.style.display="none",t.matches(".free-visit>p>a")?g.style.display="block":t.matches(".overlay, .close_icon")&&(g.style.display="none"),t.matches(".callback-btn")?h.style.display="block":t.matches(".overlay, .close_icon")&&(h.style.display="none")})),v=document.getElementById("gift"),(p=document.querySelector(".fixed-gift"))&&document.addEventListener("click",(function(e){var t=e.target;t.matches(".fixed-gift img")?(v.style.display="block",p.style.display="none"):t.closest(".overlay, .close_icon, .close-btn")&&(v.style.display="none")})),c=document.getElementById("price-total"),a=document.querySelector(".calculator"),i=document.getElementById("promocode"),r={mozaika:[1999,9900,13900,19900],schelkovo:[2999,14990,21990,24990]},d="mozaika",u=0,y=1,m=function(e,t){return c.textContent=Math.floor(r[e][t]*y)},a&&(m(d,u),a.addEventListener("change",(function(e){var t=e.target;"club-name"===t.getAttribute("name")&&(d=t.value),"card-type"===t.getAttribute("name")&&(u=t.value),m(d,u)})),i.addEventListener("input",(function(){y="ТЕЛО2020"===i.value?.7:1,c.textContent=m(d,u)}))),t=document.querySelector(".main-slider"),n=t.querySelectorAll(".slide"),l=0,o=function(){n[l].style.display="none",++l>=n.length&&(l=0),n[l].style.display="flex"},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;e=setInterval(o,t)},t.addEventListener("mouseover",(function(){clearInterval(e)})),t.addEventListener("mouseout",(function(){s()})),s(),function(){var e,t=document.querySelector(".gallery-slider"),n=t.querySelectorAll(".slide"),l=document.querySelector(".slider-dots"),o=0;!function(){for(var e=0;e<n.length;e++){var t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add("slick-active"),l.append(t)}}();var s=l.querySelectorAll(".dot"),c=function(e,t){e[t].style.display="none"},a=function(e,t,n){e[t].classList.remove(n)},i=function(e,t){e[t].style.display="flex"},r=function(e,t,n){e[t].classList.add(n)};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".slider-arrow span, span img, .dot")&&(c(n,o),a(s,o,"slick-active"),t.matches(".next span img, .next span")?o++:t.matches(".prev span img, .prev span")?o--:t.matches(".dot")&&s.forEach((function(e,n){e===t&&(o=n)})),o>=n.length&&(o=0),o<0&&(o=n.length-1),i(n,o),r(s,o,"slick-active"))}));var d=function(){c(n,o),a(s,o,"slick-active"),++o>=n.length&&(o=0),i(n,o),r(s,o,"slick-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;e=setInterval(d,t)};t.addEventListener("mouseover",(function(t){t.target.matches(".slider-arrow span, span img, .dot")&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){e.target.matches(".slider-arrow span, span img, .dot")&&u()})),u()}()})();