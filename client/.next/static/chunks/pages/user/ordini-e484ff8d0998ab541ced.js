_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,a,u,o){try{var c=e[u](o),s=c.value}catch(i){return void n(i)}c.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,u){var o=e.apply(t,n);function c(e){r(o,a,u,c,s,"next",e)}function s(e){r(o,a,u,c,s,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return a}))},LfrG:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),u=n("HaE+"),o=n("q1tI"),c=n.n(o),s=n("gdJV"),i=n("YFqc"),f=n.n(i),p=c.a.createElement;t.default=function(){var e=Object(o.useContext)(s.a).getOrders,t=Object(o.useState)([]),n=t[0],r=t[1];return Object(o.useEffect)((function(){function t(){return(t=Object(u.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),p("div",null,p("h1",null,"Ordini"),n.map((function(e){return p("div",{key:e._id},p("p",null,p("strong",null,"ORDER")),p("p",null,e._id),p("p",null,e.created_at),p(f.a,{href:"/user/ordine/[id]",as:"/user/ordine/".concat(encodeURIComponent(e._id))},"View order"))})))}},PjoK:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/ordini",function(){return n("LfrG")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var u,o=a(n("q1tI")),c=n("elyg"),s=n("nOHt"),i=new Map,f=window.IntersectionObserver,p={};var l=function(e,t){var n=u||(f?u=new f((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),p[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=o.default.useState(),a=r(n,2),u=a[0],i=a[1],v=(0,s.useRouter)(),h=v&&v.pathname||"/",w=o.default.useMemo((function(){var t=(0,c.resolveHref)(h,e.href);return{href:t,as:e.as?(0,c.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),g=w.href,b=w.as;o.default.useEffect((function(){if(t&&f&&u&&u.tagName&&(0,c.isLocalURL)(g)&&!p[g+"%"+b])return l(u,(function(){d(v,g,b)}))}),[t,u,g,b,v]);var y=e.children,x=e.replace,O=e.shallow,m=e.scroll;"string"===typeof y&&(y=o.default.createElement("a",null,y));var E=o.Children.only(y),_={ref:function(e){e&&i(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,u,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:u}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,g,b,x,O,m)}};return t&&(_.onMouseEnter=function(e){(0,c.isLocalURL)(g)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),d(v,g,b,{priority:!0}))}),(e.passHref||"a"===E.type&&!("href"in E.props))&&(_.href=(0,c.addBasePath)(b)),o.default.cloneElement(E,_)};t.default=v},gdJV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("o0o1"),a=n.n(r),u=n("HaE+"),o=n("q1tI"),c=n.n(o),s=n("vDqi"),i=n.n(s),f=c.a.createElement,p=Object(o.createContext)(),l=i.a.create({baseURL:"http://localhost:5000",withCredentials:!0});t.b=function(e){var t=Object(o.useState)({}),n=t[0],r=t[1],c=function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.post("/auth/signup",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.post("/auth/login",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.post("/user/update",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("/auth/loggedin");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.user);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:t=e.sent,console.log(t,"res"),r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r(null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.get("/user/orders");case 3:return t=e.sent,e.abrupt("return",t.data.orders);case 7:e.prev=7,e.t0=e.catch(0),r(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.get("/user/order/"+t);case 3:return n=e.sent,e.abrupt("return",n.data.order);case 7:e.prev=7,e.t0=e.catch(0),r(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return f(p.Provider,{value:{user:n,signup:c,login:s,updateUser:i,setUser:r,checkIfLoggedIn:d,fetchUser:v,getOrders:h,getSingleOrder:w}},e.children)}}},[["PjoK",0,1,2,3,4]]]);