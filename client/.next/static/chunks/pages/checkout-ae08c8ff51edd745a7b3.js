_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{BsWD:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("a3WO");function a(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,a,o,u){try{var c=e[o](u),i=c.value}catch(s){return void r(s)}c.done?t(i):Promise.resolve(i).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var u=e.apply(t,r);function c(e){n(u,a,o,c,i,"next",e)}function i(e){n(u,a,o,c,i,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return a}))},QCli:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return r("fdRS")}])},TJRf:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r("o0o1"),a=r.n(n),o=r("a3WO");var u=r("BsWD");function c(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(u.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=r("HaE+"),s=r("q1tI"),f=r.n(s),l=r("vDqi"),p=r.n(l),d=f.a.createElement,v=Object(s.createContext)();p.a.create({baseURL:"http://localhost:5000",withCredentials:!0}),t.b=function(e){var t=Object(s.useState)([]),r=t[0],n=t[1],o=Object(s.useState)(0),u=o[0],f=o[1],l=Object(s.useState)(!1),p=l[0],h=l[1],b=Object(s.useState)(null),g=b[0],y=b[1];Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("productsInCart"));n(e),h(!0)}),[]);var m=function(){var e=Object(i.a)(a.a.mark((function e(t,o){var u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=!1,r&&r.forEach((function(e){e._id===t._id&&(u=!0,t.boughtQuantity=Number(e.boughtQuantity)+Number(o),t.boughtQuantity>t.effectiveStock&&(t.boughtQuantity=t.effectiveStock))})),r?u?n(c(r)):(t.boughtQuantity=Number(o),n([].concat(c(r),[t]))):(t.boughtQuantity=Number(o),n([t]));case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();p&&localStorage.setItem("productsInCart",JSON.stringify(r));return d(v.Provider,{value:{productsInCart:r,totalPrice:u,shippingInfo:g,setProductsInCart:n,addToCart:m,updateCart:function(e,t){var a=r.map((function(r){return r._id===e._id&&(r.boughtQuantity=Number(t)),r}));n(a)},setTotalPrice:f,setShippingInfo:y,calculateTotalPrice:function(){if(console.log(r,"productsIn cart cart context"),r){var e=0;r.forEach((function(t){e+=t.boughtQuantity*t.price})),f(e)}}}},e.children)}},YFqc:function(e,t,r){e.exports=r("cTJO")},a3WO:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var o,u=a(r("q1tI")),c=r("elyg"),i=r("nOHt"),s=new Map,f=window.IntersectionObserver,l={};var p=function(e,t){var r=o||(f?o=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),s.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,r,n){(0,c.isLocalURL)(t)&&(e.prefetch(t,r,n).catch((function(e){0})),l[t+"%"+r]=!0)}var v=function(e){var t=!1!==e.prefetch,r=u.default.useState(),a=n(r,2),o=a[0],s=a[1],v=(0,i.useRouter)(),h=v&&v.pathname||"/",b=u.default.useMemo((function(){var t=(0,c.resolveHref)(h,e.href);return{href:t,as:e.as?(0,c.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),g=b.href,y=b.as;u.default.useEffect((function(){if(t&&f&&o&&o.tagName&&(0,c.isLocalURL)(g)&&!l[g+"%"+y])return p(o,(function(){d(v,g,y)}))}),[t,o,g,y,v]);var m=e.children,O=e.replace,w=e.shallow,j=e.scroll;"string"===typeof m&&(m=u.default.createElement("a",null,m));var C=u.Children.only(m),x={ref:function(e){e&&s(e),C&&"object"===typeof C&&C.ref&&("function"===typeof C.ref?C.ref(e):"object"===typeof C.ref&&(C.ref.current=e))},onClick:function(e){C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==u&&(u=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,g,y,O,w,j)}};return t&&(x.onMouseEnter=function(e){(0,c.isLocalURL)(g)&&(C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),d(v,g,y,{priority:!0}))}),(e.passHref||"a"===C.type&&!("href"in C.props))&&(x.href=(0,c.addBasePath)(y)),u.default.cloneElement(C,x)};t.default=v},fdRS:function(e,t,r){"use strict";r.r(t);var n=r("rePB"),a=r("o0o1"),o=r.n(a),u=r("HaE+"),c=r("q1tI"),i=r.n(c),s=r("TJRf"),f=r("gdJV"),l=r("YFqc"),p=r.n(l),d=r("vDqi"),v=r.n(d),h=i.a.createElement;function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=v.a.create({baseURL:"http://localhost:5000",withCredentials:!0});t.default=function(){var e=Object(c.useContext)(s.a),t=e.totalPrice,r=e.productsInCart,n=e.shippingInfo,a=e.setShippingInfo,i=Object(c.useContext)(f.a).user,l=Object(c.useState)({firstName:"",lastName:"",vatNumber:"",streetAddress:"",city:"",province:"",zipCode:"",telephone:"",email:"",additionalNotes:""}),d=l[0],v=l[1],b=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(i,"user checkout"),t.preventDefault();try{a(d),m(),router.push("/pagamento")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(o.a.mark((function e(){var a,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.post("/create-order",{shippingInfo:n,totalPrice:t,paid:!1,productsInCart:r});case 2:a=e.sent,u=a.data.orderId,localStorage.setItem("orderId",u);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return h("div",null,h("h1",null,"Checkout"),h("form",{onClick:b},h("input",{type:"text",value:d.firstName,placeholder:"* Nome",required:!0,onChange:function(e){return v(g(g({},d),{},{firstName:e.target.value}))}}),h("input",{type:"text",value:d.lastName,placeholder:"* Cognome",required:!0,onChange:function(e){return v(g(g({},d),{},{lastName:e.target.value}))}}),h("input",{type:"text",value:d.vatNumber,placeholder:"* P.IVA / Codice Fiscale",required:!0,onChange:function(e){return v(g(g({},d),{},{vatNumber:e.target.value}))}}),h("input",{type:"text",value:d.streetAddress,placeholder:"* Indirizzo",required:!0,onChange:function(e){return v(g(g({},d),{},{streetAddress:e.target.value}))}}),h("input",{type:"text",value:d.streetAddress,placeholder:"* Citt\xe0",required:!0,onChange:function(e){return v(g(g({},d),{},{city:e.target.value}))}}),h("input",{type:"text",value:d.province,placeholder:"* Provincia",required:!0,onChange:function(e){return v(g(g({},d),{},{province:e.target.value}))}}),h("input",{type:"text",value:d.zipCode,placeholder:"* C.A.P.",required:!0,onChange:function(e){return v(g(g({},d),{},{zipCode:e.target.value}))}}),h("input",{type:"text",value:d.telephone,placeholder:"* Telefono",required:!0,onChange:function(e){return v(g(g({},d),{},{telephone:e.target.value}))}}),h("input",{type:"email",value:d.email,placeholder:"* Email",required:!0,onChange:function(e){return v(g(g({},d),{},{email:e.target.value}))}}),h("input",{type:"textarea",value:d.additionalNotes,placeholder:"Note aggiuntive ",required:!0,onChange:function(e){return v(g(g({},d),{},{additionalNotes:e.target.value}))}}),h(p.a,{href:"/pagamento"},h("button",null,"Prosegui al pagamento"))))}},gdJV:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("o0o1"),a=r.n(n),o=r("HaE+"),u=r("q1tI"),c=r.n(u),i=r("vDqi"),s=r.n(i),f=c.a.createElement,l=Object(u.createContext)(),p=s.a.create({baseURL:"http://localhost:5000",withCredentials:!0});t.b=function(e){var t=Object(u.useState)({}),r=t[0],n=t[1],c=function(){var e=Object(o.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/auth/signup",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(o.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/auth/login",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/user/update",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/auth/loggedin");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.user);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:t=e.sent,console.log(t,"res"),n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n(null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/user/orders");case 3:return t=e.sent,e.abrupt("return",t.data.orders);case 7:e.prev=7,e.t0=e.catch(0),n(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/user/order/"+t);case 3:return r=e.sent,e.abrupt("return",r.data.order);case 7:e.prev=7,e.t0=e.catch(0),n(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return f(l.Provider,{value:{user:r,signup:c,login:i,updateUser:s,setUser:n,checkIfLoggedIn:d,fetchUser:v,getOrders:h,getSingleOrder:b}},e.children)}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))}},[["QCli",0,1,2,3,4]]]);