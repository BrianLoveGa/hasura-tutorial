(this["webpackJsonpreact-pixelart"]=this["webpackJsonpreact-pixelart"]||[]).push([[0],{31:function(e,n,t){e.exports=t(48)},36:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t.n(a),o=t(25),c=t.n(o),l=t(8),i=(t(36),t(14)),s=t(16),u=t(30),d=t(12);function m(){var e=Object(s.a)(["\n  mutation ChangePixelColor($id: Int!, $color: String!) {\n    update_pixels(where: { id: { _eq: $id } }, _set: { color: $color }) {\n      returning {\n        color\n        id\n      }\n    }\n  }\n"]);return m=function(){return e},e}var f=Object(u.a)(m()),p=function(e){var n=e.id,t=e.color,o=e.newColor,c=Object(a.useState)(t),l=Object(i.a)(c,2),s=l[0],u=l[1],m=Object(d.a)(f),p=Object(i.a)(m,1)[0];return Object(a.useEffect)((function(){u(t)}),[t]),r.a.createElement("span",{className:"pixel",onClick:function(){u(o),p({variables:{id:n,color:o}})},style:{backgroundColor:s}})},b=["#f44336","#f06292","#9c27b0","#2196f3","#009688","#8bc34a","#ffeb3b","#ff9800","#ffffff","#212121"],v=function(e){return r.a.createElement("span",{className:"palette-color",style:{backgroundColor:e.color},onClick:function(){e.handleClick(e.color)}})},h=function(e){return r.a.createElement("div",{className:"palette"},b.map((function(n,t){return r.a.createElement(v,{handleClick:function(){return e.changeColor(n)},color:n,key:t})})))},w=t(15);function E(){var e=Object(s.a)(["\n  subscription GetPixels {\n    pixels(order_by: { id: asc }) {\n      color\n      id\n    }\n  }\n"]);return E=function(){return e},e}var k=t.n(w)()(E());var g=function(){var e=Object(d.b)(k),n=e.loading,t=(e.error,e.data),o=Object(a.useState)("white"),c=Object(i.a)(o,2),l=c[0],s=c[1];return n?r.a.createElement("div",null,"loading ... just wait please it'll be drawing time soon ..."):r.a.createElement("div",null,r.a.createElement("h1",{className:"top"}," Live web Sockets Pixel Art _-_ BWL"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"logo"},"Draw"),r.a.createElement("p",null,"Pick a Color"),r.a.createElement(h,{changeColor:s}),r.a.createElement("p",null,"Click a Pixel"),r.a.createElement("div",{className:"container"},t.pixels.map((function(e,n){return r.a.createElement(p,{color:e.color,id:e.id,key:e.id,newColor:l})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=t(29),j=t(10),x=t(11),O=new j.a({cache:new x.a,link:new C.a({uri:"wss://bwl-has-pixelart.herokuapp.com/v1/graphql",options:{reconnect:!0}})});c.a.render(r.a.createElement(l.a,{client:O},r.a.createElement(g,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.fe0af5de.chunk.js.map