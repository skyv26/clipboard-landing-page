let e;function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r,n,a,o,i,l,s,u,c,d,f,p,h,m,g,v,y,b,x,k,w,S,C,_,E,P,T,z,A,R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function M(e){return e&&e.__esModule?e.default:e}var L={},F={},j=R.parcelRequireff64;null==j&&((j=function(e){if(e in L)return L[e].exports;if(e in F){var t=F[e];delete F[e];var r={id:e,exports:{}};return L[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){F[e]=t},R.parcelRequireff64=j),j.register("1b2ls",function(e,r){t(e.exports,"Fragment",()=>n,e=>n=e),t(e.exports,"jsx",()=>a,e=>a=e),t(e.exports,"jsxs",()=>o,e=>o=e);var n,a,o,i=j("acw62"),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,r){var n,a={},o=null,i=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(i=t.ref),t)u.call(t,n)&&!d.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:l,type:e,key:o,ref:i,props:a,_owner:c.current}}n=s,a=f,o=f}),j.register("acw62",function(e,t){e.exports=j("2pUnB")}),j.register("2pUnB",function(e,r){t(e.exports,"Children",()=>n,e=>n=e),t(e.exports,"Component",()=>a,e=>a=e),t(e.exports,"Fragment",()=>o,e=>o=e),t(e.exports,"Profiler",()=>i,e=>i=e),t(e.exports,"PureComponent",()=>l,e=>l=e),t(e.exports,"StrictMode",()=>s,e=>s=e),t(e.exports,"Suspense",()=>u,e=>u=e),t(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>c,e=>c=e),t(e.exports,"cloneElement",()=>d,e=>d=e),t(e.exports,"createContext",()=>f,e=>f=e),t(e.exports,"createElement",()=>p,e=>p=e),t(e.exports,"createFactory",()=>h,e=>h=e),t(e.exports,"createRef",()=>m,e=>m=e),t(e.exports,"forwardRef",()=>g,e=>g=e),t(e.exports,"isValidElement",()=>v,e=>v=e),t(e.exports,"lazy",()=>y,e=>y=e),t(e.exports,"memo",()=>b,e=>b=e),t(e.exports,"startTransition",()=>x,e=>x=e),t(e.exports,"unstable_act",()=>k,e=>k=e),t(e.exports,"useCallback",()=>w,e=>w=e),t(e.exports,"useContext",()=>S,e=>S=e),t(e.exports,"useDebugValue",()=>C,e=>C=e),t(e.exports,"useDeferredValue",()=>_,e=>_=e),t(e.exports,"useEffect",()=>E,e=>E=e),t(e.exports,"useId",()=>P,e=>P=e),t(e.exports,"useImperativeHandle",()=>T,e=>T=e),t(e.exports,"useInsertionEffect",()=>z,e=>z=e),t(e.exports,"useLayoutEffect",()=>A,e=>A=e),t(e.exports,"useMemo",()=>R,e=>R=e),t(e.exports,"useReducer",()=>M,e=>M=e),t(e.exports,"useRef",()=>L,e=>L=e),t(e.exports,"useState",()=>F,e=>F=e),t(e.exports,"useSyncExternalStore",()=>j,e=>j=e),t(e.exports,"useTransition",()=>$,e=>$=e),t(e.exports,"version",()=>D,e=>D=e);var n,a,o,i,l,s,u,c,d,f,p,h,m,g,v,y,b,x,k,w,S,C,_,E,P,T,z,A,R,M,L,F,j,$,D,B=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),U=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),X=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),G=Symbol.iterator,Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,Z={};function J(e,t,r){this.props=e,this.context=t,this.refs=Z,this.updater=r||Q}function ee(){}function et(e,t,r){this.props=e,this.context=t,this.refs=Z,this.updater=r||Q}J.prototype.isReactComponent={},J.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},J.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=J.prototype;var er=et.prototype=new ee;er.constructor=et,K(er,J.prototype),er.isPureReactComponent=!0;var en=Array.isArray,ea=Object.prototype.hasOwnProperty,eo={current:null},ei={key:!0,ref:!0,__self:!0,__source:!0};function el(e,t,r){var n,a={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)ea.call(t,n)&&!ei.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:B,type:e,key:o,ref:i,props:a,_owner:eo.current}}function es(e){return"object"==typeof e&&null!==e&&e.$$typeof===B}var eu=/\/+/g;function ec(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function ed(e,t,r){if(null==e)return e;var n=[],a=0;return function e(t,r,n,a,o){var i,l,s,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case B:case I:c=!0}}if(c)return o=o(c=t),t=""===a?"."+ec(c,0):a,en(o)?(n="",null!=t&&(n=t.replace(eu,"$&/")+"/"),e(o,r,n,"",function(e){return e})):null!=o&&(es(o)&&(i=o,l=n+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(eu,"$&/")+"/")+t,o={$$typeof:B,type:i.type,key:l,ref:i.ref,props:i.props,_owner:i._owner}),r.push(o)),1;if(c=0,a=""===a?".":a+":",en(t))for(var d=0;d<t.length;d++){var f=a+ec(u=t[d],d);c+=e(u,r,n,f,o)}else if("function"==typeof(f=null===(s=t)||"object"!=typeof s?null:"function"==typeof(s=G&&s[G]||s["@@iterator"])?s:null))for(t=f.call(t),d=0;!(u=t.next()).done;)f=a+ec(u=u.value,d++),c+=e(u,r,n,f,o);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return c}(e,n,"","",function(e){return t.call(r,e,a++)}),n}function ef(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var ep={current:null},eh={transition:null};n={map:ed,forEach:function(e,t,r){ed(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ed(e,function(){t++}),t},toArray:function(e){return ed(e,function(e){return e})||[]},only:function(e){if(!es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},a=J,o=O,i=V,l=et,s=N,u=q,c={ReactCurrentDispatcher:ep,ReactCurrentBatchConfig:eh,ReactCurrentOwner:eo},d=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=K({},e.props),a=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=eo.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ea.call(t,s)&&!ei.hasOwnProperty(s)&&(n[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)n.children=r;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:B,type:e.type,key:a,ref:o,props:n,_owner:i}},f=function(e){return(e={$$typeof:U,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:W,_context:e},e.Consumer=e},p=el,h=function(e){var t=el.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:H,render:e}},v=es,y=function(e){return{$$typeof:Y,_payload:{_status:-1,_result:e},_init:ef}},b=function(e,t){return{$$typeof:X,type:e,compare:void 0===t?null:t}},x=function(e){var t=eh.transition;eh.transition={};try{e()}finally{eh.transition=t}},k=function(){throw Error("act(...) is not supported in production builds of React.")},w=function(e,t){return ep.current.useCallback(e,t)},S=function(e){return ep.current.useContext(e)},C=function(){},_=function(e){return ep.current.useDeferredValue(e)},E=function(e,t){return ep.current.useEffect(e,t)},P=function(){return ep.current.useId()},T=function(e,t,r){return ep.current.useImperativeHandle(e,t,r)},z=function(e,t){return ep.current.useInsertionEffect(e,t)},A=function(e,t){return ep.current.useLayoutEffect(e,t)},R=function(e,t){return ep.current.useMemo(e,t)},M=function(e,t,r){return ep.current.useReducer(e,t,r)},L=function(e){return ep.current.useRef(e)},F=function(e){return ep.current.useState(e)},j=function(e,t,r){return ep.current.useSyncExternalStore(e,t,r)},$=function(){return ep.current.useTransition()},D="18.2.0"}),j.register("9cCWX",function(e,r){t(e.exports,"AsyncMode",()=>n,e=>n=e),t(e.exports,"ConcurrentMode",()=>a,e=>a=e),t(e.exports,"ContextConsumer",()=>o,e=>o=e),t(e.exports,"ContextProvider",()=>i,e=>i=e),t(e.exports,"Element",()=>l,e=>l=e),t(e.exports,"ForwardRef",()=>s,e=>s=e),t(e.exports,"Fragment",()=>u,e=>u=e),t(e.exports,"Lazy",()=>c,e=>c=e),t(e.exports,"Memo",()=>d,e=>d=e),t(e.exports,"Portal",()=>f,e=>f=e),t(e.exports,"Profiler",()=>p,e=>p=e),t(e.exports,"StrictMode",()=>h,e=>h=e),t(e.exports,"Suspense",()=>m,e=>m=e),t(e.exports,"isAsyncMode",()=>g,e=>g=e),t(e.exports,"isConcurrentMode",()=>v,e=>v=e),t(e.exports,"isContextConsumer",()=>y,e=>y=e),t(e.exports,"isContextProvider",()=>b,e=>b=e),t(e.exports,"isElement",()=>x,e=>x=e),t(e.exports,"isForwardRef",()=>k,e=>k=e),t(e.exports,"isFragment",()=>w,e=>w=e),t(e.exports,"isLazy",()=>S,e=>S=e),t(e.exports,"isMemo",()=>C,e=>C=e),t(e.exports,"isPortal",()=>_,e=>_=e),t(e.exports,"isProfiler",()=>E,e=>E=e),t(e.exports,"isStrictMode",()=>P,e=>P=e),t(e.exports,"isSuspense",()=>T,e=>T=e),t(e.exports,"isValidElementType",()=>z,e=>z=e),t(e.exports,"typeOf",()=>A,e=>A=e);var n,a,o,i,l,s,u,c,d,f,p,h,m,g,v,y,b,x,k,w,S,C,_,E,P,T,z,A,R="function"==typeof Symbol&&Symbol.for,M=R?Symbol.for("react.element"):60103,L=R?Symbol.for("react.portal"):60106,F=R?Symbol.for("react.fragment"):60107,j=R?Symbol.for("react.strict_mode"):60108,$=R?Symbol.for("react.profiler"):60114,D=R?Symbol.for("react.provider"):60109,B=R?Symbol.for("react.context"):60110,I=R?Symbol.for("react.async_mode"):60111,O=R?Symbol.for("react.concurrent_mode"):60111,N=R?Symbol.for("react.forward_ref"):60112,V=R?Symbol.for("react.suspense"):60113,W=R?Symbol.for("react.suspense_list"):60120,U=R?Symbol.for("react.memo"):60115,H=R?Symbol.for("react.lazy"):60116,q=R?Symbol.for("react.block"):60121,X=R?Symbol.for("react.fundamental"):60117,Y=R?Symbol.for("react.responder"):60118,G=R?Symbol.for("react.scope"):60119;function Q(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case M:switch(e=e.type){case I:case O:case F:case $:case j:case V:return e;default:switch(e=e&&e.$$typeof){case B:case N:case H:case U:case D:return e;default:return t}}case L:return t}}}function K(e){return Q(e)===O}n=I,a=O,o=B,i=D,l=M,s=N,u=F,c=H,d=U,f=L,p=$,h=j,m=V,g=function(e){return K(e)||Q(e)===I},v=K,y=function(e){return Q(e)===B},b=function(e){return Q(e)===D},x=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===M},k=function(e){return Q(e)===N},w=function(e){return Q(e)===F},S=function(e){return Q(e)===H},C=function(e){return Q(e)===U},_=function(e){return Q(e)===L},E=function(e){return Q(e)===$},P=function(e){return Q(e)===j},T=function(e){return Q(e)===V},z=function(e){return"string"==typeof e||"function"==typeof e||e===F||e===O||e===$||e===j||e===V||e===W||"object"==typeof e&&null!==e&&(e.$$typeof===H||e.$$typeof===U||e.$$typeof===D||e.$$typeof===B||e.$$typeof===N||e.$$typeof===X||e.$$typeof===Y||e.$$typeof===G||e.$$typeof===q)},A=Q}),j.register("5Gn6I",function(e,t){/** Used to stand-in for `undefined` hash values. */var r,n,a,o,i,l,s,u,c,d,f="__lodash_hash_undefined__",p="[object Arguments]",h="[object Function]",m="[object Object]",g=/^\[object .+?Constructor\]$/,v=/^(?:0|[1-9]\d*)$/,y={};y["[object Float32Array]"]=y["[object Float64Array]"]=y["[object Int8Array]"]=y["[object Int16Array]"]=y["[object Int32Array]"]=y["[object Uint8Array]"]=y["[object Uint8ClampedArray]"]=y["[object Uint16Array]"]=y["[object Uint32Array]"]=!0,y[p]=y["[object Array]"]=y["[object ArrayBuffer]"]=y["[object Boolean]"]=y["[object DataView]"]=y["[object Date]"]=y["[object Error]"]=y[h]=y["[object Map]"]=y["[object Number]"]=y[m]=y["[object RegExp]"]=y["[object Set]"]=y["[object String]"]=y["[object WeakMap]"]=!1;/** Detect free variable `global` from Node.js. */var b="object"==typeof R&&R&&R.Object===Object&&R,x="object"==typeof self&&self&&self.Object===Object&&self,k=b||x||Function("return this")(),w=t&&!t.nodeType&&t,S=w&&e&&!e.nodeType&&e,C=S&&S.exports===w,_=C&&b.process,E=function(){try{// Use `util.types` for Node.js 10+.
var e=S&&S.require&&S.require("util").types;if(e)return e;// Legacy `process.binding('util')` for Node.js < 10.
return _&&_.binding&&_.binding("util")}catch(e){}}(),P=E&&E.isTypedArray,T=Array.prototype,z=Function.prototype,A=Object.prototype,M=k["__core-js_shared__"],L=z.toString,F=A.hasOwnProperty,j=(l=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||""))?"Symbol(src)_1."+l:"",$=A.toString,D=L.call(Object),B=RegExp("^"+L.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),I=C?k.Buffer:void 0,O=k.Symbol,N=k.Uint8Array,V=I?I.allocUnsafe:void 0,W=(s=Object.getPrototypeOf,u=Object,function(e){return s(u(e))}),U=Object.create,H=A.propertyIsEnumerable,q=T.splice,X=O?O.toStringTag:void 0,Y=function(){try{var e=ef(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),G=I?I.isBuffer:void 0,Q=Math.max,K=Date.now,Z=ef(k,"Map"),J=ef(Object,"create"),ee=function(){function e(){}return function(t){if(!eC(t))return{};if(U)return U(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function et(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function er(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function en(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ea(e){var t=this.__data__=new er(e);this.size=t.size}/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function eo(e,t,r){(void 0===r||ev(e[t],r))&&(void 0!==r||t in e)||el(e,t,r)}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function ei(e,t){for(var r=e.length;r--;)if(ev(e[r][0],t))return r;return -1}/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function el(e,t,r){"__proto__"==t&&Y?Y(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}// Add methods to `Hash`.
et.prototype.clear=/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function(){this.__data__=J?J(null):{},this.size=0},et.prototype.delete=/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},et.prototype.get=/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__;if(J){var r=t[e];return r===f?void 0:r}return F.call(t,e)?t[e]:void 0},et.prototype.has=/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){var t=this.__data__;return J?void 0!==t[e]:F.call(t,e)},et.prototype.set=/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=J&&void 0===t?f:t,this},// Add methods to `ListCache`.
er.prototype.clear=/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function(){this.__data__=[],this.size=0},er.prototype.delete=/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,r=ei(t,e);return!(r<0)&&(r==t.length-1?t.pop():q.call(t,r,1),--this.size,!0)},er.prototype.get=/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__,r=ei(t,e);return r<0?void 0:t[r][1]},er.prototype.has=/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return ei(this.__data__,e)>-1},er.prototype.set=/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function(e,t){var r=this.__data__,n=ei(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},// Add methods to `MapCache`.
en.prototype.clear=/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function(){this.size=0,this.__data__={hash:new et,map:new(Z||er),string:new et}},en.prototype.delete=/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=ed(this,e).delete(e);return this.size-=t?1:0,t},en.prototype.get=/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return ed(this,e).get(e)},en.prototype.has=/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return ed(this,e).has(e)},en.prototype.set=/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function(e,t){var r=ed(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},// Add methods to `Stack`.
ea.prototype.clear=/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function(){this.__data__=new er,this.size=0},ea.prototype.delete=/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},ea.prototype.get=/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return this.__data__.get(e)},ea.prototype.has=/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return this.__data__.has(e)},ea.prototype.set=/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function(e,t){var r=this.__data__;if(r instanceof er){var n=r.__data__;if(!Z||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new en(n)}return r.set(e,t),this.size=r.size,this};/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */var es=function(e,t,r){for(var n=-1,a=Object(e),o=r(e),i=o.length;i--;){var l=o[++n];if(!1===t(a[l],l,a))break}return e};/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function eu(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":X&&X in Object(e)?/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=F.call(e,X),r=e[X];try{e[X]=void 0;var n=!0}catch(e){}var a=$.call(e);return n&&(t?e[X]=r:delete e[X]),a}(e):$.call(e)}/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function ec(e){return e_(e)&&eu(e)==p}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function ed(e,t){var r,n=e.__data__;return("string"==(r=typeof t)||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t)?n["string"==typeof t?"string":"hash"]:n.map}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function ef(e,t){var r=null==e?void 0:e[t];return!(!eC(r)||j&&j in r)&&(ew(r)?B:g).test(/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function(e){if(null!=e){try{return L.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(r))?r:void 0}/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function ep(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&v.test(e))&&e>-1&&e%1==0&&e<t}/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function eh(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||A)}/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function em(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var eg=(r=Y?function(e,t){return Y(e,"toString",{configurable:!0,enumerable:!1,value:function(){return t},writable:!0})}:ez,n=0,a=0,function(){var e=K(),t=16-(e-a);if(a=e,t>0){if(++n>=800)return arguments[0]}else n=0;return r.apply(void 0,arguments)});/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function ev(e,t){return e===t||e!=e&&t!=t}/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var ey=ec(function(){return arguments}())?ec:function(e){return e_(e)&&F.call(e,"callee")&&!H.call(e,"callee")},eb=Array.isArray;/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function ex(e){return null!=e&&eS(e.length)&&!ew(e)}/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var ek=G||/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function(){return!1};/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function ew(e){if(!eC(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=eu(e);return t==h||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function eS(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function eC(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function e_(e){return null!=e&&"object"==typeof e}/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var eE=P?function(e){return P(e)}:/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function(e){return e_(e)&&eS(e.length)&&!!y[eu(e)]};/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function eP(e){return ex(e)?/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function(e,t){var r=eb(e),n=!r&&ey(e),a=!r&&!n&&ek(e),o=!r&&!n&&!a&&eE(e),i=r||n||a||o,l=i?/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],s=l.length;for(var u in e)(t||F.call(e,u))&&!(i&&// Safari 9 has enumerable `arguments.length` in strict mode.
("length"==u||// Node.js 0.10 has enumerable non-index properties on buffers.
a&&("offset"==u||"parent"==u)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||// Skip index properties.
ep(u,s)))&&l.push(u);return l}(e,!0):/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function(e){if(!eC(e))return(/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}(e));var t=eh(e),r=[];for(var n in e)"constructor"==n&&(t||!F.call(e,n))||r.push(n);return r}(e)}/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */var eT=(c=function(e,t,r,n){!/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */function e(t,r,n,a,o){t!==r&&es(r,function(i,l){if(o||(o=new ea),eC(i))/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */(function(e,t,r,n,a,o,i){var l=em(e,r),s=em(t,r),u=i.get(s);if(u){eo(e,r,u);return}var c=o?o(l,s,r+"",e,t,i):void 0,d=void 0===c;if(d){var f,p,h=eb(s),g=!h&&ek(s),v=!h&&!g&&eE(s);c=s,h||g||v?eb(l)?c=l:e_(l)&&ex(l)?c=/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}(l):g?(d=!1,c=/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function(e,t){if(t)return e.slice();var r=e.length,n=V?V(r):new e.constructor(r);return e.copy(n),n}(s,!0)):v?(d=!1,p=new(f=s.buffer).constructor(f.byteLength),new N(p).set(new N(f)),c=new s.constructor(p,s.byteOffset,s.length)):c=[]:/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */function(e){if(!e_(e)||eu(e)!=m)return!1;var t=W(e);if(null===t)return!0;var r=F.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&L.call(r)==D}(s)||ey(s)?(c=l,ey(l)?c=/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function(e,t,r,n){var a=!r;r||(r={});for(var o=-1,i=t.length;++o<i;){var l=t[o],s=n?n(r[l],e[l],l,r,e):void 0;void 0===s&&(s=e[l]),a?el(r,l,s):/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function(e,t,r){var n=e[t];F.call(e,t)&&ev(n,r)&&(void 0!==r||t in e)||el(e,t,r)}(r,l,s)}return r}(l,eP(l)):(!eC(l)||ew(l))&&(c="function"!=typeof s.constructor||eh(s)?{}:ee(W(s)))):d=!1}d&&(// Recursively merge objects and arrays (susceptible to call stack limits).
i.set(s,c),a(c,s,n,o,i),i.delete(s)),eo(e,r,c)})(t,r,l,n,e,a,o);else{var s=a?a(em(t,l),i,l+"",t,r,o):void 0;void 0===s&&(s=i),eo(t,l,s)}},eP)}(e,t,r,n)},eg((o=d=function(e,t){var r=-1,n=t.length,a=n>1?t[n-1]:void 0,o=n>2?t[2]:void 0;for(a=c.length>3&&"function"==typeof a?(n--,a):void 0,o&&/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function(e,t,r){if(!eC(r))return!1;var n=typeof t;return("number"==n?!!(ex(r)&&ep(t,r.length)):"string"==n&&(t in r))&&ev(r[t],e)}(t[0],t[1],o)&&(a=n<3?void 0:a,n=1),e=Object(e);++r<n;){var i=t[r];i&&c(e,i,r,a)}return e},i=Q((i=void 0,o.length-1),0),function(){for(var e=arguments,t=-1,r=Q(e.length-i,0),n=Array(r);++t<r;)n[t]=e[i+t];t=-1;for(var a=Array(i+1);++t<i;)a[t]=e[t];return a[i]=ez(n),/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}(o,this,a)}),d+""));/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function ez(e){return e}e.exports=eT}),j.register("7dGEo",function(e,r){t(e.exports,"default",()=>o);var n=j("1WnaA"),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=(0,n.default)(function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)})}),j.register("1WnaA",function(e,r){t(e.exports,"default",()=>n);var n=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}}),j.register("Xw6Mv",function(e,r){t(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>W,e=>W=e),t(e.exports,"createPortal",()=>U,e=>U=e),t(e.exports,"createRoot",()=>H,e=>H=e),t(e.exports,"findDOMNode",()=>q,e=>q=e),t(e.exports,"flushSync",()=>X,e=>X=e),t(e.exports,"hydrate",()=>Y,e=>Y=e),t(e.exports,"hydrateRoot",()=>G,e=>G=e),t(e.exports,"render",()=>Q,e=>Q=e),t(e.exports,"unmountComponentAtNode",()=>K,e=>K=e),t(e.exports,"unstable_batchedUpdates",()=>Z,e=>Z=e),t(e.exports,"unstable_renderSubtreeIntoContainer",()=>J,e=>J=e),t(e.exports,"version",()=>ee,e=>ee=e);var n,a,o,i,l,s,u=j("acw62"),c=j("fO90s");function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,p={};function h(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(p[e]=t,e=0;e<t.length;e++)f.add(t[e])}var g=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),v=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},x={};function k(e,t,r,n,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var w={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){w[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];w[t]=new k(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){w[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){w[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){w[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){w[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){w[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){w[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){w[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(e){return e[1].toUpperCase()}function _(e,t,r,n){var a,o=w.hasOwnProperty(t)?w[t]:null;(null!==o?0!==o.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null==t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(n)return!1;if(null!==r)return!r.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,o,n)&&(r=null),n||null===o?(a=t,(!!v.call(x,a)||!v.call(b,a)&&(y.test(a)?x[a]=!0:(b[a]=!0,!1)))&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r))):o.mustUseProperty?e[o.propertyName]=null===r?3!==o.type&&"":r:(t=o.attributeName,n=o.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(o=o.type)||4===o&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(S,C);w[t]=new k(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(S,C);w[t]=new k(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(S,C);w[t]=new k(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){w[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),w.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){w[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});var E=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),T=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),L=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),I=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var O=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var N=Symbol.iterator;function V(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=N&&e[N]||e["@@iterator"])?e:null}var W,U,H,q,X,Y,G,Q,K,Z,J,ee,et,er=Object.assign;function en(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var ea=!1;function eo(e,t){if(!e||ea)return"";ea=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var n=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){n=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){n=e}e()}}catch(t){if(t&&n&&"string"==typeof t.stack){for(var a=t.stack.split("\n"),o=n.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l)break}}}finally{ea=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?en(e):""}function ei(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function el(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function es(e){e._valueTracker||(e._valueTracker=function(e){var t=el(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==r&&"function"==typeof r.get&&"function"==typeof r.set){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=el(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ed(e,t){var r=t.checked;return er({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function ef(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=ei(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ep(e,t){null!=(t=t.checked)&&_(e,"checked",t,!1)}function eh(e,t){ep(e,t);var r=ei(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n){e.removeAttribute("value");return}t.hasOwnProperty("value")?eg(e,t.type,r):t.hasOwnProperty("defaultValue")&&eg(e,t.type,ei(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function eg(e,t,r){("number"!==t||ec(e.ownerDocument)!==e)&&(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ev=Array.isArray;function ey(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(a=0,r=""+ei(r),t=null;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function eb(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(d(91));return er({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ex(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(d(92));if(ev(r)){if(1<r.length)throw Error(d(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:ei(r)}}function ek(e,t){var r=ei(t.value),n=ei(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function ew(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function eS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eC(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?eS(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var e_,eE,eP=(e_=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((eE=eE||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eE.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction(function(){return e_(e,t,r,n)})}:e_);function eT(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType){r.nodeValue=t;return}}e.textContent=t}var ez={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eA=["Webkit","ms","Moz","O"];function eR(e,t,r){return null==t||"boolean"==typeof t||""===t?"":r||"number"!=typeof t||0===t||ez.hasOwnProperty(e)&&ez[e]?(""+t).trim():t+"px"}function eM(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),a=eR(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}Object.keys(ez).forEach(function(e){eA.forEach(function(t){ez[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=ez[e]})});var eL=er({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eF(e,t){if(t){if(eL[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(d(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(d(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(d(62))}}function ej(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e$=null;function eD(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var eB=null,eI=null,eO=null;function eN(e){if(e=nG(e)){if("function"!=typeof eB)throw Error(d(280));var t=e.stateNode;t&&(t=nK(t),eB(e.stateNode,e.type,t))}}function eV(e){eI?eO?eO.push(e):eO=[e]:eI=e}function eW(){if(eI){var e=eI,t=eO;if(eO=eI=null,eN(e),t)for(e=0;e<t.length;e++)eN(t[e])}}function eU(e,t){return e(t)}function eH(){}var eq=!1;function eX(e,t,r){if(eq)return e(t,r);eq=!0;try{return eU(e,t,r)}finally{eq=!1,(null!==eI||null!==eO)&&(eH(),eW())}}function eY(e,t){var r=e.stateNode;if(null===r)return null;var n=nK(r);if(null===n)return null;switch(r=n[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break;default:e=!1}if(e)return null;if(r&&"function"!=typeof r)throw Error(d(231,t,typeof r));return r}var eG=!1;if(g)try{var eQ={};Object.defineProperty(eQ,"passive",{get:function(){eG=!0}}),window.addEventListener("test",eQ,eQ),window.removeEventListener("test",eQ,eQ)}catch(e){eG=!1}function eK(e,t,r,n,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(e){this.onError(e)}}var eZ=!1,eJ=null,e0=!1,e1=null,e2={onError:function(e){eZ=!0,eJ=e}};function e5(e,t,r,n,a,o,i,l,s){eZ=!1,eJ=null,eK.apply(e2,arguments)}function e3(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(r=t.return),e=t.return;while(e)}return 3===t.tag?r:null}function e4(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e6(e){if(e3(e)!==e)throw Error(d(188))}function e8(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e3(e)))throw Error(d(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(n=a.return)){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return e6(a),e;if(o===n)return e6(a),t;o=o.sibling}throw Error(d(188))}if(r.return!==n.return)r=a,n=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,n=o;break}if(l===n){i=!0,n=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,n=a;break}if(l===n){i=!0,n=o,r=a;break}l=l.sibling}if(!i)throw Error(d(189))}}if(r.alternate!==n)throw Error(d(190))}if(3!==r.tag)throw Error(d(188));return r.stateNode.current===r?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var r=e(t);if(null!==r)return r;t=t.sibling}return null}(e):null}var e9=c.unstable_scheduleCallback,e7=c.unstable_cancelCallback,te=c.unstable_shouldYield,tt=c.unstable_requestPaint,tr=c.unstable_now,tn=c.unstable_getCurrentPriorityLevel,ta=c.unstable_ImmediatePriority,to=c.unstable_UserBlockingPriority,ti=c.unstable_NormalPriority,tl=c.unstable_LowPriority,ts=c.unstable_IdlePriority,tu=null,tc=null,td=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(tf(e)/tp|0)|0},tf=Math.log,tp=Math.LN2,th=64,tm=4194304;function tg(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tv(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&r;if(0!==i){var l=i&~a;0!==l?n=tg(l):0!=(o&=i)&&(n=tg(o))}else 0!=(i=r&~a)?n=tg(i):0!==o&&(n=tg(o));if(0===n)return 0;if(0!==t&&t!==n&&0==(t&a)&&((a=n&-n)>=(o=t&-t)||16===a&&0!=(4194240&o)))return t;if(0!=(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)a=1<<(r=31-td(t)),n|=e[r],t&=~a;return n}function ty(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function tb(){var e=th;return 0==(4194240&(th<<=1))&&(th=64),e}function tx(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function tk(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-td(t)]=r}function tw(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-td(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var tS=0;function tC(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var t_,tE,tP,tT,tz,tA=!1,tR=[],tM=null,tL=null,tF=null,tj=new Map,t$=new Map,tD=[],tB="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tI(e,t){switch(e){case"focusin":case"focusout":tM=null;break;case"dragenter":case"dragleave":tL=null;break;case"mouseover":case"mouseout":tF=null;break;case"pointerover":case"pointerout":tj.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":t$.delete(t.pointerId)}}function tO(e,t,r,n,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},null!==t&&null!==(t=nG(t))&&tE(t)):(e.eventSystemFlags|=n,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a)),e}function tN(e){var t=nY(e.target);if(null!==t){var r=e3(t);if(null!==r){if(13===(t=r.tag)){if(null!==(t=e4(r))){e.blockedOn=t,tz(e.priority,function(){tP(r)});return}}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===r.tag?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tV(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=tJ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=nG(r))&&tE(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);e$=n,r.target.dispatchEvent(n),e$=null,t.shift()}return!0}function tW(e,t,r){tV(e)&&r.delete(t)}function tU(){tA=!1,null!==tM&&tV(tM)&&(tM=null),null!==tL&&tV(tL)&&(tL=null),null!==tF&&tV(tF)&&(tF=null),tj.forEach(tW),t$.forEach(tW)}function tH(e,t){e.blockedOn===t&&(e.blockedOn=null,tA||(tA=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tU)))}function tq(e){function t(t){return tH(t,e)}if(0<tR.length){tH(tR[0],e);for(var r=1;r<tR.length;r++){var n=tR[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==tM&&tH(tM,e),null!==tL&&tH(tL,e),null!==tF&&tH(tF,e),tj.forEach(t),t$.forEach(t),r=0;r<tD.length;r++)(n=tD[r]).blockedOn===e&&(n.blockedOn=null);for(;0<tD.length&&null===(r=tD[0]).blockedOn;)tN(r),null===r.blockedOn&&tD.shift()}var tX=E.ReactCurrentBatchConfig,tY=!0;function tG(e,t,r,n){var a=tS,o=tX.transition;tX.transition=null;try{tS=1,tK(e,t,r,n)}finally{tS=a,tX.transition=o}}function tQ(e,t,r,n){var a=tS,o=tX.transition;tX.transition=null;try{tS=4,tK(e,t,r,n)}finally{tS=a,tX.transition=o}}function tK(e,t,r,n){if(tY){var a=tJ(e,t,r,n);if(null===a)nx(e,t,n,tZ,r),tI(e,n);else if(function(e,t,r,n,a){switch(t){case"focusin":return tM=tO(tM,e,t,r,n,a),!0;case"dragenter":return tL=tO(tL,e,t,r,n,a),!0;case"mouseover":return tF=tO(tF,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return tj.set(o,tO(tj.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,t$.set(o,tO(t$.get(o)||null,e,t,r,n,a)),!0}return!1}(a,e,t,r,n))n.stopPropagation();else if(tI(e,n),4&t&&-1<tB.indexOf(e)){for(;null!==a;){var o=nG(a);if(null!==o&&t_(o),null===(o=tJ(e,t,r,n))&&nx(e,t,n,tZ,r),o===a)break;a=o}null!==a&&n.stopPropagation()}else nx(e,t,n,null,r)}}var tZ=null;function tJ(e,t,r,n){if(tZ=null,null!==(e=nY(e=eD(n)))){if(null===(t=e3(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=e4(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tZ=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tn()){case ta:return 1;case to:return 4;case ti:case tl:return 16;case ts:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t5=null;function t3(){if(t5)return t5;var e,t,r=t2,n=r.length,a="value"in t1?t1.value:t1.textContent,o=a.length;for(e=0;e<n&&r[e]===a[e];e++);var i=n-e;for(t=1;t<=i&&r[n-t]===a[o-t];t++);return t5=a.slice(e,1<t?1-t:void 0)}function t4(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t6(){return!0}function t8(){return!1}function t9(e){function t(t,r,n,a,o){for(var i in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?t6:t8,this.isPropagationStopped=t8,this}return er(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t6)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t6)},persist:function(){},isPersistent:t6}),t}var t7,re,rt,rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rn=t9(rr),ra=er({},rr,{view:0,detail:0}),ro=t9(ra),ri=er({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rv,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rt&&(rt&&"mousemove"===e.type?(t7=e.screenX-rt.screenX,re=e.screenY-rt.screenY):re=t7=0,rt=e),t7)},movementY:function(e){return"movementY"in e?e.movementY:re}}),rl=t9(ri),rs=t9(er({},ri,{dataTransfer:0})),ru=t9(er({},ra,{relatedTarget:0})),rc=t9(er({},rr,{animationName:0,elapsedTime:0,pseudoElement:0})),rd=t9(er({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),rf=t9(er({},rr,{data:0})),rp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=rm[e])&&!!t[e]}function rv(){return rg}var ry=t9(er({},ra,{key:function(e){if(e.key){var t=rp[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t4(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rv,charCode:function(e){return"keypress"===e.type?t4(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t4(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),rb=t9(er({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rx=t9(er({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rv})),rk=t9(er({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0})),rw=t9(er({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),rS=[9,13,27,32],rC=g&&"CompositionEvent"in window,r_=null;g&&"documentMode"in document&&(r_=document.documentMode);var rE=g&&"TextEvent"in window&&!r_,rP=g&&(!rC||r_&&8<r_&&11>=r_),rT=!1;function rz(e,t){switch(e){case"keyup":return -1!==rS.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rA(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var rR=!1,rM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rL(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!rM[e.type]:"textarea"===t}function rF(e,t,r,n){eV(n),0<(t=nw(t,"onChange")).length&&(r=new rn("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var rj=null,r$=null;function rD(e){nh(e,0)}function rB(e){if(eu(nQ(e)))return e}function rI(e,t){if("change"===e)return t}var rO=!1;if(g){if(g){var rN="oninput"in document;if(!rN){var rV=document.createElement("div");rV.setAttribute("oninput","return;"),rN="function"==typeof rV.oninput}n=rN}else n=!1;rO=n&&(!document.documentMode||9<document.documentMode)}function rW(){rj&&(rj.detachEvent("onpropertychange",rU),r$=rj=null)}function rU(e){if("value"===e.propertyName&&rB(r$)){var t=[];rF(t,r$,e,eD(e)),eX(rD,t)}}function rH(e,t,r){"focusin"===e?(rW(),rj=t,r$=r,rj.attachEvent("onpropertychange",rU)):"focusout"===e&&rW()}function rq(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return rB(r$)}function rX(e,t){if("click"===e)return rB(t)}function rY(e,t){if("input"===e||"change"===e)return rB(t)}var rG="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function rQ(e,t){if(rG(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!v.call(t,a)||!rG(e[a],t[a]))return!1}return!0}function rK(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rZ(e,t){var r,n=rK(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rK(n)}}function rJ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var r="string"==typeof t.contentWindow.location.href}catch(e){r=!1}if(r)e=t.contentWindow;else break;t=ec(e.document)}return t}function r0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var r1=g&&"documentMode"in document&&11>=document.documentMode,r2=null,r5=null,r3=null,r4=!1;function r6(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;r4||null==r2||r2!==ec(n)||(n="selectionStart"in(n=r2)&&r0(n)?{start:n.selectionStart,end:n.selectionEnd}:{anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},r3&&rQ(r3,n)||(r3=n,0<(n=nw(r5,"onSelect")).length&&(t=new rn("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=r2)))}function r8(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var r9={animationend:r8("Animation","AnimationEnd"),animationiteration:r8("Animation","AnimationIteration"),animationstart:r8("Animation","AnimationStart"),transitionend:r8("Transition","TransitionEnd")},r7={},ne={};function nt(e){if(r7[e])return r7[e];if(!r9[e])return e;var t,r=r9[e];for(t in r)if(r.hasOwnProperty(t)&&t in ne)return r7[e]=r[t];return e}g&&(ne=document.createElement("div").style,"AnimationEvent"in window||(delete r9.animationend.animation,delete r9.animationiteration.animation,delete r9.animationstart.animation),"TransitionEvent"in window||delete r9.transitionend.transition);var nr=nt("animationend"),nn=nt("animationiteration"),na=nt("animationstart"),no=nt("transitionend"),ni=new Map,nl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(e,t){ni.set(e,t),h(t,[e])}for(var nu=0;nu<nl.length;nu++){var nc=nl[nu];ns(nc.toLowerCase(),"on"+(nc[0].toUpperCase()+nc.slice(1)))}ns(nr,"onAnimationEnd"),ns(nn,"onAnimationIteration"),ns(na,"onAnimationStart"),ns("dblclick","onDoubleClick"),ns("focusin","onFocus"),ns("focusout","onBlur"),ns(no,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nf=new Set("cancel close invalid load scroll toggle".split(" ").concat(nd));function np(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,a,o,i,l,s){if(e5.apply(this,arguments),eZ){if(eZ){var u=eJ;eZ=!1,eJ=null}else throw Error(d(198));e0||(e0=!0,e1=u)}}(n,t,void 0,e),e.currentTarget=null}function nh(e,t){t=0!=(4&t);for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;np(a,l,u),o=s}else for(i=0;i<n.length;i++){if(s=(l=n[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;np(a,l,u),o=s}}}if(e0)throw e=e1,e0=!1,e1=null,e}function nm(e,t){var r=t[nH];void 0===r&&(r=t[nH]=new Set);var n=e+"__bubble";r.has(n)||(nb(t,e,2,!1),r.add(n))}function ng(e,t,r){var n=0;t&&(n|=4),nb(r,e,n,t)}var nv="_reactListening"+Math.random().toString(36).slice(2);function ny(e){if(!e[nv]){e[nv]=!0,f.forEach(function(t){"selectionchange"!==t&&(nf.has(t)||ng(t,!1,e),ng(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[nv]||(t[nv]=!0,ng("selectionchange",!1,t))}}function nb(e,t,r,n){switch(t0(t)){case 1:var a=tG;break;case 4:a=tQ;break;default:a=tK}r=a.bind(null,t,r,e),a=void 0,eG&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(a=!0),n?void 0!==a?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):void 0!==a?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function nx(e,t,r,n,a){var o=n;if(0==(1&t)&&0==(2&t)&&null!==n)e:for(;;){if(null===n)return;var i=n.tag;if(3===i||4===i){var l=n.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=n.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=nY(l)))return;if(5===(s=i.tag)||6===s){n=o=i;continue e}l=l.parentNode}}n=n.return}eX(function(){var n=o,a=eD(r),i=[];e:{var l=ni.get(e);if(void 0!==l){var s=rn,u=e;switch(e){case"keypress":if(0===t4(r))break e;case"keydown":case"keyup":s=ry;break;case"focusin":u="focus",s=ru;break;case"focusout":u="blur",s=ru;break;case"beforeblur":case"afterblur":s=ru;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=rl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=rs;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=rx;break;case nr:case nn:case na:s=rc;break;case no:s=rk;break;case"scroll":s=ro;break;case"wheel":s=rw;break;case"copy":case"cut":case"paste":s=rd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=rb}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=n;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&null!=(m=eY(h,f))&&c.push(nk(h,m,p))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,r,a),i.push({event:l,listeners:c}))}}if(0==(7&t)){if(l="mouseover"===e||"pointerover"===e,s="mouseout"===e||"pointerout"===e,!(l&&r!==e$&&(u=r.relatedTarget||r.fromElement)&&(nY(u)||u[nU]))&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(u=r.relatedTarget||r.toElement,s=n,null!==(u=u?nY(u):null)&&(d=e3(u),u!==d||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=n),s!==u)){if(c=rl,m="onMouseLeave",f="onMouseEnter",h="mouse",("pointerout"===e||"pointerover"===e)&&(c=rb,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:nQ(s),p=null==u?l:nQ(u),(l=new c(m,h+"leave",s,r,a)).target=d,l.relatedTarget=p,m=null,nY(a)===n&&((c=new c(f,h+"enter",u,r,a)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)t:{for(c=s,f=u,h=0,p=c;p;p=nS(p))h++;for(p=0,m=f;m;m=nS(m))p++;for(;0<h-p;)c=nS(c),h--;for(;0<p-h;)f=nS(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break t;c=nS(c),f=nS(f)}c=null}else c=null;null!==s&&nC(i,l,s,c,!1),null!==u&&null!==d&&nC(i,d,u,c,!0)}e:{if("select"===(s=(l=n?nQ(n):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g,v=rI;else if(rL(l)){if(rO)v=rY;else{v=rq;var y=rH}}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(v=rX);if(v&&(v=v(e,n))){rF(i,v,r,a);break e}y&&y(e,l,n),"focusout"===e&&(y=l._wrapperState)&&y.controlled&&"number"===l.type&&eg(l,"number",l.value)}switch(y=n?nQ(n):window,e){case"focusin":(rL(y)||"true"===y.contentEditable)&&(r2=y,r5=n,r3=null);break;case"focusout":r3=r5=r2=null;break;case"mousedown":r4=!0;break;case"contextmenu":case"mouseup":case"dragend":r4=!1,r6(i,r,a);break;case"selectionchange":if(r1)break;case"keydown":case"keyup":r6(i,r,a)}if(rC)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else rR?rz(e,r)&&(b="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(b="onCompositionStart");b&&(rP&&"ko"!==r.locale&&(rR||"onCompositionStart"!==b?"onCompositionEnd"===b&&rR&&(g=t3()):(t2="value"in(t1=a)?t1.value:t1.textContent,rR=!0)),0<(y=nw(n,b)).length&&(b=new rf(b,e,null,r,a),i.push({event:b,listeners:y}),g?b.data=g:null!==(g=rA(r))&&(b.data=g))),(g=rE?function(e,t){switch(e){case"compositionend":return rA(t);case"keypress":if(32!==t.which)return null;return rT=!0," ";case"textInput":return" "===(e=t.data)&&rT?null:e;default:return null}}(e,r):function(e,t){if(rR)return"compositionend"===e||!rC&&rz(e,t)?(e=t3(),t5=t2=t1=null,rR=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rP&&"ko"!==t.locale?null:t.data}}(e,r))&&0<(n=nw(n,"onBeforeInput")).length&&(a=new rf("onBeforeInput","beforeinput",null,r,a),i.push({event:a,listeners:n}),a.data=g)}nh(i,t)})}function nk(e,t,r){return{instance:e,listener:t,currentTarget:r}}function nw(e,t){for(var r=t+"Capture",n=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=eY(e,r))&&n.unshift(nk(e,o,a)),null!=(o=eY(e,t))&&n.push(nk(e,o,a))),e=e.return}return n}function nS(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function nC(e,t,r,n,a){for(var o=t._reactName,i=[];null!==r&&r!==n;){var l=r,s=l.alternate,u=l.stateNode;if(null!==s&&s===n)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=eY(r,o))&&i.unshift(nk(r,s,l)):a||null!=(s=eY(r,o))&&i.push(nk(r,s,l))),r=r.return}0!==i.length&&e.push({event:t,listeners:i})}var n_=/\r\n?/g,nE=/\u0000|\uFFFD/g;function nP(e){return("string"==typeof e?e:""+e).replace(n_,"\n").replace(nE,"")}function nT(e,t,r){if(t=nP(t),nP(e)!==t&&r)throw Error(d(425))}function nz(){}var nA=null,nR=null;function nM(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var nL="function"==typeof setTimeout?setTimeout:void 0,nF="function"==typeof clearTimeout?clearTimeout:void 0,nj="function"==typeof Promise?Promise:void 0,n$="function"==typeof queueMicrotask?queueMicrotask:void 0!==nj?function(e){return nj.resolve(null).then(e).catch(nD)}:nL;function nD(e){setTimeout(function(){throw e})}function nB(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&8===a.nodeType){if("/$"===(r=a.data)){if(0===n){e.removeChild(a),tq(t);return}n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++}r=a}while(r)tq(t)}function nI(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function nO(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var nN=Math.random().toString(36).slice(2),nV="__reactFiber$"+nN,nW="__reactProps$"+nN,nU="__reactContainer$"+nN,nH="__reactEvents$"+nN,nq="__reactListeners$"+nN,nX="__reactHandles$"+nN;function nY(e){var t=e[nV];if(t)return t;for(var r=e.parentNode;r;){if(t=r[nU]||r[nV]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=nO(e);null!==e;){if(r=e[nV])return r;e=nO(e)}return t}r=(e=r).parentNode}return null}function nG(e){return(e=e[nV]||e[nU])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function nQ(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(d(33))}function nK(e){return e[nW]||null}var nZ=[],nJ=-1;function n0(e){return{current:e}}function n1(e){0>nJ||(e.current=nZ[nJ],nZ[nJ]=null,nJ--)}function n2(e,t){nZ[++nJ]=e.current,e.current=t}var n5={},n3=n0(n5),n4=n0(!1),n6=n5;function n8(e,t){var r=e.type.contextTypes;if(!r)return n5;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in r)o[a]=t[a];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function n9(e){return null!=(e=e.childContextTypes)}function n7(){n1(n4),n1(n3)}function ae(e,t,r){if(n3.current!==n5)throw Error(d(168));n2(n3,t),n2(n4,r)}function at(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!=typeof n.getChildContext)return r;for(var a in n=n.getChildContext())if(!(a in t))throw Error(d(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case z:return"Fragment";case T:return"Portal";case R:return"Profiler";case A:return"StrictMode";case $:return"Suspense";case D:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case L:return(t.displayName||"Context")+".Consumer";case M:return(t._context.displayName||"Context")+".Provider";case F:var r=t.render;return(t=t.displayName)||(t=""!==(t=r.displayName||r.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case B:return null!==(r=t.displayName||null)?r:e(t.type)||"Memo";case I:r=t._payload,t=t._init;try{return e(t(r))}catch(e){}}return null}(t);case 8:return t===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",a));return er({},r,n)}function ar(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||n5,n6=n3.current,n2(n3,e),n2(n4,n4.current),!0}function an(e,t,r){var n=e.stateNode;if(!n)throw Error(d(169));r?(e=at(e,t,n6),n.__reactInternalMemoizedMergedChildContext=e,n1(n4),n1(n3),n2(n3,e)):n1(n4),n2(n4,r)}var aa=null,ao=!1,ai=!1;function al(e){null===aa?aa=[e]:aa.push(e)}function as(){if(!ai&&null!==aa){ai=!0;var e=0,t=tS;try{var r=aa;for(tS=1;e<r.length;e++){var n=r[e];do n=n(!0);while(null!==n)}aa=null,ao=!1}catch(t){throw null!==aa&&(aa=aa.slice(e+1)),e9(ta,as),t}finally{tS=t,ai=!1}}return null}var au=[],ac=0,ad=null,af=0,ap=[],ah=0,am=null,ag=1,av="";function ay(e,t){au[ac++]=af,au[ac++]=ad,ad=e,af=t}function ab(e,t,r){ap[ah++]=ag,ap[ah++]=av,ap[ah++]=am,am=e;var n=ag;e=av;var a=32-td(n)-1;n&=~(1<<a),r+=1;var o=32-td(t)+a;if(30<o){var i=a-a%5;o=(n&(1<<i)-1).toString(32),n>>=i,a-=i,ag=1<<32-td(t)+a|r<<a|n,av=o+e}else ag=1<<o|r<<a|n,av=e}function ax(e){null!==e.return&&(ay(e,1),ab(e,1,0))}function ak(e){for(;e===ad;)ad=au[--ac],au[ac]=null,af=au[--ac],au[ac]=null;for(;e===am;)am=ap[--ah],ap[ah]=null,av=ap[--ah],ap[ah]=null,ag=ap[--ah],ap[ah]=null}var aw=null,aS=null,aC=!1,a_=null;function aE(e,t){var r=l9(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function aP(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,aw=e,aS=nI(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,aw=e,aS=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==am?{id:ag,overflow:av}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=l9(18,null,null,0)).stateNode=t,r.return=e,e.child=r,aw=e,aS=null,!0);default:return!1}}function aT(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function az(e){if(aC){var t=aS;if(t){var r=t;if(!aP(e,t)){if(aT(e))throw Error(d(418));t=nI(r.nextSibling);var n=aw;t&&aP(e,t)?aE(n,r):(e.flags=-4097&e.flags|2,aC=!1,aw=e)}}else{if(aT(e))throw Error(d(418));e.flags=-4097&e.flags|2,aC=!1,aw=e}}}function aA(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;aw=e}function aR(e){if(e!==aw)return!1;if(!aC)return aA(e),aC=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!nM(e.type,e.memoizedProps)),t&&(t=aS)){if(aT(e))throw aM(),Error(d(418));for(;t;)aE(e,t),t=nI(t.nextSibling)}if(aA(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(d(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,r=e.data;if("/$"===r){if(0===t){aS=nI(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}aS=null}}else aS=aw?nI(e.stateNode.nextSibling):null;return!0}function aM(){for(var e=aS;e;)e=nI(e.nextSibling)}function aL(){aS=aw=null,aC=!1}function aF(e){null===a_?a_=[e]:a_.push(e)}var aj=E.ReactCurrentBatchConfig;function a$(e,t){if(e&&e.defaultProps)for(var r in t=er({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}var aD=n0(null),aB=null,aI=null,aO=null;function aN(){aO=aI=aB=null}function aV(e){var t=aD.current;n1(aD),e._currentValue=t}function aW(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function aU(e,t){aB=e,aO=aI=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(ik=!0),e.firstContext=null)}function aH(e){var t=e._currentValue;if(aO!==e){if(e={context:e,memoizedValue:t,next:null},null===aI){if(null===aB)throw Error(d(308));aI=e,aB.dependencies={lanes:0,firstContext:e}}else aI=aI.next=e}return t}var aq=null;function aX(e){null===aq?aq=[e]:aq.push(e)}function aY(e,t,r,n){var a=t.interleaved;return null===a?(r.next=r,aX(t)):(r.next=a.next,a.next=r),t.interleaved=r,aG(e,n)}function aG(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var aQ=!1;function aK(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aZ(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function aJ(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function a0(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!=(2&ls)){var a=n.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),n.pending=t,aG(e,r)}return null===(a=n.interleaved)?(t.next=t,aX(n)):(t.next=a.next,a.next=t),n.interleaved=t,aG(e,r)}function a1(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&r))){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,tw(e,r)}}function a2(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var a=null,o=null;if(null!==(r=r.firstBaseUpdate)){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===o?a=o=i:o=o.next=i,r=r.next}while(null!==r)null===o?a=o=t:o=o.next=t}else a=o=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function a5(e,t,r,n){var a=e.updateQueue;aQ=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&(l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s)}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((n&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=r,m.tag){case 1:if("function"==typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(f="function"==typeof(h=m.payload)?h.call(p,d,f):h))break e;d=er({},d,f);break e;case 2:aQ=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do i|=a.lane,a=a.next;while(a!==t)}else null===o&&(a.shared.lanes=0);lg|=i,e.lanes=i,e.memoizedState=d}}function a3(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(null!==a){if(n.callback=null,n=r,"function"!=typeof a)throw Error(d(191,a));a.call(n)}}}var a4=(new u.Component).refs;function a6(e,t,r,n){r=null==(r=r(n,t=e.memoizedState))?t:er({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var a8={isMounted:function(e){return!!(e=e._reactInternals)&&e3(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=lF(),a=lj(e),o=aJ(n,a);o.payload=t,null!=r&&(o.callback=r),null!==(t=a0(e,o,a))&&(l$(t,e,a,n),a1(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=lF(),a=lj(e),o=aJ(n,a);o.tag=1,o.payload=t,null!=r&&(o.callback=r),null!==(t=a0(e,o,a))&&(l$(t,e,a,n),a1(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=lF(),n=lj(e),a=aJ(r,n);a.tag=2,null!=t&&(a.callback=t),null!==(t=a0(e,a,n))&&(l$(t,e,n,r),a1(t,e,n))}};function a9(e,t,r,n,a,o,i){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,o,i):!t.prototype||!t.prototype.isPureReactComponent||!rQ(r,n)||!rQ(a,o)}function a7(e,t,r){var n=!1,a=n5,o=t.contextType;return"object"==typeof o&&null!==o?o=aH(o):(a=n9(t)?n6:n3.current,o=(n=null!=(n=t.contextTypes))?n8(e,a):n5),t=new t(r,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=a8,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function oe(e,t,r,n){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&a8.enqueueReplaceState(t,t.state,null)}function ot(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs=a4,aK(e);var o=t.contextType;"object"==typeof o&&null!==o?a.context=aH(o):(o=n9(t)?n6:n3.current,a.context=n8(e,o)),a.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(a6(e,t,o,r),a.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(t=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&a8.enqueueReplaceState(a,a.state,null),a5(e,r,a,n),a.state=e.memoizedState),"function"==typeof a.componentDidMount&&(e.flags|=4194308)}function or(e,t,r){if(null!==(e=r.ref)&&"function"!=typeof e&&"object"!=typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(d(309));var n=r.stateNode}if(!n)throw Error(d(147,e));var a=n,o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=a.refs;t===a4&&(t=a.refs={}),null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!=typeof e)throw Error(d(284));if(!r._owner)throw Error(d(290,e))}return e}function on(e,t){throw Error(d(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oa(e){return(0,e._init)(e._payload)}function oo(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=se(e,t)).index=0,e.sibling=null,e}function o(t,r,n){return(t.index=n,e)?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function i(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,r,n){return null===t||6!==t.tag?(t=sa(r,e.mode,n)).return=e:(t=a(t,r)).return=e,t}function s(e,t,r,n){var o=r.type;return o===z?c(e,t,r.props.children,n,r.key):(null!==t&&(t.elementType===o||"object"==typeof o&&null!==o&&o.$$typeof===I&&oa(o)===t.type)?(n=a(t,r.props)).ref=or(e,t,r):(n=st(r.type,r.key,r.props,null,e.mode,n)).ref=or(e,t,r),n.return=e,n)}function u(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?(t=so(r,e.mode,n)).return=e:(t=a(t,r.children||[])).return=e,t}function c(e,t,r,n,o){return null===t||7!==t.tag?(t=sr(r,e.mode,n,o)).return=e:(t=a(t,r)).return=e,t}function f(e,t,r){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=sa(""+t,e.mode,r)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case P:return(r=st(t.type,t.key,t.props,null,e.mode,r)).ref=or(e,null,t),r.return=e,r;case T:return(t=so(t,e.mode,r)).return=e,t;case I:return f(e,(0,t._init)(t._payload),r)}if(ev(t)||V(t))return(t=sr(t,e.mode,r,null)).return=e,t;on(e,t)}return null}function p(e,t,r,n){var a=null!==t?t.key:null;if("string"==typeof r&&""!==r||"number"==typeof r)return null!==a?null:l(e,t,""+r,n);if("object"==typeof r&&null!==r){switch(r.$$typeof){case P:return r.key===a?s(e,t,r,n):null;case T:return r.key===a?u(e,t,r,n):null;case I:return p(e,t,(a=r._init)(r._payload),n)}if(ev(r)||V(r))return null!==a?null:c(e,t,r,n,null);on(e,r)}return null}function h(e,t,r,n,a){if("string"==typeof n&&""!==n||"number"==typeof n)return l(t,e=e.get(r)||null,""+n,a);if("object"==typeof n&&null!==n){switch(n.$$typeof){case P:return s(t,e=e.get(null===n.key?r:n.key)||null,n,a);case T:return u(t,e=e.get(null===n.key?r:n.key)||null,n,a);case I:return h(e,t,r,(0,n._init)(n._payload),a)}if(ev(n)||V(n))return c(t,e=e.get(r)||null,n,a,null);on(t,n)}return null}return function l(s,u,c,m){if("object"==typeof c&&null!==c&&c.type===z&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case P:e:{for(var g=c.key,v=u;null!==v;){if(v.key===g){if((g=c.type)===z){if(7===v.tag){r(s,v.sibling),(u=a(v,c.props.children)).return=s,s=u;break e}}else if(v.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===I&&oa(g)===v.type){r(s,v.sibling),(u=a(v,c.props)).ref=or(s,v,c),u.return=s,s=u;break e}r(s,v);break}t(s,v),v=v.sibling}c.type===z?((u=sr(c.props.children,s.mode,m,c.key)).return=s,s=u):((m=st(c.type,c.key,c.props,null,s.mode,m)).ref=or(s,u,c),m.return=s,s=m)}return i(s);case T:e:{for(v=c.key;null!==u;){if(u.key===v){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){r(s,u.sibling),(u=a(u,c.children||[])).return=s,s=u;break e}r(s,u);break}t(s,u),u=u.sibling}(u=so(c,s.mode,m)).return=s,s=u}return i(s);case I:return l(s,u,(v=c._init)(c._payload),m)}if(ev(c))return function(a,i,l,s){for(var u=null,c=null,d=i,m=i=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(a,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),i=o(v,i,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===l.length)return r(a,d),aC&&ay(a,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(i=o(d,i,m),null===c?u=d:c.sibling=d,c=d);return aC&&ay(a,m),u}for(d=n(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=o(g,i,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(a,e)}),aC&&ay(a,m),u}(s,u,c,m);if(V(c))return function(a,i,l,s){var u=V(l);if("function"!=typeof u)throw Error(d(150));if(null==(l=u.call(l)))throw Error(d(151));for(var c=u=null,m=i,g=i=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(a,m,y.value,s);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(a,m),i=o(b,i,g),null===c?u=b:c.sibling=b,c=b,m=v}if(y.done)return r(a,m),aC&&ay(a,g),u;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=f(a,y.value,s))&&(i=o(y,i,g),null===c?u=y:c.sibling=y,c=y);return aC&&ay(a,g),u}for(m=n(a,m);!y.done;g++,y=l.next())null!==(y=h(m,a,g,y.value,s))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),i=o(y,i,g),null===c?u=y:c.sibling=y,c=y);return e&&m.forEach(function(e){return t(a,e)}),aC&&ay(a,g),u}(s,u,c,m);on(s,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(r(s,u.sibling),(u=a(u,c)).return=s):(r(s,u),(u=sa(c,s.mode,m)).return=s),i(s=u)):r(s,u)}}var oi=oo(!0),ol=oo(!1),os={},ou=n0(os),oc=n0(os),od=n0(os);function of(e){if(e===os)throw Error(d(174));return e}function op(e,t){switch(n2(od,t),n2(oc,e),n2(ou,os),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eC(null,"");break;default:t=eC(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}n1(ou),n2(ou,t)}function oh(){n1(ou),n1(oc),n1(od)}function om(e){of(od.current);var t=of(ou.current),r=eC(t,e.type);t!==r&&(n2(oc,e),n2(ou,r))}function og(e){oc.current===e&&(n1(ou),n1(oc))}var ov=n0(0);function oy(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ob=[];function ox(){for(var e=0;e<ob.length;e++)ob[e]._workInProgressVersionPrimary=null;ob.length=0}var ok=E.ReactCurrentDispatcher,ow=E.ReactCurrentBatchConfig,oS=0,oC=null,o_=null,oE=null,oP=!1,oT=!1,oz=0,oA=0;function oR(){throw Error(d(321))}function oM(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!rG(e[r],t[r]))return!1;return!0}function oL(e,t,r,n,a,o){if(oS=o,oC=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ok.current=null===e||null===e.memoizedState?il:is,e=r(n,a),oT){o=0;do{if(oT=!1,oz=0,25<=o)throw Error(d(301));o+=1,oE=o_=null,t.updateQueue=null,ok.current=iu,e=r(n,a)}while(oT)}if(ok.current=ii,t=null!==o_&&null!==o_.next,oS=0,oE=o_=oC=null,oP=!1,t)throw Error(d(300));return e}function oF(){var e=0!==oz;return oz=0,e}function oj(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===oE?oC.memoizedState=oE=e:oE=oE.next=e,oE}function o$(){if(null===o_){var e=oC.alternate;e=null!==e?e.memoizedState:null}else e=o_.next;var t=null===oE?oC.memoizedState:oE.next;if(null!==t)oE=t,o_=e;else{if(null===e)throw Error(d(310));e={memoizedState:(o_=e).memoizedState,baseState:o_.baseState,baseQueue:o_.baseQueue,queue:o_.queue,next:null},null===oE?oC.memoizedState=oE=e:oE=oE.next=e}return oE}function oD(e,t){return"function"==typeof t?t(e):t}function oB(e){var t=o$(),r=t.queue;if(null===r)throw Error(d(311));r.lastRenderedReducer=e;var n=o_,a=n.baseQueue,o=r.pending;if(null!==o){if(null!==a){var i=a.next;a.next=o.next,o.next=i}n.baseQueue=a=o,r.pending=null}if(null!==a){o=a.next,n=n.baseState;var l=i=null,s=null,u=o;do{var c=u.lane;if((oS&c)===c)null!==s&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===s?(l=s=f,i=n):s=s.next=f,oC.lanes|=c,lg|=c}u=u.next}while(null!==u&&u!==o)null===s?i=n:s.next=l,rG(n,t.memoizedState)||(ik=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=s,r.lastRenderedState=n}if(null!==(e=r.interleaved)){a=e;do o=a.lane,oC.lanes|=o,lg|=o,a=a.next;while(a!==e)}else null===a&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function oI(e){var t=o$(),r=t.queue;if(null===r)throw Error(d(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(null!==a){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a)rG(o,t.memoizedState)||(ik=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function oO(){}function oN(e,t){var r=oC,n=o$(),a=t(),o=!rG(n.memoizedState,a);if(o&&(n.memoizedState=a,ik=!0),n=n.queue,oJ(oU.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||null!==oE&&1&oE.memoizedState.tag){if(r.flags|=2048,oY(9,oW.bind(null,r,n,a,t),void 0,null),null===lu)throw Error(d(349));0!=(30&oS)||oV(r,t,a)}return a}function oV(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=oC.updateQueue)?(t={lastEffect:null,stores:null},oC.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function oW(e,t,r,n){t.value=r,t.getSnapshot=n,oH(t)&&oq(e)}function oU(e,t,r){return r(function(){oH(t)&&oq(e)})}function oH(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!rG(e,r)}catch(e){return!0}}function oq(e){var t=aG(e,1);null!==t&&l$(t,e,1,-1)}function oX(e){var t=oj();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oD,lastRenderedState:e},t.queue=e,e=e.dispatch=it.bind(null,oC,e),[t.memoizedState,e]}function oY(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=oC.updateQueue)?(t={lastEffect:null,stores:null},oC.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function oG(){return o$().memoizedState}function oQ(e,t,r,n){var a=oj();oC.flags|=e,a.memoizedState=oY(1|t,r,void 0,void 0===n?null:n)}function oK(e,t,r,n){var a=o$();n=void 0===n?null:n;var o=void 0;if(null!==o_){var i=o_.memoizedState;if(o=i.destroy,null!==n&&oM(n,i.deps)){a.memoizedState=oY(t,r,o,n);return}}oC.flags|=e,a.memoizedState=oY(1|t,r,o,n)}function oZ(e,t){return oQ(8390656,8,e,t)}function oJ(e,t){return oK(2048,8,e,t)}function o0(e,t){return oK(4,2,e,t)}function o1(e,t){return oK(4,4,e,t)}function o2(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function o5(e,t,r){return r=null!=r?r.concat([e]):null,oK(4,4,o2.bind(null,t,e),r)}function o3(){}function o4(e,t){var r=o$();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&oM(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function o6(e,t){var r=o$();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&oM(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function o8(e,t,r){return 0==(21&oS)?(e.baseState&&(e.baseState=!1,ik=!0),e.memoizedState=r):(rG(r,t)||(r=tb(),oC.lanes|=r,lg|=r,e.baseState=!0),t)}function o9(e,t){var r=tS;tS=0!==r&&4>r?r:4,e(!0);var n=ow.transition;ow.transition={};try{e(!1),t()}finally{tS=r,ow.transition=n}}function o7(){return o$().memoizedState}function ie(e,t,r){var n=lj(e);r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ir(e)?ia(t,r):null!==(r=aY(e,t,r,n))&&(l$(r,e,n,lF()),io(r,t,n))}function it(e,t,r){var n=lj(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ir(e))ia(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,rG(l,i)){var s=t.interleaved;null===s?(a.next=a,aX(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch(e){}finally{}null!==(r=aY(e,t,a,n))&&(l$(r,e,n,a=lF()),io(r,t,n))}}function ir(e){var t=e.alternate;return e===oC||null!==t&&t===oC}function ia(e,t){oT=oP=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function io(e,t,r){if(0!=(4194240&r)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,tw(e,r)}}var ii={readContext:aH,useCallback:oR,useContext:oR,useEffect:oR,useImperativeHandle:oR,useInsertionEffect:oR,useLayoutEffect:oR,useMemo:oR,useReducer:oR,useRef:oR,useState:oR,useDebugValue:oR,useDeferredValue:oR,useTransition:oR,useMutableSource:oR,useSyncExternalStore:oR,useId:oR,unstable_isNewReconciler:!1},il={readContext:aH,useCallback:function(e,t){return oj().memoizedState=[e,void 0===t?null:t],e},useContext:aH,useEffect:oZ,useImperativeHandle:function(e,t,r){return r=null!=r?r.concat([e]):null,oQ(4194308,4,o2.bind(null,t,e),r)},useLayoutEffect:function(e,t){return oQ(4194308,4,e,t)},useInsertionEffect:function(e,t){return oQ(4,2,e,t)},useMemo:function(e,t){var r=oj();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=oj();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ie.bind(null,oC,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},oj().memoizedState=e},useState:oX,useDebugValue:o3,useDeferredValue:function(e){return oj().memoizedState=e},useTransition:function(){var e=oX(!1),t=e[0];return e=o9.bind(null,e[1]),oj().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=oC,a=oj();if(aC){if(void 0===r)throw Error(d(407));r=r()}else{if(r=t(),null===lu)throw Error(d(349));0!=(30&oS)||oV(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,oZ(oU.bind(null,n,o,e),[e]),n.flags|=2048,oY(9,oW.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=oj(),t=lu.identifierPrefix;if(aC){var r=av,n=ag;t=":"+t+"R"+(r=(n&~(1<<32-td(n)-1)).toString(32)+r),0<(r=oz++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=oA++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},is={readContext:aH,useCallback:o4,useContext:aH,useEffect:oJ,useImperativeHandle:o5,useInsertionEffect:o0,useLayoutEffect:o1,useMemo:o6,useReducer:oB,useRef:oG,useState:function(){return oB(oD)},useDebugValue:o3,useDeferredValue:function(e){return o8(o$(),o_.memoizedState,e)},useTransition:function(){return[oB(oD)[0],o$().memoizedState]},useMutableSource:oO,useSyncExternalStore:oN,useId:o7,unstable_isNewReconciler:!1},iu={readContext:aH,useCallback:o4,useContext:aH,useEffect:oJ,useImperativeHandle:o5,useInsertionEffect:o0,useLayoutEffect:o1,useMemo:o6,useReducer:oI,useRef:oG,useState:function(){return oI(oD)},useDebugValue:o3,useDeferredValue:function(e){var t=o$();return null===o_?t.memoizedState=e:o8(t,o_.memoizedState,e)},useTransition:function(){return[oI(oD)[0],o$().memoizedState]},useMutableSource:oO,useSyncExternalStore:oN,useId:o7,unstable_isNewReconciler:!1};function ic(e,t){try{var r="",n=t;do r+=function(e){switch(e.tag){case 5:return en(e.type);case 16:return en("Lazy");case 13:return en("Suspense");case 19:return en("SuspenseList");case 0:case 2:case 15:return e=eo(e.type,!1);case 11:return e=eo(e.type.render,!1);case 1:return e=eo(e.type,!0);default:return""}}(n),n=n.return;while(n)var a=r}catch(e){a="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:a,digest:null}}function id(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function ip(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var ih="function"==typeof WeakMap?WeakMap:Map;function im(e,t,r){(r=aJ(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){lC||(lC=!0,l_=n),ip(e,t)},r}function ig(e,t,r){(r=aJ(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"==typeof n){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){ip(e,t)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(r.callback=function(){ip(e,t),"function"!=typeof n&&(null===lE?lE=new Set([this]):lE.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:null!==r?r:""})}),r}function iv(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new ih;var a=new Set;n.set(t,a)}else void 0===(a=n.get(t))&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=l5.bind(null,e,t,r),t.then(e,e))}function iy(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function ib(e,t,r,n,a){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=aJ(-1,1)).tag=2,a0(r,t,1))),r.lanes|=1):(e.flags|=65536,e.lanes=a),e}var ix=E.ReactCurrentOwner,ik=!1;function iw(e,t,r,n){t.child=null===e?ol(t,null,r,n):oi(t,e.child,r,n)}function iS(e,t,r,n,a){r=r.render;var o=t.ref;return(aU(t,a),n=oL(e,t,r,n,o,a),r=oF(),null===e||ik)?(aC&&r&&ax(t),t.flags|=1,iw(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,iV(e,t,a))}function iC(e,t,r,n,a){if(null===e){var o=r.type;return"function"!=typeof o||l7(o)||void 0!==o.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=st(r.type,null,n,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,i_(e,t,o,n,a))}if(o=e.child,0==(e.lanes&a)){var i=o.memoizedProps;if((r=null!==(r=r.compare)?r:rQ)(i,n)&&e.ref===t.ref)return iV(e,t,a)}return t.flags|=1,(e=se(o,n)).ref=t.ref,e.return=t,t.child=e}function i_(e,t,r,n,a){if(null!==e){var o=e.memoizedProps;if(rQ(o,n)&&e.ref===t.ref){if(ik=!1,t.pendingProps=n=o,0==(e.lanes&a))return t.lanes=e.lanes,iV(e,t,a);0!=(131072&e.flags)&&(ik=!0)}}return iT(e,t,r,n,a)}function iE(e,t,r){var n=t.pendingProps,a=n.children,o=null!==e?e.memoizedState:null;if("hidden"===n.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n2(lp,lf),lf|=r;else{if(0==(1073741824&r))return e=null!==o?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,n2(lp,lf),lf|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==o?o.baseLanes:r,n2(lp,lf),lf|=n}}else null!==o?(n=o.baseLanes|r,t.memoizedState=null):n=r,n2(lp,lf),lf|=n;return iw(e,t,a,r),t.child}function iP(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function iT(e,t,r,n,a){var o=n9(r)?n6:n3.current;return(o=n8(t,o),aU(t,a),r=oL(e,t,r,n,o,a),n=oF(),null===e||ik)?(aC&&n&&ax(t),t.flags|=1,iw(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,iV(e,t,a))}function iz(e,t,r,n,a){if(n9(r)){var o=!0;ar(t)}else o=!1;if(aU(t,a),null===t.stateNode)iN(e,t),a7(t,r,n),ot(t,r,n,a),n=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=r.contextType;u="object"==typeof u&&null!==u?aH(u):n8(t,u=n9(r)?n6:n3.current);var c=r.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof i.getSnapshotBeforeUpdate;d||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(l!==n||s!==u)&&oe(t,i,n,u),aQ=!1;var f=t.memoizedState;i.state=f,a5(t,n,i,a),s=t.memoizedState,l!==n||f!==s||n4.current||aQ?("function"==typeof c&&(a6(t,r,c,n),s=t.memoizedState),(l=aQ||a9(t,r,l,n,f,s,u))?(d||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||("function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"==typeof i.componentDidMount&&(t.flags|=4194308)):("function"==typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),i.props=n,i.state=s,i.context=u,n=l):("function"==typeof i.componentDidMount&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,aZ(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:a$(t.type,l),i.props=u,d=t.pendingProps,f=i.context,s="object"==typeof(s=r.contextType)&&null!==s?aH(s):n8(t,s=n9(r)?n6:n3.current);var p=r.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof i.getSnapshotBeforeUpdate)||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(l!==d||f!==s)&&oe(t,i,n,s),aQ=!1,f=t.memoizedState,i.state=f,a5(t,n,i,a);var h=t.memoizedState;l!==d||f!==h||n4.current||aQ?("function"==typeof p&&(a6(t,r,p,n),h=t.memoizedState),(u=aQ||a9(t,r,u,n,f,h,s)||!1)?(c||"function"!=typeof i.UNSAFE_componentWillUpdate&&"function"!=typeof i.componentWillUpdate||("function"==typeof i.componentWillUpdate&&i.componentWillUpdate(n,h,s),"function"==typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(n,h,s)),"function"==typeof i.componentDidUpdate&&(t.flags|=4),"function"==typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=h),i.props=n,i.state=h,i.context=s,n=u):("function"!=typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return iA(e,t,r,n,o,a)}function iA(e,t,r,n,a,o){iP(e,t);var i=0!=(128&t.flags);if(!n&&!i)return a&&an(t,r,!1),iV(e,t,o);n=t.stateNode,ix.current=t;var l=i&&"function"!=typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&i?(t.child=oi(t,e.child,null,o),t.child=oi(t,null,l,o)):iw(e,t,l,o),t.memoizedState=n.state,a&&an(t,r,!0),t.child}function iR(e){var t=e.stateNode;t.pendingContext?ae(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ae(e,t.context,!1),op(e,t.containerInfo)}function iM(e,t,r,n,a){return aL(),aF(a),t.flags|=256,iw(e,t,r,n),t.child}var iL={dehydrated:null,treeContext:null,retryLane:0};function iF(e){return{baseLanes:e,cachePool:null,transitions:null}}function ij(e,t,r){var n,a=t.pendingProps,o=ov.current,i=!1,l=0!=(128&t.flags);if((n=l)||(n=(null===e||null!==e.memoizedState)&&0!=(2&o)),n?(i=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(o|=1),n2(ov,1&o),null===e)return(az(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=a.children,e=a.fallback,i?(a=t.mode,i=t.child,l={mode:"hidden",children:l},0==(1&a)&&null!==i?(i.childLanes=0,i.pendingProps=l):i=sn(l,a,0,null),e=sr(e,a,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=iF(r),t.memoizedState=iL,e):i$(t,l));if(null!==(o=e.memoizedState)&&null!==(n=o.dehydrated))return function(e,t,r,n,a,o,i){if(r)return 256&t.flags?(t.flags&=-257,iD(e,t,i,n=id(Error(d(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=n.fallback,a=t.mode,n=sn({mode:"visible",children:n.children},a,0,null),o=sr(o,a,i,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,0!=(1&t.mode)&&oi(t,e.child,null,i),t.child.memoizedState=iF(i),t.memoizedState=iL,o);if(0==(1&t.mode))return iD(e,t,i,null);if("$!"===a.data){if(n=a.nextSibling&&a.nextSibling.dataset)var l=n.dgst;return n=l,iD(e,t,i,n=id(o=Error(d(419)),n,void 0))}if(l=0!=(i&e.childLanes),ik||l){if(null!==(n=lu)){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!=(a&(n.suspendedLanes|i))?0:a)&&a!==o.retryLane&&(o.retryLane=a,aG(e,a),l$(n,e,a,-1))}return lG(),iD(e,t,i,n=id(Error(d(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=l4.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,aS=nI(a.nextSibling),aw=t,aC=!0,a_=null,null!==e&&(ap[ah++]=ag,ap[ah++]=av,ap[ah++]=am,ag=e.id,av=e.overflow,am=t),t=i$(t,n.children),t.flags|=4096,t)}(e,t,l,a,n,o,r);if(i){i=a.fallback,l=t.mode,n=(o=e.child).sibling;var s={mode:"hidden",children:a.children};return 0==(1&l)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=s,t.deletions=null):(a=se(o,s)).subtreeFlags=14680064&o.subtreeFlags,null!==n?i=se(n,i):(i=sr(i,l,r,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,l=null===(l=e.child.memoizedState)?iF(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,t.memoizedState=iL,a}return e=(i=e.child).sibling,a=se(i,{mode:"visible",children:a.children}),0==(1&t.mode)&&(a.lanes=r),a.return=t,a.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function i$(e,t){return(t=sn({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function iD(e,t,r,n){return null!==n&&aF(n),oi(t,e.child,null,r),e=i$(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iB(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),aW(e.return,t,r)}function iI(e,t,r,n,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function iO(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(iw(e,t,n.children,r),0!=(2&(n=ov.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&iB(e,r,t);else if(19===e.tag)iB(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(n2(ov,n),0==(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(a=null,r=t.child;null!==r;)null!==(e=r.alternate)&&null===oy(e)&&(a=r),r=r.sibling;null===(r=a)?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),iI(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===oy(e)){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}iI(t,!0,r,null,o);break;case"together":iI(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function iN(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function iV(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),lg|=t.lanes,0==(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(d(153));if(null!==t.child){for(r=se(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=se(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function iW(e,t){if(!aC)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function iU(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;null!==a;)r|=a.lanes|a.childLanes,n|=14680064&a.subtreeFlags,n|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}a=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},o=function(){},i=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,of(ou.current);var o,i=null;switch(r){case"input":a=ed(e,a),n=ed(e,n),i=[];break;case"select":a=er({},a,{value:void 0}),n=er({},n,{value:void 0}),i=[];break;case"textarea":a=eb(e,a),n=eb(e,n),i=[];break;default:"function"!=typeof a.onClick&&"function"==typeof n.onClick&&(e.onclick=nz)}for(u in eF(r,n),r=null,a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u]){if("style"===u){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null))}for(u in n){var s=n[u];if(l=null!=a?a[u]:void 0,n.hasOwnProperty(u)&&s!==l&&(null!=s||null!=l)){if("style"===u){if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(r||(r={}),r[o]=s[o])}else r||(i||(i=[]),i.push(u,r)),r=s}else"dangerouslySetInnerHTML"===u?(s=s?s.__html:void 0,l=l?l.__html:void 0,null!=s&&l!==s&&(i=i||[]).push(u,s)):"children"===u?"string"!=typeof s&&"number"!=typeof s||(i=i||[]).push(u,""+s):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(p.hasOwnProperty(u)?(null!=s&&"onScroll"===u&&nm("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}},l=function(e,t,r,n){r!==n&&(t.flags|=4)};var iH=!1,iq=!1,iX="function"==typeof WeakSet?WeakSet:Set,iY=null;function iG(e,t){var r=e.ref;if(null!==r){if("function"==typeof r)try{r(null)}catch(r){l2(e,t,r)}else r.current=null}}function iQ(e,t,r){try{r()}catch(r){l2(e,t,r)}}var iK=!1;function iZ(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var a=n=n.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&iQ(t,r,o)}a=a.next}while(a!==n)}}function iJ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function i0(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"==typeof t?t(e):t.current=e}}function i1(e){return 5===e.tag||3===e.tag||4===e.tag}function i2(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||i1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var i5=null,i3=!1;function i4(e,t,r){for(r=r.child;null!==r;)i6(e,t,r),r=r.sibling}function i6(e,t,r){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(tu,r)}catch(e){}switch(r.tag){case 5:iq||iG(r,t);case 6:var n=i5,a=i3;i5=null,i4(e,t,r),i5=n,i3=a,null!==i5&&(i3?(e=i5,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):i5.removeChild(r.stateNode));break;case 18:null!==i5&&(i3?(e=i5,r=r.stateNode,8===e.nodeType?nB(e.parentNode,r):1===e.nodeType&&nB(e,r),tq(e)):nB(i5,r.stateNode));break;case 4:n=i5,a=i3,i5=r.stateNode.containerInfo,i3=!0,i4(e,t,r),i5=n,i3=a;break;case 0:case 11:case 14:case 15:if(!iq&&null!==(n=r.updateQueue)&&null!==(n=n.lastEffect)){a=n=n.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!=(2&o)?iQ(r,t,i):0!=(4&o)&&iQ(r,t,i)),a=a.next}while(a!==n)}i4(e,t,r);break;case 1:if(!iq&&(iG(r,t),"function"==typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(e){l2(r,t,e)}i4(e,t,r);break;case 21:default:i4(e,t,r);break;case 22:1&r.mode?(iq=(n=iq)||null!==r.memoizedState,i4(e,t,r),iq=n):i4(e,t,r)}}function i8(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new iX),t.forEach(function(t){var n=l6.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))})}}function i9(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var a=r[n];try{var o=t,i=o;e:for(;null!==i;){switch(i.tag){case 5:i5=i.stateNode,i3=!1;break e;case 3:case 4:i5=i.stateNode.containerInfo,i3=!0;break e}i=i.return}if(null===i5)throw Error(d(160));i6(e,o,a),i5=null,i3=!1;var l=a.alternate;null!==l&&(l.return=null),a.return=null}catch(e){l2(a,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)i7(t,e),t=t.sibling}function i7(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i9(t,e),le(e),4&n){try{iZ(3,e,e.return),iJ(3,e)}catch(t){l2(e,e.return,t)}try{iZ(5,e,e.return)}catch(t){l2(e,e.return,t)}}break;case 1:i9(t,e),le(e),512&n&&null!==r&&iG(r,r.return);break;case 5:if(i9(t,e),le(e),512&n&&null!==r&&iG(r,r.return),32&e.flags){var a=e.stateNode;try{eT(a,"")}catch(t){l2(e,e.return,t)}}if(4&n&&null!=(a=e.stateNode)){var o=e.memoizedProps,i=null!==r?r.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,null!==s)try{"input"===l&&"radio"===o.type&&null!=o.name&&ep(a,o),ej(l,i);var u=ej(l,o);for(i=0;i<s.length;i+=2){var c=s[i],f=s[i+1];"style"===c?eM(a,f):"dangerouslySetInnerHTML"===c?eP(a,f):"children"===c?eT(a,f):_(a,c,f,u)}switch(l){case"input":eh(a,o);break;case"textarea":ek(a,o);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ey(a,!!o.multiple,h,!1):!!o.multiple!==p&&(null!=o.defaultValue?ey(a,!!o.multiple,o.defaultValue,!0):ey(a,!!o.multiple,o.multiple?[]:"",!1))}a[nW]=o}catch(t){l2(e,e.return,t)}}break;case 6:if(i9(t,e),le(e),4&n){if(null===e.stateNode)throw Error(d(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){l2(e,e.return,t)}}break;case 3:if(i9(t,e),le(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{tq(t.containerInfo)}catch(t){l2(e,e.return,t)}break;case 4:default:i9(t,e),le(e);break;case 13:i9(t,e),le(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,o&&(null===a.alternate||null===a.alternate.memoizedState)&&(lk=tr())),4&n&&i8(e);break;case 22:if(c=null!==r&&null!==r.memoizedState,1&e.mode?(iq=(u=iq)||c,i9(t,e),iq=u):i9(t,e),le(e),8192&n){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(iY=e,c=e.child;null!==c;){for(f=iY=c;null!==iY;){switch(h=(p=iY).child,p.tag){case 0:case 11:case 14:case 15:iZ(4,p,p.return);break;case 1:iG(p,p.return);var m=p.stateNode;if("function"==typeof m.componentWillUnmount){n=p,r=p.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){l2(n,r,e)}}break;case 5:iG(p,p.return);break;case 22:if(null!==p.memoizedState){lr(f);continue}}null!==h?(h.return=p,iY=h):lr(f)}c=c.sibling}e:for(c=null,f=e;;){if(5===f.tag){if(null===c){c=f;try{a=f.stateNode,u?(o=a.style,"function"==typeof o.setProperty?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,i=null!=(s=f.memoizedProps.style)&&s.hasOwnProperty("display")?s.display:null,l.style.display=eR("display",i))}catch(t){l2(e,e.return,t)}}}else if(6===f.tag){if(null===c)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(t){l2(e,e.return,t)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:i9(t,e),le(e),4&n&&i8(e);case 21:}}function le(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(i1(r)){var n=r;break e}r=r.return}throw Error(d(160))}switch(n.tag){case 5:var a=n.stateNode;32&n.flags&&(eT(a,""),n.flags&=-33);var o=i2(e);!function e(t,r,n){var a=t.tag;if(5===a||6===a)t=t.stateNode,r?n.insertBefore(t,r):n.appendChild(t);else if(4!==a&&null!==(t=t.child))for(e(t,r,n),t=t.sibling;null!==t;)e(t,r,n),t=t.sibling}(e,o,a);break;case 3:case 4:var i=n.stateNode.containerInfo,l=i2(e);!function e(t,r,n){var a=t.tag;if(5===a||6===a)t=t.stateNode,r?8===n.nodeType?n.parentNode.insertBefore(t,r):n.insertBefore(t,r):(8===n.nodeType?(r=n.parentNode).insertBefore(t,n):(r=n).appendChild(t),null!=(n=n._reactRootContainer)||null!==r.onclick||(r.onclick=nz));else if(4!==a&&null!==(t=t.child))for(e(t,r,n),t=t.sibling;null!==t;)e(t,r,n),t=t.sibling}(e,l,i);break;default:throw Error(d(161))}}catch(t){l2(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function lt(e){for(;null!==iY;){var t=iY;if(0!=(8772&t.flags)){var r=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:iq||iJ(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!iq){if(null===r)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:a$(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;null!==o&&a3(t,o,n);break;case 3:var i=t.updateQueue;if(null!==i){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}a3(t,i,r)}break;case 5:var l=t.stateNode;if(null===r&&4&t.flags){r=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break;case"img":s.src&&(r.src=s.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var f=c.dehydrated;null!==f&&tq(f)}}}break;default:throw Error(d(163))}iq||512&t.flags&&i0(t)}catch(e){l2(t,t.return,e)}}if(t===e){iY=null;break}if(null!==(r=t.sibling)){r.return=t.return,iY=r;break}iY=t.return}}function lr(e){for(;null!==iY;){var t=iY;if(t===e){iY=null;break}var r=t.sibling;if(null!==r){r.return=t.return,iY=r;break}iY=t.return}}function ln(e){for(;null!==iY;){var t=iY;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{iJ(4,t)}catch(e){l2(t,r,e)}break;case 1:var n=t.stateNode;if("function"==typeof n.componentDidMount){var a=t.return;try{n.componentDidMount()}catch(e){l2(t,a,e)}}var o=t.return;try{i0(t)}catch(e){l2(t,o,e)}break;case 5:var i=t.return;try{i0(t)}catch(e){l2(t,i,e)}}}catch(e){l2(t,t.return,e)}if(t===e){iY=null;break}var l=t.sibling;if(null!==l){l.return=t.return,iY=l;break}iY=t.return}}var la=Math.ceil,lo=E.ReactCurrentDispatcher,li=E.ReactCurrentOwner,ll=E.ReactCurrentBatchConfig,ls=0,lu=null,lc=null,ld=0,lf=0,lp=n0(0),lh=0,lm=null,lg=0,lv=0,ly=0,lb=null,lx=null,lk=0,lw=1/0,lS=null,lC=!1,l_=null,lE=null,lP=!1,lT=null,lz=0,lA=0,lR=null,lM=-1,lL=0;function lF(){return 0!=(6&ls)?tr():-1!==lM?lM:lM=tr()}function lj(e){return 0==(1&e.mode)?1:0!=(2&ls)&&0!==ld?ld&-ld:null!==aj.transition?(0===lL&&(lL=tb()),lL):0!==(e=tS)?e:e=void 0===(e=window.event)?16:t0(e.type)}function l$(e,t,r,n){if(50<lA)throw lA=0,lR=null,Error(d(185));tk(e,r,n),(0==(2&ls)||e!==lu)&&(e===lu&&(0==(2&ls)&&(lv|=r),4===lh&&lN(e,ld)),lD(e,n),1===r&&0===ls&&0==(1&t.mode)&&(lw=tr()+500,ao&&as()))}function lD(e,t){var r,n,a,o=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-td(o),l=1<<i,s=a[i];-1===s?(0==(l&r)||0!=(l&n))&&(a[i]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var i=tv(e,e===lu?ld:0);if(0===i)null!==o&&e7(o),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(null!=o&&e7(o),1===t)0===e.tag?(a=lV.bind(null,e),ao=!0,al(a)):al(lV.bind(null,e)),n$(function(){0==(6&ls)&&as()}),o=null;else{switch(tC(i)){case 1:o=ta;break;case 4:o=to;break;case 16:default:o=ti;break;case 536870912:o=ts}o=e9(o,lB.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function lB(e,t){if(lM=-1,lL=0,0!=(6&ls))throw Error(d(327));var r=e.callbackNode;if(l0()&&e.callbackNode!==r)return null;var n=tv(e,e===lu?ld:0);if(0===n)return null;if(0!=(30&n)||0!=(n&e.expiredLanes)||t)t=lQ(e,n);else{t=n;var a=ls;ls|=2;var o=lY();for((lu!==e||ld!==t)&&(lS=null,lw=tr()+500,lq(e,t));;)try{(function(){for(;null!==lc&&!te();)lK(lc)})();break}catch(t){lX(e,t)}aN(),lo.current=o,ls=a,null!==lc?t=0:(lu=null,ld=0,t=lh)}if(0!==t){if(2===t&&0!==(a=ty(e))&&(n=a,t=lI(e,a)),1===t)throw r=lm,lq(e,0),lN(e,n),lD(e,tr()),r;if(6===t)lN(e,n);else{if(a=e.current.alternate,0==(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!rG(o(),a))return!1}catch(e){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=lQ(e,n))&&0!==(o=ty(e))&&(n=o,t=lI(e,o)),1===t))throw r=lm,lq(e,0),lN(e,n),lD(e,tr()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(d(345));case 2:case 5:lJ(e,lx,lS);break;case 3:if(lN(e,n),(130023424&n)===n&&10<(t=lk+500-tr())){if(0!==tv(e,0))break;if(((a=e.suspendedLanes)&n)!==n){lF(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=nL(lJ.bind(null,e,lx,lS),t);break}lJ(e,lx,lS);break;case 4:if(lN(e,n),(4194240&n)===n)break;for(a=-1,t=e.eventTimes;0<n;){var i=31-td(n);o=1<<i,(i=t[i])>a&&(a=i),n&=~o}if(n=a,10<(n=(120>(n=tr()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*la(n/1960))-n)){e.timeoutHandle=nL(lJ.bind(null,e,lx,lS),n);break}lJ(e,lx,lS);break;default:throw Error(d(329))}}}return lD(e,tr()),e.callbackNode===r?lB.bind(null,e):null}function lI(e,t){var r=lb;return e.current.memoizedState.isDehydrated&&(lq(e,t).flags|=256),2!==(e=lQ(e,t))&&(t=lx,lx=r,null!==t&&lO(t)),e}function lO(e){null===lx?lx=e:lx.push.apply(lx,e)}function lN(e,t){for(t&=~ly,t&=~lv,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-td(t),n=1<<r;e[r]=-1,t&=~n}}function lV(e){if(0!=(6&ls))throw Error(d(327));l0();var t=tv(e,0);if(0==(1&t))return lD(e,tr()),null;var r=lQ(e,t);if(0!==e.tag&&2===r){var n=ty(e);0!==n&&(t=n,r=lI(e,n))}if(1===r)throw r=lm,lq(e,0),lN(e,t),lD(e,tr()),r;if(6===r)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lJ(e,lx,lS),lD(e,tr()),null}function lW(e,t){var r=ls;ls|=1;try{return e(t)}finally{0===(ls=r)&&(lw=tr()+500,ao&&as())}}function lU(e){null!==lT&&0===lT.tag&&0==(6&ls)&&l0();var t=ls;ls|=1;var r=ll.transition,n=tS;try{if(ll.transition=null,tS=1,e)return e()}finally{tS=n,ll.transition=r,0==(6&(ls=t))&&as()}}function lH(){lf=lp.current,n1(lp)}function lq(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,nF(r)),null!==lc)for(r=lc.return;null!==r;){var n=r;switch(ak(n),n.tag){case 1:null!=(n=n.type.childContextTypes)&&n7();break;case 3:oh(),n1(n4),n1(n3),ox();break;case 5:og(n);break;case 4:oh();break;case 13:case 19:n1(ov);break;case 10:aV(n.type._context);break;case 22:case 23:lH()}r=r.return}if(lu=e,lc=e=se(e.current,null),ld=lf=t,lh=0,lm=null,ly=lv=lg=0,lx=lb=null,null!==aq){for(t=0;t<aq.length;t++)if(null!==(n=(r=aq[t]).interleaved)){r.interleaved=null;var a=n.next,o=r.pending;if(null!==o){var i=o.next;o.next=a,n.next=i}r.pending=n}aq=null}return e}function lX(e,t){for(;;){var r=lc;try{if(aN(),ok.current=ii,oP){for(var n=oC.memoizedState;null!==n;){var a=n.queue;null!==a&&(a.pending=null),n=n.next}oP=!1}if(oS=0,oE=o_=oC=null,oT=!1,oz=0,li.current=null,null===r||null===r.return){lh=1,lm=t,lc=null;break}e:{var o=e,i=r.return,l=r,s=t;if(t=ld,l.flags|=32768,null!==s&&"object"==typeof s&&"function"==typeof s.then){var u=s,c=l,f=c.tag;if(0==(1&c.mode)&&(0===f||11===f||15===f)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=iy(i);if(null!==h){h.flags&=-257,ib(h,i,l,o,t),1&h.mode&&iv(o,u,t),t=h,s=u;var m=t.updateQueue;if(null===m){var g=new Set;g.add(s),t.updateQueue=g}else m.add(s);break e}if(0==(1&t)){iv(o,u,t),lG();break e}s=Error(d(426))}else if(aC&&1&l.mode){var v=iy(i);if(null!==v){0==(65536&v.flags)&&(v.flags|=256),ib(v,i,l,o,t),aF(ic(s,l));break e}}o=s=ic(s,l),4!==lh&&(lh=2),null===lb?lb=[o]:lb.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=im(o,s,t);a2(o,y);break e;case 1:l=s;var b=o.type,x=o.stateNode;if(0==(128&o.flags)&&("function"==typeof b.getDerivedStateFromError||null!==x&&"function"==typeof x.componentDidCatch&&(null===lE||!lE.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=ig(o,l,t);a2(o,k);break e}}o=o.return}while(null!==o)}lZ(r)}catch(e){t=e,lc===r&&null!==r&&(lc=r=r.return);continue}break}}function lY(){var e=lo.current;return lo.current=ii,null===e?ii:e}function lG(){(0===lh||3===lh||2===lh)&&(lh=4),null===lu||0==(268435455&lg)&&0==(268435455&lv)||lN(lu,ld)}function lQ(e,t){var r=ls;ls|=2;var n=lY();for((lu!==e||ld!==t)&&(lS=null,lq(e,t));;)try{(function(){for(;null!==lc;)lK(lc)})();break}catch(t){lX(e,t)}if(aN(),ls=r,lo.current=n,null!==lc)throw Error(d(261));return lu=null,ld=0,lh}function lK(e){var t=s(e.alternate,e,lf);e.memoizedProps=e.pendingProps,null===t?lZ(e):lc=t,li.current=null}function lZ(e){var t=e;do{var r=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(r=function(e,t,r){var n=t.pendingProps;switch(ak(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return iU(t),null;case 1:case 17:return n9(t.type)&&n7(),iU(t),null;case 3:return n=t.stateNode,oh(),n1(n4),n1(n3),ox(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(null===e||null===e.child)&&(aR(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==a_&&(lO(a_),a_=null))),o(e,t),iU(t),null;case 5:og(t);var s=of(od.current);if(r=t.type,null!==e&&null!=t.stateNode)i(e,t,r,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(null===t.stateNode)throw Error(d(166));return iU(t),null}if(e=of(ou.current),aR(t)){n=t.stateNode,r=t.type;var u=t.memoizedProps;switch(n[nV]=t,n[nW]=u,e=0!=(1&t.mode),r){case"dialog":nm("cancel",n),nm("close",n);break;case"iframe":case"object":case"embed":nm("load",n);break;case"video":case"audio":for(s=0;s<nd.length;s++)nm(nd[s],n);break;case"source":nm("error",n);break;case"img":case"image":case"link":nm("error",n),nm("load",n);break;case"details":nm("toggle",n);break;case"input":ef(n,u),nm("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!u.multiple},nm("invalid",n);break;case"textarea":ex(n,u),nm("invalid",n)}for(var c in eF(r,u),s=null,u)if(u.hasOwnProperty(c)){var f=u[c];"children"===c?"string"==typeof f?n.textContent!==f&&(!0!==u.suppressHydrationWarning&&nT(n.textContent,f,e),s=["children",f]):"number"==typeof f&&n.textContent!==""+f&&(!0!==u.suppressHydrationWarning&&nT(n.textContent,f,e),s=["children",""+f]):p.hasOwnProperty(c)&&null!=f&&"onScroll"===c&&nm("scroll",n)}switch(r){case"input":es(n),em(n,u,!0);break;case"textarea":es(n),ew(n);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(n.onclick=nz)}n=s,t.updateQueue=n,null!==n&&(t.flags|=4)}else{c=9===s.nodeType?s:s.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=eS(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof n.is?e=c.createElement(r,{is:n.is}):(e=c.createElement(r),"select"===r&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,r),e[nV]=t,e[nW]=n,a(e,t,!1,!1),t.stateNode=e;e:{switch(c=ej(r,n),r){case"dialog":nm("cancel",e),nm("close",e),s=n;break;case"iframe":case"object":case"embed":nm("load",e),s=n;break;case"video":case"audio":for(s=0;s<nd.length;s++)nm(nd[s],e);s=n;break;case"source":nm("error",e),s=n;break;case"img":case"image":case"link":nm("error",e),nm("load",e),s=n;break;case"details":nm("toggle",e),s=n;break;case"input":ef(e,n),s=ed(e,n),nm("invalid",e);break;case"option":default:s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=er({},n,{value:void 0}),nm("invalid",e);break;case"textarea":ex(e,n),s=eb(e,n),nm("invalid",e)}for(u in eF(r,s),f=s)if(f.hasOwnProperty(u)){var h=f[u];"style"===u?eM(e,h):"dangerouslySetInnerHTML"===u?null!=(h=h?h.__html:void 0)&&eP(e,h):"children"===u?"string"==typeof h?("textarea"!==r||""!==h)&&eT(e,h):"number"==typeof h&&eT(e,""+h):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?null!=h&&"onScroll"===u&&nm("scroll",e):null!=h&&_(e,u,h,c))}switch(r){case"input":es(e),em(e,n,!1);break;case"textarea":es(e),ew(e);break;case"option":null!=n.value&&e.setAttribute("value",""+ei(n.value));break;case"select":e.multiple=!!n.multiple,null!=(u=n.value)?ey(e,!!n.multiple,u,!1):null!=n.defaultValue&&ey(e,!!n.multiple,n.defaultValue,!0);break;default:"function"==typeof s.onClick&&(e.onclick=nz)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return iU(t),null;case 6:if(e&&null!=t.stateNode)l(e,t,e.memoizedProps,n);else{if("string"!=typeof n&&null===t.stateNode)throw Error(d(166));if(r=of(od.current),of(ou.current),aR(t)){if(n=t.stateNode,r=t.memoizedProps,n[nV]=t,(u=n.nodeValue!==r)&&null!==(e=aw))switch(e.tag){case 3:nT(n.nodeValue,r,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&nT(n.nodeValue,r,0!=(1&e.mode))}u&&(t.flags|=4)}else(n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[nV]=t,t.stateNode=n}return iU(t),null;case 13:if(n1(ov),n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aC&&null!==aS&&0!=(1&t.mode)&&0==(128&t.flags))aM(),aL(),t.flags|=98560,u=!1;else if(u=aR(t),null!==n&&null!==n.dehydrated){if(null===e){if(!u)throw Error(d(318));if(!(u=null!==(u=t.memoizedState)?u.dehydrated:null))throw Error(d(317));u[nV]=t}else aL(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;iU(t),u=!1}else null!==a_&&(lO(a_),a_=null),u=!0;if(!u)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=r,t;return(n=null!==n)!=(null!==e&&null!==e.memoizedState)&&n&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ov.current)?0===lh&&(lh=3):lG())),null!==t.updateQueue&&(t.flags|=4),iU(t),null;case 4:return oh(),o(e,t),null===e&&ny(t.stateNode.containerInfo),iU(t),null;case 10:return aV(t.type._context),iU(t),null;case 19:if(n1(ov),null===(u=t.memoizedState))return iU(t),null;if(n=0!=(128&t.flags),null===(c=u.rendering)){if(n)iW(u,!1);else{if(0!==lh||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=oy(e))){for(t.flags|=128,iW(u,!1),null!==(n=c.updateQueue)&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;null!==r;)u=r,e=n,u.flags&=14680066,null===(c=u.alternate)?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,e=c.dependencies,u.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return n2(ov,1&ov.current|2),t.child}e=e.sibling}null!==u.tail&&tr()>lw&&(t.flags|=128,n=!0,iW(u,!1),t.lanes=4194304)}}else{if(!n){if(null!==(e=oy(c))){if(t.flags|=128,n=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),iW(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!aC)return iU(t),null}else 2*tr()-u.renderingStartTime>lw&&1073741824!==r&&(t.flags|=128,n=!0,iW(u,!1),t.lanes=4194304)}u.isBackwards?(c.sibling=t.child,t.child=c):(null!==(r=u.last)?r.sibling=c:t.child=c,u.last=c)}if(null!==u.tail)return t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=tr(),t.sibling=null,r=ov.current,n2(ov,n?1&r|2:1&r),t;return iU(t),null;case 22:case 23:return lH(),n=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==n&&(t.flags|=8192),n&&0!=(1&t.mode)?0!=(1073741824&lf)&&(iU(t),6&t.subtreeFlags&&(t.flags|=8192)):iU(t),null;case 24:case 25:return null}throw Error(d(156,t.tag))}(r,t,lf))){lc=r;return}}else{if(null!==(r=function(e,t){switch(ak(t),t.tag){case 1:return n9(t.type)&&n7(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return oh(),n1(n4),n1(n3),ox(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return og(t),null;case 13:if(n1(ov),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(d(340));aL()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return n1(ov),null;case 4:return oh(),null;case 10:return aV(t.type._context),null;case 22:case 23:return lH(),null;default:return null}}(r,t))){r.flags&=32767,lc=r;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lh=6,lc=null;return}}if(null!==(t=t.sibling)){lc=t;return}lc=t=e}while(null!==t)0===lh&&(lh=5)}function lJ(e,t,r){var n=tS,a=ll.transition;try{ll.transition=null,tS=1,function(e,t,r,n){do l0();while(null!==lT)if(0!=(6&ls))throw Error(d(327));r=e.finishedWork;var a=e.finishedLanes;if(null!==r){if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-td(r),o=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~o}}(e,o),e===lu&&(lc=lu=null,ld=0),0==(2064&r.subtreeFlags)&&0==(2064&r.flags)||lP||(lP=!0,i=ti,l=function(){return l0(),null},e9(i,l)),o=0!=(15990&r.flags),0!=(15990&r.subtreeFlags)||o){o=ll.transition,ll.transition=null;var i,l,s,u,c,f=tS;tS=1;var p=ls;ls|=4,li.current=null,function(e,t){if(nA=tY,r0(e=rJ())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var a,o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch(e){r=null;break e}var l=0,s=-1,u=-1,c=0,f=0,p=e,h=null;t:for(;;){for(;p!==r||0!==o&&3!==p.nodeType||(s=l+o),p!==i||0!==n&&3!==p.nodeType||(u=l+n),3===p.nodeType&&(l+=p.nodeValue.length),null!==(a=p.firstChild);)h=p,p=a;for(;;){if(p===e)break t;if(h===r&&++c===o&&(s=l),h===i&&++f===n&&(u=l),null!==(a=p.nextSibling))break;h=(p=h).parentNode}p=a}r=-1===s||-1===u?null:{start:s,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(nR={focusedElem:e,selectionRange:r},tY=!1,iY=t;null!==iY;)if(e=(t=iY).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,iY=e;else for(;null!==iY;){t=iY;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:a$(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(d(163))}}catch(e){l2(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,iY=e;break}iY=t.return}m=iK,iK=!1}(e,r),i7(r,e),function(e){var t=rJ(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&function e(t,r){return!!t&&!!r&&(t===r||(!t||3!==t.nodeType)&&(r&&3===r.nodeType?e(t,r.parentNode):"contains"in t?t.contains(r):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(r))))}(r.ownerDocument.documentElement,r)){if(null!==n&&r0(r)){if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(n.start,a);n=void 0===n.end?o:Math.min(n.end,a),!e.extend&&o>n&&(a=n,n=o,o=a),a=rZ(r,o);var i=rZ(r,n);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(nR),tY=!!nA,nR=nA=null,e.current=r,s=r,u=e,c=a,iY=s,function e(t,r,n){for(var a=0!=(1&t.mode);null!==iY;){var o=iY,i=o.child;if(22===o.tag&&a){var l=null!==o.memoizedState||iH;if(!l){var s=o.alternate,u=null!==s&&null!==s.memoizedState||iq;s=iH;var c=iq;if(iH=l,(iq=u)&&!c)for(iY=o;null!==iY;)u=(l=iY).child,22===l.tag&&null!==l.memoizedState?ln(o):null!==u?(u.return=l,iY=u):ln(o);for(;null!==i;)iY=i,e(i,r,n),i=i.sibling;iY=o,iH=s,iq=c}lt(t,r,n)}else 0!=(8772&o.subtreeFlags)&&null!==i?(i.return=o,iY=i):lt(t,r,n)}}(s,u,c),tt(),ls=p,tS=f,ll.transition=o}else e.current=r;if(lP&&(lP=!1,lT=e,lz=a),0===(o=e.pendingLanes)&&(lE=null),function(e){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(tu,e,void 0,128==(128&e.current.flags))}catch(e){}}(r.stateNode,n),lD(e,tr()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)n((a=t[r]).value,{componentStack:a.stack,digest:a.digest});if(lC)throw lC=!1,e=l_,l_=null,e;0!=(1&lz)&&0!==e.tag&&l0(),0!=(1&(o=e.pendingLanes))?e===lR?lA++:(lA=0,lR=e):lA=0,as()}}(e,t,r,n)}finally{ll.transition=a,tS=n}return null}function l0(){if(null!==lT){var e=tC(lz),t=ll.transition,r=tS;try{if(ll.transition=null,tS=16>e?16:e,null===lT)var n=!1;else{if(e=lT,lT=null,lz=0,0!=(6&ls))throw Error(d(331));var a=ls;for(ls|=4,iY=e.current;null!==iY;){var o=iY,i=o.child;if(0!=(16&iY.flags)){var l=o.deletions;if(null!==l){for(var s=0;s<l.length;s++){var u=l[s];for(iY=u;null!==iY;){var c=iY;switch(c.tag){case 0:case 11:case 15:iZ(8,c,o)}var f=c.child;if(null!==f)f.return=c,iY=f;else for(;null!==iY;){var p=(c=iY).sibling,h=c.return;if(function e(t){var r=t.alternate;null!==r&&(t.alternate=null,e(r)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(r=t.stateNode)&&(delete r[nV],delete r[nW],delete r[nH],delete r[nq],delete r[nX]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===u){iY=null;break}if(null!==p){p.return=h,iY=p;break}iY=h}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}iY=o}}if(0!=(2064&o.subtreeFlags)&&null!==i)i.return=o,iY=i;else for(;null!==iY;){if(o=iY,0!=(2048&o.flags))switch(o.tag){case 0:case 11:case 15:iZ(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,iY=y;break}iY=o.return}}var b=e.current;for(iY=b;null!==iY;){var x=(i=iY).child;if(0!=(2064&i.subtreeFlags)&&null!==x)x.return=i,iY=x;else for(i=b;null!==iY;){if(l=iY,0!=(2048&l.flags))try{switch(l.tag){case 0:case 11:case 15:iJ(9,l)}}catch(e){l2(l,l.return,e)}if(l===i){iY=null;break}var k=l.sibling;if(null!==k){k.return=l.return,iY=k;break}iY=l.return}}if(ls=a,as(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(tu,e)}catch(e){}n=!0}return n}finally{tS=r,ll.transition=t}}return!1}function l1(e,t,r){t=im(e,t=ic(r,t),1),e=a0(e,t,1),t=lF(),null!==e&&(tk(e,1,t),lD(e,t))}function l2(e,t,r){if(3===e.tag)l1(e,e,r);else for(;null!==t;){if(3===t.tag){l1(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof n.componentDidCatch&&(null===lE||!lE.has(n))){e=ig(t,e=ic(r,e),1),t=a0(t,e,1),e=lF(),null!==t&&(tk(t,1,e),lD(t,e));break}}t=t.return}}function l5(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=lF(),e.pingedLanes|=e.suspendedLanes&r,lu===e&&(ld&r)===r&&(4===lh||3===lh&&(130023424&ld)===ld&&500>tr()-lk?lq(e,0):ly|=r),lD(e,t)}function l3(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tm,0==(130023424&(tm<<=1))&&(tm=4194304)));var r=lF();null!==(e=aG(e,t))&&(tk(e,t,r),lD(e,r))}function l4(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),l3(e,r)}function l6(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;null!==a&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(d(314))}null!==n&&n.delete(t),l3(e,r)}function l8(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function l9(e,t,r,n){return new l8(e,t,r,n)}function l7(e){return!(!(e=e.prototype)||!e.isReactComponent)}function se(e,t){var r=e.alternate;return null===r?((r=l9(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function st(e,t,r,n,a,o){var i=2;if(n=e,"function"==typeof e)l7(e)&&(i=1);else if("string"==typeof e)i=5;else e:switch(e){case z:return sr(r.children,a,o,t);case A:i=8,a|=8;break;case R:return(e=l9(12,r,t,2|a)).elementType=R,e.lanes=o,e;case $:return(e=l9(13,r,t,a)).elementType=$,e.lanes=o,e;case D:return(e=l9(19,r,t,a)).elementType=D,e.lanes=o,e;case O:return sn(r,a,o,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case M:i=10;break e;case L:i=9;break e;case F:i=11;break e;case B:i=14;break e;case I:i=16,n=null;break e}throw Error(d(130,null==e?e:typeof e,""))}return(t=l9(i,r,t,a)).elementType=e,t.type=n,t.lanes=o,t}function sr(e,t,r,n){return(e=l9(7,e,n,t)).lanes=r,e}function sn(e,t,r,n){return(e=l9(22,e,n,t)).elementType=O,e.lanes=r,e.stateNode={isHidden:!1},e}function sa(e,t,r){return(e=l9(6,e,null,t)).lanes=r,e}function so(e,t,r){return(t=l9(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function si(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tx(0),this.expirationTimes=tx(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tx(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function sl(e,t,r,n,a,o,i,l,s){return e=new si(e,t,r,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=l9(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},aK(o),e}function ss(e){if(!e)return n5;e=e._reactInternals;e:{if(e3(e)!==e||1!==e.tag)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(n9(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(d(171))}if(1===e.tag){var r=e.type;if(n9(r))return at(e,r,t)}return t}function su(e,t,r,n,a,o,i,l,s){return(e=sl(r,n,!0,e,a,o,i,l,s)).context=ss(null),r=e.current,(o=aJ(n=lF(),a=lj(r))).callback=null!=t?t:null,a0(r,o,a),e.current.lanes=a,tk(e,a,n),lD(e,n),e}function sc(e,t,r,n){var a=t.current,o=lF(),i=lj(a);return r=ss(r),null===t.context?t.context=r:t.pendingContext=r,(t=aJ(o,i)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=a0(a,t,i))&&(l$(e,a,i,o),a1(e,a,i)),i}function sd(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function sf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function sp(e,t){sf(e,t),(e=e.alternate)&&sf(e,t)}s=function(e,t,r){if(null!==e){if(e.memoizedProps!==t.pendingProps||n4.current)ik=!0;else{if(0==(e.lanes&r)&&0==(128&t.flags))return ik=!1,function(e,t,r){switch(t.tag){case 3:iR(t),aL();break;case 5:om(t);break;case 1:n9(t.type)&&ar(t);break;case 4:op(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;n2(aD,n._currentValue),n._currentValue=a;break;case 13:if(null!==(n=t.memoizedState)){if(null!==n.dehydrated)return n2(ov,1&ov.current),t.flags|=128,null;if(0!=(r&t.child.childLanes))return ij(e,t,r);return n2(ov,1&ov.current),null!==(e=iV(e,t,r))?e.sibling:null}n2(ov,1&ov.current);break;case 19:if(n=0!=(r&t.childLanes),0!=(128&e.flags)){if(n)return iO(e,t,r);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),n2(ov,ov.current),!n)return null;break;case 22:case 23:return t.lanes=0,iE(e,t,r)}return iV(e,t,r)}(e,t,r);ik=0!=(131072&e.flags)}}else ik=!1,aC&&0!=(1048576&t.flags)&&ab(t,af,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;iN(e,t),e=t.pendingProps;var a=n8(t,n3.current);aU(t,r),a=oL(null,t,n,e,a,r);var o=oF();return t.flags|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,n9(n)?(o=!0,ar(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,aK(t),a.updater=a8,t.stateNode=a,a._reactInternals=t,ot(t,n,e,r),t=iA(null,t,n,!0,o,r)):(t.tag=0,aC&&o&&ax(t),iw(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(iN(e,t),e=t.pendingProps,n=(a=n._init)(n._payload),t.type=n,a=t.tag=function(e){if("function"==typeof e)return l7(e)?1:0;if(null!=e){if((e=e.$$typeof)===F)return 11;if(e===B)return 14}return 2}(n),e=a$(n,e),a){case 0:t=iT(null,t,n,e,r);break e;case 1:t=iz(null,t,n,e,r);break e;case 11:t=iS(null,t,n,e,r);break e;case 14:t=iC(null,t,n,a$(n.type,e),r);break e}throw Error(d(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:a$(n,a),iT(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:a$(n,a),iz(e,t,n,a,r);case 3:e:{if(iR(t),null===e)throw Error(d(387));n=t.pendingProps,a=(o=t.memoizedState).element,aZ(e,t),a5(t,n,null,r);var i=t.memoizedState;if(n=i.element,o.isDehydrated){if(o={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){a=ic(Error(d(423)),t),t=iM(e,t,n,r,a);break e}if(n!==a){a=ic(Error(d(424)),t),t=iM(e,t,n,r,a);break e}for(aS=nI(t.stateNode.containerInfo.firstChild),aw=t,aC=!0,a_=null,r=ol(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(aL(),n===a){t=iV(e,t,r);break e}iw(e,t,n,r)}t=t.child}return t;case 5:return om(t),null===e&&az(t),n=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,i=a.children,nM(n,a)?i=null:null!==o&&nM(n,o)&&(t.flags|=32),iP(e,t),iw(e,t,i,r),t.child;case 6:return null===e&&az(t),null;case 13:return ij(e,t,r);case 4:return op(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=oi(t,null,n,r):iw(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:a$(n,a),iS(e,t,n,a,r);case 7:return iw(e,t,t.pendingProps,r),t.child;case 8:case 12:return iw(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,n2(aD,n._currentValue),n._currentValue=i,null!==o){if(rG(o.value,i)){if(o.children===a.children&&!n4.current){t=iV(e,t,r);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){i=o.child;for(var s=l.firstContext;null!==s;){if(s.context===n){if(1===o.tag){(s=aJ(-1,r&-r)).tag=2;var u=o.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=r,null!==(s=o.alternate)&&(s.lanes|=r),aW(o.return,r,t),l.lanes|=r;break}s=s.next}}else if(10===o.tag)i=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(i=o.return))throw Error(d(341));i.lanes|=r,null!==(l=i.alternate)&&(l.lanes|=r),aW(i,r,t),i=o.sibling}else i=o.child;if(null!==i)i.return=o;else for(i=o;null!==i;){if(i===t){i=null;break}if(null!==(o=i.sibling)){o.return=i.return,i=o;break}i=i.return}o=i}}iw(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,aU(t,r),n=n(a=aH(a)),t.flags|=1,iw(e,t,n,r),t.child;case 14:return a=a$(n=t.type,t.pendingProps),a=a$(n.type,a),iC(e,t,n,a,r);case 15:return i_(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:a$(n,a),iN(e,t),t.tag=1,n9(n)?(e=!0,ar(t)):e=!1,aU(t,r),a7(t,n,a),ot(t,n,a,r),iA(null,t,n,!0,e,r);case 19:return iO(e,t,r);case 22:return iE(e,t,r)}throw Error(d(156,t.tag))};var sh="function"==typeof reportError?reportError:function(e){console.error(e)};function sm(e){this._internalRoot=e}function sg(e){this._internalRoot=e}function sv(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function sy(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function sb(){}function sx(e,t,r,n,a){var o=r._reactRootContainer;if(o){var i=o;if("function"==typeof a){var l=a;a=function(){var e=sd(i);l.call(e)}}sc(t,i,e,a)}else i=function(e,t,r,n,a){if(a){if("function"==typeof n){var o=n;n=function(){var e=sd(i);o.call(e)}}var i=su(t,n,e,0,null,!1,!1,"",sb);return e._reactRootContainer=i,e[nU]=i.current,ny(8===e.nodeType?e.parentNode:e),lU(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"==typeof n){var l=n;n=function(){var e=sd(s);l.call(e)}}var s=sl(e,0,!1,null,null,!1,!1,"",sb);return e._reactRootContainer=s,e[nU]=s.current,ny(8===e.nodeType?e.parentNode:e),lU(function(){sc(t,s,r,n)}),s}(r,t,e,a,n);return sd(i)}sg.prototype.render=sm.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(d(409));sc(e,t,null,null)},sg.prototype.unmount=sm.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;lU(function(){sc(null,e,null,null)}),t[nU]=null}},sg.prototype.unstable_scheduleHydration=function(e){if(e){var t=tT();e={blockedOn:null,target:e,priority:t};for(var r=0;r<tD.length&&0!==t&&t<tD[r].priority;r++);tD.splice(r,0,e),0===r&&tN(e)}},t_=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=tg(t.pendingLanes);0!==r&&(tw(t,1|r),lD(t,tr()),0==(6&ls)&&(lw=tr()+500,as()))}break;case 13:lU(function(){var t=aG(e,1);null!==t&&l$(t,e,1,lF())}),sp(e,1)}},tE=function(e){if(13===e.tag){var t=aG(e,134217728);null!==t&&l$(t,e,134217728,lF()),sp(e,134217728)}},tP=function(e){if(13===e.tag){var t=lj(e),r=aG(e,t);null!==r&&l$(r,e,t,lF()),sp(e,t)}},tT=function(){return tS},tz=function(e,t){var r=tS;try{return tS=e,t()}finally{tS=r}},eB=function(e,t,r){switch(t){case"input":if(eh(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=nK(n);if(!a)throw Error(d(90));eu(n),eh(n,a)}}}break;case"textarea":ek(e,r);break;case"select":null!=(t=r.value)&&ey(e,!!r.multiple,t,!1)}},eU=lW,eH=lU;var sk={findFiberByHostInstance:nY,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sw={bundleType:sk.bundleType,version:sk.version,rendererPackageName:sk.rendererPackageName,rendererConfig:sk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e8(e))?null:e.stateNode},findFiberByHostInstance:sk.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var sS=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sS.isDisabled&&sS.supportsFiber)try{tu=sS.inject(sw),tc=sS}catch(e){}}W={usingClientEntryPoint:!1,Events:[nG,nQ,nK,eV,eW,lW]},U=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!sv(t))throw Error(d(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:T,key:null==n?null:""+n,children:e,containerInfo:t,implementation:null}}(e,t,null,r)},H=function(e,t){if(!sv(e))throw Error(d(299));var r=!1,n="",a=sh;return null!=t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=sl(e,1,!1,null,null,r,!1,n,a),e[nU]=t.current,ny(8===e.nodeType?e.parentNode:e),new sm(t)},q=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(d(188));throw Error(d(268,e=Object.keys(e).join(",")))}return e=null===(e=e8(t))?null:e.stateNode},X=function(e){return lU(e)},Y=function(e,t,r){if(!sy(t))throw Error(d(200));return sx(null,e,t,!0,r)},G=function(e,t,r){if(!sv(e))throw Error(d(405));var n=null!=r&&r.hydratedSources||null,a=!1,o="",i=sh;if(null!=r&&(!0===r.unstable_strictMode&&(a=!0),void 0!==r.identifierPrefix&&(o=r.identifierPrefix),void 0!==r.onRecoverableError&&(i=r.onRecoverableError)),t=su(t,null,e,1,null!=r?r:null,a,!1,o,i),e[nU]=t.current,ny(e),n)for(e=0;e<n.length;e++)a=(a=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new sg(t)},Q=function(e,t,r){if(!sy(t))throw Error(d(200));return sx(null,e,t,!1,r)},K=function(e){if(!sy(e))throw Error(d(40));return!!e._reactRootContainer&&(lU(function(){sx(null,null,e,!1,function(){e._reactRootContainer=null,e[nU]=null})}),!0)},Z=lW,J=function(e,t,r,n){if(!sy(r))throw Error(d(200));if(null==e||void 0===e._reactInternals)throw Error(d(38));return sx(e,t,r,!1,n)},ee="18.2.0-next-9e3b772b8-20220608"}),j.register("fO90s",function(e,t){e.exports=j("gcnCG")}),j.register("gcnCG",function(e,r){function n(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,a=e[n];if(0<i(a,t))e[n]=t,e[r]=a,r=n;else break}}function a(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,a=e.length,o=a>>>1;n<o;){var l=2*(n+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,r))u<a&&0>i(c,s)?(e[n]=c,e[u]=r,n=u):(e[n]=s,e[l]=r,n=l);else if(u<a&&0>i(c,r))e[n]=c,e[u]=r,n=u;else break}}return t}function i(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(t(e.exports,"unstable_now",()=>l,e=>l=e),t(e.exports,"unstable_IdlePriority",()=>s,e=>s=e),t(e.exports,"unstable_ImmediatePriority",()=>u,e=>u=e),t(e.exports,"unstable_LowPriority",()=>c,e=>c=e),t(e.exports,"unstable_NormalPriority",()=>d,e=>d=e),t(e.exports,"unstable_Profiling",()=>f,e=>f=e),t(e.exports,"unstable_UserBlockingPriority",()=>p,e=>p=e),t(e.exports,"unstable_cancelCallback",()=>h,e=>h=e),t(e.exports,"unstable_continueExecution",()=>m,e=>m=e),t(e.exports,"unstable_forceFrameRate",()=>g,e=>g=e),t(e.exports,"unstable_getCurrentPriorityLevel",()=>v,e=>v=e),t(e.exports,"unstable_getFirstCallbackNode",()=>y,e=>y=e),t(e.exports,"unstable_next",()=>b,e=>b=e),t(e.exports,"unstable_pauseExecution",()=>x,e=>x=e),t(e.exports,"unstable_requestPaint",()=>k,e=>k=e),t(e.exports,"unstable_runWithPriority",()=>w,e=>w=e),t(e.exports,"unstable_scheduleCallback",()=>S,e=>S=e),t(e.exports,"unstable_shouldYield",()=>C,e=>C=e),t(e.exports,"unstable_wrapCallback",()=>_,e=>_=e),"object"==typeof performance&&"function"==typeof performance.now){var l,s,u,c,d,f,p,h,m,g,v,y,b,x,k,w,S,C,_,E,P=performance;l=function(){return P.now()}}else{var T=Date,z=T.now();l=function(){return T.now()-z}}var A=[],R=[],M=1,L=null,F=3,j=!1,$=!1,D=!1,B="function"==typeof setTimeout?setTimeout:null,I="function"==typeof clearTimeout?clearTimeout:null,O="undefined"!=typeof setImmediate?setImmediate:null;function N(e){for(var t=a(R);null!==t;){if(null===t.callback)o(R);else if(t.startTime<=e)o(R),t.sortIndex=t.expirationTime,n(A,t);else break;t=a(R)}}function V(e){if(D=!1,N(e),!$){if(null!==a(A))$=!0,J(W);else{var t=a(R);null!==t&&ee(V,t.startTime-e)}}}function W(e,t){$=!1,D&&(D=!1,I(q),q=-1),j=!0;var r=F;try{for(N(t),L=a(A);null!==L&&(!(L.expirationTime>t)||e&&!G());){var n=L.callback;if("function"==typeof n){L.callback=null,F=L.priorityLevel;var i=n(L.expirationTime<=t);t=l(),"function"==typeof i?L.callback=i:L===a(A)&&o(A),N(t)}else o(A);L=a(A)}if(null!==L)var s=!0;else{var u=a(R);null!==u&&ee(V,u.startTime-t),s=!1}return s}finally{L=null,F=r,j=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var U=!1,H=null,q=-1,X=5,Y=-1;function G(){return!(l()-Y<X)}function Q(){if(null!==H){var e=l();Y=e;var t=!0;try{t=H(!0,e)}finally{t?E():(U=!1,H=null)}}else U=!1}if("function"==typeof O)E=function(){O(Q)};else if("undefined"!=typeof MessageChannel){var K=new MessageChannel,Z=K.port2;K.port1.onmessage=Q,E=function(){Z.postMessage(null)}}else E=function(){B(Q,0)};function J(e){H=e,U||(U=!0,E())}function ee(e,t){q=B(function(){e(l())},t)}s=5,u=1,c=4,d=3,f=null,p=2,h=function(e){e.callback=null},m=function(){$||j||($=!0,J(W))},g=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<e?Math.floor(1e3/e):5},v=function(){return F},y=function(){return a(A)},b=function(e){switch(F){case 1:case 2:case 3:var t=3;break;default:t=F}var r=F;F=t;try{return e()}finally{F=r}},x=function(){},k=function(){},w=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=F;F=e;try{return t()}finally{F=r}},S=function(e,t,r){var o=l();switch(r="object"==typeof r&&null!==r&&"number"==typeof(r=r.delay)&&0<r?o+r:o,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,e={id:M++,callback:t,priorityLevel:e,startTime:r,expirationTime:i,sortIndex:-1},r>o?(e.sortIndex=r,n(R,e),null===a(A)&&e===a(R)&&(D?(I(q),q=-1):D=!0,ee(V,r-o))):(e.sortIndex=i,n(A,e),$||j||($=!0,J(W))),e},C=G,_=function(e){var t=F;return function(){var r=F;F=t;try{return e.apply(this,arguments)}finally{F=r}}}});var $={};$=j("1b2ls");var D=j("acw62"),B=/*#__PURE__*/function(){// Using Node instead of HTMLElement since container may be a ShadowRoot
function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){// the max length is how many rules we have per style tag, it's 65000 in speedy mode
// it's 1 in dev because we insert source maps that map a single rule to a location
// and you can only have one source map per style tag
if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/// $FlowFixMe
function(e){if(e.sheet)return e.sheet;// this weirdness brought to you by firefox
/* istanbul ignore next */for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{// this is the ultrafast version, works across browsers
// the big drawback is that the css won't be editable in devtools
n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){// $FlowFixMe
this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}(),I="-ms-",O="-moz-",N="-webkit-",V="comm",W="rule",U="decl",H="@keyframes",q=Math.abs,X=String.fromCharCode,Y=Object.assign;function G(e,t,r){return e.replace(t,r)}function Q(e,t){return e.indexOf(t)}function K(e,t){return 0|e.charCodeAt(t)}function Z(e,t,r){return e.slice(t,r)}function J(e){return e.length}function ee(e,t){return t.push(e),e}var et=1,er=1,en=0,ea=0,eo=0,ei="";function el(e,t,r,n,a,o,i){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:et,column:er,length:i,return:""}}function es(e,t){return Y(el("",null,null,"",null,null,0),e,{length:-e.length},t)}function eu(){return eo=ea<en?K(ei,ea++):0,er++,10===eo&&(er=1,et++),eo}function ec(){return K(ei,ea)}function ed(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ef(e){return et=er=1,en=J(ei=e),ea=0,[]}function ep(e){var t,r;return(t=ea-1,r=function e(t){for(;eu();)switch(eo){case t:return ea;case 34:case 39:34!==t&&39!==t&&e(eo);break;case 40:41===t&&e(t);break;case 92:eu()}return ea}(91===e?e+2:40===e?e+1:e),Z(ei,t,r)).trim()}function eh(e,t,r,n,a,o,i,l,s,u,c){for(var d=a-1,f=0===a?o:[""],p=f.length,h=0,m=0,g=0;h<n;++h)for(var v=0,y=Z(e,d+1,d=q(m=i[h])),b=e;v<p;++v)(b=(m>0?f[v]+" "+y:G(y,/&\f/g,f[v])).trim())&&(s[g++]=b);return el(e,t,r,0===a?W:l,s,u,c)}function em(e,t,r,n){return el(e,t,r,U,Z(e,0,n),Z(e,n+1,-1),n)}function eg(e,t){for(var r="",n=e.length,a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function ev(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case U:return e.return=e.return||e.value;case V:return"";case H:return e.return=e.value+"{"+eg(e.children,n)+"}";case W:e.value=e.props.join(",")}return J(r=eg(e.children,n))?e.return=e.value+"{"+r+"}":""}var ey=function(e){// $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}};function eb(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var ex=function(e,t,r){for(var n=0,a=0;n=a,a=ec(),38===n&&12===a&&(t[r]=1),!ed(a);)eu();return Z(ei,e,ea)},ek=function(e,t){// pretend we've started with a comma
var r=-1,n=44;do switch(ed(n)){case 0:38===n&&12===ec()&&// stylis inserts \f after & to know when & where it should replace this sequence with the context selector
// and when it should just concatenate the outer and inner selectors
// it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
(t[r]=1),e[r]+=ex(ea-1,t,r);break;case 2:e[r]+=ep(n);break;case 4:// comma
if(44===n){// colon
e[++r]=58===ec()?"&\f":"",t[r]=e[r].length;break}// fallthrough
default:e[r]+=X(n)}while(n=eu())return e},ew=function(e,t){var r;return r=ek(ef(e),t),ei="",r},eS=/* #__PURE__ */new WeakMap,eC=function(e){if("rule"===e.type&&e.parent&&!// positive .length indicates that this rule contains pseudo
// negative .length indicates that this rule has been already prefixed
(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;// short-circuit for the simplest case
if((1!==e.props.length||58===t.charCodeAt(0)||eS.get(r))&&!n){eS.set(e,!0);for(var a=[],o=ew(t,a),i=r.props,l=0,s=0;l<o.length;l++)for(var u=0;u<i.length;u++,s++)e.props[s]=a[l]?o[l].replace(/&\f/g,i[u]):i[u]+" "+o[l]}}},e_=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&// charcode for b
98===t.charCodeAt(2)&&(// this ignores label
e.return="",e.value="")}},eE=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case U:e.return=/* eslint-disable no-fallthrough */function e(t,r){switch(45^K(t,0)?(((r<<2^K(t,0))<<2^K(t,1))<<2^K(t,2))<<2^K(t,3):0){// color-adjust
case 5103:return N+"print-"+t+t;// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return N+t+t;// appearance, user-select, transform, hyphens, text-size-adjust
case 5349:case 4246:case 4810:case 6968:case 2756:return N+t+O+t+I+t+t;// flex, flex-direction
case 6828:case 4268:return N+t+I+t+t;// order
case 6165:return N+t+I+"flex-"+t+t;// align-items
case 5187:return N+t+G(t,/(\w+).+(:[^]+)/,N+"box-$1$2"+I+"flex-$1$2")+t;// align-self
case 5443:return N+t+I+"flex-item-"+G(t,/flex-|-self/,"")+t;// align-content
case 4675:return N+t+I+"flex-line-pack"+G(t,/align-content|flex-|-self/,"")+t;// flex-shrink
case 5548:return N+t+I+G(t,"shrink","negative")+t;// flex-basis
case 5292:return N+t+I+G(t,"basis","preferred-size")+t;// flex-grow
case 6060:return N+"box-"+G(t,"-grow","")+N+t+I+G(t,"grow","positive")+t;// transition
case 4554:return N+G(t,/([^-])(transform)/g,"$1"+N+"$2")+t;// cursor
case 6187:return G(G(G(t,/(zoom-|grab)/,N+"$1"),/(image-set)/,N+"$1"),t,"")+t;// background, background-image
case 5495:case 3959:return G(t,/(image-set\([^]*)/,N+"$1$`$1");// justify-content
case 4968:return G(G(t,/(.+:)(flex-)?(.*)/,N+"box-pack:$3"+I+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+N+t+t;// (margin|padding)-inline-(start|end)
case 4095:case 3583:case 4068:case 2532:return G(t,/(.+)-inline(.+)/,N+"$1$2")+t;// (min|max)?(width|height|inline-size|block-size)
case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:// stretch, max-content, min-content, fill-available
if(J(t)-1-r>6)switch(K(t,r+1)){// (m)ax-content, (m)in-content
case 109:// -
if(45!==K(t,r+4))break;// (f)ill-available, (f)it-content
case 102:return G(t,/(.+:)(.+)-([^]+)/,"$1"+N+"$2-$3$1"+O+(108==K(t,r+3)?"$3":"$2-$3"))+t;// (s)tretch
case 115:return~Q(t,"stretch")?e(G(t,"stretch","fill-available"),r)+t:t}break;// position: sticky
case 4949:// (s)ticky?
if(115!==K(t,r+1))break;// display: (flex|inline-flex)
case 6444:switch(K(t,J(t)-3-(~Q(t,"!important")&&10))){// stic(k)y
case 107:return G(t,":",":"+N)+t;// (inline-)?fl(e)x
case 101:return G(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+N+(45===K(t,14)?"inline-":"")+"box$3$1"+N+"$2$3$1"+I+"$2box$3")+t}break;// writing-mode
case 5936:switch(K(t,r+11)){// vertical-l(r)
case 114:return N+t+I+G(t,/[svh]\w+-[tblr]{2}/,"tb")+t;// vertical-r(l)
case 108:return N+t+I+G(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;// horizontal(-)tb
case 45:return N+t+I+G(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return N+t+I+t+t}return t}(e.value,e.length);break;case H:return eg([es(e,{value:G(e.value,"@","@"+N)})],n);case W:if(e.length)return e.props.map(function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){// :read-(only|write)
case":read-only":case":read-write":return eg([es(e,{props:[G(t,/:(read-\w+)/,":"+O+"$1")]})],n);// :placeholder
case"::placeholder":return eg([es(e,{props:[G(t,/:(plac\w+)/,":"+N+"input-$1")]}),es(e,{props:[G(t,/:(plac\w+)/,":"+O+"$1")]}),es(e,{props:[G(t,/:(plac\w+)/,I+"input-$1")]})],n)}return""}).join("")}}];function eP(){return(eP=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var eT={};eT=j("9cCWX");/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */var ez={};ez[eT.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ez[eT.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var eA=function(e,t,r){var n=e.key+"-"+t.name;!1===// the tree but if it's a string tag, we know it won't
// so we don't have to add it to registered cache.
// this improves memory usage since we can avoid storing the whole style string
r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},eR=function(e,t,r){eA(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next;while(void 0!==a)}},eM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,// SVG-related properties
fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},eL=/[A-Z]|^ms/g,eF=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ej=function(e){return 45===e.charCodeAt(1)},e$=function(e){return null!=e&&"boolean"!=typeof e},eD=eb(function(e){return ej(e)?e:e.replace(eL,"-$&").toLowerCase()}),eB=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(eF,function(e,t,r){return a={name:t,styles:r,next:a},t})}return 1===eM[e]||ej(e)||"number"!=typeof t||0===t?t:t+"px"};function eI(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return a={name:r.name,styles:r.styles,next:a},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)// and there will be very few iterations of this generally
for(;void 0!==n;)a={name:n.name,styles:n.styles,next:a},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=eI(e,t,r[a])+";";else for(var o in r){var i=r[o];if("object"!=typeof i)null!=t&&void 0!==t[i]?n+=o+"{"+t[i]+"}":e$(i)&&(n+=eD(o)+":"+eB(o,i)+";");else if(Array.isArray(i)&&"string"==typeof i[0]&&(null==t||void 0===t[i[0]]))for(var l=0;l<i.length;l++)e$(i[l])&&(n+=eD(o)+":"+eB(o,i[l])+";");else{var s=eI(e,t,i);switch(o){case"animation":case"animationName":n+=eD(o)+":"+s+";";break;default:n+=o+"{"+s+"}"}}}return n}(e,t,r);case"function":if(void 0!==e){var o=a,i=r(e);return a=o,eI(e,t,i)}}// finalize string values (regular strings and functions interpolated into css calls)
if(null==t)return r;var l=t[r];return void 0!==l?l:r}var eO=/label:\s*([^\s;\n{]+)\s*(;|$)/g,eN=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n,o=!0,i="";a=void 0;var l=e[0];null==l||void 0===l.raw?(o=!1,i+=eI(r,t,l)):i+=l[0];// we start at 1 since we've already handled the first arg
for(var s=1;s<e.length;s++)i+=eI(r,t,e[s]),o&&(i+=l[s]);eO.lastIndex=0;for(var u="";null!==(n=eO.exec(i));)u+="-"+// $FlowFixMe we know it's not null
n[1];return{name:/* eslint-disable */// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function(e){for(// 'm' and 'r' are mixing constants generated offline.
// They're not really 'magic', they just happen to work well.
// const m = 0x5bd1e995;
// const r = 24;
// Initialize the hash
var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=/* Math.imul(k, m): */(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*1540483477+((t>>>16)*59797<<16),t^=/* k >>> r: */t>>>24,r=/* Math.imul(k, m): */(65535&t)*1540483477+((t>>>16)*59797<<16)^/* Math.imul(h, m): */(65535&r)*1540483477+((r>>>16)*59797<<16);// Handle the last few bytes of the input array
switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=/* Math.imul(h, m): */(65535&r)*1540483477+((r>>>16)*59797<<16)}// Do a few final mixes of the hash to ensure the last few
return(// bytes are well-incorporated.
r^=r>>>13,(((r=/* Math.imul(h, m): */(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36))}(i)+u,styles:i,next:a}},D=j("acw62"),eV=!!D.useInsertionEffect&&D.useInsertionEffect,eW=eV||function(e){return e()},eU=eV||D.useLayoutEffect,eH=/* #__PURE__ */D.createContext(// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
"undefined"!=typeof HTMLElement?function(e){var t,r,n,a,o,i=e.key;if("css"===i){var l=document.querySelectorAll("style[data-emotion]:not([data-s])");// get SSRed styles out of the way of React's hydration
// document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
// note this very very intentionally targets all style elements regardless of the key to ensure
// that creating a cache works inside of render of a React component
Array.prototype.forEach.call(l,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var s=e.stylisPlugins||eE,u={},c=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)u[t[r]]=!0;c.push(e)});var d=(r=(t=[eC,e_].concat(s,[ev,(n=function(e){o.insert(e)},function(e){!e.root&&(e=e.return)&&n(e)})])).length,function(e,n,a,o){for(var i="",l=0;l<r;l++)i+=t[l](e,n,a,o)||"";return i}),f=function(e){var t,r;return eg((r=function e(t,r,n,a,o,i,l,s,u){for(var c,d=0,f=0,p=l,h=0,m=0,g=0,v=1,y=1,b=1,x=0,k="",w=o,S=i,C=a,_=k;y;)switch(g=x,x=eu()){case 40:if(108!=g&&58==K(_,p-1)){-1!=Q(_+=G(ep(x),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:_+=ep(x);break;case 9:case 10:case 13:case 32:_+=function(e){for(;eo=ec();)if(eo<33)eu();else break;return ed(e)>2||ed(eo)>3?"":" "}(g);break;case 92:_+=function(e,t){for(var r;--t&&eu()&&!(eo<48)&&!(eo>102)&&(!(eo>57)||!(eo<65))&&(!(eo>70)||!(eo<97)););return r=ea+(t<6&&32==ec()&&32==eu()),Z(ei,e,r)}(ea-1,7);continue;case 47:switch(ec()){case 42:case 47:ee(el(c=function(e,t){for(;eu();)if(e+eo===57)break;else if(e+eo===84&&47===ec())break;return"/*"+Z(ei,t,ea-1)+"*"+X(47===e?e:eu())}(eu(),ea),r,n,V,X(eo),Z(c,2,-2),0),u);break;default:_+="/"}break;case 123*v:s[d++]=J(_)*b;case 125*v:case 59:case 0:switch(x){case 0:case 125:y=0;case 59+f:-1==b&&(_=G(_,/\f/g,"")),m>0&&J(_)-p&&ee(m>32?em(_+";",a,n,p-1):em(G(_," ","")+";",a,n,p-2),u);break;case 59:_+=";";default:if(ee(C=eh(_,r,n,d,f,o,s,k,w=[],S=[],p),i),123===x){if(0===f)e(_,r,C,C,w,i,p,s,S);else switch(99===h&&110===K(_,3)?100:h){case 100:case 108:case 109:case 115:e(t,C,C,a&&ee(eh(t,C,C,0,0,o,s,k,o,w=[],p),S),o,S,p,s,a?w:S);break;default:e(_,C,C,C,[""],S,0,s,S)}}}d=f=m=0,v=b=1,k=_="",p=l;break;case 58:p=1+J(_),m=g;default:if(v<1){if(123==x)--v;else if(125==x&&0==v++&&125==(eo=ea>0?K(ei,--ea):0,er--,10===eo&&(er=1,et--),eo))continue}switch(_+=X(x),x*v){case 38:b=f>0?1:(_+="\f",-1);break;case 44:s[d++]=(J(_)-1)*b,b=1;break;case 64:45===ec()&&(_+=ep(eu())),h=ec(),f=p=J(k=_+=function(e){for(;!ed(ec());)eu();return Z(ei,e,ea)}(ea)),x++;break;case 45:45===g&&2==J(_)&&(v=0)}}return i}("",null,null,null,[""],t=ef(t=e),0,[0],t),ei="",r),d)},p={key:i,sheet:new B({key:i,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:u,registered:{},insert:function(e,t,r,n){o=r,f(e?e+"{"+t.styles+"}":t.styles),n&&(p.inserted[t.name]=!0)}};return p.sheet.hydrate(c),p}({key:"css"}):null);eH.Provider;var eq=function(e){// $FlowFixMe
return/*#__PURE__*/(0,D.forwardRef)(function(t,r){return e(t,(0,D.useContext)(eH),r)})},eX=/* #__PURE__ */D.createContext({}),eY=ey(function(e){return ey(function(t){return"function"==typeof t?t(e):eP({},e,t)})}),eG=function(e){var t=D.useContext(eX);return e.theme!==t&&(t=eY(t)(e.theme)),/*#__PURE__*/D.createElement(eX.Provider,{value:t},e.children)},D=j("acw62"),eQ={};function eK(){return(eQ=eK=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).__esModule=!0,eQ.default=eQ,eK.apply(this,arguments)}(eQ=eK).__esModule=!0,eQ.default=eQ;// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var eZ=eq(function(e,t){var r=eN([e.styles],void 0,D.useContext(eX)),n=D.useRef();return eU(function(){var e=t.key+"-global",a=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,i=document.querySelector('style[data-emotion="'+e+" "+r.name+'"]');// use case of https://github.com/emotion-js/emotion/issues/2675
return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),null!==i&&(o=!0,i.setAttribute("data-emotion",e),a.hydrate([i])),n.current=[a,o],function(){a.flush()}},[t]),eU(function(){var e=n.current,a=e[0];if(e[1]){e[1]=!1;return}if(void 0!==r.next&&eR(t,r.next,!0),a.tags.length){// if this doesn't exist then it will be null so the style element will be appended
var o=a.tags[a.tags.length-1].nextElementSibling;a.before=o,a.flush()}t.insert("",r,a,!1)},[t,r.name]),null});function eJ(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return eN(t)}var e0=String.raw,e1=e0`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,e2=()=>/* @__PURE__ */(0,$.jsx)(eZ,{styles:e1}),e5=({scope:e=""})=>/* @__PURE__ */(0,$.jsx)(eZ,{styles:e0`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${e1}
    `}),D=j("acw62");function e3(e={}){let{name:t,strict:r=!0,hookName:n="useContext",providerName:a="Provider",errorMessage:o,defaultValue:i}=e,l=(0,D.createContext)(i);return l.displayName=t,[l.Provider,function e(){var t;let i=(0,D.useContext)(l);if(!i&&r){let r=Error(null!=o?o:`${n} returned \`undefined\`. Seems you forgot to wrap component within ${a}`);throw r.name="ContextError",null==(t=Error.captureStackTrace)||t.call(Error,r,e),r}return i},l]}var[e4,e6]=e3({strict:!1,name:"PortalManagerContext"});function e8(e){let{children:t,zIndex:r}=e;return/* @__PURE__ */(0,$.jsx)(e4,{value:{zIndex:r},children:t})}e8.displayName="PortalManager";var D=j("acw62"),e9=(0,D.createContext)({});function e7(){let e=(0,D.useContext)(e9);if(void 0===e)throw Error("useColorMode must be used within a ColorModeProvider");return e}e9.displayName="ColorModeContext";// src/color-mode.utils.ts
var te={light:"chakra-ui-light",dark:"chakra-ui-dark"},tt="chakra-ui-color-mode",tr={ssr:!1,type:"localStorage",get(e){let t;if(!(null==globalThis?void 0:globalThis.document))return e;try{t=localStorage.getItem(tt)||e}catch(e){}return t||e},set(e){try{localStorage.setItem(tt,e)}catch(e){}}},D=j("acw62"),tn=(null==globalThis?void 0:globalThis.document)?D.useLayoutEffect:D.useEffect,D=j("acw62"),ta=()=>{};function to(e,t){return"cookie"===e.type&&e.ssr?e.get(t):t}function ti(e){let{value:t,children:r,options:{useSystemColorMode:n,initialColorMode:a,disableTransitionOnChange:o}={},colorModeManager:i=tr}=e,l="dark"===a?"dark":"light",[s,u]=(0,D.useState)(()=>to(i,l)),[c,d]=(0,D.useState)(()=>to(i)),{getSystemTheme:f,setClassName:p,setDataset:h,addListener:m}=(0,D.useMemo)(()=>(function(e={}){let{preventTransition:t=!0}=e,r={setDataset:e=>{let n=t?r.preventTransition():void 0;document.documentElement.dataset.theme=e,document.documentElement.style.colorScheme=e,null==n||n()},setClassName(e){document.body.classList.add(e?te.dark:te.light),document.body.classList.remove(e?te.light:te.dark)},query:()=>window.matchMedia("(prefers-color-scheme: dark)"),getSystemTheme(e){var t;let n=null!=(t=r.query().matches)?t:"dark"===e;return n?"dark":"light"},addListener(e){let t=r.query(),n=t=>{e(t.matches?"dark":"light")};return"function"==typeof t.addListener?t.addListener(n):t.addEventListener("change",n),()=>{"function"==typeof t.removeListener?t.removeListener(n):t.removeEventListener("change",n)}},preventTransition(){let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(e)})})}}};return r})({preventTransition:o}),[o]),g="system"!==a||s?s:c,v=(0,D.useCallback)(e=>{let t="system"===e?f():e;u(t),p("dark"===t),h(t),i.set(t)},[i,f,p,h]);tn(()=>{"system"===a&&d(f())},[]),(0,D.useEffect)(()=>{let e=i.get();if(e){v(e);return}if("system"===a){v("system");return}v(l)},[i,l,a,v]);let y=(0,D.useCallback)(()=>{v("dark"===g?"light":"dark")},[g,v]);(0,D.useEffect)(()=>{if(n)return m(v)},[n,m,v]);let b=(0,D.useMemo)(()=>({colorMode:null!=t?t:g,toggleColorMode:t?ta:y,setColorMode:t?ta:v,forced:void 0!==t}),[g,y,v,t]);return/* @__PURE__ */(0,$.jsx)(e9.Provider,{value:b,children:r})}ti.displayName="ColorModeProvider";// src/context.ts
var D=j("acw62"),tl=(...e)=>e.filter(Boolean).join(" ");function ts(e){let t=typeof e;return null!=e&&("object"===t||"function"===t)&&!Array.isArray(e)}function tu(e,...t){return tc(e)?e(...t):e}var tc=e=>"function"==typeof e,td=j("5Gn6I"),tf=e=>/!(important)?$/.test(e),tp=e=>"string"==typeof e?e.replace(/!(important)?$/,"").trim():e,th=(e,t)=>r=>{let n=String(t),a=tf(n),o=tp(n),i=e?`${e}.${o}`:o,l=ts(r.__cssMap)&&i in r.__cssMap?r.__cssMap[i].varRef:t;return l=tp(l),a?`${l} !important`:l};function tm(e){let{scale:t,transform:r,compose:n}=e;return(e,a)=>{var o;let i=th(t,e)(a),l=null!=(o=null==r?void 0:r(i,a))?o:i;return n&&(l=n(l,a)),l}}// src/utils/pipe.ts
var tg=(...e)=>t=>e.reduce((e,t)=>t(e),t);// src/utils/prop-config.ts
function tv(e,t){return r=>{let n={property:r,scale:e};return n.transform=tm({scale:e,transform:t}),n}}var ty=({rtl:e,ltr:t})=>r=>"rtl"===r.direction?e:t,tb=["rotate(var(--chakra-rotate, 0))","scaleX(var(--chakra-scale-x, 1))","scaleY(var(--chakra-scale-y, 1))","skewX(var(--chakra-skew-x, 0))","skewY(var(--chakra-skew-y, 0))"],tx={"--chakra-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-sepia":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-drop-shadow":"var(--chakra-empty,/*!*/ /*!*/)",filter:"var(--chakra-blur) var(--chakra-brightness) var(--chakra-contrast) var(--chakra-grayscale) var(--chakra-hue-rotate) var(--chakra-invert) var(--chakra-saturate) var(--chakra-sepia) var(--chakra-drop-shadow)"},tk={backdropFilter:"var(--chakra-backdrop-blur) var(--chakra-backdrop-brightness) var(--chakra-backdrop-contrast) var(--chakra-backdrop-grayscale) var(--chakra-backdrop-hue-rotate) var(--chakra-backdrop-invert) var(--chakra-backdrop-opacity) var(--chakra-backdrop-saturate) var(--chakra-backdrop-sepia)","--chakra-backdrop-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-opacity":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-sepia":"var(--chakra-empty,/*!*/ /*!*/)"},tw={"row-reverse":{space:"--chakra-space-x-reverse",divide:"--chakra-divide-x-reverse"},"column-reverse":{space:"--chakra-space-y-reverse",divide:"--chakra-divide-y-reverse"}},tS={"to-t":"to top","to-tr":"to top right","to-r":"to right","to-br":"to bottom right","to-b":"to bottom","to-bl":"to bottom left","to-l":"to left","to-tl":"to top left"},tC=new Set(Object.values(tS)),t_=/* @__PURE__ */new Set(["none","-moz-initial","inherit","initial","revert","unset"]),tE=e=>e.trim(),tP=e=>"string"==typeof e&&e.includes("(")&&e.includes(")"),tT=e=>{let t=parseFloat(e.toString()),r=e.toString().replace(String(t),"");return{unitless:!r,value:t,unit:r}},tz=e=>t=>`${e}(${t})`,tA={filter:e=>"auto"!==e?e:tx,backdropFilter:e=>"auto"!==e?e:tk,ring:e=>({"--chakra-ring-offset-shadow":"var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)","--chakra-ring-shadow":"var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)","--chakra-ring-width":tA.px(e),boxShadow:"var(--chakra-ring-offset-shadow), var(--chakra-ring-shadow), var(--chakra-shadow, 0 0 #0000)"}),bgClip:e=>"text"===e?{color:"transparent",backgroundClip:"text"}:{backgroundClip:e},transform:e=>"auto"===e?["translateX(var(--chakra-translate-x, 0))","translateY(var(--chakra-translate-y, 0))",...tb].join(" "):"auto-gpu"===e?["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",...tb].join(" "):e,vh:e=>"$100vh"===e?"var(--chakra-vh)":e,px(e){if(null==e)return e;let{unitless:t}=tT(e);return t||"number"==typeof e?`${e}px`:e},fraction:e=>"number"!=typeof e||e>1?e:`${100*e}%`,float:(e,t)=>"rtl"===t.direction?({left:"right",right:"left"})[e]:e,degree(e){if(/^var\(--.+\)$/.test(e)||null==e)return e;let t="string"==typeof e&&!e.endsWith("deg");return"number"==typeof e||t?`${e}deg`:e},gradient:(e,t)=>(function(e,t){if(null==e||t_.has(e))return e;let r=tP(e)||t_.has(e);if(!r)return`url('${e}')`;let n=/(^[a-z-A-Z]+)\((.*)\)/g.exec(e),a=null==n?void 0:n[1],o=null==n?void 0:n[2];if(!a||!o)return e;let i=a.includes("-gradient")?a:`${a}-gradient`,[l,...s]=o.split(",").map(tE).filter(Boolean);if((null==s?void 0:s.length)===0)return e;let u=l in tS?tS[l]:l;s.unshift(u);let c=s.map(e=>{if(tC.has(e))return e;let r=e.indexOf(" "),[n,a]=-1!==r?[e.substr(0,r),e.substr(r+1)]:[e],o=tP(a)?a:a&&a.split(" "),i=`colors.${n}`,l=i in t.__cssMap?t.__cssMap[i].varRef:n;return o?[l,...Array.isArray(o)?o:[o]].join(" "):l});return`${i}(${c.join(", ")})`})(e,null!=t?t:{}),blur:tz("blur"),opacity:tz("opacity"),brightness:tz("brightness"),contrast:tz("contrast"),dropShadow:tz("drop-shadow"),grayscale:tz("grayscale"),hueRotate:tz("hue-rotate"),invert:tz("invert"),saturate:tz("saturate"),sepia:tz("sepia"),bgImage(e){if(null==e)return e;let t=tP(e)||t_.has(e);return t?e:`url(${e})`},outline(e){let t="0"===String(e)||"none"===String(e);return null!==e&&t?{outline:"2px solid transparent",outlineOffset:"2px"}:{outline:e}},flexDirection(e){var t;let{space:r,divide:n}=null!=(t=tw[e])?t:{},a={flexDirection:e};return r&&(a[r]=1),n&&(a[n]=1),a}},tR={borderWidths:tv("borderWidths"),borderStyles:tv("borderStyles"),colors:tv("colors"),borders:tv("borders"),gradients:tv("gradients",tA.gradient),radii:tv("radii",tA.px),space:tv("space",tg(tA.vh,tA.px)),spaceT:tv("space",tg(tA.vh,tA.px)),degreeT:e=>({property:e,transform:tA.degree}),prop:(e,t,r)=>({property:e,scale:t,...t&&{transform:tm({scale:t,transform:r})}}),propT:(e,t)=>({property:e,transform:t}),sizes:tv("sizes",tg(tA.vh,tA.px)),sizesT:tv("sizes",tg(tA.vh,tA.fraction)),shadows:tv("shadows"),logical:function(e){let{property:t,scale:r,transform:n}=e;return{scale:r,property:ty(t),transform:r?tm({scale:r,compose:n}):n}},blur:tv("blur",tA.blur)},tM={background:tR.colors("background"),backgroundColor:tR.colors("backgroundColor"),backgroundImage:tR.gradients("backgroundImage"),backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundAttachment:!0,backgroundClip:{transform:tA.bgClip},bgSize:tR.prop("backgroundSize"),bgPosition:tR.prop("backgroundPosition"),bg:tR.colors("background"),bgColor:tR.colors("backgroundColor"),bgPos:tR.prop("backgroundPosition"),bgRepeat:tR.prop("backgroundRepeat"),bgAttachment:tR.prop("backgroundAttachment"),bgGradient:tR.gradients("backgroundImage"),bgClip:{transform:tA.bgClip}};Object.assign(tM,{bgImage:tM.backgroundImage,bgImg:tM.backgroundImage});// src/config/border.ts
var tL={border:tR.borders("border"),borderWidth:tR.borderWidths("borderWidth"),borderStyle:tR.borderStyles("borderStyle"),borderColor:tR.colors("borderColor"),borderRadius:tR.radii("borderRadius"),borderTop:tR.borders("borderTop"),borderBlockStart:tR.borders("borderBlockStart"),borderTopLeftRadius:tR.radii("borderTopLeftRadius"),borderStartStartRadius:tR.logical({scale:"radii",property:{ltr:"borderTopLeftRadius",rtl:"borderTopRightRadius"}}),borderEndStartRadius:tR.logical({scale:"radii",property:{ltr:"borderBottomLeftRadius",rtl:"borderBottomRightRadius"}}),borderTopRightRadius:tR.radii("borderTopRightRadius"),borderStartEndRadius:tR.logical({scale:"radii",property:{ltr:"borderTopRightRadius",rtl:"borderTopLeftRadius"}}),borderEndEndRadius:tR.logical({scale:"radii",property:{ltr:"borderBottomRightRadius",rtl:"borderBottomLeftRadius"}}),borderRight:tR.borders("borderRight"),borderInlineEnd:tR.borders("borderInlineEnd"),borderBottom:tR.borders("borderBottom"),borderBlockEnd:tR.borders("borderBlockEnd"),borderBottomLeftRadius:tR.radii("borderBottomLeftRadius"),borderBottomRightRadius:tR.radii("borderBottomRightRadius"),borderLeft:tR.borders("borderLeft"),borderInlineStart:{property:"borderInlineStart",scale:"borders"},borderInlineStartRadius:tR.logical({scale:"radii",property:{ltr:["borderTopLeftRadius","borderBottomLeftRadius"],rtl:["borderTopRightRadius","borderBottomRightRadius"]}}),borderInlineEndRadius:tR.logical({scale:"radii",property:{ltr:["borderTopRightRadius","borderBottomRightRadius"],rtl:["borderTopLeftRadius","borderBottomLeftRadius"]}}),borderX:tR.borders(["borderLeft","borderRight"]),borderInline:tR.borders("borderInline"),borderY:tR.borders(["borderTop","borderBottom"]),borderBlock:tR.borders("borderBlock"),borderTopWidth:tR.borderWidths("borderTopWidth"),borderBlockStartWidth:tR.borderWidths("borderBlockStartWidth"),borderTopColor:tR.colors("borderTopColor"),borderBlockStartColor:tR.colors("borderBlockStartColor"),borderTopStyle:tR.borderStyles("borderTopStyle"),borderBlockStartStyle:tR.borderStyles("borderBlockStartStyle"),borderBottomWidth:tR.borderWidths("borderBottomWidth"),borderBlockEndWidth:tR.borderWidths("borderBlockEndWidth"),borderBottomColor:tR.colors("borderBottomColor"),borderBlockEndColor:tR.colors("borderBlockEndColor"),borderBottomStyle:tR.borderStyles("borderBottomStyle"),borderBlockEndStyle:tR.borderStyles("borderBlockEndStyle"),borderLeftWidth:tR.borderWidths("borderLeftWidth"),borderInlineStartWidth:tR.borderWidths("borderInlineStartWidth"),borderLeftColor:tR.colors("borderLeftColor"),borderInlineStartColor:tR.colors("borderInlineStartColor"),borderLeftStyle:tR.borderStyles("borderLeftStyle"),borderInlineStartStyle:tR.borderStyles("borderInlineStartStyle"),borderRightWidth:tR.borderWidths("borderRightWidth"),borderInlineEndWidth:tR.borderWidths("borderInlineEndWidth"),borderRightColor:tR.colors("borderRightColor"),borderInlineEndColor:tR.colors("borderInlineEndColor"),borderRightStyle:tR.borderStyles("borderRightStyle"),borderInlineEndStyle:tR.borderStyles("borderInlineEndStyle"),borderTopRadius:tR.radii(["borderTopLeftRadius","borderTopRightRadius"]),borderBottomRadius:tR.radii(["borderBottomLeftRadius","borderBottomRightRadius"]),borderLeftRadius:tR.radii(["borderTopLeftRadius","borderBottomLeftRadius"]),borderRightRadius:tR.radii(["borderTopRightRadius","borderBottomRightRadius"])};Object.assign(tL,{rounded:tL.borderRadius,roundedTop:tL.borderTopRadius,roundedTopLeft:tL.borderTopLeftRadius,roundedTopRight:tL.borderTopRightRadius,roundedTopStart:tL.borderStartStartRadius,roundedTopEnd:tL.borderStartEndRadius,roundedBottom:tL.borderBottomRadius,roundedBottomLeft:tL.borderBottomLeftRadius,roundedBottomRight:tL.borderBottomRightRadius,roundedBottomStart:tL.borderEndStartRadius,roundedBottomEnd:tL.borderEndEndRadius,roundedLeft:tL.borderLeftRadius,roundedRight:tL.borderRightRadius,roundedStart:tL.borderInlineStartRadius,roundedEnd:tL.borderInlineEndRadius,borderStart:tL.borderInlineStart,borderEnd:tL.borderInlineEnd,borderTopStartRadius:tL.borderStartStartRadius,borderTopEndRadius:tL.borderStartEndRadius,borderBottomStartRadius:tL.borderEndStartRadius,borderBottomEndRadius:tL.borderEndEndRadius,borderStartRadius:tL.borderInlineStartRadius,borderEndRadius:tL.borderInlineEndRadius,borderStartWidth:tL.borderInlineStartWidth,borderEndWidth:tL.borderInlineEndWidth,borderStartColor:tL.borderInlineStartColor,borderEndColor:tL.borderInlineEndColor,borderStartStyle:tL.borderInlineStartStyle,borderEndStyle:tL.borderInlineEndStyle});// src/config/color.ts
var tF={color:tR.colors("color"),textColor:tR.colors("color"),fill:tR.colors("fill"),stroke:tR.colors("stroke")},tj={boxShadow:tR.shadows("boxShadow"),mixBlendMode:!0,blendMode:tR.prop("mixBlendMode"),backgroundBlendMode:!0,bgBlendMode:tR.prop("backgroundBlendMode"),opacity:!0};Object.assign(tj,{shadow:tj.boxShadow});// src/config/filter.ts
var t$={filter:{transform:tA.filter},blur:tR.blur("--chakra-blur"),brightness:tR.propT("--chakra-brightness",tA.brightness),contrast:tR.propT("--chakra-contrast",tA.contrast),hueRotate:tR.degreeT("--chakra-hue-rotate"),invert:tR.propT("--chakra-invert",tA.invert),saturate:tR.propT("--chakra-saturate",tA.saturate),dropShadow:tR.propT("--chakra-drop-shadow",tA.dropShadow),backdropFilter:{transform:tA.backdropFilter},backdropBlur:tR.blur("--chakra-backdrop-blur"),backdropBrightness:tR.propT("--chakra-backdrop-brightness",tA.brightness),backdropContrast:tR.propT("--chakra-backdrop-contrast",tA.contrast),backdropHueRotate:tR.degreeT("--chakra-backdrop-hue-rotate"),backdropInvert:tR.propT("--chakra-backdrop-invert",tA.invert),backdropSaturate:tR.propT("--chakra-backdrop-saturate",tA.saturate)},tD={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:{transform:tA.flexDirection},flex:!0,flexFlow:!0,flexGrow:!0,flexShrink:!0,flexBasis:tR.sizes("flexBasis"),justifySelf:!0,alignSelf:!0,order:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:tR.space("gap"),rowGap:tR.space("rowGap"),columnGap:tR.space("columnGap")};Object.assign(tD,{flexDir:tD.flexDirection});// src/config/grid.ts
var tB={gridGap:tR.space("gridGap"),gridColumnGap:tR.space("gridColumnGap"),gridRowGap:tR.space("gridRowGap"),gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridColumnStart:!0,gridColumnEnd:!0,gridRowStart:!0,gridRowEnd:!0,gridAutoRows:!0,gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},tI={appearance:!0,cursor:!0,resize:!0,userSelect:!0,pointerEvents:!0,outline:{transform:tA.outline},outlineOffset:!0,outlineColor:tR.colors("outlineColor")},tO={width:tR.sizesT("width"),inlineSize:tR.sizesT("inlineSize"),height:tR.sizes("height"),blockSize:tR.sizes("blockSize"),boxSize:tR.sizes(["width","height"]),minWidth:tR.sizes("minWidth"),minInlineSize:tR.sizes("minInlineSize"),minHeight:tR.sizes("minHeight"),minBlockSize:tR.sizes("minBlockSize"),maxWidth:tR.sizes("maxWidth"),maxInlineSize:tR.sizes("maxInlineSize"),maxHeight:tR.sizes("maxHeight"),maxBlockSize:tR.sizes("maxBlockSize"),overflow:!0,overflowX:!0,overflowY:!0,overscrollBehavior:!0,overscrollBehaviorX:!0,overscrollBehaviorY:!0,display:!0,aspectRatio:!0,hideFrom:{scale:"breakpoints",transform:(e,t)=>{var r,n,a;let o=null!=(a=null==(n=null==(r=t.__breakpoints)?void 0:r.get(e))?void 0:n.minW)?a:e,i=`@media screen and (min-width: ${o})`;return{[i]:{display:"none"}}}},hideBelow:{scale:"breakpoints",transform:(e,t)=>{var r,n,a;let o=null!=(a=null==(n=null==(r=t.__breakpoints)?void 0:r.get(e))?void 0:n._minW)?a:e,i=`@media screen and (max-width: ${o})`;return{[i]:{display:"none"}}}},verticalAlign:!0,boxSizing:!0,boxDecorationBreak:!0,float:tR.propT("float",tA.float),objectFit:!0,objectPosition:!0,visibility:!0,isolation:!0};Object.assign(tO,{w:tO.width,h:tO.height,minW:tO.minWidth,maxW:tO.maxWidth,minH:tO.minHeight,maxH:tO.maxHeight,overscroll:tO.overscrollBehavior,overscrollX:tO.overscrollBehaviorX,overscrollY:tO.overscrollBehaviorY});// src/config/list.ts
var tN={listStyleType:!0,listStylePosition:!0,listStylePos:tR.prop("listStylePosition"),listStyleImage:!0,listStyleImg:tR.prop("listStyleImage")},tV=(e=>{let t=/* @__PURE__ */new WeakMap;return(r,n,a,o)=>{if(void 0===r)return e(r,n,a);t.has(r)||t.set(r,/* @__PURE__ */new Map);let i=t.get(r);if(i.has(n))return i.get(n);let l=e(r,n,a,o);return i.set(n,l),l}})(// src/get.ts
function(e,t,r,n){let a="string"==typeof t?t.split("."):[t];for(n=0;n<a.length&&e;n+=1)e=e[a[n]];return void 0===e?r:e}),tW={border:"0px",clip:"rect(0, 0, 0, 0)",width:"1px",height:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},tU={position:"static",width:"auto",height:"auto",clip:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal"},tH=(e,t,r)=>{let n={},a=tV(e,t,{});for(let e in a){let t=e in r&&null!=r[e];t||(n[e]=a[e])}return n},tq={position:!0,pos:tR.prop("position"),zIndex:tR.prop("zIndex","zIndices"),inset:tR.spaceT("inset"),insetX:tR.spaceT(["left","right"]),insetInline:tR.spaceT("insetInline"),insetY:tR.spaceT(["top","bottom"]),insetBlock:tR.spaceT("insetBlock"),top:tR.spaceT("top"),insetBlockStart:tR.spaceT("insetBlockStart"),bottom:tR.spaceT("bottom"),insetBlockEnd:tR.spaceT("insetBlockEnd"),left:tR.spaceT("left"),insetInlineStart:tR.logical({scale:"space",property:{ltr:"left",rtl:"right"}}),right:tR.spaceT("right"),insetInlineEnd:tR.logical({scale:"space",property:{ltr:"right",rtl:"left"}})};Object.assign(tq,{insetStart:tq.insetInlineStart,insetEnd:tq.insetInlineEnd});// src/config/ring.ts
var tX={ring:{transform:tA.ring},ringColor:tR.colors("--chakra-ring-color"),ringOffset:tR.prop("--chakra-ring-offset-width"),ringOffsetColor:tR.colors("--chakra-ring-offset-color"),ringInset:tR.prop("--chakra-ring-inset")},tY={margin:tR.spaceT("margin"),marginTop:tR.spaceT("marginTop"),marginBlockStart:tR.spaceT("marginBlockStart"),marginRight:tR.spaceT("marginRight"),marginInlineEnd:tR.spaceT("marginInlineEnd"),marginBottom:tR.spaceT("marginBottom"),marginBlockEnd:tR.spaceT("marginBlockEnd"),marginLeft:tR.spaceT("marginLeft"),marginInlineStart:tR.spaceT("marginInlineStart"),marginX:tR.spaceT(["marginInlineStart","marginInlineEnd"]),marginInline:tR.spaceT("marginInline"),marginY:tR.spaceT(["marginTop","marginBottom"]),marginBlock:tR.spaceT("marginBlock"),padding:tR.space("padding"),paddingTop:tR.space("paddingTop"),paddingBlockStart:tR.space("paddingBlockStart"),paddingRight:tR.space("paddingRight"),paddingBottom:tR.space("paddingBottom"),paddingBlockEnd:tR.space("paddingBlockEnd"),paddingLeft:tR.space("paddingLeft"),paddingInlineStart:tR.space("paddingInlineStart"),paddingInlineEnd:tR.space("paddingInlineEnd"),paddingX:tR.space(["paddingInlineStart","paddingInlineEnd"]),paddingInline:tR.space("paddingInline"),paddingY:tR.space(["paddingTop","paddingBottom"]),paddingBlock:tR.space("paddingBlock")};Object.assign(tY,{m:tY.margin,mt:tY.marginTop,mr:tY.marginRight,me:tY.marginInlineEnd,marginEnd:tY.marginInlineEnd,mb:tY.marginBottom,ml:tY.marginLeft,ms:tY.marginInlineStart,marginStart:tY.marginInlineStart,mx:tY.marginX,my:tY.marginY,p:tY.padding,pt:tY.paddingTop,py:tY.paddingY,px:tY.paddingX,pb:tY.paddingBottom,pl:tY.paddingLeft,ps:tY.paddingInlineStart,paddingStart:tY.paddingInlineStart,pr:tY.paddingRight,pe:tY.paddingInlineEnd,paddingEnd:tY.paddingInlineEnd});// src/config/text-decoration.ts
var tG={textDecorationColor:tR.colors("textDecorationColor"),textDecoration:!0,textDecor:{property:"textDecoration"},textDecorationLine:!0,textDecorationStyle:!0,textDecorationThickness:!0,textUnderlineOffset:!0,textShadow:tR.shadows("textShadow")},tQ={clipPath:!0,transform:tR.propT("transform",tA.transform),transformOrigin:!0,translateX:tR.spaceT("--chakra-translate-x"),translateY:tR.spaceT("--chakra-translate-y"),skewX:tR.degreeT("--chakra-skew-x"),skewY:tR.degreeT("--chakra-skew-y"),scaleX:tR.prop("--chakra-scale-x"),scaleY:tR.prop("--chakra-scale-y"),scale:tR.prop(["--chakra-scale-x","--chakra-scale-y"]),rotate:tR.degreeT("--chakra-rotate")},tK={transition:!0,transitionDelay:!0,animation:!0,willChange:!0,transitionDuration:tR.prop("transitionDuration","transition.duration"),transitionProperty:tR.prop("transitionProperty","transition.property"),transitionTimingFunction:tR.prop("transitionTimingFunction","transition.easing")},tZ={fontFamily:tR.prop("fontFamily","fonts"),fontSize:tR.prop("fontSize","fontSizes",tA.px),fontWeight:tR.prop("fontWeight","fontWeights"),lineHeight:tR.prop("lineHeight","lineHeights"),letterSpacing:tR.prop("letterSpacing","letterSpacings"),textAlign:!0,fontStyle:!0,textIndent:!0,wordBreak:!0,overflowWrap:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0,isTruncated:{transform(e){if(!0===e)return{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}},noOfLines:{static:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"var(--chakra-line-clamp)"},property:"--chakra-line-clamp"}},tJ={scrollBehavior:!0,scrollSnapAlign:!0,scrollSnapStop:!0,scrollSnapType:!0,scrollMargin:tR.spaceT("scrollMargin"),scrollMarginTop:tR.spaceT("scrollMarginTop"),scrollMarginBottom:tR.spaceT("scrollMarginBottom"),scrollMarginLeft:tR.spaceT("scrollMarginLeft"),scrollMarginRight:tR.spaceT("scrollMarginRight"),scrollMarginX:tR.spaceT(["scrollMarginLeft","scrollMarginRight"]),scrollMarginY:tR.spaceT(["scrollMarginTop","scrollMarginBottom"]),scrollPadding:tR.spaceT("scrollPadding"),scrollPaddingTop:tR.spaceT("scrollPaddingTop"),scrollPaddingBottom:tR.spaceT("scrollPaddingBottom"),scrollPaddingLeft:tR.spaceT("scrollPaddingLeft"),scrollPaddingRight:tR.spaceT("scrollPaddingRight"),scrollPaddingX:tR.spaceT(["scrollPaddingLeft","scrollPaddingRight"]),scrollPaddingY:tR.spaceT(["scrollPaddingTop","scrollPaddingBottom"])};function t0(e){return ts(e)&&e.reference?e.reference:String(e)}var t1=(e,...t)=>t.map(t0).join(` ${e} `).replace(/calc/g,""),t2=(...e)=>`calc(${t1("+",...e)})`,t5=(...e)=>`calc(${t1("-",...e)})`,t3=(...e)=>`calc(${t1("*",...e)})`,t4=(...e)=>`calc(${t1("/",...e)})`,t6=e=>{let t=t0(e);return null==t||Number.isNaN(parseFloat(t))?t3(t,-1):String(t).startsWith("-")?String(t).slice(1):`-${t}`},t8=Object.assign(e=>({add:(...t)=>t8(t2(e,...t)),subtract:(...t)=>t8(t5(e,...t)),multiply:(...t)=>t8(t3(e,...t)),divide:(...t)=>t8(t4(e,...t)),negate:()=>t8(t6(e)),toString:()=>e.toString()}),{add:t2,subtract:t5,multiply:t3,divide:t4,negate:t6});function t9(e,t,r){let n=function(e,t=""){return function(e){let t=// src/create-theme-vars/css-var.ts
function(e,t="-"){return e.replace(/\s+/g,t)}(e.toString());return(function(e){if(e.includes("\\."))return e;let t=!Number.isInteger(parseFloat(e.toString()));return t?e.replace(".","\\."):e})(t).replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}(`--${function(e,t=""){return[t,e].filter(Boolean).join("-")}(e,t)}`)}(e,r);return{variable:n,reference:`var(${n}${t?`, ${t}`:""})`}}function t7(e){if(null==e)return e;let{unitless:t}=function(e){let t=parseFloat(e.toString()),r=e.toString().replace(String(t),"");return{unitless:!r,value:t,unit:r}}(e);return t||"number"==typeof e?`${e}px`:e}var re=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,rt=e=>Object.fromEntries(Object.entries(e).sort(re));function rr(e){let t=rt(e);return Object.assign(Object.values(t),t)}function rn(e){var t;return e?"number"==typeof(e=null!=(t=t7(e))?t:e)?`${e+-.02}`:e.replace(/(\d+\.?\d*)/u,e=>`${parseFloat(e)+-.02}`):e}function ra(e,t){let r=["@media screen"];return e&&r.push("and",`(min-width: ${t7(e)})`),t&&r.push("and",`(max-width: ${t7(t)})`),r.join(" ")}// src/pseudos.ts
var ro={hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`},ri=e=>rs(t=>e(t,"&"),"[role=group]","[data-group]",".group"),rl=e=>rs(t=>e(t,"~ &"),"[data-peer]",".peer"),rs=(e,...t)=>t.map(e).join(", "),ru={_hover:"&:hover, &[data-hover]",_active:"&:active, &[data-active]",_focus:"&:focus, &[data-focus]",_highlighted:"&[data-highlighted]",_focusWithin:"&:focus-within",_focusVisible:"&:focus-visible, &[data-focus-visible]",_disabled:"&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",_readOnly:"&[aria-readonly=true], &[readonly], &[data-readonly]",_before:"&::before",_after:"&::after",_empty:"&:empty",_expanded:"&[aria-expanded=true], &[data-expanded]",_checked:"&[aria-checked=true], &[data-checked]",_grabbed:"&[aria-grabbed=true], &[data-grabbed]",_pressed:"&[aria-pressed=true], &[data-pressed]",_invalid:"&[aria-invalid=true], &[data-invalid]",_valid:"&[data-valid], &[data-state=valid]",_loading:"&[data-loading], &[aria-busy=true]",_selected:"&[aria-selected=true], &[data-selected]",_hidden:"&[hidden], &[data-hidden]",_autofill:"&:-webkit-autofill",_even:"&:nth-of-type(even)",_odd:"&:nth-of-type(odd)",_first:"&:first-of-type",_firstLetter:"&::first-letter",_last:"&:last-of-type",_notFirst:"&:not(:first-of-type)",_notLast:"&:not(:last-of-type)",_visited:"&:visited",_activeLink:"&[aria-current=page]",_activeStep:"&[aria-current=step]",_indeterminate:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",_groupHover:ri(ro.hover),_peerHover:rl(ro.hover),_groupFocus:ri(ro.focus),_peerFocus:rl(ro.focus),_groupFocusVisible:ri(ro.focusVisible),_peerFocusVisible:rl(ro.focusVisible),_groupActive:ri(ro.active),_peerActive:rl(ro.active),_groupDisabled:ri(ro.disabled),_peerDisabled:rl(ro.disabled),_groupInvalid:ri(ro.invalid),_peerInvalid:rl(ro.invalid),_groupChecked:ri(ro.checked),_peerChecked:rl(ro.checked),_groupFocusWithin:ri(ro.focusWithin),_peerFocusWithin:rl(ro.focusWithin),_peerPlaceholderShown:rl(ro.placeholderShown),_placeholder:"&::placeholder",_placeholderShown:"&:placeholder-shown",_fullScreen:"&:fullscreen",_selection:"&::selection",_rtl:"[dir=rtl] &, &[dir=rtl]",_ltr:"[dir=ltr] &, &[dir=ltr]",_mediaDark:"@media (prefers-color-scheme: dark)",_mediaReduceMotion:"@media (prefers-reduced-motion: reduce)",_dark:".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",_light:".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",_horizontal:"&[data-orientation=horizontal]",_vertical:"&[data-orientation=vertical]"},rc=Object.keys(ru);function rd(e,t){return t9(String(e).replace(/\./g,"-"),void 0,t)}function rf(e,t,r={}){let{stop:n,getKey:a}=r;return function e(r,o=[]){var i;if("object"==typeof r&&null!=r&&!Array.isArray(r)||Array.isArray(r)){let l={};for(let[s,u]of Object.entries(r)){let c=null!=(i=null==a?void 0:a(s))?i:s,d=[...o,c];if(null==n?void 0:n(r,d))return t(r,o);l[c]=e(u,d)}return l}return t(r,o)}(e)}// src/create-theme-vars/theme-tokens.ts
var rp=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","gradients","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur","breakpoints"],rh=e=>rc.includes(e)||"default"===e,rm=/*@__PURE__*/M(td)({},tM,tL,tF,tD,tO,t$,tX,tI,tB,{srOnly:{transform:e=>!0===e?tW:"focusable"===e?tU:{}},layerStyle:{processResult:!0,transform:(e,t,r)=>tH(t,`layerStyles.${e}`,r)},textStyle:{processResult:!0,transform:(e,t,r)=>tH(t,`textStyles.${e}`,r)},apply:{processResult:!0,transform:(e,t,r)=>tH(t,e,r)}},tq,tj,tY,tJ,tZ,tG,tQ,tN,tK);Object.keys(Object.assign({},tY,tO,tD,tB,tq));var rg=[...Object.keys(rm),...rc],rv={...rm,...ru},ry=e=>e in rv,rb=e=>t=>{if(!t.__breakpoints)return e;let{isResponsive:r,toArrayValue:n,media:a}=t.__breakpoints,o={};for(let i in e){let l=tu(e[i],t);if(null==l)continue;if(!Array.isArray(l=ts(l)&&r(l)?n(l):l)){o[i]=l;continue}let s=l.slice(0,a.length).length;for(let e=0;e<s;e+=1){let t=null==a?void 0:a[e];if(!t){o[i]=l[e];continue}o[t]=o[t]||{},null!=l[e]&&(o[t][i]=l[e])}}return o},rx=(e,t)=>e.startsWith("--")&&"string"==typeof t&&!/^var\(--.+\)$/.test(t),rk=(e,t)=>{var r,n;if(null==t)return t;let a=t=>{var r,n;return null==(n=null==(r=e.__cssMap)?void 0:r[t])?void 0:n.varRef},o=e=>{var t;return null!=(t=a(e))?t:e},[i,l]=// src/utils/split-by-comma.ts
function(e){let t=[],r="",n=!1;for(let a=0;a<e.length;a++){let o=e[a];"("===o?(n=!0,r+=o):")"===o?(n=!1,r+=o):","!==o||n?r+=o:(t.push(r),r="")}return(r=r.trim())&&t.push(r),t}(t);return t=null!=(n=null!=(r=a(i))?r:o(l))?n:o(t)},rw=e=>t=>{let r=function(e){let{configs:t={},pseudos:r={},theme:n}=e,a=(e,o=!1)=>{var i,l,s;let u=tu(e,n),c=rb(u)(n),d={};for(let e in c){let f=c[e],p=tu(f,n);e in r&&(e=r[e]),rx(e,p)&&(p=rk(n,p));let h=t[e];if(!0===h&&(h={property:e}),ts(p)){d[e]=null!=(i=d[e])?i:{},d[e]=/*@__PURE__*/M(td)({},d[e],a(p,!0));continue}let m=null!=(s=null==(l=null==h?void 0:h.transform)?void 0:l.call(h,p,n,u))?s:p;m=(null==h?void 0:h.processResult)?a(m,!0):m;let g=tu(null==h?void 0:h.property,n);if(!o&&(null==h?void 0:h.static)){let e=tu(h.static,n);d=/*@__PURE__*/M(td)({},d,e)}if(g&&Array.isArray(g)){for(let e of g)d[e]=m;continue}if(g){"&"===g&&ts(m)?d=/*@__PURE__*/M(td)({},d,m):d[g]=m;continue}if(ts(m)){d=/*@__PURE__*/M(td)({},d,m);continue}d[e]=m}return d};return a}({theme:t,pseudos:ru,configs:rm});return r(e)};function rS(e){return{definePartsStyle:e=>e,defineMultiStyleConfig:t=>({parts:e,...t})}}// src/theming-props.ts
function rC(e){return(// ../../utilities/object-utils/src/omit.ts
function(e,t=[]){let r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}(e,["styleConfig","size","variant","colorScheme"]))}// src/object.ts
var td=j("5Gn6I"),r_=(e=>{let t=/* @__PURE__ */new WeakMap;return(r,n,a,o)=>{if(void 0===r)return e(r,n,a);t.has(r)||t.set(r,/* @__PURE__ */new Map);let i=t.get(r);if(i.has(n))return i.get(n);let l=e(r,n,a,o);return i.set(n,l),l}})(function(e,t,r,n){let a="string"==typeof t?t.split("."):[t];for(n=0;n<a.length&&e;n+=1)e=e[a[n]];return void 0===e?r:e});function rE(e,t){let r={};return Object.keys(e).forEach(n=>{let a=e[n],o=t(a,n,e);o&&(r[n]=a)}),r}var rP=e=>rE(e,e=>null!=e);// src/function.ts
function rT(e,...t){return"function"==typeof e?e(...t):e}var D=j("acw62");function rz(e){let{cssVarsRoot:t,theme:r,children:n}=e,a=(0,D.useMemo)(()=>// src/create-theme-vars/to-css-var.ts
    (function(e){var t;let r=function(e){let{__cssMap:t,__cssVars:r,__breakpoints:n,...a}=e;return a}(e),n=// ../../utilities/object-utils/src/pick.ts
    function(e,t){let r={};for(let n of t)n in e&&(r[n]=e[n]);return r}(r,rp),a=r.semanticTokens,o=function({tokens:e,semanticTokens:t}){let r={};return rf(e,(e,t)=>{null!=e&&(r[t.join(".")]={isSemantic:!1,value:e})}),rf(t,(e,t)=>{null!=e&&(r[t.join(".")]={isSemantic:!0,value:e})},{stop:e=>Object.keys(e).every(rh)}),r}({tokens:n,semanticTokens:a}),i=null==(t=r.config)?void 0:t.cssVarPrefix,{cssMap:l,cssVars:s}=function(e,t){let r={},n={};for(let[a,o]of Object.entries(e)){let{isSemantic:i,value:l}=o,{variable:s,reference:u}=rd(a,null==t?void 0:t.cssVarPrefix);if(!i){if(a.startsWith("space")){let e=a.split("."),[t,...r]=e,o=`${t}.-${r.join(".")}`,i=t8.negate(l),c=t8.negate(u);n[o]={value:i,var:s,varRef:c}}r[s]=l,n[a]={value:l,var:s,varRef:u};continue}let c=r=>{let n=String(a).split(".")[0],o=[n,r].join("."),i=e[o];if(!i)return r;let{reference:l}=rd(o,null==t?void 0:t.cssVarPrefix);return l},d=ts(l)?l:{default:l};r=/*@__PURE__*/M(td)(r,Object.entries(d).reduce((e,[t,r])=>{var n;if(!r)return e;let a=c(`${r}`);if("default"===t)return e[s]=a,e;let o=null!=(n=null==ru?void 0:ru[t])?n:t;return e[o]={[s]:a},e},{})),n[a]={value:u,var:s,varRef:u}}return{cssVars:r,cssMap:n}}(o,{cssVarPrefix:i});return Object.assign(r,{__cssVars:{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0",...s},__cssMap:l,__breakpoints:function(e){var t;if(!e)return null;e.base=null!=(t=e.base)?t:"0px";let r=rr(e),n=Object.entries(e).sort(re).map(([e,t],r,n)=>{var a;let[,o]=null!=(a=n[r+1])?a:[];return o=parseFloat(o)>0?rn(o):void 0,{_minW:rn(t),breakpoint:e,minW:t,maxW:o,maxWQuery:ra(null,o),minWQuery:ra(t),minMaxQuery:ra(t,o)}}),a=function(e){let t=Object.keys(rt(e));return new Set(t)}(e),o=Array.from(a.values());return{keys:a,normalized:r,isResponsive(e){let t=Object.keys(e);return t.length>0&&t.every(e=>a.has(e))},asObject:rt(e),asArray:rr(e),details:n,get:e=>n.find(t=>t.breakpoint===e),media:[null,...r.map(e=>ra(e)).slice(1)],toArrayValue(e){if(!ts(e))throw Error("toArrayValue: value must be an object");let t=o.map(t=>{var r;return null!=(r=e[t])?r:null});for(;null===function(e){let t=null==e?0:e.length;return t?e[t-1]:void 0}(t);)t.pop();return t},toObjectValue(e){if(!Array.isArray(e))throw Error("toObjectValue: value must be an array");return e.reduce((e,t,r)=>{let n=o[r];return null!=n&&null!=t&&(e[n]=t),e},{})}}}(r.breakpoints)}),r})(r),[r]);return/* @__PURE__ */(0,$.jsxs)(eG,{theme:a,children:[/* @__PURE__ */(0,$.jsx)(rA,{root:t}),n]})}function rA({root:e=":host, :root"}){let t=[e,"[data-theme]"].join(",");return/* @__PURE__ */(0,$.jsx)(eZ,{styles:e=>({[t]:e.__cssVars})})}var[rR,rM]=function(e={}){let{strict:t=!0,errorMessage:r="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:n}=e,a=(0,D.createContext)(void 0);return a.displayName=n,[a.Provider,function e(){var n;let o=(0,D.useContext)(a);if(!o&&t){let t=Error(r);throw t.name="ContextError",null==(n=Error.captureStackTrace)||n.call(Error,t,e),t}return o},a]}({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function rL(){let{colorMode:e}=e7();return/* @__PURE__ */(0,$.jsx)(eZ,{styles:t=>{let r=r_(t,"styles.global"),n=rT(r,{theme:t,colorMode:e});if(!n)return;let a=rw(n)(t);return a}})}var D=j("acw62"),rF=(0,D.createContext)({getDocument:()=>document,getWindow:()=>window});function rj(e){let{children:t,environment:r,disabled:n}=e,a=(0,D.useRef)(null),o=(0,D.useMemo)(()=>r||{getDocument:()=>{var e,t;return null!=(t=null==(e=a.current)?void 0:e.ownerDocument)?t:document},getWindow:()=>{var e,t;return null!=(t=null==(e=a.current)?void 0:e.ownerDocument.defaultView)?t:window}},[r]),i=!n||!r;return/* @__PURE__ */(0,$.jsxs)(rF.Provider,{value:o,children:[t,i&&/* @__PURE__ */(0,$.jsx)("span",{id:"__chakra_env",hidden:!0,ref:a})]})}rF.displayName="EnvironmentContext",rj.displayName="EnvironmentProvider";var r$=e=>{let{children:t,colorModeManager:r,portalZIndex:n,resetScope:a,resetCSS:o=!0,theme:i={},environment:l,cssVarsRoot:s,disableEnvironment:u,disableGlobalStyle:c}=e,d=/* @__PURE__ */(0,$.jsx)(rj,{environment:l,disabled:u,children:t});return/* @__PURE__ */(0,$.jsx)(rz,{theme:i,cssVarsRoot:s,children:/* @__PURE__ */(0,$.jsxs)(ti,{colorModeManager:r,options:i.config,children:[o?/* @__PURE__ */(0,$.jsx)(e5,{scope:a}):/* @__PURE__ */(0,$.jsx)(e2,{}),!c&&/* @__PURE__ */(0,$.jsx)(rL,{}),n?/* @__PURE__ */(0,$.jsx)(e8,{zIndex:n,children:d}):d]})})},rD=["borders","breakpoints","colors","components","config","direction","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","space","styles","transition","zIndices"],rB={letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeights:{normal:"normal",none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},fonts:{heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'},fontSizes:{"3xs":"0.45rem","2xs":"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"}},rI={px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},rO={...rI,max:"max-content",min:"min-content",full:"100%","3xs":"14rem","2xs":"16rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem",prose:"60ch",container:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}},rN={breakpoints:{base:"0em",sm:"30em",md:"48em",lg:"62em",xl:"80em","2xl":"96em"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},radii:{none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},blur:{none:0,sm:"4px",base:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},colors:{transparent:"transparent",current:"currentColor",black:"#000000",white:"#FFFFFF",whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},gray:{50:"#F7FAFC",100:"#EDF2F7",200:"#E2E8F0",300:"#CBD5E0",400:"#A0AEC0",500:"#718096",600:"#4A5568",700:"#2D3748",800:"#1A202C",900:"#171923"},red:{50:"#FFF5F5",100:"#FED7D7",200:"#FEB2B2",300:"#FC8181",400:"#F56565",500:"#E53E3E",600:"#C53030",700:"#9B2C2C",800:"#822727",900:"#63171B"},orange:{50:"#FFFAF0",100:"#FEEBC8",200:"#FBD38D",300:"#F6AD55",400:"#ED8936",500:"#DD6B20",600:"#C05621",700:"#9C4221",800:"#7B341E",900:"#652B19"},yellow:{50:"#FFFFF0",100:"#FEFCBF",200:"#FAF089",300:"#F6E05E",400:"#ECC94B",500:"#D69E2E",600:"#B7791F",700:"#975A16",800:"#744210",900:"#5F370E"},green:{50:"#F0FFF4",100:"#C6F6D5",200:"#9AE6B4",300:"#68D391",400:"#48BB78",500:"#38A169",600:"#2F855A",700:"#276749",800:"#22543D",900:"#1C4532"},teal:{50:"#E6FFFA",100:"#B2F5EA",200:"#81E6D9",300:"#4FD1C5",400:"#38B2AC",500:"#319795",600:"#2C7A7B",700:"#285E61",800:"#234E52",900:"#1D4044"},blue:{50:"#ebf8ff",100:"#bee3f8",200:"#90cdf4",300:"#63b3ed",400:"#4299e1",500:"#3182ce",600:"#2b6cb0",700:"#2c5282",800:"#2a4365",900:"#1A365D"},cyan:{50:"#EDFDFD",100:"#C4F1F9",200:"#9DECF9",300:"#76E4F7",400:"#0BC5EA",500:"#00B5D8",600:"#00A3C4",700:"#0987A0",800:"#086F83",900:"#065666"},purple:{50:"#FAF5FF",100:"#E9D8FD",200:"#D6BCFA",300:"#B794F4",400:"#9F7AEA",500:"#805AD5",600:"#6B46C1",700:"#553C9A",800:"#44337A",900:"#322659"},pink:{50:"#FFF5F7",100:"#FED7E2",200:"#FBB6CE",300:"#F687B3",400:"#ED64A6",500:"#D53F8C",600:"#B83280",700:"#97266D",800:"#702459",900:"#521B41"},linkedin:{50:"#E8F4F9",100:"#CFEDFB",200:"#9BDAF3",300:"#68C7EC",400:"#34B3E4",500:"#00A0DC",600:"#008CC9",700:"#0077B5",800:"#005E93",900:"#004471"},facebook:{50:"#E8F4F9",100:"#D9DEE9",200:"#B7C2DA",300:"#6482C0",400:"#4267B2",500:"#385898",600:"#314E89",700:"#29487D",800:"#223B67",900:"#1E355B"},messenger:{50:"#D0E6FF",100:"#B9DAFF",200:"#A2CDFF",300:"#7AB8FF",400:"#2E90FF",500:"#0078FF",600:"#0063D1",700:"#0052AC",800:"#003C7E",900:"#002C5C"},whatsapp:{50:"#dffeec",100:"#b9f5d0",200:"#90edb3",300:"#65e495",400:"#3cdd78",500:"#22c35e",600:"#179848",700:"#0c6c33",800:"#01421c",900:"#001803"},twitter:{50:"#E5F4FD",100:"#C8E9FB",200:"#A8DCFA",300:"#83CDF7",400:"#57BBF5",500:"#1DA1F2",600:"#1A94DA",700:"#1681BF",800:"#136B9E",900:"#0D4D71"},telegram:{50:"#E3F2F9",100:"#C5E4F3",200:"#A2D4EC",300:"#7AC1E4",400:"#47A9DA",500:"#0088CC",600:"#007AB8",700:"#006BA1",800:"#005885",900:"#003F5E"}},...rB,sizes:rO,shadows:{xs:"0 0 0 1px rgba(0, 0, 0, 0.05)",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",outline:"0 0 0 3px rgba(66, 153, 225, 0.6)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none","dark-lg":"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"},space:rI,borders:{none:0,"1px":"1px solid","2px":"2px solid","4px":"4px solid","8px":"8px solid"},transition:{property:{common:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",colors:"background-color, border-color, color, fill, stroke",dimensions:"width, height",position:"left, right, top, bottom",background:"background-color, background-image, background-position"},easing:{"ease-in":"cubic-bezier(0.4, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.2, 1)","ease-in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},duration:{"ultra-fast":"50ms",faster:"100ms",fast:"150ms",normal:"200ms",slow:"300ms",slower:"400ms","ultra-slow":"500ms"}}},{defineMultiStyleConfig:rV,definePartsStyle:rW}=rS(["stepper","step","title","description","indicator","separator","icon","number"]),rU=t9("stepper-indicator-size"),rH=t9("stepper-icon-size"),rq=t9("stepper-title-font-size"),rX=t9("stepper-description-font-size"),rY=t9("stepper-accent-color"),rG=rV({baseStyle:rW(({colorScheme:e})=>({stepper:{display:"flex",justifyContent:"space-between",gap:"4","&[data-orientation=vertical]":{flexDirection:"column",alignItems:"flex-start"},"&[data-orientation=horizontal]":{flexDirection:"row",alignItems:"center"},[rY.variable]:`colors.${e}.500`,_dark:{[rY.variable]:`colors.${e}.200`}},title:{fontSize:rq.reference,fontWeight:"medium"},description:{fontSize:rX.reference,color:"chakra-subtle-text"},number:{fontSize:rq.reference},step:{flexShrink:0,position:"relative",display:"flex",gap:"2","&[data-orientation=horizontal]":{alignItems:"center"},flex:"1","&:last-of-type:not([data-stretch])":{flex:"initial"}},icon:{flexShrink:0,width:rH.reference,height:rH.reference},indicator:{flexShrink:0,borderRadius:"full",width:rU.reference,height:rU.reference,display:"flex",justifyContent:"center",alignItems:"center","&[data-status=active]":{borderWidth:"2px",borderColor:rY.reference},"&[data-status=complete]":{bg:rY.reference,color:"chakra-inverse-text"},"&[data-status=incomplete]":{borderWidth:"2px"}},separator:{bg:"chakra-border-color",flex:"1","&[data-status=complete]":{bg:rY.reference},"&[data-orientation=horizontal]":{width:"100%",height:"2px",marginStart:"2"},"&[data-orientation=vertical]":{width:"2px",position:"absolute",height:"100%",maxHeight:`calc(100% - ${rU.reference} - 8px)`,top:`calc(${rU.reference} + 4px)`,insetStart:`calc(${rU.reference} / 2 - 1px)`}}})),sizes:{xs:rW({stepper:{[rU.variable]:"sizes.4",[rH.variable]:"sizes.3",[rq.variable]:"fontSizes.xs",[rX.variable]:"fontSizes.xs"}}),sm:rW({stepper:{[rU.variable]:"sizes.6",[rH.variable]:"sizes.4",[rq.variable]:"fontSizes.sm",[rX.variable]:"fontSizes.xs"}}),md:rW({stepper:{[rU.variable]:"sizes.8",[rH.variable]:"sizes.5",[rq.variable]:"fontSizes.md",[rX.variable]:"fontSizes.sm"}}),lg:rW({stepper:{[rU.variable]:"sizes.10",[rH.variable]:"sizes.6",[rq.variable]:"fontSizes.lg",[rX.variable]:"fontSizes.md"}})},defaultProps:{size:"md",colorScheme:"blue"}});// src/components/switch.ts
// src/anatomy.ts
function rQ(e,t={}){let r=!1;function n(t){let r=["container","root"].includes(null!=t?t:"")?[e]:[e,t],n=r.filter(Boolean).join("__"),a=`chakra-${n}`,o={className:a,selector:`.${a}`,toString:()=>t};return o}return{parts:function(...a){for(let e of(!function(){if(!r){r=!0;return}throw Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")}(),a))t[e]=n(e);return rQ(e,t)},toPart:n,extend:function(...r){for(let e of r)e in t||(t[e]=n(e));return rQ(e,t)},selectors:function(){let e=Object.fromEntries(Object.entries(t).map(([e,t])=>[e,t.selector]));return e},classnames:function(){let e=Object.fromEntries(Object.entries(t).map(([e,t])=>[e,t.className]));return e},get keys(){return Object.keys(t)},__type:{}}}// src/components.ts
var rK=rQ("accordion").parts("root","container","button","panel").extend("icon"),rZ=rQ("alert").parts("title","description","container").extend("icon","spinner"),rJ=rQ("avatar").parts("label","badge","container").extend("excessLabel","group"),r0=rQ("breadcrumb").parts("link","item","container").extend("separator");rQ("button").parts();var r1=rQ("checkbox").parts("control","icon","container").extend("label");rQ("progress").parts("track","filledTrack").extend("label");var r2=rQ("drawer").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),r5=rQ("editable").parts("preview","input","textarea"),r3=rQ("form").parts("container","requiredIndicator","helperText"),r4=rQ("formError").parts("text","icon"),r6=rQ("input").parts("addon","field","element","group"),r8=rQ("list").parts("container","item","icon"),r9=rQ("menu").parts("button","list","item").extend("groupTitle","icon","command","divider"),r7=rQ("modal").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),ne=rQ("numberinput").parts("root","field","stepperGroup","stepper");rQ("pininput").parts("field");var nt=rQ("popover").parts("content","header","body","footer").extend("popper","arrow","closeButton"),nr=rQ("progress").parts("label","filledTrack","track"),nn=rQ("radio").parts("container","control","label"),na=rQ("select").parts("field","icon"),no=rQ("slider").parts("container","track","thumb","filledTrack","mark"),ni=rQ("stat").parts("container","label","helpText","number","icon"),nl=rQ("switch").parts("container","track","thumb"),ns=rQ("table").parts("table","thead","tbody","tr","th","td","tfoot","caption"),nu=rQ("tabs").parts("root","tab","tablist","tabpanel","tabpanels","indicator"),nc=rQ("tag").parts("container","label","closeButton"),nd=rQ("card").parts("container","header","body","footer");// src/css-calc.ts
function nf(e){return ts(e)&&e.reference?e.reference:String(e)}var np=(e,...t)=>t.map(nf).join(` ${e} `).replace(/calc/g,""),nh=(...e)=>`calc(${np("+",...e)})`,nm=(...e)=>`calc(${np("-",...e)})`,ng=(...e)=>`calc(${np("*",...e)})`,nv=(...e)=>`calc(${np("/",...e)})`,ny=e=>{let t=nf(e);return null==t||Number.isNaN(parseFloat(t))?ng(t,-1):String(t).startsWith("-")?String(t).slice(1):`-${t}`},nb=Object.assign(e=>({add:(...t)=>nb(nh(e,...t)),subtract:(...t)=>nb(nm(e,...t)),multiply:(...t)=>nb(ng(e,...t)),divide:(...t)=>nb(nv(e,...t)),negate:()=>nb(ny(e)),toString:()=>e.toString()}),{add:nh,subtract:nm,multiply:ng,divide:nv,negate:ny});function nx(e){let t=function(e,t="-"){return e.replace(/\s+/g,t)}(e.toString());return t.includes("\\.")?e:Number.isInteger(parseFloat(e.toString()))?e:t.replace(".","\\.")}function nk(e,t){var r,n;let a=function(e,t=""){return`--${function(e,t=""){return[t,nx(e)].filter(Boolean).join("-")}(e,t)}`}(e,null==t?void 0:t.prefix);return{variable:a,reference:(r="string"==typeof(n=null==t?void 0:t.fallback)?n:null==n?void 0:n.reference,`var(${nx(a)}${r?`, ${r}`:""})`)}}var{defineMultiStyleConfig:nw,definePartsStyle:nS}=rS(nl.keys),nC=nk("switch-track-width"),n_=nk("switch-track-height"),nE=nk("switch-track-diff"),nP=nb.subtract(nC,n_),nT=nk("switch-thumb-x"),nz=nk("switch-bg"),nA=e=>{let{colorScheme:t}=e;return{borderRadius:"full",p:"0.5",width:[nC.reference],height:[n_.reference],transitionProperty:"common",transitionDuration:"fast",[nz.variable]:"colors.gray.300",_dark:{[nz.variable]:"colors.whiteAlpha.400"},_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed"},_checked:{[nz.variable]:`colors.${t}.500`,_dark:{[nz.variable]:`colors.${t}.200`}},bg:nz.reference}},nR={bg:"white",transitionProperty:"transform",transitionDuration:"normal",borderRadius:"inherit",width:[n_.reference],height:[n_.reference],_checked:{transform:`translateX(${nT.reference})`}},nM=nw({baseStyle:nS(e=>({container:{[nE.variable]:nP,[nT.variable]:nE.reference,_rtl:{[nT.variable]:nb(nE).negate().toString()}},track:nA(e),thumb:nR})),sizes:{sm:nS({container:{[nC.variable]:"1.375rem",[n_.variable]:"sizes.3"}}),md:nS({container:{[nC.variable]:"1.875rem",[n_.variable]:"sizes.4"}}),lg:nS({container:{[nC.variable]:"2.875rem",[n_.variable]:"sizes.6"}})},defaultProps:{size:"md",colorScheme:"blue"}});// src/components/table.ts
// src/component.ts
function nL(e,t){return r=>"dark"===r.colorMode?t:e}function nF(e){let{orientation:t,vertical:r,horizontal:n}=e;return t?"vertical"===t?r:n:{}}var{defineMultiStyleConfig:nj,definePartsStyle:n$}=rS(ns.keys),nD=n$({table:{fontVariantNumeric:"lining-nums tabular-nums",borderCollapse:"collapse",width:"full"},th:{fontFamily:"heading",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"wider",textAlign:"start"},td:{textAlign:"start"},caption:{mt:4,fontFamily:"heading",textAlign:"center",fontWeight:"medium"}}),nB={"&[data-is-numeric=true]":{textAlign:"end"}},nI=nj({baseStyle:nD,variants:{simple:n$(e=>{let{colorScheme:t}=e;return{th:{color:nL("gray.600","gray.400")(e),borderBottom:"1px",borderColor:nL(`${t}.100`,`${t}.700`)(e),...nB},td:{borderBottom:"1px",borderColor:nL(`${t}.100`,`${t}.700`)(e),...nB},caption:{color:nL("gray.600","gray.100")(e)},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),striped:n$(e=>{let{colorScheme:t}=e;return{th:{color:nL("gray.600","gray.400")(e),borderBottom:"1px",borderColor:nL(`${t}.100`,`${t}.700`)(e),...nB},td:{borderBottom:"1px",borderColor:nL(`${t}.100`,`${t}.700`)(e),...nB},caption:{color:nL("gray.600","gray.100")(e)},tbody:{tr:{"&:nth-of-type(odd)":{"th, td":{borderBottomWidth:"1px",borderColor:nL(`${t}.100`,`${t}.700`)(e)},td:{background:nL(`${t}.100`,`${t}.700`)(e)}}}},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),unstyled:{}},sizes:{sm:n$({th:{px:"4",py:"1",lineHeight:"4",fontSize:"xs"},td:{px:"4",py:"2",fontSize:"sm",lineHeight:"4"},caption:{px:"4",py:"2",fontSize:"xs"}}),md:n$({th:{px:"6",py:"3",lineHeight:"4",fontSize:"xs"},td:{px:"6",py:"4",lineHeight:"5"},caption:{px:"6",py:"2",fontSize:"sm"}}),lg:n$({th:{px:"8",py:"4",lineHeight:"5",fontSize:"sm"},td:{px:"8",py:"5",lineHeight:"6"},caption:{px:"6",py:"2",fontSize:"md"}})},defaultProps:{variant:"simple",size:"md",colorScheme:"gray"}});// src/components/tabs.ts
// src/color.ts
/**
 * A simple guard function:
 *
 * ```js
 * Math.min(Math.max(low, value), high)
 * ```
 */function nO(e,t,r){return Math.min(Math.max(e,r),t)}var nN=class extends Error{constructor(e){super(`Failed to parse color: "${e}"`)}};/**
 * Parses a color into red, gree, blue, alpha parts
 *
 * @param color the input color. Can be a RGB, RBGA, HSL, HSLA, or named color
 */function nV(e){if("string"!=typeof e)throw new nN(e);if("transparent"===e.trim().toLowerCase())return[0,0,0,0];let t=e.trim();t=nQ.test(e)?/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 */function(e){let t=e.toLowerCase().trim(),r=nU[function(e){let t=5381,r=e.length;for(;r;)t=33*t^e.charCodeAt(--r);/* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */return(t>>>0)%2341}(t)];if(!r)throw new nN(e);return`#${r}`}(e):e;let r=nq.exec(t);if(r){let e=Array.from(r).slice(1);return[...e.slice(0,3).map(e=>parseInt(nH(e,2),16)),parseInt(nH(e[3]||"f",2),16)/255]}let n=nX.exec(t);if(n){let e=Array.from(n).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,16)),parseInt(e[3]||"ff",16)/255]}let a=nY.exec(t);if(a){let e=Array.from(a).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,10)),parseFloat(e[3]||"1")]}let o=nG.exec(t);if(o){let[t,r,n,a]=Array.from(o).slice(1).map(parseFloat);if(nO(0,100,r)!==r||nO(0,100,n)!==n)throw new nN(e);return[...nZ(t,r,n),Number.isNaN(a)?1:a]}throw new nN(e)}const nW=e=>parseInt(e.replace(/_/g,""),36),nU="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{let r=nW(t.substring(0,3)),n=nW(t.substring(3)).toString(16),a="";for(let e=0;e<6-n.length;e++)a+="0";return e[r]=`${a}${n}`,e},{}),nH=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),nq=RegExp(`^#${nH("([a-f0-9])",3)}([a-f0-9])?$`,"i"),nX=RegExp(`^#${nH("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),nY=RegExp(`^rgba?\\(\\s*(\\d+)\\s*${nH(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),nG=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,nQ=/^[a-z]+$/i,nK=e=>Math.round(255*e),nZ=(e,t,r)=>{let n=r/100;if(0===t)return[n,n,n].map(nK);// formulae from https://en.wikipedia.org/wiki/HSL_and_HSV
let a=(e%360+360)%360/60,o=(1-Math.abs(2*n-1))*(t/100),i=o*(1-Math.abs(a%2-1)),l=0,s=0,u=0;a>=0&&a<1?(l=o,s=i):a>=1&&a<2?(l=i,s=o):a>=2&&a<3?(s=o,u=i):a>=3&&a<4?(s=i,u=o):a>=4&&a<5?(l=i,u=o):a>=5&&a<6&&(l=o,u=i);let c=n-o/2,d=l+c,f=s+c,p=u+c;return[d,f,p].map(nK)};// src/color.ts
var nJ=e=>0===Object.keys(e).length,n0=(e,t,r)=>{let n=// ../../../node_modules/.pnpm/dlv@1.1.3/node_modules/dlv/dist/dlv.es.js
function(e,t,r,n,a){for(t=t.split?t.split("."):t,n=0;n<t.length;n++)e=e?e[t[n]]:a;return e===a?r:e}(e,`colors.${t}`,t);try{return!/**
 * Takes in any color and returns it as a hex code.
 */function(e){let[t,r,n,a]=nV(e),o=e=>{let t=nO(0,255,e).toString(16);// NOTE: padStart could be used here but it breaks Node 6 compat
// https://github.com/ricokahler/color2k/issues/351
return 1===t.length?`0${t}`:t};o(t),o(r),o(n),a<1&&o(Math.round(255*a))}(n),n}catch{return null!=r?r:"#000000"}},n1=e=>{let[t,r,n]=nV(e);return(299*t+587*r+114*n)/1e3},n2=e=>t=>{let r=n0(t,e),n=n1(r);return n<128?"dark":"light"},n5=e=>t=>"dark"===n2(e)(t),n3=(e,t)=>r=>{let n=n0(r,e);return(/**
 * Takes in a color and makes it more transparent by convert to `rgba` and
 * decreasing the amount in the alpha channel.
 *
 * @param amount The amount to increase the transparency by, given as a decimal between 0 and 1
 */function(e,t){let[r,n,a,o]=nV(e);return`rgba(${nO(0,255,r).toFixed()}, ${nO(0,255,n).toFixed()}, ${nO(0,255,a).toFixed()}, ${parseFloat(nO(0,1,o-t).toFixed(3))})`}(n,1-t))};function n4(e="1rem",t="rgba(255, 255, 255, 0.15)"){return{backgroundImage:`linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,backgroundSize:`${e} ${e}`}}var n6=()=>`#${Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0")}`,n8=t9("tabs-color"),n9=t9("tabs-bg"),n7=t9("tabs-border-color"),{defineMultiStyleConfig:ae,definePartsStyle:at}=rS(nu.keys),ar=e=>{let{orientation:t}=e;return{display:"vertical"===t?"flex":"block"}},an=e=>{let{isFitted:t}=e;return{flex:t?1:void 0,transitionProperty:"common",transitionDuration:"normal",_focusVisible:{zIndex:1,boxShadow:"outline"},_disabled:{cursor:"not-allowed",opacity:.4}}},aa=e=>{let{align:t="start",orientation:r}=e;return{justifyContent:({end:"flex-end",center:"center",start:"flex-start"})[t],flexDirection:"vertical"===r?"column":"row"}},ao={p:4},ai=ae({baseStyle:at(e=>({root:ar(e),tab:an(e),tablist:aa(e),tabpanel:ao})),sizes:{sm:at({tab:{py:1,px:4,fontSize:"sm"}}),md:at({tab:{fontSize:"md",py:2,px:4}}),lg:at({tab:{fontSize:"lg",py:3,px:4}})},variants:{line:at(e=>{let{colorScheme:t,orientation:r}=e,n="vertical"===r,a=n?"borderStart":"borderBottom";return{tablist:{[a]:"2px solid",borderColor:"inherit"},tab:{[a]:"2px solid",borderColor:"transparent",[n?"marginStart":"marginBottom"]:"-2px",_selected:{[n8.variable]:`colors.${t}.600`,_dark:{[n8.variable]:`colors.${t}.300`},borderColor:"currentColor"},_active:{[n9.variable]:"colors.gray.200",_dark:{[n9.variable]:"colors.whiteAlpha.300"}},_disabled:{_active:{bg:"none"}},color:n8.reference,bg:n9.reference}}}),enclosed:at(e=>{let{colorScheme:t}=e;return{tab:{borderTopRadius:"md",border:"1px solid",borderColor:"transparent",mb:"-1px",[n7.variable]:"transparent",_selected:{[n8.variable]:`colors.${t}.600`,[n7.variable]:"colors.white",_dark:{[n8.variable]:`colors.${t}.300`,[n7.variable]:"colors.gray.800"},borderColor:"inherit",borderBottomColor:n7.reference},color:n8.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),"enclosed-colored":at(e=>{let{colorScheme:t}=e;return{tab:{border:"1px solid",borderColor:"inherit",[n9.variable]:"colors.gray.50",_dark:{[n9.variable]:"colors.whiteAlpha.50"},mb:"-1px",_notLast:{marginEnd:"-1px"},_selected:{[n9.variable]:"colors.white",[n8.variable]:`colors.${t}.600`,_dark:{[n9.variable]:"colors.gray.800",[n8.variable]:`colors.${t}.300`},borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"},color:n8.reference,bg:n9.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),"soft-rounded":at(e=>{let{colorScheme:t,theme:r}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:n0(r,`${t}.700`),bg:n0(r,`${t}.100`)}}}}),"solid-rounded":at(e=>{let{colorScheme:t}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",[n8.variable]:"colors.gray.600",_dark:{[n8.variable]:"inherit"},_selected:{[n8.variable]:"colors.white",[n9.variable]:`colors.${t}.600`,_dark:{[n8.variable]:"colors.gray.800",[n9.variable]:`colors.${t}.300`}},color:n8.reference,bg:n9.reference}}}),unstyled:at({})},defaultProps:{size:"md",variant:"line",colorScheme:"blue"}}),al=function(e,t){let r={};for(let n of t){if(Array.isArray(n)){let[t,a]=n;r[t]=t9(`${e}-${t}`,a);continue}r[n]=t9(`${e}-${n}`)}return r}("badge",["bg","color","shadow"]),as={baseStyle:{px:1,textTransform:"uppercase",fontSize:"xs",borderRadius:"sm",fontWeight:"bold",bg:al.bg.reference,color:al.color.reference,boxShadow:al.shadow.reference},variants:{solid:e=>{let{colorScheme:t,theme:r}=e,n=n3(`${t}.500`,.6)(r);return{[al.bg.variable]:`colors.${t}.500`,[al.color.variable]:"colors.white",_dark:{[al.bg.variable]:n,[al.color.variable]:"colors.whiteAlpha.800"}}},subtle:e=>{let{colorScheme:t,theme:r}=e,n=n3(`${t}.200`,.16)(r);return{[al.bg.variable]:`colors.${t}.100`,[al.color.variable]:`colors.${t}.800`,_dark:{[al.bg.variable]:n,[al.color.variable]:`colors.${t}.200`}}},outline:e=>{let{colorScheme:t,theme:r}=e,n=n3(`${t}.200`,.8)(r);return{[al.color.variable]:`colors.${t}.500`,_dark:{[al.color.variable]:n},[al.shadow.variable]:`inset 0 0 0px 1px ${al.color.reference}`}}},defaultProps:{variant:"subtle",colorScheme:"gray"}},{defineMultiStyleConfig:au,definePartsStyle:ac}=rS(nc.keys),ad=t9("tag-bg"),af=t9("tag-color"),ap=t9("tag-shadow"),ah=t9("tag-min-height"),am=t9("tag-min-width"),ag=t9("tag-font-size"),av=t9("tag-padding-inline"),ay=ac({container:{fontWeight:"medium",lineHeight:1.2,outline:0,[af.variable]:al.color.reference,[ad.variable]:al.bg.reference,[ap.variable]:al.shadow.reference,color:af.reference,bg:ad.reference,boxShadow:ap.reference,borderRadius:"md",minH:ah.reference,minW:am.reference,fontSize:ag.reference,px:av.reference,_focusVisible:{[ap.variable]:"shadows.outline"}},label:{lineHeight:1.2,overflow:"visible"},closeButton:{fontSize:"lg",w:"5",h:"5",transitionProperty:"common",transitionDuration:"normal",borderRadius:"full",marginStart:"1.5",marginEnd:"-1",opacity:.5,_disabled:{opacity:.4},_focusVisible:{boxShadow:"outline",bg:"rgba(0, 0, 0, 0.14)"},_hover:{opacity:.8},_active:{opacity:1}}}),ab={sm:ac({container:{[ah.variable]:"sizes.5",[am.variable]:"sizes.5",[ag.variable]:"fontSizes.xs",[av.variable]:"space.2"},closeButton:{marginEnd:"-2px",marginStart:"0.35rem"}}),md:ac({container:{[ah.variable]:"sizes.6",[am.variable]:"sizes.6",[ag.variable]:"fontSizes.sm",[av.variable]:"space.2"}}),lg:ac({container:{[ah.variable]:"sizes.8",[am.variable]:"sizes.8",[ag.variable]:"fontSizes.md",[av.variable]:"space.3"}})},ax=au({variants:{subtle:ac(e=>{var t;return{container:null==(t=as.variants)?void 0:t.subtle(e)}}),solid:ac(e=>{var t;return{container:null==(t=as.variants)?void 0:t.solid(e)}}),outline:ac(e=>{var t;return{container:null==(t=as.variants)?void 0:t.outline(e)}})},baseStyle:ay,sizes:ab,defaultProps:{size:"md",variant:"subtle",colorScheme:"gray"}}),{definePartsStyle:ak,defineMultiStyleConfig:aw}=rS(r6.keys),aS=t9("input-height"),aC=t9("input-font-size"),a_=t9("input-padding"),aE=t9("input-border-radius"),aP=ak({addon:{height:aS.reference,fontSize:aC.reference,px:a_.reference,borderRadius:aE.reference},field:{width:"100%",height:aS.reference,fontSize:aC.reference,px:a_.reference,borderRadius:aE.reference,minWidth:0,outline:0,position:"relative",appearance:"none",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed"}}}),aT={lg:{[aC.variable]:"fontSizes.lg",[a_.variable]:"space.4",[aE.variable]:"radii.md",[aS.variable]:"sizes.12"},md:{[aC.variable]:"fontSizes.md",[a_.variable]:"space.4",[aE.variable]:"radii.md",[aS.variable]:"sizes.10"},sm:{[aC.variable]:"fontSizes.sm",[a_.variable]:"space.3",[aE.variable]:"radii.sm",[aS.variable]:"sizes.8"},xs:{[aC.variable]:"fontSizes.xs",[a_.variable]:"space.2",[aE.variable]:"radii.sm",[aS.variable]:"sizes.6"}};function az(e){let{focusBorderColor:t,errorBorderColor:r}=e;return{focusBorderColor:t||nL("blue.500","blue.300")(e),errorBorderColor:r||nL("red.500","red.300")(e)}}var aA=aw({baseStyle:aP,sizes:{lg:ak({field:aT.lg,group:aT.lg}),md:ak({field:aT.md,group:aT.md}),sm:ak({field:aT.sm,group:aT.sm}),xs:ak({field:aT.xs,group:aT.xs})},variants:{outline:ak(e=>{let{theme:t}=e,{focusBorderColor:r,errorBorderColor:n}=az(e);return{field:{border:"1px solid",borderColor:"inherit",bg:"inherit",_hover:{borderColor:nL("gray.300","whiteAlpha.400")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:n0(t,n),boxShadow:`0 0 0 1px ${n0(t,n)}`},_focusVisible:{zIndex:1,borderColor:n0(t,r),boxShadow:`0 0 0 1px ${n0(t,r)}`}},addon:{border:"1px solid",borderColor:nL("inherit","whiteAlpha.50")(e),bg:nL("gray.100","whiteAlpha.300")(e)}}}),filled:ak(e=>{let{theme:t}=e,{focusBorderColor:r,errorBorderColor:n}=az(e);return{field:{border:"2px solid",borderColor:"transparent",bg:nL("gray.100","whiteAlpha.50")(e),_hover:{bg:nL("gray.200","whiteAlpha.100")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:n0(t,n)},_focusVisible:{bg:"transparent",borderColor:n0(t,r)}},addon:{border:"2px solid",borderColor:"transparent",bg:nL("gray.100","whiteAlpha.50")(e)}}}),flushed:ak(e=>{let{theme:t}=e,{focusBorderColor:r,errorBorderColor:n}=az(e);return{field:{borderBottom:"1px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent",_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:n0(t,n),boxShadow:`0px 1px 0px 0px ${n0(t,n)}`},_focusVisible:{borderColor:n0(t,r),boxShadow:`0px 1px 0px 0px ${n0(t,r)}`}},addon:{borderBottom:"2px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent"}}}),unstyled:ak({field:{bg:"transparent",px:"0",height:"auto"},addon:{bg:"transparent",px:"0",height:"auto"}})},defaultProps:{size:"md",variant:"outline"}}),aR={...null==(o=aA.baseStyle)?void 0:o.field,paddingY:"2",minHeight:"20",lineHeight:"short",verticalAlign:"top"},aM={outline:e=>{var t,r;return null!=(r=null==(t=aA.variants)?void 0:t.outline(e).field)?r:{}},flushed:e=>{var t,r;return null!=(r=null==(t=aA.variants)?void 0:t.flushed(e).field)?r:{}},filled:e=>{var t,r;return null!=(r=null==(t=aA.variants)?void 0:t.filled(e).field)?r:{}},unstyled:null!=(l=null==(i=aA.variants)?void 0:i.unstyled.field)?l:{}},aL={xs:null!=(u=null==(s=aA.sizes)?void 0:s.xs.field)?u:{},sm:null!=(d=null==(c=aA.sizes)?void 0:c.sm.field)?d:{},md:null!=(p=null==(f=aA.sizes)?void 0:f.md.field)?p:{},lg:null!=(m=null==(h=aA.sizes)?void 0:h.lg.field)?m:{}},aF=nk("tooltip-bg"),aj=nk("tooltip-fg"),a$=nk("popper-arrow-bg"),aD={bg:aF.reference,color:aj.reference,[aF.variable]:"colors.gray.700",[aj.variable]:"colors.whiteAlpha.900",_dark:{[aF.variable]:"colors.gray.300",[aj.variable]:"colors.gray.900"},[a$.variable]:aF.reference,px:"2",py:"0.5",borderRadius:"sm",fontWeight:"medium",fontSize:"sm",boxShadow:"md",maxW:"xs",zIndex:"tooltip"},{defineMultiStyleConfig:aB,definePartsStyle:aI}=rS(nr.keys),aO=e=>{let{colorScheme:t,theme:r,isIndeterminate:n,hasStripe:a}=e,o=nL(n4(),n4("1rem","rgba(0,0,0,0.1)"))(e),i=nL(`${t}.500`,`${t}.200`)(e),l=`linear-gradient(
    to right,
    transparent 0%,
    ${n0(r,i)} 50%,
    transparent 100%
  )`;return{...!n&&a&&o,...n?{bgImage:l}:{bgColor:i}}},aN={lineHeight:"1",fontSize:"0.25em",fontWeight:"bold",color:"white"},aV=e=>({bg:nL("gray.100","whiteAlpha.300")(e)}),aW=e=>({transitionProperty:"common",transitionDuration:"slow",...aO(e)}),aU=aI(e=>({label:aN,filledTrack:aW(e),track:aV(e)})),aH=aB({sizes:{xs:aI({track:{h:"1"}}),sm:aI({track:{h:"2"}}),md:aI({track:{h:"3"}}),lg:aI({track:{h:"4"}})},baseStyle:aU,defaultProps:{size:"md",colorScheme:"blue"}}),aq=e=>"function"==typeof e;function aX(e,...t){return aq(e)?e(...t):e}var{definePartsStyle:aY,defineMultiStyleConfig:aG}=rS(r1.keys),aQ=t9("checkbox-size"),aK=e=>{let{colorScheme:t}=e;return{w:aQ.reference,h:aQ.reference,transitionProperty:"box-shadow",transitionDuration:"normal",border:"2px solid",borderRadius:"sm",borderColor:"inherit",color:"white",_checked:{bg:nL(`${t}.500`,`${t}.200`)(e),borderColor:nL(`${t}.500`,`${t}.200`)(e),color:nL("white","gray.900")(e),_hover:{bg:nL(`${t}.600`,`${t}.300`)(e),borderColor:nL(`${t}.600`,`${t}.300`)(e)},_disabled:{borderColor:nL("gray.200","transparent")(e),bg:nL("gray.200","whiteAlpha.300")(e),color:nL("gray.500","whiteAlpha.500")(e)}},_indeterminate:{bg:nL(`${t}.500`,`${t}.200`)(e),borderColor:nL(`${t}.500`,`${t}.200`)(e),color:nL("white","gray.900")(e)},_disabled:{bg:nL("gray.100","whiteAlpha.100")(e),borderColor:nL("gray.100","transparent")(e)},_focusVisible:{boxShadow:"outline"},_invalid:{borderColor:nL("red.500","red.300")(e)}}},aZ={_disabled:{cursor:"not-allowed"}},aJ={userSelect:"none",_disabled:{opacity:.4}},a0={transitionProperty:"transform",transitionDuration:"normal"},a1=aG({baseStyle:aY(e=>({icon:a0,container:aZ,control:aX(aK,e),label:aJ})),sizes:{sm:aY({control:{[aQ.variable]:"sizes.3"},label:{fontSize:"sm"},icon:{fontSize:"3xs"}}),md:aY({control:{[aQ.variable]:"sizes.4"},label:{fontSize:"md"},icon:{fontSize:"2xs"}}),lg:aY({control:{[aQ.variable]:"sizes.5"},label:{fontSize:"lg"},icon:{fontSize:"2xs"}})},defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:a2,definePartsStyle:a5}=rS(nn.keys),a3=e=>{var t;let r=null==(t=aX(a1.baseStyle,e))?void 0:t.control;return{...r,borderRadius:"full",_checked:{...null==r?void 0:r._checked,_before:{content:'""',display:"inline-block",pos:"relative",w:"50%",h:"50%",borderRadius:"50%",bg:"currentColor"}}}},a4=a2({baseStyle:a5(e=>{var t,r;return{label:null==(t=a1.baseStyle)?void 0:t.call(a1,e).label,container:null==(r=a1.baseStyle)?void 0:r.call(a1,e).container,control:a3(e)}}),sizes:{md:a5({control:{w:"4",h:"4"},label:{fontSize:"md"}}),lg:a5({control:{w:"5",h:"5"},label:{fontSize:"lg"}}),sm:a5({control:{width:"3",height:"3"},label:{fontSize:"sm"}})},defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:a6,definePartsStyle:a8}=rS(na.keys),a9=t9("select-bg"),a7=a8({field:{...null==(g=aA.baseStyle)?void 0:g.field,appearance:"none",paddingBottom:"1px",lineHeight:"normal",bg:a9.reference,[a9.variable]:"colors.white",_dark:{[a9.variable]:"colors.gray.700"},"> option, > optgroup":{bg:a9.reference}},icon:{width:"6",height:"100%",insetEnd:"2",position:"relative",color:"currentColor",fontSize:"xl",_disabled:{opacity:.5}}}),oe={paddingInlineEnd:"8"},ot=a6({baseStyle:a7,sizes:{lg:{...null==(v=aA.sizes)?void 0:v.lg,field:{...null==(y=aA.sizes)?void 0:y.lg.field,...oe}},md:{...null==(b=aA.sizes)?void 0:b.md,field:{...null==(x=aA.sizes)?void 0:x.md.field,...oe}},sm:{...null==(k=aA.sizes)?void 0:k.sm,field:{...null==(w=aA.sizes)?void 0:w.sm.field,...oe}},xs:{...null==(S=aA.sizes)?void 0:S.xs,field:{...null==(C=aA.sizes)?void 0:C.xs.field,...oe},icon:{insetEnd:"1"}}},variants:aA.variants,defaultProps:aA.defaultProps}),or=t9("skeleton-start-color"),on=t9("skeleton-end-color"),oa={[or.variable]:"colors.gray.100",[on.variable]:"colors.gray.400",_dark:{[or.variable]:"colors.gray.800",[on.variable]:"colors.gray.600"},background:or.reference,borderColor:on.reference,opacity:.7,borderRadius:"sm"},oo=t9("skip-link-bg"),oi={borderRadius:"md",fontWeight:"semibold",_focusVisible:{boxShadow:"outline",padding:"4",position:"fixed",top:"6",insetStart:"6",[oo.variable]:"colors.white",_dark:{[oo.variable]:"colors.gray.700"},bg:oo.reference}},{defineMultiStyleConfig:ol,definePartsStyle:os}=rS(no.keys),ou=t9("slider-thumb-size"),oc=t9("slider-track-size"),od=t9("slider-bg"),of=e=>{let{orientation:t}=e;return{display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"},...nF({orientation:t,vertical:{h:"100%"},horizontal:{w:"100%"}})}},op=e=>{let t=nF({orientation:e.orientation,horizontal:{h:oc.reference},vertical:{w:oc.reference}});return{...t,overflow:"hidden",borderRadius:"sm",[od.variable]:"colors.gray.200",_dark:{[od.variable]:"colors.whiteAlpha.200"},_disabled:{[od.variable]:"colors.gray.300",_dark:{[od.variable]:"colors.whiteAlpha.300"}},bg:od.reference}},oh=e=>{let{orientation:t}=e,r=nF({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",_active:{transform:"translateX(-50%) scale(1.15)"}},horizontal:{top:"50%",transform:"translateY(-50%)",_active:{transform:"translateY(-50%) scale(1.15)"}}});return{...r,w:ou.reference,h:ou.reference,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",outline:0,zIndex:1,borderRadius:"full",bg:"white",boxShadow:"base",border:"1px solid",borderColor:"transparent",transitionProperty:"transform",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{bg:"gray.300"}}},om=e=>{let{colorScheme:t}=e;return{width:"inherit",height:"inherit",[od.variable]:`colors.${t}.500`,_dark:{[od.variable]:`colors.${t}.200`},bg:od.reference}},og=ol({baseStyle:os(e=>({container:of(e),track:op(e),thumb:oh(e),filledTrack:om(e)})),sizes:{lg:os({container:{[ou.variable]:"sizes.4",[oc.variable]:"sizes.1"}}),md:os({container:{[ou.variable]:"sizes.3.5",[oc.variable]:"sizes.1"}}),sm:os({container:{[ou.variable]:"sizes.2.5",[oc.variable]:"sizes.0.5"}})},defaultProps:{size:"md",colorScheme:"blue"}}),ov=nk("spinner-size"),oy={width:[ov.reference],height:[ov.reference]},ob={xs:{[ov.variable]:"sizes.3"},sm:{[ov.variable]:"sizes.4"},md:{[ov.variable]:"sizes.6"},lg:{[ov.variable]:"sizes.8"},xl:{[ov.variable]:"sizes.12"}},{defineMultiStyleConfig:ox,definePartsStyle:ok}=rS(ni.keys),ow=ox({baseStyle:ok({container:{},label:{fontWeight:"medium"},helpText:{opacity:.8,marginBottom:"2"},number:{verticalAlign:"baseline",fontWeight:"semibold"},icon:{marginEnd:1,w:"3.5",h:"3.5",verticalAlign:"middle"}}),sizes:{md:ok({label:{fontSize:"sm"},helpText:{fontSize:"sm"},number:{fontSize:"2xl"}})},defaultProps:{size:"md"}}),oS=t9("kbd-bg"),oC={[oS.variable]:"colors.gray.100",_dark:{[oS.variable]:"colors.whiteAlpha.100"},bg:oS.reference,borderRadius:"md",borderWidth:"1px",borderBottomWidth:"3px",fontSize:"0.8em",fontWeight:"bold",lineHeight:"normal",px:"0.4em",whiteSpace:"nowrap"},{defineMultiStyleConfig:o_,definePartsStyle:oE}=rS(r8.keys),oP=o_({baseStyle:oE({icon:{marginEnd:"2",display:"inline",verticalAlign:"text-bottom"}})}),{defineMultiStyleConfig:oT,definePartsStyle:oz}=rS(r9.keys),oA=t9("menu-bg"),oR=t9("menu-shadow"),oM=oT({baseStyle:oz({button:{transitionProperty:"common",transitionDuration:"normal"},list:{[oA.variable]:"#fff",[oR.variable]:"shadows.sm",_dark:{[oA.variable]:"colors.gray.700",[oR.variable]:"shadows.dark-lg"},color:"inherit",minW:"3xs",py:"2",zIndex:1,borderRadius:"md",borderWidth:"1px",bg:oA.reference,boxShadow:oR.reference},item:{py:"1.5",px:"3",transitionProperty:"background",transitionDuration:"ultra-fast",transitionTimingFunction:"ease-in",_focus:{[oA.variable]:"colors.gray.100",_dark:{[oA.variable]:"colors.whiteAlpha.100"}},_active:{[oA.variable]:"colors.gray.200",_dark:{[oA.variable]:"colors.whiteAlpha.200"}},_expanded:{[oA.variable]:"colors.gray.100",_dark:{[oA.variable]:"colors.whiteAlpha.100"}},_disabled:{opacity:.4,cursor:"not-allowed"},bg:oA.reference},groupTitle:{mx:4,my:2,fontWeight:"semibold",fontSize:"sm"},icon:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},command:{opacity:.6},divider:{border:0,borderBottom:"1px solid",borderColor:"inherit",my:"2",opacity:.6}})}),{defineMultiStyleConfig:oL,definePartsStyle:oF}=rS(r7.keys),oj=t9("modal-bg"),o$=t9("modal-shadow"),oD={bg:"blackAlpha.600",zIndex:"modal"},oB=e=>{let{isCentered:t,scrollBehavior:r}=e;return{display:"flex",zIndex:"modal",justifyContent:"center",alignItems:t?"center":"flex-start",overflow:"inside"===r?"hidden":"auto",overscrollBehaviorY:"none"}},oI=e=>{let{isCentered:t,scrollBehavior:r}=e;return{borderRadius:"md",color:"inherit",my:t?"auto":"16",mx:t?"auto":void 0,zIndex:"modal",maxH:"inside"===r?"calc(100% - 7.5rem)":void 0,[oj.variable]:"colors.white",[o$.variable]:"shadows.lg",_dark:{[oj.variable]:"colors.gray.700",[o$.variable]:"shadows.dark-lg"},bg:oj.reference,boxShadow:o$.reference}},oO={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},oN={position:"absolute",top:"2",insetEnd:"3"},oV=e=>{let{scrollBehavior:t}=e;return{px:"6",py:"2",flex:"1",overflow:"inside"===t?"auto":void 0}},oW={px:"6",py:"4"};function oU(e){return"full"===e?oF({dialog:{maxW:"100vw",minH:"$100vh",my:"0",borderRadius:"0"}}):oF({dialog:{maxW:e}})}var oH=oL({baseStyle:oF(e=>({overlay:oD,dialogContainer:aX(oB,e),dialog:aX(oI,e),header:oO,closeButton:oN,body:aX(oV,e),footer:oW})),sizes:{xs:oU("xs"),sm:oU("sm"),md:oU("md"),lg:oU("lg"),xl:oU("xl"),"2xl":oU("2xl"),"3xl":oU("3xl"),"4xl":oU("4xl"),"5xl":oU("5xl"),"6xl":oU("6xl"),full:oU("full")},defaultProps:{size:"md"}}),{defineMultiStyleConfig:oq,definePartsStyle:oX}=rS(ne.keys),oY=nk("number-input-stepper-width"),oG=nk("number-input-input-padding"),oQ=nb(oY).add("0.5rem").toString(),oK=nk("number-input-bg"),oZ=nk("number-input-color"),oJ=nk("number-input-border-color"),o0={[oY.variable]:"sizes.6",[oG.variable]:oQ},o1=e=>{var t,r;return null!=(r=null==(t=aX(aA.baseStyle,e))?void 0:t.field)?r:{}},o2={width:oY.reference},o5={borderStart:"1px solid",borderStartColor:oJ.reference,color:oZ.reference,bg:oK.reference,[oZ.variable]:"colors.chakra-body-text",[oJ.variable]:"colors.chakra-border-color",_dark:{[oZ.variable]:"colors.whiteAlpha.800",[oJ.variable]:"colors.whiteAlpha.300"},_active:{[oK.variable]:"colors.gray.200",_dark:{[oK.variable]:"colors.whiteAlpha.300"}},_disabled:{opacity:.4,cursor:"not-allowed"}};function o3(e){var t,r,n;let a=null==(t=aA.sizes)?void 0:t[e],o={lg:"md",md:"md",sm:"sm",xs:"sm"},i=null!=(n=null==(r=a.field)?void 0:r.fontSize)?n:"md",l=rB.fontSizes[i];return oX({field:{...a.field,paddingInlineEnd:oG.reference,verticalAlign:"top"},stepper:{fontSize:nb(l).multiply(.75).toString(),_first:{borderTopEndRadius:o[e]},_last:{borderBottomEndRadius:o[e],mt:"-1px",borderTopWidth:1}}})}var o4=oq({baseStyle:oX(e=>{var t;return{root:o0,field:null!=(t=aX(o1,e))?t:{},stepperGroup:o2,stepper:o5}}),sizes:{xs:o3("xs"),sm:o3("sm"),md:o3("md"),lg:o3("lg")},variants:aA.variants,defaultProps:aA.defaultProps}),o6={baseStyle:{...null==(_=aA.baseStyle)?void 0:_.field,textAlign:"center"},sizes:{lg:{fontSize:"lg",w:12,h:12,borderRadius:"md"},md:{fontSize:"md",w:10,h:10,borderRadius:"md"},sm:{fontSize:"sm",w:8,h:8,borderRadius:"sm"},xs:{fontSize:"xs",w:6,h:6,borderRadius:"sm"}},variants:{outline:e=>{var t,r,n;return null!=(n=null==(r=aX(null==(t=aA.variants)?void 0:t.outline,e))?void 0:r.field)?n:{}},flushed:e=>{var t,r,n;return null!=(n=null==(r=aX(null==(t=aA.variants)?void 0:t.flushed,e))?void 0:r.field)?n:{}},filled:e=>{var t,r,n;return null!=(n=null==(r=aX(null==(t=aA.variants)?void 0:t.filled,e))?void 0:r.field)?n:{}},unstyled:null!=(P=null==(E=aA.variants)?void 0:E.unstyled.field)?P:{}},defaultProps:aA.defaultProps},{defineMultiStyleConfig:o8,definePartsStyle:o9}=rS(nt.keys),o7=nk("popper-bg"),ie=nk("popper-arrow-bg"),it=nk("popper-arrow-shadow-color"),ir=o8({baseStyle:o9({popper:{zIndex:10},content:{[o7.variable]:"colors.white",bg:o7.reference,[ie.variable]:o7.reference,[it.variable]:"colors.gray.200",_dark:{[o7.variable]:"colors.gray.700",[it.variable]:"colors.whiteAlpha.300"},width:"xs",border:"1px solid",borderColor:"inherit",borderRadius:"md",boxShadow:"sm",zIndex:"inherit",_focusVisible:{outline:0,boxShadow:"outline"}},header:{px:3,py:2,borderBottomWidth:"1px"},body:{px:3,py:2},footer:{px:3,py:2,borderTopWidth:"1px"},closeButton:{position:"absolute",borderRadius:"md",top:1,insetEnd:2,padding:2}})}),{definePartsStyle:ia,defineMultiStyleConfig:io}=rS(r2.keys),ii=t9("drawer-bg"),il=t9("drawer-box-shadow");function is(e){return"full"===e?ia({dialog:{maxW:"100vw",h:"100vh"}}):ia({dialog:{maxW:e}})}var iu={bg:"blackAlpha.600",zIndex:"modal"},ic={display:"flex",zIndex:"modal",justifyContent:"center"},id=e=>{let{isFullHeight:t}=e;return{...t&&{height:"100vh"},zIndex:"modal",maxH:"100vh",color:"inherit",[ii.variable]:"colors.white",[il.variable]:"shadows.lg",_dark:{[ii.variable]:"colors.gray.700",[il.variable]:"shadows.dark-lg"},bg:ii.reference,boxShadow:il.reference}},ip={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},ih={position:"absolute",top:"2",insetEnd:"3"},im={px:"6",py:"2",flex:"1",overflow:"auto"},ig={px:"6",py:"4"},iv=io({baseStyle:ia(e=>({overlay:iu,dialogContainer:ic,dialog:aX(id,e),header:ip,closeButton:ih,body:im,footer:ig})),sizes:{xs:is("xs"),sm:is("md"),md:is("lg"),lg:is("2xl"),xl:is("4xl"),full:is("full")},defaultProps:{size:"xs"}}),{definePartsStyle:iy,defineMultiStyleConfig:ib}=rS(r5.keys),ix=ib({baseStyle:iy({preview:{borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal"},input:{borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},textarea:{borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}}})}),{definePartsStyle:ik,defineMultiStyleConfig:iw}=rS(r3.keys),iS=t9("form-control-color"),iC=iw({baseStyle:ik({container:{width:"100%",position:"relative"},requiredIndicator:{marginStart:"1",[iS.variable]:"colors.red.500",_dark:{[iS.variable]:"colors.red.300"},color:iS.reference},helperText:{mt:"2",[iS.variable]:"colors.gray.600",_dark:{[iS.variable]:"colors.whiteAlpha.600"},color:iS.reference,lineHeight:"normal",fontSize:"sm"}})}),{definePartsStyle:i_,defineMultiStyleConfig:iE}=rS(r4.keys),iP=t9("form-error-color"),iT=iE({baseStyle:i_({text:{[iP.variable]:"colors.red.500",_dark:{[iP.variable]:"colors.red.300"},color:iP.reference,mt:"2",fontSize:"sm",lineHeight:"normal"},icon:{marginEnd:"0.5em",[iP.variable]:"colors.red.500",_dark:{[iP.variable]:"colors.red.300"},color:iP.reference}})}),{defineMultiStyleConfig:iz,definePartsStyle:iA}=rS(r0.keys),iR=t9("breadcrumb-link-decor"),iM=iz({baseStyle:iA({link:{transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",outline:"none",color:"inherit",textDecoration:iR.reference,[iR.variable]:"none","&:not([aria-current=page])":{cursor:"pointer",_hover:{[iR.variable]:"underline"},_focusVisible:{boxShadow:"outline"}}}})}),iL=e=>{let{colorScheme:t,theme:r}=e;if("gray"===t)return{color:nL("gray.800","whiteAlpha.900")(e),_hover:{bg:nL("gray.100","whiteAlpha.200")(e)},_active:{bg:nL("gray.200","whiteAlpha.300")(e)}};let n=n3(`${t}.200`,.12)(r),a=n3(`${t}.200`,.24)(r);return{color:nL(`${t}.600`,`${t}.200`)(e),bg:"transparent",_hover:{bg:nL(`${t}.50`,n)(e)},_active:{bg:nL(`${t}.100`,a)(e)}}},iF={yellow:{bg:"yellow.400",color:"black",hoverBg:"yellow.500",activeBg:"yellow.600"},cyan:{bg:"cyan.400",color:"black",hoverBg:"cyan.500",activeBg:"cyan.600"}},{definePartsStyle:ij,defineMultiStyleConfig:i$}=rS(nd.keys),iD=t9("card-bg"),iB=t9("card-padding"),iI=t9("card-shadow"),iO=t9("card-radius"),iN=t9("card-border-width","0"),iV=t9("card-border-color"),iW=ij({container:{[iD.variable]:"colors.chakra-body-bg",backgroundColor:iD.reference,boxShadow:iI.reference,borderRadius:iO.reference,color:"chakra-body-text",borderWidth:iN.reference,borderColor:iV.reference},body:{padding:iB.reference,flex:"1 1 0%"},header:{padding:iB.reference},footer:{padding:iB.reference}}),iU={sm:ij({container:{[iO.variable]:"radii.base",[iB.variable]:"space.3"}}),md:ij({container:{[iO.variable]:"radii.md",[iB.variable]:"space.5"}}),lg:ij({container:{[iO.variable]:"radii.xl",[iB.variable]:"space.7"}})},iH=i$({baseStyle:iW,variants:{elevated:ij({container:{[iI.variable]:"shadows.base",_dark:{[iD.variable]:"colors.gray.700"}}}),outline:ij({container:{[iN.variable]:"1px",[iV.variable]:"colors.chakra-border-color"}}),filled:ij({container:{[iD.variable]:"colors.chakra-subtle-bg"}}),unstyled:{body:{[iB.variable]:0},header:{[iB.variable]:0},footer:{[iB.variable]:0}}},sizes:iU,defaultProps:{variant:"elevated",size:"md"}}),iq=nk("close-button-size"),iX=nk("close-button-bg"),iY={w:[iq.reference],h:[iq.reference],borderRadius:"md",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{[iX.variable]:"colors.blackAlpha.100",_dark:{[iX.variable]:"colors.whiteAlpha.100"}},_active:{[iX.variable]:"colors.blackAlpha.200",_dark:{[iX.variable]:"colors.whiteAlpha.200"}},_focusVisible:{boxShadow:"outline"},bg:iX.reference},iG={lg:{[iq.variable]:"sizes.10",fontSize:"md"},md:{[iq.variable]:"sizes.8",fontSize:"xs"},sm:{[iq.variable]:"sizes.6",fontSize:"2xs"}},{variants:iQ,defaultProps:iK}=as,iZ={fontFamily:"mono",fontSize:"sm",px:"0.2em",borderRadius:"sm",bg:al.bg.reference,color:al.color.reference,boxShadow:al.shadow.reference},{definePartsStyle:iJ,defineMultiStyleConfig:i0}=rS(rK.keys),i1=i0({baseStyle:iJ({container:{borderTopWidth:"1px",borderColor:"inherit",_last:{borderBottomWidth:"1px"}},button:{transitionProperty:"common",transitionDuration:"normal",fontSize:"md",_focusVisible:{boxShadow:"outline"},_hover:{bg:"blackAlpha.50"},_disabled:{opacity:.4,cursor:"not-allowed"},px:"4",py:"2"},panel:{pt:"2",px:"4",pb:"5"},icon:{fontSize:"1.25em"}})}),{definePartsStyle:i2,defineMultiStyleConfig:i5}=rS(rZ.keys),i3=t9("alert-fg"),i4=t9("alert-bg");function i6(e){let{theme:t,colorScheme:r}=e,n=n3(`${r}.200`,.16)(t);return{light:`colors.${r}.100`,dark:n}}var i8=i5({baseStyle:i2({container:{bg:i4.reference,px:"4",py:"3"},title:{fontWeight:"bold",lineHeight:"6",marginEnd:"2"},description:{lineHeight:"6"},icon:{color:i3.reference,flexShrink:0,marginEnd:"3",w:"5",h:"6"},spinner:{color:i3.reference,flexShrink:0,marginEnd:"3",w:"5",h:"5"}}),variants:{subtle:i2(e=>{let{colorScheme:t}=e,r=i6(e);return{container:{[i3.variable]:`colors.${t}.500`,[i4.variable]:r.light,_dark:{[i3.variable]:`colors.${t}.200`,[i4.variable]:r.dark}}}}),"left-accent":i2(e=>{let{colorScheme:t}=e,r=i6(e);return{container:{[i3.variable]:`colors.${t}.500`,[i4.variable]:r.light,_dark:{[i3.variable]:`colors.${t}.200`,[i4.variable]:r.dark},paddingStart:"3",borderStartWidth:"4px",borderStartColor:i3.reference}}}),"top-accent":i2(e=>{let{colorScheme:t}=e,r=i6(e);return{container:{[i3.variable]:`colors.${t}.500`,[i4.variable]:r.light,_dark:{[i3.variable]:`colors.${t}.200`,[i4.variable]:r.dark},pt:"2",borderTopWidth:"4px",borderTopColor:i3.reference}}}),solid:i2(e=>{let{colorScheme:t}=e;return{container:{[i3.variable]:"colors.white",[i4.variable]:`colors.${t}.500`,_dark:{[i3.variable]:"colors.gray.900",[i4.variable]:`colors.${t}.200`},color:i3.reference}}})},defaultProps:{variant:"subtle",colorScheme:"blue"}}),{definePartsStyle:i9,defineMultiStyleConfig:i7}=rS(rJ.keys),le=t9("avatar-border-color"),lt=t9("avatar-bg"),lr=t9("avatar-font-size"),ln=t9("avatar-size"),la={borderRadius:"full",border:"0.2em solid",borderColor:le.reference,[le.variable]:"white",_dark:{[le.variable]:"colors.gray.800"}},lo={bg:lt.reference,fontSize:lr.reference,width:ln.reference,height:ln.reference,lineHeight:"1",[lt.variable]:"colors.gray.200",_dark:{[lt.variable]:"colors.whiteAlpha.400"}},li=e=>{let{name:t,theme:r}=e,n=t?function(e){var t;let r=n6();return!e||nJ(e)?r:e.string&&e.colors?function(e,t){let r=0;if(0===e.length)return t[0];for(let t=0;t<e.length;t+=1)r=e.charCodeAt(t)+((r<<5)-r),r&=r;return r=(r%t.length+t.length)%t.length,t[r]}(e.string,e.colors):e.string&&!e.colors?function(e){let t=0;if(0===e.length)return t.toString();for(let r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t),t&=t;let r="#";for(let e=0;e<3;e+=1){let n=t>>8*e&255;r+=`00${n.toString(16)}`.substr(-2)}return r}(e.string):e.colors&&!e.string?(t=e.colors)[Math.floor(Math.random()*t.length)]:r}({string:t}):"colors.gray.400",a=n5(n)(r),o="white";return a||(o="gray.800"),{bg:lt.reference,fontSize:lr.reference,color:o,borderColor:le.reference,verticalAlign:"top",width:ln.reference,height:ln.reference,"&:not([data-loaded])":{[lt.variable]:n},[le.variable]:"colors.white",_dark:{[le.variable]:"colors.gray.800"}}},ll={fontSize:lr.reference,lineHeight:"1"};function ls(e){let t="100%"!==e?rO[e]:void 0;return i9({container:{[ln.variable]:null!=t?t:e,[lr.variable]:`calc(${null!=t?t:e} / 2.5)`},excessLabel:{[ln.variable]:null!=t?t:e,[lr.variable]:`calc(${null!=t?t:e} / 2.5)`}})}var lu=i7({baseStyle:i9(e=>({badge:aX(la,e),excessLabel:aX(lo,e),container:aX(li,e),label:ll})),sizes:{"2xs":ls(4),xs:ls(6),sm:ls(8),md:ls(12),lg:ls(16),xl:ls(24),"2xl":ls(32),full:ls("100%")},defaultProps:{size:"md"}}),lc={colors:{"chakra-body-text":{_light:"gray.800",_dark:"whiteAlpha.900"},"chakra-body-bg":{_light:"white",_dark:"gray.800"},"chakra-border-color":{_light:"gray.200",_dark:"whiteAlpha.300"},"chakra-inverse-text":{_light:"white",_dark:"gray.800"},"chakra-subtle-bg":{_light:"gray.100",_dark:"gray.700"},"chakra-subtle-text":{_light:"gray.600",_dark:"gray.400"},"chakra-placeholder-color":{_light:"gray.500",_dark:"whiteAlpha.400"}}},ld={global:{body:{fontFamily:"body",color:"chakra-body-text",bg:"chakra-body-bg",transitionProperty:"background-color",transitionDuration:"normal",lineHeight:"base"},"*::placeholder":{color:"chakra-placeholder-color"},"*, *::before, &::after":{borderColor:"chakra-border-color"}}},lf={useSystemColorMode:!1,initialColorMode:"light",cssVarPrefix:"chakra"},lp={semanticTokens:lc,direction:"ltr",...rN,components:{Accordion:i1,Alert:i8,Avatar:lu,Badge:as,Breadcrumb:iM,Button:{baseStyle:{lineHeight:"1.2",borderRadius:"md",fontWeight:"semibold",transitionProperty:"common",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{_disabled:{bg:"initial"}}},variants:{ghost:iL,outline:e=>{let{colorScheme:t}=e,r=nL("gray.200","whiteAlpha.300")(e);return{border:"1px solid",borderColor:"gray"===t?r:"currentColor",".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":{marginEnd:"-1px"},".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":{marginBottom:"-1px"},...aX(iL,e)}},solid:e=>{var t;let{colorScheme:r}=e;if("gray"===r){let t=nL("gray.100","whiteAlpha.200")(e);return{bg:t,color:nL("gray.800","whiteAlpha.900")(e),_hover:{bg:nL("gray.200","whiteAlpha.300")(e),_disabled:{bg:t}},_active:{bg:nL("gray.300","whiteAlpha.400")(e)}}}let{bg:n=`${r}.500`,color:a="white",hoverBg:o=`${r}.600`,activeBg:i=`${r}.700`}=null!=(t=iF[r])?t:{},l=nL(n,`${r}.200`)(e);return{bg:l,color:nL(a,"gray.800")(e),_hover:{bg:nL(o,`${r}.300`)(e),_disabled:{bg:l}},_active:{bg:nL(i,`${r}.400`)(e)}}},link:e=>{let{colorScheme:t}=e;return{padding:0,height:"auto",lineHeight:"normal",verticalAlign:"baseline",color:nL(`${t}.500`,`${t}.200`)(e),_hover:{textDecoration:"underline",_disabled:{textDecoration:"none"}},_active:{color:nL(`${t}.700`,`${t}.500`)(e)}}},unstyled:{bg:"none",color:"inherit",display:"inline",lineHeight:"inherit",m:"0",p:"0"}},sizes:{lg:{h:"12",minW:"12",fontSize:"lg",px:"6"},md:{h:"10",minW:"10",fontSize:"md",px:"4"},sm:{h:"8",minW:"8",fontSize:"sm",px:"3"},xs:{h:"6",minW:"6",fontSize:"xs",px:"2"}},defaultProps:{variant:"solid",size:"md",colorScheme:"gray"}},Checkbox:a1,CloseButton:{baseStyle:iY,sizes:iG,defaultProps:{size:"md"}},Code:{baseStyle:iZ,variants:iQ,defaultProps:iK},Container:{baseStyle:{w:"100%",mx:"auto",maxW:"prose",px:"4"}},Divider:{baseStyle:{opacity:.6,borderColor:"inherit"},variants:{solid:{borderStyle:"solid"},dashed:{borderStyle:"dashed"}},defaultProps:{variant:"solid"}},Drawer:iv,Editable:ix,Form:iC,FormError:iT,FormLabel:{baseStyle:{fontSize:"md",marginEnd:"3",mb:"2",fontWeight:"medium",transitionProperty:"common",transitionDuration:"normal",opacity:1,_disabled:{opacity:.4}}},Heading:{baseStyle:{fontFamily:"heading",fontWeight:"bold"},sizes:{"4xl":{fontSize:["6xl",null,"7xl"],lineHeight:1},"3xl":{fontSize:["5xl",null,"6xl"],lineHeight:1},"2xl":{fontSize:["4xl",null,"5xl"],lineHeight:[1.2,null,1]},xl:{fontSize:["3xl",null,"4xl"],lineHeight:[1.33,null,1.2]},lg:{fontSize:["2xl",null,"3xl"],lineHeight:[1.33,null,1.2]},md:{fontSize:"xl",lineHeight:1.2},sm:{fontSize:"md",lineHeight:1.2},xs:{fontSize:"sm",lineHeight:1.2}},defaultProps:{size:"xl"}},Input:aA,Kbd:{baseStyle:oC},Link:{baseStyle:{transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}}},List:oP,Menu:oM,Modal:oH,NumberInput:o4,PinInput:o6,Popover:ir,Progress:aH,Radio:a4,Select:ot,Skeleton:{baseStyle:oa},SkipLink:{baseStyle:oi},Slider:og,Spinner:{baseStyle:oy,sizes:ob,defaultProps:{size:"md"}},Stat:ow,Switch:nM,Table:nI,Tabs:ai,Tag:ax,Textarea:{baseStyle:aR,sizes:aL,variants:aM,defaultProps:{size:"md",variant:"outline"}},Tooltip:{baseStyle:aD},Card:iH,Stepper:rG},styles:ld,config:lf},lh={semanticTokens:lc,direction:"ltr",components:{},...rN,styles:ld,config:lf},lm=(e,t)=>e.find(e=>e.id===t);function lg(e,t){let r=lv(e,t),n=r?e[r].findIndex(e=>e.id===t):-1;return{position:r,index:n}}function lv(e,t){for(let[r,n]of Object.entries(e))if(lm(n,t))return r}function ly(e,t){let r=(0,D.useRef)(!1),n=(0,D.useRef)(!1);(0,D.useEffect)(()=>{let t=r.current,a=t&&n.current;if(a)return e();n.current=!0},t),(0,D.useEffect)(()=>(r.current=!0,()=>{r.current=!1}),[])}var D=(j("acw62"),j("acw62"),j("acw62"),j("acw62"),j("acw62"));/**
 * @public
 */const lb=(0,D.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});var D=j("acw62");const lx=(0,D.createContext)({});var D=(j("acw62"),j("acw62"));/**
 * @public
 */const lk=(0,D.createContext)(null);var D=j("acw62");const lw="undefined"!=typeof document,lS=lw?D.useLayoutEffect:D.useEffect;var D=j("acw62");const lC=(0,D.createContext)({strict:!1});function l_(e){return"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}var D=(j("acw62"),j("acw62"));/**
 * Decides if the supplied variable is variant label
 */function lE(e){return"string"==typeof e||Array.isArray(e)}function lP(e){return"object"==typeof e&&"function"==typeof e.start}const lT=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],lz=["initial",...lT];function lA(e){return lP(e.animate)||lz.some(t=>lE(e[t]))}function lR(e){return!!(lA(e)||e.variants)}function lM(e){return Array.isArray(e)?e.join(" "):e}const lL={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},lF={};for(const e in lL)lF[e]={isEnabled:t=>lL[e].some(e=>!!t[e])};var D=j("acw62");const lj=(0,D.createContext)({});var D=j("acw62");/**
 * Internal, exported only for usage in Framer
 */const l$=(0,D.createContext)({}),lD=Symbol.for("motionComponentSymbol"),lB=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lI(e){if(/**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */"string"!=typeof e||/**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */e.includes("-"));else if(lB.indexOf(e)>-1||/**
         * If it contains a capital letter, it's an SVG component
         *//[A-Z]/.test(e))return!0;return!1}var D=(j("acw62"),j("acw62"));const lO={},lN=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],lV=new Set(lN);function lW(e,{layout:t,layoutId:r}){return lV.has(e)||e.startsWith("origin")||(t||void 0!==r)&&(!!lO[e]||"opacity"===e)}const lU=e=>!!(e&&e.getVelocity),lH={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lq=lN.length,lX=e=>t=>"string"==typeof t&&t.startsWith(e),lY=lX("--"),lG=lX("var(--"),lQ=(e,t)=>t&&"number"==typeof e?t.transform(e):e,lK=(e,t,r)=>Math.min(Math.max(r,e),t),lZ={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},lJ={...lZ,transform:e=>lK(0,1,e)},l0={...lZ,default:1},l1=e=>Math.round(1e5*e)/1e5,l2=/(-)?([\d]*\.?[\d])+/g,l5=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,l3=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function l4(e){return"string"==typeof e}const l6=e=>({test:t=>l4(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),l8=l6("deg"),l9=l6("%"),l7=l6("px"),se=l6("vh"),st=l6("vw"),sr={...l9,parse:e=>l9.parse(e)/100,transform:e=>l9.transform(100*e)},sn={...lZ,transform:Math.round},sa={// Border props
borderWidth:l7,borderTopWidth:l7,borderRightWidth:l7,borderBottomWidth:l7,borderLeftWidth:l7,borderRadius:l7,radius:l7,borderTopLeftRadius:l7,borderTopRightRadius:l7,borderBottomRightRadius:l7,borderBottomLeftRadius:l7,// Positioning props
width:l7,maxWidth:l7,height:l7,maxHeight:l7,size:l7,top:l7,right:l7,bottom:l7,left:l7,// Spacing props
padding:l7,paddingTop:l7,paddingRight:l7,paddingBottom:l7,paddingLeft:l7,margin:l7,marginTop:l7,marginRight:l7,marginBottom:l7,marginLeft:l7,// Transform props
rotate:l8,rotateX:l8,rotateY:l8,rotateZ:l8,scale:l0,scaleX:l0,scaleY:l0,scaleZ:l0,skew:l8,skewX:l8,skewY:l8,distance:l7,translateX:l7,translateY:l7,translateZ:l7,x:l7,y:l7,z:l7,perspective:l7,transformPerspective:l7,opacity:lJ,originX:sr,originY:sr,originZ:l7,// Misc
zIndex:sn,// SVG
fillOpacity:lJ,strokeOpacity:lJ,numOctaves:sn};function so(e,t,r,n){let{style:a,vars:o,transform:i,transformOrigin:l}=e,s=!1,u=!1,c=!0;/**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */for(let e in t){let r=t[e];/**
         * If this is a CSS variable we don't do any further processing.
         */if(lY(e)){o[e]=r;continue}// Convert the value to its default value type, ie 0 -> "0px"
let n=sa[e],d=lQ(r,n);if(lV.has(e)){// If we already know we have a non-default transform, early return
if(// If this is a transform, flag to enable further transform processing
s=!0,i[e]=d,!c)continue;r!==(n.default||0)&&(c=!1)}else e.startsWith("origin")?(// If this is a transform origin, flag and enable further transform-origin processing
u=!0,l[e]=d):a[e]=d}/**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */if(!t.transform&&(s||n?a.transform=/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */function(e,{enableHardwareAcceleration:t=!0,allowTransformNone:r=!0},n,a){// The transform string we're going to build into.
let o="";/**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */for(let t=0;t<lq;t++){let r=lN[t];if(void 0!==e[r]){let t=lH[r]||r;o+=`${t}(${e[r]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),a?o=a(e,n?"":o):r&&n&&(o="none"),o}(e.transform,r,c,n):a.transform&&/**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */(a.transform="none")),u){let{originX:e="50%",originY:t="50%",originZ:r=0}=l;a.transformOrigin=`${e} ${t} ${r}`}}const si=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function sl(e,t,r){for(let n in t)lU(t[n])||lW(n,r)||(e[n]=t[n])}function ss(e,t,r){// The `any` isn't ideal but it is the type of createElement props argument
let n={},a=function(e,t,r){let n=e.style||{},a={};return(/**
     * Copy non-Motion Values straight into style
     */sl(a,n,e),Object.assign(a,function({transformTemplate:e},t,r){return(0,D.useMemo)(()=>{let n=si();return so(n,t,{enableHardwareAcceleration:!r},e),Object.assign({},n.vars,n.style)},[t])}(e,t,r)),e.transformValues?e.transformValues(a):a)}(e,t,r);return e.drag&&!1!==e.dragListener&&(// Disable the ghost element when a user drags
n.draggable=!1,// Disable text selection
a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",// Disable scrolling on the draggable direction
a.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=a,n}/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */const su=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */function sc(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||su.has(e)}let sd=e=>!sc(e);/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */try{/**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     */(r=j("7dGEo").default)&&// Explicitly filter our events
(sd=e=>e.startsWith("on")?!sc(e):r(e))}catch(e){// We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}var D=j("acw62");function sf(e,t,r){return"string"==typeof e?e:l7.transform(t+r*e)}const sp={offset:"stroke-dashoffset",array:"stroke-dasharray"},sh={offset:"strokeDashoffset",array:"strokeDasharray"};/**
 * Build SVG visual attrbutes, like cx and style.transform
 */function sm(e,{attrX:t,attrY:r,attrScale:n,originX:a,originY:o,pathLength:i,pathSpacing:l=1,pathOffset:s=0,...u},c,d,f){/**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */if(so(e,u,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:p,style:h,dimensions:m}=e;p.transform&&(m&&(h.transform=p.transform),delete p.transform),m&&(void 0!==a||void 0!==o||h.transform)&&(h.transformOrigin=/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */function(e,t,r){let n=sf(t,e.x,e.width),a=sf(r,e.y,e.height);return`${n} ${a}`}(m,void 0!==a?a:.5,void 0!==o?o:.5)),void 0!==t&&(p.x=t),void 0!==r&&(p.y=r),void 0!==n&&(p.scale=n),void 0!==i&&/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */function(e,t,r=1,n=0,a=!0){// Normalise path length by setting SVG attribute pathLength to 1
e.pathLength=1;// We use dash case when setting attributes directly to the DOM node and camel case
// when defining props on a React component.
let o=a?sp:sh;// Build the dash offset
e[o.offset]=l7.transform(-n);// Build the dash array
let i=l7.transform(t),l=l7.transform(r);e[o.array]=`${i} ${l}`}(p,i,l,s,!1)}const sg=()=>({...si(),attrs:{}}),sv=e=>"string"==typeof e&&"svg"===e.toLowerCase();function sy(e,t,r,n){let a=(0,D.useMemo)(()=>{let r=sg();return sm(r,t,{enableHardwareAcceleration:!1},sv(n),e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){let t={};sl(t,e.style,e),a.style={...t,...a.style}}return a}/**
 * Convert camelCase to dash-case properties.
 */const sb=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function sx(e,{style:t,vars:r},n,a){// Loop over any CSS variables and assign those.
for(let o in Object.assign(e.style,t,a&&a.getProjectionStyles(n)),r)e.style.setProperty(o,r[o])}/**
 * A set of attribute names that are always read/written as camel case.
 */const sk=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function sw(e,t,r,n){for(let r in sx(e,t,void 0,n),t.attrs)e.setAttribute(sk.has(r)?r:sb(r),t.attrs[r])}function sS(e,t){let{style:r}=e,n={};for(let a in r)(lU(r[a])||t.style&&lU(t.style[a])||lW(a,e))&&(n[a]=r[a]);return n}function sC(e,t){let r=sS(e,t);for(let n in e)if(lU(e[n])||lU(t[n])){let t=-1!==lN.indexOf(n)?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;r[t]=e[n]}return r}function s_(e,t,r,n={},a={}){return"function"==typeof t&&(t=t(void 0!==r?r:e.custom,n,a)),"string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t&&(t=t(void 0!==r?r:e.custom,n,a)),t}var D=(j("acw62"),j("acw62"));/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */function sE(e){let t=(0,D.useRef)(null);return null===t.current&&(t.current=e()),t.current}const sP=e=>Array.isArray(e),sT=e=>!!(e&&"object"==typeof e&&e.mix&&e.toValue),sz=e=>sP(e)?e[e.length-1]||0:e;/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */function sA(e){let t=lU(e)?e.get():e;return sT(t)?t.toValue():t}const sR=e=>(t,r)=>{let n=(0,D.useContext)(lx),a=(0,D.useContext)(lk),o=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:r},n,a,o){let i={latestValues:function(e,t,r,n){let a={},o=n(e,{});for(let e in o)a[e]=sA(o[e]);let{initial:i,animate:l}=e,s=lA(e),u=lR(e);t&&u&&!s&&!1!==e.inherit&&(void 0===i&&(i=t.initial),void 0===l&&(l=t.animate));let c=!!r&&!1===r.initial;c=c||!1===i;let d=c?l:i;if(d&&"boolean"!=typeof d&&!lP(d)){let t=Array.isArray(d)?d:[d];t.forEach(t=>{let r=s_(e,t);if(!r)return;let{transitionEnd:n,transition:o,...i}=r;for(let e in i){let t=i[e];if(Array.isArray(t)){/**
                     * Take final keyframe if the initial animation is blocked because
                     * we want to initialise at the end of that blocked animation.
                     */let e=c?t.length-1:0;t=t[e]}null!==t&&(a[e]=t)}for(let e in n)a[e]=n[e]})}return a}(n,a,o,e),renderState:t()};return r&&(i.mount=e=>r(n,e,i)),i})(e,t,n,a);return r?o():sE(o)},sM=e=>e;class sL{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){let t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const sF=["prepare","read","update","preRender","render","postRender"],{schedule:sj,cancel:s$,state:sD,steps:sB}=function(e,t){let r=!1,n=!0,a={delta:0,timestamp:0,isProcessing:!1},o=sF.reduce((e,t)=>(e[t]=function(e){/**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */let t=new sL,r=new sL,n=0,a=!1,o=!1,i=new WeakSet,l={/**
         * Schedule a process to run on the next frame.
         */schedule:(e,o=!1,l=!1)=>{let s=l&&a,u=s?t:r;return o&&i.add(e),u.add(e)&&s&&a&&(n=t.order.length),e},/**
         * Cancel the provided callback from running on the next frame.
         */cancel:e=>{r.remove(e),i.delete(e)},/**
         * Execute all schedule callbacks.
         */process:s=>{/**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */if(a){o=!0;return}if(a=!0,[t,r]=[r,t],// Clear the next frame queue
    r.clear(),// Execute this frame
    n=t.order.length)for(let r=0;r<n;r++){let n=t.order[r];n(s),i.has(n)&&(l.schedule(n),e())}a=!1,o&&(o=!1,l.process(s))}};return l}(()=>r=!0),e),{}),i=e=>o[e].process(a),l=()=>{let o=performance.now();r=!1,a.delta=n?1e3/60:Math.max(Math.min(o-a.timestamp,40),1),a.timestamp=o,a.isProcessing=!0,sF.forEach(i),a.isProcessing=!1,r&&t&&(n=!1,e(l))},s=()=>{r=!0,n=!0,a.isProcessing||e(l)},u=sF.reduce((e,t)=>{let n=o[t];return e[t]=(e,t=!1,a=!1)=>(r||s(),n.schedule(e,t,a)),e},{});return{schedule:u,cancel:e=>sF.forEach(t=>o[t].cancel(e)),state:a,steps:o}}("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:sM,!0),sI={useVisualState:sR({scrapeMotionValuesFromProps:sC,createRenderState:sg,onMount:(e,t,{renderState:r,latestValues:n})=>{sj.read(()=>{try{r.dimensions="function"==typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(e){// Most likely trying to measure an unrendered element under Firefox
r.dimensions={x:0,y:0,width:0,height:0}}}),sj.render(()=>{sm(r,n,{enableHardwareAcceleration:!1},sv(t.tagName),e.transformTemplate),sw(t,r)})}})},sO={useVisualState:sR({scrapeMotionValuesFromProps:sS,createRenderState:si})};function sN(e,t,r,n={passive:!0}){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r)}const sV=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary;function sW(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const sU=e=>t=>sV(t)&&e(t,sW(t));function sH(e,t,r,n){return sN(e,t,sU(r),n)}/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */const sq=(e,t)=>r=>t(e(r)),sX=(...e)=>e.reduce(sq);function sY(e){let t=null;return()=>null===t&&(t=e,()=>{t=null})}const sG=sY("dragHorizontal"),sQ=sY("dragVertical");function sK(e){let t=!1;if("y"===e)t=sQ();else if("x"===e)t=sG();else{let e=sG(),r=sQ();e&&r?t=()=>{e(),r()}:(e&&e(),r&&r())}return t}function sZ(){// Check the gesture lock - if we get it, it means no drag gesture is active
// and we can safely fire the tap gesture.
let e=sK(!0);return!e||(e(),!1)}class sJ{constructor(e){this.isMounted=!1,this.node=e}update(){}}function s0(e,t){let r="pointer"+(t?"enter":"leave"),n="onHover"+(t?"Start":"End");return sH(e.current,r,(r,a)=>{if("touch"===r.type||sZ())return;let o=e.getProps();e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",t),o[n]&&sj.update(()=>o[n](r,a))},{passive:!e.getProps()[n]})}/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */const s1=(e,t)=>!!t&&(e===t||s1(e,t.parentElement));function s2(e,t){if(!t)return;let r=new PointerEvent("pointer"+e);t(r,sW(r))}/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */const s5=new WeakMap,s3=new WeakMap,s4=e=>{let t=s5.get(e.target);t&&t(e)},s6=e=>{e.forEach(s4)},s8={some:0,all:1};function s9(e,t){if(!Array.isArray(t))return!1;let r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function s7(e,t,r){let n=e.getProps();return s_(n,t,void 0!==r?r:n.custom,/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */function(e){let t={};return e.values.forEach((e,r)=>t[r]=e.get()),t}(e),/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */function(e){let t={};return e.values.forEach((e,r)=>t[r]=e.getVelocity()),t}(e))}const ue="data-"+sb("framerAppearId"),ut=e=>1e3*e,ur=e=>e/1e3,un={current:!1},ua=e=>Array.isArray(e)&&"number"==typeof e[0],uo=([e,t,r,n])=>`cubic-bezier(${e}, ${t}, ${r}, ${n})`,ui={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:uo([0,.65,.55,1]),circOut:uo([.55,0,1,.45]),backIn:uo([.31,.01,.66,-.59]),backOut:uo([.33,1.53,.69,.99])},ul=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e;function us(e,t,r,n){// If this is a linear gradient, return linear easing
if(e===t&&r===n)return sM;let a=t=>(function(e,t,r,n,a){let o,i;let l=0;do(o=ul(i=t+(r-t)/2,n,a)-e)>0?r=i:t=i;while(Math.abs(o)>1e-7&&++l<12)return i})(t,0,1,e,r);// If animation is at start/end, return t without easing
return e=>0===e||1===e?e:ul(a(e),t,n)}const uu=us(.42,0,1,1),uc=us(0,0,.58,1),ud=us(.42,0,.58,1),uf=e=>Array.isArray(e)&&"number"!=typeof e[0],up=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,uh=e=>t=>1-e(1-t),um=e=>1-Math.sin(Math.acos(e)),ug=uh(um),uv=up(ug),uy=us(.33,1.53,.69,.99),ub=uh(uy),ux=up(ub),uk={linear:sM,easeIn:uu,easeInOut:ud,easeOut:uc,circIn:um,circInOut:uv,circOut:ug,backIn:ub,backInOut:ux,backOut:uy,anticipate:e=>(e*=2)<1?.5*ub(e):.5*(2-Math.pow(2,-10*(e-1)))},uw=e=>{if(Array.isArray(e)){sM(4===e.length,"Cubic bezier arrays must contain four numerical values.");let[t,r,n,a]=e;return us(t,r,n,a)}return"string"==typeof e?(sM(void 0!==uk[e],`Invalid easing type '${e}'`),uk[e]):e},uS=(e,t)=>r=>!!(l4(r)&&l3.test(r)&&r.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(r,t)),uC=(e,t,r)=>n=>{if(!l4(n))return n;let[a,o,i,l]=n.match(l2);return{[e]:parseFloat(a),[t]:parseFloat(o),[r]:parseFloat(i),alpha:void 0!==l?parseFloat(l):1}},u_=e=>lK(0,255,e),uE={...lZ,transform:e=>Math.round(u_(e))},uP={test:uS("rgb","red"),parse:uC("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:n=1})=>"rgba("+uE.transform(e)+", "+uE.transform(t)+", "+uE.transform(r)+", "+l1(lJ.transform(n))+")"},uT={test:uS("#"),parse:function(e){let t="",r="",n="",a="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),n=e.substring(5,7),a=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),n=e.substring(3,4),a=e.substring(4,5),t+=t,r+=r,n+=n,a+=a),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:a?parseInt(a,16)/255:1}},transform:uP.transform},uz={test:uS("hsl","hue"),parse:uC("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:n=1})=>"hsla("+Math.round(e)+", "+l9.transform(l1(t))+", "+l9.transform(l1(r))+", "+l1(lJ.transform(n))+")"},uA={test:e=>uP.test(e)||uT.test(e)||uz.test(e),parse:e=>uP.test(e)?uP.parse(e):uz.test(e)?uz.parse(e):uT.parse(e),transform:e=>l4(e)?e:e.hasOwnProperty("red")?uP.transform(e):uz.transform(e)},uR=(e,t,r)=>-r*e+r*t+e;// Adapted from https://gist.github.com/mjackson/5311256
function uM(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const uL=(e,t,r)=>{let n=e*e;return Math.sqrt(Math.max(0,r*(t*t-n)+n))},uF=[uT,uP,uz],uj=e=>uF.find(t=>t.test(e));function u$(e){let t=uj(e);sM(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`);let r=t.parse(e);return t===uz&&(r=function({hue:e,saturation:t,lightness:r,alpha:n}){e/=360,r/=100;let a=0,o=0,i=0;if(t/=100){let n=r<.5?r*(1+t):r+t-r*t,l=2*r-n;a=uM(l,n,e+1/3),o=uM(l,n,e),i=uM(l,n,e-1/3)}else a=o=i=r;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*i),alpha:n}}(r)),r}const uD=(e,t)=>{let r=u$(e),n=u$(t),a={...r};return e=>(a.red=uL(r.red,n.red,e),a.green=uL(r.green,n.green,e),a.blue=uL(r.blue,n.blue,e),a.alpha=uR(r.alpha,n.alpha,e),uP.transform(a))},uB={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:sM},uI={regex:l5,countKey:"Colors",token:"${c}",parse:uA.parse},uO={regex:l2,countKey:"Numbers",token:"${n}",parse:lZ.parse};function uN(e,{regex:t,countKey:r,token:n,parse:a}){let o=e.tokenised.match(t);o&&(e["num"+r]=o.length,e.tokenised=e.tokenised.replace(t,n),e.values.push(...o.map(a)))}function uV(e){let t=e.toString(),r={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&uN(r,uB),uN(r,uI),uN(r,uO),r}function uW(e){return uV(e).values}function uU(e){let{values:t,numColors:r,numVars:n,tokenised:a}=uV(e),o=t.length;return e=>{let t=a;for(let a=0;a<o;a++)t=a<n?t.replace(uB.token,e[a]):a<n+r?t.replace(uI.token,uA.transform(e[a])):t.replace(uO.token,l1(e[a]));return t}}const uH=e=>"number"==typeof e?0:e,uq={test:function(e){var t,r;return isNaN(e)&&l4(e)&&((null===(t=e.match(l2))||void 0===t?void 0:t.length)||0)+((null===(r=e.match(l5))||void 0===r?void 0:r.length)||0)>0},parse:uW,createTransformer:uU,getAnimatableNone:function(e){let t=uW(e),r=uU(e);return r(t.map(uH))}},uX=(e,t)=>r=>`${r>0?t:e}`;function uY(e,t){return"number"==typeof e?r=>uR(e,t,r):uA.test(e)?uD(e,t):e.startsWith("var(")?uX(e,t):uK(e,t)}const uG=(e,t)=>{let r=[...e],n=r.length,a=e.map((e,r)=>uY(e,t[r]));return e=>{for(let t=0;t<n;t++)r[t]=a[t](e);return r}},uQ=(e,t)=>{let r={...e,...t},n={};for(let a in r)void 0!==e[a]&&void 0!==t[a]&&(n[a]=uY(e[a],t[a]));return e=>{for(let t in n)r[t]=n[t](e);return r}},uK=(e,t)=>{let r=uq.createTransformer(t),n=uV(e),a=uV(t),o=n.numVars===a.numVars&&n.numColors===a.numColors&&n.numNumbers>=a.numNumbers;return o?sX(uG(n.values,a.values),r):(sM(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),uX(e,t))},uZ=(e,t,r)=>{let n=t-e;return 0===n?1:(r-e)/n},uJ=(e,t)=>r=>uR(e,t,r);/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */function u0(e,t,{clamp:r=!0,ease:n,mixer:a}={}){let o=e.length;/**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */if(sM(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());let i=function(e,t,r){let n=[],a=r||function(e){if("number"==typeof e);else if("string"==typeof e)return uA.test(e)?uD:uK;else if(Array.isArray(e))return uG;else if("object"==typeof e)return uQ;return uJ}(e[0]),o=e.length-1;for(let r=0;r<o;r++){let o=a(e[r],e[r+1]);if(t){let e=Array.isArray(t)?t[r]||sM:t;o=sX(e,o)}n.push(o)}return n}(t,n,a),l=i.length,s=t=>{let r=0;if(l>1)for(;r<e.length-2&&!(t<e[r+1]);r++);let n=uZ(e[r],e[r+1],t);return i[r](n)};return r?t=>s(lK(e[0],e[o-1],t)):s}function u1({duration:e=300,keyframes:t,times:r,ease:n="easeInOut"}){/**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */let a=uf(n)?n.map(uw):uw(n),o={done:!1,value:t[0]},i=// TODO Maybe we should warn here if there's a length mismatch
(r&&r.length===t.length?r:function(e){let t=[0];return function(e,t){let r=e[e.length-1];for(let n=1;n<=t;n++){let a=uZ(0,t,n);e.push(uR(r,1,a))}}(t,e.length-1),t}(t)).map(t=>t*e),l=u0(i,t,{ease:Array.isArray(a)?a:t.map(()=>a||ud).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(o.value=l(t),o.done=t>=e,o)}}function u2(e,t,r){var n,a;let o=Math.max(t-5,0);return n=r-e(o),(a=t-o)?n*(1e3/a):0}function u5(e,t){return e*Math.sqrt(1-t*t)}const u3=["duration","bounce"],u4=["stiffness","damping","mass"];function u6(e,t){return t.some(t=>void 0!==e[t])}function u8({keyframes:e,restDelta:t,restSpeed:r,...n}){let a;let o=e[0],i=e[e.length-1],l={done:!1,value:o},{stiffness:s,damping:u,mass:c,velocity:d,duration:f,isResolvedFromDuration:p}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};// stiffness/damping/mass overrides duration/bounce
if(!u6(e,u4)&&u6(e,u3)){let r=function({duration:e=800,bounce:t=.25,velocity:r=0,mass:n=1}){let a,o;sM(e<=ut(10),"Spring duration must be 10 seconds or less");let i=1-t;/**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */i=lK(.05,1,i),e=lK(.01,10,ur(e)),i<1?(/**
         * Underdamped spring
         */a=t=>{let n=t*i,a=n*e,o=u5(t,i);return .001-(n-r)/o*Math.exp(-a)},o=t=>{let n=t*i,o=n*e,l=Math.pow(i,2)*Math.pow(t,2)*e,s=u5(Math.pow(t,2),i),u=-a(t)+.001>0?-1:1;return u*((o*r+r-l)*Math.exp(-o))/s}):(/**
         * Critically-damped spring
         */a=t=>{let n=Math.exp(-t*e),a=(t-r)*e+1;return -.001+n*a},o=t=>{let n=Math.exp(-t*e),a=(r-t)*(e*e);return n*a});let l=5/e,s=function(e,t,r){let n=r;for(let r=1;r<12;r++)n-=e(n)/t(n);return n}(a,o,l);if(e=ut(e),isNaN(s))return{stiffness:100,damping:10,duration:e};{let t=Math.pow(s,2)*n;return{stiffness:t,damping:2*i*Math.sqrt(n*t),duration:e}}}(e);(t={...t,...r,velocity:0,mass:1}).isResolvedFromDuration=!0}return t}(n),h=d?-ur(d):0,m=u/(2*Math.sqrt(s*c)),g=i-o,v=ur(Math.sqrt(s/c)),y=5>Math.abs(g);if(r||(r=y?.01:2),t||(t=y?.005:.5),m<1){let e=u5(v,m);// Underdamped spring
a=t=>{let r=Math.exp(-m*v*t);return i-r*((h+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)a=e=>i-Math.exp(-v*e)*(g+(h+v*g)*e);else{// Overdamped spring
let e=v*Math.sqrt(m*m-1);a=t=>{let r=Math.exp(-m*v*t),n=Math.min(e*t,300);return i-r*((h+m*v*g)*Math.sinh(n)+e*g*Math.cosh(n))/e}}return{calculatedDuration:p&&f||null,next:e=>{let n=a(e);if(p)l.done=e>=f;else{let o=h;0!==e&&(o=m<1?u2(a,e,n):0);let s=Math.abs(o)<=r,u=Math.abs(i-n)<=t;l.done=s&&u}return l.value=l.done?i:n,l}}}function u9({keyframes:e,velocity:t=0,power:r=.8,timeConstant:n=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:i,min:l,max:s,restDelta:u=.5,restSpeed:c}){let d,f;let p=e[0],h={done:!1,value:p},m=e=>void 0!==l&&e<l||void 0!==s&&e>s,g=e=>void 0===l?s:void 0===s?l:Math.abs(l-e)<Math.abs(s-e)?l:s,v=r*t,y=p+v,b=void 0===i?y:i(y);b!==y&&(v=b-p);let x=e=>-v*Math.exp(-e/n),k=e=>b+x(e),w=e=>{let t=x(e),r=k(e);h.done=Math.abs(t)<=u,h.value=h.done?b:r},S=e=>{m(h.value)&&(d=e,f=u8({keyframes:[h.value,g(h.value)],velocity:u2(k,e,h.value),damping:a,stiffness:o,restDelta:u,restSpeed:c}))};return S(0),{calculatedDuration:null,next:e=>{/**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */let t=!1;return(/**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */(f||void 0!==d||(t=!0,w(e),S(e)),void 0!==d&&e>d)?f.next(e-d):(t||w(e),h))}}}const u7=e=>{let t=({timestamp:t})=>e(t);return{start:()=>sj.update(t,!0),stop:()=>s$(t),/**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */now:()=>sD.isProcessing?sD.timestamp:performance.now()}};function ce(e){let t=0,r=e.next(t);for(;!r.done&&t<2e4;)t+=50,r=e.next(t);return t>=2e4?1/0:t}const ct={decay:u9,inertia:u9,tween:u1,keyframes:u1,spring:u8};/**
 * Animate a single value on the main thread.
 *
 * This function is written, where functionality overlaps,
 * to be largely spec-compliant with WAAPI to allow fungibility
 * between the two.
 */function cr({autoplay:e=!0,delay:t=0,driver:r=u7,keyframes:n,type:a="keyframes",repeat:o=0,repeatDelay:i=0,repeatType:l="loop",onPlay:s,onStop:u,onComplete:c,onUpdate:d,...f}){let p,h,m,g,v,y=1,b=!1,x=()=>{h=new Promise(e=>{p=e})};// Create the first finished promise
x();let k=ct[a]||u1;k!==u1&&"number"!=typeof n[0]&&(g=u0([0,100],n,{clamp:!1}),n=[0,100]);let w=k({...f,keyframes:n});"mirror"===l&&(v=k({...f,keyframes:[...n].reverse(),velocity:-(f.velocity||0)}));let S="idle",C=null,_=null,E=null;/**
     * If duration is undefined and we have repeat options,
     * we need to calculate a duration from the generator.
     *
     * We set it to the generator itself to cache the duration.
     * Any timeline resolver will need to have already precalculated
     * the duration by this step.
     */null===w.calculatedDuration&&o&&(w.calculatedDuration=ce(w));let{calculatedDuration:P}=w,T=1/0,z=1/0;null!==P&&(z=(T=P+i)*(o+1)-i);let A=0,R=e=>{if(null===_)return;y>0&&(_=Math.min(_,e)),y<0&&(_=Math.min(e-z/y,_)),A=null!==C?C:Math.round(e-_)*y;// Rebase on delay
let r=A-t*(y>=0?1:-1),a=y>=0?r<0:r>z;A=Math.max(r,0),"finished"===S&&null===C&&(A=z);let s=A,u=w;if(o){/**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */let e=A/T,t=Math.floor(e),r=e%1;!r&&e>=1&&(r=1),1===r&&t--,t=Math.min(t,o+1);/**
             * Reverse progress if we're not running in "normal" direction
             */let n=!!(t%2);n&&("reverse"===l?(r=1-r,i&&(r-=i/T)):"mirror"===l&&(u=v));let a=lK(0,1,r);A>z&&(a="reverse"===l&&n?1:0),s=a*T}/**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */let c=a?{done:!1,value:n[0]}:u.next(s);g&&(c.value=g(c.value));let{done:f}=c;a||null===P||(f=y>=0?A>=z:A<=0);let p=null===C&&("finished"===S||"running"===S&&f);return d&&d(c.value),p&&F(),c},M=()=>{m&&m.stop(),m=void 0},L=()=>{S="idle",M(),p(),x(),_=E=null},F=()=>{S="finished",c&&c(),M(),p()},j=()=>{if(b)return;m||(m=r(R));let e=m.now();s&&s(),null!==C?_=e-C:_&&"finished"!==S||(_=e),"finished"===S&&x(),E=_,C=null,/**
         * Set playState to running only after we've used it in
         * the previous logic.
         */S="running",m.start()};e&&j();let $={then:(e,t)=>h.then(e,t),get time(){return ur(A)},set time(newTime){A=newTime=ut(newTime),null===C&&m&&0!==y?_=m.now()-newTime/y:C=newTime},get duration(){let e=null===w.calculatedDuration?ce(w):w.calculatedDuration;return ur(e)},get speed(){return y},set speed(newSpeed){if(newSpeed===y||!m)return;y=newSpeed,$.time=ur(A)},get state(){return S},play:j,pause:()=>{S="paused",C=A},stop:()=>{b=!0,"idle"!==S&&(S="idle",u&&u(),L())},cancel:()=>{null!==E&&R(E),L()},complete:()=>{S="finished"},sample:e=>(_=0,R(e))};return $}const cn=(n=()=>Object.hasOwnProperty.call(Element.prototype,"animate"),()=>(void 0===e&&(e=n()),e)),ca=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),co=(e,t)=>"spring"===t.type||"backgroundColor"===e||!function e(t){return!!(!t||"string"==typeof t&&ui[t]||ua(t)||Array.isArray(t)&&t.every(e))}(t.ease),ci={type:"spring",stiffness:500,damping:25,restSpeed:10},cl=e=>({type:"spring",stiffness:550,damping:0===e?2*Math.sqrt(550):30,restSpeed:10}),cs={type:"keyframes",duration:.8},cu={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},cc=(e,{keyframes:t})=>t.length>2?cs:lV.has(e)?e.startsWith("scale")?cl(t[1]):ci:cu,cd=(e,t)=>// If the list of keys tat might be non-animatable grows, replace with Set
    "zIndex"!==e&&!!("number"==typeof t||Array.isArray(t)||"string"==typeof t&&// It's animatable if we have a string
    (uq.test(t)||"0"===t)&&// And it contains numbers and/or colors
    !t.startsWith("url(")// Unless it starts with "url("
    ),cf=new Set(["brightness","contrast","saturate","opacity"]);function cp(e){let[t,r]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[n]=r.match(l2)||[];if(!n)return e;let a=r.replace(n,""),o=cf.has(t)?1:0;return n!==r&&(o*=100),t+"("+o+a+")"}const ch=/([a-z-]*)\(.*?\)/g,cm={...uq,getAnimatableNone:e=>{let t=e.match(ch);return t?t.map(cp).join(" "):e}},cg={...sa,color:uA,backgroundColor:uA,outlineColor:uA,fill:uA,stroke:uA,// Border props
borderColor:uA,borderTopColor:uA,borderRightColor:uA,borderBottomColor:uA,borderLeftColor:uA,filter:cm,WebkitFilter:cm},cv=e=>cg[e];function cy(e,t){let r=cv(e);// If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
return r!==cm&&(r=uq),r.getAnimatableNone?r.getAnimatableNone(t):void 0}/**
 * Check if the value is a zero value string like "0px" or "0%"
 */const cb=e=>/^0[^.\s]+$/.test(e);function cx(e,t){return e[t]||e.default||e}const ck=(e,t,r,n={})=>a=>{let o=cx(n,e)||{},i=o.delay||n.delay||0,{elapsed:l=0}=n;l-=ut(i);let s=function(e,t,r,n){let a,o;let i=cd(t,r);a=Array.isArray(r)?[...r]:[null,r];let l=void 0!==n.from?n.from:e.get(),s=[];for(let e=0;e<a.length;e++){var u;null===a[e]&&(a[e]=0===e?l:a[e-1]),("number"==typeof(u=a[e])?0===u:null!==u?"none"===u||"0"===u||cb(u):void 0)&&s.push(e),"string"==typeof a[e]&&"none"!==a[e]&&"0"!==a[e]&&(o=a[e])}if(i&&s.length&&o)for(let e=0;e<s.length;e++){let r=s[e];a[r]=cy(t,o)}return a}(t,e,r,o),u=s[0],c=s[s.length-1],d=cd(e,u),f=cd(e,c);sM(d===f,`You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);let p={keyframes:s,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-l,onUpdate:e=>{t.set(e),o.onUpdate&&o.onUpdate(e)},onComplete:()=>{a(),o.onComplete&&o.onComplete()}};if(!/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */function({when:e,delay:t,delayChildren:r,staggerChildren:n,staggerDirection:a,repeat:o,repeatType:i,repeatDelay:l,from:s,elapsed:u,...c}){return!!Object.keys(c).length}(o)&&(p={...p,...cc(e,p)}),p.duration&&(p.duration=ut(p.duration)),p.repeatDelay&&(p.repeatDelay=ut(p.repeatDelay)),!d||!f||un.current||!1===o.type)/**
             * If we can't animate this value, or the global instant animation flag is set,
             * or this is simply defined as an instant transition, return an instant transition.
             */return function({keyframes:e,delay:t,onUpdate:r,onComplete:n}){let a=()=>(r&&r(e[e.length-1]),n&&n(),{time:0,speed:1,duration:0,play:sM,pause:sM,stop:sM,then:e=>(e(),Promise.resolve()),cancel:sM,complete:sM});return t?cr({keyframes:[0,1],duration:0,delay:t,onComplete:a}):a()}(un.current?{...p,delay:0}:p);/**
         * Animate via WAAPI if possible.
         */if(t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){let r=function(e,t,{onUpdate:r,onComplete:n,...a}){let o,i;let l=cn()&&ca.has(t)&&!a.repeatDelay&&"mirror"!==a.repeatType&&0!==a.damping&&"inertia"!==a.type;if(!l)return!1;/**
     * TODO: Unify with js/index
     */let s=!1,u=()=>{i=new Promise(e=>{o=e})};// Create the first finished promise
    u();let{keyframes:c,duration:d=300,ease:f,times:p}=a;/**
     * If this animation needs pre-generated keyframes then generate.
     */if(co(t,a)){let e=cr({...a,repeat:0,delay:0}),t={done:!1,value:c[0]},r=[],n=0;for(;!t.done&&n<2e4;)t=e.sample(n),r.push(t.value),n+=10;p=void 0,c=r,d=n-10,f="linear"}let h=function(e,t,r,{delay:n=0,duration:a,repeat:o=0,repeatType:i="loop",ease:l,times:s}={}){let u={[t]:r};s&&(u.offset=s);let c=function e(t){if(t)return ua(t)?uo(t):Array.isArray(t)?t.map(e):ui[t]}(l);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:n,duration:a,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:"reverse"===i?"alternate":"normal"})}(e.owner.current,t,c,{...a,duration:d,/**
         * This function is currently not called if ease is provided
         * as a function so the cast is safe.
         *
         * However it would be possible for a future refinement to port
         * in easing pregeneration from Motion One for browsers that
         * support the upcoming `linear()` easing function.
         */ease:f,times:p});/**
     * WAAPI animations don't resolve startTime synchronously. But a blocked
     * thread could delay the startTime resolution by a noticeable amount.
     * For synching handoff animations with the new Motion animation we want
     * to ensure startTime is synchronously set.
     */a.syncStart&&(h.startTime=sD.isProcessing?sD.timestamp:document.timeline?document.timeline.currentTime:performance.now());let m=()=>h.cancel(),g=()=>{sj.update(m),o(),u()};return(/**
     * Prefer the `onfinish` prop as it's more widely supported than
     * the `finished` promise.
     *
     * Here, we synchronously set the provided MotionValue to the end
     * keyframe. If we didn't, when the WAAPI animation is finished it would
     * be removed from the element which would then revert to its old styles.
     */h.onfinish=()=>{e.set(function(e,{repeat:t,repeatType:r="loop"}){let n=t&&"loop"!==r&&t%2==1?0:e.length-1;return e[n]}(c,a)),n&&n(),g()},{then:(e,t)=>i.then(e,t),attachTimeline:e=>(h.timeline=e,h.onfinish=null,sM),get time(){return ur(h.currentTime||0)},set time(newTime){h.currentTime=ut(newTime)},get speed(){return h.playbackRate},set speed(newSpeed){h.playbackRate=newSpeed},get duration(){return ur(d)},play:()=>{s||(h.play(),s$(m))},pause:()=>h.pause(),stop:()=>{if(s=!0,"idle"===h.playState)return;/**
             * WAAPI doesn't natively have any interruption capabilities.
             *
             * Rather than read commited styles back out of the DOM, we can
             * create a renderless JS animation and sample it twice to calculate
             * its current value, "previous" value, and therefore allow
             * Motion to calculate velocity for any subsequent animation.
             */let{currentTime:t}=h;if(t){let r=cr({...a,autoplay:!1});e.setWithVelocity(r.sample(t-10).value,r.sample(t).value,10)}g()},complete:()=>h.finish(),cancel:g})}(t,e,p);if(r)return r}/**
         * If we didn't create an accelerated animation, create a JS animation
         */return cr(p)};function cw(e){return!!(lU(e)&&e.add)}/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */const cS=e=>/^\-?\d*\.?\d+$/.test(e);function cC(e,t){-1===e.indexOf(t)&&e.push(t)}function c_(e,t){let r=e.indexOf(t);r>-1&&e.splice(r,1)}class cE{constructor(){this.subscriptions=[]}add(e){return cC(this.subscriptions,e),()=>c_(this.subscriptions,e)}notify(e,t,r){let n=this.subscriptions.length;if(n){if(1===n)/**
             * If there's only a single handler we can just call it without invoking a loop.
             */this.subscriptions[0](e,t,r);else for(let a=0;a<n;a++){/**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */let n=this.subscriptions[a];n&&n(e,t,r)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const cP=e=>!isNaN(parseFloat(e)),cT={current:void 0};/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */class cz{/**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */constructor(e,t={}){/**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */this.version="10.16.4",/**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */this.timeDelta=0,/**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */this.lastUpdated=0,/**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */this.canTrackVelocity=!1,/**
         * An object containing a SubscriptionManager for each active event.
         */this.events={},this.updateAndNotify=(e,t=!0)=>{this.prev=this.current,this.current=e;// Update timestamp
let{delta:r,timestamp:n}=sD;this.lastUpdated!==n&&(this.timeDelta=r,this.lastUpdated=n,sj.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),t&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},/**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */this.scheduleVelocityCheck=()=>sj.postRender(this.velocityCheck),/**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */this.velocityCheck=({timestamp:e})=>{e!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=cP(this.current),this.owner=t.owner}/**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new cE);let r=this.events[e].add(t);return"change"===e?()=>{r(),sj.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(let e in this.events)this.events[e].clear()}/**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}/**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */set(e,t=!0){t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,r){this.set(t),this.prev=e,this.timeDelta=r}/**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}/**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */get(){return cT.current&&cT.current.push(this),this.current}/**
     * @public
     */getPrevious(){return this.prev}/**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */getVelocity(){var e,t;// This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
return this.canTrackVelocity?(e=parseFloat(this.current)-parseFloat(this.prev),(t=this.timeDelta)?e*(1e3/t):0):0}/**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}/**
     * Stop the currently active animation.
     *
     * @public
     */stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}/**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}/**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function cA(e,t){return new cz(e,t)}/**
 * Tests a provided value against a ValueType
 */const cR=e=>t=>t.test(e),cM=[lZ,l7,l9,l8,st,se,{test:e=>"auto"===e,parse:e=>e}],cL=e=>cM.find(cR(e)),cF=[...cM,uA,uq],cj=e=>cF.find(cR(e));function c$(e,t,{delay:r=0,transitionOverride:n,type:a}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:i,...l}=e.makeTargetAnimatable(t),s=e.getValue("willChange");n&&(o=n);let u=[],c=a&&e.animationState&&e.animationState.getState()[a];for(let t in l){let n=e.getValue(t),a=l[t];if(!n||void 0===a||c&&/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */function({protectedKeys:e,needsAnimating:t},r){let n=e.hasOwnProperty(r)&&!0!==t[r];return t[r]=!1,n}(c,t))continue;let i={delay:r,elapsed:0,...o};/**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */if(window.HandoffAppearAnimations&&!n.hasAnimated){let r=e.getProps()[ue];r&&(i.elapsed=window.HandoffAppearAnimations(r,t,n,sj),i.syncStart=!0)}n.start(ck(t,n,a,e.shouldReduceMotion&&lV.has(t)?{type:!1}:i));let d=n.animation;cw(s)&&(s.add(t),d.then(()=>s.remove(t))),u.push(d)}return i&&Promise.all(u).then(()=>{i&&function(e,t){let r=s7(e,t),{transitionEnd:n={},transition:a={},...o}=r?e.makeTargetAnimatable(r,!1):{};for(let t in o={...o,...n}){let r=sz(o[t]);e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,cA(r))}}(e,i)}),u}function cD(e,t,r={}){let n=s7(e,t,r.custom),{transition:a=e.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(a=r.transitionOverride);/**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */let o=n?()=>Promise.all(c$(e,n,r)):()=>Promise.resolve(),i=e.variantChildren&&e.variantChildren.size?(n=0)=>{let{delayChildren:o=0,staggerChildren:i,staggerDirection:l}=a;return function(e,t,r=0,n=0,a=1,o){let i=[],l=(e.variantChildren.size-1)*n,s=1===a?(e=0)=>e*n:(e=0)=>l-e*n;return Array.from(e.variantChildren).sort(cB).forEach((e,n)=>{e.notify("AnimationStart",t),i.push(cD(e,t,{...o,delay:r+s(n)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(i)}(e,t,o+n,i,l,r)}:()=>Promise.resolve(),{when:l}=a;if(!l)return Promise.all([o(),i(r.delay)]);{let[e,t]="beforeChildren"===l?[o,i]:[i,o];return e().then(()=>t())}}function cB(e,t){return e.sortNodePosition(t)}const cI=[...lT].reverse(),cO=lT.length;function cN(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let cV=0;const cW=(e,t)=>Math.abs(e-t);/**
 * @internal
 */class cU{constructor(e,t,{transformPagePoint:r}={}){// If we have more than one touch, don't start detecting this gesture
if(/**
         * @internal
         */this.startEvent=null,/**
         * @internal
         */this.lastMoveEvent=null,/**
         * @internal
         */this.lastMoveEventInfo=null,/**
         * @internal
         */this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=cX(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,r=function(e,t){// Multi-dimensional
let r=cW(e.x,t.x),n=cW(e.y,t.y);return Math.sqrt(r**2+n**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!r)return;let{point:n}=e,{timestamp:a}=sD;this.history.push({...n,timestamp:a});let{onStart:o,onMove:i}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),i&&i(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=cH(t,this.transformPagePoint),sj.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let{onEnd:r,onSessionEnd:n}=this.handlers,a=cX("pointercancel"===e.type?this.lastMoveEventInfo:cH(t,this.transformPagePoint),this.history);this.startEvent&&r&&r(e,a),n&&n(e,a)},!sV(e))return;this.handlers=t,this.transformPagePoint=r;let n=sW(e),a=cH(n,this.transformPagePoint),{point:o}=a,{timestamp:i}=sD;this.history=[{...o,timestamp:i}];let{onSessionStart:l}=t;l&&l(e,cX(a,this.history)),this.removeListeners=sX(sH(window,"pointermove",this.handlePointerMove),sH(window,"pointerup",this.handlePointerUp),sH(window,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),s$(this.updatePoint)}}function cH(e,t){return t?{point:t(e.point)}:e}function cq(e,t){return{x:e.x-t.x,y:e.y-t.y}}function cX({point:e},t){return{point:e,delta:cq(e,cY(t)),offset:cq(e,t[0]),velocity:function(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null,a=cY(e);for(;r>=0&&(n=e[r],!(a.timestamp-n.timestamp>ut(.1)));)r--;if(!n)return{x:0,y:0};let o=ur(a.timestamp-n.timestamp);if(0===o)return{x:0,y:0};let i={x:(a.x-n.x)/o,y:(a.y-n.y)/o};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}(t,0)}}function cY(e){return e[e.length-1]}function cG(e){return e.max-e.min}function cQ(e,t=0,r=.01){return Math.abs(e-t)<=r}function cK(e,t,r,n=.5){e.origin=n,e.originPoint=uR(t.min,t.max,e.origin),e.scale=cG(r)/cG(t),(cQ(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=uR(r.min,r.max,e.origin)-e.originPoint,(cQ(e.translate)||isNaN(e.translate))&&(e.translate=0)}function cZ(e,t,r,n){cK(e.x,t.x,r.x,n?n.originX:void 0),cK(e.y,t.y,r.y,n?n.originY:void 0)}function cJ(e,t,r){e.min=r.min+t.min,e.max=e.min+cG(t)}function c0(e,t,r){e.min=t.min-r.min,e.max=e.min+cG(t)}function c1(e,t,r){c0(e.x,t.x,r.x),c0(e.y,t.y,r.y)}/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */function c2(e,t,r){return{min:void 0!==t?e.min+t:void 0,max:void 0!==r?e.max+r-(e.max-e.min):void 0}}/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */function c5(e,t){let r=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,n]=[n,r]),{min:r,max:n}}function c3(e,t,r){return{min:c4(e,t),max:c4(e,r)}}function c4(e,t){return"number"==typeof e?e:e[t]||0}const c6=()=>({translate:0,scale:1,origin:0,originPoint:0}),c8=()=>({x:c6(),y:c6()}),c9=()=>({min:0,max:0}),c7=()=>({x:c9(),y:c9()});function de(e){return[e("x"),e("y")]}/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */function dt({top:e,left:t,right:r,bottom:n}){return{x:{min:t,max:r},y:{min:e,max:n}}}function dr(e){return void 0===e||1===e}function dn({scale:e,scaleX:t,scaleY:r}){return!dr(e)||!dr(t)||!dr(r)}function da(e){return dn(e)||di(e)||e.z||e.rotate||e.rotateX||e.rotateY}function di(e){var t,r;return(t=e.x)&&"0%"!==t||(r=e.y)&&"0%"!==r}/**
 * Applies a translate/scale delta to a point
 */function dl(e,t,r,n,a){return void 0!==a&&(e=n+a*(e-n)),n+r*(e-n)+t}/**
 * Applies a translate/scale delta to an axis
 */function ds(e,t=0,r=1,n,a){e.min=dl(e.min,t,r,n,a),e.max=dl(e.max,t,r,n,a)}/**
 * Applies a translate/scale delta to a box
 */function du(e,{x:t,y:r}){ds(e.x,t.translate,t.scale,t.originPoint),ds(e.y,r.translate,r.scale,r.originPoint)}function dc(e){return Number.isInteger(e)?e:e>1.0000000000001||e<.999999999999?e:1}function dd(e,t){e.min=e.min+t,e.max=e.max+t}/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */function df(e,t,[r,n,a]){let o=void 0!==t[a]?t[a]:.5,i=uR(e.min,e.max,o);// Apply the axis delta to the final axis
ds(e,t[r],t[n],i,t.scale)}/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */const dp=["x","scaleX","originX"],dh=["y","scaleY","originY"];/**
 * Apply a transform to a box from the latest resolved motion values.
 */function dm(e,t){df(e.x,t,dp),df(e.y,t,dh)}function dg(e,t){return dt(/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */function(e,t){if(!t)return e;let r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}(e.getBoundingClientRect(),t))}const dv=new WeakMap;/**
 *
 */// let latestPointerEvent: PointerEvent
class dy{constructor(e){// This is a reference to the global drag gesture lock, ensuring only one component
// can "capture" the drag of one or both axes.
// TODO: Look into moving this into pansession?
this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},/**
         * The permitted boundaries of travel, in pixels.
         */this.constraints=!1,this.hasMutatedConstraints=!1,/**
         * The per-axis resolved elastic values.
         */this.elastic=c7(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){/**
         * Don't start dragging if this component is exiting
         */let{presenceContext:r}=this.visualElement;r&&!1===r.isPresent||(this.panSession=new cU(e,{onSessionStart:e=>{// Stop any animations on both axis values immediately. This allows the user to throw and catch
// the component.
this.stopAnimation(),t&&this.snapToCursor(sW(e,"page").point)},onStart:(e,t)=>{// Attempt to grab the global drag gesture lock - maybe make this part of PanSession
let{drag:r,dragPropagation:n,onDragStart:a}=this.getProps();if(r&&!n&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=sK(r),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),de(e=>{let t=this.getAxisMotionValue(e).get()||0;/**
                 * If the MotionValue is a percentage value convert to px
                 */if(l9.test(t)){let{projection:r}=this.visualElement;if(r&&r.layout){let n=r.layout.layoutBox[e];if(n){let e=cG(n);t=e*(parseFloat(t)/100)}}}this.originPoint[e]=t}),a&&sj.update(()=>a(e,t),!1,!0);let{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{// latestPointerEvent = event
let{dragPropagation:r,dragDirectionLock:n,onDirectionLock:a,onDrag:o}=this.getProps();// If we didn't successfully receive the gesture lock, early return.
if(!r&&!this.openGlobalLock)return;let{offset:i}=t;// Attempt to detect drag direction if directionLock is true
if(n&&null===this.currentDirection){this.currentDirection=/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */function(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}(i),null!==this.currentDirection&&a&&a(this.currentDirection);return}// Update each point with the latest position
this.updateAxis("x",t.point,i),this.updateAxis("y",t.point,i),/**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */this.visualElement.render(),/**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t)},{transformPagePoint:this.visualElement.getTransformPagePoint()}))}stop(e,t){let r=this.isDragging;if(this.cancel(),!r)return;let{velocity:n}=t;this.startAnimation(n);let{onDragEnd:a}=this.getProps();a&&sj.update(()=>a(e,t))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){let{drag:n}=this.getProps();// If we're not dragging this axis, do an early return.
if(!r||!db(e,n,this.currentDirection))return;let a=this.getAxisMotionValue(e),o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */function(e,{min:t,max:r},n){return void 0!==t&&e<t?e=n?uR(t,e,n.min):Math.max(e,t):void 0!==r&&e>r&&(e=n?uR(r,e,n.max):Math.min(e,r)),e}(o,this.constraints[e],this.elastic[e])),a.set(o)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),{layout:r}=this.visualElement.projection||{},n=this.constraints;e&&l_(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */function(e,{top:t,left:r,bottom:n,right:a}){return{x:c2(e.x,r,a),y:c2(e.y,t,n)}}(r.layoutBox,e):this.constraints=!1,this.elastic=/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */function(e=.35){return!1===e?e=0:!0===e&&(e=.35),{x:c3(e,"left","right"),y:c3(e,"top","bottom")}}(t),n!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&de(e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */function(e,t){let r={};return void 0!==t.min&&(r.min=t.min-e.min),void 0!==t.max&&(r.max=t.max-e.min),r}(r.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){var e;let{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!l_(t))return!1;let n=t.current;sM(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:a}=this.visualElement;// TODO
if(!a||!a.layout)return!1;let o=function(e,t,r){let n=dg(e,r),{scroll:a}=t;return a&&(dd(n.x,a.offset.x),dd(n.y,a.offset.y)),n}(n,a.root,this.visualElement.getTransformPagePoint()),i={x:c5((e=a.layout.layoutBox).x,o.x),y:c5(e.y,o.y)};/**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */if(r){let e=r(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(i));this.hasMutatedConstraints=!!e,e&&(i=dt(e))}return i}startAnimation(e){let{drag:t,dragMomentum:r,dragElastic:n,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:i}=this.getProps(),l=this.constraints||{},s=de(i=>{if(!db(i,t,this.currentDirection))return;let s=l&&l[i]||{};o&&(s={min:0,max:0});let u={type:"inertia",velocity:r?e[i]:0,bounceStiffness:n?200:1e6,bounceDamping:n?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...a,...s};// If we're not animating on an externally-provided `MotionValue` we can use the
// component's animation controls which will handle interactions with whileHover (etc),
// otherwise we just have to animate the `MotionValue` itself.
return this.startAxisValueAnimation(i,u)});// Run all animations and then resolve the new drag constraints.
return Promise.all(s).then(i)}startAxisValueAnimation(e,t){let r=this.getAxisMotionValue(e);return r.start(ck(e,r,0,t))}stopAnimation(){de(e=>this.getAxisMotionValue(e).stop())}/**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */getAxisMotionValue(e){let t="_drag"+e.toUpperCase(),r=this.visualElement.getProps(),n=r[t];return n||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){de(t=>{let{drag:r}=this.getProps();// If we're not dragging this axis, do an early return.
if(!db(t,r,this.currentDirection))return;let{projection:n}=this.visualElement,a=this.getAxisMotionValue(t);if(n&&n.layout){let{min:r,max:o}=n.layout.layoutBox[t];a.set(e[t]-uR(r,o,.5))}})}/**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!l_(t)||!r||!this.constraints)return;/**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */this.stopAnimation();/**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */let n={x:0,y:0};de(e=>{let t=this.getAxisMotionValue(e);if(t){let r=t.get();n[e]=/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */function(e,t){let r=.5,n=cG(e),a=cG(t);return a>n?r=uZ(t.min,t.max-n,e.min):n>a&&(r=uZ(e.min,e.max-a,t.min)),lK(0,1,r)}({min:r,max:r},this.constraints[e])}});/**
         * Update the layout of this element and resolve the latest drag constraints
         */let{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),de(t=>{if(!db(t,e,null))return;/**
             * Calculate a new transform based on the previous box progress
             */let r=this.getAxisMotionValue(t),{min:a,max:o}=this.constraints[t];r.set(uR(a,o,n[t]))})}addListeners(){if(!this.visualElement.current)return;dv.set(this.visualElement,this);let e=this.visualElement.current,t=sH(e,"pointerdown",e=>{let{drag:t,dragListener:r=!0}=this.getProps();t&&r&&this.start(e)}),r=()=>{let{dragConstraints:e}=this.getProps();l_(e)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,a=n.addEventListener("measure",r);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),r();/**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */let o=sN(window,"resize",()=>this.scalePositionWithinConstraints()),i=n.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(de(t=>{let r=this.getAxisMotionValue(t);r&&(this.originPoint[t]+=e[t].translate,r.set(r.get()+e[t].translate))}),this.visualElement.render())});return()=>{o(),t(),a(),i&&i()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:n=!1,dragConstraints:a=!1,dragElastic:o=.35,dragMomentum:i=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:n,dragConstraints:a,dragElastic:o,dragMomentum:i}}}function db(e,t,r){return(!0===t||t===e)&&(null===r||r===e)}const dx=e=>(t,r)=>{e&&sj.update(()=>e(t,r))};var D=(j("acw62"),j("acw62"));/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */const dk={/**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */hasAnimatedSinceResize:!0,/**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */hasEverUpdated:!1};function dw(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */const dS={correct:(e,t)=>{if(!t.target)return e;/**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */if("string"==typeof e){if(!l7.test(e))return e;e=parseFloat(e)}/**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */let r=dw(e,t.target.x),n=dw(e,t.target.y);return`${r}% ${n}%`}};class dC extends /*@__PURE__*/M(D).Component{/**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:n}=this.props,{projection:a}=e;Object.assign(lO,dE),a&&(t.group&&t.group.add(a),r&&r.register&&n&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),dk.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:r,drag:n,isPresent:a}=this.props,o=r.projection;return o&&(/**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */o.isPresent=a,n||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent===a||(a?o.promote():o.relegate()||sj.postRender(()=>{let e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:n}=e;n&&(n.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(n),r&&r.deregister&&r.deregister(n))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}function d_(e){let[t,r]=/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */function(){let e=(0,D.useContext)(lk);if(null===e)return[!0,null];let{isPresent:t,onExitComplete:r,register:n}=e,a=(0,D.useId)();return(0,D.useEffect)(()=>n(a),[]),!t&&r?[!1,()=>r&&r(a)]:[!0]}(),n=(0,D.useContext)(lj);return /*@__PURE__*/M(D).createElement(dC,{...e,layoutGroup:n,switchLayoutGroup:(0,D.useContext)(l$),isPresent:t,safeToRemove:r})}const dE={borderRadius:{...dS,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:dS,borderTopRightRadius:dS,borderBottomLeftRadius:dS,borderBottomRightRadius:dS,boxShadow:{correct:(e,{treeScale:t,projectionDelta:r})=>{let n=uq.parse(e);// TODO: Doesn't support multiple shadows
if(n.length>5)return e;let a=uq.createTransformer(e),o="number"!=typeof n[0]?1:0,i=r.x.scale*t.x,l=r.y.scale*t.y;n[0+o]/=i,n[1+o]/=l;/**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */let s=uR(i,l,.5);return"number"==typeof n[2+o]&&(n[2+o]/=s),"number"==typeof n[3+o]&&(n[3+o]/=s),a(n)}}},dP=["TopLeft","TopRight","BottomLeft","BottomRight"],dT=dP.length,dz=e=>"string"==typeof e?parseFloat(e):e,dA=e=>"number"==typeof e||l7.test(e);function dR(e,t){return void 0!==e[t]?e[t]:e.borderRadius}// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
const dM=dF(0,.5,ug),dL=dF(.5,.95,sM);function dF(e,t,r){return n=>// Could replace ifs with clamp
    n<e?0:n>t?1:r(uZ(e,t,n))}/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */function dj(e,t){e.min=t.min,e.max=t.max}/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */function d$(e,t){dj(e.x,t.x),dj(e.y,t.y)}/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */function dD(e,t,r,n,a){return e-=t,e=n+1/r*(e-n),void 0!==a&&(e=n+1/a*(e-n)),e}/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */function dB(e,t,[r,n,a],o,i){!/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */function(e,t=0,r=1,n=.5,a,o=e,i=e){if(l9.test(t)){t=parseFloat(t);let e=uR(i.min,i.max,t/100);t=e-i.min}if("number"!=typeof t)return;let l=uR(o.min,o.max,n);e===o&&(l-=t),e.min=dD(e.min,t,r,l,a),e.max=dD(e.max,t,r,l,a)}(e,t[r],t[n],t[a],t.scale,o,i)}/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */const dI=["x","scaleX","originX"],dO=["y","scaleY","originY"];/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */function dN(e,t,r,n){dB(e.x,t,dI,r?r.x:void 0,n?n.x:void 0),dB(e.y,t,dO,r?r.y:void 0,n?n.y:void 0)}function dV(e){return 0===e.translate&&1===e.scale}function dW(e){return dV(e.x)&&dV(e.y)}function dU(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function dH(e){return cG(e.x)/cG(e.y)}class dq{constructor(){this.members=[]}add(e){cC(this.members,e),e.scheduleRender()}remove(e){if(c_(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t;let r=this.members.findIndex(t=>e===t);if(0===r)return!1;for(let e=r;e>=0;e--){let r=this.members[e];if(!1!==r.isPresent){t=r;break}}return!!t&&(this.promote(t),!0)}promote(e,t){let r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);let{crossfade:n}=e.options;!1===n&&r.hide();/**
             * TODO:
             *   - Test border radius when previous node was deleted
             *   - boxShadow mixing
             *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
             *   - Shared between element A in transformed container and element B (transform stays the same or changes)
             *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
             * ---
             *   - Crossfade opacity of root nodes
             *   - layoutId changes after animation
             *   - layoutId changes mid animation
             */}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}/**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function dX(e,t,r){let n="",a=e.x.translate/t.x,o=e.y.translate/t.y;if((a||o)&&(n=`translate3d(${a}px, ${o}px, 0) `),(1!==t.x||1!==t.y)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),r){let{rotate:e,rotateX:t,rotateY:a}=r;e&&(n+=`rotate(${e}deg) `),t&&(n+=`rotateX(${t}deg) `),a&&(n+=`rotateY(${a}deg) `)}/**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */let i=e.x.scale*t.x,l=e.y.scale*t.y;return(1!==i||1!==l)&&(n+=`scale(${i}, ${l})`),n||"none"}const dY=(e,t)=>e.depth-t.depth;class dG{constructor(){this.children=[],this.isDirty=!1}add(e){cC(this.children,e),this.isDirty=!0}remove(e){c_(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(dY),this.isDirty=!1,this.children.forEach(e)}}const dQ=["","X","Y","Z"];let dK=0;/**
 * Use a mutable data object for debug data so as to not create a new
 * object every frame.
 */const dZ={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function dJ({attachResizeListener:e,defaultParent:t,measureScroll:r,checkIsScrollRoot:n,resetTransform:a}){return class{constructor(e={},r=null==t?void 0:t()){/**
             * A unique ID generated for every projection node.
             */this.id=dK++,/**
             * An id that represents a unique session instigated by startUpdate.
             */this.animationId=0,/**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */this.children=new Set,/**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */this.options={},/**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */this.isTreeAnimating=!1,this.isAnimationBlocked=!1,/**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */this.isLayoutDirty=!1,/**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */this.isProjectionDirty=!1,/**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */this.isSharedProjectionDirty=!1,/**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */this.isTransformDirty=!1,/**
             * Block layout updates for instant layout transitions throughout the tree.
             */this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,/**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */this.isUpdating=!1,/**
             * If this is an SVG element we currently disable projection transforms
             */this.isSVG=!1,/**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */this.needsReset=!1,/**
             * Flags whether this node should have its transform reset prior to measuring.
             */this.shouldResetTransform=!1,/**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */this.treeScale={x:1,y:1},/**
             *
             */this.eventHandlers=new Map,this.hasTreeAnimated=!1,// Note: Currently only running on root node
this.updateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},/**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */this.updateProjection=()=>{/**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */dZ.totalNodes=dZ.resolvedTargetDeltas=dZ.recalculatedProjection=0,this.nodes.forEach(d2),this.nodes.forEach(d7),this.nodes.forEach(fe),this.nodes.forEach(d5),window.MotionDebug&&window.MotionDebug.record(dZ)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,/**
             * Shared layout
             */// TODO Only running on root node
this.sharedNodes=new Map,this.latestValues=e,this.root=r?r.root||r:this,this.path=r?[...r.path,r]:[],this.parent=r,this.depth=r?r.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new dG)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new cE),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let r=this.eventHandlers.get(e);r&&r.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}/**
         * Lifecycles
         */mount(t,r=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=t instanceof SVGElement&&"svg"!==t.tagName,this.instance=t;let{layoutId:n,layout:a,visualElement:o}=this.options;if(o&&!o.current&&o.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),r&&(a||n)&&(this.isLayoutDirty=!0),e){let r;let n=()=>this.root.updateBlockedByResize=!1;e(t,()=>{this.root.updateBlockedByResize=!0,r&&r(),r=/**
 * Timeout defined in ms
 */function(e,t){let r=performance.now(),n=({timestamp:a})=>{let o=a-r;o>=t&&(s$(n),e(o-t))};return sj.read(n,!0),()=>s$(n)}(n,250),dk.hasAnimatedSinceResize&&(dk.hasAnimatedSinceResize=!1,this.nodes.forEach(d9))})}n&&this.root.registerSharedNode(n,this),!1!==this.options.animate&&o&&(n||a)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeTargetChanged:r,layout:n})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}// TODO: Check here if an animation exists
let a=this.options.transition||o.getDefaultTransition()||fi,{onLayoutAnimationStart:i,onLayoutAnimationComplete:l}=o.getProps(),s=!this.targetLayout||!dU(this.targetLayout,n)||r,u=!t&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||t&&(s||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(e,u);let t={...cx(a,"layout"),onPlay:i,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t)}else t||d9(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=n})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,s$(this.updateProjection)}// only on the root
blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}// Note: currently only running on root node
startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ft),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:r}=this.options;if(void 0===t&&!r)return;let n=this.getTransformTemplate();this.prevTransformTemplateValue=n?n(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;let e=this.isUpdateBlocked();// When doing an instant transition, we skip the layout update,
// but should still clean up the measurements so that the next
// snapshot could be taken correctly.
if(e){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(d4);return}this.isUpdating||this.nodes.forEach(d6),this.isUpdating=!1,/**
             * Write
             */this.nodes.forEach(d8),/**
             * Read ==================
             */// Update layout measurements of updated children
this.nodes.forEach(d0),/**
             * Write
             */// Notify listeners that the layout is updated
this.nodes.forEach(d1),this.clearAllSnapshots();/**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */let t=performance.now();sD.delta=lK(0,1e3/60,t-sD.timestamp),sD.timestamp=t,sD.isProcessing=!0,sB.update.process(sD),sB.preRender.process(sD),sB.render.process(sD),sD.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(d3),this.sharedNodes.forEach(fr)}scheduleUpdateProjection(){sj.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){sj.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}/**
         * Update measurements
         */updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(// TODO: Incorporate into a forwarded scroll offset
this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;/**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++){let t=this.path[e];t.updateScroll()}let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected=c7(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:n(this.instance),offset:r(this.instance)})}resetTransform(){if(!a)return;let e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!dW(this.projectionDelta),r=this.getTransformTemplate(),n=r?r(this.latestValues,""):void 0,o=n!==this.prevTransformTemplateValue;e&&(t||da(this.latestValues)||o)&&(a(this.instance,n),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){var t;let r=this.measurePageBox(),n=this.removeElementScroll(r);return e&&(n=this.removeTransform(n)),fu((t=n).x),fu(t.y),{animationId:this.root.animationId,measuredBox:r,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return c7();let t=e.measureViewportBox(),{scroll:r}=this.root;return r&&(dd(t.x,r.offset.x),dd(t.y,r.offset.y)),t}removeElementScroll(e){let t=c7();d$(t,e);/**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */for(let r=0;r<this.path.length;r++){let n=this.path[r],{scroll:a,options:o}=n;if(n!==this.root&&a&&o.layoutScroll){/**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */if(a.isRoot){d$(t,e);let{scroll:r}=this.root;/**
                         * Undo the application of page scroll that was originally added
                         * to the measured bounding box.
                         */r&&(dd(t.x,-r.offset.x),dd(t.y,-r.offset.y))}dd(t.x,a.offset.x),dd(t.y,a.offset.y)}}return t}applyTransform(e,t=!1){let r=c7();d$(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&dm(r,{x:-n.scroll.offset.x,y:-n.scroll.offset.y}),da(n.latestValues)&&dm(r,n.latestValues)}return da(this.latestValues)&&dm(r,this.latestValues),r}removeTransform(e){let t=c7();d$(t,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];if(!r.instance||!da(r.latestValues))continue;dn(r.latestValues)&&r.updateSnapshot();let n=c7(),a=r.measurePageBox();d$(n,a),dN(t,r.latestValues,r.snapshot?r.snapshot.layoutBox:void 0,n)}return da(this.latestValues)&&dN(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==sD.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){var t,r,n,a;/**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */let o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);let i=!!this.resumingFrom||this!==o,l=!(e||i&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget);if(l)return;let{layout:s,layoutId:u}=this.options;/**
             * If we have no layout, we can't perform projection, so early return
             */if(this.layout&&(s||u)){/**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */// TODO If this is unsuccessful this currently happens every frame
if(this.resolvedRelativeTargetAt=sD.timestamp,!this.targetDelta&&!this.relativeTarget){// TODO: This is a semi-repetition of further down this function, make DRY
let e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=c7(),this.relativeTargetOrigin=c7(),c1(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),d$(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}/**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */if(this.relativeTarget||this.targetDelta){/**
             * If we've been told to attempt to resolve a relative target, do so.
             */if((this.target||(this.target=c7(),this.targetWithTransforms=c7()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target)?(this.forceRelativeParentToResolveTarget(),r=this.target,n=this.relativeTarget,a=this.relativeParent.target,cJ(r.x,n.x,a.x),cJ(r.y,n.y,a.y)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):d$(this.target,this.layout.layoutBox),du(this.target,this.targetDelta)):d$(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;let e=this.getClosestProjectingParent();e&&!!e.resumingFrom==!!this.resumingFrom&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=c7(),this.relativeTargetOrigin=c7(),c1(this.relativeTargetOrigin,this.target,e.target),d$(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}/**
             * Increase debug counter for resolved target deltas
             */dZ.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||dn(this.parent.latestValues)||di(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;let t=this.getLead(),r=!!this.resumingFrom||this!==t,n=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(n=!1),r&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===sD.timestamp&&(n=!1),n)return;let{layout:a,layoutId:o}=this.options;if(/**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(a||o))return;d$(this.layoutCorrected,this.layout.layoutBox);/**
             * Record previous tree scales before updating.
             */let i=this.treeScale.x,l=this.treeScale.y;!/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */function(e,t,r,n=!1){let a,o;let i=r.length;if(i){// Reset the treeScale
t.x=t.y=1;for(let l=0;l<i;l++){o=(a=r[l]).projectionDelta;/**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */let i=a.instance;(!i||!i.style||"contents"!==i.style.display)&&(n&&a.options.layoutScroll&&a.scroll&&a!==a.root&&dm(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(// Incoporate each ancestor's scale into a culmulative treeScale for this component
t.x*=o.x.scale,t.y*=o.y.scale,// Apply each ancestor's calculated delta into this component's recorded layout box
du(e,o)),n&&da(a.latestValues)&&dm(e,a.latestValues))}/**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */t.x=dc(t.x),t.y=dc(t.y)}}(this.layoutCorrected,this.treeScale,this.path,r),t.layout&&!t.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(t.target=t.layout.layoutBox);let{target:s}=t;if(!s){/**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */this.projectionTransform&&(this.projectionDelta=c8(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=c8(),this.projectionDeltaWithTransform=c8());let u=this.projectionTransform;cZ(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.projectionTransform=dX(this.projectionDelta,this.treeScale),(this.projectionTransform!==u||this.treeScale.x!==i||this.treeScale.y!==l)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s)),/**
             * Increase debug counter for recalculated projections
             */dZ.recalculatedProjection++}hide(){this.isVisible=!1;// TODO: Schedule render
}show(){this.isVisible=!0;// TODO: Schedule render
}scheduleRender(e=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e,t=!1){let r;let n=this.snapshot,a=n?n.latestValues:{},o={...this.latestValues},i=c8();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let l=c7(),s=n?n.source:void 0,u=this.layout?this.layout.source:void 0,c=s!==u,d=this.getStack(),f=!d||d.members.length<=1,p=!!(c&&!f&&!0===this.options.crossfade&&!this.path.some(fo));this.animationProgress=0,this.mixTargetDelta=t=>{let n=t/1e3;if(fn(i.x,e.x,n),fn(i.y,e.y,n),this.setTargetDelta(i),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var s,u,d,h;c1(l,this.layout.layoutBox,this.relativeParent.layout.layoutBox),d=this.relativeTarget,h=this.relativeTargetOrigin,fa(d.x,h.x,l.x,n),fa(d.y,h.y,l.y,n),r&&(s=this.relativeTarget,u=r,s.x.min===u.x.min&&s.x.max===u.x.max&&s.y.min===u.y.min&&s.y.max===u.y.max)&&(this.isProjectionDirty=!1),r||(r=c7()),d$(r,this.relativeTarget)}c&&(this.animationValues=o,function(e,t,r,n,a,o){a?(e.opacity=uR(0,void 0!==r.opacity?r.opacity:1,dM(n)),e.opacityExit=uR(void 0!==t.opacity?t.opacity:1,0,dL(n))):o&&(e.opacity=uR(void 0!==t.opacity?t.opacity:1,void 0!==r.opacity?r.opacity:1,n));/**
     * Mix border radius
     */for(let a=0;a<dT;a++){let o=`border${dP[a]}Radius`,i=dR(t,o),l=dR(r,o);if(void 0===i&&void 0===l)continue;i||(i=0),l||(l=0);let s=0===i||0===l||dA(i)===dA(l);s?(e[o]=Math.max(uR(dz(i),dz(l),n),0),(l9.test(l)||l9.test(i))&&(e[o]+="%")):e[o]=l}/**
     * Mix rotation
     */(t.rotate||r.rotate)&&(e.rotate=uR(t.rotate||0,r.rotate||0,n))}(o,a,this.latestValues,n,p,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(s$(this.pendingAnimation),this.pendingAnimation=void 0),/**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */this.pendingAnimation=sj.update(()=>{dk.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,r){let n=lU(e)?e:cA(e);return n.start(ck("",n,1e3,r)),n.animation}(0,0,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:r,layout:n,latestValues:a}=e;if(t&&r&&n){/**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */if(this!==e&&this.layout&&n&&fc(this.options.animationType,this.layout.layoutBox,n.layoutBox)){r=this.target||c7();let t=cG(this.layout.layoutBox.x);r.x.min=e.target.x.min,r.x.max=r.x.min+t;let n=cG(this.layout.layoutBox.y);r.y.min=e.target.y.min,r.y.max=r.y.min+n}d$(t,r),dm(t,a),cZ(this.projectionDeltaWithTransform,this.layoutCorrected,t,a)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new dq);let r=this.sharedNodes.get(e);r.add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){var e;let{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;let{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:r}={}){let n=this.getStack();n&&n.promote(this,r),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){let{visualElement:e}=this.options;if(!e)return;// If there's no detected rotation values, we can early return without a forced render.
let t=!1,{latestValues:r}=e;// If there's no rotation values, we don't need to do any more.
if((r.rotate||r.rotateX||r.rotateY||r.rotateZ)&&(t=!0),!t)return;let n={};// Check the rotate value of all axes and reset to 0
for(let t=0;t<dQ.length;t++){let a="rotate"+dQ[t];// Record the rotation and then temporarily set it to 0
r[a]&&(n[a]=r[a],e.setStaticValue(a,0))}// Put back all the values we reset
for(let t in // Force a render of this element to apply the transform with all rotations
// set to 0.
e.render(),n)e.setStaticValue(t,n[t]);// Schedule a render for the next frame. This ensures we won't visually
// see the element with the reset rotate value applied.
e.scheduleRender()}getProjectionStyles(e={}){var t,r;// TODO: Return lifecycle-persistent object
let n={};if(!this.instance||this.isSVG)return n;if(!this.isVisible)return{visibility:"hidden"};n.visibility="";let a=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,n.opacity="",n.pointerEvents=sA(e.pointerEvents)||"",n.transform=a?a(this.latestValues,""):"none",n;let o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){let t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=sA(e.pointerEvents)||""),this.hasProjected&&!da(this.latestValues)&&(t.transform=a?a({},""):"none",this.hasProjected=!1),t}let i=o.animationValues||o.latestValues;this.applyTransformsToTarget(),n.transform=dX(this.projectionDeltaWithTransform,this.treeScale,i),a&&(n.transform=a(i,n.transform));let{x:l,y:s}=this.projectionDelta;/**
             * Apply scale correction
             */for(let e in n.transformOrigin=`${100*l.origin}% ${100*s.origin}% 0`,o.animationValues?/**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */n.opacity=o===this?null!==(r=null!==(t=i.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==r?r:1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:/**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */n.opacity=o===this?void 0!==i.opacity?i.opacity:"":void 0!==i.opacityExit?i.opacityExit:0,lO){if(void 0===i[e])continue;let{correct:t,applyTo:r}=lO[e],a="none"===n.transform?i[e]:t(i[e],o);if(r){let e=r.length;for(let t=0;t<e;t++)n[r[t]]=a}else n[e]=a}return this.options.layoutId&&(n.pointerEvents=o===this?sA(e.pointerEvents)||"":"none"),n}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}// Only run on root
resetTree(){this.root.nodes.forEach(e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()}),this.root.nodes.forEach(d4),this.root.sharedNodes.clear()}}}function d0(e){e.updateLayout()}function d1(e){var t;let r=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){let{layoutBox:t,measuredBox:n}=e.layout,{animationType:a}=e.options,o=r.source!==e.layout.source;// TODO Maybe we want to also resize the layout snapshot so we don't trigger
// animations for instance if layout="size" and an element has only changed position
"size"===a?de(e=>{let n=o?r.measuredBox[e]:r.layoutBox[e],a=cG(n);n.min=t[e].min,n.max=n.min+a}):fc(a,r.layoutBox,t)&&de(n=>{let a=o?r.measuredBox[n]:r.layoutBox[n],i=cG(t[n]);a.max=a.min+i,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[n].max=e.relativeTarget[n].min+i)});let i=c8();cZ(i,t,r.layoutBox);let l=c8();o?cZ(l,e.applyTransform(n,!0),r.measuredBox):cZ(l,t,r.layoutBox);let s=!dW(i),u=!1;if(!e.resumeFrom){let n=e.getClosestProjectingParent();/**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */if(n&&!n.resumeFrom){let{snapshot:a,layout:o}=n;if(a&&o){let i=c7();c1(i,r.layoutBox,a.layoutBox);let l=c7();c1(l,t,o.layoutBox),dU(i,l)||(u=!0),n.options.layoutRoot&&(e.relativeTarget=l,e.relativeTargetOrigin=i,e.relativeParent=n)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:r,delta:l,layoutDelta:i,hasLayoutChanged:s,hasRelativeTargetChanged:u})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}/**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */e.options.transition=void 0}function d2(e){/**
     * Increase debug counter for nodes encountered this frame
     */dZ.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),/**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function d5(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function d3(e){e.clearSnapshot()}function d4(e){e.clearMeasurements()}function d6(e){e.isLayoutDirty=!1}function d8(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function d9(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function d7(e){e.resolveTargetDelta()}function fe(e){e.calcProjection()}function ft(e){e.resetRotation()}function fr(e){e.removeLeadSnapshot()}function fn(e,t,r){e.translate=uR(t.translate,0,r),e.scale=uR(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function fa(e,t,r,n){e.min=uR(t.min,r.min,n),e.max=uR(t.max,r.max,n)}function fo(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const fi={duration:.45,ease:[.4,0,.1,1]},fl=e=>"undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().includes(e),fs=fl("applewebkit/")&&!fl("chrome/")?Math.round:sM;function fu(e){// Round to the nearest .5 pixels to support subpixel layouts
e.min=fs(e.min),e.max=fs(e.max)}function fc(e,t,r){return"position"===e||"preserve-aspect"===e&&!cQ(dH(t),dH(r),.2)}const fd=dJ({attachResizeListener:(e,t)=>sN(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ff={current:void 0},fp=dJ({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ff.current){let e=new fd({});e.mount(window),e.setOptions({layoutScroll:!0}),ff.current=e}return ff.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position}),fh=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function fm(e,t,r=1){sM(r<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);let[n,a]=function(e){let t=fh.exec(e);if(!t)return[,];let[,r,n]=t;return[r,n]}(e);// No CSS variable detected
if(!n)return;// Attempt to read this CSS variable off the element
let o=window.getComputedStyle(t).getPropertyValue(n);if(o){let e=o.trim();return cS(e)?parseFloat(e):e}return lG(a)?fm(a,t,r+1):a}const fg=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),fv=e=>fg.has(e),fy=e=>Object.keys(e).some(fv),fb=e=>e===lZ||e===l7,fx=(e,t)=>parseFloat(e.split(", ")[t]),fk=(e,t)=>(r,{transform:n})=>{if("none"===n||!n)return 0;let a=n.match(/^matrix3d\((.+)\)$/);if(a)return fx(a[1],t);{let t=n.match(/^matrix\((.+)\)$/);return t?fx(t[1],e):0}},fw=new Set(["x","y","z"]),fS=lN.filter(e=>!fw.has(e)),fC={// Dimensions
width:({x:e},{paddingLeft:t="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),height:({y:e},{paddingTop:t="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),// Transform
x:fk(4,13),y:fk(5,14)};// Alias translate longform names
fC.translateX=fC.x,fC.translateY=fC.y;const f_=(e,t,r)=>{let n=t.measureViewportBox(),a=t.current,o=getComputedStyle(a),{display:i}=o,l={};"none"===i&&t.setStaticValue("display",e.display||"block"),/**
     * Record origins before we render and update styles
     */r.forEach(e=>{l[e]=fC[e](n,o)}),// Apply the latest values (as set in checkAndConvertChangedValueTypes)
t.render();let s=t.measureViewportBox();return r.forEach(r=>{// Restore styles to their **calculated computed style**, not their actual
// originally set style. This allows us to animate between equivalent pixel units.
let n=t.getValue(r);n&&n.jump(l[r]),e[r]=fC[r](s,o)}),e},fE=(e,t,r={},n={})=>{t={...t},n={...n};let a=Object.keys(t).filter(fv),o=[],i=!1,l=[];if(a.forEach(a=>{let s;let u=e.getValue(a);if(!e.hasValue(a))return;let c=r[a],d=cL(c),f=t[a];// TODO: The current implementation of this basically throws an error
// if you try and do value conversion via keyframes. There's probably
// a way of doing this but the performance implications would need greater scrutiny,
// as it'd be doing multiple resize-remeasure operations.
if(sP(f)){let e=f.length,t=null===f[0]?1:0;d=cL(c=f[t]);for(let r=t;/**
                 * Don't allow wildcard keyframes to be used to detect
                 * a difference in value types.
                 */r<e&&null!==f[r];r++)s?sM(cL(f[r])===s,"All keyframes must be of the same type"):sM((s=cL(f[r]))===d||fb(d)&&fb(s),"Keyframes must be of the same dimension as the current value")}else s=cL(f);if(d!==s){// If they're both just number or px, convert them both to numbers rather than
// relying on resize/remeasure to convert (which is wasteful in this situation)
if(fb(d)&&fb(s)){let e=u.get();"string"==typeof e&&u.set(parseFloat(e)),"string"==typeof f?t[a]=parseFloat(f):Array.isArray(f)&&s===l7&&(t[a]=f.map(parseFloat))}else(null==d?void 0:d.transform)&&(null==s?void 0:s.transform)&&(0===c||0===f)?0===c?u.set(s.transform(c)):t[a]=d.transform(f):(i||(o=function(e){let t=[];return fS.forEach(r=>{let n=e.getValue(r);void 0!==n&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))}),t.length&&e.render(),t}(e),i=!0),l.push(a),n[a]=void 0!==n[a]?n[a]:t[a],u.jump(f))}}),!l.length)return{target:t,transitionEnd:n};{let r=l.indexOf("height")>=0?window.pageYOffset:null,a=f_(t,e,l);return o.length&&o.forEach(([t,r])=>{e.getValue(t).set(r)}),// Reapply original values
e.render(),lw&&null!==r&&window.scrollTo({top:r}),{target:a,transitionEnd:n}}},fP=(e,t,r,n)=>{var a,o;let i=/**
 * Resolve CSS variables from
 *
 * @internal
 */function(e,{...t},r){let n=e.current;if(!(n instanceof Element))return{target:t,transitionEnd:r};// Cycle through every target property and resolve CSS variables. Currently
// we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
for(let a in r&&(r={...r}),// Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
e.values.forEach(e=>{let t=e.get();if(!lG(t))return;let r=fm(t,n);r&&e.set(r)}),t){let e=t[a];if(!lG(e))continue;let o=fm(e,n);o&&(// Clone target if it hasn't already been
t[a]=o,r||(r={}),void 0===r[a]&&(r[a]=e))}return{target:t,transitionEnd:r}}(e,t,n);return t=i.target,n=i.transitionEnd,a=t,o=n,fy(a)?fE(e,a,r,o):{target:a,transitionEnd:o}},fT={current:null},fz={current:!1},fA=new WeakMap,fR=Object.keys(lF),fM=fR.length,fL=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],fF=lz.length;/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */class fj{constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:n,visualState:a},o={}){/**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */this.current=null,/**
         * A set containing references to this VisualElement's children.
         */this.children=new Set,/**
         * Determine what role this visual element should take in the variant tree.
         */this.isVariantNode=!1,this.isControllingVariants=!1,/**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */this.shouldReduceMotion=null,/**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */this.values=new Map,/**
         * Cleanup functions for active features (hover/tap/exit etc)
         */this.features={},/**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */this.valueSubscriptions=new Map,/**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */this.prevMotionValues={},/**
         * An object containing a SubscriptionManager for each active event.
         */this.events={},/**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>sj.render(this.render,!1,!0);let{latestValues:i,renderState:l}=a;this.latestValues=i,this.baseTarget={...i},this.initialValues=t.initial?{...i}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=n,this.options=o,this.isControllingVariants=lA(t),this.isVariantNode=lR(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);/**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */let{willChange:s,...u}=this.scrapeMotionValuesFromProps(t,{});for(let e in u){let t=u[e];void 0!==i[e]&&lU(t)&&(t.set(i[e],!1),cw(s)&&s.add(e))}}/**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,fA.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),fz.current||function(){if(fz.current=!0,lw){if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>fT.current=e.matches;e.addListener(t),t()}else fT.current=!1}}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||fT.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in fA.delete(this.current),this.projection&&this.projection.unmount(),s$(this.notifyUpdate),s$(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[e].clear();for(let e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){let r=lV.has(e),n=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&sj.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{n(),a()})}sortNodePosition(e){return(/**
         * If these nodes aren't even of the same type we can't compare their depth.
         */this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0)}loadFeatures({children:e,...t},r,n,a){let o,i;for(let e=0;e<fM;e++){let r=fR[e],{isEnabled:n,Feature:a,ProjectionNode:l,MeasureLayout:s}=lF[r];l&&(o=l),n(t)&&(!this.features[r]&&a&&(this.features[r]=new a(this)),s&&(i=s))}if(!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);let{layoutId:e,layout:r,drag:n,dragConstraints:i,layoutScroll:l,layoutRoot:s}=t;this.projection.setOptions({layoutId:e,layout:r,alwaysMeasureLayout:!!n||i&&l_(i),visualElement:this,scheduleRender:()=>this.scheduleRender(),/**
                 * TODO: Update options in an effect. This could be tricky as it'll be too late
                 * to update by the time layout animations run.
                 * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
                 * ensuring it gets called if there's no potential layout animations.
                 *
                 */animationType:"string"==typeof r?r:"both",initialPromotionConfig:a,layoutScroll:l,layoutRoot:s})}return i}updateFeatures(){for(let e in this.features){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}/**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):c7()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}/**
     * Make a target animatable by Popmotion. For instance, if we're
     * trying to animate width from 100px to 100vw we need to measure 100vw
     * in pixels to determine what we really need to animate to. This is also
     * pluggable to support Framer's custom value types like Color,
     * and CSS variables.
     */makeTargetAnimatable(e,t=!0){return this.makeTargetAnimatableFromInstance(e,this.props,t)}/**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;/**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */for(let t=0;t<fL.length;t++){let r=fL[t];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);let n=e["on"+r];n&&(this.propEventSubscriptions[r]=this.on(r,n))}this.prevMotionValues=function(e,t,r){let{willChange:n}=t;for(let a in t){let o=t[a],i=r[a];if(lU(o))/**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */e.addValue(a,o),cw(n)&&n.add(a);else if(lU(i))/**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */e.addValue(a,cA(o,{owner:e})),cw(n)&&n.remove(a);else if(i!==o){/**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */if(e.hasValue(a)){let t=e.getValue(a);// TODO: Only update values that aren't being animated or even looked at
t.hasAnimated||t.set(o)}else{let t=e.getStaticValue(a);e.addValue(a,cA(void 0!==t?t:o,{owner:e}))}}}// Handle removed values
for(let n in r)void 0===t[n]&&e.removeValue(n);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}/**
     * Returns the variant definition with a given name.
     */getVariant(e){return this.props.variants?this.props.variants[e]:void 0}/**
     * Returns the defined default transition on this component.
     */getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){let e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}let t={};for(let e=0;e<fF;e++){let r=lz[e],n=this.props[r];(lE(n)||!1===n)&&(t[r]=n)}return t}/**
     * Add a child visual element to our set of children.
     */addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}/**
     * Add a motion value and bind it to this visual element.
     */addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}/**
     * Remove a motion value and unbind any active subscriptions.
     */removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}/**
     * Check whether we have a motion value for this key
     */hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return void 0===r&&void 0!==t&&(r=cA(t,{owner:this}),this.addValue(e,r)),r}/**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}/**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */setBaseTarget(e,t){this.baseTarget[e]=t}/**
     * Find the base target for a value thats been removed from all animation
     * props.
     */getBaseTarget(e){var t;let{initial:r}=this.props,n="string"==typeof r||"object"==typeof r?null===(t=s_(this.props,r))||void 0===t?void 0:t[e]:void 0;/**
         * If this value still exists in the current initial variant, read that.
         */if(r&&void 0!==n)return n;/**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */let a=this.getBaseTargetFromProps(this.props,e);return void 0===a||lU(a)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:a}on(e,t){return this.events[e]||(this.events[e]=new cE),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class f$ extends fj{sortInstanceNodePosition(e,t){/**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:t,...r},{transformValues:n},a){let o=function(e,t,r){let n={};for(let a in e){let e=function(e,t){if(!t)return;let r=t[e]||t.default||t;return r.from}(a,t);if(void 0!==e)n[a]=e;else{let e=r.getValue(a);e&&(n[a]=e.get())}}return n}(r,e||{},this);if(n&&(t&&(t=n(t)),r&&(r=n(r)),o&&(o=n(o))),a){!function(e,t,r){var n,a;let o=Object.keys(t).filter(t=>!e.hasValue(t)),i=o.length;if(i)for(let l=0;l<i;l++){let i=o[l],s=t[i],u=null;Array.isArray(s)&&(u=s[0]),null===u&&(u=null!==(a=null!==(n=r[i])&&void 0!==n?n:e.readValue(i))&&void 0!==a?a:t[i]),null!=u&&("string"==typeof u&&(cS(u)||cb(u))?u=parseFloat(u):!cj(u)&&uq.test(s)&&(u=cy(i,s)),e.addValue(i,cA(u,{owner:e})),void 0===r[i]&&(r[i]=u),null!==u&&e.setBaseTarget(i,u))}}(this,r,o);let e=fP(this,r,o,t);t=e.transitionEnd,r=e.target}return{transition:e,transitionEnd:t,...r}}}class fD extends f${readValueFromInstance(e,t){if(lV.has(t)){let e=cv(t);return e&&e.default||0}{let r=window.getComputedStyle(e),n=(lY(t)?r.getPropertyValue(t):r[t])||0;return"string"==typeof n?n.trim():n}}measureInstanceViewportBox(e,{transformPagePoint:t}){return dg(e,t)}build(e,t,r,n){so(e,t,r,n.transformTemplate)}scrapeMotionValuesFromProps(e,t){return sS(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;lU(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}renderInstance(e,t,r,n){sx(e,t,r,n)}}class fB extends f${constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(lV.has(t)){let e=cv(t);return e&&e.default||0}return t=sk.has(t)?t:sb(t),e.getAttribute(t)}measureInstanceViewportBox(){return c7()}scrapeMotionValuesFromProps(e,t){return sC(e,t)}build(e,t,r,n){sm(e,t,r,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,r,n){sw(e,t,r,n)}mount(e){this.isSVGTag=sv(e.tagName),super.mount(e)}}const fI=(e,t)=>lI(e)?new fB(t,{enableHardwareAcceleration:!1}):new fD(t,{enableHardwareAcceleration:!0}),fO={animation:{Feature:class extends sJ{/**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:r})=>(function(e,t,r={}){let n;if(e.notify("AnimationStart",t),Array.isArray(t)){let a=t.map(t=>cD(e,t,r));n=Promise.all(a)}else if("string"==typeof t)n=cD(e,t,r);else{let a="function"==typeof t?s7(e,t,r.custom):t;n=Promise.all(c$(e,a,r))}return n.then(()=>e.notify("AnimationComplete",t))})(e,t,r))),r={animate:cN(!0),whileInView:cN(),whileHover:cN(),whileTap:cN(),whileDrag:cN(),whileFocus:cN(),exit:cN()},n=!0,a=(t,r)=>{let n=s7(e,r);if(n){let{transition:e,transitionEnd:r,...a}=n;t={...t,...a,...r}}return t};/**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */function o(o,i){let l=e.getProps(),s=e.getVariantContext(!0)||{},u=[],c=new Set,d={},f=1/0;/**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */for(let t=0;t<cO;t++){var p;let h=cI[t],m=r[h],g=void 0!==l[h]?l[h]:s[h],v=lE(g),y=h===i?m.isActive:null;!1===y&&(f=t);/**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */let b=g===s[h]&&g!==l[h]&&v;// Check if we can skip analysing this prop early
if(b&&n&&e.manuallyAnimateOnMount&&(b=!1),/**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */m.protectedKeys={...d},!m.isActive&&null===y||// If we didn't and don't have any defined prop for this animation type
!g&&!m.prevProp||lP(g)||"boolean"==typeof g)continue;/**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */let x=(p=m.prevProp,"string"==typeof g?g!==p:!!Array.isArray(g)&&!s9(g,p)),k=x||// If we're making this variant active, we want to always make it active
h===i&&m.isActive&&!b&&v||// If we removed a higher-priority variant (i is in reverse order)
t>f&&v,w=Array.isArray(g)?g:[g],S=w.reduce(a,{});!1===y&&(S={});/**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */let{prevResolvedValues:C={}}=m,_={...C,...S},E=e=>{k=!0,c.delete(e),m.needsAnimating[e]=!0};for(let e in _){let t=S[e],r=C[e];// If we've already handled this we can just skip ahead
d.hasOwnProperty(e)||(t!==r?sP(t)&&sP(r)?!s9(t,r)||x?E(e):/**
                             * If it hasn't changed, we want to ensure it doesn't animate by
                             * adding it to the list of protected keys.
                             */m.protectedKeys[e]=!0:void 0!==t?E(e):c.add(e):void 0!==t&&c.has(e)?/**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */E(e):/**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */m.protectedKeys[e]=!0)}/**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */m.prevProp=g,m.prevResolvedValues=S,m.isActive&&(d={...d,...S}),n&&e.blockInitialAnimation&&(k=!1),k&&!b&&u.push(...w.map(e=>({animation:e,options:{type:h,...o}})))}/**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */if(c.size){let t={};c.forEach(r=>{let n=e.getBaseTarget(r);void 0!==n&&(t[r]=n)}),u.push({animation:t})}let h=!!u.length;return n&&!1===l.initial&&!e.manuallyAnimateOnMount&&(h=!1),n=!1,h?t(u):Promise.resolve()}return{animateChanges:o,setActive:/**
     * Change whether a certain animation type is active.
     */function(t,n,a){var i;// If the active state hasn't changed, we can safely do nothing here
if(r[t].isActive===n)return Promise.resolve();null===// Propagate active change to children
(i=e.variantChildren)||void 0===i||i.forEach(e=>{var r;return null===(r=e.animationState)||void 0===r?void 0:r.setActive(t,n)}),r[t].isActive=n;let l=o(a,t);for(let e in r)r[e].protectedKeys={};return l},setAnimateFunction:/**
     * This just allows us to inject mocked animation functions
     * @internal
     */function(r){t=r(e)},getState:()=>r}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();this.unmount(),lP(e)&&(this.unmount=e.subscribe(this.node))}/**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends sJ{constructor(){super(...arguments),this.id=cV++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t,custom:r}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let a=this.node.animationState.setActive("exit",!e,{custom:null!=r?r:this.node.getProps().custom});t&&!e&&a.then(()=>t(this.id))}mount(){let{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}},inView:{Feature:class extends sJ{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:n="some",once:a}=e,o={root:t?t.current:void 0,rootMargin:r,threshold:"number"==typeof n?n:s8[n]};return function(e,t,r){let n=function({root:e,...t}){let r=e||document;s3.has(r)||s3.set(r,{});let n=s3.get(r),a=JSON.stringify(t);return n[a]||(n[a]=new IntersectionObserver(s6,{root:e,...t})),n[a]}(t);return s5.set(e,r),n.observe(e),()=>{s5.delete(e),n.unobserve(e)}}(this.node.current,o,e=>{let{isIntersecting:t}=e;/**
             * If there's been no change in the viewport state, early return.
             */if(this.isInView===t||(this.isInView=t,a&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);/**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */let{onViewportEnter:r,onViewportLeave:n}=this.node.getProps(),o=t?r:n;o&&o(e)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node,r=["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}(e,t));r&&this.startObserver()}unmount(){}}},tap:{Feature:class extends sJ{constructor(){super(...arguments),this.removeStartListeners=sM,this.removeEndListeners=sM,this.removeAccessibleListeners=sM,this.startPointerPress=(e,t)=>{if(this.removeEndListeners(),this.isPressing)return;let r=this.node.getProps(),n=sH(window,"pointerup",(e,t)=>{if(!this.checkPressEnd())return;let{onTap:r,onTapCancel:n}=this.node.getProps();sj.update(()=>{/**
                     * We only count this as a tap gesture if the event.target is the same
                     * as, or a child of, this component's element
                     */s1(this.node.current,e.target)?r&&r(e,t):n&&n(e,t)})},{passive:!(r.onTap||r.onPointerUp)}),a=sH(window,"pointercancel",(e,t)=>this.cancelPress(e,t),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=sX(n,a),this.startPress(e,t)},this.startAccessiblePress=()=>{let e=sN(this.node.current,"keydown",e=>{"Enter"!==e.key||this.isPressing||(this.removeEndListeners(),this.removeEndListeners=sN(this.node.current,"keyup",e=>{"Enter"===e.key&&this.checkPressEnd()&&s2("up",(e,t)=>{let{onTap:r}=this.node.getProps();r&&sj.update(()=>r(e,t))})}),s2("down",(e,t)=>{this.startPress(e,t)}))}),t=sN(this.node.current,"blur",()=>{this.isPressing&&s2("cancel",(e,t)=>this.cancelPress(e,t))});this.removeAccessibleListeners=sX(e,t)}}startPress(e,t){this.isPressing=!0;let{onTapStart:r,whileTap:n}=this.node.getProps();n&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&sj.update(()=>r(e,t))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;let e=this.node.getProps();return e.whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!sZ()}cancelPress(e,t){if(!this.checkPressEnd())return;let{onTapCancel:r}=this.node.getProps();r&&sj.update(()=>r(e,t))}mount(){let e=this.node.getProps(),t=sH(this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=sN(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=sX(t,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends sJ{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;/**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=sX(sN(this.node.current,"focus",()=>this.onFocus()),sN(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends sJ{mount(){this.unmount=sX(s0(this.node,!0),s0(this.node,!1))}unmount(){}}},pan:{Feature:class extends sJ{constructor(){super(...arguments),this.removePointerDownListener=sM}onPointerDown(e){this.session=new cU(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:n}=this.node.getProps();return{onSessionStart:dx(e),onStart:dx(t),onMove:r,onEnd:(e,t)=>{delete this.session,n&&sj.update(()=>n(e,t))}}}mount(){this.removePointerDownListener=sH(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends sJ{constructor(e){super(e),this.removeGroupControls=sM,this.removeListeners=sM,this.controls=new dy(e)}mount(){// If we've been provided a DragControls for manual control over the drag gesture,
// subscribe this component to it on mount.
let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||sM}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:fp,MeasureLayout:d_},layout:{ProjectionNode:fp,MeasureLayout:d_}},fN=/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */function(e){function t(t,r={}){return(/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */function({preloadedFeatures:e,createVisualElement:t,useRender:r,useVisualState:n,Component:a}){e&&function(e){for(let t in e)lF[t]={...lF[t],...e[t]}}(e);let o=(0,D.forwardRef)(function(o,i){var l;let s;let u={...(0,D.useContext)(lb),...o,layoutId:function({layoutId:e}){let t=(0,D.useContext)(lj).id;return t&&void 0!==e?t+"-"+e:e}(o)},{isStatic:c}=u,d=function(e){let{initial:t,animate:r}=function(e,t){if(lA(e)){let{initial:t,animate:r}=e;return{initial:!1===t||lE(t)?t:void 0,animate:lE(r)?r:void 0}}return!1!==e.inherit?t:{}}(e,(0,D.useContext)(lx));return(0,D.useMemo)(()=>({initial:t,animate:r}),[lM(t),lM(r)])}(o),f=n(o,c);if(!c&&lw){/**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */d.visualElement=function(e,t,r,n){let{visualElement:a}=(0,D.useContext)(lx),o=(0,D.useContext)(lC),i=(0,D.useContext)(lk),l=(0,D.useContext)(lb).reducedMotion,s=(0,D.useRef)();/**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */n=n||o.renderer,!s.current&&n&&(s.current=n(e,{visualState:t,parent:a,props:r,presenceContext:i,blockInitialAnimation:!!i&&!1===i.initial,reducedMotionConfig:l}));let u=s.current;(0,D.useInsertionEffect)(()=>{u&&u.update(r,i)});/**
     * Cache this value as we want to know whether HandoffAppearAnimations
     * was present on initial render - it will be deleted after this.
     */let c=(0,D.useRef)(!!window.HandoffAppearAnimations);return lS(()=>{u&&(u.render(),c.current&&u.animationState&&u.animationState.animateChanges())}),(0,D.useEffect)(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),/**
         * Once we've handed off animations we can delete HandoffAppearAnimations
         * so components added after the initial render can animate changes
         * in useEffect vs useLayoutEffect.
         */window.HandoffAppearAnimations=void 0,c.current=!1)}),u}(a,f,u,t);/**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             */let r=(0,D.useContext)(l$),n=(0,D.useContext)(lC).strict;d.visualElement&&(s=d.visualElement.loadFeatures(u,n,e,r))}/**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */return D.createElement(lx.Provider,{value:d},s&&d.visualElement?D.createElement(s,{visualElement:d.visualElement,...u}):null,r(a,o,(l=d.visualElement,(0,D.useCallback)(e=>{e&&f.mount&&f.mount(e),l&&(e?l.mount(e):l.unmount()),i&&("function"==typeof i?i(e):l_(i)&&(i.current=e))},/**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */[l])),f,c,d.visualElement))});return o[lD]=a,o}(e(t,r)))}if("undefined"==typeof Proxy)return t;/**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */let r=new Map;return new Proxy(t,{/**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */get:(e,n)=>(r.has(n)||r.set(n,t(n)),r.get(n))})}((e,t)=>(function(e,{forwardMotionProps:t=!1},r,n){let a=lI(e)?sI:sO;return{...a,preloadedFeatures:r,useRender:function(e=!1){return(t,r,n,{latestValues:a},o)=>{let i=lI(t)?sy:ss,l=i(r,a,o,t),s=function(e,t,r){let n={};for(let a in e)/**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */("values"!==a||"object"!=typeof e.values)&&(sd(a)||!0===r&&sc(a)||!t&&!sc(a)||// If trying to use native HTML drag events, forward drag listeners
    e.draggable&&a.startsWith("onDrag"))&&(n[a]=e[a]);return n}(r,"string"==typeof t,e),u={...s,...l,ref:n},{children:c}=r,d=(0,D.useMemo)(()=>lU(c)?c.get():c,[c]);return(0,D.createElement)(t,{...u,children:d})}}(t),createVisualElement:n,Component:e}})(e,t,fO,fI));var fV=/* @__PURE__ */new Set([...rg,"textStyle","layerStyle","apply","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),fW=/* @__PURE__ */new Set(["htmlWidth","htmlHeight","htmlSize","htmlTranslate"]);function fU(e){return fW.has(e)||!fV.has(e)}var D=j("acw62"),fH=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,fq=eb(function(e){return fH.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)}),fX=function(e){return"theme"!==e},fY=function(e){return"string"==typeof e&&// 96 is one less than the char code
// for "a" so this is checking that
// it's a lowercase character
e.charCodeAt(0)>96?fq:fX},fG=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},fQ=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return eA(t,r,n),eW(function(){return eR(t,r,n)}),null};j("acw62");var fK=(function e(t,r){var n,a,o=t.__emotion_real===t,i=o&&t.__emotion_base||t;void 0!==r&&(n=r.label,a=r.target);var l=fG(t,r,o),s=l||fY(i),u=!s("as");return function(){var c=arguments,d=o&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&d.push("label:"+n+";"),null==c[0]||void 0===c[0].raw)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,p=1;p<f;p++)d.push(c[p],c[0][p])}// $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class
var h=eq(function(e,t,r){var n,o,c,f=u&&e.as||i,p="",h=[],m=e;if(null==e.theme){for(var g in m={},e)m[g]=e[g];m.theme=D.useContext(eX)}"string"==typeof e.className?(n=t.registered,o=e.className,c="",o.split(" ").forEach(function(e){void 0!==n[e]?h.push(n[e]+";"):c+=e+" "}),p=c):null!=e.className&&(p=e.className+" ");var v=eN(d.concat(h),t.registered,m);p+=t.key+"-"+v.name,void 0!==a&&(p+=" "+a);var y=u&&void 0===l?fY(f):s,b={};for(var x in e)(!u||"as"!==x)&&y(x)&&(b[x]=e[x]);return b.className=p,b.ref=r,/*#__PURE__*/D.createElement(D.Fragment,null,/*#__PURE__*/D.createElement(fQ,{cache:t,serialized:v,isStringTag:"string"==typeof f}),/*#__PURE__*/D.createElement(f,b))});return h.displayName=void 0!==n?n:"Styled("+("string"==typeof i?i:i.displayName||i.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=l,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(t,n){return e(t,eP({},r,n,{shouldForwardProp:fG(h,n,!0)})).apply(void 0,d)},h}}).bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){// $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
fK[e]=fK(e)});var D=j("acw62"),fZ=null!=(T=fK.default)?T:fK,fJ=({baseStyle:e})=>t=>{let{theme:r,css:n,__css:a,sx:o,...i}=t,l=rE(i,(e,t)=>ry(t)),s=rT(e,t),u=// src/assign-after.ts
    function(e,...t){if(null==e)throw TypeError("Cannot convert undefined or null to object");let r={...e};for(let e of t)if(null!=e)for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(t in r&&delete r[t],r[t]=e[t]);return r}({},a,s,rP(l),o),c=rw(u)(t.theme);return n?[c,n]:c};function f0(e,t){let{baseStyle:r,...n}=null!=t?t:{};n.shouldForwardProp||(n.shouldForwardProp=fU);let a=fJ({baseStyle:r}),o=fZ(e,n)(a),i=/*@__PURE__*/M(D).forwardRef(function(e,t){let{colorMode:r,forced:n}=e7();return /*@__PURE__*/M(D).createElement(o,{ref:t,"data-theme":n?r:void 0,...e})});return i}var f1=// src/factory.ts
function(){let e=/* @__PURE__ */new Map;return new Proxy(f0,{/**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */apply:(e,t,r)=>f0(...r),/**
     * @example
     * <chakra.div />
     */get:(t,r)=>(e.has(r)||e.set(r,f0(r)),e.get(r))})}(),D=j("acw62"),f2={initial:e=>{let{position:t}=e,r=["top","bottom"].includes(t)?"y":"x",n=["top-right","bottom-right"].includes(t)?1:-1;return"bottom"===t&&(n=1),{opacity:0,[r]:24*n}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},f5=(0,D.memo)(e=>{var t;let{id:r,message:n,onCloseComplete:a,onRequestRemove:o,requestClose:i=!1,position:l="bottom",duration:s=5e3,containerStyle:u,motionVariants:c=f2,toastSpacing:d="0.5rem"}=e,[f,p]=(0,D.useState)(s),h=null===(t=(0,D.useContext)(lk))||t.isPresent;ly(()=>{h||null==a||a()},[h]),ly(()=>{p(s)},[s]);let m=()=>{h&&o()};(0,D.useEffect)(()=>{h&&i&&o()},[h,i,o]),function(e,t){let r=function(e,t=[]){let r=(0,D.useRef)(e);return(0,D.useEffect)(()=>{r.current=e}),(0,D.useCallback)((...e)=>{var t;return null==(t=r.current)?void 0:t.call(r,...e)},t)}(e);(0,D.useEffect)(()=>{if(null==t)return;let e=null;return e=window.setTimeout(()=>{r()},t),()=>{e&&window.clearTimeout(e)}},[t,r])}(m,f);let g=(0,D.useMemo)(()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:d,...u}),[u,d]),v=(0,D.useMemo)(()=>(function(e){let t=e.includes("right"),r=e.includes("left"),n="center";return t&&(n="flex-end"),r&&(n="flex-start"),{display:"flex",flexDirection:"column",alignItems:n}})(l),[l]);return/* @__PURE__ */(0,$.jsx)(fN.div,{layout:!0,className:"chakra-toast",variants:c,initial:"initial",animate:"animate",exit:"exit",onHoverStart:()=>p(null),onHoverEnd:()=>p(s),custom:{position:l},style:v,children:/* @__PURE__ */(0,$.jsx)(f1.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:g,children:tu(n,{id:r,onClose:m})})})});function f3(e){return(0,D.forwardRef)(e)}f5.displayName="ToastComponent";var D=(j("acw62"),j("acw62")),td=j("5Gn6I");function f4(e){return"function"==typeof e}var f6=e=>function(...t){var r;let n=[...t],a=t[t.length-1];return ts(r=a)&&rD.every(e=>Object.prototype.hasOwnProperty.call(r,e))&&// this ensures backward compatibility
    // previously only `extendTheme(override, activeTheme?)` was allowed
    n.length>1?n=n.slice(0,n.length-1):a=e,(function(...e){return t=>e.reduce((e,t)=>t(e),t)})(...n.map(e=>t=>f4(e)?e(t):function(...e){return /*@__PURE__*/M(td)({},...e,f8)}(t,e)))(a)};function f8(e,t,r,n){if((f4(e)||f4(t))&&Object.prototype.hasOwnProperty.call(n,r))return(...r)=>{let n=f4(e)?e(...r):e,a=f4(t)?t(...r):t;return /*@__PURE__*/M(td)({},n,a,f8)}}f6(lp),f6(lh);var td=j("5Gn6I"),D=j("acw62"),f9={},f7="undefined"!=typeof Element,pe="function"==typeof Map,pt="function"==typeof Set,pr="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function pn(e,t={}){var r;let{styleConfig:n,...a}=t,{theme:o,colorMode:i}=function(){let e=e7(),t=function(){let e=(0,D.useContext)(eX);if(!e)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return e}();return{...e,theme:t}}(),l=e?r_(o,`components.${e}`):void 0,s=n||l,u=/*@__PURE__*/M(td)({theme:o,colorMode:i},null!=(r=null==s?void 0:s.defaultProps)?r:{},rP(function(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}(a,["children"]))),c=(0,D.useRef)({});if(s){let e=(e=>{var t;let{variant:r,size:n,theme:a}=e,o=function(e){let t=e.__breakpoints;return function(e,r,n,a){var o,i,l;if(!t)return;let s={},u=(l=t.toArrayValue,Array.isArray(n)?n:ts(n)?l(n):null!=n?[n]:void 0);if(!u)return s;let c=u.length,d=1===c,f=!!e.parts;for(let n=0;n<c;n++){let l=t.details[n],c=t.details[function(e,t){for(let r=t+1;r<e.length;r++)if(null!=e[r])return r;return -1}(u,n)],p=ra(l.minW,null==c?void 0:c._minW),h=tu(null==(o=e[r])?void 0:o[u[n]],a);if(h){if(f){null==(i=e.parts)||i.forEach(e=>{/*@__PURE__*/M(td)(s,{[e]:d?h[e]:{[p]:h[e]}})});continue}if(!f){d?/*@__PURE__*/M(td)(s,h):s[p]=h;continue}s[p]=h}}return s}}(a);return /*@__PURE__*/M(td)({},tu(null!=(t=s.baseStyle)?t:{},e),o(s,"sizes",n,e),o(s,"variants",r,e))})(u),t=/*@__PURE__*/M(f9)(c.current,e);t||(c.current=e)}return c.current}function pa(e,t={}){return pn(e,t)}// end fast-deep-equal
f9=function(e,t){try{return(// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js
function e(t,r){// START: fast-deep-equal es6/index.js 3.1.3
if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var n,a,o,i;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(a=n;0!=a--;)if(!e(t[a],r[a]))return!1;return!0}if(pe&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(i=t.entries();!(a=i.next()).done;)if(!r.has(a.value[0]))return!1;for(i=t.entries();!(a=i.next()).done;)if(!e(a.value[1],r.get(a.value[0])))return!1;return!0}if(pt&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(i=t.entries();!(a=i.next()).done;)if(!r.has(a.value[0]))return!1;return!0}// END: Modifications
if(pr&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((n=t.length)!=r.length)return!1;for(a=n;0!=a--;)if(t[a]!==r[a])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;// START: Modifications:
// Apply guards for `Object.create(null)` handling. See:
// - https://github.com/FormidableLabs/react-fast-compare/issues/64
// - https://github.com/epoberezkin/fast-deep-equal/issues/49
if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof r.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof r.toString)return t.toString()===r.toString();if((n=// END: Modifications
(o=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(a=n;0!=a--;)if(!Object.prototype.hasOwnProperty.call(r,o[a]))return!1;// END: fast-deep-equal
// START: react-fast-compare
// custom handling for DOM elements
if(f7&&t instanceof Element)return!1;// custom handling for React/Preact
for(a=n;0!=a--;)if(("_owner"!==o[a]&&"__v"!==o[a]&&"__o"!==o[a]||!t.$$typeof)&&!e(t[o[a]],r[o[a]]))return!1;// END: react-fast-compare
// START: fast-deep-equal
return!0}return t!=t&&r!=r}(e,t))}catch(e){if((e.message||"").match(/stack|recursion/i))return(// warn on circular references, don't crash
// browsers give this different errors name and messages:
// chrome/safari: "RangeError", "Maximum call stack size exceeded"
// firefox: "InternalError", too much recursion"
// edge: "Error", "Out of stack space"
console.warn("react-fast-compare cannot handle circular refs"),!1);// some other error. we should definitely know about these
throw e}};var po={path:/* @__PURE__ */(0,$.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[/* @__PURE__ */(0,$.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),/* @__PURE__ */(0,$.jsx)("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),/* @__PURE__ */(0,$.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},pi=f3((e,t)=>{let{as:r,viewBox:n,color:a="currentColor",focusable:o=!1,children:i,className:l,__css:s,...u}=e,c=tl("chakra-icon",l),d=pa("Icon",e),f={w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:a,...s,...d},p={ref:t,focusable:o,className:c,__css:f},h=null!=n?n:po.viewBox;if(r&&"string"!=typeof r)return/* @__PURE__ */(0,$.jsx)(f1.svg,{as:r,...p,...u});let m=null!=i?i:po.path;return/* @__PURE__ */(0,$.jsx)(f1.svg,{verticalAlign:"middle",viewBox:h,...p,...u,children:m})});function pl(e){return/* @__PURE__ */(0,$.jsx)(pi,{viewBox:"0 0 24 24",...e,children:/* @__PURE__ */(0,$.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}pi.displayName="Icon";var ps=function(){var e=eJ.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),pu=f3((e,t)=>{let r=pa("Spinner",e),{label:n="Loading...",thickness:a="2px",speed:o="0.45s",emptyColor:i="transparent",className:l,...s}=rC(e),u=tl("chakra-spinner",l),c={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:a,borderBottomColor:i,borderLeftColor:i,animation:`${ps} ${o} linear infinite`,...r};return/* @__PURE__ */(0,$.jsx)(f1.div,{ref:t,__css:c,className:u,...s,children:n&&/* @__PURE__ */(0,$.jsx)(f1.span,{srOnly:!0,children:n})})});pu.displayName="Spinner";var[pc,pd]=e3({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[pf,pp]=e3({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),ph={info:{icon:function(e){return/* @__PURE__ */(0,$.jsx)(pi,{viewBox:"0 0 24 24",...e,children:/* @__PURE__ */(0,$.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})},colorScheme:"blue"},warning:{icon:pl,colorScheme:"orange"},success:{icon:function(e){return/* @__PURE__ */(0,$.jsx)(pi,{viewBox:"0 0 24 24",...e,children:/* @__PURE__ */(0,$.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})},colorScheme:"green"},error:{icon:pl,colorScheme:"red"},loading:{icon:pu,colorScheme:"blue"}},pm=f3(function(e,t){var r;let{status:n="info",addRole:a=!0,...o}=rC(e),i=null!=(r=e.colorScheme)?r:ph[n].colorScheme,l=function(e,t={}){return pn(e,t)}("Alert",{...e,colorScheme:i}),s={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...l.container};return/* @__PURE__ */(0,$.jsx)(pc,{value:{status:n},children:/* @__PURE__ */(0,$.jsx)(pf,{value:l,children:/* @__PURE__ */(0,$.jsx)(f1.div,{"data-status":n,role:a?"alert":void 0,ref:t,...o,className:tl("chakra-alert",e.className),__css:s})})})});pm.displayName="Alert";var pg=f3(function(e,t){let r=pp(),{status:n}=pd(),a={display:"inline",...r.description};return/* @__PURE__ */(0,$.jsx)(f1.div,{ref:t,"data-status":n,...e,className:tl("chakra-alert__desc",e.className),__css:a})});function pv(e){let{status:t}=pd(),r=ph[t].icon,n=pp(),a="loading"===t?n.spinner:n.icon;return/* @__PURE__ */(0,$.jsx)(f1.span,{display:"inherit","data-status":t,...e,className:tl("chakra-alert__icon",e.className),__css:a,children:e.children||/* @__PURE__ */(0,$.jsx)(r,{h:"100%",w:"100%"})})}pg.displayName="AlertDescription",pv.displayName="AlertIcon";var py=f3(function(e,t){let r=pp(),{status:n}=pd();return/* @__PURE__ */(0,$.jsx)(f1.div,{ref:t,"data-status":n,...e,className:tl("chakra-alert__title",e.className),__css:r.title})});function pb(e){return/* @__PURE__ */(0,$.jsx)(pi,{focusable:"false","aria-hidden":!0,...e,children:/* @__PURE__ */(0,$.jsx)("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}py.displayName="AlertTitle";var px=f3(function(e,t){let r=pa("CloseButton",e),{children:n,isDisabled:a,__css:o,...i}=rC(e);return/* @__PURE__ */(0,$.jsx)(f1.button,{type:"button","aria-label":"Close",ref:t,disabled:a,__css:{outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,...r,...o},...i,children:n||/* @__PURE__ */(0,$.jsx)(pb,{width:"1em",height:"1em"})})});px.displayName="CloseButton";var pk=function(e){let t=e,r=/* @__PURE__ */new Set,n=e=>{t=e(t),r.forEach(e=>e())};return{getState:()=>t,subscribe:t=>(r.add(t),()=>{n(()=>e),r.delete(t)}),/**
     * Delete a toast record at its position
     */removeToast:(e,t)=>{n(r=>({...r,// id may be string or number
    // eslint-disable-next-line eqeqeq
    [t]:r[t].filter(t=>t.id!=e)}))},notify:(e,t)=>{let r=function(e,t={}){var r,n;pw+=1;let a=null!=(r=t.id)?r:pw,o=null!=(n=t.position)?n:"bottom";return{id:a,message:e,position:o,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>pk.removeToast(String(a),o),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}(e,t),{position:a,id:o}=r;return n(e=>{var t,n;let o=a.includes("top"),i=o?[r,...null!=(t=e[a])?t:[]]:[...null!=(n=e[a])?n:[],r];return{...e,[a]:i}}),o},update:(e,t)=>{e&&n(r=>{let n={...r},{position:a,index:o}=lg(n,e);return a&&-1!==o&&(n[a][o]={...n[a][o],...t,message:function(e={}){let{render:t,toastComponent:r=pS}=e;return n=>"function"==typeof t?t({...n,...e}):/* @__PURE__ */(0,$.jsx)(r,{...n,...e})}(t)}),n})},closeAll:({positions:e}={})=>{n(t=>(null!=e?e:["bottom","bottom-right","bottom-left","top","top-left","top-right"]).reduce((e,r)=>(e[r]=t[r].map(e=>({...e,requestClose:!0})),e),{...t}))},close:e=>{n(t=>{let r=lv(t,e);return r?{...t,[r]:t[r].map(t=>t.id==e?{...t,requestClose:!0}:t)}:t})},isActive:e=>!!lg(pk.getState(),e).position}}({top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]}),pw=0,pS=e=>{let{status:t,variant:r="solid",id:n,title:a,isClosable:o,onClose:i,description:l,colorScheme:s,icon:u}=e,c=n?{root:`toast-${n}`,title:`toast-${n}-title`,description:`toast-${n}-description`}:void 0;return/* @__PURE__ */(0,$.jsxs)(pm,{addRole:!1,status:t,variant:r,id:null==c?void 0:c.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:s,children:[/* @__PURE__ */(0,$.jsx)(pv,{children:u}),/* @__PURE__ */(0,$.jsxs)(f1.div,{flex:"1",maxWidth:"100%",children:[a&&/* @__PURE__ */(0,$.jsx)(py,{id:null==c?void 0:c.title,children:a}),l&&/* @__PURE__ */(0,$.jsx)(pg,{id:null==c?void 0:c.description,display:"block",children:l})]}),o&&/* @__PURE__ */(0,$.jsx)(px,{size:"sm",onClick:i,position:"absolute",insetEnd:1,top:1})]})};function pC(){let e=(0,D.useRef)(!1);return lS(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var D=(j("acw62"),j("acw62"),j("acw62"),j("acw62"),j("acw62"));/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */class p_ extends D.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}/**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */componentDidUpdate(){}render(){return this.props.children}}function pE({children:e,isPresent:t}){let r=(0,D.useId)(),n=(0,D.useRef)(null),a=(0,D.useRef)({width:0,height:0,top:0,left:0});return(/**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */(0,D.useInsertionEffect)(()=>{let{width:e,height:o,top:i,left:l}=a.current;if(t||!n.current||!e||!o)return;n.current.dataset.motionPopId=r;let s=document.createElement("style");return document.head.appendChild(s),s.sheet&&s.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${i}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(s)}},[t]),D.createElement(p_,{isPresent:t,childRef:n,sizeRef:a},D.cloneElement(e,{ref:n})))}const pP=({children:e,initial:t,isPresent:r,onExitComplete:n,custom:a,presenceAffectsLayout:o,mode:i})=>{let l=sE(pT),s=(0,D.useId)(),u=(0,D.useMemo)(()=>({id:s,initial:t,isPresent:r,custom:a,onExitComplete:e=>{for(let t of(l.set(e,!0),l.values()))if(!t)return;// can stop searching when any is incomplete
    n&&n()},register:e=>(l.set(e,!1),()=>l.delete(e))}),/**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */o?void 0:[r]);return(0,D.useMemo)(()=>{l.forEach((e,t)=>l.set(t,!1))},[r]),/**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */D.useEffect(()=>{r||l.size||!n||n()},[r]),"popLayout"===i&&(e=D.createElement(pE,{isPresent:r},e)),D.createElement(lk.Provider,{value:u},e)};function pT(){return new Map}var D=j("acw62");const pz=e=>e.key||"",pA=({children:e,custom:t,initial:r=!0,onExitComplete:n,exitBeforeEnter:a,presenceAffectsLayout:o=!0,mode:i="sync"})=>{var l;sM(!a,"Replace exitBeforeEnter with mode='wait'");// We want to force a re-render once all exiting animations have finished. We
// either use a local forceRender function, or one from a parent context if it exists.
let s=(0,D.useContext)(lj).forceRender||function(){let e=pC(),[t,r]=(0,D.useState)(0),n=(0,D.useCallback)(()=>{e.current&&r(t+1)},[t]),a=(0,D.useCallback)(()=>sj.postRender(n),[n]);return[a,t]}()[0],u=pC(),c=function(e){let t=[];return(// We use forEach here instead of map as map mutates the component key by preprending `.$`
(0,D.Children).forEach(e,e=>{(0,D.isValidElement)(e)&&t.push(e)}),t)}(e),d=c,f=(0,D.useRef)(new Map).current,p=(0,D.useRef)(d),h=(0,D.useRef)(new Map).current,m=(0,D.useRef)(!0);if(lS(()=>{m.current=!1,function(e,t){e.forEach(e=>{let r=pz(e);t.set(r,e)})}(c,h),p.current=d}),l=()=>{m.current=!0,h.clear(),f.clear()},(0,D.useEffect)(()=>()=>l(),[]),m.current)return D.createElement(D.Fragment,null,d.map(e=>D.createElement(pP,{key:pz(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:o,mode:i},e)));// If this is a subsequent render, deal with entering and exiting children
d=[...d];// Diff the keys of the currently-present and target children to update our
// exiting list.
let g=p.current.map(pz),v=c.map(pz),y=g.length;for(let e=0;e<y;e++){let t=g[e];-1!==v.indexOf(t)||f.has(t)||f.set(t,void 0)}return"wait"===i&&f.size&&(d=[]),// Loop through all currently exiting components and clone them to overwrite `animate`
// with any `exit` prop they might have defined.
f.forEach((e,r)=>{// If this component is actually entering again, early return
if(-1!==v.indexOf(r))return;let a=h.get(r);if(!a)return;let l=g.indexOf(r),m=e;m||(m=D.createElement(pP,{key:pz(a),isPresent:!1,onExitComplete:()=>{h.delete(r),f.delete(r);// Remove this child from the present children
let e=p.current.findIndex(e=>e.key===r);// Defer re-rendering until all exiting children have indeed left
if(p.current.splice(e,1),!f.size){if(p.current=c,!1===u.current)return;s(),n&&n()}},custom:t,presenceAffectsLayout:o,mode:i},a),f.set(r,m)),d.splice(l,0,m)}),// Add `MotionContext` even to children that don't need it to ensure we're rendering
// the same tree between renders
d=d.map(e=>{let t=e.key;return f.has(t)?e:D.createElement(pP,{key:pz(e),isPresent:!0,presenceAffectsLayout:o,mode:i},e)}),D.createElement(D.Fragment,null,f.size?d:d.map(e=>(0,D.cloneElement)(e)))};var pR={};!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}(),pR=j("Xw6Mv");var D=j("acw62"),[pM,pL]=e3({strict:!1,name:"PortalContext"}),pF="chakra-portal",pj=e=>/* @__PURE__ */(0,$.jsx)("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0},children:e.children}),p$=e=>{let{appendToParentPortal:t,children:r}=e,[n,a]=(0,D.useState)(null),o=(0,D.useRef)(null),[,i]=(0,D.useState)({});(0,D.useEffect)(()=>i({}),[]);let l=pL(),s=e6();tn(()=>{if(!n)return;let e=n.ownerDocument,r=t&&null!=l?l:e.body;if(!r)return;o.current=e.createElement("div"),o.current.className=pF,r.appendChild(o.current),i({});let a=o.current;return()=>{r.contains(a)&&r.removeChild(a)}},[n]);let u=(null==s?void 0:s.zIndex)?/* @__PURE__ */(0,$.jsx)(pj,{zIndex:null==s?void 0:s.zIndex,children:r}):r;return o.current?(0,pR.createPortal)(/* @__PURE__ */(0,$.jsx)(pM,{value:o.current,children:u}),o.current):/* @__PURE__ */(0,$.jsx)("span",{ref:e=>{e&&a(e)}})},pD=e=>{let{children:t,containerRef:r,appendToParentPortal:n}=e,a=r.current,o=null!=a?a:"undefined"!=typeof window?document.body:void 0,i=(0,D.useMemo)(()=>{let e=null==a?void 0:a.ownerDocument.createElement("div");return e&&(e.className=pF),e},[a]),[,l]=(0,D.useState)({});return(tn(()=>l({}),[]),tn(()=>{if(i&&o)return o.appendChild(i),()=>{o.removeChild(i)}},[i,o]),o&&i)?(0,pR.createPortal)(/* @__PURE__ */(0,$.jsx)(pM,{value:n?i:null,children:t}),i):null};function pB(e){let t={appendToParentPortal:!0,...e},{containerRef:r,...n}=t;return r?/* @__PURE__ */(0,$.jsx)(pD,{containerRef:r,...n}):/* @__PURE__ */(0,$.jsx)(p$,{...n})}pB.className=pF,pB.selector=".chakra-portal",pB.displayName="Portal";var D=j("acw62"),[pI,pO]=e3({name:"ToastOptionsContext",strict:!1}),pN=e=>{let t=(0,D.useSyncExternalStore)(pk.subscribe,pk.getState,pk.getState),{motionVariants:r,component:n=f5,portalProps:a}=e,o=Object.keys(t),i=o.map(e=>{let a=t[e];return/* @__PURE__ */(0,$.jsx)("div",{role:"region","aria-live":"polite","aria-label":"Notifications",id:`chakra-toast-manager-${e}`,style:function(e){let t=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,r=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,n=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",a=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:"top"===e||"bottom"===e?"0 auto":void 0,top:t,bottom:r,right:n,left:a}}(e),children:/* @__PURE__ */(0,$.jsx)(pA,{initial:!1,children:a.map(e=>/* @__PURE__ */(0,$.jsx)(n,{motionVariants:r,...e},e.id))})},e)});return/* @__PURE__ */(0,$.jsx)(pB,{...a,children:i})},pV=e=>function({children:t,theme:r=e,toastOptions:n,...a}){return/* @__PURE__ */(0,$.jsxs)(r$,{theme:r,...a,children:[/* @__PURE__ */(0,$.jsx)(pI,{value:null==n?void 0:n.defaultOptions,children:t}),/* @__PURE__ */(0,$.jsx)(pN,{...n})]})},pW=pV(lp);pV(lh);var pU={};t(pU,"createRoot",()=>z,e=>z=e),t(pU,"hydrateRoot",()=>A,e=>A=e),z=pR.createRoot,A=pR.hydrateRoot,j("acw62"),/*@__PURE__*/M(pU).createRoot(document.getElementById("root")).render(/*#__PURE__*/(0,$.jsx)(pW,{children:/*#__PURE__*/(0,$.jsx)(()=>/*#__PURE__*/(0,$.jsx)("h1",{children:"Hello World"}),{})}));//# sourceMappingURL=index.1eadddb9.js.map

//# sourceMappingURL=index.1eadddb9.js.map
