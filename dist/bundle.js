(()=>{"use strict";var e,t,n,l,o,s,c,i,a,r,d,u,y,m,v,p,f,g,h,k,E;E=document.querySelector(".popup-menu"),document.querySelector(".menu-button").addEventListener("click",(function(){E.style.display="flex"})),E.addEventListener("click",(function(e){e.target.matches(".close-menu-btn img, .scroll a")&&(E.style.display="none")})),h=document.querySelector(".top-menu"),(k=document.getElementById("totop")).style.display="none",window.addEventListener("scroll",(function(){window.scrollY>187&&window.innerWidth<768?h.style="\n        position: fixed;\n        top: 0;\n      ":h.style.position="static",window.scrollY>781?k.style.display="block":k.style.display="none"})),p=document.querySelector(".clubs-list ul"),f=document.getElementById("free_visit_form"),g=document.getElementById("callback_form"),p.style.display="none",document.addEventListener("click",(function(e){var t=e.target;t.matches(".clubs-list>p")&&"none"===p.style.display?p.style.display="block":p.style.display="none",t.matches(".free-visit>p>a")?f.style.display="block":t.matches(".overlay, .close_icon")&&(f.style.display="none"),t.matches(".callback-btn")?g.style.display="block":t.matches(".overlay, .close_icon")&&(g.style.display="none")})),m=document.getElementById("gift"),(v=document.querySelector(".fixed-gift"))&&document.addEventListener("click",(function(e){var t=e.target;t.matches(".fixed-gift img")?(m.style.display="block",v.style.display="none"):t.closest(".overlay, .close_icon, .close-btn")&&(m.style.display="none")})),c=document.getElementById("price-total"),i=document.querySelector(".calculator"),a=document.getElementById("promocode"),r={mozaika:[1999,9900,13900,19900],schelkovo:[2999,14990,21990,24990]},d=function(e,t){return c.textContent=r[e][t]},u="mozaika",y=0,i&&(d(u,y),i.addEventListener("change",(function(e){var t=e.target;"club-name"===t.getAttribute("name")&&(u=t.value),"card-type"===t.getAttribute("name")&&(y=t.value),d(u,y)})),a.addEventListener("input",(function(){"ТЕЛО2020"===a.value?c.textContent=.7*d(u,y):d(u,y)}))),t=document.querySelector(".main-slider"),n=t.querySelectorAll(".slide"),l=0,o=function(){n[l].style.display="none",++l>=n.length&&(l=0),n[l].style.display="flex"},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;e=setInterval(o,t)},t.addEventListener("mouseover",(function(){clearInterval(e)})),t.addEventListener("mouseout",(function(){s()})),s(),function(){var e,t=document.querySelector(".gallery-slider"),n=t.querySelectorAll(".slide"),l=document.querySelector(".slider-dots"),o=0;!function(){for(var e=0;e<n.length;e++){var t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add("slick-active"),l.append(t)}}();var s=l.querySelectorAll(".dot"),c=function(e,t){e[t].style.display="none"},i=function(e,t,n){e[t].classList.remove(n)},a=function(e,t){e[t].style.display="flex"},r=function(e,t,n){e[t].classList.add(n)};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".slider-arrow span, span img, .dot")&&(c(n,o),i(s,o,"slick-active"),t.matches(".next span img, .next span")?o++:t.matches(".prev span img, .prev span")?o--:t.matches(".dot")&&s.forEach((function(e,n){e===t&&(o=n)})),o>=n.length&&(o=0),o<0&&(o=n.length-1),a(n,o),r(s,o,"slick-active"))}));var d=function(){c(n,o),i(s,o,"slick-active"),++o>=n.length&&(o=0),a(n,o),r(s,o,"slick-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;e=setInterval(d,t)};t.addEventListener("mouseover",(function(t){t.target.matches(".slider-arrow span, span img, .dot")&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){e.target.matches(".slider-arrow span, span img, .dot")&&u()})),u()}()})();