_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},TJRf:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("o0o1"),o=n.n(r),a=n("a3WO");var c=n("BsWD");function u(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n("HaE+"),s=n("q1tI"),l=n.n(s),p=n("vDqi"),f=n.n(p),d=l.a.createElement,m=Object(s.createContext)();f.a.create({baseURL:"http://localhost:5000",withCredentials:!0}),t.b=function(e){var t=Object(s.useState)([]),n=t[0],r=t[1],a=Object(s.useState)(0),c=a[0],l=a[1],p=Object(s.useState)(!1),f=p[0],y=p[1],v=Object(s.useState)(null),h=v[0],b=v[1];Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("productsInCart"));r(e),y(!0)}),[]);var g=function(){var e=Object(i.a)(o.a.mark((function e(t,a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=!1,n&&n.forEach((function(e){e._id===t._id&&(c=!0,t.boughtQuantity=Number(e.boughtQuantity)+Number(a),t.boughtQuantity>t.effectiveStock&&(t.boughtQuantity=t.effectiveStock))})),n?c?r(u(n)):(t.boughtQuantity=Number(a),r([].concat(u(n),[t]))):(t.boughtQuantity=Number(a),r([t]));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();f&&localStorage.setItem("productsInCart",JSON.stringify(n));return d(m.Provider,{value:{productsInCart:n,totalPrice:c,shippingInfo:h,setProductsInCart:r,addToCart:g,updateCart:function(e,t){var o=n.map((function(n){return n._id===e._id&&(n.boughtQuantity=Number(t)),n}));r(o)},setTotalPrice:l,setShippingInfo:b,calculateTotalPrice:function(){if(console.log(n,"productsIn cart cart context"),n){var e=0;n.forEach((function(t){e+=t.boughtQuantity*t.price})),l(e)}}}},e.children)}},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},eWwy:function(e,t,n){!function(e,t){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function o(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function a(e,t){return c(e)||u(e,t)||i()}function c(e){if(Array.isArray(e))return e}function u(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&t.hasOwnProperty("default")?t.default:t;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function p(){}function f(){}f.resetWarningCache=p;var d=function(){function e(e,t,n,r,o,a){if(a!==l){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:f,resetWarningCache:p};return n.PropTypes=n,n},m=s((function(e){e.exports=d()})),y=function(e){return null!==e&&"object"===n(e)},v=function(e){return y(e)&&"function"===typeof e.then},h=function(e){return y(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},b="[object Object]",g=function e(t,n){if(!y(t)||!y(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===b;if(o!==(Object.prototype.toString.call(n)===b))return!1;if(!o&&!r)return!1;var a=Object.keys(t),c=Object.keys(n);if(a.length!==c.length)return!1;for(var u={},i=0;i<a.length;i+=1)u[a[i]]=!0;for(var s=0;s<c.length;s+=1)u[c[s]]=!0;var l=Object.keys(u);if(l.length!==a.length)return!1;var p=t,f=n,d=function(t){return e(p[t],f[t])};return l.every(d)},w=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},E="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",S=function(e){if(null===e||h(e))return e;throw new Error(E)},j=function(e){if(v(e))return{tag:"async",stripePromise:Promise.resolve(e).then(S)};var t=S(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},O=t.createContext(null);O.displayName="ElementsContext";var C=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},_=function(e){var n=e.stripe,r=e.options,o=e.children,c=t.useRef(!1),u=t.useRef(!0),i=t.useMemo((function(){return j(n)}),[n]),s=a(t.useState((function(){return{stripe:null,elements:null}})),2),l=s[0],p=s[1],f=w(n),d=w(r);return null!==f&&(f!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),g(r,d)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),c.current||("sync"===i.tag&&(c.current=!0,p({stripe:i.stripe,elements:i.stripe.elements(r)})),"async"===i.tag&&(c.current=!0,i.stripePromise.then((function(e){e&&u.current&&p({stripe:e,elements:e.elements(r)})})))),t.useEffect((function(){return function(){u.current=!1}}),[]),t.useEffect((function(){var e=l.stripe;e&&e._registerWrapper&&e._registerWrapper({name:"react-stripe-js",version:"1.1.2"})}),[l.stripe]),t.createElement(O.Provider,{value:l},o)};_.propTypes={stripe:m.any,options:m.object};var P=function(e){var n=t.useContext(O);return C(n,e)},I=function(){return P("calls useElements()").elements},x=function(){return P("calls useStripe()").stripe},k=function(e){return(0,e.children)(P("mounts <ElementsConsumer>"))};k.propTypes={children:m.func.isRequired};var T=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},N=function(e){return y(e)?(e.paymentRequest,o(e,["paymentRequest"])):{}},R=function(){},A=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},q=function(e,n){var r="".concat(A(e),"Element"),o=n?function(e){P("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o=n.id,a=n.className,c=n.options,u=void 0===c?{}:c,i=n.onBlur,s=void 0===i?R:i,l=n.onFocus,p=void 0===l?R:l,f=n.onReady,d=void 0===f?R:f,m=n.onChange,y=void 0===m?R:m,v=n.onEscape,h=void 0===v?R:v,b=n.onClick,w=void 0===b?R:b,E=P("mounts <".concat(r,">")).elements,S=t.useRef(null),j=t.useRef(null),O=T(d),C=T(s),_=T(p),I=T(w),x=T(y),k=T(h);t.useLayoutEffect((function(){if(null==S.current&&E&&null!=j.current){var t=E.create(e,u);S.current=t,t.mount(j.current),t.on("ready",(function(){return O(t)})),t.on("change",x),t.on("blur",C),t.on("focus",_),t.on("escape",k),t.on("click",I)}}));var A=t.useRef(u);return t.useEffect((function(){A.current&&A.current.paymentRequest!==u.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var e=N(u);0===Object.keys(e).length||g(e,N(A.current))||S.current&&(S.current.update(e),A.current=u)}),[u]),t.useEffect((function(){return function(){S.current&&S.current.destroy()}}),[]),t.createElement("div",{id:o,className:a,ref:j})};return o.propTypes={id:m.string,className:m.string,onChange:m.func,onBlur:m.func,onFocus:m.func,onReady:m.func,onClick:m.func,options:m.object},o.displayName=r,o.__elementType=e,o},W="undefined"===typeof window,B=q("auBankAccount",W),F=q("card",W),D=q("cardNumber",W),U=q("cardExpiry",W),J=q("cardCvc",W),L=q("fpxBank",W),Q=q("iban",W),Y=q("idealBank",W),z=q("paymentRequestButton",W);e.AuBankAccountElement=B,e.CardCvcElement=J,e.CardElement=F,e.CardExpiryElement=U,e.CardNumberElement=D,e.Elements=_,e.ElementsConsumer=k,e.FpxBankElement=L,e.IbanElement=Q,e.IdealBankElement=Y,e.PaymentRequestButtonElement=z,e.useElements=I,e.useStripe=x,Object.defineProperty(e,"__esModule",{value:!0})}(t,n("q1tI"))},lpis:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a="https://js.stripe.com/v3",c=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,u="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",i=null,s=function(e){return null!==i?i:i=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(u),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(a,'"]')),t=0;t<e.length;t++){var n=e[t];if(c.test(n.src))return n}return null}();r&&e?console.warn(u):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(a).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(o){return void n(o)}else t(null)}))},l=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.9.0",startTime:t})}(r,n),r},p=Promise.resolve().then((function(){return s(null)})),f=!1;p.catch((function(e){f||console.warn(e)}));var d=n("eWwy"),m=n("o0o1"),y=n.n(m),v=n("HaE+"),h=n("vDqi"),b=n.n(h),g=o.a.createElement,w=b.a.create({baseURL:"http://localhost:5000",withCredentials:!0});function E(){var e=Object(r.useState)(!1),t=e[0],n=e[1],o=Object(r.useState)(null),a=o[0],c=o[1],u=Object(r.useState)(""),i=u[0],s=u[1],l=Object(r.useState)(!0),p=l[0],f=l[1],m=Object(r.useState)(""),h=m[0],b=m[1],E=Object(d.useStripe)(),S=Object(d.useElements)();Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("productsInCart"));window.fetch("http://localhost:5000/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:e})}).then((function(e){return e.json()})).then((function(e){b(e.clientSecret)}))}),[]);var j=function(){var e=Object(v.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(t.empty),c(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return g("form",{id:"payment-form",onSubmit:function(){var e=Object(v.a)(y.a.mark((function e(t){var r,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s(!0),e.next=4,E.confirmCardPayment(h,{receipt_email:"test@gmail.com",payment_method:{card:S.getElement(d.CardElement)}});case 4:(r=e.sent).error?(c("Payment failed ".concat(r.error.message)),s(!1)):(c(null),s(!1),n(!0),o=localStorage.getItem("orderId"),w.post("/update-order",{_id:o}),localStorage.removeItem("productsInCart"),localStorage.removeItem("orderId"),window.location.assign("/"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g(d.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:j}),g("button",{disabled:i||p||t,id:"submit"},g("span",{id:"button-text"},i?g("div",{className:"spinner",id:"spinner"}):"Pay")),a&&g("div",{className:"card-error",role:"alert"},a),g("p",{className:t?"result-message":"result-message hidden"},"Payment succeeded, see the result in your",g("a",{href:"https://dashboard.stripe.com/test/payments"}," ","Stripe dashboard.")," Refresh the page to pay again."))}var S=n("TJRf"),j=o.a.createElement,O=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];f=!0;var r=Date.now();return p.then((function(e){return l(e,t,r)}))}("pk_test_lzaKIGxw3w0XwEjC0fDoAKm400a2bk4nzj");t.default=function(){var e=Object(r.useContext)(S.a),t=e.productsInCart,n=e.totalPrice,o=e.calculateTotalPrice;return Object(r.useEffect)((function(){o()}),[t]),j("div",null,j("h1",null,"Pagamento: ",n),j(d.Elements,{stripe:O},j(E,null)))}},q6YF:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pagamento",function(){return n("lpis")}])}},[["q6YF",0,1,2,3]]]);