(()=>{"use strict";function t(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}const i=new(function(){function i(t){var e=t.main,n=t.wrap,o=t.next,r=t.prev,a=t.infinity,l=void 0!==a&&a,s=t.position,d=void 0===s?0:s,c=t.slidesToShow,u=void 0===c?3:c,h=t.responsive,p=void 0===h?[]:h;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),e&&n||console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(e),this.wrap=document.querySelector(n),this.slides=document.querySelector(n).children,this.next=document.querySelector(o),this.prev=document.querySelector(r),this.slidesToShow=u,this.options={position:d,infinity:l,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=p}var o,r;return o=i,(r=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var e,n=function(e,n){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=t(e))){i&&(e=i);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var t=i.next();return l=t.done,t},e:function(t){s=!0,a=t},f:function(){try{l||null==i.return||i.return()}finally{if(s)throw a}}}}(this.slides);try{for(n.s();!(e=n.n()).done;)e.value.classList.add("glo-slider__item")}catch(t){n.e(t)}finally{n.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("sliderCarousel-style");t||((t=document.createElement("style")).id="sliderCarousel-style"),t.textContent="\n      .glo-slider {\n        overflow: hidden !important;\n      }\n      .glo-slider__wrap {\n        display: flex !important;\n        padding: 0 !important;\n        transition: transform 0.5s !important;\n        will-change: transform !important;\n      }\n      .glo-slider__item {\n        margin: 0 !important;\n        flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n      }\n      .glo-slider__prev,\n      .glo-slider__next {\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n      }\n      .glo-slider__next {\n        border-left-color: #19b5fe;\n      }\n      .glo-slider__prev {\n        border-right-color: #19b5fe;\n      }\n\n      .glo-slider__prev:hover,\n      .glo-slider__next:hover,\n      .glo-slider__prev:focus,\n      .glo-slider__next:focus {\n        background: transparent;\n        outline: transparent;\n      }\n    "),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next)}},{key:"responseInit",value:function(){var n,i=this,o=this.slidesToShow,r=this.responsive.map((function(t){return t.breakpoint})),a=Math.max.apply(Math,function(t){if(Array.isArray(t))return e(t)}(n=r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=function(){var t=document.documentElement.clientWidth;if(t<a)for(var e=0;e<r.length;e++)t<r[e]&&(i.slidesToShow=i.responsive[e].slideToShow,i.options.widthSlide=Math.floor(100/i.slidesToShow),i.addStyle());else i.slidesToShow=o,i.options.widthSlide=Math.floor(100/i.slidesToShow),i.addStyle()};l(),window.addEventListener("resize",l)}}])&&n(o.prototype,r),i}())({main:"#services-wrapper",wrap:".services-slider",next:"#services-slider-arrow-right",prev:"#services-slider-arrow-left",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]});function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){s=!0,a=t},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw a}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function a(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,r=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw r}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var s,d,c,u,h,p,f,v,m,y,b,g,w,x,S,k,_,E,q,A,I,L,C;C=document.querySelector(".popup-menu"),document.querySelector(".menu-button").addEventListener("click",(function(){C.style.display="flex"})),C.addEventListener("click",(function(t){t.target.matches(".close-menu-btn img, .scroll a")&&(C.style.display="none")})),I=document.querySelector(".top-menu"),(L=document.getElementById("totop")).style.display="none",window.addEventListener("scroll",(function(){window.scrollY>187&&window.innerWidth<768?I.style="\n        position: fixed;\n        top: 0;\n      ":I.style.position="static",window.scrollY>781?L.style.display="block":L.style.display="none"})),_=document.querySelector(".clubs-list ul"),E=document.getElementById("free_visit_form"),q=document.getElementById("callback_form"),A=document.getElementById("thanks"),_.style.display="none",document.addEventListener("click",(function(t){var e=t.target;e.matches(".clubs-list>p")&&"none"===_.style.display?_.style.display="block":_.style.display="none",e.matches(".free-visit>p>a")?E.style.display="block":e.matches(".overlay, .close_icon")&&(E.style.display="none"),e.matches(".right>.call>.callback-btn")?q.style.display="block":e.matches(".overlay, .close_icon, .close-btn")&&(q.style.display="none",A.style.display="none")})),S=document.getElementById("gift"),(k=document.querySelector(".fixed-gift"))&&document.addEventListener("click",(function(t){var e=t.target;e.matches(".fixed-gift img")?(S.style.display="block",k.style.display="none"):e.closest(".overlay, .close_icon, .close-btn")&&(S.style.display="none")})),f=document.getElementById("price-total"),v=document.querySelector(".calculator"),m=document.getElementById("promocode"),y={mozaika:[1999,9900,13900,19900],schelkovo:[2999,14990,21990,24990]},b="mozaika",g=0,w=1,x=function(t,e){return f.textContent=Math.floor(y[t][e]*w)},v&&(x(b,g),v.addEventListener("change",(function(t){var e=t.target;"club-name"===e.getAttribute("name")&&(b=e.value),"card-type"===e.getAttribute("name")&&(g=e.value),x(b,g)})),m.addEventListener("input",(function(){w="ТЕЛО2020"===m.value?.7:1,f.textContent=x(b,g)}))),d=document.querySelector(".main-slider"),c=d.querySelectorAll(".slide"),u=0,h=function(){c[u].style.display="none",++u>=c.length&&(u=0),c[u].style.display="flex"},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;s=setInterval(h,t)},d.addEventListener("mouseover",(function(){clearInterval(s)})),d.addEventListener("mouseout",(function(){p()})),p(),function(){var t,e=document.querySelector(".gallery-slider"),n=e.querySelectorAll(".slide"),i=document.querySelector(".slider-dots"),o=0;!function(){for(var t=0;t<n.length;t++){var e=document.createElement("li");e.classList.add("dot"),0===t&&e.classList.add("slick-active"),i.append(e)}}();var r=i.querySelectorAll(".dot"),a=function(t,e){t[e].style.display="none"},l=function(t,e,n){t[e].classList.remove(n)},s=function(t,e){t[e].style.display="flex"},d=function(t,e,n){t[e].classList.add(n)};e.addEventListener("click",(function(t){t.preventDefault();var e=t.target;e.matches(".slider-arrow span, span img, .dot")&&(a(n,o),l(r,o,"slick-active"),e.matches(".next span img, .next span")?o++:e.matches(".prev span img, .prev span")?o--:e.matches(".dot")&&r.forEach((function(t,n){t===e&&(o=n)})),o>=n.length&&(o=0),o<0&&(o=n.length-1),s(n,o),d(r,o,"slick-active"))}));var c=function(){a(n,o),l(r,o,"slick-active"),++o>=n.length&&(o=0),s(n,o),d(r,o,"slick-active")},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;t=setInterval(c,e)};e.addEventListener("mouseover",(function(e){e.target.matches(".slider-arrow span, span img, .dot")&&clearInterval(t)})),e.addEventListener("mouseout",(function(t){t.target.matches(".slider-arrow span, span img, .dot")&&u()})),u()}(),i.init(),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(t);function i(t){var n=t.keyCode,i=e,o=i.replace(/\D/g,""),r=this.value.replace(/\D/g,""),a=0,l=i.replace(/[_\d]/g,(function(t){return a<r.length?r.charAt(a++)||o.charAt(a):t}));-1!==(a=l.indexOf("_"))&&(l=l.slice(0,a));var s=i.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(s=new RegExp("^"+s+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=l),"blur"===t.type&&this.value.length<5&&(this.value="")}var r,a=o(n);try{for(a.s();!(r=a.n()).done;){var l=r.value;l.addEventListener("input",i),l.addEventListener("focus",i),l.addEventListener("blur",i)}}catch(t){a.e(t)}finally{a.f()}}("[name=phone]"),function(){var t=document.getElementById("thanks"),e=t.querySelector(".form-content p"),n=document.createElement("div"),i=document.querySelectorAll("form"),o=document.querySelectorAll("form input"),r=document.getElementById("footer_leto_mozaika"),l=document.getElementById("footer_leto_schelkovo"),s=function(){setTimeout((function(){n.textContent=""}),3e3)};n.style.cssText="\n    color: red;\n    margin-top: 10px;\n    padding: 0 10px;\n  ",o.forEach((function(t){t.addEventListener("input",(function(t){var e=t.target;e.matches("[name=name]")&&"promocode"!==e.id&&(e.value=e.value.replace(/[^а-яё\s]/gi,""))}))})),i.forEach((function(i){i.addEventListener("submit",(function(i){i.preventDefault();var c=i.target;if(c.appendChild(n),"footer_form"!==c.id){var u,h=a(c.elements);try{for(h.s();!(u=h.n()).done;){var p=u.value;if("checkbox"===p.type&&!p.checked)return n.textContent="Пожалуйста, подтвердите согласие на обработку персональных данных",void s();if("tel"===p.type&&p.value.length<18)return n.textContent="Введите полный номер телефона",void s();if("text"===p.type&&"promocode"!==p.id&&(p.value.length<2||p.value.length>50))return n.textContent="Имя должно состоять как минимум из 2-х символов, максимум 50",void s()}}catch(t){h.e(t)}finally{h.f()}}else{if(!r.checked&&!l.checked)return n.textContent="Пожалуйста, выберите клуб",void s();var f,v=a(c.elements);try{for(v.s();!(f=v.n()).done;){var m=f.value;if("tel"===m.type&&m.value.length<18)return n.textContent="Введите полный номер телефона",void s()}}catch(t){v.e(t)}finally{v.f()}}if(c.matches("#footer_form, #card_order, #banner-form, #form1, #form2")){t.style.display="block",e.innerHTML='\n      <div class="loadingio-spinner-spin-86w69p27foq"><div class="ldio-h8sab6b0wqe">\n      <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>\n      <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>\n      </div></div>\n      <style type="text/css">\n      @keyframes ldio-h8sab6b0wqe {\n      0% {\n        opacity: 1;\n        backface-visibility: hidden;\n        transform: translateZ(0) scale(1.5,1.5);\n      } 100% {\n        opacity: 0;\n        backface-visibility: hidden;\n        transform: translateZ(0) scale(1,1);\n      }\n    }\n    .ldio-h8sab6b0wqe div > div {\n      position: absolute;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      background: #ffd11a;\n      animation: ldio-h8sab6b0wqe 1s linear infinite;\n    }.ldio-h8sab6b0wqe div:nth-child(1) > div {\n      left: 75px;\n      top: 45px;\n      animation-delay: -0.875s;\n    }\n    .ldio-h8sab6b0wqe > div:nth-child(1) {\n      transform: rotate(0deg);\n      transform-origin: 80px 50px;\n    }.ldio-h8sab6b0wqe div:nth-child(2) > div {\n      left: 66px;\n      top: 66px;\n      animation-delay: -0.75s;\n    }\n    .ldio-h8sab6b0wqe > div:nth-child(2) {\n      transform: rotate(45deg);\n      transform-origin: 71px 71px;\n    }.ldio-h8sab6b0wqe div:nth-child(3) > div {\n      left: 45px;\n      top: 75px;\n      animation-delay: -0.625s;\n    }\n    .ldio-h8sab6b0wqe > div:nth-child(3) {\n      transform: rotate(90deg);\n      transform-origin: 50px 80px;\n    }.ldio-h8sab6b0wqe div:nth-child(4) > div {\n      left: 24px;\n      top: 66px;\n      animation-delay: -0.5s;\n    }\n    .ldio-h8sab6b0wqe > div:nth-child(4) {\n      transform: rotate(135deg);\n      transform-origin: 29px 71px;\n    }.ldio-h8sab6b0wqe div:nth-child(5) > div {\n      left: 15px;\n      top: 45px;\n      animation-delay: -0.375s;\n    }\n    .ldio-h8sab6b0wqe > div:nth-child(5) {\n      transform: rotate(180deg);\n      transform-origin: 20px 50px;\n    }.ldio-h8sab6b0wqe div:nth-child(6) > div {\n      left: 24px;\n      top: 24px;\n      animation-delay: -0.25s;\n    }\n    .ldio-h8sab6b0wqe > div:nth-child(6) {\n      transform: rotate(225deg);\n      transform-origin: 29px 29px;\n    }.ldio-h8sab6b0wqe div:nth-child(7) > div {\n      left: 45px;\n      top: 15px;\n      animation-delay: -0.125s;\n    }\n    .ldio-h8sab6b0wqe > div:nth-child(7) {\n      transform: rotate(270deg);\n      transform-origin: 50px 20px;\n    }.ldio-h8sab6b0wqe div:nth-child(8) > div {\n      left: 66px;\n      top: 24px;\n      animation-delay: 0s;\n    }\n    .ldio-h8sab6b0wqe > div:nth-child(8) {\n      transform: rotate(315deg);\n      transform-origin: 71px 29px;\n    }\n    .loadingio-spinner-spin-86w69p27foq {\n      width: 84px;\n      height: 84px;\n      display: inline-block;\n      overflow: hidden;\n      background: none;\n    }\n    .ldio-h8sab6b0wqe {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      transform: translateZ(0) scale(0.84);\n      backface-visibility: hidden;\n      transform-origin: 0 0; /* see note above */\n    }\n    .ldio-h8sab6b0wqe div { box-sizing: content-box; }\n    /* generated by https://loading.io/ */\n    </style>';var y=new FormData(c),b={};y.forEach((function(t,e){b[e]=t})),d(b).then((function(n){if(200!==n.status)throw new Error("status network not 200");o.forEach((function(t){t.value=""})),e.textContent="Спасибо! Мы скоро с вами свяжемся",setTimeout((function(){t.style.display="none"}),5e3)})).catch((function(t){e.textContent="Что то пошло не так...",console.error(t)}))}}))}));var d=function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}}()})();