"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{639:function(t,n,e){e.d(n,{a:function(){return c}});var r="Loader_wrapperSpiner__x8OsO",a=e(920),i=e(184),c=function(){return(0,i.jsx)("div",{className:r,children:(0,i.jsx)(a.s5,{strokeColor:"white",strokeWidth:"5",animationDuration:"0.75",width:"150",visible:!0})})}},155:function(t,n,e){e.d(n,{Z:function(){return s}});var r=e(689),a=e(87),i={moviesGalleryContainer:"MoviesList_moviesGalleryContainer__LWOU4",movieCardLink:"MoviesList_movieCardLink__B-PKt",cardLinkMedia:"MoviesList_cardLinkMedia__zQPcd",cardLinkTitle:"MoviesList_cardLinkTitle__Gpjff"},c=e(349),o=e(184),s=function(t){var n=t.films,e=(0,r.TH)();return(0,o.jsx)("ul",{className:i.moviesGalleryContainer,children:n.map((function(t){var n=t.id,r=t.title,s=t.poster_path;return(0,o.jsx)("li",{className:i.movieCard,children:(0,o.jsxs)(a.rU,{className:i.movieCardLink,to:"/movies/".concat(n),state:{from:e},children:[(0,o.jsx)("img",{className:i.cardLinkMedia,src:s?"http://image.tmdb.org/t/p/w342".concat(s):c.l+"?text="+r,alt:r,width:"342",height:"520"}),(0,o.jsx)("h3",{className:i.cardLinkTitle,children:r})]})},n)}))})}},415:function(t,n,e){e.r(n);var r=e(439),a=e(791),i=e(66),c=e(155),o=e(639),s=e(596),u=e(58),f=(e(462),e(184));n.default=function(){var t=(0,a.useState)(!0),n=(0,r.Z)(t,2),e=n[0],p=n[1],l=(0,a.useState)([]),d=(0,r.Z)(l,2),h=d[0],_=d[1];return(0,a.useEffect)((function(){h.length>0||(0,i.vw)("/trending/movie/day").then((function(t){_(t.results)})).catch(i.NI).finally((function(){return p(!1)}))}),[h]),(0,f.jsxs)("section",{className:u.Z.section,children:[(0,f.jsx)("h2",{className:u.Z.sectionTitle,children:"Movies in trend"}),e&&(0,f.jsx)(o.a,{}),(0,f.jsx)(c.Z,{films:h}),(0,f.jsx)(s.Ix,{autoClose:3e3})]})}},66:function(t,n,e){e.d(n,{Hx:function(){return k},NI:function(){return x},Y5:function(){return h},bI:function(){return l},uV:function(){return m},vw:function(){return f}});var r=e(861),a=e(757),i=e.n(a),c=e(243),o=e(596),s="https://api.themoviedb.org/3",u="a67099fe4a121db273ee398ffda09784";function f(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(s).concat(n,"?api_key=").concat(u),t.next=3,c.Z.get(e);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function t(n,e){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(s).concat(n,"?api_key=").concat(u,"&query=").concat(e),t.next=3,c.Z.get(r);case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,n){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(i().mark((function t(n,e){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(s).concat(n,"/").concat(e,"?api_key=").concat(u),t.next=3,c.Z.get(r);case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function t(n,e){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(s).concat(n,"/").concat(e,"/credits?api_key=").concat(u),t.next=3,c.Z.get(r);case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(i().mark((function t(n,e){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(s).concat(n,"/").concat(e,"/reviews?api_key=").concat(u),t.next=3,c.Z.get(r);case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){o.Am.error("Oops! Something went wrong! Try refreshing the page or make another choice!")}},349:function(t,n,e){e.d(n,{l:function(){return r},z:function(){return a}});var r="https://placehold.jp/16/7a7a7a/ffffff/138x255.png",a="https://placehold.jp/16/7a7a7a/ffffff/154x231.png"},58:function(t,n){n.Z={sectionTitle:"Pages_sectionTitle__aU-YE",section:"Pages_section__rhEby",sectionSecondaryTitle:"Pages_sectionSecondaryTitle__PZNnQ",back:"Pages_back__8Em4Y",wrapDenails:"Pages_wrapDenails__y8rCZ",wrapDenailsCard:"Pages_wrapDenailsCard__Au+zp",additionalInfo:"Pages_additionalInfo__bX31I",infoBtn:"Pages_infoBtn__6WwxP",info:"Pages_info__KksUC"}}}]);
//# sourceMappingURL=415.26d4159e.chunk.js.map