(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var s=n(537),i=n.n(s),r=n(645),a=n.n(r)()(i());a.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",s=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),s&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),s&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,s,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(s)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);s&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",s="second",i="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},$={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(s,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,l),r=n-i<0,a=e.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:o,d:a,D:d,h:r,m:i,s,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",y={};y[_]=m;var g=function(t){return t instanceof E},b=function t(e,n,s){var i;if(!e)return _;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(i=r),n&&(y[r]=n,i=r);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;y[o]=e,i=o}return!s&&i&&(_=i),i||!s&&_},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new E(n)},w=$;w.l=b,w.i=g,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(p);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!w.u(e)||e,f=w.p(t),p=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?s:s.endOf(a)},h=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,$=this.$D,_="set"+(this.$u?"UTC":"");switch(f){case u:return c?p(1,0):p(31,11);case l:return c?p(1,v):p(0,v+1);case o:var y=this.$locale().weekStart||0,g=(m<y?m+7:m)-y;return p(c?$-g:$+(6-g),v);case a:case d:return h(_+"Hours",0);case r:return h(_+"Minutes",1);case i:return h(_+"Seconds",2);case s:return h(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var o,c=w.p(t),f="set"+(this.$u?"UTC":""),p=(o={},o[a]=f+"Date",o[d]=f+"Date",o[l]=f+"Month",o[u]=f+"FullYear",o[r]=f+"Hours",o[i]=f+"Minutes",o[s]=f+"Seconds",o[n]=f+"Milliseconds",o)[c],h=c===a?this.$D+(e-this.$W):e;if(c===l||c===u){var m=this.clone().set(d,1);m.$d[p](h),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,c){var d,f=this;n=Number(n);var p=w.p(c),h=function(t){var e=M(f);return w.w(e.date(e.date()+Math.round(t*n)),f)};if(p===l)return this.set(l,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===a)return h(1);if(p===o)return h(7);var m=(d={},d[i]=t,d[r]=e,d[s]=1e3,d)[p]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].slice(0,r)},d=function(t){return w.s(r%12||12,t,"0")},p=n.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:u(n.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:d(1),hh:d(2),a:p(r,a,!0),A:p(r,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return s.replace(h,(function(t,e){return e||m[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var p,h=w.p(d),m=M(n),v=(m.utcOffset()-this.utcOffset())*t,$=this-m,_=w.m(this,m);return _=(p={},p[u]=_/12,p[l]=_,p[c]=_/3,p[o]=($-v)/6048e5,p[a]=($-v)/864e5,p[r]=$/e,p[i]=$/t,p[s]=$/1e3,p)[h]||$,f?_:w.a(_)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=b(t,e,!0);return s&&(n.$L=s),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),S=E.prototype;return M.prototype=S,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,E,M),t.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=y[_],M.Ls=y,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,s=6e4,i=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:o,months:l,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof _},f=function(t,e,n){return new _(t,n,e.$l)},p=function(t){return e.p(t)+"s"},h=function(t){return t<0},m=function(t){return h(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},$=function(t,e){return t?h(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},_=function(){function h(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*u[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(c);if(i){var r=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=h.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*u[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/o),t%=o,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/i),t%=i,this.$d.minutes=m(t/s),t%=s,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=$(this.$d.years,"Y"),e=$(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=$(n,"D"),i=$(this.$d.hours,"H"),r=$(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var o=$(a,"S"),l=t.negative||e.negative||s.negative||i.negative||r.negative||o.negative,c=i.format||r.format||o.format?"T":"",u=(l?"-":"")+"P"+t.format+e.format+s.format+c+i.format+r.format+o.format;return"P"===u||"-P"===u?"P0D":u},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(t,e){return e||String(s[t])}))},v.as=function(t){return this.$ms/u[p(t)]},v.get=function(t){var e=this.$ms,n=p(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/u[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var s;return s=e?t*u[p(e)]:d(t)?t.$ms:f(t,this).$ms,f(this.$ms+s*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return f(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},h}();return function(n,s,i){t=i,e=i().$utils(),i.duration=function(t,e){var n=i.locale();return f(t,{$l:n},e)},i.isDuration=d;var r=s.prototype.add,a=s.prototype.subtract;s.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},s.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,s=0;s<e.length;s++)if(e[s].identifier===t){n=s;break}return n}function s(t,s){for(var r={},a=[],o=0;o<t.length;o++){var l=t[o],c=s.base?l[0]+s.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var f=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var h=i(p,s);s.byIndex=o,e.splice(o,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=s(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var o=n(r[a]);e[o].references--}for(var l=s(t,i),c=0;c<r.length;c++){var u=n(r[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var s=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={id:s,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),s=n(795),i=n.n(s),r=n(569),a=n.n(r),o=n(565),l=n.n(o),c=n(216),u=n.n(c),d=n(589),f=n.n(d),p=n(10),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const m="shake";class v{#t=null;constructor(){if(new.target===v)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),t?.()}),600)}}function $(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";if(!(t instanceof v))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function _(t,e){if(!(t instanceof v&&e instanceof v))throw new Error("Can replace only components");const n=t.element,s=e.element,i=s.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,s)}class y extends v{get template(){return'\n     <ul class="trip-events__list"></ul>\n  '}}var g=n(484),b=n.n(g),M=n(646),w=n.n(M);b().extend(w());const E={monthDay:"MMM DD",hoursMins:"HH:MM"};function S(t){return t?b()(t).format(E.hoursMins):""}class D extends v{#e=null;#n=null;constructor(t){let{detailEventModel:e,onEditClick:n}=t;super(),this.#e=e,this.#n=n,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#s)}get template(){return function(t){const{type:e,destination:n,dateFrom:s,dateTo:i,isFavorite:r,basePrice:a}=t,o=`${e} ${n.name}`,l=(c=s)?b()(c).format(E.monthDay):"";var c;const u=S(s),d=S(i),f=function(t,e){const n=b()(t),s=b()(e),i=b().duration(s.diff(n)),{days:r,hours:a,minutes:o}=i.$d;switch(!0){case r>0:return i.format("DD[D] HH[H] mm[M]");case a>0:return i.format("HH[H] mm[M]");case 60!==o:return i.format("mm[M]")}}(s,i),p=(t=>t.map((t=>`<li class="event__offer">\n  <span class="event__offer-title">${t.title}</span>\n  &plus;&euro;&nbsp;\n  <span class="event__offer-price">${t.price}</span>\n</li>`)).join(""))(t.getSelectedOffers()),h=r?"event__favorite-btn--active":"";return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${l}">${l}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${t.type}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${o}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${s}">${u}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${i}">${d}</time>\n          </p>\n          <p class="event__duration">${f}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${a}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${p}\n        </ul>\n        <button class="event__favorite-btn ${h}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n  `}(this.#e)}#s=t=>{t.preventDefault(),this.#n()}}const k=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],A=["Amsterdam","Geneva","Chamonix"];class O{constructor(t){let{pointId:e,basePrice:n,dateFrom:s,dateTo:i,isFavorite:r,type:a,destination:o,allOffers:l,selectedOffersId:c}=t;this.pointId=e,this.basePrice=n,this.dateFrom=s,this.dateTo=i,this.isFavorite=r,this.type=a,this.destination=o,this.allOffers=l,this.selectedOffersId=c}getPointId(){return this.pointId}getBasePrice(){return this.basePrice}getDateFrom(){return this.dateFrom}getDateTo(){return this.dateTo}isFavorite(){return this.isFavorite}getType(){return this.type}getDestination(){return this.destination}getAllOffers(){return this.allOffers}getSelectedOffersId(){return this.selectedOffersId}getSelectedOffers(){const t=[];return this.allOffers.forEach((e=>{this.selectedOffersId.includes(e.id)&&t.push(e)})),t}}const x=new O({pointId:null,basePrice:null,dateFrom:null,dateTo:null,isFavorite:!1,type:null,destination:null,allOffers:null,selectedOffersId:null});class T extends v{#e=null;#i=null;constructor(t){let{detailEventModel:e=x,onFormSubmit:n}=t;super(),this.#e=e,this.#i=n,this.element.querySelector("form").addEventListener("submit",this.#r)}get template(){return function(t){const{pointId:e,type:n,destination:s,dateFrom:i,dateTo:r,allOffers:a,selectedOffersId:o,basePrice:l}=t,c=((t,e,n,s,i,r)=>{const a=k.map((t=>`\n  <div class="event__type-item">\n      <input id="event-type-undefined-${t}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}">\n      <label class="event__type-label  event__type-label--${t}" for="event-type-undefined-${t}">${t}</label>\n  </div>`)).join(""),o=(t=>t.map((t=>`\n  <option value="${t}"></option>`)).join(""))(A);return`\n    <header class="event__header">\n      <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-${t}-${e}">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/${e}.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${t}-${e}" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n              ${a}\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-${t}-${r.id}">\n          ${e}\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-${t}-${r.id}" type="text" name="event-destination" value="${r.name}" list="destination-list-1">\n        <datalist id="destination-list-${t}-${r.id}">\n          ${o}\n        </datalist>\n      </div>\n\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-${t}-${e}">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-${t}-${e}" type="text" name="event-start-time" value="18/03/19 12:25">\n        &mdash;\n        <label class="visually-hidden" for="event-end-time-${t}-${e}">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-${t}-${e}" type="text" name="event-end-time" value="18/03/19 13:35">\n      </div>\n\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-${t}-${e}">\n          <span class="visually-hidden">Price</span>\n          &euro;\n        </label>\n        <input class="event__input  event__input--price" id="event-price-${t}-${e}" type="text" name="event-price" value="${i}">\n      </div>\n\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Delete</button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </header>`})(e,n,0,0,l,s),u=((t,e,n,s)=>{const i=((t,e,n,s)=>t.map((t=>{const i=e.includes(t.id)?"checked":"";return`<div class="event__offer-selector">\n    <input class="event__offer-checkbox visually-hidden" id="event-offer-${s}-${n}-${t.id}" type="checkbox" name="event-offer-${n}" ${i}>\n    <label class="event__offer-label" for="event-offer-${s}-${n}-${t.id}">\n      <span class="event__offer-title">${t.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${t.price}</span>\n    </label>\n  </div>`})).join(""))(t,e,n,s);return`\n  <section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n    <div class="event__available-offers">\n      ${i}\n    </div>\n  </section>`})(a,o,n,e),d=(t=>{const e=t.pictures.map((t=>`\n  <img class="event__photo" src="${t.src}" alt="${t.description}">`)).join("");return`\n    <section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description"> ${t.description}</p>\n\n      <div class="event__photos-container">\n        <div class="event__photos-tape">\n          ${e}\n        </div>\n      </div>\n    </section>`})(s);return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        ${c}\n        <section class="event__details">\n          ${u}\n          ${d}\n        </section>\n      </form>\n    </li>\n  `}(this.#e)}#r=t=>{t.preventDefault(),this.#i()}}class F extends v{get template(){return'\n    <p class="trip-events__msg">Click New Event to create your first point</p>\n  '}}function C(t,e){return Math.floor(Math.random()*(e-t+1))+t}const I=[{id:"01",basePrice:C(200,500),dateFrom:"2025-08-04T22:28:01.397Z",dateTo:"2025-08-05T11:28:01.397Z",destination:"1",isFavorite:!0,offers:["2","3"],type:"taxi"},{id:"02",basePrice:C(200,500),dateFrom:"2024-08-05T23:28:01.397Z",dateTo:"2024-08-07T12:28:01.397Z",destination:"2",isFavorite:!1,offers:["1","2"],type:"flight"},{id:"03",basePrice:C(200,500),dateFrom:"2024-08-09T12:28:01.397Z",dateTo:"2024-08-10T03:28:01.397Z",destination:"2",isFavorite:!1,offers:["1","2"],type:"sightseeing"},{id:"04",basePrice:C(200,500),dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-08-11T23:28:01.397Z",destination:"2",isFavorite:!0,offers:["1","2"],type:"bus"}],H=[{id:"1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",name:"Chamonix",pictures:[{src:`https://loremflickr.com/248/152?random=${C(0,500)}`,description:"Cras aliquet varius magna, non porta ligula feugiat eget."},{src:`https://loremflickr.com/248/152?random=${C(0,500)}`,description:"Fusce tristique felis at fermentum pharetra"},{src:`https://loremflickr.com/248/152?random=${C(0,500)}`,description:"Aliquam id orci ut lectus varius viverra."}]},{id:"2",description:"Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Form",name:"Rome",pictures:[{src:`https://loremflickr.com/248/152?random=${C(0,500)}`,description:"Sed blandit, eros vel aliquam faucibus"},{src:`https://loremflickr.com/248/152?random=${C(0,500)}`,description:"euismod diam, eu luctus nunc ante ut dui."},{src:`https://loremflickr.com/248/152?random=${C(0,500)}`,description:"ex euismod diam, eu luctus nunc ."},{src:`https://loremflickr.com/248/152?random=${C(0,500)}`,description:"Sed blandit,"},{src:`https://loremflickr.com/248/152?random=${C(0,500)}`,description:"Sed."},{src:`https://loremflickr.com/248/152?random=${C(0,500)}`,description:"faucibus, purus ex euismod diam."}]},{id:"3",description:"Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.",name:"Amsterdam",pictures:[]},{id:"4",description:"Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.",name:"Geneva",pictures:[{src:`https://loremflickr.com/248/152?random=${C(0,500)}`,description:"In rutrum ac purus sit amet tempus."},{src:`https://loremflickr.com/248/152?random=${C(0,500)}`,description:"Nunc fermentum tortor ac porta dapibus."}]}],L=[{type:"taxi",offers:[{id:"1",title:"Upgrade to a business class",price:C(200,600)},{id:"2",title:"Drive quickly, I'm in a hurry",price:C(200,600)},{id:"3",title:"Drive slowly",price:C(200,600)}]},{type:"flight",offers:[{id:"1",title:"Switch to comfort",price:C(100,1e3)},{id:"2",title:"Add luggage",price:C(100,1e3)},{id:"3",title:"Spesial menu: vagan/vagetarian etc.",price:C(100,1e3)}]},{type:"sightseeing",offers:[{id:"1",title:"Book tickets",price:C(100,250)},{id:"2",title:"Lunch in city ",price:C(400,1650)}]},{type:"bus",offers:[{id:"1",title:"Add luggage",price:C(100,1e3)},{id:"2",title:"Choose seats",price:C(100,200)},{id:"3",title:"Book tickets",price:C(100,250)}]},{type:"ship",offers:[]},{type:"train",offers:[]},{type:"drive",offers:[]},{type:"check-in",offers:[]},{type:"restaurant",offers:[]}],Y={everything:t=>t.sort(((t,e)=>{return n=t.dateFrom,s=e.dateFrom,b()(n)-b()(s);var n,s})),future:t=>t.filter((t=>{return e=t.dateFrom,b()().isBefore(b()(e),"D");var e})),past:t=>t.filter((t=>{return e=t.dateFrom,b()().isAfter(b()(e),"D");var e})),present:t=>t.filter((t=>{return e=t.dateFrom,b()().isSame(b()(e),"D");var e}))},P=document.querySelector(".trip-controls__filters"),j=document.querySelector(".trip-events"),B=new class{#a=null;#o=null;#l=null;constructor(){this.#a=I,this.#o=H,this.#l=L}get points(){return this.#a}get destinations(){return this.#o}get offers(){return this.#l}},Z=new class{#c=new y;#u=null;#d=null;#f=null;#o=null;#p=null;constructor(t){let{tripEvents:e,eventsModel:n}=t;this.#u=e,this.#d=n}init(){this.#f=[...this.#d.points],this.#o=[...this.#d.destinations],this.#p=this.#d.offers,this.#h()}#h(){$(this.#c,this.#u),this.#f.length||this.#m();for(let t=0;t<this.#f.length;t++)this.#v(this.#f[t])}#v(t){const e=t=>{"Escape"===t.key&&(t.preventDefault(),i(),document.removeEventListener("keydown",e))},n=new D({detailEventModel:this.#$(t),onEditClick:()=>{_(s,n),document.addEventListener("keydown",e)}}),s=new T({detailEventModel:this.#$(t),onFormSubmit:()=>{i(),document.removeEventListener("keydown",e)}});function i(){_(n,s)}$(n,this.#c.element)}#m(){$(new F,this.#u)}#$(t){const e=this.#p.find((e=>e.type===t.type)).offers;return new O({pointId:t.id,basePrice:t.basePrice,dateFrom:t.dateFrom,dateTo:t.dateTo,isFavorite:t.isFavorite,type:t.type,destination:this.#o.find((e=>e.id===t.destination)),allOffers:e,selectedOffersId:t.offers})}}({tripEvents:j,eventsModel:B}),q=function(t){return Object.entries(Y).map((e=>{let[n,s]=e;return{type:n,count:s(t).length}}))}(B.points);$(new class extends v{#_=null;constructor(t){let{filters:e}=t;super(),this.#_=e}get template(){return function(t){const e=t.map(((t,e)=>function(t,e){const{type:n,count:s}=t;return`<div class="trip-filters__filter">\n        <input\n          id="filter-${n}"\n          class="trip-filters__filter-input\n          visually-hidden"\n          type="radio"\n          name="trip-filter"\n          value="${n}"\n          ${e?"checked":""}\n          ${0===s?"disabled":""}\n        />\n        <label\n          class="trip-filters__filter-label"\n          for="filter-${n}">\n          ${n}\n        </label>\n     </div>`}(t,0===e))).join("");return`\n        <form class="trip-filters" action="#" method="get">\n          ${e}\n          <button class="visually-hidden" type="submit">Accept filter</button>\n        </form>\n  `}(this.#_)}}({filters:q}),P),$(new class extends v{get template(){return'\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>\n  '}},j),Z.init()})()})();
//# sourceMappingURL=bundle.aae852c5882ef68f072d.js.map