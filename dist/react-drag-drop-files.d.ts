import{jsx as n,jsxs as e,Fragment as r}from"react/jsx-runtime";import t,{css as o}from"styled-components";import{useState as i,useCallback as a,useEffect as l,useRef as d}from"react";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var p=function(){return p=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},p.apply(this,arguments)};function s(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var c,u,f,v,h,x=o(c||(c=s(["\n  display: flex;\n  align-items: center;\n  min-width: 322px;\n  max-width: 508px;\n  height: 48px;\n  border: dashed 2px ",";\n  padding: 8px 16px 8px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  flex-grow: 0;\n"],["\n  display: flex;\n  align-items: center;\n  min-width: 322px;\n  max-width: 508px;\n  height: 48px;\n  border: dashed 2px ",";\n  padding: 8px 16px 8px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  flex-grow: 0;\n"])),"#0658c2"),g=t.label(u||(u=s(["\n  position: relative;\n  ",";\n  &.is-disabled {\n    border: dashed 2px ",";\n    cursor: no-drop;\n    svg {\n      fill: ",";\n      color: ",";\n      path {\n        fill: ",";\n        color: ",";\n      }\n    }\n  }\n  & > input {\n    display: none;\n  }\n"],["\n  position: relative;\n  ",";\n  &.is-disabled {\n    border: dashed 2px ",";\n    cursor: no-drop;\n    svg {\n      fill: ",";\n      color: ",";\n      path {\n        fill: ",";\n        color: ",";\n      }\n    }\n  }\n  & > input {\n    display: none;\n  }\n"])),(function(n){return n.overRide?"":x}),"#666","#666","#666","#666","#666"),m=t.div(f||(f=s(["\n  border: dashed 2px ",";\n  border-radius: 5px;\n  background-color: ",";\n  opacity: 0.5;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  & > span {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n"],["\n  border: dashed 2px ",";\n  border-radius: 5px;\n  background-color: ",";\n  opacity: 0.5;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  & > span {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n"])),"#666","#999"),b=t.div(v||(v=s(["\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n  & > span {\n    font-size: 12px;\n    color: ",";\n  }\n  .file-types {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 100px;\n  }\n"],["\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n  & > span {\n    font-size: 12px;\n    color: ",";\n  }\n  .file-types {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 100px;\n  }\n"])),(function(n){return n.error?"red":"#666"})),w=t.span(h||(h=s(["\n  font-size: 14px;\n  color: ",";\n  span {\n    text-decoration: underline;\n  }\n"],["\n  font-size: 14px;\n  color: ",";\n  span {\n    text-decoration: underline;\n  }\n"])),"#666"),y=function(n){return n/1024/1024},L=function(n){return void 0===n?"":n.map((function(n){return".".concat(n.toLowerCase())})).join(",")};function z(e){var r=e.types,t=e.minSize,o=e.maxSize;if(r){var i=r.toString(),a="";return o&&(a+="size >= ".concat(o,", ")),t&&(a+="size <= ".concat(t,", ")),n("span",p({title:"".concat(a,"types: ").concat(i),className:"file-types"},{children:i}),void 0)}return null}function C(){return e("svg",p({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[n("path",{d:"M5.33317 6.66667H22.6665V16H25.3332V6.66667C25.3332 5.196 24.1372 4 22.6665 4H5.33317C3.8625 4 2.6665 5.196 2.6665 6.66667V22.6667C2.6665 24.1373 3.8625 25.3333 5.33317 25.3333H15.9998V22.6667H5.33317V6.66667Z",fill:"#0658C2"},void 0),n("path",{d:"M10.6665 14.6667L6.6665 20H21.3332L15.9998 12L11.9998 17.3333L10.6665 14.6667Z",fill:"#0658C2"},void 0),n("path",{d:"M25.3332 18.6667H22.6665V22.6667H18.6665V25.3333H22.6665V29.3333H25.3332V25.3333H29.3332V22.6667H25.3332V18.6667Z",fill:"#0658C2"},void 0)]}),void 0)}var E=0;var H=function(t,o,i,a,l,d,p){return i?n("span",{children:a},void 0):n(w,{children:l?n("span",{children:"Upload disabled"},void 0):n(r,t||o?{children:n("span",{children:p},void 0)}:{children:e(r,d?{children:[n("span",{children:d.split(" ")[0]},void 0)," ",d.substr(d.indexOf(" ")+1)]}:{children:[n("span",{children:"Upload"},void 0)," or drop a file right here"]},void 0)},void 0)},void 0)},S=function(t){var o=t.name,s=t.hoverTitle,c=t.types,u=t.handleChange,f=t.classes,v=t.children,h=t.maxSize,x=t.minSize,w=t.fileOrFiles,S=t.onSizeError,V=t.onTypeError,D=t.onSelect,P=t.onDrop,j=t.disabled,k=t.label,M=t.uploadedLabel,O=t.multiple,R=t.onDraggingStateChange,T=t.dropMessageStyle,F=t.maxSizeErrorMsg,Z=t.minSizeErrorMsg,N=t.typeErrorMsg,U=d(null),X=d(null),Y=i(!1),B=Y[0],q=Y[1],A=i(null),G=A[0],I=A[1],J=i(!1),K=J[0],Q=J[1],W=function(n){return c&&!function(n,e){var r=n.name.split(".").pop();return e.map((function(n){return n.toLowerCase()})).includes(r.toLowerCase())}(n,c)?(Q(!0),V&&V(N),!1):h&&y(n.size)>h?(Q(!0),S&&S(F),!1):!(x&&y(n.size)<x)||(Q(!0),S&&S(Z),!1)},$=function(n){var e=!1;if(n){if(n instanceof File)e=!W(n);else for(var r=0;r<n.length;r++){var t=n[r];e=!W(t)||e}return!e&&(u&&u(n),I(n),q(!0),Q(!1),!0)}return!1},_=function(n){var e=n.labelRef,r=n.inputRef,t=n.multiple,o=n.handleChanges,d=n.onDrop,p=i(!1),s=p[0],c=p[1],u=a((function(){r.current.click()}),[r]),f=a((function(n){n.preventDefault(),n.stopPropagation(),E++,n.dataTransfer.items&&0!==n.dataTransfer.items.length&&c(!0)}),[]),v=a((function(n){n.preventDefault(),n.stopPropagation(),--E>0||c(!1)}),[]),h=a((function(n){n.preventDefault(),n.stopPropagation()}),[]),x=a((function(n){n.preventDefault(),n.stopPropagation(),c(!1),E=0;var e=n.dataTransfer.files;if(e&&e.length>0){var r=t?e:e[0],i=o(r);d&&i&&d(r)}}),[o]);return l((function(){var n=e.current;return n.addEventListener("click",u),n.addEventListener("dragenter",f),n.addEventListener("dragleave",v),n.addEventListener("dragover",h),n.addEventListener("drop",x),function(){n.removeEventListener("click",u),n.removeEventListener("dragenter",f),n.removeEventListener("dragleave",v),n.removeEventListener("dragover",h),n.removeEventListener("drop",x)}}),[u,f,v,h,x,e]),s}({labelRef:U,inputRef:X,multiple:O,handleChanges:$,onDrop:P});return l((function(){null==R||R(_)}),[_]),l((function(){w?(q(!0),I(w)):(X.current&&(X.current.value=""),q(!1),I(null))}),[w]),e(g,p({overRide:v,className:"".concat(f||""," ").concat(j?"is-disabled":""),ref:U,htmlFor:o,onClick:function(n){n.preventDefault(),n.stopPropagation()}},{children:[n("input",{onClick:function(n){n.stopPropagation(),X&&X.current&&X.current.click()},onChange:function(n){var e=n.target.files,r=O?e:e[0],t=$(r);D&&t&&D(r)},accept:L(c),ref:X,type:"file",name:o,disabled:j,multiple:O},void 0),_&&n(m,p({style:T},{children:n("span",{children:s||"Drop Here"},void 0)}),void 0),!v&&e(r,{children:[n(C,{},void 0),e(b,p({error:K},{children:[H(G,B,K,N,j,k,M),n(z,{types:c,minSize:x,maxSize:h},void 0)]}),void 0)]},void 0),v]}),void 0)};export{S as FileUploader};
