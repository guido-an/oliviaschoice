_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{FUL0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/utenti",function(){return n("ctiO")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),s=n("nOHt"),u=new Map,f=window.IntersectionObserver,l={};var p=function(e,t){var n=o||(f?o=new f((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],u=a[1],h=(0,s.useRouter)(),v=h&&h.pathname||"/",m=i.default.useMemo((function(){var t=(0,c.resolveHref)(v,e.href);return{href:t,as:e.as?(0,c.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),w=m.href,g=m.as;i.default.useEffect((function(){if(t&&f&&o&&o.tagName&&(0,c.isLocalURL)(w)&&!l[w+"%"+g])return p(o,(function(){d(h,w,g)}))}),[t,o,w,g,h]);var y=e.children,b=e.replace,E=e.shallow,_=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var O=i.Children.only(y),L={ref:function(e){e&&u(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,w,g,b,E,_)}};return t&&(L.onMouseEnter=function(e){(0,c.isLocalURL)(w)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),d(h,w,g,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(L.href=(0,c.addBasePath)(g)),i.default.cloneElement(O,L)};t.default=h},ctiO:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),o=n("HaE+"),i=n("q1tI"),c=n.n(i),s=n("vDqi"),u=n.n(s),f=n("YFqc"),l=n.n(f),p=n("nOHt"),d=c.a.createElement,h=u.a.create({baseURL:"http://localhost:5000",withCredentials:!0});t.default=function(){var e=Object(i.useState)([]),t=e[0],n=e[1],r=Object(i.useState)(!1),c=r[0],s=r[1];Object(p.useRouter)();if(Object(i.useEffect)((function(){function e(){return(e=Object(o.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get("/admin/get-admin");case 3:if(!e.sent.data.admin){e.next=12;break}return e.next=7,h.get("/admin/list-of-users");case 7:t=e.sent,n(t.data.users),s(!0),e.next=18;break;case 12:return e.next=14,h.get("/admin/list-of-users");case 14:r=e.sent,n(r.data.users),console.log("res",r),s(!0);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),!c)return d("p",null);return d("div",null,d("h1",null,"Utenti"),t.map((function(e){if(!e.admin)return d("div",{key:e._id},d("p",null,e.firstName," ",e.lastName),d("p",null,"Ordini totali: ",e.orders.length),d(l.a,{href:"/admin/utenti/[id]",as:"/admin/utenti/".concat(encodeURIComponent(e._id))},"Dettagli"))})))}}},[["FUL0",0,1,2,3,4]]]);