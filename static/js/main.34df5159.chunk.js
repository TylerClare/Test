(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{10:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);n(9),n(10);var c=n(1),r=n.n(c),s=n(4),o=n.n(s),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))},a=n(2),h=n(0),j=function(e){var t=e.name,n=e.email,c=e.id;return Object(h.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(h.jsx)("img",{src:"https://robohash.org/".concat(c,"?200x200"),alt:"robots"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots;return Object(h.jsx)("div",{children:t.map((function(e,n){return Object(h.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},l=function(e){var t=e.searchChange;return Object(h.jsx)("div",{className:"pa2",children:Object(h.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},u=function(e){return Object(h.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},d=n(5),O=n(6),f=n(8),p=n(7),x=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(O.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(h.jsx)("h1",{children:"Oooops. That is not good."}):this.props.children}}]),n}(c.Component);n(16);var g=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),o=Object(a.a)(s,2),i=o[0],j=o[1],d=Object(c.useState)(0),O=Object(a.a)(d,2),f=O[0],p=O[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var g=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return n.length?Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(h.jsx)("button",{onClick:function(){return p(f+1)},children:"Click Me!"}),Object(h.jsx)(l,{searchChange:function(e){j(e.target.value)}}),Object(h.jsx)(u,{children:Object(h.jsx)(x,{children:Object(h.jsx)(b,{robots:g})})})]}):Object(h.jsx)("h1",{children:"Loading..."})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),i()}},[[17,1,2]]]);
//# sourceMappingURL=main.34df5159.chunk.js.map