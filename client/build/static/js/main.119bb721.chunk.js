(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var r=s(2),a=s.n(r),c=s(14),n=s.n(c),l=s(4),i=s.n(l),m=s(15),o=s(17),d=s(16),j=s.n(d),h=s(0),u=function(e){var t=e.streamer;return Object(h.jsx)("div",{className:"stream w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 hover:text-white hover:bg-blue-600",children:Object(h.jsxs)("div",{className:"c-card block bg-white shadow-md overflow-hidden",children:[Object(h.jsx)("div",{className:"relative pb-48 overflow-hidden",children:Object(h.jsx)("img",{className:"thumbnail absolute inset-0 h-full w-full object-cover",src:t.thumbnailUrl,alt:t.title})}),Object(h.jsx)("div",{className:"stream-info h-auto p-5",children:Object(h.jsxs)("div",{className:"ml-3",children:[Object(h.jsx)("p",{className:"font-bold leading-4 mb-3",children:t.streamTitle.length>50?t.streamTitle.substring(0,50).concat("..."):t.streamTitle}),Object(h.jsx)("p",{children:t.userDisplayName})]})})]})})},b=function(){var e="https://dev-streams.herokuapp.com/streams",t=Object(r.useState)([]),s=Object(o.a)(t,2),a=s[0],c=s[1];return Object(r.useEffect)((function(){function t(){return(t=Object(m.a)(i.a.mark((function t(){var s,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get(e);case 2:return s=t.sent,t.next=5,s.data;case 5:r=t.sent,c(r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(h.jsx)("section",{className:"container mx-auto",children:Object(h.jsx)("section",{className:"streams flex flex-wrap -mx-4",children:a.map((function(e){return Object(h.jsx)(u,{streamer:e},e.userId)}))})})},x=(s(13),function(){return Object(h.jsxs)("main",{className:"py-8 px-8",children:[Object(h.jsx)("h1",{className:"text-4xl my-3",children:"Dev Streams"}),Object(h.jsx)("h3",{className:"subtitle text-lg my-2",children:"A curated list of streams featuring live programming and development"}),Object(h.jsxs)("p",{className:"text-md",children:["Created by"," ",Object(h.jsx)("a",{className:"text-twitch hover:text-gray-900",href:"https://github.com/geraldiner",target:"_blank",rel:"noopener noreferrer",children:"@geraldiner"})]}),Object(h.jsx)(b,{})]})});n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.119bb721.chunk.js.map