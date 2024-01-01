// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+t(n):t(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):n.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,a=parseFloat(e.arg);if(!isFinite(a)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);a=e.arg}switch(e.specifier){case"e":case"E":t=a.toExponential(e.precision);break;case"f":case"F":t=a.toFixed(e.precision);break;case"g":case"G":l(a)<1e-4?((r=e.precision)>0&&(r-=1),t=a.toExponential(r)):t=a.toPrecision(e.precision),e.alternate||(t=u.call(t,y,"$1e"),t=u.call(t,v,"e"),t=u.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=u.call(t,g,"e+0$1"),t=u.call(t,d,"e-0$1"),e.alternate&&(t=u.call(t,h,"$1."),t=u.call(t,w,"$1.e")),a>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):p.call(t)}function _(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function E(e,r,i){var t=r-e.length;return t<0?e:e=i?e+_(t):_(t)+e}var x=String.fromCharCode,k=isNaN,I=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,i,t,n,o,l,p,f,u;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,f=0;f<e.length;f++)if(c(t=e[f]))l+=t;else{if(r=void 0!==t.precision,!(t=S(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,u=0;u<i.length;u++)switch(n=i.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,k(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,k(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!k(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=k(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=E(t.arg,t.width,t.padRight)),l+=t.arg||"",p+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,i,t,a;for(i=[],a=0,t=V.exec(e);t;)(r=e.slice(a,V.lastIndex-t[0].length)).length&&i.push(r),i.push(j(t)),a=V.lastIndex,t=V.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function $(e){return"string"==typeof e}function A(e){var r,i,t;if(!$(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return T.apply(null,i)}var C,N=Object.prototype,R=N.toString,G=N.__defineGetter__,O=N.__defineSetter__,P=N.__lookupGetter__,Z=N.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(P.call(e,r)||Z.call(e,r)?(t=e.__proto__,e.__proto__=N,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&G&&G.call(e,r,i.get),o&&O&&O.call(e,r,i.set),e};var W=C,L=Number.NEGATIVE_INFINITY;function U(e){return 0===e&&1/e===L}function X(e){return e!=e}function z(e,r,i,t,a,n){var o,s,c,l,p,f,u,g,d,h,w,b,v;if(e<=0||0===r)return i;if(r<0&&(t*=-1,n*=-1),n<0?(g=(1-e)*n,d=0):(g=0,d=(e-1)*n),f=g+n,t<0){for(p=0,s=(l=(1-e)*t)+t,v=1;v<e;v++)if(h=i[s],w=a[f],X(h)){for(c=s,u=f;c>p;)i[c]=i[c+t],a[u]=a[u+n],c+=t,u+=n;i[p]=h,a[d]=w}else{for(o=U(h),c=s-t,u=f-n;c<=l&&(!((b=i[c])<=h)||o&&b===h&&!1===U(b));)i[c+t]=b,a[u+n]=a[u],c-=t,u-=n;i[c+t]=h,a[u+n]=w,s+=t,f+=n}return i}for(p=(e-1)*t,s=(l=0)+t,v=1;v<e;v++)if(h=i[s],w=a[f],X(h)){for(c=s,u=f;c<p;)i[c]=i[c+t],a[u]=a[u+n],c+=t,u+=n;i[p]=h,a[d]=w}else{for(o=U(h),c=s-t,u=f-n;c>=l&&(!((b=i[c])<=h)||o&&b===h&&!1===U(b));)i[c+t]=b,a[u+n]=a[u],c-=t,u-=n;i[c+t]=h,a[u+n]=w,s+=t,f+=n}return i}return W(z,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,i,t,a,n,o,s){var c,l,p,f,u,g,d,h,w,b,v,y,m;if(e<=0||0===r)return i;if(r<0&&(a-=(e-1)*(t*=-1),s-=(e-1)*(o*=-1)),u=(f=a)+(e-1)*t,l=f+t,w=(h=s)+(e-1)*o,g=h+o,t<0){for(m=1;m<e;m++)if(b=i[l],v=n[g],X(b)){for(p=l,d=g;p>u;)i[p]=i[p+t],n[d]=n[d+o],p+=t,d+=o;i[u]=b,n[w]=v}else{for(c=U(b),p=l-t,d=g-o;p<=f&&(!((y=i[p])<=b)||c&&y===b&&!1===U(y));)i[p+t]=y,n[d+o]=n[d],p-=t,d-=o;i[p+t]=b,n[d+o]=v,l+=t,g+=o}return i}for(m=1;m<e;m++)if(b=i[l],v=n[g],X(b)){for(p=l,d=g;p<u;)i[p]=i[p+t],n[d]=n[d+o],p+=t,d+=o;i[u]=b,n[w]=v}else{for(c=U(b),p=l-t,d=g-o;p>=f&&(!((y=i[p])<=b)||c&&y===b&&!1===U(y));)i[p+t]=y,n[d+o]=n[d],p-=t,d-=o;i[p+t]=b,n[d+o]=v,l+=t,g+=o}return i}}),z},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dsort2ins=r();
//# sourceMappingURL=browser.js.map
