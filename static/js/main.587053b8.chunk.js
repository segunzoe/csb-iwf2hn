(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),c=n.n(r),u=n(8),o=n(2);var i=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Keeper"))};var m=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))};var f=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}}," \ud83d\uddd1"))},E=n(4),d=n(5);var p=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],f=i[1];function p(e){var t=e.target,n=t.name,a=t.value;f((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(E.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",null,r?l.a.createElement("input",{name:"title",onChange:p,value:m.title,placeholder:"Title"}):null,l.a.createElement("textarea",{onClick:function(){c(!0)},name:"content",onChange:p,value:m.content,placeholder:"Take a note...",rows:r?"3":" 1"}),l.a.createElement("button",{onClick:function(t){e.onAdd(m),f({title:"",content:""}),t.preventDefault()}}," Add")))};var v=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(p,{onAdd:function(e){r((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(f,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(m,null))};c.a.render(l.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.587053b8.chunk.js.map