(this["webpackJsonpnasa-fe"]=this["webpackJsonpnasa-fe"]||[]).push([[0],{207:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(31),r=n.n(a),s=n(18),i=n(3),l=n(19),o=n(6),u=n(7),h=n.n(u),d=n(14);function j(){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://nasa-spacex-launch.herokuapp.com/v1".concat("/planets"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return m.apply(this,arguments)}function m(){return(m=Object(d.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://nasa-spacex-launch.herokuapp.com/v1".concat("/launches"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return O.apply(this,arguments)}function O(){return(O=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://nasa-spacex-launch.herokuapp.com/v1".concat("/launches"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{ok:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://nasa-spacex-launch.herokuapp.com/v1".concat("/launches/",t),{method:"delete"});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{ok:!1});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var y=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useCallback)(Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(c.useEffect)((function(){r()}),[r]),n};var v=function(e,t,n){var a=Object(c.useState)([]),r=Object(l.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(l.a)(o,2),j=u[0],b=u[1],m=Object(c.useCallback)(Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(c.useEffect)((function(){m()}),[m]),{launches:s,isPendingLaunch:j,submitLaunch:Object(c.useCallback)(function(){var t=Object(d.a)(h.a.mark((function t(c){var a,r,s,i,l,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),a=new FormData(c.target),r=new Date(a.get("launch-day")),s=a.get("mission-name"),i=a.get("rocket-name"),l=a.get("planets-selector"),t.next=8,x({launchDate:r,mission:s,rocket:i,destination:l});case 8:o=t.sent,o.Ok?(m(),setTimeout((function(){b(!1),e()}),800)):n();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[m,e,n]),abortLaunch:Object(c.useCallback)(function(){var e=Object(d.a)(h.a.mark((function e(c){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(c);case 2:a=e.sent,a.ok?(m(),t()):n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[m,t,n])}},k=n(16),w=n(23),N=n(0),S=Object(i.withStyles)((function(){return{root:{margin:"0 auto",maxWidth:800},"@media (max-width: 800px)":{root:{margin:"0 12px"}}}}))((function(e){var t=e.classes,n=e.className,c=e.children,a=Object(w.a)(e,["classes","className","children"]);return Object(N.jsx)("div",Object(k.a)(Object(k.a)({className:"".concat(t.root," ").concat(n)},a),{},{children:c}))})),L=Object(i.withSounds)()((function(e){var t=e.children,n=e.sounds,c=e.onClick,a=Object(w.a)(e,["children","sounds","onClick"]);return Object(N.jsx)("span",Object(k.a)(Object(k.a)({},a),{},{onClick:function(e){n.click&&n.click.play(),c&&c(e)},children:t}))})),A=Object(i.withStyles)((function(e){return{root:{display:"flex",flexDirection:"row",lineHeight:"80px"},logo:{display:"inherit",marginTop:"15px"},nav:{display:"inherit"},banner:{display:"inherit",fontWeight:"bold",marginLeft:"10px",marginRight:"15px",fontSize:28},clickable:{fontSize:21,"& i":{marginRight:e.padding/2,fontSize:24}},link:{color:e.color.content,textDecoration:"none"},button:{padding:[0,e.padding/2]},"@media (max-width: 800px)":{logo:{display:"none"},img:{display:"none"},banner:{display:"none"},button:{padding:[0,8]},clickable:{fontSize:16}}}}))((function(e){var t=e.classes,n=e.onNav,c=Object(w.a)(e,["classes","onNav"]);return Object(N.jsx)(i.Header,{animate:!0,children:Object(N.jsxs)(S,Object(k.a)(Object(k.a)({className:t.root},c),{},{children:[Object(N.jsx)("img",{src:"/favicon.png",alt:"",className:t.img,style:{margin:"15px 10px 15px 0",height:"50px",width:"auto"}}),Object(N.jsx)(i.Logo,{animate:!0,size:50,className:t.logo,layer:"header"}),Object(N.jsx)(i.Words,{animate:!0,className:t.banner,children:"NASA Mission Control"}),Object(N.jsxs)("nav",{className:"".concat(t.nav),children:[Object(N.jsx)(L,{className:t.clickable,onClick:n,children:Object(N.jsx)(i.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(N.jsxs)(s.b,{className:t.link,to:"/launch",children:[Object(N.jsx)("i",{className:"material-icons",children:"check_circle_outline"}),"Launch"]})})}),Object(N.jsx)(L,{className:t.clickable,onClick:n,children:Object(N.jsx)(i.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(N.jsxs)(s.b,{className:t.link,to:"/upcoming",children:[Object(N.jsx)("i",{className:"material-icons",children:"update"}),"Upcoming"]})})}),Object(N.jsx)(L,{className:t.clickable,onClick:n,children:Object(N.jsx)(i.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(N.jsxs)(s.b,{className:t.link,to:"/history",children:[Object(N.jsx)("i",{className:"material-icons",children:"history"}),"History"]})})})]})]}))})})),D=function(){return Object(N.jsx)(i.Footer,{animate:!0,children:Object(N.jsx)(S,{children:Object(N.jsx)(i.Paragraph,{style:{fontSize:14,margin:"10px 0"},children:"This is not an official site and is not affiliated with NASA or SpaceX in any way. For educational purposes only."})})})},T=function(e){var t=Object(c.useMemo)((function(){var t;return null===(t=e.planets)||void 0===t?void 0:t.map((function(e,t){return Object(N.jsx)("option",{value:e.kepler_name,children:e.kepler_name},t)}))}),[e.planets]),n=(new Date).toISOString().split("T")[0];return Object(N.jsxs)(i.Appear,{id:"launch",animate:!0,show:e.entered,children:[Object(N.jsx)(i.Paragraph,{children:"Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets."}),Object(N.jsx)(i.Paragraph,{children:"Only confirmed planets matching the following criteria are available for the earliest scheduled missions:"}),Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:"Planetary radius < 1.6 times Earth's radius"}),Object(N.jsx)("li",{children:"Effective stellar flux > 0.36 times Earth's value and < 1.11 times Earth's value"})]}),Object(N.jsxs)("form",{onSubmit:e.submitLaunch,style:{display:"inline-grid",gridTemplateColumns:"auto auto",gridGap:"10px 20px"},children:[Object(N.jsx)("label",{htmlFor:"launch-day",children:"Launch Date"}),Object(N.jsx)("input",{type:"date",id:"launch-day",name:"launch-day",min:n,max:"2040-12-31",defaultValue:n}),Object(N.jsx)("label",{htmlFor:"mission-name",children:"Mission Name"}),Object(N.jsx)("input",{type:"text",id:"mission-name",name:"mission-name"}),Object(N.jsx)("label",{htmlFor:"rocket-name",children:"Rocket Type"}),Object(N.jsx)("input",{type:"text",id:"rocket-name",name:"rocket-name",defaultValue:"Explorer IS1"}),Object(N.jsx)("label",{htmlFor:"planets-selector",children:"Destination Exoplanet"}),Object(N.jsx)("select",{id:"planets-selector",name:"planets-selector",children:t}),Object(N.jsx)(L,{children:Object(N.jsx)(i.Button,{animate:!0,show:e.entered,type:"submit",layer:"success",disabled:e.isPendingLaunch,children:"Launch Mission \u2714"})}),e.isPendingLaunch&&Object(N.jsx)(i.Loading,{animate:!0,small:!0})]})]})},C=function(e){var t=Object(c.useMemo)((function(){var t;return null===(t=e.launches)||void 0===t?void 0:t.filter((function(e){return!e.upcoming})).map((function(e){var t;return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)("span",{style:{color:e.success?"greenyellow":"red"},children:"\u2588"})}),Object(N.jsx)("td",{children:e.flightNumber}),Object(N.jsx)("td",{children:new Date(e.launchDate).toDateString()}),Object(N.jsx)("td",{children:e.mission}),Object(N.jsx)("td",{children:e.rocket}),Object(N.jsx)("td",{children:null===(t=e.customers)||void 0===t?void 0:t.join(", ")})]},String(e.flightNumber))}))}),[e.launches]);return Object(N.jsx)("article",{id:"history",children:Object(N.jsxs)(i.Appear,{animate:!0,show:e.entered,children:[Object(N.jsx)(i.Paragraph,{children:"History of missio launches including SpaceX launches starting from the year 2006."}),Object(N.jsx)(i.Table,{animate:!0,children:Object(N.jsxs)("table",{style:{tableLayout:"fixed"},children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{style:{width:"2rem"}}),Object(N.jsx)("th",{style:{width:"3rem"},children:"No."}),Object(N.jsx)("th",{style:{width:"9rem"},children:"Date"}),Object(N.jsx)("th",{children:"Mission"}),Object(N.jsx)("th",{style:{width:"7rem"},children:"Rocket"}),Object(N.jsx)("th",{children:"Customers"})]})}),Object(N.jsx)("tbody",{children:t})]})})]})})},P=Object(i.withStyles)((function(){return{link:{color:"red",textDecoration:"none"}}}))((function(e){var t=e.entered,n=e.launches,a=e.classes,r=e.abortLaunch,s=Object(c.useMemo)((function(){return null===n||void 0===n?void 0:n.filter((function(e){return e.upcoming})).map((function(e){return console.log(e),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)(L,{style:{color:"red"},children:Object(N.jsx)(i.Link,{className:a.link,onClick:function(){return r(e.flightNumber)},children:"\u2716"})})}),Object(N.jsx)("td",{children:e.flightNumber}),Object(N.jsx)("td",{children:new Date(e.launchDate).toDateString()}),Object(N.jsx)("td",{children:e.mission}),Object(N.jsx)("td",{children:e.rocket}),Object(N.jsx)("td",{children:e.destination})]},String(e.flightNumber))}))}),[n,r,a.link]);return Object(N.jsxs)(i.Appear,{id:"upcoming",animate:!0,show:t,children:[Object(N.jsx)(i.Paragraph,{children:"Upcoming missions including both SpaceX launches and newly scheduled Zero to Mastery rockets."}),Object(N.jsx)(i.Words,{animate:!0,children:"Warning! Clicking on the \u2716 aborts the mission."}),Object(N.jsx)(i.Table,{animate:!0,show:t,children:Object(N.jsxs)("table",{style:{tableLayout:"fixed"},children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{style:{width:"3rem"}}),Object(N.jsx)("th",{style:{width:"3rem"},children:"No."}),Object(N.jsx)("th",{style:{width:"10rem"},children:"Date"}),Object(N.jsx)("th",{style:{width:"11rem"},children:"Mission"}),Object(N.jsx)("th",{style:{width:"11rem"},children:"Rocket"}),Object(N.jsx)("th",{children:"Destination"})]})}),Object(N.jsx)("tbody",{children:s})]})})]})})),E=Object(i.withSounds)()(Object(i.withStyles)((function(){return{content:{display:"flex",flexDirection:"column",height:"100vh",margin:"auto"},centered:{flex:1,paddingTop:"20px",paddingBottom:"10px"}}}))((function(e){var t=e.sounds,n=e.classes,a=Object(c.useState)(!0),r=Object(l.a)(a,2),s=r[0],u=r[1],h=v((function(){return t.success&&t.success.play()}),(function(){return t.abort&&t.abort.play()}),(function(){return t.warning&&t.warning.play()})),d=h.launches,j=h.isPendingLaunch,b=h.submitLaunch,p=h.abortLaunch,m=y();return Object(N.jsxs)("div",{className:n.content,children:[Object(N.jsx)(A,{onNav:function(){u(!1),setTimeout((function(){u(!0)}),600)}}),Object(N.jsx)(S,{className:n.centered,children:Object(N.jsx)(i.Frame,{animate:!0,show:s,corners:4,style:{visibility:s?"visible":"hidden"},children:function(e){return Object(N.jsx)("div",{style:{padding:"20px"},children:Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{exact:!0,path:"/",children:Object(N.jsx)(T,{entered:e.entered,planets:m,submitLaunch:b,isPendingLaunch:j})}),Object(N.jsx)(o.a,{exact:!0,path:"/launch",children:Object(N.jsx)(T,{entered:e.entered,planets:m,submitLaunch:b,isPendingLaunch:j})}),Object(N.jsx)(o.a,{exact:!0,path:"/upcoming",children:Object(N.jsx)(P,{entered:e.entered,launches:d,abortLaunch:p})}),Object(N.jsx)(o.a,{exact:!0,path:"/history",children:Object(N.jsx)(C,{entered:e.entered,launches:d})})]})})}})}),Object(N.jsx)(D,{})]})}))),F={small:"/img/background-small.jpg",medium:"/img/background-medium.jpg",large:"/img/background-large.jpg"},M="/img/glow.png",H={shared:{volume:.5},players:{click:{sound:{src:["/sound/click.mp3"]},settings:{oneAtATime:!0}},typing:{sound:{src:["/sound/typing.mp3"]},settings:{oneAtATime:!0}},deploy:{sound:{src:["/sound/deploy.mp3"]},settings:{oneAtATime:!0}},success:{sound:{src:["/sound/success.mp3"],volume:.2},settings:{oneAtATime:!0}},abort:{sound:{src:["/sound/abort.mp3"]},settings:{oneAtATime:!0}},warning:{sound:{src:["/sound/warning.mp3"]},settings:{oneAtATime:!0}}}},z={color:{content:"#a1ecfb"},padding:20,responsive:{small:600,medium:800,large:1200},typography:{headerFontFamily:'"Titillium Web", "sans-serif"'}},W=function(){return Object(N.jsx)(i.ThemeProvider,{theme:Object(i.createTheme)(z),children:Object(N.jsx)(i.SoundsProvider,{sounds:Object(i.createSounds)(H),children:Object(N.jsx)(i.Arwes,{animate:!0,background:F.large,pattern:M,children:function(e){return Object(N.jsx)(s.a,{children:Object(N.jsx)(E,{show:e.entered})})}})})})};r.a.render(Object(N.jsx)(W,{}),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.19e3860b.chunk.js.map