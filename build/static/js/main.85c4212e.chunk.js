(this.webpackJsonpvtex=this.webpackJsonpvtex||[]).push([[0],{47:function(n,t,e){"use strict";e.r(t);var c,a,r=e(0),i=e.n(r),s=e(18),d=e.n(s),o=e(23),j=e(3),b=e(4),h=b.b.div(c||(c=Object(j.a)(["\n    width: 80%\n    margin: auto;\n\n    section {\n        height: 100vh;\n        width: 100%;\n        background: grey;\n        display: flex;\n\n        .produt-content{\n            display: grid;\n            text-align: center;\n            height: 400px;\n            background: brown;\n            border-radius: 15px;\n            padding: 10px;\n\n        }\n    }\n"]))),u=e(22),p=e.n(u).a.create({baseURL:"http://localhost:8080/produtos"}),x=e(1),l=function(){var n=Object(r.useState)([]),t=Object(o.a)(n,2),e=t[0],c=t[1];return Object(r.useEffect)((function(){p.get("").then((function(n){c(n.data)}))}),[]),Object(x.jsx)(h,{children:Object(x.jsxs)("section",{children:["Batata",e.map((function(n){return Object(x.jsxs)("div",{className:"product-content",children:[Object(x.jsx)("img",{src:n.photo,alt:"X\xedcara preta",width:"200",height:"auto"}),Object(x.jsx)("h4",{children:n.name}),Object(x.jsx)("span",{children:n.description}),Object(x.jsx)("h6",{children:n.price})]},n.id)}))]})})},O=function(){return Object(x.jsx)(l,{})},g=Object(b.a)(a||(a=Object(j.a)(["\n    *{\n        padding: 0;\n        margin: 0;\n        background: blue;\n    }\n"])));d.a.render(Object(x.jsxs)(i.a.StrictMode,{children:[Object(x.jsx)(O,{}),Object(x.jsx)(g,{})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.85c4212e.chunk.js.map