!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("slidePage",[],e):"object"==typeof exports?exports.slidePage=e():t.slidePage=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SlidePage=e.SlideContainer=void 0;var s=i(1),r=n(s),o=i(11),a=n(o);e.SlideContainer=r["default"],e.SlidePage=a["default"]},function(t,e,i){i(2);var n=i(7)(i(8),i(10),"data-v-333c1d52",null);t.exports=n.exports},function(t,e,i){var n=i(3);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);i(5)("0a4df297",n,!0)},function(t,e,i){e=t.exports=i(4)(),e.push([t.id,".slide-container[data-v-333c1d52]{width:100%;height:100%;overflow:hidden;position:relative}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(n[r]=!0)}for(s=0;s<e.length;s++){var o=e[s];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=c[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(r(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var o=[],s=0;s<i.parts.length;s++)o.push(r(i.parts[s]));c[i.id]={id:i.id,refs:1,parts:o}}}}function s(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function r(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(f)return v;n.parentNode.removeChild(n)}if(g){var r=p++;n=u||(u=s()),e=o.bind(null,n,r,!1),i=o.bind(null,n,r,!0)}else n=s(),e=a.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function o(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function a(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document,h=i(6),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,f=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){f=i;var s=h(t,e);return n(s),function(e){for(var i=[],r=0;r<s.length;r++){var o=s[r],a=c[o.id];a.refs--,i.push(a)}e?(s=h(t,e),n(s)):s=[];for(var r=0;r<i.length;r++){var a=i[r];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete c[a.id]}}}};var m=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],n={},s=0;s<e.length;s++){var r=e[s],o=r[0],a=r[1],l=r[2],h=r[3],c={id:t+":"+s,css:a,media:l,sourceMap:h};n[o]?n[o].parts.push(c):i.push(n[o]={id:o,parts:[c]})}return i}},function(t,e){t.exports=function(t,e,i,n){var s,r=t=t||{},o=typeof t["default"];"object"!==o&&"function"!==o||(s=t,r=t["default"]);var a="function"==typeof r?r.options:r;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),i&&(a._scopeId=i),n){var l=Object.create(a.computed||null);Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}}),a.computed=l}return{esModule:s,exports:r,options:a}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(9),r=n(s);e["default"]={data:function(){return{}},props:{refresh:{type:Boolean,"default":!0},useAnimation:{type:Boolean,"default":!0},useSwipe:{type:Boolean,"default":!0},useWheel:{type:Boolean,"default":!0}},mounted:function(){this.$nextTick(function(){var t=this;this.slidePage=new r["default"]({slideContainer:this.$el,slidePages:this.$el.children,refresh:this.refresh,useWheel:this.useWheel,useSwipe:this.useSwipe,useAnimation:this.useAnimation,before:function(e,i,n){t.$emit("before",e,i,n)},after:function(e,i,n){t.$emit("after",e,i,n)}})})},methods:{update:function(){this.slidePage.update(this.$el.children)},destroy:function(){this.slidePage.destroy()},slideFire:function(t){this.slidePage.slideFire(t)},slideTo:function(t){this.slidePage.slideTo(t)},slideNext:function(){this.slidePage.slideNext()},slidePrev:function(){this.slidePage.slidePrev()}}}},function(t,e,i){var n,s;!function(i,r){"use strict";n=[],s=function(){return r(i,i.document)}.apply(e,n),!(void 0!==s&&(t.exports=s))}("undefined"!=typeof window?window:this,function(t,e){"use strict";var i=!1;try{var n=Object.defineProperty({},"passive",{get:function(){i=!0}});t.addEventListener("test",null,n)}catch(t){}var s=function(e){var i=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=t.location.search.substr(1).match(i);return null!=n?unescape(n[2]):null},r=function(t,e){for(var i in e)t[i]=e[i];return t},o=function(t,e){var i=t.nodeName===e.nodeName,n=t.nodeType===e.nodeType,s=t.innerHTML===e.innerHTML;return t.className.replace(/ transition/g,"")===e.className.replace(/ transition/g,"")&&i&&n&&s},a=function(t){if(t instanceof NodeList||t instanceof HTMLCollection&&t.length>0){for(var e=0,i=0,n=t.length;i<n;i++)t[i]instanceof Element&&e++;return e===n}return t instanceof Element},l={},h={wheelFunc:function(e){(e=e||t.event).wheelDeltaY<0||e.wheelDelta<0||e.detail>0?this.canSlide&&this.canNext&&this.slideNext():(e.wheelDeltaY>0||e.wheelDelta>0||e.detail<0)&&this.canSlide&&this.canPrev&&this.slidePrev()},touchStart:function(t){l.startpoint=t.targetTouches[0].clientY},touchMove:function(t){var e=t.targetTouches[0].clientY-l.startpoint;!this.canPrev&&e>5&&(this.isScroll=!0),!this.canNext&&e<-5&&(this.isScroll=!0),!this.isScroll&&t.preventDefault(),l.endpoint=t.targetTouches[0].clientY},touchEnd:function(t){return 0!==l.endpoint&&(l.endpoint-l.startpoint<-60?this.canSlide&&this.canNext&&this.slideNext():l.endpoint-l.startpoint>60&&this.canSlide&&this.canPrev&&this.slidePrev(),l.startpoint=0,l.endpoint=0,void 0)},transitionEnd:function(t){t.target.isEqualNode(this.items[this.page-1])&&("next"==this.direction?(this.opt.after(this.page-1,this.direction,this.page),this.opt.refresh&&c.resetAnimation.call(this,this.page-2)):"prev"==this.direction&&(this.opt.after(this.page+1,this.direction,this.page),this.opt.refresh&&c.resetAnimation.call(this,this.page)),this.canSlide=!0)}},c={slideScroll:function(e){var i=this.items[e].children[0].offsetHeight,n=t.innerHeight,s=function(e){var n=t.innerHeight,s=i<=this.items[e].scrollTop+n,r=0==this.items[e].scrollTop;this.canPrev=r&&!s,this.canNext=s&&!r,this.isScroll=!(s||r)}.bind(this);i-n>20?(this.items[e].children[0].children[0].focus(),s(e),"next"==this.direction?this.items[e].scrollTop=0:"prev"==this.direction&&(this.items[e].scrollTop=i-n),this.items[e].addEventListener("scroll",function(t){s(e)})):(this.canPrev=!0,this.canNext=!0,this.isScroll=!1)},resetAnimation:function(t){if(this.opt.useAnimation&&this.opt.refresh){if(!this.items[t])return!1;var e=this.items[t].querySelectorAll(".step"),i=this.items[t].querySelectorAll(".lazy");e.length>0&&e.forEach(function(t){t.style.display="none"}),i.length>0&&i.forEach(function(t){t.style.display="none"})}},runAnimation:function(t,e){this.opt.useAnimation&&this.items[t].querySelectorAll(e||".step").forEach(function(t){var e=t.getAttribute("data-delay")||100,i=setTimeout(function(){t.style.display="",clearTimeout(i)},e)})},initAnimation:function(t,e){if(this.opt.useAnimation){var i=this.container.querySelectorAll(".step"),n=this.container.querySelectorAll(".lazy");i.length>0&&i.forEach(function(t){t.style.display="none"}),n.length>0&&n.forEach(function(t){t.style.display="none"}),c.runAnimation.call(this,e)}for(var s,r=0;s=this.items[r];r++)r===e?s.style.transform="translate3d(0, 0, 0)":r<e?s.style.transform="translate3d(0, -100%, 0)":r>e&&(s.style.transform="translate3d(0, 100%, 0)"),function(t){var e=setTimeout(function(){t.classList.add("transition"),clearTimeout(e)})}(s)},initEvent:function(){this.opt.useWheel&&(e.addEventListener("DOMMouseScroll",this.eventHandler.wheelFunc,!!i&&{passive:!0}),e.addEventListener("mousewheel",this.eventHandler.wheelFunc,!!i&&{passive:!0})),this.opt.useSwipe&&(l={startpoint:0,endpoint:0},this.container.addEventListener("touchstart",this.eventHandler.touchStart,!!i&&{passive:!0}),this.container.addEventListener("touchmove",this.eventHandler.touchMove),this.container.addEventListener("touchend",this.eventHandler.touchEnd,!!i&&{passive:!0})),this.container.addEventListener("transitionend",this.eventHandler.transitionEnd)}},d=function(t){var i={page:1*s("page")||1,slidePages:".slide-page",slideContainer:".slide-container",after:null,before:null,refresh:!1,useWheel:!0,useSwipe:!0,useAnimation:!0};this.canSlide=!0,this.canNext=!0,this.canPrev=!0,this.isScroll=!1,this.opt=r(i,t),this.page=this.opt.page,this.container=a(this.opt.slideContainer)?this.opt.slideContainer:e.querySelector(this.opt.slideContainer),this.items=a(this.opt.slidePages)?this.opt.slidePages:e.querySelectorAll(this.opt.slidePages),this.count=this.items.length,this.direction="",this.eventHandler={};for(var n in h)this.eventHandler[n]=h[n].bind(this);c.initEvent.call(this),c.slideScroll.call(this,this.page-1),c.initAnimation.call(this,this.items,this.page-1),this.slideTo(this.page)};return d.prototype.slideNext=function(t){return!(this.count<=this.page)&&(this.direction="next",c.slideScroll.call(this,this.page),this.items[this.page-1].style.transform="translate3d(0, -100%, 0)",this.items[this.page].style.transform="translate3d(0, 0, 0)",this.page++,this.opt.before(this.page-1,this.direction,this.page),t||(this.canSlide=!1,c.runAnimation.call(this,this.page-1)),void 0)},d.prototype.slidePrev=function(t){return!(1>=this.page)&&(this.direction="prev",c.slideScroll.call(this,this.page-2),this.items[this.page-2].style.transform="translate3d(0, 0, 0)",this.items[this.page-1].style.transform="translate3d(0, 100%, 0)",this.page--,this.opt.before(this.page+1,this.direction,this.page),t||(this.canSlide=!1,c.runAnimation.call(this,this.page-1)),void 0)},d.prototype.slideTo=function(t){if(t>=1&&t<=this.count){if(t==this.page)return!1;if(t>this.page){for(var e=this.page+1;e<t;e++)this.slideNext("optimize");this.slideNext()}else if(t<this.page){for(e=this.page-1;e>t;e--)this.slidePrev("optimize");this.slidePrev()}}},d.prototype.slideFire=function(t){var e=t?t-1:this.page-1;c.runAnimation.call(this,e,".lazy")},d.prototype.destroy=function(){if(this.opt.useAnimation){this.items.length;var t=this.container.querySelectorAll(".step"),i=this.container.querySelectorAll(".lazy");t.length>0&&t.forEach(function(t){t.style.display=""}),i.length>0&&i.forEach(function(t){t.style.display=""}),c.runAnimation.call(this,0)}this.opt.useWheel&&(e.removeEventListener("DOMMouseScroll",this.eventHandler.wheelFunc),e.removeEventListener("mousewheel",this.eventHandler.wheelFunc),this.items[this.page-1].style.transform="translate3d(0, 0, 0)"),this.opt.useSwipe&&(this.container.removeEventListener("touchstart",this.eventHandler.touchStart),this.container.removeEventListener("touchmove",this.eventHandler.touchMove),this.container.removeEventListener("touchend",this.eventHandler.touchEnd)),this.container.removeEventListener("transitionend",this.eventHandler.transitionEnd)},d.prototype.update=function(t){this.canSlide=!0,this.canNext=!0,this.canPrev=!0;for(var i=a(t)?t:e.querySelectorAll(this.opt.slidePages),n=0,s=i.length;n<s;n++){if(this.items[this.page-1]&&o(this.items[this.page-1],i[n])){this.page=n+1;break}n===s-1&&(this.page=1)}this.items=i,this.count=this.items.length,this.slideTo(this.page),c.initAnimation.call(this,this.items,this.page-1)},d})},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide-container"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e,i){i(12);var n=i(7)(i(14),i(15),"data-v-01584164",null);t.exports=n.exports},function(t,e,i){var n=i(13);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);i(5)("43b31d0e",n,!0)},function(t,e,i){e=t.exports=i(4)(),e.push([t.id,".slide-page[data-v-01584164]{position:absolute;top:0;left:0;width:100%;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-text-size-adjust:none;-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d;background-position:50%;transform:translate3d(0,100%,0);-webkit-transform:translate3d(0,100%,0)}.slide-page.transition[data-v-01584164]{transition:all .5s cubic-bezier(.55,.085,0,.99);-webkit-transition:all .5s cubic-bezier(.55,.085,0,.99)}",""])},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide-page"},[i("div",{staticClass:"wrap"},[t._t("default")],2)])},staticRenderFns:[]}}])});