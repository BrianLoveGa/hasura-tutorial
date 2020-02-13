(this["webpackJsonpreact-pixelart"]=this["webpackJsonpreact-pixelart"]||[]).push([[0],{31:function(e,n,t){e.exports=t(48)},36:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t.n(a),o=t(25),c=t.n(o),l=t(8),i=(t(36),t(14)),u=t(16),s=t(30),f=t(12);function d(){var e=Object(u.a)(["\n  mutation ChangePixelColor($id: Int!, $color: String!) {\n    update_pixels(where: { id: { _eq: $id } }, _set: { color: $color }) {\n      returning {\n        color\n        id\n      }\n    }\n  }\n"]);return d=function(){return e},e}var m=Object(s.a)(d()),p=function(e){var n=e.id,t=e.color,o=e.newColor,c=Object(a.useState)(t),l=Object(i.a)(c,2),u=l[0],s=l[1],d=Object(f.a)(m),p=Object(i.a)(d,1)[0];return Object(a.useEffect)((function(){s(t)}),[t]),r.a.createElement("span",{className:"pixel",onClick:function(){s(o),p({variables:{id:n,color:o}})},style:{backgroundColor:u}})},b=["#f44336","#f06292","#9c27b0","#2196f3","#009688","#8bc34a","#ffeb3b","#ff9800","#ffffff","#212121"],h=function(e){return r.a.createElement("span",{className:"palette-color",style:{backgroundColor:e.color},onClick:function(){e.handleClick(e.color)}})},v=function(e){return r.a.createElement("div",{className:"palette"},b.map((function(n,t){return r.a.createElement(h,{handleClick:function(){return e.changeColor(n)},color:n,key:t})})))},w=t(15);function k(){var e=Object(u.a)(["\n  subscription GetPixels {\n    pixels(order_by: { id: asc }) {\n      color\n      id\n    }\n  }\n"]);return k=function(){return e},e}var E=t.n(w)()(k());var g=function(){var e=Object(f.b)(E),n=e.loading,t=(e.error,e.data),o=Object(a.useState)("white"),c=Object(i.a)(o,2),l=c[0],u=c[1];return n?r.a.createElement("div",null,"loading ... just wait"):r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"logo"},"Draw"),r.a.createElement("p",null,"Pick a Color"),r.a.createElement(v,{changeColor:u}),r.a.createElement("p",null,"Click a Pixel"),r.a.createElement("div",{className:"container"},t.pixels.map((function(e,n){return r.a.createElement(p,{color:e.color,id:e.id,key:e.id,newColor:l})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=t(29),j=t(10),x=t(11),O=new j.a({cache:new x.a,link:new C.a({uri:"wss://bwl-has-pixelart.herokuapp.com/v1/graphql",options:{reconnect:!0}})});c.a.render(r.a.createElement(l.a,{client:O},r.a.createElement(g,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.4732102c.chunk.js.map