(function(e){function t(t){for(var r,o,l=t[0],i=t[1],c=t[2],d=0,f=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==s[i]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"27dc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navigation"),n("main",[n("Welcome"),n("Work"),n("Skills")],1)],1)},a=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("nav",[n("ul",{staticClass:"jsz-nav-links"},[n("li",[n("a",{attrs:{href:"#jsz-welcome-screen"}},[e._v("Home")])]),n("li",[n("a",{attrs:{href:"#jsz-work-screen"}},[e._v("Work")])]),n("li",[n("a",{attrs:{href:"#jsz-skills-screen"}},[e._v("Skills")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("About")])])])]),n("div",{staticClass:"menu-btn",attrs:{id:"navToggler"}},[n("div",{staticClass:"menu-btn_burger"})])])}],i=n("b85c"),c={name:"Navigation",data:function(){return{menuOpen:!1}},methods:{scrollEffect:function(){window.addEventListener("scroll",(function(){var e=window.pageYOffset||document.body.scrollTop;e>0?document.getElementsByTagName("header")[0].classList.add("jsz-scroll"):document.getElementsByTagName("header")[0].classList.remove("jsz-scroll")}))},toggleNavMenu:function(){var e=this;document.getElementById("navToggler").addEventListener("click",(function(){e.menuOpen?e.closeMenu():e.openMenu()}))},openMenu:function(){document.getElementById("navToggler").classList.add("open"),document.getElementsByTagName("nav")[0].classList.add("opened"),this.menuOpen=!0},closeMenu:function(){document.getElementById("navToggler").classList.remove("open"),document.getElementsByTagName("nav")[0].classList.remove("opened"),this.menuOpen=!1},smoothScroll:function(e){e.preventDefault();var t=e.target.getAttribute("href"),n=document.querySelector(t).offsetTop;this.closeMenu(),scroll({top:n,behavior:"smooth"})}},created:function(){this.scrollEffect()},mounted:function(){this.toggleNavMenu();var e,t=document.querySelectorAll(".jsz-nav-links a"),n=Object(i["a"])(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;r.addEventListener("click",this.smoothScroll)}}catch(s){n.e(s)}finally{n.f()}}},u=c,d=n("2877"),f=Object(d["a"])(u,o,l,!1,null,null,null),p=f.exports,m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"jsz-welcome-screen"}},[n("div",{attrs:{id:"jsz-welcome-img"}}),n("div",{attrs:{id:"jsz-welcome-text"}},[n("p",{attrs:{id:"jsz-name"}},[n("span",{staticClass:"jsz-blue-letter"},[e._v("Jan")]),e._v(" Szotkowski")]),n("p",{attrs:{id:"jsz-desc"}},[e._v("Development "),n("span",{staticClass:"jsz-blue-letter"},[e._v("&")]),n("br"),e._v(" Design")])]),n("div",{attrs:{id:"jsz-arrows"}})])}],h={name:"Welcome"},b=h,g=Object(d["a"])(b,m,v,!1,null,null,null),j=g.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"jsz-work-screen"}},[n("div",{attrs:{id:"jsz-work-wrap"}},[n("div",{attrs:{id:"jsz-work-grid"}},[n("div",{staticClass:"jsz-work-container jsz-npm-container"},[n("a",{attrs:{href:"https://www.npmjs.com/~jan_johanx",target:"_blank"}},[n("i",{staticClass:"fab fa-npm"})])]),n("div",{staticClass:"jsz-work-container jsz-github-container"},[n("a",{attrs:{href:"https://github.com/JanJohanX",target:"_blank"}},[n("i",{staticClass:"fab fa-github"})])]),n("div",{staticClass:"jsz-work-container jsz-dribbble-container"},[n("a",{attrs:{href:"https://dribbble.com/Jan-Szotkowski",target:"_blank"}},[n("i",{staticClass:"fab fa-dribbble"})])])])])])}],w={name:"Work"},y=w,z=Object(d["a"])(y,_,k,!1,null,null,null),S=z.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"jsz-skills-screen"}},[n("div",{attrs:{id:"jsz-skills-wrap"}},e._l(e.skillsArr,(function(t){return n("p",[e._v(e._s(t))])})),0)])},E=[],M={name:"Skills",data:function(){return{skillsArr:["Vue.js","Nuxt.js","JavaScript","HTML5","CSS","Sass/SCSS","PHP","Node.js","MySQL","MariaDB","Handlebars","Express","MongoDB","JWT","bcrypt.js","Figma","F3 framework","phpMyAdmin"]}},mounted:function(){this.skillsArr.sort((function(){return.5-Math.random()}))}},x=M,T=Object(d["a"])(x,O,E,!1,null,null,null),C=T.exports,L={name:"App",components:{Navigation:p,Welcome:j,Work:S,Skills:C}},N=L,B=(n("5c0b"),Object(d["a"])(N,s,a,!1,null,null,null)),P=B.exports;n("27dc");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(P)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),s=n.n(r);s.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.1488c64a.js.map