(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(3),o=n.n(a),i=(n(8),n(9),n(0)),r=function(){return Object(i.jsxs)("form",{className:"form",children:[Object(i.jsx)("input",{className:"form__input",placeholder:"wpisz cel"}),Object(i.jsx)("button",{className:"form__addButton",children:Object(i.jsx)("b",{children:"DODAJ!"})})]})},l=(n(11),function(e){return Object(i.jsx)("ul",{className:"list",children:e.nextYearTasks.map((function(t){return Object(i.jsxs)("li",{className:"listItem ".concat(t.done&&e.hideDoneTasks?"listItem--hide":""),children:[Object(i.jsx)("button",{className:"button ".concat(t.done?"button--thick":"")}),Object(i.jsxs)("span",{className:"newItemText ".concat(t.done?"taskDone":""),children:[t.content," "]}),Object(i.jsx)("button",{className:"button button--remove"})]},t.id)}))})}),j=(n(12),function(e){var t=e.nextYearTasks,n=e.hideDoneTasks;return 0===t.length?null:Object(i.jsxs)("div",{className:"taskList__buttons",children:[Object(i.jsx)("button",{className:"taskList__button",children:n?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"}),Object(i.jsx)("button",{className:"taskList__button".concat(t.every((function(e){return e.done}))?" taskList__button--inactive":""),disabled:t.every((function(e){return e.done})),children:" Uko\u0144cz wszystkie"})]})}),d=(n(13),function(e){var t=e.title,n=e.body,s=e.extraHeaderContent;return Object(i.jsxs)("section",{className:"taskList",children:[s,Object(i.jsx)("h2",{className:"container__header2",children:t}),n]})}),u=function(e){var t=e.title;return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{className:"container__header",children:t})})},b=function(e){var t=e.children;return Object(i.jsx)("main",{className:"container",children:t})},h=[{id:1,content:"przej\u015b\u0107 na reacta",done:!0},{id:2,content:"zje\u015b\u0107 obiad",done:!0}];var x=function(){return Object(i.jsxs)(b,{children:[Object(i.jsx)(u,{title:"Lista cel\xf3w na przysz\u0142y rok"}),Object(i.jsx)(d,{title:"Dodaj cel",body:Object(i.jsx)(r,{})}),Object(i.jsx)(d,{title:"Lista cel\xf3w",body:Object(i.jsx)(l,{nextYearTasks:h,hideDoneTasks:false}),extraHeaderContent:Object(i.jsx)(j,{nextYearTasks:h,hideDoneTasks:false})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),a(e),o(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),m()}],[[14,1,2]]]);
//# sourceMappingURL=main.dbff2734.chunk.js.map