"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[160],{639:function(e,t,n){n.d(t,{a:function(){return i}});var r="Loader_wrapperSpiner__x8OsO",a=n(920),c=n(184),i=function(){return(0,c.jsx)("div",{className:r,children:(0,c.jsx)(a.s5,{strokeColor:"white",strokeWidth:"5",animationDuration:"0.75",width:"150",visible:!0})})}},155:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(689),a=n(87),c={moviesGalleryContainer:"MoviesList_moviesGalleryContainer__LWOU4",movieCardLink:"MoviesList_movieCardLink__B-PKt",cardLinkMedia:"MoviesList_cardLinkMedia__zQPcd",cardLinkTitle:"MoviesList_cardLinkTitle__Gpjff"},i=n(349),s=n(184),o=function(e){var t=e.films,n=(0,r.TH)();return(0,s.jsx)("ul",{className:c.moviesGalleryContainer,children:t.map((function(e){var t=e.id,r=e.title,o=e.poster_path;return(0,s.jsx)("li",{className:c.movieCard,children:(0,s.jsxs)(a.rU,{className:c.movieCardLink,to:"/movies/".concat(t),state:{from:n},children:[(0,s.jsx)("img",{className:c.cardLinkMedia,src:o?"http://image.tmdb.org/t/p/w342".concat(o):i.l+"?text="+r,alt:r,width:"342",height:"520"}),(0,s.jsx)("h3",{className:c.cardLinkTitle,children:r})]})},t)}))})}},160:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(439),a=n(791),c=n(87),i=n(66),s=n(596),o=n(155),u=n(58),f=n(639),l="Search_wrapSearch__O4m1m",p="Search_wrapForm__0dnaR",d="Search_wrapInput__7fWUg",h="Search_wrapBtn__4S8if",_=n(184),m=function(e){var t=e.onSubmitSearchBar,n=e.value;return(0,_.jsx)("div",{className:l,children:(0,_.jsxs)("form",{className:p,onSubmit:t,children:[(0,_.jsx)("input",{className:d,type:"text",name:"search",autoComplete:"off",autoFocus:!0,defaultValue:n,placeholder:"Search movies"}),(0,_.jsx)("button",{className:h,children:(0,_.jsx)("span",{children:"Search"})})]})})},v=function(){var e,t=(0,a.useState)(!1),n=(0,r.Z)(t,2),l=n[0],p=n[1],d=(0,a.useState)([]),h=(0,r.Z)(d,2),v=h[0],w=h[1],x=(0,c.lr)(),k=(0,r.Z)(x,2),g=k[0],y=k[1],b=null!==(e=g.get("query"))&&void 0!==e?e:"";(0,a.useEffect)((function(){""!==b&&(v.length>0||(p(!0),(0,i.bI)("/search/movie",b).then((function(e){w(e.results)})).catch(i.NI).finally((function(){return p(!1)}))))}),[v,b]);return(0,_.jsxs)("div",{children:[(0,_.jsx)(m,{onSubmitSearchBar:function(e){e.preventDefault();var t=e.currentTarget.search.value.trim().toLowerCase().split(" ").join("+");if(""===t)return s.Am.info("Enter your request, please!"),y({}),void w([]);t!==b?(y({query:t}),w([])):s.Am.info("Please enter a new request!")},value:b}),(0,_.jsxs)("section",{className:u.Z.section,children:[l&&(0,_.jsx)(f.a,{}),(0,_.jsx)(o.Z,{films:v})]})]})}},66:function(e,t,n){n.d(t,{Hx:function(){return w},NI:function(){return k},Y5:function(){return h},bI:function(){return p},uV:function(){return m},vw:function(){return f}});var r=n(861),a=n(757),c=n.n(a),i=n(243),s=n(596),o="https://api.themoviedb.org/3",u="a67099fe4a121db273ee398ffda09784";function f(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o).concat(t,"?api_key=").concat(u),e.next=3,i.Z.get(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o).concat(t,"?api_key=").concat(u,"&query=").concat(n),e.next=3,i.Z.get(r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o).concat(t,"/").concat(n,"?api_key=").concat(u),e.next=3,i.Z.get(r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o).concat(t,"/").concat(n,"/credits?api_key=").concat(u),e.next=3,i.Z.get(r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o).concat(t,"/").concat(n,"/reviews?api_key=").concat(u),e.next=3,i.Z.get(r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){s.Am.error("Oops! Something went wrong! Try refreshing the page or make another choice!")}},349:function(e,t,n){n.d(t,{l:function(){return r},z:function(){return a}});var r="https://placehold.jp/16/7a7a7a/ffffff/138x255.png",a="https://placehold.jp/16/7a7a7a/ffffff/154x231.png"},58:function(e,t){t.Z={sectionTitle:"Pages_sectionTitle__aU-YE",section:"Pages_section__rhEby",sectionSecondaryTitle:"Pages_sectionSecondaryTitle__PZNnQ",back:"Pages_back__8Em4Y",wrapDenails:"Pages_wrapDenails__y8rCZ",wrapDenailsCard:"Pages_wrapDenailsCard__Au+zp",additionalInfo:"Pages_additionalInfo__bX31I",infoBtn:"Pages_infoBtn__6WwxP",info:"Pages_info__KksUC"}}}]);
//# sourceMappingURL=160.b8f3ea9d.chunk.js.map