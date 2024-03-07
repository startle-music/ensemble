(function(h,F){typeof exports=="object"&&typeof module<"u"?F(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],F):(h=typeof globalThis<"u"?globalThis:h||self,F(h.Ensemble={},h.React,h.styled))})(this,function(h,F,s){"use strict";var ce={exports:{}},q={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function wn(){if(Ee)return q;Ee=1;var e=F,n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,b){var v,k={},R=null,O=null;b!==void 0&&(R=""+b),p.key!==void 0&&(R=""+p.key),p.ref!==void 0&&(O=p.ref);for(v in p)o.call(p,v)&&!c.hasOwnProperty(v)&&(k[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)k[v]===void 0&&(k[v]=p[v]);return{$$typeof:n,type:f,key:R,ref:O,props:k,_owner:i.current}}return q.Fragment=t,q.jsx=d,q.jsxs=d,q}var Z={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie;function xn(){return Ie||(Ie=1,process.env.NODE_ENV!=="production"&&function(){var e=F,n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.iterator,H="@@iterator";function A(r){if(r===null||typeof r!="object")return null;var l=D&&r[D]||r[H];return typeof l=="function"?l:null}var S=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function I(r){{for(var l=arguments.length,u=new Array(l>1?l-1:0),m=1;m<l;m++)u[m-1]=arguments[m];xo("error",r,u)}}function xo(r,l,u){{var m=S.ReactDebugCurrentFrame,x=m.getStackAddendum();x!==""&&(l+="%s",u=u.concat([x]));var $=u.map(function(w){return String(w)});$.unshift("Warning: "+l),Function.prototype.apply.call(console[r],console,$)}}var ko=!1,Co=!1,$o=!1,Ro=!1,So=!1,Je;Je=Symbol.for("react.module.reference");function To(r){return!!(typeof r=="string"||typeof r=="function"||r===o||r===c||So||r===i||r===b||r===v||Ro||r===O||ko||Co||$o||typeof r=="object"&&r!==null&&(r.$$typeof===R||r.$$typeof===k||r.$$typeof===d||r.$$typeof===f||r.$$typeof===p||r.$$typeof===Je||r.getModuleId!==void 0))}function Po(r,l,u){var m=r.displayName;if(m)return m;var x=l.displayName||l.name||"";return x!==""?u+"("+x+")":u}function Xe(r){return r.displayName||"Context"}function z(r){if(r==null)return null;if(typeof r.tag=="number"&&I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case o:return"Fragment";case t:return"Portal";case c:return"Profiler";case i:return"StrictMode";case b:return"Suspense";case v:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case f:var l=r;return Xe(l)+".Consumer";case d:var u=r;return Xe(u._context)+".Provider";case p:return Po(r,r.render,"ForwardRef");case k:var m=r.displayName||null;return m!==null?m:z(r.type)||"Memo";case R:{var x=r,$=x._payload,w=x._init;try{return z(w($))}catch{return null}}}return null}var G=Object.assign,K=0,Ke,Qe,Ve,en,nn,rn,tn;function on(){}on.__reactDisabledLog=!0;function Eo(){{if(K===0){Ke=console.log,Qe=console.info,Ve=console.warn,en=console.error,nn=console.group,rn=console.groupCollapsed,tn=console.groupEnd;var r={configurable:!0,enumerable:!0,value:on,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}K++}}function Io(){{if(K--,K===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:G({},r,{value:Ke}),info:G({},r,{value:Qe}),warn:G({},r,{value:Ve}),error:G({},r,{value:en}),group:G({},r,{value:nn}),groupCollapsed:G({},r,{value:rn}),groupEnd:G({},r,{value:tn})})}K<0&&I("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var xe=S.ReactCurrentDispatcher,ke;function oe(r,l,u){{if(ke===void 0)try{throw Error()}catch(x){var m=x.stack.trim().match(/\n( *(at )?)/);ke=m&&m[1]||""}return`
`+ke+r}}var Ce=!1,ae;{var _o=typeof WeakMap=="function"?WeakMap:Map;ae=new _o}function an(r,l){if(!r||Ce)return"";{var u=ae.get(r);if(u!==void 0)return u}var m;Ce=!0;var x=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var $;$=xe.current,xe.current=null,Eo();try{if(l){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(W){m=W}Reflect.construct(r,[],w)}else{try{w.call()}catch(W){m=W}r.call(w.prototype)}}else{try{throw Error()}catch(W){m=W}r()}}catch(W){if(W&&m&&typeof W.stack=="string"){for(var y=W.stack.split(`
`),_=m.stack.split(`
`),T=y.length-1,P=_.length-1;T>=1&&P>=0&&y[T]!==_[P];)P--;for(;T>=1&&P>=0;T--,P--)if(y[T]!==_[P]){if(T!==1||P!==1)do if(T--,P--,P<0||y[T]!==_[P]){var L=`
`+y[T].replace(" at new "," at ");return r.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",r.displayName)),typeof r=="function"&&ae.set(r,L),L}while(T>=1&&P>=0);break}}}finally{Ce=!1,xe.current=$,Io(),Error.prepareStackTrace=x}var Y=r?r.displayName||r.name:"",yn=Y?oe(Y):"";return typeof r=="function"&&ae.set(r,yn),yn}function Lo(r,l,u){return an(r,!1)}function Fo(r){var l=r.prototype;return!!(l&&l.isReactComponent)}function ie(r,l,u){if(r==null)return"";if(typeof r=="function")return an(r,Fo(r));if(typeof r=="string")return oe(r);switch(r){case b:return oe("Suspense");case v:return oe("SuspenseList")}if(typeof r=="object")switch(r.$$typeof){case p:return Lo(r.render);case k:return ie(r.type,l,u);case R:{var m=r,x=m._payload,$=m._init;try{return ie($(x),l,u)}catch{}}}return""}var le=Object.prototype.hasOwnProperty,ln={},sn=S.ReactDebugCurrentFrame;function se(r){if(r){var l=r._owner,u=ie(r.type,r._source,l?l.type:null);sn.setExtraStackFrame(u)}else sn.setExtraStackFrame(null)}function Bo(r,l,u,m,x){{var $=Function.call.bind(le);for(var w in r)if($(r,w)){var y=void 0;try{if(typeof r[w]!="function"){var _=Error((m||"React class")+": "+u+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof r[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}y=r[w](l,w,m,u,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(T){y=T}y&&!(y instanceof Error)&&(se(x),I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",m||"React class",u,w,typeof y),se(null)),y instanceof Error&&!(y.message in ln)&&(ln[y.message]=!0,se(x),I("Failed %s type: %s",u,y.message),se(null))}}}var jo=Array.isArray;function $e(r){return jo(r)}function Oo(r){{var l=typeof Symbol=="function"&&Symbol.toStringTag,u=l&&r[Symbol.toStringTag]||r.constructor.name||"Object";return u}}function zo(r){try{return cn(r),!1}catch{return!0}}function cn(r){return""+r}function dn(r){if(zo(r))return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Oo(r)),cn(r)}var Q=S.ReactCurrentOwner,Wo={key:!0,ref:!0,__self:!0,__source:!0},un,fn,Re;Re={};function Mo(r){if(le.call(r,"ref")){var l=Object.getOwnPropertyDescriptor(r,"ref").get;if(l&&l.isReactWarning)return!1}return r.ref!==void 0}function Do(r){if(le.call(r,"key")){var l=Object.getOwnPropertyDescriptor(r,"key").get;if(l&&l.isReactWarning)return!1}return r.key!==void 0}function Ao(r,l){if(typeof r.ref=="string"&&Q.current&&l&&Q.current.stateNode!==l){var u=z(Q.current.type);Re[u]||(I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',z(Q.current.type),r.ref),Re[u]=!0)}}function Go(r,l){{var u=function(){un||(un=!0,I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",l))};u.isReactWarning=!0,Object.defineProperty(r,"key",{get:u,configurable:!0})}}function Ho(r,l){{var u=function(){fn||(fn=!0,I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",l))};u.isReactWarning=!0,Object.defineProperty(r,"ref",{get:u,configurable:!0})}}var No=function(r,l,u,m,x,$,w){var y={$$typeof:n,type:r,key:l,ref:u,props:w,_owner:$};return y._store={},Object.defineProperty(y._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(y,"_self",{configurable:!1,enumerable:!1,writable:!1,value:m}),Object.defineProperty(y,"_source",{configurable:!1,enumerable:!1,writable:!1,value:x}),Object.freeze&&(Object.freeze(y.props),Object.freeze(y)),y};function Yo(r,l,u,m,x){{var $,w={},y=null,_=null;u!==void 0&&(dn(u),y=""+u),Do(l)&&(dn(l.key),y=""+l.key),Mo(l)&&(_=l.ref,Ao(l,x));for($ in l)le.call(l,$)&&!Wo.hasOwnProperty($)&&(w[$]=l[$]);if(r&&r.defaultProps){var T=r.defaultProps;for($ in T)w[$]===void 0&&(w[$]=T[$])}if(y||_){var P=typeof r=="function"?r.displayName||r.name||"Unknown":r;y&&Go(w,P),_&&Ho(w,P)}return No(r,y,_,x,m,Q.current,w)}}var Se=S.ReactCurrentOwner,pn=S.ReactDebugCurrentFrame;function N(r){if(r){var l=r._owner,u=ie(r.type,r._source,l?l.type:null);pn.setExtraStackFrame(u)}else pn.setExtraStackFrame(null)}var Te;Te=!1;function Pe(r){return typeof r=="object"&&r!==null&&r.$$typeof===n}function hn(){{if(Se.current){var r=z(Se.current.type);if(r)return`

Check the render method of \``+r+"`."}return""}}function qo(r){{if(r!==void 0){var l=r.fileName.replace(/^.*[\\\/]/,""),u=r.lineNumber;return`

Check your code at `+l+":"+u+"."}return""}}var mn={};function Zo(r){{var l=hn();if(!l){var u=typeof r=="string"?r:r.displayName||r.name;u&&(l=`

Check the top-level render call using <`+u+">.")}return l}}function gn(r,l){{if(!r._store||r._store.validated||r.key!=null)return;r._store.validated=!0;var u=Zo(l);if(mn[u])return;mn[u]=!0;var m="";r&&r._owner&&r._owner!==Se.current&&(m=" It was passed a child from "+z(r._owner.type)+"."),N(r),I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',u,m),N(null)}}function bn(r,l){{if(typeof r!="object")return;if($e(r))for(var u=0;u<r.length;u++){var m=r[u];Pe(m)&&gn(m,l)}else if(Pe(r))r._store&&(r._store.validated=!0);else if(r){var x=A(r);if(typeof x=="function"&&x!==r.entries)for(var $=x.call(r),w;!(w=$.next()).done;)Pe(w.value)&&gn(w.value,l)}}}function Uo(r){{var l=r.type;if(l==null||typeof l=="string")return;var u;if(typeof l=="function")u=l.propTypes;else if(typeof l=="object"&&(l.$$typeof===p||l.$$typeof===k))u=l.propTypes;else return;if(u){var m=z(l);Bo(u,r.props,"prop",m,r)}else if(l.PropTypes!==void 0&&!Te){Te=!0;var x=z(l);I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",x||"Unknown")}typeof l.getDefaultProps=="function"&&!l.getDefaultProps.isReactClassApproved&&I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Jo(r){{for(var l=Object.keys(r.props),u=0;u<l.length;u++){var m=l[u];if(m!=="children"&&m!=="key"){N(r),I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",m),N(null);break}}r.ref!==null&&(N(r),I("Invalid attribute `ref` supplied to `React.Fragment`."),N(null))}}function vn(r,l,u,m,x,$){{var w=To(r);if(!w){var y="";(r===void 0||typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(y+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var _=qo(x);_?y+=_:y+=hn();var T;r===null?T="null":$e(r)?T="array":r!==void 0&&r.$$typeof===n?(T="<"+(z(r.type)||"Unknown")+" />",y=" Did you accidentally export a JSX literal instead of a component?"):T=typeof r,I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",T,y)}var P=Yo(r,l,u,x,$);if(P==null)return P;if(w){var L=l.children;if(L!==void 0)if(m)if($e(L)){for(var Y=0;Y<L.length;Y++)bn(L[Y],r);Object.freeze&&Object.freeze(L)}else I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else bn(L,r)}return r===o?Jo(P):Uo(P),P}}function Xo(r,l,u){return vn(r,l,u,!0)}function Ko(r,l,u){return vn(r,l,u,!1)}var Qo=Ko,Vo=Xo;Z.Fragment=o,Z.jsx=Qo,Z.jsxs=Vo}()),Z}process.env.NODE_ENV==="production"?ce.exports=wn():ce.exports=xn();var de=ce.exports;const V=de.Fragment,a=de.jsx,E=de.jsxs,kn=s.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({theme:e})=>e.background.background};
    z-index: 1;
`,Cn=s.keyframes`
    0% { opacity: 0; }
    33% { opacity: 0; }
    99%   { opacity: 0.5; }
`,$n=s.div`
    position: absolute;
    background-image: url(${e=>e.src});
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    opacity: 0.5;
    mix-blend-mode: multiply;
    filter: blur(0px);
    transform: scale(1.2);
    animation: ${Cn} 3s;
`,Rn=({src:e=null})=>a(kn,{className:"background",children:a($n,{className:"background__inner",src:e})}),Sn=s.css`
    background: ${({theme:e})=>e.button.background};
    border: ${({theme:e})=>e.button.border};
    color: ${({theme:e})=>e.button.color};

    &:disabled, &:disabled:hover, &:disabled:active  {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: ${({theme:e})=>e.button.hover.background};
        border: ${({theme:e})=>e.button.hover.border};
        color: ${({theme:e})=>e.button.hover.color};
    }
    &:active {
        background: ${({theme:e})=>e.button.active.background};
        border: ${({theme:e})=>e.button.active.border};
        color: ${({theme:e})=>e.button.active.color};
        
        &:hover {
            background: ${({theme:e})=>e.button.active.hover.background};
            border: ${({theme:e})=>e.button.active.hover.border};
            color: ${({theme:e})=>e.button.active.hover.color};
        }
    }
`,Tn=s.css`
    background: ${({theme:e,icon:n})=>n===!0?e.main.background:e.button.color};
    border: ${({theme:e})=>e.button.background};
    color: ${({theme:e})=>e.button.background};

    &:disabled, &:disabled:hover, &:disabled:active  {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: ${({theme:e,icon:n})=>n===!0?e.main.background:e.button.color};
        border: ${({theme:e})=>e.button.hover.background};
        color: ${({theme:e})=>e.button.hover.background};
    }
    &:active {
        background: ${({theme:e,icon:n})=>n===!0?e.main.background:e.button.color};
        border: ${({theme:e})=>e.button.active.background};
        color: ${({theme:e})=>e.button.active.background};
        
        &:hover {
            background: ${({theme:e,icon:n})=>n===!0?e.main.background:e.button.color};
            border: ${({theme:e})=>e.button.active.hover.background};
            color: ${({theme:e})=>e.button.active.hover.background};
        }
    }
`,Pn=s.css`
    background: ${({theme:e})=>e.button.color};
    border: ${({theme:e})=>e.button.border};
    color: ${({theme:e})=>e.button.background};

    &:disabled, &:disabled:hover, &:disabled:active  {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: ${({theme:e})=>e.button.color};
        border: ${({theme:e})=>e.button.border};
        color: ${({theme:e})=>e.button.hover.background};
    }
    &:active {
        background: ${({theme:e})=>e.button.color};
        border: ${({theme:e})=>e.button.border};
        color: ${({theme:e})=>e.button.active.background};
        
        &:hover {
            background: ${({theme:e})=>e.button.color};
            border: ${({theme:e})=>e.button.border};
            color: ${({theme:e})=>e.button.active.hover.background};
        }
    }
`,ue=s.css`
    text-decoration: none;
    position: relative;
    text-align: center;
    box-sizing: border-box;
    font-weight: 600;
    display: ${({display:e})=>e||"block"};
    font-family: ${({theme:e})=>e.main.font};
    height: 3rem;
    padding: ${({icon:e})=>e===!0?"0.6rem":"0.667rem 1.333rem"};
    font-size: ${({icon:e})=>e===!0?"1.333rem":"1rem"};
    border-radius: ${({rounded:e,theme:n})=>e===!0?"10rem":n.main.borderRadius};
    cursor: pointer;
    box-shadow: none;

    ${({action:e,outline:n})=>e===!0?Tn:n===!0?Pn:Sn};

    /* if a button is followed by a button add left margin to the trailing button */
    &+button, &+a {
        margin-left: 0.4rem;
    }

    svg {
        fill: currentColor;
        height: 1.1rem;
        width: 1em;
    }
`,En=s.button`
    ${ue}
`,_e=s.a`
    ${ue}
`;s.input`
    ${ue}
`;const In=e=>{const{children:n,to:t}=e;return a(_e,{href:t,...e,children:n})},_n=e=>{const{children:n,href:t}=e;return a(_e,{href:t,...e,children:n})};s.div`
    position: relative;
    user-select: none;

    > *:first-child {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    > *:not(:first-child) {
        opacity: 0;
    }
`;const j=e=>{const{children:n,loading:t=!1,theme:o=null,to:i=!1,href:c=!1}=e;let d=n;const f={...e,icon:!1};return typeof d!="string"&&(f.icon=!0),o!==null&&typeof o=="object"&&(f.themeOveride=o),i!==!1?a(In,{...f,children:d}):c!==!1?a(_n,{...f,children:d}):a(En,{...f,children:d})};function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ee.apply(this,arguments)}function Ln(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,n){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},U(e,n)}function Fn(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,U(e,n)}function fe(e){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},fe(e)}function Bn(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function jn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ne(e,n,t){return jn()?ne=Reflect.construct.bind():ne=function(i,c,d){var f=[null];f.push.apply(f,c);var p=Function.bind.apply(i,f),b=new p;return d&&U(b,d.prototype),b},ne.apply(null,arguments)}function pe(e){var n=typeof Map=="function"?new Map:void 0;return pe=function(o){if(o===null||!Bn(o))return o;if(typeof o!="function")throw new TypeError("Super expression must either be null or a function");if(typeof n<"u"){if(n.has(o))return n.get(o);n.set(o,i)}function i(){return ne(o,arguments,fe(this).constructor)}return i.prototype=Object.create(o.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),U(i,o)},pe(e)}var On={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function zn(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=n[0],i=[],c;for(c=1;c<n.length;c+=1)i.push(n[c]);return i.forEach(function(d){o=o.replace(/%[a-z]/,d)}),o}var B=function(e){Fn(n,e);function n(t){var o;if(process.env.NODE_ENV==="production")o=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this;else{for(var i=arguments.length,c=new Array(i>1?i-1:0),d=1;d<i;d++)c[d-1]=arguments[d];o=e.call(this,zn.apply(void 0,[On[t]].concat(c)))||this}return Ln(o)}return n}(pe(Error));function he(e){return Math.round(e*255)}function Wn(e,n,t){return he(e)+","+he(n)+","+he(t)}function J(e,n,t,o){if(o===void 0&&(o=Wn),n===0)return o(t,t,t);var i=(e%360+360)%360/60,c=(1-Math.abs(2*t-1))*n,d=c*(1-Math.abs(i%2-1)),f=0,p=0,b=0;i>=0&&i<1?(f=c,p=d):i>=1&&i<2?(f=d,p=c):i>=2&&i<3?(p=c,b=d):i>=3&&i<4?(p=d,b=c):i>=4&&i<5?(f=d,b=c):i>=5&&i<6&&(f=c,b=d);var v=t-c/2,k=f+v,R=p+v,O=b+v;return o(k,R,O)}var Le={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function Mn(e){if(typeof e!="string")return e;var n=e.toLowerCase();return Le[n]?"#"+Le[n]:e}var Dn=/^#[a-fA-F0-9]{6}$/,An=/^#[a-fA-F0-9]{8}$/,Gn=/^#[a-fA-F0-9]{3}$/,Hn=/^#[a-fA-F0-9]{4}$/,me=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Nn=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Yn=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,qn=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Fe(e){if(typeof e!="string")throw new B(3);var n=Mn(e);if(n.match(Dn))return{red:parseInt(""+n[1]+n[2],16),green:parseInt(""+n[3]+n[4],16),blue:parseInt(""+n[5]+n[6],16)};if(n.match(An)){var t=parseFloat((parseInt(""+n[7]+n[8],16)/255).toFixed(2));return{red:parseInt(""+n[1]+n[2],16),green:parseInt(""+n[3]+n[4],16),blue:parseInt(""+n[5]+n[6],16),alpha:t}}if(n.match(Gn))return{red:parseInt(""+n[1]+n[1],16),green:parseInt(""+n[2]+n[2],16),blue:parseInt(""+n[3]+n[3],16)};if(n.match(Hn)){var o=parseFloat((parseInt(""+n[4]+n[4],16)/255).toFixed(2));return{red:parseInt(""+n[1]+n[1],16),green:parseInt(""+n[2]+n[2],16),blue:parseInt(""+n[3]+n[3],16),alpha:o}}var i=me.exec(n);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var c=Nn.exec(n.substring(0,50));if(c)return{red:parseInt(""+c[1],10),green:parseInt(""+c[2],10),blue:parseInt(""+c[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])};var d=Yn.exec(n);if(d){var f=parseInt(""+d[1],10),p=parseInt(""+d[2],10)/100,b=parseInt(""+d[3],10)/100,v="rgb("+J(f,p,b)+")",k=me.exec(v);if(!k)throw new B(4,n,v);return{red:parseInt(""+k[1],10),green:parseInt(""+k[2],10),blue:parseInt(""+k[3],10)}}var R=qn.exec(n.substring(0,50));if(R){var O=parseInt(""+R[1],10),D=parseInt(""+R[2],10)/100,H=parseInt(""+R[3],10)/100,A="rgb("+J(O,D,H)+")",S=me.exec(A);if(!S)throw new B(4,n,A);return{red:parseInt(""+S[1],10),green:parseInt(""+S[2],10),blue:parseInt(""+S[3],10),alpha:parseFloat(""+R[4])>1?parseFloat(""+R[4])/100:parseFloat(""+R[4])}}throw new B(5)}function Zn(e){var n=e.red/255,t=e.green/255,o=e.blue/255,i=Math.max(n,t,o),c=Math.min(n,t,o),d=(i+c)/2;if(i===c)return e.alpha!==void 0?{hue:0,saturation:0,lightness:d,alpha:e.alpha}:{hue:0,saturation:0,lightness:d};var f,p=i-c,b=d>.5?p/(2-i-c):p/(i+c);switch(i){case n:f=(t-o)/p+(t<o?6:0);break;case t:f=(o-n)/p+2;break;default:f=(n-t)/p+4;break}return f*=60,e.alpha!==void 0?{hue:f,saturation:b,lightness:d,alpha:e.alpha}:{hue:f,saturation:b,lightness:d}}function Be(e){return Zn(Fe(e))}var Un=function(n){return n.length===7&&n[1]===n[2]&&n[3]===n[4]&&n[5]===n[6]?"#"+n[1]+n[3]+n[5]:n},ge=Un;function M(e){var n=e.toString(16);return n.length===1?"0"+n:n}function be(e){return M(Math.round(e*255))}function Jn(e,n,t){return ge("#"+be(e)+be(n)+be(t))}function re(e,n,t){return J(e,n,t,Jn)}function Xn(e,n,t){if(typeof e=="number"&&typeof n=="number"&&typeof t=="number")return re(e,n,t);if(typeof e=="object"&&n===void 0&&t===void 0)return re(e.hue,e.saturation,e.lightness);throw new B(1)}function Kn(e,n,t,o){if(typeof e=="number"&&typeof n=="number"&&typeof t=="number"&&typeof o=="number")return o>=1?re(e,n,t):"rgba("+J(e,n,t)+","+o+")";if(typeof e=="object"&&n===void 0&&t===void 0&&o===void 0)return e.alpha>=1?re(e.hue,e.saturation,e.lightness):"rgba("+J(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new B(2)}function ve(e,n,t){if(typeof e=="number"&&typeof n=="number"&&typeof t=="number")return ge("#"+M(e)+M(n)+M(t));if(typeof e=="object"&&n===void 0&&t===void 0)return ge("#"+M(e.red)+M(e.green)+M(e.blue));throw new B(6)}function Qn(e,n,t,o){if(typeof e=="string"&&typeof n=="number"){var i=Fe(e);return"rgba("+i.red+","+i.green+","+i.blue+","+n+")"}else{if(typeof e=="number"&&typeof n=="number"&&typeof t=="number"&&typeof o=="number")return o>=1?ve(e,n,t):"rgba("+e+","+n+","+t+","+o+")";if(typeof e=="object"&&n===void 0&&t===void 0&&o===void 0)return e.alpha>=1?ve(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new B(7)}var Vn=function(n){return typeof n.red=="number"&&typeof n.green=="number"&&typeof n.blue=="number"&&(typeof n.alpha!="number"||typeof n.alpha>"u")},er=function(n){return typeof n.red=="number"&&typeof n.green=="number"&&typeof n.blue=="number"&&typeof n.alpha=="number"},nr=function(n){return typeof n.hue=="number"&&typeof n.saturation=="number"&&typeof n.lightness=="number"&&(typeof n.alpha!="number"||typeof n.alpha>"u")},rr=function(n){return typeof n.hue=="number"&&typeof n.saturation=="number"&&typeof n.lightness=="number"&&typeof n.alpha=="number"};function je(e){if(typeof e!="object")throw new B(8);if(er(e))return Qn(e);if(Vn(e))return ve(e);if(rr(e))return Kn(e);if(nr(e))return Xn(e);throw new B(8)}function Oe(e,n,t){return function(){var i=t.concat(Array.prototype.slice.call(arguments));return i.length>=n?e.apply(this,i):Oe(e,n,i)}}function ze(e){return Oe(e,e.length,[])}function We(e,n,t){return Math.max(e,Math.min(n,t))}function tr(e,n){if(n==="transparent")return n;var t=Be(n);return je(ee({},t,{lightness:We(0,1,t.lightness-parseFloat(e))}))}var or=ze(tr),ar=or;function ir(e,n){if(n==="transparent")return n;var t=Be(n);return je(ee({},t,{lightness:We(0,1,t.lightness+parseFloat(e))}))}var lr=ze(ir),sr=lr;const g={simplyRed:"#e83948",orangeCrush:"#f7823b",yellowSubmarine:"#f9bd45",fadeToGrey:"#b7c9db",mrBlueSky:"#b3d5e1",paintItBlack:"#1C2229",blueMonday:"#30a4c5",greenDay:"#7cc530",purpleRain:"#6033b9"},C={lightGrey:"#eef0f4",lightBlueGrey:"#787e89",midGrey:"#e7e7e7",blueGrey:"#6a707d",darkGrey:"#696f7c",white:"#ffffff",green:"#7ec17e",sliverColor:"rgb(199,55,71)",sliverGradient:"linear-gradient(90deg, rgba(199,55,71,1) 0%, rgba(223,172,51,1) 20%, rgba(142,182,59,1) 40%, rgba(251,253,254,1) 60%, rgba(102,175,208,1) 80%, rgba(63,83,158,1) 100%)"},X={main:{spacing:1.6,background:C.midGrey,font:"MuseoSansReg, sans-serif",borderRadius:"0.45rem",color:g.paintItBlack,bodyColor:C.lightBlueGrey,contrastColor:C.white,fontSize:"16px",boxBackground:C.white,border:C.midGrey},layout:{borderRadius:{lg:"0.667rem",sm:"0.276rem",md:"0.4rem"},margin:"2rem",gap:{lg:"2rem",sm:"1rem"}},container:{maxWidth:{lg:"1060px",sm:"100%"},padding:{horizontal:{lg:"2.667rem",sm:"1.333rem"},vertical:{lg:"2rem",sm:"1rem"}},margin:{lg:"0 auto 2rem",sm:"0 auto 1rem"}},table:{header:{background:C.white,color:g.paintItBlack,border:C.midGrey},row:{background:C.white,color:g.paintItBlack,hover:{background:C.lightGrey}}},actionPanel:{background:g.mrBlueSky,color:g.paintItBlack,border:g.blueMonday},background:{background:g.paintItBlack},form:{input:{background:C.lightGrey,color:g.paintItBlack,placeholder:ar(.12,C.midGrey),fontSize:"1rem",small:{color:g.paintItBlack,fontSize:"0.875rem"},border:C.midGrey},label:{color:g.paintItBlack,fontSize:"1rem",small:{color:g.paintItBlack,fontSize:"0.875rem"}},select:{background:C.lightGrey,border:C.midGrey}},text:{h1:{color:C.white,fontSize:"3rem",padding:"1rem 0",margin:"0"},h2:{color:g.paintItBlack,fontSize:"1.5rem",padding:"1rem 0",margin:"0"},h3:{color:g.paintItBlack,fontSize:"1.125rem",padding:"0.785rem 0",margin:"0"},h4:{color:g.paintItBlack,fontSize:"1rem",padding:"0.75rem 0",margin:"0"},h5:{color:g.paintItBlack,fontSize:"0.875rem",padding:"0",margin:"0"},h6:{color:g.paintItBlack,fontSize:"0.875rem",fontStyle:"italic",padding:"0",margin:"0"},p:{color:g.paintItBlack,fontSize:"1rem",small:{color:g.paintItBlack,fontSize:"0.875rem"}}},selectionPanel:{background:C.lightGrey,color:g.blueMonday,active:{background:g.blueMonday,color:C.white}},nowPlaying:{artistColor:C.blueGrey,loaderColor:g.simplyRed,volumeMain:g.simplyRed,volumeBg:g.fadeToGrey},rowComponent:{actionShadow:C.lightBlueGrey},pagination:{color:C.lightBlueGrey},toast:{background:C.white,color:C.lightBlueGrey,highlight:{success:g.greenDay,danger:g.simplyRed,warning:g.yellowSubmarine,default:C.lightBlueGrey,information:g.blueMonday}},dashboard:{online:g.greenDay,offline:g.simplyRed,fetching:C.lightBlueGrey},button:{background:g.paintItBlack,color:C.white,border:`2px solid ${g.paintItBlack}`,hover:{background:g.paintItBlack,color:C.white,border:`2px solid ${g.paintItBlack}`},active:{background:g.paintItBlack,color:C.white,border:`2px solid ${g.paintItBlack}`,hover:{background:g.paintItBlack,color:C.white,border:`2px solid ${g.paintItBlack}`}}},tabs:{color:g.fadeToGrey,tab:{color:g.paintItBlack,active:g.simplyRed,border:`3px solid ${g.simplyRed}`}}},Me=()=>a("svg",{width:"64px",height:"64px",viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:a("g",{id:"Icon/Times",stroke:"none",strokeWidth:"1",fillRule:"evenodd",children:a("path",{d:"M44.1308425,32 L62.3254196,50.194577 C64.5581935,52.4291265 64.5581935,56.0489723 62.3254196,58.2817462 L58.2817462,62.3254196 C56.0489723,64.5581935 52.4271734,64.5581935 50.194577,62.3254196 L32,44.1308425 L13.805423,62.3254196 C11.5728266,64.5581935 7.95102768,64.5581935 5.71825379,62.3254196 L1.67458042,58.2817462 C-0.558193473,56.0471968 -0.558193473,52.4271734 1.67458042,50.194577 L19.8691575,32 L1.67458042,13.805423 C-0.558193473,11.5708735 -0.558193473,7.95102768 1.67458042,5.71825379 L5.71825379,1.67458042 C7.95280324,-0.558193473 11.5728266,-0.558193473 13.805423,1.67458042 L32,19.8691575 L50.194577,1.67458042 C52.4291265,-0.558193473 56.0489723,-0.558193473 58.2817462,1.67458042 L62.3254196,5.71825379 C64.5581935,7.95280324 64.5581935,11.5728266 62.3254196,13.805423 L44.1308425,32 Z",id:"🎨-Icon-Fill"})})}),cr=s.div`
    display: inline-flex;
    border-radius: 10.325em;
    margin: 0 0.325em 0 0;
    overflow: hidden;
    background: ${({backgroundColor:e})=>e};
    color: ${({color:e})=>e};
    align-items: center;

    input,
    input:checked {
        display: none;
    }

    label {
        padding: 0.5em 0.75em;
        color: inherit;
        cursor: pointer;

        &:focus {
            background: rgba(0, 0, 0, 0.175);
        }
    }

    button {
        display: inline-block;
        padding: 1em 0.6em 0.3em 0.5em;
        width: 1.7em;
        box-sizing: border-box;
        background: rgba(40, 40, 40, 0.075);
        cursor: pointer;
        border: 0px;

        svg {
            width: 100%;
            height: 100%;
            color: white;
            fill: white;
        }
    }
`,dr=(e,n)=>{if(console.log("onRemove",e),e===null)return null;const{label:t,name:o,value:i}=n;return a("button",{type:"button",onClick:e,label:t,name:o,value:i,children:a(Me,{})})},ur=()=>null;function fr(e){let n="white";return e!==null&&(n=e),n}const pr=({label:e,value:n,name:t=null,color:o="red",textColor:i=null,onClick:c=null,onRemove:d=null})=>{let f=t;t===null&&(f=`chip-name-${e}`);let p=ur;c!==null&&(p=c);const b=fr(i);return E(cr,{backgroundColor:o,color:b,children:[E("label",{htmlFor:f,onClick:p,children:[a("input",{type:"checkbox",name:f,value:n,defaultChecked:!0}),e]}),dr(d,{label:e,name:t,value:n})]})},hr=s.div`
    margin-bottom: 1em;
`,mr=({value:e,isOpen:n,handleChangeOverlayColor:t,id:o,toggleColorPicker:i,removeOverlayColor:c})=>(console.log(e),E("div",{className:"color-picker",children:[E(j,{title:"Show Color Picker",style:{background:"#eef0f4",border:"1px solid #eef0f4",padding:".5em",display:"flex",alignItems:"center"},type:"button",onClick:()=>{i(n)},children:[a("span",{className:"color-toggle",style:{backgroundColor:e!==null&&e!==""&&e!=="undefined"?`#${e}`:"#FFF"}}),a("span",{style:{marginLeft:".5em",color:e!==null&&e!==""&&e!=="undefined"?`#${e}`:"#787e89",fontWeight:"normal"},children:e!==null&&e!==""&&e!=="undefined"?`#${e}`:"none"}),a("span",{className:"sr-only",children:"Pick Color"})]}),n?E("div",{className:"picker",style:{backgroundColor:"#FFF",padding:"3px",borderRadius:"3px",zIndex:"1",boxShadow:"inset 0 0 5px 0px #b7c9db"},children:[a(ChromePicker,{disableAlpha:!0,color:e!==null?e:"#FFF",onChangeComplete:(d,f)=>{t(d,f)}}),e!==null&&e!==""&&e!=="undefined"?E(hr,{children:[a(j,{product:"positive",type:"button",onClick:()=>{i(n)},children:"Save"}),a(j,{product:"negative",type:"button",onClick:()=>{c()},children:"Clear"})]}):null]}):null]})),gr=s.css`
    background: ${e=>e.theme.containers.background||""};
    border-radius: ${e=>e.theme.main.borderRadius||""};
    border: ${e=>e.theme.containers.border||""};
    margin: ${e=>e.theme.containers.podSeperator||0};
    min-width:300px;
    width: 100%;
`,br=s.article`
    ${gr}
`,vr=s.css`
    display:flex;
    justify-content: ${e=>e.align||"center"};
    align-items: ${e=>e.position||"center"};
    flex-direction: ${e=>e.column||"column"};
    width: 100%;
    overflow-x: auto;
    ${e=>e.image?`
            background-image: url(${e.image});
            background-position: ${e.imagePosition||"left"}; 
            background-size: ${e.imageSize||"cover"};
            background-repeat: no-repeat; 
        `:" "}
    
`,yr=s.div`
    ${vr}
`,wr=s.css`
    width: 100%;
    padding: ${e=>e.theme.containers.padding};
    box-sizing: border-box;
`,xr=s.header`
    ${wr}
`,kr=s.css`
    width: 100%;
    padding: ${e=>e.theme.containers.padding};
    box-sizing: border-box;
`,Cr=s.div`
    ${kr}
`,$r=s.css`
    display:flex;
    width: 100%;
    background: ${e=>e.theme.containers.background};
    flex-direction: column;
    flex: ${e=>e.size||1};
    justify-content: center;
    ${e=>e.image?`
            height: 100%;
            background-image: url(${e.image});
            background-size: ${e.imageSize||"cover"};
            background-repeat: no-repeat; 
            background-position: ${e.imagePos||"center center"} ;
        `:" "}
    
    @media(max-width:500px){
        flex-direction: column;    
        ${e=>e.mobile===!1?`
                display:none;
            `:""}
    }
`,Rr=s.div`
    ${$r}
`,Sr=s.css`
    display: flex;
    width: 100%;
    position: relative;
    padding: 5.5rem 0;
    ${e=>e.image?`
            
            background-image: url(${e.image});
            background-size: ${e.imageSize||"cover"};
            background-repeat: no-repeat; 
            background-position:  ${e.imagePos||"cover"};
        `:" "}

    @media(max-width:500px){
        flex-direction: column;
    }
    `,Tr=s.div`
    ${Sr}
`,Pr=br,Er=yr,Ir=xr,_r=Cr,Lr=Rr,Fr=Tr,Br=s.div`
    display: block;
    background: ${e=>e.theme.main.contrastColor};
    border-radius: ${e=>e.theme.layout.borderRadius.lg};
    padding: ${e=>e.padded?`${e.theme.container.padding.vertical.lg} ${e.theme.container.padding.horizontal.lg}`:0};
    max-width: ${e=>e.theme.container.maxWidth.lg};
    margin: ${e=>e.theme.container.margin.lg};
`;function jr({padded:e,children:n}){return a(Br,{padded:e,children:n})}const Or=s.div`
    grid-column: ${e=>e.offset?`col-start ${e.offset} / span ${e.span}`:`span ${e.span}`};
    //grid-row: 1;
    display: flex;
    justify-content: ${e=>e.pull==="right"?"flex-end":"flex-start"};
`,zr=s.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    gap: ${e=>e.theme.layout.gap.lg};
    grid-auto-flow: row;
`;function Wr({span:e=4,offset:n="",pull:t="left",children:o}){return a(Or,{span:e,offset:n,pull:t,children:o})}const Mr=()=>a("svg",{width:"64px",height:"64px",viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:a("g",{id:"Icon/Check-Circle-Light",stroke:"none",strokeWidth:"1",fillRule:"evenodd",children:a("path",{d:"M32,0 C49.6731351,0 64,14.3268649 64,32 C64,49.6731351 49.6731351,64 32,64 C14.3268649,64 0,49.6731351 0,32 C0,14.3268649 14.3268649,0 32,0 Z M32,59.8709677 C47.4768145,59.8709677 59.8709677,47.3113659 59.8709677,32 C59.8709677,16.5231855 47.3114919,4.12903226 32,4.12903226 C16.5231855,4.12903226 4.12903226,16.6886341 4.12903226,32 C4.12903226,47.4768145 16.6885081,59.8709677 32,59.8709677 Z M50.2748236,24.3921371 L26.9871472,47.4930696 C26.3800403,48.0952621 25.3995716,48.0913558 24.797379,47.484249 L13.7163558,36.3136341 C13.1141633,35.7065272 13.1180696,34.7261845 13.7251764,34.1239919 L14.8244708,33.0335181 C15.4315776,32.4313256 16.4120464,32.4352319 17.0142389,33.0423387 L25.9143145,42.0143649 L47.0035282,21.09438 C47.6106351,20.4921875 48.5909778,20.4959677 49.1931704,21.1030746 L50.2836442,22.202495 C50.8859627,22.8096018 50.8819304,23.7899446 50.2748236,24.3921371 Z",id:"🎨-Icon-Fill"})})}),Dr=()=>a("svg",{width:"64px",height:"64px",viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:a("g",{id:"Icon/Exclamation-Circle-Light",stroke:"none",strokeWidth:"1",fillRule:"evenodd",children:a("path",{d:"M32,4.12903226 C16.59375,4.12903226 4.12903226,16.6189516 4.12903226,32 C4.12903226,47.4114163 16.6136593,59.8709677 32,59.8709677 C47.4051159,59.8709677 59.8709677,47.3923891 59.8709677,32 C59.8709677,16.5258317 47.3059476,4.12903226 32,4.12903226 Z M32,0 C49.671875,0 64,14.3332913 64,32 C64,49.6770413 49.671875,64 32,64 C14.328125,64 0,49.6770413 0,32 C0,14.3332913 14.328125,0 32,0 Z M30.5173891,15.483871 L33.4824849,15.483871 C34.3627772,15.483871 35.0661542,16.2169859 35.0294859,17.0967742 L34.1262601,38.7741935 C34.0917339,39.6035786 33.4094002,40.2580645 32.5792591,40.2580645 L31.4206149,40.2580645 C30.5905998,40.2580645 29.9081401,39.6034526 29.8734879,38.7741935 L28.9702621,17.0967742 C28.9338458,16.2169859 29.6369708,15.483871 30.5173891,15.483871 Z M32,42.8387097 C33.9953377,42.8387097 35.6129032,44.4562752 35.6129032,46.4516129 C35.6129032,48.4469506 33.9953377,50.0645161 32,50.0645161 C30.0046623,50.0645161 28.3870968,48.4469506 28.3870968,46.4516129 C28.3870968,44.4562752 30.0046623,42.8387097 32,42.8387097 Z",id:"🎨-Icon-Fill"})})}),Ar=()=>a("svg",{width:"64px",height:"64px",viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:a("g",{id:"Icon/Times-Circle-Light",stroke:"none",strokeWidth:"1",fillRule:"evenodd",children:a("path",{d:"M32,0 C49.6774194,0 64,14.3225806 64,32 C64,49.6774194 49.6774194,64 32,64 C14.3225806,64 0,49.6774194 0,32 C0,14.3225806 14.3225806,0 32,0 Z M32,59.8709677 C47.4710181,59.8709677 59.8709677,47.3161542 59.8709677,32 C59.8709677,16.5289819 47.3161542,4.12903226 32,4.12903226 C16.5289819,4.12903226 4.12903226,16.6838458 4.12903226,32 C4.12903226,47.4710181 16.6838458,59.8709677 32,59.8709677 Z M44.2322329,23.0580897 L35.2903226,32 L44.2322329,40.9419103 C44.8387097,41.5483871 44.8387097,42.5289819 44.2322329,43.1354587 L43.1354587,44.2322329 C42.5289819,44.8387097 41.5483871,44.8387097 40.9419103,44.2322329 L32,35.2903226 L23.0580897,44.2322329 C22.4516129,44.8387097 21.4710181,44.8387097 20.8645413,44.2322329 L19.7677671,43.1354587 C19.1612903,42.5289819 19.1612903,41.5483871 19.7677671,40.9419103 L28.7096774,32 L19.7677671,23.0580897 C19.1612903,22.4516129 19.1612903,21.4710181 19.7677671,20.8645413 L20.8645413,19.7677671 C21.4710181,19.1612903 22.4516129,19.1612903 23.0580897,19.7677671 L32,28.7096774 L40.9419103,19.7677671 C41.5483871,19.1612903 42.5289819,19.1612903 43.1354587,19.7677671 L44.2322329,20.8645413 C44.8258569,21.4710181 44.8258569,22.4516129 44.2322329,23.0580897 Z",id:"🎨-Icon-Fill"})})}),De=()=>a("svg",{width:"64px",height:"64px",viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:a("g",{id:"Icon/Info-Circle-Light",stroke:"none",strokeWidth:"1",fillRule:"evenodd",children:a("path",{d:"M32,4.12903226 C16.59375,4.12903226 4.12903226,16.6189516 4.12903226,32 C4.12903226,47.4114163 16.6136593,59.8709677 32,59.8709677 C47.4051159,59.8709677 59.8709677,47.3923891 59.8709677,32 C59.8709677,16.5258317 47.3059476,4.12903226 32,4.12903226 Z M32,0 C49.671875,0 64,14.3332913 64,32 C64,49.6770413 49.671875,64 32,64 C14.328125,64 0,49.6770413 0,32 C0,14.3332913 14.328125,0 32,0 Z M27.3548387,44.3870968 L28.9032258,44.3870968 L28.9032258,28.9032357 L27.3548387,28.9032357 C26.499748,28.9032357 25.8064516,28.2099294 25.8064516,27.3548387 L25.8064516,26.3225806 C25.8064516,25.4674899 26.499748,24.7741935 27.3548387,24.7741935 L33.5483871,24.7741935 C34.4034778,24.7741935 35.0967742,25.4674899 35.0967742,26.3225806 L35.0967742,44.3870968 L36.6451613,44.3870968 C37.500252,44.3870968 38.1935484,45.0803931 38.1935484,45.9354839 L38.1935484,46.9677419 C38.1935484,47.8228327 37.500252,48.516129 36.6451613,48.516129 L27.3548387,48.516129 C26.499748,48.516129 25.8064516,47.8228327 25.8064516,46.9677419 L25.8064516,45.9354839 C25.8064516,45.0803931 26.499748,44.3870968 27.3548387,44.3870968 Z M32.0000098,13.4193548 C34.2803679,13.4193548 36.1290519,15.2680192 36.1290519,17.5483969 C36.1290519,19.828755 34.2803679,21.677439 32.0000098,21.677439 C29.7196321,21.677439 27.8709677,19.828755 27.8709677,17.5483969 C27.8709677,15.2680192 29.7196321,13.4193548 32.0000098,13.4193548 Z",id:"🎨-Icon-Fill"})})}),Gr=s.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 15px 30px 15px 15px;
    margin-bottom: 30px;
    font-size: 1rem;
    color: ${e=>e.borderColor};
    border-radius: 0.45em;
    width: 100%;
    background-color: ${e=>e.backgroundColor};
    border: 0.15rem solid ${e=>e.borderColor};
    justify-content: space-between;
    align-items: center;
`,Hr=s.p`
    font-size: 0.9em;
    color: ${e=>e.color};
    text-align: left;
    flex-grow: 1;
`,Nr=s.div`
    display: flex;
`,Yr=s.button`
    width: 0.8rem;
    height: 0.8rem;

    svg {
        width: 100%;
        height: 100%;
    }
    &:hover {
        opacity: 0.8;
    }
`,qr=s.div`
    width: 1rem;
    height: 1rem;
    justify-self: flex-start;
    margin-right: 15px;

    svg {
        width: 100%;
        height: 100%;
    }
`,Zr=s.div`
    text-align: ${e=>e.align};
    margin: 0.5em 0 0.5em 0;
`,Ur=e=>{const{type:n,children:t,clearResponseBox:o,data:i,className:c}=e,d={default:{backgroundColor:"#E8E9EB",borderColor:"#9397A2"},success:{backgroundColor:"#EBF6E0",borderColor:"#9ED464"},danger:{backgroundColor:"#FBE1E3",borderColor:"#ED6C76"},warning:{backgroundColor:"#FEF4E2",borderColor:"#FACD74"},info:{backgroundColor:"#DFF1F6",borderColor:"#7BC5DA"}};function f(k){i==="undefined"?o():o(k)}const p=d[n]||d.default;let b=()=>a(De,{});n==="success"?b=()=>a(Mr,{}):n==="danger"?b=()=>a(Ar,{}):n==="warning"?b=()=>a(Dr,{}):(n==="default"||n==="info")&&(b=()=>a(De,{}));let v=()=>null;return o!==void 0&&(v=()=>a(Yr,{color:p.borderColor,onClick:()=>f(i),children:a(Me,{})})),a(Zr,{className:c,children:E(Gr,{backgroundColor:p.backgroundColor,borderColor:p.borderColor,children:[E(Nr,{children:[a(qr,{color:p.borderColor,children:a(b,{})}),a(Hr,{color:p.borderColor,children:t})]}),a(v,{})]})})};function Jr(e,n,t,o){const i=Math.ceil(e/t);let c=n;n<=1?c=1:n>i&&(c=i);let d=0,f=0;if(i<=o)d=1,f=i;else{const k=Math.floor(o/2),R=Math.ceil(o/2)-1;c<=k?(d=1,f=o):c+R>=i?(d=i-o+1,f=i):(d=c-k,f=c+R)}const p=(c-1)*t,b=Math.min(p+t-1,e-1),v=Array.from(Array(f+1-d).keys()).map(k=>d+k);return{totalItems:e,thisPage:c,pageSize:t,totalPages:i,startPage:d,endPage:f,startIndex:p,endIndex:b,pages:v}}const Xr=()=>a("svg",{width:"64px",height:"64px",viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:a("g",{id:"Icon/Arrow-Right",stroke:"none",strokeWidth:"1",fillRule:"evenodd",children:a("path",{d:"M27.211231,59.2005673 C25.8400121,57.8435768 25.8684687,55.6295397 27.2684232,54.3011453 L44.4807766,37.903014 L3.42818658,37.903014 C1.52842775,37.903014 0,36.3745863 0,34.4748275 L0,29.903912 C0,28.0041532 1.52842775,26.4757254 3.42818658,26.4757254 L44.4807766,26.4757254 L27.2684232,10.0775942 C25.8828366,8.74919982 25.8542404,6.53516266 27.211231,5.17817214 L30.3823314,2.00707165 C31.7107258,0.664309448 33.8819386,0.664309448 35.2245613,2.00707165 L62.9929283,29.7752992 C64.3356906,31.1038331 64.3356906,33.2749064 62.9929283,34.6176686 L35.2245613,62.3716678 C33.8961669,63.71443 31.7249541,63.71443 30.3823314,62.3716678 L27.211231,59.2005673 Z",id:"🎨-Icon-Fill"})})}),Kr=()=>a("svg",{width:"64px",height:"64px",viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:a("g",{id:"Icon/Arrow-Left",stroke:"none",strokeWidth:"1",fillRule:"evenodd",children:a("path",{d:"M36.788769,59.2005673 L33.6176686,62.3716678 C32.2750459,63.71443 30.1038331,63.71443 28.7754387,62.3716678 L1.00707165,34.6176686 C-0.335690552,33.2749064 -0.335690552,31.1038331 1.00707165,29.7752992 L28.7754387,2.00707165 C30.1180614,0.664309448 32.2892742,0.664309448 33.6176686,2.00707165 L36.788769,5.17817214 C38.1457596,6.53516266 38.1171634,8.74919982 36.7315768,10.0775942 L19.5192234,26.4757254 L60.5718134,26.4757254 C62.4715723,26.4757254 64,28.0041532 64,29.903912 L64,34.4748275 C64,36.3745863 62.4715723,37.903014 60.5718134,37.903014 L19.5192234,37.903014 L36.7315768,54.3011453 C38.1315313,55.6295397 38.1599879,57.8435768 36.788769,59.2005673 Z",id:"🎨-Icon-Fill"})})}),Ae=s.div`
    display: block;
    text-align: right;

    > * {
        &.number &.arrow &.inactivearrow {
            display: inline-block;
            border: none;
        }
        &.number {
            padding: 0.7em 0.5em;
            width: 2.5em;
            margin: 0.5em 0.1em;
            background: #fff;
            color: ${e=>e.theme.pagination.color};
            border: none;
        }

        &.arrow {
            padding: 0.8em 0.8em 0.6em 0.8em;
            margin: 0.5em 0.1em;
            background: #fff;
            border: none;
        }
        &.inactivearrow {
            padding: 0.8em 0.8em 0.6em 0.8em;
            margin: 0.5em 0.1em;
            background: #f0f0f0;
            pointer-events: none;
            border: none;
        }

        &.active {
            background: #e83948;
            border-radius: 4px 0em;
            margin: 0.5em 0.1em;
            padding: 0.7em 0.5em;
            width: 2.5em;
            outline: none;
            color: #fff;
            border: none;
            border-radius: 10px;
        }
    }
`,Ge=s.div`
    align-self: flex-end;
    width: 0.9em;

    svg {
        width: 100%;
        height: 100%;
        fill: ${e=>e.color};
    }

    .active & {
        svg {
            fill: red;
        }
    }
`,Qr=20,Vr=5;class et extends F.Component{constructor(n){super(n),this.renderPageButton=this.renderPageButton.bind(this)}renderMore(){const{page:n,paginate:t}=this.props;return a(Ae,{children:a(j,{onClick:(i=>{t(i)})(n),children:"Load More"})})}renderPageButton(n){const{paginate:t,page:o}=this.props,i=d=>{t(d)};let c="";return o===n||o<=0&&n===1?c="active":c="number",a(j,{value:"Test Button",type:"button",outline:"true",className:c,onClick:()=>{i(n)},children:n},`pagination-page-${n}`)}renderBackPageButton(n){const{paginate:t,page:o}=this.props,i=p=>{t(p)};let c="",d="",f=!1;return o>1&&n.pages.length>0?(c="arrow",d="#e83948"):(c="inactivearrow",d="#B4B7BC",f=!0),a(j,{disabled:f,className:c,onClick:()=>{i(o-1)},children:a(Ge,{color:d,children:a(Kr,{})})})}renderNextPageButton(n){const{paginate:t,page:o}=this.props,i=f=>{t(f)};let c="",d="";return o<n.totalPages?(c="arrow",d="#e83948"):(c="inactivearrow",d="#B4B7BC"),a(j,{className:c,onClick:()=>{i(o+1)},children:a(Ge,{color:d,children:a(Xr,{})})})}renderPages(){const{page:n,totalRecords:t}=this.props,o=Jr(t,n,Qr,Vr),{pages:i}=o;return a(Ae,{children:i&&i.length>1?E(V,{children:[this.renderBackPageButton(o),i.map(this.renderPageButton),this.renderNextPageButton(o)]}):null})}render(){const{type:n}=this.props;switch(n){case"paginate":return this.renderPages(n);case"more":return this.renderMore(n);case"none":default:return null}}}const nt=(e,n,t)=>{let o;return function(...i){const c=this,d=function(){o=null,t||e.apply(c,i)},f=t&&!o;clearTimeout(o),o=setTimeout(d,n),f&&e.apply(c,i)}},He=s.css`
    padding: 10px 15px;
    background: ${e=>e.background?e.background:e.theme.main.boxBackground};
`,rt=s.css`
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
    color: ${e=>e.theme.main.color};
    border-collapse: separate;
    border-spacing: 0 0.3rem;

    &:last-child {
        margin-bottom: 0;
    }
`,tt=s.css`
    opacity: ${e=>e.opacity?e.opacity:1};
    border-radius: ${e=>e.theme.main.borderRadius};
    min-height: 50px;

    td:first-child,
    th:first-child {
        border-radius: ${e=>e.theme.main.borderRadius} 0 0 ${e=>e.theme.main.borderRadius};
    }

    td:last-child,
    th:last-child {
        border-radius: 0 ${e=>e.theme.main.borderRadius} ${e=>e.theme.main.borderRadius} 0;
        text-align: right;
        position: sticky;
        right: 0px;
        border-left: 1px;
        padding: 10px 15px;
    }
`,ot=s.table`
    ${rt}

    .iconWrap {
        box-shadow: ${e=>e.overflowed?`-5px 0 8px -5px ${e.theme.rowComponent.actionShadow}`:"none"};
    }
`,at=s.div`
    overflow: auto;
    margin-bottom: 15px;

    td,
    th {
        white-space: nowrap;
    }
`;class it extends F.Component{constructor(n){super(n),this.state={overflowed:!1},this.responsiveTable=F.createRef(),this.handleScroll=this.handleScroll.bind(this)}componentDidMount(){setTimeout(()=>{this.handleScroll()},200),window.addEventListener("resize",nt(this.handleScroll))}componentWillUnmount(){window.removeEventListener("resize",this.handleScroll)}handleScroll(){let n=!1;const t=this.responsiveTable.current;console.log(t.offsetWidth,t.scrollWidth,t.scrollLeft),t.offsetWidth<t.scrollWidth&&t.offsetWidth+t.scrollLeft<t.scrollWidth&&(n=!0),this.setState(()=>({overflowed:n}))}render(){const{children:n,paginate:t,totalRecords:o,page:i,type:c}=this.props,{overflowed:d}=this.state;return E(V,{children:[a(at,{onScroll:this.handleScroll,ref:this.responsiveTable,children:a(ot,{overflowed:d,children:n})}),a(et,{paginate:t,page:i,totalRecords:o,type:c})]})}}const lt=s.tr`
    ${tt}
`,st=({children:e,background:n=null,opacity:t=1,stickyActions:o=!0,className:i=null,...c})=>a(lt,{className:i,background:n,opacity:t,stickyActions:o,...c,children:e}),ct=s.th`
    ${He}
    padding: 15px 15px;
`,dt=({children:e,className:n})=>a(ct,{className:n,children:e}),ut=s.td`
    ${He}
    text-align: ${e=>e.align?e.align:null};
`,ft=({children:e,align:n,className:t})=>a(ut,{className:t,align:n,children:e}),pt=s.div`
    display:flex;
    width:100%;
    font-family: inherit;
    
`,Ne=s.span`
    display: flex;
    align-items: center;
`,ht=s(Ne)`
    font-size:18px;
    color:${({fill:e})=>e||"#000000"};
    font-weight:700;
    padding:0 .5rem 0 0;
`,mt=s(Ne)`
    font-size:15px;
    font-weight:500;
    min-width:2rem;
    color: '#333333';
`,Ye=({fill:e,leftText:n="",rightText:t="",Icon:o})=>E(pt,{children:[a(ht,{fill:e,children:n}),a(mt,{children:t})]}),gt=s.div`
    display:flex;
    width:100%;
    font-family: ${e=>e.theme&&e.theme.main.font?e.theme.main.font:"inherit"};
    align-items:center;
`,bt=s.div`
    width:1.5rem;
    margin-right:.5rem;
    color: ${e=>e.fill};
`,vt=({fill:e,leftText:n="",rightText:t="",Icon:o})=>E(gt,{children:[a(bt,{fill:e,children:a(o,{fill:e})}),a(Ye,{fill:e,leftText:n,rightText:t})]}),ye=s.css`
    font-family: ${e=>e.theme.main.font};
    font-weight: lighter;
    margin: 0;
`,yt=s.p`
    ${ye}
    font-size: 0.8rem;
`,wt=s.p`
    ${ye}
    font-weight: lighter;
    font-size: 0.95rem;
    color: ${e=>e.theme.main.color};
`,xt=s.p`
    ${ye}
    font-size: 1rem;
`,qe=({type:e="heading",children:n,...t})=>{switch(e.toLowerCase()){case"help":return a(yt,{...t,children:n});case"small":return a(wt,{...t,children:n});default:return a(xt,{...t,children:n})}},kt=s.div`
    padding:.75rem;
    border-radius:10px;
    background-color:#fff;
`,Ct=s.div`
    margin-top:.25rem;
`,$t=({text:e="",children:n,...t})=>E(kt,{...t,children:[a(qe,{type:"small",children:e}),a(Ct,{children:n})]}),Rt=s.div`
    display: block;

    border-radius:10px;
    background-color:#fff;
    
    > * {
        display: flex;

        ${({columnString:e})=>e!==null?"> * { width:"+e+"; }":null}

        ${({columnArray:e})=>e!==null?e.map((n,t)=>"> *:nth-child("+(t+1)+") { width:"+n+"; }"):null}

        

    }
    //grid-template-rows: ${({rows:e})=>e};
`,St=({children:e,columns:n="12rem",...t})=>a(Rt,{...t,columnString:typeof n=="string"?n:null,columnArray:typeof n!="string"?n:null,children:e}),Tt=s.div`
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${e=>e.theme.main.color};
`,Pt=({children:e})=>a(Tt,{children:e}),Et=s.div`
    padding: 0.6rem 0.4rem;
`,It=({children:e,...n})=>a(Et,{...n,children:e}),Ze=s.div`
    padding: 0.6rem 0.4rem;
`,_t=s.css`
    //color: ${e=>e.theme.main.color};
    //font-family: ${e=>e.theme.main.font};
    margin: 0;
`,Lt=s.h4`
    ${_t}
    font-weight: 700;
    font-size: 0.95rem;
    //color: ${e=>e.theme.main.color};
`,Ft=({type:e,children:n})=>{switch(e){case"smalltableheader":return a(Ze,{children:a(Lt,{children:n})});default:return a(Ze,{children:n})}},Bt=s.div`
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${e=>e.theme.main.color};

    > * {
        font-weight: 700;
    }
`,jt=({children:e})=>a(Bt,{children:e}),Ot=s.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;s.div`
    display: flex;
    flex-direction: ${e=>e.inline?"row":"column"};
    padding: 0 0 ${e=>e.theme.container.padding.vertical.lg} 0;
`;class zt extends F.Component{constructor(n){super(n),this.submit=this.submit.bind(this),console.log("item form",n)}submit(n){const{form:t}=this.refs,{onSubmit:o}=this.props;if(n.preventDefault(),[...t].filter(c=>c.name.length>0&&!c.validity.valid).length===0&&typeof o=="function"){const c=[...t].filter(d=>d.name.length>0).reduce((d,f)=>(d[f.name]=f.value,d),{});console.log(c),o(c)}else alert("@Devs. no no no no. Pass edit function pls")}render(){const{children:n,buttonText:t="Submit"}=this.props;return E(Ot,{ref:"form",onSubmit:this.submit,children:[n,a("div",{children:a(j,{product:"positive",type:"submit-modal",children:t})})]})}}const Wt=s.css`
    //margin-bottom:5px;
    //font-size: 0.9rem;
    color: ${e=>X.main.color};
`,we=s.label`
    ${Wt}
    margin-bottom: ${e=>e.margin||0};
    display: ${({block:e})=>e?"block":"inline-block"};
    width: 100%;
`,Mt=s.div`
    font-size: 1rem;
    font-family: MuseoSansReg, sans-serif;
    padding-bottom: 0.5rem;
    box-sizing: border-box;
`,Dt=s.span`
    display: inline-block;
    margin-left: 0.3rem;
`,At=({children:e,required:n=!1})=>{let t=()=>null;return n&&(t=()=>a(Dt,{children:"*"})),E(Mt,{children:[e,a(t,{})]})},Gt=s.div`
    display: flex;
    align-items: center;
    background: ${({inputBackground:e})=>e};
    color: ${({inputColour:e})=>e};
    border-radius: ${({rounded:e})=>e===!0?"2.5rem":"0.4rem"};
    padding: 0 0.4rem;
    opacity: ${({disabled:e=!1})=>e?"0.4":"1"};
    border: 1px solid ${({inputBorder:e})=>e};

    &:focus-within {
        //background: ${e=>sr(.1,e.inputBackground)};
        //color: ${e=>e.inputColour};
    }
`,Ht=s.input`
    border: 0;
    padding: 0;
    margin: 0;
    background: transparent;
    font-size: 1rem;
    padding: 0.8rem 0.4rem;
    color: inherit;
    width: 100%;
    font-family: ${e=>e.theme.main.font};

    &::placeholder {
        color: ${({inputColour:e})=>e};
        opacity: 1; /* Firefox */
    }

    &:focus {
        outline: none;
    }
`,Nt=s.p`
    color: ${({inputColour:e})=>e};
    font-family: MuseoSansReg, sans-serif;
    font-size: 0.75rem;
    margin: 0.6rem 0;
`,Yt=({children:e,inputColour:n})=>e===null?null:a(Nt,{inputColour:n,children:e}),qt=({id:e,name:n,inputBackground:t=null,inputColour:o=null,inputBorder:i=null,prepend:c=null,append:d=null,label:f=null,type:p="text",caption:b=null,required:v=!1,placeholder:k=!1,defaultValue:R=null,status:O=null,...D})=>{let H=()=>null;c!==null&&(H=()=>a(V,{children:c}));let A=()=>null;d!==null&&(A=()=>a(V,{children:d}));let S={inputBackground:"white",inputColour:"black",inputBorder:X.main.border};return t!==null&&(S={...S,inputBackground:t}),o!==null&&(S={...S,inputColour:o}),i!==null&&(S={...S,inputBorder:i}),E(we,{htmlFor:n,block:!0,children:[f!==null?a(At,{required:v,children:f}):null,E(Gt,{...D,...S,children:[a(H,{}),a(Ht,{type:p,name:n,required:v,placeholder:k,defaultValue:R,id:e,...S,...D}),a(A,{})]}),a(Yt,{...S,children:b})]})},Zt=s.label`
    font-weight: bold;
    margin-bottom: 0.75rem;
    color: 'black';
    text-align: left;
`,Ut=s.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,Jt=s.select`
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    display: block;
    width: 100%;
    box-shadow: none;
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    border: none;
    padding: 0.875rem 0.6rem;
    font-family: ${e=>e.theme.main.font};
    font-weight: 400;

    &:focus {
        outline: none;
    }

    option {
        background: 'white';
        padding: 0.875rem 0.6rem;
        font-family: MuseoSans, sans-serif;
        color: 'black';
    }
`,Xt=s.div`
    margin: 0;
    min-width: 10rem;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    background: ${e=>e.theme.form.select.background};
    border: 1px solid ${e=>e.theme.form.select.border};
    border-radius: 0.45rem;
    box-shadow: none;
    font-family: ${e=>e.theme.main.font};

    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        right: 10px;
        top: 37%;
        z-index: 100;
        box-sizing: border-box;
        height: 0.5rem;
        width: 0.5rem;
        border-style: solid;
        border-color: #787e89;
        border-width: 0px 2px 2px 0px;
        transform: rotate(45deg);
        transition: border-width 150ms ease-in-out;
        pointer-events: none;
    }
    @supports (-moz-appearance: none) {
        select {
            -moz-appearance: none;
            text-indent: 0.01px;
            text-overflow: '';
            font-family: ${e=>e.theme.main.font};
        }
    }
`,Kt=({children:e})=>e?a(Zt,{children:e}):null,Qt=({value:e,name:n,children:t,label:o,onChange:i=()=>{}})=>E(Ut,{children:[o?a(Kt,{htmlFor:n,children:o}):null,a(Xt,{children:a(Jt,{value:e,name:n,onChange:i,children:t})})]}),Vt=s.div`
    
    flex-direction: row;
    //display: ${e=>e.inline?"inline-flex":"flex"};
    //margin-right: ${e=>e.inline?"0.8rem":0};
    //margin-bottom: 0.8rem;
    font-size: 1rem;
    font-family: MuseoSansReg, sans-serif;
    
`,eo=s(we)`
   display: inline-flex;
   align-items: center;
    //padding: 0.25rem 0 0.25rem 2.25rem;
    line-height: 1.5rem;
    position: relative;
    //opacity: ${({disabled:e})=>e?"0.4":"1"};
`,no=s.input`
    -webkit-appearance: none;
    padding: 0;
    border-radius: 3px;
    display: inline-flex;
    /* position: absolute;
    left: 0;
    top: 0; */
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    align-items: center;
    margin-right: 5px;
    background: ${e=>e.theme.form.input.background};

    &:active,
    &:checked:active {
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }
    &:disabled {
        box-shadow: none;
    }

    &:checked {
        background-color: ${e=>e.backgroundColor!==null?e.backgroundColor:e.theme.form.input.background};
        color: ${e=>e.color!==null?e.color:e.theme.form.input.color};
    }

    &:checked:after {
        content: '\\2714';
        font-family: 'MuseoSansReg', sans-serif;
        color: ${e=>e.color!==null?e.color:e.theme.form.input.color};
        font-size: 1.1rem;
    }
`,ro=({name:e,id:n,label:t=null,required:o,checked:i,value:c,inline:d=!1,disabled:f=!1,className:p=null,backgroundColor:b=null,color:v=null,...k})=>a(Vt,{inline:d,className:p,children:E(eo,{htmlFor:n,disabled:f,children:[a(no,{type:"checkbox",name:e,id:n,required:o,value:c,checked:i,disabled:f,backgroundColor:b,color:v,...k}),t]})}),te=s.css`
    color: ${X.main.color};
    font-family: ${X.main.font};
    margin: 0;
    margin-bottom: ${e=>e.margin||".75em"};
`,to=s.h3`
    ${te}
    font-size: 2.2rem;
`,oo=s.h1`
    ${te}
    font-size: 1.6rem;
`,ao=s.h2`
    ${te}
    font-weight: lighter;
    font-size: 1.4rem;
`,io=s.h4`
    ${te}
    font-size: 1.2rem;
`,lo=({type:e="heading",children:n,...t})=>{switch(e.toLowerCase()){case"hero":return a(to,{...t,children:n});case"title":return a(oo,{...t,children:n});case"subtitle":return a(ao,{...t,children:n});default:return a(io,{...t,children:n})}},so=s.hr`
    width: ${({width:e})=>e};
    margin: 0 auto;
    border-bottom: 1px solid ${({color:e})=>e!==null?e:X.generalColors.midGrey};
`,co=({width:e="100%",color:n=null})=>a(so,{width:e,color:n}),uo=s.a`
    display: inline-block;
    color: ${e=>e.theme.tabs.tab.color};
    padding: 0.3rem 0.6rem;
    font-size: 1rem;
    font-family: MuseoSansReg, sans-serif;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;

    &.active {
        color: ${e=>e.theme.tabs.tab.active};
        border-bottom: ${e=>e.theme.tabs.tab.border};
    }
`,fo=({id:e,checked:n=!1,children:t,...o})=>a(uo,{id:e,className:n?"active":"",...o,children:t},"tab-"+e),Ue=s.div`
    display: block;
    position: relative;
`,po=({children:e,...n})=>{const{props:t}=e,{children:o}=t;if(o.length!==2||!o[0]||!o[1])return a(Ue,{children:a("p",{children:"There are issues with your children"})});function i(c){const d=c.target.closest("a[id]");if(d){const f=v=>[...v.parentElement.children].filter(k=>k!=v);f(d).forEach(v=>v.classList.remove("active")),d.classList.add("active");const b=c.target.closest(".tabbed-content").querySelectorAll("div#"+d.id);if(b&&b[0]){const v=b[0];f(v).forEach(R=>R.classList.remove("active")),v.classList.add("active")}}}return a(Ue,{className:"tabbed-content",...n,onClick:i,children:e})},ho=s.div`
    display: none;
    position: relative;
    opacity: 0;
    transition: opacity 0.2s linear;

    &.active {
        display: block;
        opacity: 1;
        
    }

`,mo=({checked:e=!1,children:n,...t})=>a(ho,{className:e?"active":"",...t,children:n}),go=s.div`

`,bo=s.div`
    border-bottom: 1px solid ${e=>e.theme.tabs.color};
    padding: 0;    
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    height: 2rem;
    overflow-y: none;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    > a {
        scroll-snap-align: start;
    }
`,vo=({children:e,...n})=>a(go,{...n,children:a(bo,{children:e})}),yo=s.div`
    display: block;
    position: relative;
`,wo=({children:e,...n})=>a(yo,{...n,children:e});h.Background=Rn,h.Button=j,h.Checkbox=ro,h.Chip=pr,h.ColorPicker=mr,h.Column=Wr,h.ColumnContainer=Lr,h.ColumnWrapper=zr,h.Container=jr,h.Content=_r,h.FlexTable=St,h.FlexTableCell=It,h.FlexTableHead=jt,h.FlexTableHeader=Ft,h.FlexTableRow=Pt,h.Form=zt,h.GridContainer=Fr,h.Header=Ir,h.Heading=lo,h.Hr=co,h.IconBoxes=vt,h.Input=qt,h.Label=we,h.Pod=Pr,h.PositionContainer=Er,h.Rectangle=$t,h.ResponseBox=Ur,h.Select=Qt,h.Tab=fo,h.TabContent=wo,h.TabGroup=vo,h.TabPane=mo,h.TabWrap=po,h.Table=it,h.Td=ft,h.Text=qe,h.TextPairs=Ye,h.Th=dt,h.Tr=st,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
