(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(4),a=n.n(r),o=(n(13),n(5)),i=n(6),h=n(2),l=n(8),u=n(7),d=(n(14),n(0)),j=function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&Size=120X120")}),Object(d.jsxs)("h2",{children:[e.monster.name," "]}),Object(d.jsx)("p",{children:e.monster.email})]})},m=(n(16),function(e){return Object(d.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(d.jsx)(j,{monster:e},e.id)}))})}),b=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(d.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(18),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"handleChange",value:function(e){this.setState({searchField:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:" Monsters-Roledex"}),Object(d.jsx)(b,{handleChange:this.handleChange}),Object(d.jsx)(m,{monsters:s})]})}}]),n}(s.Component));a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.f4493208.chunk.js.map