_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{gdJV:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("o0o1"),a=n.n(r),o=n("HaE+"),u=n("q1tI"),i=n.n(u),c=n("vDqi"),s=n.n(c),p=i.a.createElement,l=Object(u.createContext)(),f=s.a.create({baseURL:"http://localhost:5000",withCredentials:!0});t.b=function(e){var t=Object(u.useState)({}),n=t[0],r=t[1];console.log(n,"user from context");var i=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("/auth/signup",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("/auth/login",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,"updatedUser from context"),e.next=3,f.post("/user/update",t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/auth/loggedin");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.user);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("/user/orders");case 3:return t=e.sent,e.abrupt("return",t.data.orders);case 7:e.prev=7,e.t0=e.catch(0),r(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("/user/order/"+t);case 3:return n=e.sent,e.abrupt("return",n.data.order);case 7:e.prev=7,e.t0=e.catch(0),r(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return p(l.Provider,{value:{user:n,signup:i,login:c,updateUser:s,setUser:r,checkIfLoggedIn:d,fetchUser:h,getOrders:g,getSingleOrder:v}},e.children)}},qzEZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/profilo",function(){return n("ykGj")}])},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},ykGj:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),a=n("o0o1"),o=n.n(a),u=n("HaE+"),i=n("q1tI"),c=n.n(i),s=n("gdJV"),p=n("nOHt"),l=c.a.createElement;function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=Object(i.useContext)(s.a),t=e.user,n=e.updateUser,r=e.checkIfLoggedIn,a=Object(i.useState)(!1),c=a[0],f=a[1],h=Object(p.useRouter)();Object(i.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:e.sent?f(!0):h.push("/login");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var g=Object(i.useState)({firstName:"",lastName:"",password:"",telephone:"",email:"",VAT:"",streetAddress:"",city:"",province:"",zipCode:""}),v=g[0],b=g[1],w=function(){var e=Object(u.a)(o.a.mark((function e(r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault();try{a={firstName:v.firstName||t.firstName,lastName:v.lastName||t.lastName,password:v.password||t.password,telephone:v.telephone||t.telephone,email:v.email||t.email,VAT:v.VAT||t.VAT,streetAddress:v.streetAddress||t.shippingInfo&&t.shippingInfo.streetAddress,city:v.city||t.shippingInfo&&t.shippingInfo.city,province:v.province||t.shippingInfo&&t.shippingInfo.province,zipCode:v.zipCode||t.shippingInfo&&t.shippingInfo.zipCode},console.log(a,"updatedUser"),n(a)}catch(o){console.log(o)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?l("div",null,l("h1",null,"Profilo"),l("form",{onSubmit:w},l("p",null,l("strong",null,"Profilo")),l("label",null,"Nome"),l("input",{type:"text",placeholder:t.firstName,onChange:function(e){return b(d(d({},v),{},{firstName:e.target.value}))}}),l("label",null,"Cognome"),l("input",{type:"text",placeholder:t.lastName,onChange:function(e){return b(d(d({},v),{},{lastName:e.target.value}))}}),l("label",null,"Telefono"),l("input",{type:"text",placeholder:t.telephone,onChange:function(e){return b(d(d({},v),{},{telephone:e.target.value}))}}),l("label",null,"Email"),l("input",{type:"email",placeholder:t.email,onChange:function(e){return b(d(d({},v),{},{email:e.target.value}))}}),l("label",null,"P.IVA/Codice fiscale"),l("input",{type:"text",placeholder:t.VAT,onChange:function(e){return b(d(d({},v),{},{VAT:e.target.value}))}}),l("p",null,l("strong",null,"Update password")),l("label",null,"Nuova password"),l("input",{type:"password",placeholder:"*****",onChange:function(e){return b(d(d({},v),{},{password:e.target.value}))}}),l("p",null,l("strong",null,"Indirizzo di spedizione")),l("label",null,"Indirizzo"),l("input",{type:"text",placeholder:t.shippingInfo&&t.shippingInfo.streetAddress,onChange:function(e){return b(d(d({},v),{},{streetAddress:e.target.value}))}}),l("label",null,"Citt\xe0"),l("input",{type:"text",placeholder:t.shippingInfo&&t.shippingInfo.city,onChange:function(e){return b(d(d({},v),{},{city:e.target.value}))}}),l("label",null,"Provincia"),l("input",{type:"text",placeholder:t.shippingInfo&&t.shippingInfo.province,onChange:function(e){return b(d(d({},v),{},{province:e.target.value}))}}),l("label",null,"zip code"),l("input",{type:"text",placeholder:t.shippingInfo&&t.shippingInfo.zipCode,onChange:function(e){return b(d(d({},v),{},{zipCode:e.target.value}))}}),l("button",null,"Aggiorna"))):l("p",null)}}},[["qzEZ",0,1,2,3,4]]]);