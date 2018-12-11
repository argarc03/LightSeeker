(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());

},{}],2:[function(require,module,exports){
module.exports={
    "Brute": {
        "stats": {"health": 2, "damage":3, "defense":2, "speed":1, "perception":1},
        "attack": {"name": "Golpetazo","description":"Realiza un fuerte golpe con su arma.", "icon": "attackIcon"},
        "block": {"name": "Coraza","description":"Se protege con su hombrera.", "icon": "blockIcon"},
        "ultimate": {"name": "Furia ancestral","description":"Aumenta su velocidad desatando su ira.", "icon": "ultimateIcon"},
        "avaliable": true,
        "spriteSheet":"seekerBruteAnimations",
        "actions":{
            "idle":[[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
            "attack":[[24, 25, 26, 27, 28, 29, 30, 31], [32, 33, 34, 35, 36, 37, 38, 39, 40], 2000, 5000],
            "block":[[48, 49, 50, 51, 52], [53, 54], [57, 58, 59], 3000, 5000],
            "die":[[72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]],
            "useObjects":[]
          },
          "items":[]
    },
    "Harpy": {
        "stats": {"health": 0, "damage":0, "defense":0, "speed":0, "perception":0},
        "attack": {"name": "?????","description":"?????", "icon": "attackIcon"},
        "block": {"name": "?????","description":"?????", "icon": "blockIcon"},
        "ultimate": {"name": "?????","description":"?????", "icon": "ultimateIcon"},
        "avaliable": false
    },
    "Warlock": {
        "stats": {"health": 0, "damage":0, "defense":0, "speed":0, "perception":0},
        "attack": {"name": "?????","description":"?????", "icon": "attackIcon"},
        "block": {"name": "?????","description":"?????", "icon": "blockIcon"},
        "ultimate": {"name": "?????","description":"?????", "icon": "ultimateIcon"},
        "avaliable": false
    }
}
},{}],3:[function(require,module,exports){
var DayFunctions = require('../../js/manager/dayFunctions');
var textFunctions = require('../../js/interface/textFunctions');

var Day0 = {
    DayGenerator: function (seeker, dayManager) {
        return 'Ritual';
    },
    Ritual: function (seeker, dayManager) {

        return {
            text: ['"El Ritual"\n\n Has sido elegido por el Gran Cristal. De ti depende todos los habitantes de Spiliag. Tu misión: recolectar y traer contigo todas las Gemas de Luz que puedas. ¡Confiamos en ti ', textFunctions.Fun(function(){return this.name},seeker), '!'],
                image: 'eventImageError',
                    options: [{ text: 'Empezar Búsqueda', callback: DayFunctions.NextDay, arguments: [] }],
                        music: 'intro'
        }
    }
}

module.exports = Day0;
},{"../../js/interface/textFunctions":49,"../../js/manager/dayFunctions":52}],4:[function(require,module,exports){
var DayFunctions = require('../../js/manager/dayFunctions');

var Day0 = {
    DayGenerator: function (seeker, dayManager) {
        return 'Luces';
    },
    Luces: function (seeker, dayManager) {
        return {
            text: 'Esto es un texto de prueba2',
            image: 'eventImageError',
            options: [{ text: 'Seguir', callback: DayFunctions.NextDay, arguments: [] }],
            music: 'intro'
        }
    }
}

module.exports = Day0;
},{"../../js/manager/dayFunctions":52}],5:[function(require,module,exports){
'use strict'

var Days={
    day0: require('./day0'),
    day1: require('./day1')
}

module.exports = Days;
},{"./day0":3,"./day1":4}],6:[function(require,module,exports){
module.exports={
    "font": "Minecraft",
    "fill": "#fff",
    "fontSize": 10,
    "align":"center"
}
},{}],7:[function(require,module,exports){
'use strict'

var Item = require('../../js/characters/item');

var Items = {
    healthPotion: new Item('Heal Potion', 'Restores 3hp.', 'itemIcon', function (character, enemy) {
        this.heal(3);
      }),
      strengthPotion: new Item('Strenght Potion', 'Increase damage slightly.', 'itemIcon2', function () {
        this.stats.tempDamage+=3;
      }),
      speedPotion: new Item('Speed Potion', 'Increase speed slightly.', 'itemIcon2', function () {
        this.stats.tempSpeed+=3;
      }),
      speedEnemyPotion: new Item('Speed Potion', 'Increase speed slightly.', 'itemIcon2', function (character, enemy) {
        enemy.stats.tempSpeed+=0;
      }),
}

module.exports = Items;


},{"../../js/characters/item":16}],8:[function(require,module,exports){
'use strict'

var bossPattern = function(character, seeker) { 
    if(seeker.hp > 15)
        return 'attack';
    else
        return 'block';
};

var patterns = {
    normal: [ {action: "idle", repetitions: 5}, {action: "attack"}, {action: "idle", repetitions: 4},  {action: "block"}],
    anormal: [{action: "idle"}],
    boss: [{action: bossPattern}]
}



module.exports = patterns;
},{}],9:[function(require,module,exports){
'use strict'
/**
 * 
 */
var Action = {
    /**
     * 
     */
    idle() {
        this.onRest.dispatch();
        this.play('idle', this.stats.frameRate, true);
    },
    /**
     * 
     * @param {Character} target 
     */
    attack(target) {
        this._preAttacking(target);
    },
    /**
     * 
     * @param {Character} target 
     */
    preAttacking(target) {
        this.animations.play('preAttacking', this.stats.frameRate, false);
        this.animations._anims.preAttacking.onComplete.add(this._attacking, this, 0, target);
    },
    /**
     * 
     * @param {Character} target 
     */
    attacking(target) {
        this.animations.play('attacking', this.stats.frameRate, false);
        if (arguments[2] !== null) {
            arguments[2].hurt(this.stats.realDamage);
        };
        this.animations._anims.attacking.onComplete.add(this.idle, this);

    },
    /**
     * 
     */
    block() {
        this._preBlocking();
    },
    /**
     * 
     */
    preBlocking() {
        this.animations.play('preBlocking', this.stats.frameRate, false);
        this.animations._anims.preBlocking.onComplete.add(this._blocking, this);
    },
    /**
     * 
     */
    blocking() {
        this.isBlocking = true;
        this.animations.play('blocking', this.stats.frameRate, true);
        this.animations._anims.blocking.onLoop.add(this._loop, this);
    },
    /**
     * 
     */
    loop() {
        if (this.animations._anims.blocking.loopCount >= (this.stats.blockingTime / this.animations._anims.blocking._frames.length * this.stats.frameRate / Phaser.Timer.SECOND)){
            this._postBlocking();
        }
    },
    /**
     * 
     */
    postBlocking() {
        this.isBlocking = false;
        this.animations.play('postBlocking', this.stats.frameRate, false);
        this.animations._anims.postBlocking.onComplete.add(this.idle, this);
    },
    /**
     * 
     */
    die() {
        this.onDeath.dispatch();
        this.animations.play('dying', this.frameRate, false);
    },

    /**
     * 
     */
    use(object, target) {
        let item;
        if(typeof object === 'string') {
            item = this.items.findIndex(function(element){
                return element.name === object;
            });
            object = item;
        }

        if( object >= 0 && object < 2) {
            item = this.items[object];
            item.use.call(this, this, target);
            this.items.splice(object,1);
        }
    }
}

module.exports = Action;
},{}],10:[function(require,module,exports){
'use strict'

var Action = require('./action.js');
var TimeCalculations = require('./timeCalculations.js');

/**
 * 
 * @param {Character} character 
 */
var ActionFactory = function (character) {
    this.character = character;
}

/**
 * 
 * @param {number[]|string[]} frames 
 */
ActionFactory.prototype.idle = function(frames) {
    this.character.animations.add('idle', frames, true);
    this.character.idle = Action.idle;
    this.character.idle.totalTime = TimeCalculations.totalIdleTime.bind(this.character);
    this.character.idle.currentTime = TimeCalculations.currentIdleTime.bind(this.character);
}

/**
 * 
 * @param {number[]|string[]} framesPreAttacking 
 * @param {number[]|string[]} framesAttacking 
 */
ActionFactory.prototype.attack = function(framesPreAttacking, framesAttacking) {
    this.character.attack = Action.attack;
    this.character.animations.add('preAttacking', framesPreAttacking, true);
    this.character.animations.add('attacking', framesAttacking, true);
    this.character._preAttacking = Action.preAttacking;
    this.character._attacking = Action.attacking;
    this.character.attack.totalTime = TimeCalculations.totalAttackTime.bind(this.character);
    this.character.attack.currentTime = TimeCalculations.currentAttackTime.bind(this.character);
}

/**
 * 
 * @param {number[]|string[]} framesPreBlocking 
 * @param {number[]|string[]} framesBlocking 
 * @param {number[]|string[]} framesPostBlocking 
 */
ActionFactory.prototype.block = function(framesPreBlocking, framesBlocking, framesPostBlocking) {
    this.character.animations.add('preBlocking', framesPreBlocking, true);
    this.character.animations.add('blocking', framesBlocking, true);
    this.character.animations.add('postBlocking', framesPostBlocking, true);
    this.character.block = Action.block;
    this.character._preBlocking = Action.preBlocking;
    this.character._blocking = Action.blocking;
    this.character._loop = Action.loop;
    this.character._postBlocking = Action.postBlocking;
    this.character.block.totalTime = TimeCalculations.totalBlockTime.bind(this.character);
    this.character.block.currentTime = TimeCalculations.currentBlockTime.bind(this.character);
}

ActionFactory.prototype.useObjects = function() {
    this.character.use = Action.use;
}

/**
 * 
 * @param {number[]|string[]} framesDying 
 */
ActionFactory.prototype.die = function(framesDying) {
    this.character.animations.add('dying', framesDying, true);
    this.character.die = Action.die;
    this.character.onDeathComplete = new Phaser.Signal();
    this.character.animations._anims.dying.onComplete.add(this.character.onDeathComplete.dispatch, this.character.onDeathComplete);
}

module.exports = ActionFactory;
},{"./action.js":9,"./timeCalculations.js":20}],11:[function(require,module,exports){
'use strict'

var ActionPattern = function (pattern, seeker, character) {
    this._currentAction = 'unknown';
    this._pattern = pattern;
    this._seeker = seeker;
    this._character = character;
    this._currentIndex = 0;
    this._totalActions = 0;
    this._pattern.forEach(element => {
        if (typeof element.repetitions === 'undefined') {
            element.repetitions = 1;
        }
        this._totalActions += element.repetitions;
    }, this);
    this._character.patternTimer = this._character.game.time.create(false); 
}

ActionPattern.prototype.actionNumber = function (number) {
    number = (this._currentIndex + number) % this._totalActions;
    let i = number;
    let j = 0;
    while (i >= this._pattern[j].repetitions) {
        i -= this._pattern[j].repetitions;
        j++;
    }
    if (typeof this._pattern[j].action === 'string') {
        return this._pattern[j].action;
    } else if (typeof this._pattern[j].action === 'function') {
        return this._pattern[j].action(this._character, this._seeker);
    }
}

Object.defineProperty(ActionPattern.prototype, 'currentAction', {
    get: function () {
        return this._currentAction = this.actionNumber(0);
    }
});

Object.defineProperty(ActionPattern.prototype, 'nextAction', {
    get: function () {
        this._currentIndex = (this._currentIndex + 1) % this._totalActions;
        return this.currentAction;
    }
});

module.exports = ActionPattern;
},{}],12:[function(require,module,exports){
'use strict'

var CoolDown = require('./coolDown');
var Action = require('./action');
var TimeCalculations = require('./timeCalculations');
var ActionFactory = require('./actionFactory');

//Hay que encender todos los timers al igual que apagarlos.
var SeekerActionFactory = function (character) {
    ActionFactory.call(this, character);
    this.character.coolDown = {};
    this.character.coolDownTimer = this.character.game.time.create(false); 
}

SeekerActionFactory.prototype = Object.create(ActionFactory.prototype);
SeekerActionFactory.prototype.constructor = SeekerActionFactory;

SeekerActionFactory.prototype.idle = function (frames) {
    ActionFactory.prototype.idle.call(this, frames);
}

SeekerActionFactory.prototype.attack = function (framesPreAttacking, framesAttacking, globalCoolDown, selfCoolDown) {
    ActionFactory.prototype.attack.call(this, framesPreAttacking, framesAttacking);

    this.character.coolDown.attack = this.character.game.time.create(false);
    this.character.coolDown.attack.onStart = new Phaser.Signal();
    this.character.coolDown.attack.onWhile = new Phaser.Signal();
    this.character.coolDown.attack.onEnd = new Phaser.Signal();
    this.character.coolDown.attack.global = globalCoolDown;

    this.character.attack = function (target) {
        if (!this.coolDown.attack.running) {
            Action.attack.apply(this, [target]);
            CoolDown.addAllTime.call(this, 'attack');

            CoolDown.signalEmiter.call(this, 'attack');
        }
    }
    this.character.attack.currentTime = TimeCalculations.currentAttackTime.bind(this.character);
    this.character.attack.totalTime = TimeCalculations.totalAttackTime.bind(this.character);
    this.character.attack.timeToCoolDown = function () {
        let a = this.coolDown.attack.nextTick - this.coolDown.attack._now;
        return a<0?NaN:a;
    }.bind(this.character);
    this.character.attack.coolDownTime = selfCoolDown;
}

SeekerActionFactory.prototype.block = function (framesPreBlocking, framesBlocking, framesPostBlocking, globalCoolDown, selfCoolDown) {
    ActionFactory.prototype.block.call(this, framesPreBlocking, framesBlocking, framesPostBlocking);

    this.character.coolDown.block = this.character.game.time.create(false);
    this.character.coolDown.block.onStart = new Phaser.Signal();
    this.character.coolDown.block.onWhile = new Phaser.Signal();
    this.character.coolDown.block.onEnd = new Phaser.Signal();
    this.character.coolDown.block.global = globalCoolDown;

    this.character.block = function () {
        if (!this.coolDown.block.running) {
            Action.block.apply(this);
            CoolDown.addAllTime.call(this, 'block');
            CoolDown.signalEmiter.call(this, 'block');
        }

    }

    this.character.block.currentTime = TimeCalculations.currentBlockTime.bind(this.character);
    this.character.block.totalTime = TimeCalculations.totalBlockTime.bind(this.character);

    this.character.block.timeToCoolDown = function () {
        let a = this.coolDown.block.nextTick - this.coolDown.block._now;
        return a<0?NaN:a;
    }.bind(this.character);
    this.character.block.coolDownTime = selfCoolDown;
}


SeekerActionFactory.prototype.die = function (framesDying) {
    ActionFactory.prototype.die.call(this, framesDying);
}

module.exports = SeekerActionFactory;
},{"./action":9,"./actionFactory":10,"./coolDown":14,"./timeCalculations":20}],13:[function(require,module,exports){
/**
* @author       Carlos Durán Domínguez <carduran@ucm.es>
* @copyright    2018 Turing's Songs Studios© 
* @license      {}
*/

'use strict';

var ActionFactory = require('./actionFactory');
var ParticleFactory = require('./particleFactory.js');
var Stats = require('./stats');
/**
 * A Character is an instance...jeje
*/

/**
 * 
 * @param {Phaser.Game} game - 
 * @param {number} x - 
 * @param {number} y -
 * @param {string} name -
 * @param {Stats} stats -
 * @param {string} spriteSheet -
 * @param {string, arguments} actions -
*/
var Character = function (game, x, y, name, stats, spriteSheet, actions) {
    Phaser.Sprite.call(this, game, x, y, spriteSheet)
    this._name = name;
    this.onNameChange = new Phaser.Signal();
    this.stats = new Stats(stats.damage,stats.defense,stats.speed,stats.health,stats.perception,stats.tempDamage,stats.tempDefense,stats.tempSpeed,stats.tempHealth,stats.tempPerception);
    this.stats.onSpeedChange.add(function(){
        this.animations.currentAnim.delay = 1000 /this.stats.frameRate;
    }, this)
    
    this.hp = stats.currentHp===undefined?this.stats.maxHp:stats.currentHp;
    this.game = game;
    this.isBlocking = false;
    //Signals 
    this.onHpChange = new Phaser.Signal();
    this.onRest = new Phaser.Signal();
    this.onDeath = new Phaser.Signal();
    //ref to Factories
    this.addAction = new ActionFactory(this);
    this.addParticle = new ParticleFactory(this);

    for(var action in actions){
        this.addAction[action](...actions[action]);
    }
}

Character.prototype = Object.create(Phaser.Sprite.prototype);
Character.prototype.constructor = Character;

/**
 * 
 * @param {number} damage -
 */
Character.prototype.hurt = function (damage) {
    damage = this.isBlocking ? this.stats.damagedNotBlocked(damage) : damage;
    this.game.camera.shake(damage / 200, damage * 20);
    this.hp = Math.max(0, this.hp - damage);
    this.onHpChange.dispatch(-damage);
    if (damage > 0) {
        this._damaged(damage);
    }
    if (this.hp === 0) {
        this.die();
    }
}

Character.prototype.heal = function(heal) {
    this.hp = Math.min(this.stats.maxHp,this.hp+heal);
    this.onHpChange.dispatch(heal);
}

/**
 * 
 * @param {number} damage -
 */
Character.prototype._damaged = function(damage) {

}

Character.prototype.die = function() {
    this.animations.stop();
    this.onDeath.dispatch();
}

Character.prototype.idle = function() {
    this.animations.stop();
    this.onRest.dispatch();
}

Object.defineProperty(Character.prototype, 'frameRate',{
    get: function() {
        return this.stats.frameRate;
    }
});

Object.defineProperty(Character.prototype, 'name',{
    get: function() {
        return this._name;
    },
    set: function(value) {
        this.onNameChange.dispatch();
        this._name = value;
    }
});

module.exports = Character;
},{"./actionFactory":10,"./particleFactory.js":17,"./stats":19}],14:[function(require,module,exports){
'use strict'

var TimerAlterations = require('./timerAlterations');
/**
 * 
 */
var CoolDown = {
    /**
     * 
     * @param {number} time 
     */
    addAllTime(event) {
        this.coolDown[event].nextTick = this[event].coolDownTime + this.coolDown[event]._now;
        this.coolDown[event].start();
        this.coolDown[event].onStart.dispatch();
        for (let timer in this.coolDown) {
            if(timer!==event){
                if (this.coolDown[timer].running) {
                    this.coolDown[timer].nextTick += this.coolDown[event].global;
                } else {
                    this.coolDown[timer].start();
                    this.coolDown[timer].onStart.dispatch();
                    this.coolDown[timer].nextTick = this.coolDown[event].global + this.coolDown[event]._now;
                    CoolDown.signalEmiter.call(this, timer);
                }
            }
            
        }
    },
    signalEmiter(event) {
        if (this.coolDown[event].nextTick > this.coolDown[event]._now) {
            this.coolDown[event].onWhile.dispatch();
            this.coolDownTimer.add(this.frameRate, CoolDown.signalEmiter, this, event);
            this.coolDownTimer.start();
        } else {
            this.coolDown[event].stop();
            this.coolDown[event].onWhile.dispatch();
            this.coolDown[event].onEnd.dispatch();
        }
    },
    /**
     * 
     */
    stopAll() {

    },

    toRealCoolDown(animationTime, coolDown) {
        return Math.max(animationTime, coolDown);
    }
}

module.exports = CoolDown;
},{"./timerAlterations":21}],15:[function(require,module,exports){
'use strict'

var Character = require('./character');
var ActionPattern = require('./actionPattern');

var Enemy = function(game, x, y, name, stats, spriteSheet, actions, seeker, pattern){
    Character.call(this, game, x, y, name, stats, spriteSheet, actions);
    this.actionPattern = new ActionPattern(pattern, seeker, this);
    this.seeker = seeker;
    this._lastActionEvent;
    this.seeker.onDeath.add(function(){
        this.act = function () { 
            this.idle();
        };
        this.game.time.events.remove(this._lastActionEvent);
    },this);
    this.onDeath.add(function() {
        this.act = function () {};
        this.game.time.events.remove(this._lastActionEvent);
    }, this)
}

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.act = function() {
    this[this.actionPattern.nextAction](this.seeker);

    this._lastActionEvent = this.patternTimer.add(this[this.actionPattern.currentAction].totalTime()*1000, this.act, this);
    this.patternTimer.start();
    
}

Enemy.prototype.stop = function(){
    this.patternTimer.pause();
    this.animations.paused = true;
}

Enemy.prototype.start = function(){
    this.patternTimer.resume();
    this.animations.paused = false;
}

module.exports = Enemy;
},{"./actionPattern":11,"./character":13}],16:[function(require,module,exports){
'use strict'

var _use = function(use, that) {
    var that;
    var cuse = use;
    return function(character, enemy) {
        use.call(this, character, enemy);
        that.onUse.dispatch();
    }
}

var Item = function(name, description, key, use) {
    this.name = name;
    this.description = description;
    this.key = key;
    this.onUse = new Phaser.Signal();
    this.use = _use(use, this);
    
}

Item.prototype.destroy = function() {

}

module.exports = Item;
},{}],17:[function(require,module,exports){
'use strict'

var ParticleFactory  = function (character) {
    this.character = character;
}

ParticleFactory.prototype.blood = function (x = this.character.width / 2, y = this.character.width / 2, radius = 5, emittedBlood = 'redBlood') {

    this.character.bleed = this.character.game.add.emitter(this.character.x + x, this.character.y + y, 1000);
    this.character.bleed.makeParticles(emittedBlood);
    this.character.bleed.radius = radius;
    this.character.bleed.x = this.character.bleed.emitX;
    this.character.bleed.y = this.character.bleed.emitY;
    this.character.bleed.gravity = 200;
    this.character.bleed.minParticleScale = 1;
    this.character.bleed.maxParticleScale = 2;
    this.character.bleed.bounce = 0;
    this.character._damaged = function (damage) {

        let angle = this.game.rnd.angle();
        let radius = this.game.rnd.frac() * this.bleed.radius;
        this.bleed.emitX = radius * Math.sin(Math.PI / 180 * angle) + this.bleed.x;
        this.bleed.emitY = radius * Math.cos(Math.PI / 180 * angle) + this.bleed.y;
        this.bleed.flow(2000, 1, 20, damage * 10, true);

    };

}

module.exports = ParticleFactory;
},{}],18:[function(require,module,exports){
'use strict';

var Character = require('./character.js');
var SeekerActionFactory = require('./actionSeekerFactory.js');
var Item = require('./item');
var Items = require('../../assets/items/items');
/**
 * 
 */
/**
 * 
 * @param {Phaser.Game} game - 
 * @param {number} x - 
 * @param {number} y -
 * @param {string} name -
 * @param {Stats} stats -
 * @param {string} spriteSheet -
*/
var Seeker = function (game, x, y, name, stats, items, spriteSheet, actions) {
    Character.call(this, game, x, y, name, stats, spriteSheet);
    this.addAction = new SeekerActionFactory(this);
    
    for(var action in actions){
        this.addAction[action](...actions[action]);
    }
    this.day = 0;
    this.gems = 42;
    this.population = 103;
    this.totalGems = 569;
    this.items = new Array(6);
    for(let i = 0; i < 6; i++){
        this.items[i] = Items[items[i]];
    }
    this._timePaused = 0;
}

Seeker.prototype = Object.create(Character.prototype);
Seeker.prototype.constructor = Seeker;

Seeker.prototype.stop = function(){
    for(let action in this.coolDown){
        this.coolDown[action].pause();
    }
    this.coolDownTimer.pause();
    this.animations.paused = true;
    this._timePaused = Date.now();
}

Seeker.prototype.start = function(){
    this._timePaused = Date.now() - this._timePaused;

    for(let action in this.coolDown){
        this.coolDown[action].nexTick+=this._timePaused;
        this.coolDown[action].resume();
    }
    this.coolDownTimer.resume();
    this.animations.paused = false;
}

module.exports = Seeker;
},{"../../assets/items/items":7,"./actionSeekerFactory.js":12,"./character.js":13,"./item":16}],19:[function(require,module,exports){
'use strict'

var Stats = function (damage, defense, speed, health, perception, tempDamage = undefined, tempDefense = undefined, tempSpeed = undefined, tempHealth = undefined, tempPerception = undefined) {
    this._damage = damage;
    this._tempDamage = tempDamage===undefined?damage:tempDamage;
    this.onDamageChange = new Phaser.Signal();
    this._defense = defense;
    this._tempDefense = tempDefense===undefined?defense:tempDefense;
    this.onDefenseChange = new Phaser.Signal();
    this._speed = speed;
    this._tempSpeed = tempSpeed===undefined?speed:tempSpeed;
    this.onSpeedChange = new Phaser.Signal();
    this._health = health;
    this._tempHealth = tempHealth===undefined?health:tempHealth;
    this.onHealthChange = new Phaser.Signal();
    this._perception = perception;
    this._tempPerception = tempPerception===undefined?perception:tempPerception;
    this.onPerceptionChange = new Phaser.Signal();
}

Stats.prototype.damagedNotBlocked = function(damage) {
    return Math.max(0, damage - this.realBlock);
}

Object.defineProperty(Stats.prototype, 'frameRate',{
    get: function() {
        return 10 * this.tempSpeed;
    }
});

Object.defineProperty(Stats.prototype, 'realBlock',{
    get: function() {
        return this.tempDefense;
    }
});

Object.defineProperty(Stats.prototype, 'realDamage',{
    get: function() {
        return this.tempDamage;
    }
});

Object.defineProperty(Stats.prototype, 'blockingTime',{
    get: function() {
        return Phaser.Timer.SECOND;
    }
});

Object.defineProperty(Stats.prototype, 'maxHp',{
    get: function() {
        return this._tempHealth
    }
});

Object.defineProperty(Stats.prototype, 'tempDamage',{
    get: function() {
        return this._tempDamage;
    },
    set: function(value) {
        this._tempDamage = value;
        this.onDamageChange.dispatch();
    }
});

Object.defineProperty(Stats.prototype, 'damage',{
    get: function() {
        return this._damage;
    },
    set: function(value) {
        this._damage = value;
        this.onDamageChange.dispatch();
    }
});

Stats.prototype.resetDamage = function() {
    this.damage = this.tempDamage;
};

Stats.prototype.updateDamage = function() {
    this.tempDamage = this.damage;
};

Object.defineProperty(Stats.prototype, 'defense',{
    get: function() {
        return this._defense;
    },
    set: function(value) {
        this._defense = value;
        this.onDefenseChange.dispatch();
    }
});

Object.defineProperty(Stats.prototype, 'tempDefense',{
    get: function() {
        return this._tempDefense;
    },
    set: function(value) {
        this._tempDefense = value;
        this.onDefenseChange.dispatch();
    }
});

Stats.prototype.resetDefense = function() {
    this.defense = this.tempDefense;
};

Stats.prototype.updateDefense = function() {
    this.tempDefense = this.defense;
};

Object.defineProperty(Stats.prototype, 'speed',{
    get: function() {
        return this._speed;
    },
    set: function(value) {
        this._speed = value;
        this.onSpeedChange.dispatch();
    }
});

Object.defineProperty(Stats.prototype, 'tempSpeed',{
    get: function() {
        return this._tempSpeed;
    },
    set: function(value) {
        this._tempSpeed = value;
        this.onSpeedChange.dispatch();
    }
});

Stats.prototype.resetSpeed = function() {
    this.speed = this.tempSpeed;
};

Stats.prototype.updateSpeed = function() {
    this.tempSpeed = this.speed;
};

Object.defineProperty(Stats.prototype, 'health',{
    get: function() {
        return this._health
    },
    set: function(value) {
        this._health = value;
        this.onHealthChange.dispatch();
    }
});

Object.defineProperty(Stats.prototype, 'tempHealth',{
    get: function() {
        return this._tempHealth
    },
    set: function(value) {
        this._tempHealth = value;
        this.onHealthChange.dispatch();
    }
});

Stats.prototype.resetHealth = function() {
    this.health = this.tempHealth;
};

Stats.prototype.updateHealth = function() {
    this.tempHealth = this.health;
};


Object.defineProperty(Stats.prototype, 'perception',{
    get: function() {
        return this._perception
    },
    set: function(value) {
        this._perception = value;
        this.onPerceptionChange.dispatch();
    }
});

Object.defineProperty(Stats.prototype, 'tempPerception',{
    get: function() {
        return this._tempPerception
    },
    set: function(value) {
        this._tempPerception = value;
        this.onPerceptionChange.dispatch();
    }
});

Stats.prototype.resetPerception = function() {
    this.perception = this.tempPerception;
};

Stats.prototype.updatePerception = function() {
    this.tempPerception = this.perception;
};

Stats.prototype.reset = function() {
    this.resetDamage();
    this.resetDefense();
    this.resetHealth();
    this.resetSpeed();
    this.resetPerception();
};

Stats.prototype.update = function() {
    this.updateDamage();
    this.updateDefense();
    this.updateHealth();
    this.updateSpeed();
    this.updatePerception();
};

module.exports = Stats;
},{}],20:[function(require,module,exports){
'use strict'

var TimeCalculations = {
    totalAttackTime: function() {
        return (this.animations._anims.preAttacking._frames.length + this.animations._anims.attacking._frames.length) / this.stats.frameRate;
    },
    currentAttackTime: function() {
        switch (this.animations.currentAnim.name) {
            case 'preAttacking':
                return (this.animations._anims.preAttacking.currentFrame.index - this.animations._anims.preAttacking._frames[0]) / this.stats.frameRate;
            case 'attacking':
                return (this.animations._anims.attacking.currentFrame.index - this.animations._anims.attacking._frames[0] + this.animations._anims.preAttacking._frames.length) / this.stats.frameRate;
            default:
                return NaN;
        }
    },
    totalBlockTime: function() {
        return ((this.animations._anims.preBlocking._frames.length + this.animations._anims.postBlocking._frames.length)
            / this.stats.frameRate) + this.stats.blockingTime/Phaser.Timer.SECOND;
    },
    currentBlockTime: function() {
        switch (this.animations.currentAnim.name) {
            case 'preBlocking':
                return (this.animations._anims.preBlocking.currentFrame.index - this.animations._anims.preBlocking._frames[0]) / this.stats.frameRate;
            case 'blocking':
                return (this.animations._anims.preBlocking.currentFrame.index - this.animations._anims.blocking._frames[0] + this.animations._anims.blocking.loopCount * this.animations._anims.blocking._frames.length
                    + this.animations._anims.preBlocking._frames.length) / this.stats.frameRate;
            case 'postBlocking':
                return (this.animations._anims.preBlocking.currentFrame.index - this.animations._anims.postBlocking._frames[0] +
                    this.animations._anims.preBlocking._frames.length) / this.stats.frameRate
                    + this.stats.blockingTime/Phaser.Timer.SECOND;
            default:
                return NaN;
        }
    },
    totalIdleTime: function(){
        return (this.animations._anims.idle._frames.length)/this.stats.frameRate;
    },
    currentIdleTime: function(){
        if(this.animations.currentAnim.name == 'idle'){
            return (this.animations._anims.idle.currentFrame.index - this.animations._anims.idle._frames[0]) / this.stats.frameRate
        } else
            return NaN;
    }
}

module.exports = TimeCalculations;
},{}],21:[function(require,module,exports){
'use strict'

var TimerAlterations = {
    newStart(timer) {
        this.coolDown[timer].addOnceStart(this, timer);
        this.coolDown[timer].start();
    }
}

module.exports = TimerAlterations;
},{}],22:[function(require,module,exports){
// var Phaser = require('phaser');

var Character = require('./characters/character');
var Seeker = require('./characters/seeker');
var Enemy = require('./characters/enemy');
var Bar = require('./interface/bar');
var CircleWithSectors = require('./interface/circleWithSectors');
var HealthBar = require('./interface/healthBar');
var ReactiveBar = require('./interface/reactiveBar');
var ReactiveContinuousBar = require('./interface/reactiveContinuousBar');
var ReactiveRichText = require('./interface/reactiveRichText');
var RichText = require('./interface/richText');
var ActionButton = require('./interface/actionButton');
var SeekerCombatHUD = require('./interface/seekerCombatHUD');
var EnemyCombatHUD = require('./interface/enemyCombatHUD');
var CombatHUD = require('./interface/combatHUD');
var ScrollText = require('./interface/scrollText');
var EventHUD = require('./interface/eventHUD');
var OptionMenu = require('./interface/optionMenu');
var ButtonMenu = require('./interface/buttonMenu');
var WindowFrame = require('./interface/windowFrame');
var FramedButton = require('./interface/framedButton');
var InfoWindow = require('./interface/infoWindow');
var MainMenuHUD = require('./interface/mainMenuHUD');
var CreationHUD = require('./interface/creationHUD');
/**
 * 
 */
fun = function (Phaser) {
    Phaser.GameObjectFactory.prototype.character = function (x, y, name, stats, spriteSheet, actions, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new Character(this.game, x, y, name, stats, spriteSheet, actions));
    }

    Phaser.GameObjectFactory.prototype.seeker = function (x, y, name, stats, objects, spriteSheet, actions, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new Seeker(this.game, x, y, name, stats, objects, spriteSheet, actions));
    }

    Phaser.GameObjectFactory.prototype.enemy = function (x, y, name, stats, spriteSheet, actions, seeker, pattern, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new Enemy(this.game, x, y, name, stats, spriteSheet, actions, seeker, pattern));
    }

    Phaser.GameObjectFactory.prototype.bar = function (x, y, key, frame, parent = this.game.world) {
        return new Bar(this.game, parent, x, y, key, frame);
    }

    Phaser.GameObjectFactory.prototype.circleWithSectors = function (x, y, radius, angles, colors, alphas, antiClockWise, segments, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new CircleWithSectors(this.game, x, y, radius, angles, colors, alphas, antiClockWise, segments));
    }

    Phaser.GameObjectFactory.prototype.healthBar = function (x, y, character, voidKey, healKey, damageKey, healthKey, framekey, style, delay, speed, voidFrame = null, healFrame = null, damageFrame = null, healthFrame = null, parent = this.game.world) {
        return new HealthBar(this.game, x, y, character, voidKey, healKey, damageKey, healthKey, healthKey, style, delay, speed, voidFrame, healFrame, damageFrame, healthFrame, parent);
    }

    Phaser.GameObjectFactory.prototype.reactiveBar = function (parent, x, y, key, percentageFunction, functionContext, signal, frame) {
        return new ReactiveBar(this.game, parent, x, y, key, percentageFunction, functionContext, signal, frame);
    }

    Phaser.GameObjectFactory.prototype.reactiveContinuousBar = function (parent, x, y, key, percentageFunction, functionContext, signal, decreaseDelay, increaseDelay, decreaseSpeed, increaseSpeed, frame = null) {
        return new ReactiveContinuousBar(this.game, parent, x, y, key, percentageFunction, functionContext, signal, decreaseDelay, increaseDelay, decreaseSpeed, increaseSpeed, frame);
    }

    Phaser.GameObjectFactory.prototype.reactiveRichText = function (x, y, lineWidth, text, style, signal, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new ReactiveRichText(this.game, x, y, lineWidth, text, style, group, signal));
    }

    Phaser.GameObjectFactory.prototype.richText = function (x, y, lineWidth, text, style = {}, group = this.game.world) {
        return new RichText(this.game, x, y, lineWidth, text, style, group);
    }

    Phaser.GameObjectFactory.prototype.actionButton = function (x, y, buttonKey, frameKey, barKey, callbacks, percentageFunction, percentageFunctionContext,
        timeFunction, timeFunctionContext, barSignal, totalRechargeSignal,
        overButtonFrame = 0, outButtonFrame = 0, downButtonFrame = 0, upButtonFrame = 0, disabledButtonFrame = 0,
        overFrameFrame = 0, outFrameFrame = 0, downFrameFrame = 0, upFrameFrame = 0, disabledFrameFrame = 0,
        frameColorOver = 0, frameColorOut = 0, frameColorDown = 0, frameColorUp = 0, frameColorDisabled = 0, barFrame = 0, parent = this.game.world) {
        return new ActionButton(parent, this.game, x, y, buttonKey, frameKey, barKey, callbacks, percentageFunction, percentageFunctionContext,
            timeFunction, timeFunctionContext, barSignal, totalRechargeSignal,
            overButtonFrame, outButtonFrame, downButtonFrame, upButtonFrame, disabledButtonFrame,
            overFrameFrame, outFrameFrame, downFrameFrame, upFrameFrame, disabledFrameFrame,
            frameColorOver, frameColorOut, frameColorDown, frameColorUp, frameColorDisabled, barFrame);
    }

    Phaser.GameObjectFactory.prototype.seekerCombatHUD = function (x, y, seeker, enemy, parent = this.game.world) {
        return new SeekerCombatHUD(this.game, parent, x, y, seeker, enemy);
    }

    Phaser.GameObjectFactory.prototype.enemyCombatHUD = function (x, y, seeker, enemy, parent = this.game.world) {
        return new EnemyCombatHUD(this.game, parent, x, y, seeker, enemy);
    }

    Phaser.GameObjectFactory.prototype.combatHUD = function (x, y, seeker, enemy, parent = this.game.world) {
        return new CombatHUD(this.game, parent, x, y, seeker, enemy);
    }

    Phaser.GameObjectFactory.prototype.scrollText = function (x, y, width, height, text, style, parent = this.game.world) {
        return new ScrollText(this.game, parent, x, y, width, height, text, style);
    }

    Phaser.GameObjectFactory.prototype.eventHUD = function (seeker, dayManager, text, options, image, parent = this.game.world) {
        return new EventHUD(this.game, parent, seeker, dayManager, text, options, image);
    }

    Phaser.GameObjectFactory.prototype.optionMenu = function (buttonsMenu, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new OptionMenu(this.game, buttonsMenu, group));
    }

    Phaser.GameObjectFactory.prototype.buttonMenu = function (name, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new ButtonMenu(this.game, name, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));
    }

    Phaser.GameObjectFactory.prototype.windowFrame = function (x, y, width, height, key, parent = this.world) {
        return new WindowFrame(this.game, parent, x, y, width, height, key);
    }

    Phaser.GameObjectFactory.prototype.framedButton = function (x, y, buttonKey, frameKey, callbacks,
        frameColorOver, frameColorOut, frameColorDown, frameColorUp, frameColorDisabled,
        overButtonFrame, outButtonFrame, downButtonFrame, upButtonFrame, disabledButtonFrame,
        overFrameFrame, outFrameFrame, downFrameFrame, upFrameFrame, disabledFrameFrame, parent = this.world) {

        return new FramedButton(parent, this.game, x, y, buttonKey, frameKey, callbacks,
            frameColorOver, frameColorOut, frameColorDown, frameColorUp, frameColorDisabled,
            overButtonFrame, outButtonFrame, downButtonFrame, upButtonFrame, disabledButtonFrame,
            overFrameFrame, outFrameFrame, downFrameFrame, upFrameFrame, disabledFrameFrame)
    }

    Phaser.GameObjectFactory.prototype.infoWindow = function (x, y, width, height, windowKey, text, style, parent = this.world) {
        return new InfoWindow(parent, this.game, x, y, width, height, windowKey, text, style);
    }

    Phaser.GameObjectFactory.prototype.mainMenuHUD = function (x, y, selector, parent = this.game.world) {
        return new MainMenuHUD(this.game, parent, x, y, selector);
    }

    Phaser.GameObjectFactory.prototype.creationHUD = function (x, y, exitFunction, context, parent = this.game.world) {
        return new CreationHUD(this.game, parent, x, y, exitFunction, context);
    }
}

module.exports = fun;
},{"./characters/character":13,"./characters/enemy":15,"./characters/seeker":18,"./interface/actionButton":24,"./interface/bar":25,"./interface/buttonMenu":26,"./interface/circleWithSectors":28,"./interface/combatHUD":29,"./interface/creationHUD":30,"./interface/enemyCombatHUD":31,"./interface/eventHUD":32,"./interface/framedButton":33,"./interface/healthBar":34,"./interface/infoWindow":35,"./interface/mainMenuHUD":36,"./interface/optionMenu":37,"./interface/reactiveBar":38,"./interface/reactiveContinuousBar":40,"./interface/reactiveRichText":41,"./interface/richText":42,"./interface/scrollText":43,"./interface/seekerCombatHUD":44,"./interface/windowFrame":50}],23:[function(require,module,exports){
'use strict'

var ReactiveBar = require('./reactiveBar');
var ReactiveCircleBar = require('./reactiveCircleBar');

var ActionBar = function(game, parent, x, y, enemy, frameKey){
    Phaser.Group.call(this, game, parent);
    this._enemy = enemy;
    this.x = x;
    this.y = y;
    this._nextX = 31;
    this._back = this.add(new Phaser.Image(game,0,0,'actionsBarBack'));
    this._actionContiner = this.add(new Phaser.Group(game, this));
    this._actionContiner.mask = this.add(new Phaser.Graphics(game,31,13));
    this._actionContiner.mask.beginFill(0xffffff);
    this._actionContiner.mask.drawRect(0, 0, 80, 13);
    this._actionContiner.mask.endFill();
    this._timer = game.time.create(false);
    this._onEveryHalfDeciSecond = new Phaser.Signal();
    this._timer.loop(0.1,this._onEveryHalfDeciSecond.dispatch,this._onEveryHalfDeciSecond);
    
    //ActionBar.prototype._createAction.call(this,'attack');
    //ActionBar.prototype._createAction.call(this,'block');
    this._actionCircle = this.add(new ReactiveCircleBar(this.game,this,13,13,12,[0,Math.PI*3/2, Math.PI],[0x0000FF, 0x00FF00, 0xFF0000],[1,1,1],true, 400, -Math.PI/2, function(){
        if(this._actionContiner.children[0]){
        let name = this._actionContiner.children[0].action;
        let percentage = this._enemy[name].currentTime()/this._enemy[name].totalTime()*100;
        return isNaN(percentage)?0:percentage;
        } return 0;
    }, this,this._onEveryHalfDeciSecond));
    //this._onEveryHalfDeciSecond.add(ActionBar.prototype.move,this,0,-1);
    
    this._frame = this.add(new Phaser.Image(game,0,0,'actionsBarFrame'));
    this._barShadow = this.add(new Phaser.Image(game,32,13,'actionsBarShadow'));
    this._barShadow.alpha = 0.3;
    this._actions = [];
    this._childIndex = 0;
    this._rightX = 31;
}

ActionBar.prototype = Object.create(Phaser.Group.prototype);
ActionBar.prototype.constructor = ActionBar;

ActionBar.prototype.update = function() {
    let time = this._enemy[this._enemy.actionPattern.currentAction].currentTime();
    if(!isNaN(time)){
        this._actions = [];
        this._actionContiner.removeAll(true);
        this._rightX =31-time/8*80;
        this._createAction(this._enemy.actionPattern.currentAction);
        let i = 1;
        while(this._rightX < 111){
            this._createAction(this._enemy.actionPattern.actionNumber(i));
            i++;
        }
    }
}

ActionBar.prototype._createAction = function(action) {
    //'blockBar''attackBar''unknownBar' 'idleBar'
    this._actions.push(this._actionContiner.add(new ReactiveBar(this.game, this,this._rightX,13,action+'Bar', function(){
        return this[action].totalTime()/(8)*100;
    },this._enemy, this._enemy.stats.onSpeedChange, 0)));
    this._actions[this._actions.length-1].action = action;
    this._rightX+=this._actions[this._actions.length-1].mask.width;
    
}
ActionBar.prototype.reUpdate = function () {
    this._actionContiner.children.forEach(function(element){
        element.changePercentage();
    });
    this._actionContiner.mask.beginFill(0xffffff);
    this._actionContiner.mask.drawRect(0, 0, 80, 13);
    this._actionContiner.mask.endFill();
}

ActionBar.prototype.move = function(movement) {
    
    this._actions.forEach(function(element){
        element.x+=movement;
        if(element.right<31){
            this._actionContiner.remove(this._actions.shift(),true);
            this._actions.shift();
        }
    },this);
    let right = false;
    if(this._actions.length<=0 || this._actions[this._actions.length-1].x+this._actions[this._actions.length-1].mask.right<111){
        //console.log(this._actions.length);
        this._createAction(this._enemy.actionPattern.actionNumber(this._actions.length-1));
    } 
    
}

module.exports = ActionBar;
},{"./reactiveBar":38,"./reactiveCircleBar":39}],24:[function(require,module,exports){
'use strict'
var FramedButton = require('./framedButton');
var ReactiveBar = require('./reactiveBar');
var ReactiveRichText = require('./reactiveRichText')
var textFunction = require('./textFunctions');

var ActionButton = function (parent, game, x, y, buttonKey, frameKey, barKey, callbacks, percentageFunction, percentageFunctionContext,
    timeFunction, timeFunctionContext, barSignal, totalRechargeSignal, tint,
    frameColorOver = 0, frameColorOut = 0, frameColorDown = 0, frameColorUp = 0, frameColorDisabled = 0,
    overButtonFrame = 0, outButtonFrame = 0, downButtonFrame = 0, upButtonFrame = 0, disabledButtonFrame = 0,
    overFrameFrame = 0, outFrameFrame = 0, downFrameFrame = 0, upFrameFrame = 0, disabledFrameFrame = 0, barFrame = 0) {

    FramedButton.call(this, parent, game,x, y, buttonKey, frameKey, callbacks, 
        frameColorOver, frameColorOut, frameColorDown, frameColorUp, frameColorDisabled,
         overButtonFrame, outButtonFrame, downButtonFrame, upButtonFrame, disabledButtonFrame,
         overFrameFrame, outFrameFrame, downFrameFrame, upFrameFrame, disabledFrameFrame);
    this._button.tint = tint;
    this._bar = this.add(new ReactiveBar(game, parent, 0, 0, barKey, percentageFunction, percentageFunctionContext, barSignal, barFrame));
    this._bar.maskAngle = -90;
    this.moveUp(this._frame);

    this._text = this.add(new ReactiveRichText(game, 1, 2, this._button.width, textFunction.Fun(timeFunction, timeFunctionContext), {
        "font": "Minecraft",
        "fill": "#fff",
        "fontSize": 10,
        "align": "center"
    }, this, [barSignal]));
   
    this._rechargeEvent = totalRechargeSignal?totalRechargeSignal.add( this.activate, this):{};
    this._rechargeEvent.active;
}

ActionButton.prototype = Object.create(FramedButton.prototype);
ActionButton.prototype.constructor = ActionButton;

ActionButton.prototype.deactivate = function() {
    FramedButton.prototype.deactivate.apply(this);
    
}

module.exports = ActionButton;
},{"./framedButton":33,"./reactiveBar":38,"./reactiveRichText":41,"./textFunctions":49}],25:[function(require,module,exports){
'use strict'

var Bar = function (game, parent, x, y, key, frame = null) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    this.bar = this.add(new Phaser.Sprite(game, 0, 0, key, frame));
    this.mask = this.add(new Phaser.Graphics(game, 0, 0));
    this.bar.mask = this.mask;
    this.mask.beginFill(0xffffff);
    this.mask.drawRect(0, 0, this.bar.width, this.bar.height);
    this.maxWidth = this.bar.width;
    this.maxHeight = this.bar.height;
    this._percentage = 1;
    this._maskAngle = 0;
}

Bar.prototype = Object.create(Phaser.Group.prototype);
Bar.prototype.constructor = Bar;

Object.defineProperty(Bar.prototype, 'percentage', {
    get: function () {
        return 100 * this._percentage;
    },
    set: function (value) {
        value = value / 100;
        this._percentage = value;
        this.mask.clear();
        this.mask.beginFill(0xffffff);
        this.mask.drawRect(0, 0, Math.round(this.bar.width * value), this.bar.height);

    }
});

Object.defineProperty(Bar.prototype, 'angle', {
    get: function () {
        return this.bar.angle;
    },
    set: function (value) {
        this.bar.angle = value;
        this.mask.angle = value + this._maskAngle;
        this.mask.y = this.bar.y + this.bar.height / 2 - Math.sqrt(this.bar.width * this.bar.width +
            this.bar.height * this.bar.height) / 2 * Math.cos((this._maskAngle - 45) * Math.PI / 180);
        this.mask.x = this.bar.x + this.bar.width / 2 + Math.sqrt(this.bar.width * this.bar.width +
            this.bar.height * this.bar.height) / 2 * Math.sin((this._maskAngle - 45) * Math.PI / 180);
    }
});

Object.defineProperty(Bar.prototype, 'maskAngle', {
    get: function () {
        return this._maskAngle;
    },
    set: function (value) {
        this._maskAngle = value;
        this.angle = this.angle;
    }
});

Object.defineProperty(Bar.prototype, 'width', {
    get: function () {
        return this.bar.width;
    },
    set: function (value) {
        this.bar.width = value;
        this.percentage = this._percentage;
    }
});

Object.defineProperty(Bar.prototype, 'height', {
    get: function () {
        return this.bar.height;
    },
    set: function (value) {
        this.bar.height = value;
        this.percentage = this._percentage;
    }
});

module.exports = Bar;
},{}],26:[function(require,module,exports){
'use strict';

var FramedButton = require('./framedButton');


var ButtonMenu = function (parent, game, name, x, y, buttonKey, frameKey, callbacks,
    frameColorOver, frameColorOut, frameColorDown, frameColorUp, frameColorDisabled,
    overButtonFrame = 0, outButtonFrame = 0, downButtonFrame = 0, upButtonFrame = 0, disabledButtonFrame = 0,
    overFrameFrame = 0, outFrameFrame = 0, downFrameFrame = 0, upFrameFrame = 0, disabledFrameFrame = 0) {
    FramedButton.call(this, parent, game, x, y, buttonKey, frameKey, callbacks,
        frameColorOver, frameColorOut, frameColorDown, frameColorUp, frameColorDisabled,
        overButtonFrame, outButtonFrame, downButtonFrame, upButtonFrame, disabledButtonFrame,
        overFrameFrame, outFrameFrame, downFrameFrame, upFrameFrame, disabledFrameFrame);
    this.name = name;
    this.leftButton = null;
    this.rightButton = null;
    this.upButton = null;
    this.downButton = null;
}

ButtonMenu.prototype = Object.create(FramedButton.prototype);
ButtonMenu.prototype.constructor = ButtonMenu;

ButtonMenu.prototype.goLeft = function() { return this.left; }
ButtonMenu.prototype.goRight = function() { return this.right; }
ButtonMenu.prototype.goUp = function() { return this.up; }
ButtonMenu.prototype.goDown = function() { return this.down; }

ButtonMenu.prototype.select = function() {
    this.onInputDown.dispatch();
}

module.exports = ButtonMenu;

},{"./framedButton":33}],27:[function(require,module,exports){
'use strict'

var CircleWithSectors = require('./circleWithSectors');

var CircleBar = function (game,parent, x, y, radius, angles, colors, alphas, antiClockWise, segments, initialAngle) {
    Phaser.Group.call(this,game, parent);
    this.x = x;
    this.y = y;
    this._actionCircleBack = this.add(new CircleWithSectors(game,0,0,radius,angles,colors,alphas,antiClockWise, segments));
    this._actionCircleBack.tint = 0xAAAAAA;
    this._actionCircleFront = this.add(new CircleWithSectors(game,0,0,radius,angles,colors,alphas,antiClockWise, segments));
    this._actionCircleFront.mask = this.add(new Phaser.Graphics(game,0,0));
    this._antiClockWise = antiClockWise;
    this._radius = radius;
    this._initialAngle = initialAngle;
    this._percentage = 1;
}

CircleBar.prototype = Object.create(Phaser.Group.prototype);
CircleBar.prototype.constructor = CircleBar;

Object.defineProperty(CircleBar.prototype, 'percentage', {
    get: function () {
        return 100 * this._percentage;
    },
    set: function (value) {
        value = value / 100;
        this._percentage = value;
        this._actionCircleFront.mask.clear();
        this._actionCircleFront.mask.beginFill(0xffffff);
        let second = this._initialAngle + value*Math.PI*2;
        this._actionCircleFront.mask.arc(0,0,this._radius,second,this._initialAngle,this._antiClockWise);
        if(value<0.5){
            this._actionCircleFront.mask.drawPolygon([0,0,
                this._radius * Math.cos(second), this._radius * Math.sin(second),
                this._radius * Math.cos(this._initialAngle), this._radius * Math.sin(this._initialAngle)]);
        }
        this._actionCircleFront.mask.endFill();

    }
});

module.exports = CircleBar;
},{"./circleWithSectors":28}],28:[function(require,module,exports){
'use strict'


var CircleWithSector = function (game, x, y, radius, angles, colors, alphas, antiClockWise, segments) {
    Phaser.Graphics.call(this, game, x, y);
    if (angles.length === colors.length) {
        if(angles.length===1){
            this.beginFill(colors[0], alphas[0]);
            this.drawCircle(0, 0, radius*2);
        } else {
        for (let i = 0; i < angles.length; i++) {
            this.beginFill(colors[i], alphas[i]);
            this.arc(0, 0, radius, angles[i], angles[(i + 1) % angles.length], antiClockWise, segments);
            // Si solucionan el bug de dibujar muchos sectores en un mismo grafico se podrá quitar la funcion thi.drawPolygon.
            let c = angles[(i + 1) % angles.length] - angles[i];
            c = antiClockWise? -c: c;
            c = c<0?2*Math.PI+c:c;
            if(Math.abs(c)<=Math.PI){
            this.drawPolygon([0, 0,
                radius * Math.cos(angles[i]), radius * Math.sin(angles[i]),
                radius * Math.cos(angles[(i + 1) % angles.length]), radius * Math.sin(angles[(i + 1) % angles.length])]
            );
        }
        }
    }
        this.endFill();
    }
}

CircleWithSector.prototype = Object.create(Phaser.Graphics.prototype);
CircleWithSector.prototype.constructor = CircleWithSector;

module.exports = CircleWithSector;
},{}],29:[function(require,module,exports){
'use strict'

var EnemyCombatHUD = require('./enemyCombatHUD');
var SeekerCombatHUD = require('./seekerCombatHUD');
var FramedButton = require('./framedButton');
var OptionMenu = require('./optionMenu');
var RichText = require('./richText');

var CombatHUD = function (game, parent, x, y, seeker, enemy) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    this.frame = this.add(new Phaser.Image(game, 0, 0, 'interface'));
    this._seekerHUD = this.add(new SeekerCombatHUD(game, this, 0, 0, seeker, enemy));
    this._enemyHUD = this.add(new EnemyCombatHUD(game, this, 0, 0, seeker, enemy));
    this._pause = false;
    this._seeker = seeker;
    this._enemy = enemy;
    this.pauseButton = this.add(new FramedButton(this, game, 190, 2, 'pauseButton', 'pauseButtonFrame',[{callback: CombatHUD.prototype._pause, context:this, arguments:[]}],0xFFFFFF,0x000000,0x676767, 0x222222, 0x676767));
    this.pauseMenu = this.add(new OptionMenu(game,40,15,120,120,[
        [ 'hola', 10, 16, 'optionBack', 'optionFrame', 
        [{callback: CombatHUD.prototype._pause, context:this, arguments:[]}],
        0x000000, 0xFFFFFF, 0x5C5C5C, 0x111111, 0xAAAAAA,
        {leftButton: undefined, rightButton: undefined, upButton: undefined, downButton: undefined} ],
        [ 'hola', 10, 30, 'optionBack', 'optionFrame', 
        [{callback: this.game.state.start, context:this.game.state, arguments:['mainmenu']}],
        0x000000, 0xFFFFFF, 0x5C5C5C, 0x111111, 0xAAAAAA,
        {leftButton: undefined, rightButton: undefined, upButton: undefined, downButton: undefined} ],
    ],'infoWindow',this));
    this.pauseMenu.visible = false;
    this.pauseMenu.add(new RichText(game,0,5,120,'PAUSA',{align: 'center'},this));
    this.pauseMenu.add(new RichText(game,0,16,120,'VOLVER',{align: 'center'},this));
    this.pauseMenu.add(new RichText(game,0,30,120,'IR AL MENU',{align: 'center'},this));
}


CombatHUD.prototype = Object.create(Phaser.Group.prototype);
CombatHUD.prototype.constructor = CombatHUD;

CombatHUD.prototype._pause = function(){
    if(this._pause){
        this._seeker.start();
        this._enemy.start();
        this.pauseMenu.visible = false;
        this._seekerHUD.unFreeze();
        this.pauseButton._button.inputEnabled = true;
    } else {
        this._seeker.stop();
        this._enemy.stop();
        this.pauseMenu.visible = true;
        this._seekerHUD.freeze();
        this.pauseButton._button.inputEnabled = false;
        this.pauseButton.changeFrameFrame('Out')
    }
    this._pause = !this._pause;
}

module.exports = CombatHUD;
},{"./enemyCombatHUD":31,"./framedButton":33,"./optionMenu":37,"./richText":42,"./seekerCombatHUD":44}],30:[function(require,module,exports){
'use strict'
//var ActionButton = require('./actionButton');
//var HealthBar = require('./healthBar');
var ReactiveRichText = require('./reactiveRichText');
var RichText = require('./richText');
var textFunctions = require('./textFunctions');
var FramedButton = require('./framedButton');
var StatMarker = require('./statMarker');
var ShowCase = require('./showCase');

/*var deactivateActionButton = function () {
  this._button.onInputOver.removeAll();
  this._button.onInputOut.removeAll();
  this._button.onInputDown.removeAll();
  this._button.onInputUp.removeAll();
  this._rechargeEvent.active = false;
  this._text.visible = false;
  this._bar.percentageFunction = function () { return 0; };
  this._bar.percentage = 0;
  this.deactivate()
};*/

var CreationHUD = function (game, parent, x, y, selector, context) {
  Phaser.Group.call(this, game, parent);
  this.x = x;
  this.y = y;
  let style = { "font": "Minecraft", "fill": "#FFFFFF", "fontSize": 10, "align": 'center' };
  var style2 = { font: 'Minecraft', fill: '#000000', fontSize: 10 };
  var style3 = { font: 'Minecraft', fill: '#000000', fontSize: 10, align: 'center' };

  this.MainMenuScene = function () {
    this.game.add.audio('button', 0.1).play();
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('mainmenu'); }, this);
  };

  this.NameScene = function () {
    this.game.add.audio('button', 0.1).play();
    //fadeOut
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('name', true, false, this._showCase.character()); }, this);
  };

  this.add(new Phaser.Image(game, 0, 0, 'creationinterface'));

  this._showCase = this.add(new ShowCase(game, this, 0, 0, require('../../assets/characters/characters.json')));

  this.backButton = this.game.world.add(new FramedButton(this.game.world, this.game, 20, 22, 'backIcon', 'backFrame', [{ callback: function () { this.MainMenuScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));

  this.leftArrowButton = this.add(new FramedButton(this, game, 49, 55, 'arrow', 'arrowFrame', [{ callback: this._showCase.rotate, context: this._showCase, arguments: [1] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767, 1, 0, 1));

  this.rightArrowButton = this.add(new FramedButton(this, game, 151, 55, 'arrow', 'arrowFrame', [{ callback: this._showCase.rotate, context: this._showCase, arguments: [-1] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767, 1, 0, 1));

  this.nextStateButton = this.add(new FramedButton(this, game, 134, 13, 'ritualButton', 'ritualFrame', [{ callback: this.NameScene, context: this, arguments: [1] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767, 1, 0, 1));

  this.nextStateButtonText = this.add(new RichText(game, 141, 17, 50, 'INICIAR RITUAL', style3, this));
  this.nextStateButton._button.input.pixelPerfectClick = true;
  this.nextStateButton._button.input.pixelPerfectOver = true;

  this.rightArrowButton.scale.x *= -1;

  this.leftArrowButton.onInputOver.add(function () { selector.frame = 1; });
  this.leftArrowButton.onInputOut.add(function () { selector.frame = 0; });
  this.leftArrowButton.onInputDown.add(function () { selector.frame = 2; });
  this.leftArrowButton.onInputUp.add(function (over) { 
    if(over)
      selector.frame = 1;
    else
    selector.frame = 0;});

  this.rightArrowButton.onInputOver.add(function () { selector.frame = 1; });
  this.rightArrowButton.onInputOut.add(function () { selector.frame = 0; });
  this.rightArrowButton.onInputDown.add(function () { selector.frame = 2; });
  this.rightArrowButton.onInputUp.add(function (over) { 
    if(over)
      selector.frame = 1;
    else
    selector.frame = 0;});

  this.nextStateButton.onInputOver.add(function () { selector.frame = 1; });
  this.nextStateButton.onInputOut.add(function () { selector.frame = 0; });
  this.nextStateButton.onInputDown.add(function () { selector.frame = 2; });
  this.nextStateButton.onInputUp.add(function (over) { 
    if(over)
      selector.frame = 1;
    else
    selector.frame = 0;});

  this.backButton.onInputOver.add(function () { selector.frame = 1; });
  this.backButton.onInputOut.add(function () { selector.frame = 0; });
  this.backButton.onInputDown.add(function () { selector.frame = 2; });
  this.backButton.onInputUp.add(function (over) { 
    if(over)
      selector.frame = 1;
    else
    selector.frame = 0;});
    
  this.add(new RichText(game, -20, -1, 150, 'ELIGE A TU BUSCADOR:', style, this));

  this._showCase.onBeginRotation.add(function () {
    this.leftArrowButton.deactivate();
    this.rightArrowButton.deactivate();
    this.nextStateButton.deactivate();
    this.nextStateButton._button.tint = 0x555555;
    this.nextStateButtonText.text = '';
    this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.active = false;
    this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.active = false;
  }, this);

  this._showCase.onEndRotation.add(function () {
    this.leftArrowButton.activate();
    this.rightArrowButton.activate();
    this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.active = true;
    this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.active = true;
    if (this._showCase.isAvaliable()) {
      this.nextStateButton.activate();
      this.nextStateButton._button.tint = 0xFFFFFF;
      this.nextStateButtonText.text = 'INICIAR RITUAL';
    }
  }, this);


  this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add(function(key, direction){this.rotate(direction)}, this._showCase,0,1);
  this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add(function(key, direction){this.rotate(direction)}, this._showCase,0,-1);
}

CreationHUD.prototype = Object.create(Phaser.Group.prototype);
CreationHUD.prototype.constructor = CreationHUD;

module.exports = CreationHUD;
},{"../../assets/characters/characters.json":2,"./framedButton":33,"./reactiveRichText":41,"./richText":42,"./showCase":45,"./statMarker":48,"./textFunctions":49}],31:[function(require,module,exports){
'use strict'

var ActionBar = require('./actionBar');
var HealthBar = require('./healthBar');
var ReactiveRichText = require('./reactiveRichText');
var textFunctions = require('./textFunctions');

var EnemyCombatHUD = function (game, parent, x, y, seeker, enemy) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    var style = { "font": "Minecraft", "fill": "#FFFFFF", "fontSize": 10, "align": 'center' };

    var style2 = {"font": "Minecraft", "fill": "#000000", "fontSize": 10 };

    this.healthBar = this.add(new HealthBar(game, 119, 121, enemy, 'emptyBar', 'healBar', 'damageBar', 'healthBar', 'frameBar', style, 1000, 100, this));
    this._actionBar = this.add(new ActionBar(game, this, 87,122,enemy,'actionsBarFrame'));

    this.name = this.add(new ReactiveRichText(game,3+123,-1,80,textFunctions.Fun(function() {
        return this.name;
    }, enemy), style2, this, [enemy.onNameChange]));

    this.healthIcon = this.add(new Phaser.Image(game,3+122,14,'healthIcon'));
    this.healthNumber = this.add(new ReactiveRichText(game,15+122,13,12,textFunctions.Fun(function() {
        if(this.stats.tempHealth > this.stats.health){
          return textFunctions.Color('#00CC00',this.stats.tempHealth.toString());
        } else if (this.stats.tempHealth < this.stats.health){
          return textFunctions.Color('#CC0000',this.stats.tempHealth.toString());
        } else {
          return textFunctions.Color('#000000',this.stats.tempHealth.toString());
        }
      }, enemy), style2, this, [enemy.stats.onHealthChange]));

    this.damageIcon = this.add(new Phaser.Image(game,27+122,14,'damageIcon'));
    this.damageNumber = this.add(new ReactiveRichText(game,39+122,13,12,textFunctions.Fun(function() {
        if(this.stats.tempDamage > this.stats.damage){
          return textFunctions.Color('#00CC00',this.stats.tempDamage.toString());
        } else if (this.stats.tempDamage < this.stats.damage){
          return textFunctions.Color('#CC0000',this.stats.tempDamage.toString());
        } else {
          return textFunctions.Color('#000000',this.stats.tempDamage.toString());
        }
      }, enemy), style2, this, [enemy.stats.onDamageChange]));

    this.defenseIcon = this.add(new Phaser.Sprite(game,51+122,14,'defenseIcon'));
    this.defenseNumber = this.add(new ReactiveRichText(game,63+122,13,12,textFunctions.Fun(function() {
        if(this.stats.tempDefense > this.stats.defense){
          return textFunctions.Color('#00CC00',this.stats.tempDefense.toString());
        } else if (this.stats.tempDefense < this.stats.defense){
          return textFunctions.Color('#CC0000',this.stats.tempDefense.toString());
        } else {
          return textFunctions.Color('#000000',this.stats.tempDefense.toString());
        }
      }, enemy), style2, this, [enemy.stats.onDefenseChange]));

    this.speedIcon = this.add(new Phaser.Image(game,13+122,24,'speedIcon'));
    this.speedNumber = this.add(new ReactiveRichText(game,25+122,23,12,textFunctions.Fun(function() {
        if(this.stats.tempSpeed > this.stats.speed){
          return textFunctions.Color('#00CC00',this.stats.tempSpeed.toString());
        } else if (this.stats.tempSpeed < this.stats.speed){
          return textFunctions.Color('#CC0000',this.stats.tempSpeed.toString());
        } else {
          return textFunctions.Color('#000000',this.stats.tempSpeed.toString());
        }
      }, enemy), style2, this, [enemy.stats.onSpeedChange]));

    this.perceptionIcon = this.add(new Phaser.Image(game,38+122,24,'perceptionIcon'));
    this.perceptionNumber = this.add(new ReactiveRichText(game,50+122,23,12,textFunctions.Fun(function() {
        if(this.stats.tempPerception > this.stats.perception){
          return textFunctions.Color('#00CC00',this.stats.tempPerception.toString());
        } else if (this.stats.tempPerception < this.stats.perception){
          return textFunctions.Color('#CC0000',this.stats.tempPerception.toString());
        } else {
          return textFunctions.Color('#000000',this.stats.tempPerception.toString());
        }
      }, enemy), style2, this, [enemy.stats.onPerceptionChange]));
}


EnemyCombatHUD.prototype = Object.create(Phaser.Group.prototype);
EnemyCombatHUD.prototype.constructor = EnemyCombatHUD;

module.exports = EnemyCombatHUD;
},{"./actionBar":23,"./healthBar":34,"./reactiveRichText":41,"./textFunctions":49}],32:[function(require,module,exports){
'use strict'

var ScrollText = require('./scrollText');
var HealthBar = require('./healthBar');
var ReactiveRichText = require('./reactiveRichText');
var textFunctions = require('./textFunctions');
var Slider = require('./slider');
var FramedButton = require('./framedButton');
var RichText = require('./richText');

var EventHUD = function (game, parent, seeker, dayManager, text, options, image) {
    Phaser.Group.call(this, game, parent);
    for (let element in options) {
        options[element].text;
        options[element].callback;
    }
    let style = require('../../assets/fonts/style.json');

    var style2 = { "font": "Minecraft", "fill": "#000000", "fontSize": 10 };

    var style3 = { "font": "Minecraft", "fill": "#FFFFFF", "fontSize": 10, "align": 'center' };
    var style4 = { "font": "Minecraft", "fill": "#000000", "fontSize": 10, "align": 'center' };

    this.text = this.add(new ScrollText(game, this, 74, 32, 119, 85, text, style2));
    this.frame = this.add(new Phaser.Image(game, 0, 0, 'eventinterface'));
    this.healthBar = this.add(new HealthBar(game, 79, 2, seeker, 'emptyBar', 'healBar', 'damageBar', 'healthBar', 'frameBar', style3, 1000, 100, this));

    this.name = this.add(new ReactiveRichText(game, 3, -1, 80, textFunctions.Fun(function () {
        return this.name;
    }, seeker), style2, this, seeker.onNameChange));

    this.healthIcon = this.add(new Phaser.Image(game, 3, 15, 'healthIcon'));
    this.healthNumber = this.add(new ReactiveRichText(game, 15, 13, 12, textFunctions.Fun(function () {
        return this.stats.health.toString();
    }, seeker), style2, this, seeker.stats.onHealthChange));

    this.damageIcon = this.add(new Phaser.Image(game, 27, 15, 'damageIcon'));
    this.damageNumber = this.add(new ReactiveRichText(game, 39, 13, 12, textFunctions.Fun(function () {
        return this.stats.damage.toString();
    }, seeker), style2, this, seeker.stats.onDamageChange));

    this.defenseIcon = this.add(new Phaser.Sprite(game, 51, 15, 'defenseIcon'));
    this.defenseNumber = this.add(new ReactiveRichText(game, 63, 13, 12, textFunctions.Fun(function () {
        return this.stats.defense.toString();
    }, seeker), style2, this, seeker.stats.onDefenseChange));

    this.speedIcon = this.add(new Phaser.Image(game, 75, 15, 'speedIcon'));
    this.speedNumber = this.add(new ReactiveRichText(game, 87, 13, 12, textFunctions.Fun(function () {
        return this.stats.speed.toString();
    }, seeker), style2, this, seeker.stats.onSpeedChange));

    this.perceptionIcon = this.add(new Phaser.Image(game, 99, 15, 'perceptionIcon'));
    this.perceptionNumber = this.add(new ReactiveRichText(game, 111, 13, 12, textFunctions.Fun(function () {
        return this.stats.damage.toString();
    }, seeker), style2, this, seeker.stats.onPerceptionChange));

    this.gemIcon = this.add(new Phaser.Image(game, 68, 1, 'gemIcon'));
    this.gemNumber = this.add(new ReactiveRichText(game, 50, -1, 18, textFunctions.Fun(function () {
        return this.gems.toString();
    }, seeker), style2, this, seeker.stats.onPerceptionChange));//cambiar onPerceptionChange

    this.villageGemIcon = this.add(new Phaser.Image(game, 160 + 3, 18, 'villageGemIcon'));
    this.villageGemNumber = this.add(new ReactiveRichText(game, 142 + 3, 16, 18, textFunctions.Fun(function () {
        return this.gems.toString();//hay que cambiarlo
    }, seeker), style2, this, seeker.stats.onPerceptionChange));//cambiar onPerceptionChange

    this.populationIcon = this.add(new Phaser.Image(game, 160 + 28, 18, 'populationIcon'));
    this.populationNumber = this.add(new ReactiveRichText(game, 142 + 28, 16, 18, textFunctions.Fun(function () {
        return this.gems.toString();//hay que cambiarlo
    }, seeker), style2, this, seeker.stats.onPerceptionChange));//cambiar onPerceptionChange

    this.slider = this.add(new Slider(game, this, 194, 35, 'sliderBackground', 'slider', 80, 50, 3));
    this.slider.onChange.add(function (percentage) { this.text.move(percentage); }, this);

    this.options = [{}, {}, {}, {}];
    for (let i = 0; i < 4 && i < options.length; i++) {
        this.slider.onEnd.add(function (i) {
            this.options[i].button.activate();
            this.options[i].text.visible = true;
        }, this, 0, i);
        this.options[i].button = this.add(new FramedButton(this, game, 101 * (i % 2), 122 + 15 * Math.floor(i / 2), 'optionBack', 'optionFrame', [{
            callback: options[i].callback,
            context: options[i].context,
            arguments: [seeker,this.game,dayManager]
        }], 0x000000, 0xFFFFFF, 0x5C5C5C, 0x111111, 0xAAAAAA));
        this.options[i].text = this.add(new RichText(game, 2 + 101 * (i % 2), 122 + 15 * Math.floor(i / 2), 100, options[i].text, style));
        this.options[i].button.deactivate();
        this.options[i].text.visible = false;
    }

    for (let i = options.length; i < 4; i++) {
        options[i] = {
            callback: function () { },
            context: this,
            arguments: [],
            text: ' HOla'
        }
        this.options[i].button = this.add(new FramedButton(this, game, 101 * (i % 2), 122 + 15 * Math.floor(i / 2), 'optionBack', 'optionFrame', [{
            callback: options[i].callback,
            context: options[i].context,
            arguments: [seeker,this.game,dayManager]
        }], 0x000000, 0xFFFFFF, 0x5C5C5C, 0x111111, 0xAAAAAA));
        this.options[i].text = this.add(new RichText(game, 2 + 101 * (i % 2), 122 + 15 * Math.floor(i / 2), 100, options[i].text, style));
        this.options[i].button.deactivate();
        this.options[i].text.visible = false;
    }

    this.imageFrame = this.add(new Phaser.Sprite(game, 2, 42, image));

    this.day = this.add(new ReactiveRichText(game, 26, 27, 40, textFunctions.Fun(function () {
        return this.day.toString();
    }, seeker), style4, this, seeker.stats.onPerceptionChange));

    this.pauseButton = this.add(new FramedButton(this, game, 190, 2, 'pauseButton', 'pauseButtonFrame',[{callback: EventHUD.prototype._pause, context:this, arguments:[]}],0xFFFFFF,0x000000,0x676767, 0x222222, 0x676767));
    this._pause = false;
}

EventHUD.prototype = Object.create(Phaser.Group.prototype);
EventHUD.prototype.constructor = EventHUD;

//[{text:, callback:}]
EventHUD.prototype.reset = function (text, options) {
    this.slider.move(-100);
    this.text.text = text;
    this.slider.onEnd.dispose();

    for (let i = 0; i < 4 && i < options.length; i++) {
        this.slider.onEnd.add(function (i) {
            this.options[i].button.activate();
            this.options[i].text.visible = true;
        }, this, 0, i);

        this.options[i].button._callbacks[0] = {
            callback: options[i].callback,
            context: options[i].context,
            arguments: options[i].arguments
        };
        this.options[i].text.text = options[i].text;
        this.options[i].button.deactivate();
        this.options[i].text.visible = false;
    }

    for(let i = options.length; i < 4; i++) {
        this.options[i].text.text = '';
        this.options[i].button.deactivate();
        this.options[i].text.visible = false;
    }
}

EventHUD.prototype._pause = function(){
    if(this._pause){
    } else {
    }
    this._pause = !this._pause;
}

module.exports = EventHUD;


},{"../../assets/fonts/style.json":6,"./framedButton":33,"./healthBar":34,"./reactiveRichText":41,"./richText":42,"./scrollText":43,"./slider":46,"./textFunctions":49}],33:[function(require,module,exports){



//callBack ={function, context, arguments}

var FramedButton = function (parent, game, x, y, buttonKey, frameKey, callbacks,
    frameColorOver, frameColorOut, frameColorDown, frameColorUp, frameColorDisabled,
    overButtonFrame = 0, outButtonFrame = 0, downButtonFrame = 0, upButtonFrame = 0, disabledButtonFrame = 0,
    overFrameFrame = 0, outFrameFrame = 0, downFrameFrame = 0, upFrameFrame = 0, disabledFrameFrame = 0) {

    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;

    this._frame = this.add(new Phaser.Image(game, 0, 0, frameKey));

    this._button = this.add(new Phaser.Button(game, 0, 0, buttonKey, function () { }, null, overButtonFrame, outButtonFrame, downButtonFrame, upButtonFrame));
    
    this._pressed = false;

    this._callbacks = callbacks;

    this._disabledButtonFrame = disabledButtonFrame;

    this._frameColorOver = frameColorOver;
    this._frameColorOut = frameColorOut;
    this._frameColorDown = frameColorDown;
    this._frameColorDisabled = frameColorDisabled;
    this._overFrameFrame = overFrameFrame;
    this._outFrameFrame = outFrameFrame;
    this._downFrameFrame = downFrameFrame;
    this._upFrameFrame = upFrameFrame;
    this._frameColorUp = frameColorUp;
    this._disabledFrameFrame = disabledFrameFrame;

    this.onInputDown = new Phaser.Signal();
    this.onInputOut = new Phaser.Signal();
    this.onInputOver = new Phaser.Signal();
    this.onInputUp = new Phaser.Signal();
    this.onInputDisable = new Phaser.Signal();

    this._button.onInputDown.add(this._down, this);
    this._button.onInputOut.add(this._out, this);
    this._button.onInputOver.add(this._over, this);
    
    this._button.onInputUp.add(this._up, this);

    this._button.input.useHandCursor = false;
    this.activate();

}


FramedButton.prototype = Object.create(Phaser.Group.prototype);
FramedButton.prototype.constructor = FramedButton;

FramedButton.prototype._down = function () {
    if (this._button.input.enabled) {
        this.changeFrameFrame('Down');
        this._pressed = true;
        this.onInputDown.dispatch();
    }
}

FramedButton.prototype._out = function () {
    if (this._button.input.enabled) {
        if (!this._pressed) {
            this.changeFrameFrame( 'Out');
        }
        this.onInputOut.dispatch();
    }
}

FramedButton.prototype._over = function () {
    if (this._button.input.enabled) {
        if (!this._pressed) {
            this.changeFrameFrame( 'Over');
        }
        this.onInputOver.dispatch();
    }
}

FramedButton.prototype._up = function () {
    if (this._button.input.enabled) {
        this.changeFrameFrame( 'Up');
        if (this._button.input.checkPointerOver(this.game.input.activePointer)) {
            this.changeFrameFrame( 'Over');
            this._do();
            this.onInputUp.dispatch(true);
        } else {
            this.changeFrameFrame( 'Out');
            this.onInputUp.dispatch(false);
        }
        this._pressed = false;
        
    }
}

FramedButton.prototype._do = function () {
    if (this._pressed) {
        this._callbacks.forEach(function (callback) {
            callback.callback.call(callback.context, ...callback.arguments);
        }, this);
    }
}

FramedButton.prototype.activate = function () {
    this._button.input.enabled = true;
    if (this._button.input.checkPointerOver(this.game.input.activePointer)) {
        this.changeFrameFrame('Over');
    } else {
        this.changeFrameFrame( 'Out');
    }
}

FramedButton.prototype.deactivate = function () {
    this.changeFrameFrame('Disabled');
    this._button.input.enabled = false;
    if (typeof this._disabledButtonFrame === 'number') {
        this._button.frame = this._disabledButtonFrame;
    } else {
        this._button.frameName = this._disabledButtonFrame;
    }
    this.onInputDisable.dispatch();
}

FramedButton.prototype.changeFrameFrame = function (frame) {

    this._frame.tint = this['_frameColor' + frame];
    frame = this['_' + frame.toLowerCase() + 'FrameFrame'];
    if (typeof frame === 'number') {
        this._frame.frame = frame;
    } else {
        this._frame.frameName = frame;
    }
}

module.exports = FramedButton;
},{}],34:[function(require,module,exports){
'use strict'

var Bar = require('./bar.js');
var ReactiveContinuousBar = require('./reactiveContinuousBar.js');
var ReactiveRichText = require('./reactiveRichText.js');
var textFunction = require('./textFunctions')

var hpPercentage = function () {
        return this.hp / this.stats.health * 100;
}

var HealthBar = function (game, x, y, character, voidKey, healKey, damageKey, healthKey, frameKey, style, delay, speed, voidFrame, healFrame, damageFrame, healthFrame, parent) {
        Phaser.Group.call(this, game, parent);
        this.x = x;
        this.y = y;
        this.voidBar = this.add(new Bar(game, this, 0, 0, voidKey, voidFrame));
        this.damageBar = this.add(new ReactiveContinuousBar(game, this, 0, 0, damageKey, hpPercentage, character, character.onHpChange, delay, delay, speed, speed, damageFrame));
        this.healBar = this.add(new ReactiveContinuousBar(game, this, 0, 0, healKey, hpPercentage, character, character.onHpChange, 0, 0, speed, speed, healFrame));
        this.healthBar = this.add(new ReactiveContinuousBar(game, this, 0, 0, healthKey, hpPercentage, character, character.onHpChange, 0, delay, speed, speed, healthFrame));
        this.hpText = this.add(new ReactiveRichText(game, 0, -2, this.voidBar.width, [textFunction.VariableNumber(function () { return this.hp; }, character, speed),
                '/',
        textFunction.VariableNumber(function () { return this.stats.health }, character, 1000)], style, this, [character.onHpChange, character.stats.onHealthChange]));
        this.frame = this.add(new Phaser.Sprite(game, -1, -1, frameKey));
        
}

HealthBar.prototype = Object.create(Phaser.Group.prototype);
HealthBar.prototype.constructor = HealthBar;


module.exports = HealthBar;
},{"./bar.js":25,"./reactiveContinuousBar.js":40,"./reactiveRichText.js":41,"./textFunctions":49}],35:[function(require,module,exports){
'use strict'

var WindowFrame = require('./windowFrame');
var ScrollText = require('./scrollText');
var RichText = require('./richText');

var InfoWindow = function(parent, game, x, y, width, height, windowKey,  text, style) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    this._window = this.add(new WindowFrame(game,this,0,0,width,height,windowKey));
    this._text = this.add(new ScrollText(game, this, 1.5 *this._window._tileWidth, this._window._tileHeight,
        width - 4 * this._window._tileWidth, height - 2 * this._window._tileHeight,
        text, style));
}

InfoWindow.prototype = Object.create(Phaser.Group.prototype);
InfoWindow.prototype.constructor = InfoWindow;

module.exports = InfoWindow;
},{"./richText":42,"./scrollText":43,"./windowFrame":50}],36:[function(require,module,exports){
'use strict'
//var ActionButton = require('./actionButton');
//var HealthBar = require('./healthBar');
var ReactiveRichText = require('./reactiveRichText');
var textFunctions = require('./textFunctions');
var FramedButton = require('./framedButton')

/*var deactivateActionButton = function () {
  this._button.onInputOver.removeAll();
  this._button.onInputOut.removeAll();
  this._button.onInputDown.removeAll();
  this._button.onInputUp.removeAll();
  this._rechargeEvent.active = false;
  this._text.visible = false;
  this._bar.percentageFunction = function () { return 0; };
  this._bar.percentage = 0;
  this.deactivate()
};*/

var MainMenuHUD = function (game, parent, x, y, selector) {
  Phaser.Group.call(this, game, parent, selector);
  this.x = x;
  this.y = y;
  let style = { "font": "Minecraft", "fill": "#FFFFFF", "fontSize": 10, "align": 'center' };
  var style2 = { font: 'Minecraft', fill: '#000000', fontSize: 10 };
  var style3 = { font: 'Minecraft', fill: '#000000', fontSize: 10, align: 'center' };

  this.CreationScene = function () {
    this.game.add.audio('button', 0.1).play();
    //fadeOut
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('creation'); }, parent);
  };

  this.EventScene = function () {
    this.game.add.audio('button', 0.1).play();
    //fadeOut
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('event'); }, parent);
  };

  this.CombatScene = function () {
    this.game.add.audio('button', 0.1).play();
    //fadeOut
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('combat', true, false, 'hola', 'semos', 'ah'); }, parent);
  };

  this.CreditsScene = function () {
    this.game.add.audio('button', 0.1).play();
    //fadeOut
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('credits'); }, parent);
  };

  this.SettingsScene = function () {
    this.game.add.audio('button', 0.1).play();
    //fadeOut
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('settings') }, parent);
  };

  this.ShopScene = function () {
    this.game.add.audio('button', 0.1).play();
    //fadeOut
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('shop') }, parent);
  };

  this.creditsButton = this.add(new FramedButton(this, game, 153, 0, 'tavern', 'tavernFrame', [{ callback: function () { this.CreditsScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767, 1, 0, 1));
  this.creditsButton._button.input.pixelPerfectClick = true;
  this.creditsButton._button.input.pixelPerfectOver = true;
  this.shopButton = this.add(new FramedButton(this, game, 0, 87, 'shop', 'shopFrame', [{ callback: function () { this.ShopScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767, 1, 0, 1, 0, 2));
  this.shopButton._button.input.pixelPerfectClick = true;
  this.shopButton._button.input.pixelPerfectOver = true;
  this.settingsButton = this.add(new FramedButton(this, game, 0, 27, 'settings', 'settingsFrame', [{ callback: function () { this.SettingsScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767, 1, 0, 1));
  this.settingsButton._button.input.pixelPerfectClick = true;
  this.settingsButton._button.input.pixelPerfectOver = true;
  this.doorButton = this.add(new FramedButton(this, game, 174, 39, 'door', 'doorFrame', [{ callback: function () { this.CombatScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767, 1, 0, 1, 0, 2));
  this.doorButton._button.input.pixelPerfectClick = true;
  this.doorButton._button.input.pixelPerfectOver = true;
  this.crystalButton = this.add(new FramedButton(this, game, 81, 9, 'crystal', 'crystalFrame', [{ callback: function () { this.CreationScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767, 1, 0, 1));
  this.crystalButton._button.input.pixelPerfectClick = true;
  this.crystalButton._button.input.pixelPerfectOver = true;

  //version
  this.game.add.richText(148, 139, 80, "v 1.0", style);

  //textos de buttons
  this.game.add.richText(10, 70, 80, "OPCIONES", style);
  this.shopText = this.game.add.richText(28, 119, 80, "TIENDA", style);
  this.game.add.richText(60, 39, 80, "NUEVA PARTIDA", style);
  this.game.add.richText(120, 79, 80, "NUEVA BUSQUEDA", style);
  this.game.add.richText(128, 20, 80, "CREDITOS", style);

  //tienda cerrada por reformas. Disculpen las molestias! ^w^
  if (true){
    this.shopButton.deactivate();
    this.shopText.setAll('tint', 0x888888);
  }
  


  this.shopButton.onInputOver.add(function () { selector.frame = 1; });
  this.shopButton.onInputOut.add(function () { selector.frame = 0; });
  this.shopButton.onInputDown.add(function () { selector.frame = 2; });
  this.shopButton.onInputUp.add(function (over) { 
    if(over)
      selector.frame = 1;
    else
    selector.frame = 0;});

  this.settingsButton.onInputOver.add(function () { selector.frame = 1; });
  this.settingsButton.onInputOut.add(function () { selector.frame = 0; });
  this.settingsButton.onInputDown.add(function () { selector.frame = 2; });
  this.settingsButton.onInputUp.add(function (over) { 
    if(over)
      selector.frame = 1;
    else
    selector.frame = 0;});

  this.doorButton.onInputOver.add(function () { selector.frame = 1; });
  this.doorButton.onInputOut.add(function () { selector.frame = 0; });
  this.doorButton.onInputDown.add(function () { selector.frame = 2; });
  this.doorButton.onInputUp.add(function (over) { 
    if(over)
      selector.frame = 1;
    else
    selector.frame = 0;});

  this.crystalButton.onInputOver.add(function () { selector.frame = 1; });
  this.crystalButton.onInputOut.add(function () { selector.frame = 0; });
  this.crystalButton.onInputDown.add(function () { selector.frame = 2; });
  this.crystalButton.onInputUp.add(function () { selector.frame = 1; });
  this.crystalButton.onInputUp.add(function (over) { 
    if(over)
      selector.frame = 1;
    else
    selector.frame = 0;});

  this.creditsButton.onInputOver.add(function () { selector.frame = 1; });
  this.creditsButton.onInputOut.add(function () { selector.frame = 0; });
  this.creditsButton.onInputDown.add(function () { selector.frame = 2; });
  this.creditsButton.onInputUp.add(function (over) { 
    if(over)
      selector.frame = 1;
    else
    selector.frame = 0;});

  //var object1 = seeker.items[0];
  //var object2 = seeker.items[1];





  //this.item2Button = this.add(new FramedButton(this, game, 14,139, seeker.items[1].key,'itemFrame', [{callback:function(){seeker.use(object2.name, enemy);}, context:this, arguments:[]}], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));


  //this.healthBar = this.add(new HealthBar(game, 2, 121, seeker, 'emptyBar', 'healBar', 'damageBar', 'healthBar', 'frameBar', style, 1000, 100, this));

  /*this.name = this.add(new ReactiveRichText(game, 3, -1, 80, textFunctions.Fun(function () {
    return this.name;
  }, seeker), style2, this, seeker.onNameChange));
 
    this.defenseIcon = this.add(new Phaser.Sprite(game,3,14,'healthIcon'));
    this.defenseNumber = this.add(new ReactiveRichText(game,15,13,11,textFunctions.Fun(function() {
        return this.stats.defense.toString();
    }, seeker), style2, this, seeker.stats.onDefenseChange));
 
  this.damageIcon = this.add(new Phaser.Sprite(game, 27, 14, 'damageIcon'));
  this.damageNumber = this.add(new ReactiveRichText(game, 39, 13, 11, textFunctions.VariableNumber(function () { return this.stats.damage;}
  , seeker, 100), style2, this, [seeker.stats.onDamageChange]));
 
  this.defenseIcon = this.add(new Phaser.Sprite(game, 51, 14, 'defenseIcon'));
  this.defenseNumber = this.add(new ReactiveRichText(game, 63, 13, 11, textFunctions.Fun(function () {
    return this.stats.defense.toString();
  }, seeker), style2, this, seeker.stats.onDefenseChange));
 
  this.speedIcon = this.add(new Phaser.Sprite(game, 13, 24, 'speedIcon'));
  this.speedNumber = this.add(new ReactiveRichText(game, 25, 23, 11, textFunctions.Fun(function () {
    return this.stats.speed.toString();
  }, seeker), style2, this, seeker.stats.onSpeedChange));
 
  this.perceptionIcon = this.add(new Phaser.Sprite(game, 38, 24, 'perceptionIcon'));
  this.perceptionNumber = this.add(new ReactiveRichText(game, 50, 23, 11, textFunctions.Fun(function () {
    return this.stats.perception.toString();
  }, seeker), style2, this, seeker.stats.onPerceptionChange));
 
  this.gemIcon = this.add(new Phaser.Sprite(game, 68, 1, 'gemIcon'));
  this.gemNumber = this.add(new ReactiveRichText(game, 50, -1, 15, textFunctions.Fun(function () {
    return this.gems.toString();
  }, seeker), style2, this, seeker.stats.onPerceptionChange));
 
  this.day = this.add(new ReactiveRichText(game, 80, -1, 40, textFunctions.Fun(function () {
    return this.stats.perception.toString();
  }, seeker), style3, this, seeker.stats.onPerceptionChange));*/

  /*this.villageGemIcon = this.add(new Phaser.Image(game, 110-3, 18, 'villageGemIcon'));
    this.villageGemNumber = this.add(new ReactiveRichText(game, 90-3, 16, 15, textFunctions.Fun(function () {
    return this.totalGems.toString();//hay que cambiarlo
    }, seeker), style2, this, seeker.stats.onPerceptionChange));//cambiar onPerceptionChange
 
    this.populationIcon = this.add(new Phaser.Image(game, 110-3, 28, 'populationIcon'));
    this.populationNumber = this.add(new ReactiveRichText(game, 90-3, 26, 15, textFunctions.Fun(function () {
    return this.population.toString();//hay que cambiarlo
    }, seeker), style2, this, seeker.stats.onPerceptionChange));//cambiar onPerceptionChange*/

  //this.game.add.optionMenu([['pauseButton', 190, 2, 'pauseButton', this.EventScene, this, {}]]);
}

MainMenuHUD.prototype = Object.create(Phaser.Group.prototype);
MainMenuHUD.prototype.constructor = MainMenuHUD;

module.exports = MainMenuHUD;
},{"./framedButton":33,"./reactiveRichText":41,"./textFunctions":49}],37:[function(require,module,exports){
'use strict';

var ButtonMenu = require('./buttonMenu');
var WindowFrame = require('./windowFrame');

var OptionMenu = function (game, x, y, width, height, buttonsMenu, windowSprite, parent) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    this.add(new WindowFrame(game, this, 0, 0, width, height, windowSprite));
    buttonsMenu.forEach(element => {
        let b = this.add(new ButtonMenu(this, this.game, ...element.slice(0, element.length - 1)));
        b.onInputOver.add(this.over, this, [b]);
    }, this);
    buttonsMenu.forEach(element => {
        let child = this.children.find(function (element2) { return element2.name === element[0] });

        child.leftButton =
            this.children.find(function (element2) { return element2.name === element[element.length - 1].leftButton });
        child.rightButton =
            this.children.find(function (element2) { return element2.name === element[element.length - 1].rightButton });
        child.upButton =
            this.children.find(function (element2) { return element2.name === element[element.length - 1].upButton });
        child.downButton =
            this.children.find(function (element2) { return element2.name === element[element.length - 1].downButton });
    }, this);
    this.currentButton = this.children[0]; //currentButton no está bien asignado
}

OptionMenu.prototype = Object.create(Phaser.Group.prototype);
OptionMenu.prototype.constructor = OptionMenu;


OptionMenu.prototype.goLeft = function() {
    if (this.currentButton.goLeft() !== undefined) {
        this.currentButton.onInputOut.dispatch();
        this.currentButton = this.currentButton.goLeft();
        this.currentButton.onInputOver.dispatch();
    }
}
OptionMenu.prototype.goRight = function() {
    if (this.currentButton.goRight() !== undefined) {
        this.currentButton.onInputOut.dispatch();
        this.currentButton = this.currentButton.goRight();
        this.currentButton.onInputOver.dispatch();
    }
}
OptionMenu.prototype.goUp = function() {
    if (this.currentButton.goUp() !== undefined) {
        this.currentButton.onInputOut.dispatch();
        this.currentButton = this.currentButton.goUp();
        this.currentButton.onInputOver.dispatch();
    }
}
OptionMenu.prototype.goDown = function() {
    if (this.currentButton.goDown() !== undefined) {
        this.currentButton.onInputOut.dispatch();
        this.currentButton = this.currentButton.goDown();
        this.currentButton.onInputOver.dispatch();
    }
}

OptionMenu.prototype.over = function(button) {
    if (this.children.includes(button) && this.currentButton !== button) {
        this.currentButton.onInputOut.dispatch();
        this.currentButton = button;
    }
}

OptionMenu.prototype.select = function() {
    this.currentButton.select();
}
OptionMenu.prototype.back = function() {
    this.buttons.forEach(element => {
        element.deactivate();
    });
}

OptionMenu.prototype.enter = function() {
    this.buttons.forEach(element => {
        element.activate();
    });
}

module.exports = OptionMenu;
},{"./buttonMenu":26,"./windowFrame":50}],38:[function(require,module,exports){
'use strict'

var Bar = require('./bar.js');

var ReactiveBar = function (game, parent, x, y, key, percentageFunction, functionContext, signal, frame = null) {
    Bar.call(this, game, parent, x, y, key, frame);
    this.percentageFunction = percentageFunction.bind(functionContext);
    signal?signal.add(this.changePercentage, this, 0):null;
    ReactiveBar.prototype.changePercentage.call(this);
}

ReactiveBar.prototype = Object.create(Bar.prototype);
ReactiveBar.prototype.constructor = ReactiveBar;

ReactiveBar.prototype.changePercentage = function () {
    let p = this.percentageFunction();

    this.percentage = isNaN(p)?100:p;
}

module.exports = ReactiveBar;
},{"./bar.js":25}],39:[function(require,module,exports){
'use strict'

var CircleBar = require('./circleBar');

var ReactiveCircleBar = function(game,parent, x, y, radius, angles, colors, alphas, antiClockWise, segments, initialAngle, percentageFunction, functionContext, signal){
    CircleBar.call(this, game,parent, x, y, radius, angles, colors, alphas, antiClockWise, segments, initialAngle);
    this.percentageFunction = percentageFunction.bind(functionContext);
    signal?signal.add(this.changePercentage,this,0):null;
    ReactiveCircleBar.prototype.changePercentage.call(this);
}

ReactiveCircleBar.prototype = Object.create(CircleBar.prototype);
ReactiveCircleBar.prototype.constructor = ReactiveCircleBar;

ReactiveCircleBar.prototype.changePercentage = function () {
    let p = this.percentageFunction();

    this.percentage = isNaN(p)?100:p;
}

module.exports = ReactiveCircleBar;
},{"./circleBar":27}],40:[function(require,module,exports){
'use strict'

var ReactiveBar = require('./reactiveBar.js');

var ReactiveContinuousBar = function (game, parent, x, y, key, percentageFunction, functionContext, signal, decreaseDelay, increaseDelay, decreaseSpeed, increaseSpeed, frame = null) {
    ReactiveBar.call(this, game, parent, x, y, key, percentageFunction, functionContext, signal, frame);
    this.increasing = false;
    this.decreasing = false;
    this._decreaseDelay = decreaseDelay;
    this._increaseDelay = increaseDelay;
    this._increaseSpeed = this.bar.width / increaseSpeed;
    this._decreaseSpeed = this.bar.width / decreaseSpeed;
    this.timer = null;
}

ReactiveContinuousBar.prototype = Object.create(ReactiveBar.prototype);
ReactiveContinuousBar.prototype.constructor = ReactiveContinuousBar;

ReactiveContinuousBar.prototype.changePercentage = function () {
    if (this.percentageFunction() > this.percentage) {
        if (!this.increasing) {
            if (this.timer !== null) {
                this.timer.stop(true);
            }
            this.decreasing = false;
            this.increasing = true;
            this.timer = this.game.time.create();
            this.timer.add(this._increaseDelay, this.reChangePercentage, this);
            this.timer.start();
        }
    } else {
        if (!this.decreasing) {
            if (this.timer !== null) {
                this.timer.stop(true);
            }
            this.increasing = false;
            this.decreasing = true;
            this.timer = this.game.time.create();
            this.timer.add(this._decreaseDelay, this.reChangePercentage, this);
            this.timer.start();
        }
    }
}

ReactiveContinuousBar.prototype.reChangePercentage = function () {
    if (this.increasing) {
        if (this.percentage < this.percentageFunction()) {
            this.timer = this.game.time.create();
            this.percentage += 100 / this.bar.width;
            this.timer.add(this._increaseSpeed, this.reChangePercentage, this);
            this.timer.start();
        } else {
            this.increasing = false;
            this.percentage = this.percentageFunction();
            this.timer = null;
        }
    } else if (this.decreasing) {
        if (this.percentage > this.percentageFunction()) {
            this.timer = this.game.time.create();
            this.percentage -= 100 / this.bar.width;
            this.timer.add(this._decreaseSpeed, this.reChangePercentage, this);
            this.timer.start();
        } else {
            this.decreasing = false;
            this.percentage = this.percentageFunction();
            this.timer = null;
        }
    }

}

module.exports = ReactiveContinuousBar;
},{"./reactiveBar.js":38}],41:[function(require,module,exports){
'use strict';

var RichText = require('./richText.js');

var ReactiveRichText = function (game, x, y, lineWidth, text, style, parent, signals) {
    RichText.call(this, game, x, y, lineWidth, text, style, parent);
    for (let i = 0; i < signals.length; i++) {
        signals[i]?signals[i].add(this.write, this, 0):null;
    }
    this.write();
}

ReactiveRichText.prototype = Object.create(RichText.prototype);
ReactiveRichText.prototype.constructor = ReactiveRichText;

module.exports = ReactiveRichText;
},{"./richText.js":42}],42:[function(require,module,exports){
'use strict';


var RichText = function (game, x, y, lineWidth, text, style, parent) {
    Phaser.Group.call(this, game, parent);
    this._protoText = text;
    this.numberOfCharacters = 0;
    this.x = x;
    this.y = y;
    this.xLast = 0;
    this.yLast = 0;
    this.indexFirstParragraphLetter = 0;
    this.align = style.align === undefined ? 'left' : style.align;
    this.styleLast = {
        font: style.font === undefined ? 'Minecraft' : style.font,
        fontStyle: style.fontStyle === undefined ? 'normal' : style.fontStyle,
        fontVariant: style.fontVariant === undefined ? 'normal' : style.fontVariant,
        fontWeight: style.fontWeight === undefined ? 'normal' : style.fontWeight,
        fontSize: style.fontSize === undefined ? 10 : style.fontSize,
        backgroundColor: style.backgroundColor === undefined ? null : style.backgroundColor,
        fill: style.fill === undefined ? '#000000' : style.fill,
        align: 'left',
        boundsAlignH: style.boundsAlignH === undefined ? 'left' : style.boundsAlignH,
        boundsAlignV: style.boundsAlignV === undefined ? 'top' : style.boundsAlignV,
        stroke: style.stroke === undefined ? 'black' : style.stroke,
        strokeThickness: style.strokeThickness === undefined ? 0 : style.strokeThickness,
        wordWrap: style.wordWrap === undefined ? false : style.wordWrap,
        wordWrapWidth: style.wordWrapWidth === undefined ? false : style.wordWrapWidth,
        maxLines: style.maxLines === undefined ? 0 : style.maxLines
    };
    this.lineWidth = lineWidth;
    this.lineHeight = this.styleLast.fontSize;
    this.write();
}

RichText.prototype = Object.create(Phaser.Group.prototype);
RichText.prototype.constructor = RichText;

RichText.prototype.write = function () {
    this.indexFirstParragraphLetter = 0;
    this.removeAll(true);
    this.xLast = 0;
    this.yLast = 0;
    this.numberOfCharacters = 0;
    this.reWrite(this._protoText);
    if (this.children.length !== 0) {
        if (this.align === 'center') {
            let tmpwidth = 0;
            for (let j = this.indexFirstParragraphLetter; j < this.children.length; j++) {
                tmpwidth += this.getChildAt(j).width;
            }
            tmpwidth = (this.lineWidth - tmpwidth) / 2;
            if (this.getChildAt(this.children.length - 1).text === ' ') { tmpwidth += this.getChildAt(this.children.length - 1).width / 2 }
            for (let j = this.indexFirstParragraphLetter; j < this.children.length; j++) {
                this.getChildAt(j).x += tmpwidth;
            }
            this.indexFirstParragraphLetter = this.children.length + 1;
        } else if (this.align === 'right') {
            let tmpwidth = 0;
            for (let j = this.indexFirstParragraphLetter; j < this.children.length; j++) {
                tmpwidth += this.getChildAt(j).width;
            }
            tmpwidth = (this.lineWidth - tmpwidth);
            if (this.getChildAt(this.children.length - 1).text === ' ') { tmpwidth += this.getChildAt(this.children.length - 1).width }
            for (let j = this.indexFirstParragraphLetter; j < this.children.length; j++) {
                this.getChildAt(j).x += tmpwidth;
            }
            this.indexFirstParragraphLetter = this.children.length + 1;
        }
    }
}

RichText.prototype.reWrite = function (proto) {
    if (typeof (proto) === 'string') {
        let presize = this.children.length;
        for (let i = 0; i < proto.length; i++) {
            let a = this.add(new Phaser.Text(this.game, this.xLast, this.yLast, proto.charAt(i), this.styleLast));
            if (proto.charAt(i) === '\n') {
                this.xLast = 0;
                this.yLast += this.lineHeight;
                this.indexFirstParragraphLetter = presize + i + 1;
            } else if (!(proto.charAt(i) === ' ' && this.xLast === 0)) {
                this.xLast += a.width;
                if (this.xLast > this.lineWidth) {
                    if (a.text !== ' ') {
                        let index = Math.min(presize + i-1, this.children.length - 1);
                        let temporalWidth = 0;
                        while (index >= 0 && this.getChildAt(index).text !== ' ') {
                            temporalWidth += this.getChildAt(index).width;
                            index--;
                        }
                        if (index < 0) {
                            index = 0;
                        }
                        if (this.getChildAt(index).text === ' ') {
                            index = Math.min(index + 1, this.children.length - 1);
                        }
                        if (temporalWidth > this.lineWidth) {
                            this.xLast = this.getChildAt(index).x;
                            this.yLast = this.getChildAt(index).y;
                        } else {
                            this.xLast = 0;
                            this.yLast += this.lineHeight;
                        }
                        for (let j = index; j <= presize + i; j++) {
                            if (this.xLast > this.lineWidth) {
                                this.xLast = 0;
                                this.yLast += this.lineHeight;
                            }

                            this.getChildAt(j).x = this.xLast;
                            this.getChildAt(j).y = this.yLast;
                            this.xLast += this.getChildAt(j).width;
                        }
                        if (this.xLast > this.lineWidth) {
                            this.xLast = 0;
                            this.yLast += this.lineHeight;
                        }
                        if (this.align === 'center') {
                            let tmpwidth = 0;
                            for (let j = this.indexFirstParragraphLetter; j < index; j++) {
                                tmpwidth += this.getChildAt(j).width;
                            }
                            tmpwidth = (this.lineWidth - tmpwidth) / 2;
                            if (this.getChildAt(index - 1).text === ' ') { tmpwidth += this.getChildAt(index - 1).width / 2 }
                            for (let j = this.indexFirstParragraphLetter; j < index; j++) {
                                this.getChildAt(j).x += tmpwidth;
                            }

                        } else if (this.align === 'right') {
                            let tmpwidth = 0;
                            for (let j = this.indexFirstParragraphLetter; j < index; j++) {
                                tmpwidth += this.getChildAt(j).width;
                            }
                            tmpwidth = (this.lineWidth - tmpwidth);
                            if (index - 1 >= 0 && this.getChildAt(index - 1).text === ' ') { tmpwidth += this.getChildAt(index - 1).width }
                            for (let j = this.indexFirstParragraphLetter; j < index; j++) {
                                this.getChildAt(j).x += tmpwidth;
                            }
                        }
                        this.indexFirstParragraphLetter = index;
                    } else {
                        if (this.align === 'center') {
                            let tmpwidth = 0;
                            for (let j = this.indexFirstParragraphLetter; j < i; j++) {
                                tmpwidth += this.getChildAt(j).width;
                            }
                            if (this.getChildAt(i - 1).text === ' ') { tmpwidth += this.getChildAt(i - 1).width / 2 }
                            tmpwidth = (this.lineWidth - tmpwidth) / 2;
                            for (let j = this.indexFirstParragraphLetter; j < presize + i; j++) {
                                this.getChildAt(j).x += tmpwidth;
                            }

                        } else if (this.align === 'right') {
                            let tmpwidth = 0;
                            for (let j = this.indexFirstParragraphLetter; j < presize + i; j++) {
                                tmpwidth += this.getChildAt(j).width;
                            }
                            tmpwidth = (this.lineWidth - tmpwidth);
                            if (i - 1 >= 0 && this.getChildAt(presize + i - 1).text === ' ') { tmpwidth += this.getChildAt(presize + i - 1).width }
                            for (let j = this.indexFirstParragraphLetter; j < presize + i; j++) {
                                this.getChildAt(j).x += tmpwidth;
                            }

                        }
                        this.indexFirstParragraphLetter = presize + i + 1;
                        this.xLast = 0;
                        this.yLast += this.lineHeight;
                    }
                }
            }
            this.numberOfCharacters++;
        }
    } else if (typeof (proto) === 'function') {
        proto.apply(this);
    } else if (Array.isArray(proto)) {
        for (let element in proto) {
            this.reWrite(proto[element]);
        }
    }
}

Object.defineProperty(RichText.prototype, 'text',{
    set: function(text) {
        this._protoText = text;
        this.write();
        
    }
});

module.exports = RichText;
},{}],43:[function(require,module,exports){
'use strict'

var ReactiveRichText = require('./reactiveRichText');

var ScrollText = function(game, parent,x,y,width,height,text, style) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    this._width = width;
    this._height = height;
    this._maxHeight = height;
    this._text = this.add(new ReactiveRichText(game,0,0,width,text,style,this, []));
    this._mask = this.add(new Phaser.Graphics(game, 0, 0));
    this._mask.beginFill(0xffffff);
    this._mask.drawRect(0,0,width,height);
    this._mask.endFill();
    this._text.mask = this.mask;
    this.onReachEnd = new Phaser.Signal();
    this.onReachBegin = new Phaser.Signal();
}

ScrollText.prototype = Object.create(Phaser.Group.prototype);
ScrollText.prototype.constructor = ScrollText;

ScrollText.prototype.move = function(percentage) {
    this._text.y = -percentage*(this._text.height - this._maxHeight)/100;
    if(this._text.y >= 0 ) {
        this._text.y = 0;
        this.onReachBegin.dispatch();
    } else if(this._text.y <= this._maxHeight - this._text.height) {
        this._text.y = this._maxHeight - this._text.height;
        this.onReachEnd.dispatch();
    }
    
}

Object.defineProperty(ScrollText.prototype, 'text',{
    set: function(text) {
        this._text.text = text;
        this._text.y = 0;
    }
});
module.exports = ScrollText;

},{"./reactiveRichText":41}],44:[function(require,module,exports){
'use strict'
var ActionButton = require('./actionButton');
var HealthBar = require('./healthBar');
var ReactiveRichText = require('./reactiveRichText');
var textFunctions = require('./textFunctions');
var FramedButton = require('./framedButton')

var deactivateActionButton = function () {
  this._button.onInputOver.removeAll();
  this._button.onInputOut.removeAll();
  this._button.onInputDown.removeAll();
  this._button.onInputUp.removeAll();
  this._rechargeEvent.active = false;
  this._text.visible = false;
  this._bar.percentageFunction = function () { return 0; };
  this._bar.percentage = 0;
  this.deactivate()
};

var SeekerCombatHUD = function (game, parent, x, y, seeker, enemy, selector) {
  Phaser.Group.call(this, game, parent);
  this.x = x;
  this.y = y;
  let style = { "font": "Minecraft", "fill": "#FFFFFF", "fontSize": 10, "align": 'center' };
  var style2 = { font: 'Minecraft', fill: '#000000', fontSize: 10 };
  var style3 = { font: 'Minecraft', fill: '#000000', fontSize: 10, align: 'center' };


  this.blockButton = this.add(new ActionButton(this, game, 44, 132, 'blockIcon', 'actionFrame','blockIcon', [{callback: seeker.block, context: seeker, arguments: []}], 
    function () {
      return (1 - this.block.timeToCoolDown() / this.block.coolDownTime) * 100;
    }, seeker, function () {
    let a = this.block.timeToCoolDown() / 1000;
    if (isNaN(a)) {
      return '';
    } else {
      let t = a.toFixed(1);
      if(t>=0.1)
        return t.toString();
      else
        return '';
    }
  }, seeker, seeker.coolDown.block.onWhile, seeker.coolDown.block.onEnd, 0x5c5c5c, 0xffffff, 0x000000, 0x222222, 0x676767, 0x676767));

  this.attackButton = this.add(new ActionButton(this, game, 25, 132, 'attackIcon', 'actionFrame','attackIcon', [{callback: seeker.attack, context: seeker, arguments:[enemy]}],
   function () {
      return (1 - this.attack.timeToCoolDown() / this.attack.coolDownTime) * 100;
    }, seeker, function () {
    let a = this.attack.timeToCoolDown() / 1000;
    if (isNaN(a)) {
      return '';
    } else {
      let t = a.toFixed(1);
      if(t>=0.1)
        return t.toString();
      else
        return '';
    }
    
  }, seeker, seeker.coolDown.attack.onWhile, seeker.coolDown.attack.onEnd, 0x5c5c5c, 0xffffff, 0x000000, 0x222222, 0x676767, 0x676767));

  this.ultimateButton = this.add(new ActionButton(this, game, 64, 132, 'ultimateIcon', 'actionFrame','ultimateIcon', [{callback: seeker.attack, context: seeker, arguments:[enemy]}],
   function () {
      return (1 - this.attack.timeToCoolDown() / this.attack.coolDownTime) * 100;
    }, seeker, function () {
    let a = this.attack.timeToCoolDown() / 1000;
    if (isNaN(a)) {
      return '';
    } else {
      let t = a.toFixed(1);
      if(t>=0.1)
        return t.toString();
      else
        return '';
    }
  }, seeker, seeker.coolDown.attack.onWhile, seeker.coolDown.attack.onEnd, 0x5c5c5c, 0xffffff, 0x000000, 0x222222, 0x676767, 0x676767));

  var object1 = seeker.items[0];
  var object2 = seeker.items[1];
  if(object1!==undefined){
  this.item1Button = this.add(new ActionButton(this, game, 2,139, 'emptyItem','itemFrame',seeker.items[0].key, [{callback:function(){seeker.use(object1.name, enemy);}, context:this, arguments:[]}],
  function(){return 100;}, this, function(){return '';}, this, object1.onUse, object1.onUse, 0x5c5c5c, 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));
  object1.onUse.add(deactivateActionButton, this.item1Button);
  seeker.onDeath.add(deactivateActionButton, this.item1Button);
  enemy.onDeath.add(deactivateActionButton, this.item1Button);
} else {
  this.item1Button = this.add(new ActionButton(this, game, 2,139, 'emptyItem','itemFrame','emptyItem', [],
  function(){return 100;}, this, function(){return '';}, this, null, null, 0x5c5c5c, 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));
  deactivateActionButton.apply(this.item1Button);
}
  

if(object2!==undefined){
  this.item2Button = this.add(new ActionButton(this, game, 13,139, 'emptyItem','itemFrame', seeker.items[1].key, [{callback:function(){seeker.use(object2.name, enemy);}, context:this, arguments:[]}], 
  function(){return 100;}, this, function(){return '';}, this, object2.onUse, object2.onUse, 0x5c5c5c, 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));
  object2.onUse.add(deactivateActionButton, this.item2Button);
  seeker.onDeath.add(deactivateActionButton, this.item2Button);
  enemy.onDeath.add(deactivateActionButton, this.item2Button);
} else {
  this.item2Button = this.add(new ActionButton(this, game, 13,139, 'emptyItem','itemFrame','emptyItem', [],
  function(){return 100;}, this, function(){return '';}, this, null, null, 0x5c5c5c, 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));
  deactivateActionButton.apply(this.item2Button);
}

  this.blockButton._callbacks.push({ callback: this.attackButton.deactivate, context: this.attackButton, arguments: [] });
  this.blockButton._callbacks.push({ callback: this.blockButton.deactivate, context: this.blockButton, arguments: [] });
  this.blockButton._callbacks.push({ callback: this.blockButton.deactivate, context: this.ultimateButton, arguments: [] });
  this.attackButton._callbacks.push({ callback: this.blockButton.deactivate, context: this.blockButton, arguments: [] });
  this.attackButton._callbacks.push({ callback: this.attackButton.deactivate, context: this.attackButton, arguments: [] });
  this.attackButton._callbacks.push({ callback: this.attackButton.deactivate, context: this.ultimateButton, arguments: [] });
  this.ultimateButton._callbacks.push({ callback: this.blockButton.deactivate, context: this.blockButton, arguments: [] });
  this.ultimateButton._callbacks.push({ callback: this.attackButton.deactivate, context: this.attackButton, arguments: [] });
  this.ultimateButton._callbacks.push({ callback: this.attackButton.deactivate, context: this.ultimateButton, arguments: [] });
  seeker.onDeath.add(deactivateActionButton, this.blockButton);
  seeker.onDeath.add(deactivateActionButton, this.attackButton);
  seeker.onDeath.add(deactivateActionButton, this.ultimateButton);
  enemy.onDeath.add(deactivateActionButton, this.attackButton);
  enemy.onDeath.add(deactivateActionButton, this.blockButton);
  enemy.onDeath.add(deactivateActionButton, this.ultimateButton);



  this.healthBar = this.add(new HealthBar(game, 2, 121, seeker, 'emptyBar', 'healBar', 'damageBar', 'healthBar', 'frameBar', style, 1000, 100, this));

  this.name = this.add(new ReactiveRichText(game, 3, -1, 80, textFunctions.Fun(function () {
    return this.name;
  }, seeker), style2, this, [seeker.onNameChange]));

    this.healthIcon = this.add(new Phaser.Sprite(game,3,14,'healthIcon'));
    this.healthNumber = this.add(new ReactiveRichText(game,15,13,12,textFunctions.Fun(function() {
      if(this.stats.tempHealth > this.stats.health){
        return textFunctions.Color('#00CC00',this.stats.tempHealth.toString());
      } else if (this.stats.tempHealth < this.stats.health){
        return textFunctions.Color('#CC0000',this.stats.tempHealth.toString());
      } else {
        return textFunctions.Color('#000000',this.stats.tempHealth.toString());
      }
    }, seeker), style2, this, [seeker.stats.onHealthChange]));

  this.damageIcon = this.add(new Phaser.Sprite(game, 27, 14, 'damageIcon'));
  this.damageNumber = this.add(new ReactiveRichText(game, 39, 13, 12, textFunctions.Fun(function() {
    if(this.stats.tempDamage > this.stats.damage){
      return textFunctions.Color('#00CC00',this.stats.tempDamage.toString());
    } else if (this.stats.tempDamage < this.stats.damage){
      return textFunctions.Color('#CC0000',this.stats.tempDamage.toString());
    } else {
      return textFunctions.Color('#000000',this.stats.tempDamage.toString());
    }
  }, seeker, 100), style2, this, [seeker.stats.onDamageChange]));

  this.defenseIcon = this.add(new Phaser.Sprite(game, 51, 14, 'defenseIcon'));
  this.defenseNumber = this.add(new ReactiveRichText(game, 63, 13, 12, textFunctions.Fun(function() {
    if(this.stats.tempDefense > this.stats.defense){
      return textFunctions.Color('#00CC00',this.stats.tempDefense.toString());
    } else if (this.stats.tempDefense < this.stats.defense){
      return textFunctions.Color('#CC0000',this.stats.tempDefense.toString());
    } else {
      return textFunctions.Color('#000000',this.stats.tempDefense.toString());
    }
  }, seeker), style2, this, [seeker.stats.onDefenseChange]));

  this.speedIcon = this.add(new Phaser.Sprite(game, 13, 24, 'speedIcon'));
  this.speedNumber = this.add(new ReactiveRichText(game, 25, 23, 12, textFunctions.Fun(function() {
    if(this.stats.tempSpeed > this.stats.speed){
      return textFunctions.Color('#00CC00',this.stats.tempSpeed.toString());
    } else if (this.stats.tempSpeed < this.stats.speed){
      return textFunctions.Color('#CC0000',this.stats.tempSpeed.toString());
    } else {
      return textFunctions.Color('#000000',this.stats.tempSpeed.toString());
    }
  }, seeker), style2, this, [seeker.stats.onSpeedChange]));

  this.perceptionIcon = this.add(new Phaser.Sprite(game, 38, 24, 'perceptionIcon'));
  this.perceptionNumber = this.add(new ReactiveRichText(game, 50, 23, 12, textFunctions.Fun(function() {
    if(this.stats.tempPerception > this.stats.perception){
      return textFunctions.Color('#00CC00',this.stats.tempPerception.toString());
    } else if (this.stats.tempPerception < this.stats.perception){
      return textFunctions.Color('#CC0000',this.stats.tempPerception.toString());
    } else {
      return textFunctions.Color('#000000',this.stats.tempPerception.toString());
    }
  }, seeker), style2, this, [seeker.stats.onPerceptionChange]));

  this.gemIcon = this.add(new Phaser.Sprite(game, 68, 1, 'gemIcon'));
  this.gemNumber = this.add(new ReactiveRichText(game, 50, -1, 15, textFunctions.Fun(function () {
    return this.gems.toString();
  }, seeker), style2, this, [seeker.stats.onPerceptionChange]));

  this.day = this.add(new ReactiveRichText(game, 80, -1, 40, textFunctions.Fun(function () {
    return this.stats.perception.toString();
  }, seeker), style3, this, [seeker.stats.onPerceptionChange]));

  this.villageGemIcon = this.add(new Phaser.Image(game, 110-3, 18, 'villageGemIcon'));
    this.villageGemNumber = this.add(new ReactiveRichText(game, 90-3, 16, 18, textFunctions.Fun(function () {
    return this.totalGems.toString();//hay que cambiarlo
    }, seeker), style2, this, [seeker.stats.onPerceptionChange]));//cambiar onPerceptionChange

    this.populationIcon = this.add(new Phaser.Image(game, 110-3, 28, 'populationIcon'));
    this.populationNumber = this.add(new ReactiveRichText(game, 90-3, 26, 18, textFunctions.Fun(function () {
    return this.population.toString();//hay que cambiarlo
    }, seeker), style2, this, [seeker.stats.onPerceptionChange]));//cambiar onPerceptionChange
}

SeekerCombatHUD.prototype = Object.create(Phaser.Group.prototype);
SeekerCombatHUD.prototype.constructor = SeekerCombatHUD;

SeekerCombatHUD.prototype.freeze = function() {
  this.attackButton._button.inputEnabled = false;
  this.blockButton._button.inputEnabled = false;
  this.ultimateButton._button.inputEnabled = false;
  this.item1Button._button.inputEnabled = false;
  this.item2Button._button.inputEnabled = false;
}

SeekerCombatHUD.prototype.unFreeze = function() {
  this.attackButton._button.inputEnabled = true;
  this.blockButton._button.inputEnabled = true;
  this.ultimateButton._button.inputEnabled = true;
  this.item1Button._button.inputEnabled = true;
  this.item2Button._button.inputEnabled = true;
}

module.exports = SeekerCombatHUD;
},{"./actionButton":24,"./framedButton":33,"./healthBar":34,"./reactiveRichText":41,"./textFunctions":49}],45:[function(require,module,exports){
'use strict'

var StatMarker = require('./statMarker');
var RichText = require('./richText');

var ShowCase = function(game, parent, x, y, characters) {
    Phaser.Group.call(this,game,parent);
    
    let style = { "font": "Minecraft", "fill": "#FFFFFF", "fontSize": 10, "align": 'center' };
    let style2 = { font: 'Minecraft', fill: '#000000', fontSize: 10 };

    this.x = x;
    this.y = y;
    this._healthMarker = this.add(new StatMarker(game, this,22,76,2,5,0,'statPoint','emptyStatPoint',0xb60000));
    this._damageMarker = this.add(new StatMarker(game, this,22,91,2,5,0,'statPoint','emptyStatPoint',0xcf6e1a));
    this._defenseMarker = this.add(new StatMarker(game, this,22,106,2,5,0,'statPoint','emptyStatPoint',0x14879f));
    this._speedMarker = this.add(new StatMarker(game, this,22,121,2,5,0,'statPoint','emptyStatPoint',0xe5d40a));
    this._perceptionMarker = this.add(new StatMarker(game, this,22,136,2,5,0,'statPoint','emptyStatPoint',0x4ce742));
    this._characters = characters;
    this._nameText = this.add( new RichText(game, 0, 56, 200, "", style));


    this._attackIcon = this.add(new Phaser.Image(game,64,75+2,''));
    this._attackText = this.add( new RichText(game, 86, 97-24, 110, "", style2, this));
    this._blockIcon = this.add(new Phaser.Image(game,64,100+2,''));
    this._blockText = this.add( new RichText(game,86, 123-24, 110, "", style2, this));
    this._ultimateIcon = this.add(new Phaser.Image(game,64,125+2,''));
    this._ultimateText = this.add( new RichText(game,86, 148-24, 110, "", style2, this));
    this._image = this.add(new Phaser.Image(game,62,-70,''));
    this._reemplaceImage = this.add(new Phaser.Image(game,-80,-70,''));
    this._current = 0;
    this._image.loadTexture('seeker'+Object.keys(this._characters)[this._current]+'Animations');
    
    this.onBeginRotation = new Phaser.Signal();
    this.onEndRotation = new Phaser.Signal();
    ShowCase.prototype.showCharacter.call(this, Object.keys(this._characters)[this._current]);
}

ShowCase.prototype = Object.create(Phaser.Group.prototype);
ShowCase.prototype.constructor = ShowCase;

ShowCase.prototype.rotate = function(direction) {
    if(direction!==0){
        this.onBeginRotation.dispatch();
        let newdirection = direction<0?direction+Object.keys(this._characters).length: direction;
        let oldS = Object.keys(this._characters)[this._current];
        this._current = (this._current+newdirection)%Object.keys(this._characters).length;
        let newS = Object.keys(this._characters)[this._current];
        this._image.loadTexture('seeker'+newS+'Siluette');
        this._image.x = direction > 0 ? -80 : 230;
        this._reemplaceImage.loadTexture('seeker'+oldS+'Siluette');
        this._reemplaceImage.x = 62;
        this.game.add.tween(this._image).to({x:[direction > 0 ? -80 : 230,62]}, 400,"Sine.easeInOut", true, 0);
        this.game.add.tween(this._reemplaceImage).to({x:[62,direction > 0 ? 230 : -80]}, 400,"Sine.easeInOut", true, 0).onComplete.
        add(function(){
            ShowCase.prototype.showCharacter.call(this, Object.keys(this._characters)[this._current]);
            this.onEndRotation.dispatch();
        }, this);
    }
}

ShowCase.prototype.showCharacter = function(character) {
    this._nameText.text = character.toUpperCase();
    if(this._characters[character].avaliable) {
        this._attackIcon.loadTexture(this._characters[character].attack.icon);
        this._attackText.text = this._characters[character].attack.description;
        this._blockIcon.loadTexture(this._characters[character].block.icon);
        this._blockText.text = this._characters[character].block.description;
        this._ultimateIcon.loadTexture(this._characters[character].ultimate.icon);
        this._ultimateText.text = this._characters[character].ultimate.description;
        this._image.loadTexture('seeker'+character+'Animations');
        this._healthMarker.currentPoints = this._characters[character].stats.health;
        this._damageMarker.currentPoints = this._characters[character].stats.damage;
        this._defenseMarker.currentPoints = this._characters[character].stats.defense;
        this._speedMarker.currentPoints = this._characters[character].stats.speed;
        this._perceptionMarker.currentPoints = this._characters[character].stats.perception;
    } else {

        this._attackIcon.loadTexture('blockedIcon');
        this._attackText.text = '?????\n?????';
        this._blockIcon.loadTexture('blockedIcon');
        this._blockText.text = '?????\n?????';
        this._ultimateIcon.loadTexture('blockedIcon');
        this._ultimateText.text = '?????\n?????';
        this._image.loadTexture('seeker'+character+'Siluette');
        this._healthMarker.currentPoints = 0;
        this._damageMarker.currentPoints = 0;
        this._defenseMarker.currentPoints = 0;
        this._speedMarker.currentPoints = 0;
        this._perceptionMarker.currentPoints = 0;
    }
}

ShowCase.prototype.isAvaliable = function(){
    return this._characters[Object.keys(this._characters)[this._current]].avaliable;
}

ShowCase.prototype.character = function() {
    return this._characters[Object.keys(this._characters)[this._current]];
}

module.exports = ShowCase;
},{"./richText":42,"./statMarker":48}],46:[function(require,module,exports){
'use strict'

var SliderImage = require('./sliderImage');


var Slider = function (game, parent, x, y, keyContiner, keySlider, height, sliderHeight, offsetSlider) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    this._container = this.add(new SliderImage(game, this, 0, 0, keyContiner, height));
    this._slider = this.add(new SliderImage(game, this, 0, offsetSlider, keySlider, sliderHeight));
    
    this._offset = offsetSlider;
    this._drag = this.add( new Phaser.Image(game, 0, offsetSlider,  keySlider));
    this._drag.height = this._slider.height;
    this._drag.renderable = false;
    this._drag.inputEnabled = true
    this._drag.input.enableDrag();
    this._drag.input.setDragLock(false, true);
    this._drag.events.onDragUpdate.add(function() {
        if(this._drag.y-this._offset <= 0){
            this._drag.y = this._offset;
            this.onBegin.dispatch();
        } else if(this._drag.y-this._offset >= this._container.height - 2 * this._offset - this._slider.height) {
            this._drag.y=this._offset + this._container.height - 2 * this._offset - this._slider.height;
            this.onEnd.dispatch();
        }
        this._slider.x = this._drag.x;
        this._slider.y = this._drag.y;
        this.onChange.dispatch((this._slider.y - this._offset) / (this._container.height - 2 * this._offset - this._slider.height) * 100);
    }, this);
    this.onBegin = new Phaser.Signal();
    this.onEnd = new Phaser.Signal();
    this.onChange = new Phaser.Signal();
}

Slider.prototype = Object.create(Phaser.Group.prototype);
Slider.prototype.constructor = Slider;

Slider.prototype.move = function (movement) {
    this._slider.y += movement * (this._container.height - 2 * this._offset - this._slider.height) / 100;
    if (this._slider.y <= this._container.y) {
        this._drag.y = this._offset;
        this.onBegin.dispatch();
        this._slider.y = this._container.y;
    } else if (this._slider.y >= this._container.y + this._container.height - 2 * this._offset - this._slider.height) {
        this._drag.y=this._offset + this._container.height - 2 * this._offset - this._slider.height;
        this.onEnd.dispatch();
        this._slider.y = this._container.y + this._container.height - 2 * this._offset - this._slider.height;
    }
    this._drag.y = this._slider.y +this._offset;
    this.onChange.dispatch((this._slider.y - this._container.y) / (this._container.height - 2 * this._offset - this._slider.height) * 100);
}

module.exports = Slider;
},{"./sliderImage":47}],47:[function(require,module,exports){
'use strict'

var SliderImage = function(game, parent, x, y, key, height) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;

    this._upImage = this.add(new Phaser.Image(game,0,0,key,0));
    this._tileHeight = this._upImage.height;
    this._downImage = this.add(new Phaser.Image(game,0,height-this._tileHeight,key,2));
    this._middleImage = this.add(new Phaser.Image(game, 0, this._tileHeight,key,1));
    this._middleImage.height = height - 2*this._tileHeight;
}

SliderImage.prototype = Object.create(Phaser.Group.prototype);
SliderImage.prototype.constructor = SliderImage;

module.exports = SliderImage;
},{}],48:[function(require,module,exports){
'use strict'

var StatMarker = function(game, parent, x, y, xSpace, maxPoints, currentPoints, pointKey, emptyKey, color) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    let width = new Phaser.Image(game, 0, 0, pointKey).width;//.width;
    this._points = [];
    for(let i = 0; i < currentPoints; i++) {
        this._points.push(this.add(new Phaser.Image(game, i*(width+xSpace), 0, pointKey)));
        this._points[i].tint = color;
    }
    for(let i = currentPoints; i<maxPoints; i++) {
        this._points.push(this.add(new Phaser.Image(game, i*(width+xSpace), 0, emptyKey)));
    }
    this._emptyKey = emptyKey;
    this._pointKey = pointKey;
    this._currentPoints = currentPoints;
    this._maxPoints = maxPoints;
    this._color = color;
}

StatMarker.prototype = Object.create(Phaser.Group.prototype);
StatMarker.prototype.constructor = StatMarker;

Object.defineProperty(StatMarker.prototype, 'currentPoints', {
    get: function () {
        return this._currentPoints;
    },
    set: function (value) {
        if(value!==this._currentPoints) {
            this._currentPoints = value;
            for(let i = 0; i < this._currentPoints; i++) {
                this._points[i].loadTexture(this._pointKey);
                this._points[i].tint = this._color;
            }
            for(let i = this._currentPoints; i < this._maxPoints; i++) {
                this._points[i].loadTexture(this._emptyKey);
                this._points[i].tint = 0xFFFFFF;
            }
        }
    }
});
module.exports = StatMarker;
},{}],49:[function(require,module,exports){

var functions = {
Fun: function (func, context) {
    return function () {
        this.reWrite(func.apply(context));
    }
},
Style: function (format) {
    let args = [];
    for (let element in arguments) {
        args.push(arguments[element]);
    }
    args = args.splice(1);
    return function () {
        let preStyle = this.styleLast.fontStyle;
        this.styleLast.fontStyle = format;
        this.reWrite(args);
        this.styleLast.fontStyle = preStyle;
    }
},
Color: function (color) {
    let args = [];
    for (let element in arguments) {
        args.push(arguments[element]);
    }
    args = args.splice(1);
    return function () {
        let preColor = this.styleLast.fill;
        this.styleLast.fill = color;
        this.reWrite(args);
        this.styleLast.fill = preColor;
    }
},
StrokeColor: function (color) {
    let args = [];
    for (let element in arguments) {
        args.push(arguments[element]);
    }
    args = args.splice(1);
    return function () {
        let preStrokeColor = this.styleLast.stroke;
        this.styleLast.stroke = color;
        this.reWrite(args);
        this.styleLast.stroke = preStrokeColor;
    }
},
FontWeight: function (style) {
    let args = [];
    for (let element in arguments) {
        args.push(arguments[element]);
    }
    args = args.splice(1);
    return function () {
        let preStyle = this.styleLast.fontWeight;
        this.styleLast.fontWeight = style;
        this.reWrite(args);
        this.styleLast.fontWeight = preStyle;
    }
},
Tremble: function (amplitud, frecuencia, longitudDeOnda) {
    let args = [];

    for (let element in arguments) {
        args.push(arguments[element]);
    }
    args = args.splice(3);
    return function () {
        let inicio = this.numberOfCharacters;
        this.reWrite(args);
        for (inicio; inicio < this.numberOfCharacters; inicio++) {
            this.getChildAt(inicio).initialY = this.getChildAt(inicio).y;
            this.getChildAt(inicio).update = function () {
                this.y = amplitud * Math.sin(this.game.time.totalElapsedSeconds() * 2 * Math.PI * frecuencia + this.parent.getChildIndex(this) / longitudDeOnda)
                    + this.initialY;
            };
        }
    }
},
VariableNumber: function (numberfunction, context, delay) {
    var value = numberfunction.apply(context);
    return function () {
        if (value !== numberfunction.apply(context)) {
            if (value > numberfunction.apply(context)) {
                value--;
            } else {
                value++;
            }
            this.game.time.create().add(delay, this.write, this).timer.start();
        }
        this.reWrite(value.toString());
    }
}
}
module.exports = functions;
},{}],50:[function(require,module,exports){
'use strict'


var createLeftUpCorner = function(game, width, height, key) {
    this._leftUpCorner = this.add(new Phaser.Sprite(game, 0, 0, key, 0));
    this._tileHeight = this._leftUpCorner.height;
    this._tileWidth = this._leftUpCorner.width;

    this._leftUpCornerRight = this.add(new Phaser.Sprite(game, this._tileWidth, 0, key, 1));
    this._leftUpCornerDown = this.add(new Phaser.Sprite(game, 0, this._tileHeight, key, 5));
    this._leftUpCornerRightDown = this.add(new Phaser.Sprite(game, this._tileWidth, this._tileHeight, key, 6));
}

var createLeftDownCorner = function(game, width, height, key) {
    this._leftDownCorner = this.add(new Phaser.Sprite(game, 0, height - this._tileHeight, key, 20));
    this._leftDownCornerUp = this.add(new Phaser.Sprite(game, 0, height - 2 * this._tileHeight, key, 15));;
    this._leftDownCornerRight = this.add(new Phaser.Sprite(game, this._tileWidth, height - this._tileHeight, key, 21));;
    this._leftDownCornerUpRight = this.add(new Phaser.Sprite(game, this._tileWidth, height - 2 * this._tileHeight, key, 16));;
}

var createRighttUpCorner = function(game, width, height, key) {
    this._rightUpCorner = this.add(new Phaser.Sprite(game, width - this._tileWidth, 0, key, 4));
    this._rightUpCornerDown = this.add(new Phaser.Sprite(game, width - this._tileWidth, this._tileHeight, key, 9));
    this._rightUpCornerLeft = this.add(new Phaser.Sprite(game, width - 2 * this._tileWidth, 0, key, 3));
    this._rightUpCornerDownLeft = this.add(new Phaser.Sprite(game, width - 2 * this._tileWidth, this._tileHeight, key, 8));
}

var createRightDownCorner = function(game, width, height, key) {
    this._rightDownCorner = this.add(new Phaser.Sprite(game, width - this._tileWidth, height - this._tileHeight, key, 24));
    this._rightDownCornerUp = this.add(new Phaser.Sprite(game, width - this._tileWidth, height - 2 * this._tileHeight, key, 19));
    this._rightDownCornerLeft = this.add(new Phaser.Sprite(game, width - 2 * this._tileWidth, height - this._tileHeight, key, 23));
    this._rightDownCornerUpLeft = this.add(new Phaser.Sprite(game, width - 2 * this._tileWidth, height - 2 * this._tileHeight, key, 18));
}

var createCorners = function(game, width, height, key) {
    createLeftUpCorner.call(this, game, width, height, key);
    createLeftDownCorner.call(this, game, width, height, key);
    createRighttUpCorner.call(this, game, width, height, key);
    createRightDownCorner.call(this, game, width, height, key);
}

var createUpEdge = function(game, width, height, key) {
    this._upEdge = this.add(new Phaser.Sprite(game, 2 * this._tileWidth, 0, key, 2));
    this._upEdge.width = width - 4 * this._tileWidth;
    this._upEdgeDown = this.add(new Phaser.Sprite(game, 2 * this._tileWidth, this._tileHeight, key, 7));
    this._upEdgeDown.width = this._upEdge.width;

}

var createLeftEdge = function(game, width, height, key) {
    this._leftEdge = this.add(new Phaser.Sprite(game, 0, 2 * this._tileHeight, key, 10));
    this._leftEdge.height = height - 4 * this._tileHeight;
    this._leftEdgeRight = this.add(new Phaser.Sprite(game, this._tileWidth, 2 * this._tileHeight, key, 11));
    this._leftEdgeRight.height = this._leftEdge.height;
}

var createDownEdge = function(game, width, height, key) {
    this._downEdge = this.add(new Phaser.Sprite(game, 2 * this._tileWidth, height - this._tileHeight, key, 22));
    this._downEdge.width = this._upEdge.width;
    this._downEdgeUp = this.add(new Phaser.Sprite(game, 2 * this._tileWidth, height - 2 * this._tileHeight, key, 17));
    this._downEdgeUp.width = this._downEdge.width;
    
}

var createRightEdge = function(game, width, height, key) {
    this._rightEdge = this.add(new Phaser.Sprite(game, width - this._tileWidth, 2 * this._tileHeight, key, 14));
    this._rightEdge.height = this._leftEdge.height;
    this._rightEdgeLeft = this.add(new Phaser.Sprite(game, width - 2 * this._tileWidth, 2 * this._tileHeight, key, 13));
    this._rightEdgeLeft.height = this._rightEdge.height;
}

var createEdges = function(game, width, height, key) {
    createUpEdge.call(this, game, width, height, key);
    createLeftEdge.call(this, game, width, height, key);
    createDownEdge.call(this, game, width, height, key);
    createRightEdge.call(this, game, width, height, key);
}

var createFill = function(game, width, height, key) {
    this._fill = this.add(new Phaser.Sprite(game, 2 * this._tileWidth, 2 * this._tileHeight, key, 12));
    this._fill.width = this._upEdge.width;
    this._fill.height = this._leftEdge.height;
}

var WindowFrame = function(game, parent, x, y, width, height, key) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    createCorners.call(this, game, width, height, key);
    createEdges.call(this, game, width, height, key);
    createFill.call(this, game, width, height, key);
}

WindowFrame.prototype = Object.create(Phaser.Group.prototype);
WindowFrame.prototype.constructor = WindowFrame;


// YA SE HARA.
WindowFrame.prototype.resize = function(width, height) {

}

module.exports = WindowFrame;
},{}],51:[function(require,module,exports){
'use strict';

//PREGUNTAS
// - ¿Hay alguna manera para evitar la carga repetida? Quiero que, cuando tenga absolutamente todo cargado, se de a start.
//   y poner pantalla de carga(sin conocer porcentaje jeje).
//BUGS
// ActionBar


var IntroScene = require('./scenes/intro_scene.js');
var MainMenuScene = require('./scenes/mainmenu_scene.js');
var CombatScene = require('./scenes/combat_scene.js');
var EventScene = require('./scenes/event_scene.js');
var CreditsScene = require('./scenes/credits_scene.js');
var SettingsScene = require('./scenes/settings_scene.js');
var ShopScene = require('./scenes/shop_scene.js');
var CreationScene = require('./scenes/creation_scene.js');
var NameScene = require('./scenes/name_scene.js');
var FullscreenScene = require('./scenes/fullscreen_scene.js');
var TextFunctions = require('./interface/textFunctions');
 var webFontLoading = {
  active: function() {
    var game = new Phaser.Game(200, 150, Phaser.AUTO, 'game');
    webFontLoading.game = game;
    game.state.add('boot', BootScene);
    game.state.add('preloader', PreloaderScene);
    game.state.add('intro', IntroScene);
    game.state.add('mainmenu', MainMenuScene);
    game.state.add('combat', CombatScene);
    game.state.add('event', EventScene);
    game.state.add('credits', CreditsScene);
    game.state.add('settings', SettingsScene);
    game.state.add('shop', ShopScene);
    game.state.add('creation', CreationScene);
    game.state.add('name', NameScene);
    game.state.add('fullscreen', FullscreenScene);
    game.state.start('boot');
  },
  custom: {
    families: ['Minecraft'],
    urls: ["assets/fonts/webFonts/stylesheet.css"]
  }
};

var WebFont = require('webfontloader');


var BootScene = {
  preload: function () {
    require('./gameFactory')(Phaser);
    // scale the game 4x
    this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    this.game.scale.setUserScale(4, 4);
    // enable crisp rendering
    this.game.renderer.renderSession.roundPixels = true;
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);

    // load here assets required for the loading screen
    this.game.load.image('preloader_bar', 'temporal%20images/preloader_bar.png');
  },

  create: function () {
    this.game.state.start('preloader');
  }
};


var PreloaderScene = {
  preload: function () {
    this.loadSignal = new Phaser.Signal();
    this.loadingText = this.game.add.richText(50, 120, 100, TextFunctions.Tremble(2,5,1,'Cargando...'), require('../assets/fonts/style.json'));
    this.loadingBar = this.game.add.reactiveBar(this.game.world,15,135,'preloader_bar',function(){
      return  this._audioLoad*0.88+this._otherLoad*0.12;
    },this,this.loadSignal);
    this.loadingBar.width = 170;
    this._audioLoad = 0;
    this._otherLoad = 0;
    this.game.load.onFileComplete.add(function(progress, file, key, success){
      this._otherLoad = progress;
      this.loadSignal.dispatch();
    },this);
    this.load.onFileComplete.add(function(progress, file, key, success){
      this._audioLoad = progress;
      this.loadSignal.dispatch();
    },this);
    // TODO: load here the assets for the game
    //IMAGES
        this.game.load.script('filter', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/Pixelate.js');
      //INTRO
        this.game.load.spritesheet('intro1', 'assets/images/intro/intro1.png', 57, 107);
        this.game.load.spritesheet('intro2', 'assets/images/intro/intro2.png', 57, 80);
        this.game.load.spritesheet('intro3', 'assets/images/intro/intro3.png', 140, 80);
        this.game.load.spritesheet('intro4', 'assets/images/intro/intro4.png', 140, 80);
      //INTERFACE
        this.game.load.spritesheet('logo', 'assets/images/interface/logo.png', 61, 69);
        this.game.load.spritesheet('infoWindow', 'assets/images/interface/infoWindow.png', 5, 5);
        this.game.load.image('eventImage','assets/images/interface/eventImage.png');
        this.game.load.image('eventImageError','assets/images/interface/eventImageError.png');
        this.game.load.image('itemFrame','assets/images/interface/itemFrame.png');
        this.game.load.image('emptyItem','assets/images/interface/emptyItem.png');
        this.game.load.image('backIcon','assets/images/interface/backIcon.png');
        this.game.load.image('backFrame','assets/images/interface/backFrame.png');
        this.game.load.image('title','assets/images/interface/title.png');
        this.game.load.image('statPoint','assets/images/interface/statPoint.png');
        this.game.load.image('emptyStatPoint','assets/images/interface/emptyStatPoint.png');
        this.game.load.image('blockedIcon','assets/images/interface/blockedIcon.png');
        this.game.load.image('textBox','assets/images/interface/textBox.png');
        //Actions Bar
        this.game.load.image('actionsBarFrame','assets/images/interface/actionsBarFrame.png');
        this.game.load.image('actionsBarBack','assets/images/interface/actionsBarBack.png');
        this.game.load.image('actionsBarShadow','assets/images/interface/actionsBarShadow.png');
        this.game.load.image('blockBar','assets/images/interface/blockBar.png');
        this.game.load.image('attackBar','assets/images/interface/attackBar.png');
        this.game.load.image('unknownBar','assets/images/interface/unknownBar.png');
        this.game.load.image('idleBar','assets/images/interface/idleBar.png');
        //HUDs
        this.game.load.image('interface','assets/images/interface/combatinterfaceback.png');
        this.game.load.image('eventinterface','assets/images/interface/eventinterfaceback.png');
        this.game.load.image('creationinterface','assets/images/interface/creationinterface.png');
        //HUDs scroll
        this.game.load.spritesheet('sliderBackground','assets/images/interface/sliderbackground.png',6,5);
        this.game.load.spritesheet('slider','assets/images/interface/slider.png',6,3);
        //Cursor
        this.game.load.spritesheet('cursor','assets/images/interface/cursor.png',7,7);
        //HealthBar
        this.game.load.image('healthBar','assets/images/interface/healthBar.png');
        this.game.load.image('damageBar','assets/images/interface/damageBar.png');
        this.game.load.image('emptyBar','assets/images/interface/emptyBar.png');
        this.game.load.image('healBar','assets/images/interface/healBar.png')
        this.game.load.image('frameBar','assets/images/interface/frameBar.png');
        //Action Icon
        this.game.load.image('attackIcon','assets/images/interface/attackIcon.png');
        this.game.load.image('blockIcon','assets/images/interface/blockIcon.png');
        this.game.load.image('ultimateIcon','assets/images/interface/ultimateIcon.png');
        //Items
        this.game.load.image('itemIcon','assets/images/interface/itemIcon.png');
        this.game.load.image('itemIcon2','assets/images/interface/itemIcon2.png');

        this.game.load.image('shopItemIcon','assets/images/interface/shopItemIcon.png');
        //Stats Icons
        this.game.load.image('damageIcon','assets/images/interface/damageIcon.png');
        this.game.load.image('defenseIcon','assets/images/interface/defenseIcon.png');
        this.game.load.image('speedIcon','assets/images/interface/speedIcon.png');
        this.game.load.image('healthIcon','assets/images/interface/healthIcon.png');
        this.game.load.image('perceptionIcon','assets/images/interface/perceptionIcon.png');
        this.game.load.image('gemIcon','assets/images/interface/gemIcon.png');
        this.game.load.image('villageGemIcon','assets/images/interface/villageGemIcon.png');
        this.game.load.image('populationIcon','assets/images/interface/populationIcon.png');
        //Buttons
        this.game.load.spritesheet('button','assets/images/interface/button.png',32,32);
        this.game.load.image('actionFrame', 'assets/images/interface/actionFrame.png');
        this.game.load.image('optionBack','assets/images/interface/optionback.png');
        this.game.load.image('optionFrame','assets/images/interface/optionFrame.png');
        this.game.load.image('pauseButton','assets/images/interface/pauseButton.png');
        this.game.load.image('pauseButtonFrame','assets/images/interface/pauseButtonFrame.png');
        this.game.load.spritesheet('shop','assets/images/interface/shop.png',51,64);
        this.game.load.spritesheet('shopFrame', 'assets/images/interface/shopFrame.png');
        this.game.load.spritesheet('door', 'assets/images/interface/door.png',27,49);
        this.game.load.spritesheet('doorFrame', 'assets/images/interface/doorFrame.png');
        this.game.load.spritesheet('settings', 'assets/images/interface/settings.png',24,53);
        this.game.load.spritesheet('settingsFrame', 'assets/images/interface/settingsFrame.png');
        this.game.load.spritesheet('tavern', 'assets/images/interface/tavern.png',47,23);
        this.game.load.spritesheet('tavernFrame', 'assets/images/interface/tavernFrame.png');
        this.game.load.spritesheet('crystal', 'assets/images/interface/crystal.png',39,65);
        this.game.load.spritesheet('crystalFrame', 'assets/images/interface/crystalFrame.png');
        this.game.load.image('arrow', 'assets/images/interface/arrow.png');
        this.game.load.image('arrowFrame', 'assets/images/interface/arrowFrame.png');
        this.game.load.image('ritualButton', 'assets/images/interface/ritualButton.png');
        this.game.load.image('ritualFrame', 'assets/images/interface/ritualFrame.png');

      //BACKGROUNDS
      this.game.load.image('mainmenubackground', 'assets/images/backgrounds/mainmenubackground.png');
      this.game.load.image('watercombatbackground', 'assets/images/backgrounds/watercombatbackground.png');
      this.game.load.image('combatbackground', 'assets/images/backgrounds/combatbackground.png');
      this.game.load.image('eventbackground', 'assets/images/backgrounds/eventbackground.png');
      this.game.load.image('shines', 'assets/images/backgrounds/shines.png');
      this.game.load.image('creationbackground', 'assets/images/backgrounds/creationbackground.png');
      this.game.load.image('namebackground', 'assets/images/backgrounds/namebackground.png');
      //PARTICLES
      this.game.load.image('redBlood','assets/images/particles/redBlood.png');
      this.game.load.image('greenBlood','assets/images/particles/greenBlood.png');
      this.game.load.image('blueBlood','assets/images/particles/blueBlood.png');
      this.game.load.spritesheet('crystalShines','assets/images/particles/crystalShines.png',3,3);
      this.game.load.spritesheet('smoke','assets/images/particles/smoke.png',4,4);
      this.game.load.spritesheet('creationParticles','assets/images/particles/creationParticles.png',8,8);
      //CHARACTERS
        //Seeker
        this.game.load.spritesheet('seekerBruteAnimations','assets/images/seeker/seekerBruteAnimations.png',80,120);
        this.game.load.spritesheet('seekerHarpyAnimations','assets/images/seeker/seekerHarpySiluette.png',80,120);
        this.game.load.spritesheet('seekerWarlockAnimations','assets/images/seeker/seekerWarlockSiluette.png',80,120);
        this.game.load.spritesheet('seekerBruteSiluette','assets/images/seeker/seekerBruteSiluette.png',80,120);
        this.game.load.spritesheet('seekerHarpySiluette','assets/images/seeker/seekerHarpySiluette.png',80,120);
        this.game.load.spritesheet('seekerWarlockSiluette','assets/images/seeker/seekerWarlockSiluette.png',80,120);
        //Enemies
        this.game.load.spritesheet('spiderAnimations', 'assets/images/enemies/spiderAnimations.png',80,120);
        this.game.load.spritesheet('fungiAnimations', 'assets/images/enemies/fungiAnimations.png',80,120);
    //SOUNDS
      //Effects
      this.load.audio('attacking', ['assets/sounds/attacking.wav']);
      this.load.audio('preAttacking', ['assets/sounds/preAttacking.wav']);
      this.load.audio('blocking', ['assets/sounds/blocking.wav']);
      this.load.audio('button', ['assets/sounds/buttonPressed.wav']);
      //Music
      this.load.audio('boss', ['assets/music/bosstheme.mp3']);
      this.load.audio('firetheme', ['assets/music/firetheme.mp3']);
      this.load.audio('shoptheme', ['assets/music/shoptheme.mp3']);
      this.load.audio('watertheme', ['assets/music/watertheme.mp3']);
      this.load.audio('credits', ['assets/music/creditstheme.mp3']);
      this.load.audio('mainmenu', ['assets/music/mainmenutheme.mp3']);
      this.load.audio('intro', ['assets/music/introtheme.mp3']);
      this.load.audio('logo', ['assets/music/logo.mp3']);
      this.load.audio('credits', ['assets/music/creditstheme.mp3']);
      this.load.audio('mainmenutheme', ['assets/music/mainmenutheme.mp3']);
    //PLUGINS
      this.game.add.plugin(PhaserInput.Plugin);
  },

  create: function () {
      this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
      PreloaderScene.game.state.start('intro');
  }

};
WebFont.load(webFontLoading);

window.onload = function () {
  

};
},{"../assets/fonts/style.json":6,"./gameFactory":22,"./interface/textFunctions":49,"./scenes/combat_scene.js":54,"./scenes/creation_scene.js":55,"./scenes/credits_scene.js":56,"./scenes/event_scene.js":57,"./scenes/fullscreen_scene.js":58,"./scenes/intro_scene.js":59,"./scenes/mainmenu_scene.js":60,"./scenes/name_scene.js":61,"./scenes/settings_scene.js":62,"./scenes/shop_scene.js":63,"webfontloader":1}],52:[function(require,module,exports){
'use strict'

var DayFunctions = {
    NextDay: function(seeker, game, dayManager) {
        seeker.day++;
        dayManager.newDay();
    }
}

module.exports = DayFunctions;
},{}],53:[function(require,module,exports){
'use strict'
var Days = require('../../assets/days/days');

var DayManager = function(seeker, game){
    this._seeker = seeker;
    this._game = game;
}

DayManager.prototype.newDay = function(){
    
    var days = Days['day' + this._seeker.day];
    this.goEvent(days[days.DayGenerator(this._seeker, this)](this._seeker,this));
    

}

DayManager.prototype.goCombat = function(day) {

}

DayManager.prototype.goEvent = function(day) {
    this._game.state.start('event',true, false, this._seeker, this,...Object.values(day));
}

DayManager.prototype.generateDay = function(seeker, day) {

}

module.exports = DayManager;

},{"../../assets/days/days":5}],54:[function(require,module,exports){
'use strict';

var Stats = require('../characters/stats');
var Item = require('../characters/item');
var textFunctions = require('../interface/textFunctions');

//village stats
var day = 1;
var population = 24;
var totalgems = 0;
var selector;
//var seeker = require('./character.js');//dice que character.js es un modulo común de js, que debe ser convertido a un ES6

var CombatScene = {

  MainMenuScene: function () {
    this.game.state.start('mainmenu');

  },
  seeker: null,
  enemy: null,
  // Buttons functions
  attackKey: function () {
    this.combatHUD._enemyHUD._actionBar.reUpdate();
  },
  blockKey: function () {
    this.seeker.start();
    this.enemy.start();
  },
  attackEnemy: function () {
    if (true) {
      this.enemy.attack(this.seeker);
    }
  },
  blockEnemy: function () {
    if (true) {
      this.enemy.block();
    }
  },

  // prototype buttons
  hurtSeeker: function () {
    this.seeker.hurt(1);
  },
  init: function(){
  },

  create: function () {
    //fadeIn
    this.camera.flash('#000000');

    //render background
    var combatbackground = this.game.add.image(0, 0, 'combatbackground');
    //render seeker //tope de nombre caracteres = 9
    this.seeker = this.game.add.seeker(0, -8, 'Alo\'th', {damage: 99, defense: 3, speed: 1, health: 20, perception: 1}, 
      ['healthPotion','speedEnemyPotion'], 'seekerBruteAnimations',
      {
        idle:[[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
        attack:[[24, 25, 26, 27, 28, 29, 30, 31], [32, 33, 34, 35, 36, 37, 38, 39, 40], 2000, 5000],
        block:[[48, 49, 50, 51, 52], [53, 54], [57, 58, 59], 3000, 5000],
        die:[[72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]],
        useObjects:[]
      });
    this.seeker.addParticle.blood(39, 98, 10, 'blueBlood');
    //render enemy
var a = require('../../assets/patterns/patterns');
    this.enemy = this.game.add.enemy(this.game.world.width - 80, -8, 'Lord Ragno', {damage: 5, defense: 10, speed: 1, health: 27, perception: 3}, 'spiderAnimations', 
    {
      idle:[[0, 1, 2, 3, 4, 5]],
      attack:[[24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41]],
      block:[[48, 49, 50, 51, 52, 53, 54], [55, 56], [58, 59, 60]],
      die:[[72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96]]
    },this.seeker, a.normal);
    this.enemy.addParticle.blood(40, 93, 10, 'greenBlood');

    //interface
    this.combatHUD = this.game.add.combatHUD(0, 0, this.seeker, this.enemy);
    //transicion de entrada a combate

    var filter = this.game.add.filter('Pixelate', 800, 600);
    this.game.world.filters = [filter];
    filter.sizeX = 1000;
    filter.sizeY = 1000;
    var tween = this.game.add.tween(filter).to({ sizeX: 1, sizeY: 1 }, 2000, "Quart.easeOut").start();
    tween.onComplete.add(function () {
      this.game.world.filters = null;
      // Controls
      this.seeker.idle();
      this.enemy.act();
      this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.attackKey, this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(this.blockKey, this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.Z).onDown.add(this.attackEnemy, this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.X).onDown.add(this.blockEnemy, this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.H).onDown.add(this.hurtSeeker, this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.J).onDown.add(function () {
        this.seeker.use('Heal Potion');
      }, this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.X).onDown.add(this.MainMenuScene, this);
      this.combatHUD._enemyHUD._actionBar.reUpdate();
      this.combatHUD._enemyHUD._actionBar._timer.start();
    }, this);

    var style = require('../../assets/fonts/style.json');

    this.enemy.onDeathComplete.add(function () {
      var t = this.game.time.create();
      t.add(1000, function () {
        filter = this.game.add.filter('Pixelate', 800, 600);
        this.game.world.filters = [filter];
        filter.sizeX = 1;
        filter.sizeY = 1;
        tween = this.game.add.tween(filter).to({ sizeX: 1000, sizeY: 1000 }, 2000, "Quart.easeIn").start()
          .onComplete.add(function () {  this.MainMenuScene(); }, this);
      }, this);
      t.start();
    }, this);
    this.seeker.onDeathComplete.add(function () {
      var t = this.game.time.create();
      t.add(1000, function () {
        filter = this.game.add.filter('Pixelate', 800, 600);
        this.game.world.filters = [filter];
        filter.sizeX = 1;
        filter.sizeY = 1;
        tween = this.game.add.tween(filter).to({ sizeX: 1000, sizeY: 1000 }, 2000, "Quart.easeIn").start()
          .onComplete.add(function () {  this.MainMenuScene(); }, this);
      }, this);
      t.start();
    }, this);

    
    //para ir a fullscreen pulsar F11
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.halt();

    //music
    var music = this.game.add.audio('firetheme', 0.1, true);
    this.game.sound.stopAll();
    music.play();

    //INFOWINDOWS
    //vitalidad
    //this.game.add.infoWindow(50, 50, 62, 53, 'infoWindow', [textFunctions.Color('#B60000', 'Vitalidad'), ' Determina tu salud máxima.'], { align: 'left' });
    //ataque
    /*this.game.add.infoWindow(50, 50, 62, 53, 'infoWindow',  [textFunctions.Color('#B60000','Ataque'), ' Determina el daño que haces.'], {align: 'left'});
    //defensa
    this.game.add.infoWindow(50, 50, 62, 53, 'infoWindow',  [textFunctions.Color('#B60000','Defensa'), ' Determina el daño bloqueado.'], {align: 'left'});
    //velocidad
    this.game.add.infoWindow(50, 50, 62, 53, 'infoWindow',  [textFunctions.Color('#B60000','Velocidad'), ' Determina el tiempo entre acciones.'], {align: 'left'});
    //percepcion
    this.game.add.infoWindow(50, 50, 78, 70, 'infoWindow',  [textFunctions.Color('#B60000','Percepción'), ' Determina la interfaz enemiga.'], {align: 'left'});
    */


    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');

  },
  update: function () {
    //prueba cursor
    selector.x = this.game.input.x;
    selector.y = this.game.input.y;
  },

  goFullscreen: function () {

    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
    else {
      this.game.scale.startFullScreen(false);
    }

  }
};




module.exports = CombatScene;

},{"../../assets/fonts/style.json":6,"../../assets/patterns/patterns":8,"../characters/item":16,"../characters/stats":19,"../interface/textFunctions":49}],55:[function(require,module,exports){
'use strict';

var FramedButton = require('../interface/framedButton')

var CreationScene = {
  create: function () {
    //fadeIn
    this.camera.flash('#000000');

    var style = require('../../assets/fonts/style.json');

    //background
    this.game.add.image(0, 0, 'creationbackground');

    //prueba cursor
    this.selector = this.game.add.sprite(50, 50, 'cursor');

    this.game.add.creationHUD(0, 0, this.selector, this);
    
    this.game.world.bringToTop(this.selector);

    //para ir a fullscreen pulsar F11
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.halt();

    //music
    var music = this.game.add.audio('intro', 0.1, true);
    this.game.sound.stopAll();
    music.play();
  },
  update: function () {
    //prueba cursor
    this.selector.x = this.game.input.x;
    this.selector.y = this.game.input.y;
  },
  goFullscreen: function () {
    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
    else {
      this.game.scale.startFullScreen(false);
    }
  }
};


module.exports = CreationScene;

},{"../../assets/fonts/style.json":6,"../interface/framedButton":33}],56:[function(require,module,exports){
'use strict';

var FramedButton = require('../interface/framedButton')

var backButton;
var selector;

var CreditsScene = {
  MainMenuScene: function () {
    this.game.add.audio('button', 0.1).play();
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function(){this.game.state.start('mainmenu');}, this);
  },

  create: function () {
    //fadeIn
    this.camera.flash('#000000');
    
    var style = require('../../assets/fonts/style.json');

    this.game.add.richText(10, this.game.world.height, 100, 'LightSeeker Desarrollado por Turing\'s Song Studios', style);
    this.game.add.richText(10, this.game.world.height+50, 100, 'Carlos Durán Dominguez', style);
    this.game.add.richText(10, this.game.world.height+80, 100, 'Arturo García Cárdenas', style);
    this.game.add.richText(10, this.game.world.height+120, 100, 'Agradecimientos a:', style);
    this.game.add.richText(10, this.game.world.height+160, 100, 'Nuestras madres', style);
    this.game.add.richText(10, this.game.world.height+180, 100, 'Carlos León Aznar', style);
    this.game.add.richText(10, this.game.world.height+220, 100, '¡Gracias por jugar!', style);

    backButton = this.game.world.add(new FramedButton(this.game.world, this.game, 179, 130, 'backIcon', 'backFrame', [{ callback: function () { this.MainMenuScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));

    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');

    //para ir a fullscreen pulsar F11
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.halt();

    //music
    var music = this.game.add.audio('credits', 0.1, true);
    this.game.sound.stopAll();
    music.play();
  },
  update: function(){
    this.game.world.forEach(element => {
      element.y -=0.2;
    });
    backButton.y += 0.2;
  
  //prueba cursor
  selector.x = this.game.input.x;
  selector.y = this.game.input.y;
  },
  goFullscreen: function () {
    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
    else {
      this.game.scale.startFullScreen(false);
    }
  }
};


module.exports = CreditsScene;

},{"../../assets/fonts/style.json":6,"../interface/framedButton":33}],57:[function(require,module,exports){
'use strict';

var selector;

var Stats = require('../characters/stats');
var EventScene = {
  MainMenuScene: function () {
    this.game.state.start('mainmenu');

  },
  init: function(seeker, dayManager, text, image, options, music){
    this._seeker = seeker;
    this._dayManager = dayManager;
    this._text = text;
    this._image = image;
    this._options = options;
    this._music = music;
  },
  create: function () {
    //fadeIn
    this.camera.flash(0x000000);

    var style = require('../../assets/fonts/style.json');
    style.align = 'left';
    
    //render background
    this.game.add.sprite(0, 0, 'eventbackground');

    this.seeker = this.game.world.add(this._seeker);

    this.HUD = this.game.add.eventHUD(this._seeker, this._dayManager, this._text, this._options, this._image);

    //music
    var music = this.game.add.audio(this._music, 0.1, true);
    this.game.sound.stopAll();
    music.play();

    //para ir a fullscreen pulsar F11
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.halt();

    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');
  },

  update: function () {
    //prueba cursor
    selector.x = this.game.input.x;
    selector.y = this.game.input.y;
  },

  goFullscreen: function() {

    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
    else {
      this.game.scale.startFullScreen(false);
    }
  
  }
};


module.exports = EventScene;

},{"../../assets/fonts/style.json":6,"../characters/stats":19}],58:[function(require,module,exports){
'use strict';

var FramedButton = require('../interface/framedButton')

var selector;

var FullscreenScene = {
  IntroScene: function () {
    this.game.add.audio('button', 0.1).play();
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('intro'); }, this);
  },

  create: function () {
    //fadeIn
    this.camera.flash('#000000');

    var style = require('../../assets/fonts/style.json');




    this.game.add.richText(60, 39, 80, "fullscreen?", style);

    //Controles para cambiar de escenas
    this.acceptButton = this.game.world.add(new FramedButton(this.game.world, this.game, 60, 70, 'backIcon', 'backFrame', [{ callback: function () { this.game.scale.startFullScreen(false);this.IntroScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));
    this.ignoreButton = this.game.world.add(new FramedButton(this.game.world, this.game, 120, 70, 'backIcon', 'backFrame', [{ callback: function () { this.game.scale.stopFullScreen();this.IntroScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));


    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');

    //music
    var music = this.game.add.audio('shoptheme', 0.1, true);
    this.game.sound.stopAll();
    music.play();
  },
  update: function () {
    //prueba cursor
    selector.x = this.game.input.x;
    selector.y = this.game.input.y;
  }
};


module.exports = FullscreenScene;

},{"../../assets/fonts/style.json":6,"../interface/framedButton":33}],59:[function(require,module,exports){
'use strict';

var selector;

var IntroScene = {
  MainMenuScene: function () {
    this.game.add.audio('button', 0.1).play();
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('mainmenu'); }, this);
  },

  appear(object, duration, delay, funct) {
    object.alpha = 0;

    var tween = this.game.add.tween(object).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, delay);
    tween.onComplete.add(function () {
      if (funct && (typeof funct == "function")) {
        funct();
      }
      this.game.add.tween(object).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, duration);
    }
      , this);
  },

  create: function () {
    var style = require('../../assets/fonts/style.json');
    //color de background
    this.game.stage.backgroundColor = "#31261a";
    //stop music
    this.game.sound.stopAll();

    //logo music
    var logomusic = this.game.add.audio('logo', 0.1, false);
    logomusic.play();

    //intro music
    var intro = this.game.add.audio('intro', 0.1, false);
    this.game.add.tween(intro).to({}, 7500, "Linear", true, 7500).onStart.add(function () { intro.play(); }, this);

    this.appear(this.game.add.sprite(70, 30, 'logo')
      .animations.add('play', Array.apply(null, { length: 22 }).map(Function.call, Number))
      ._parent.play('play', 7)._parent, 4000);
    this.appear(this.game.add.richText(60, 100, 80, "TURING'S SONG STUDIOS", style), 1000, 3000);

    this.appear(this.game.add.richText(60, 40, 80, "Cuenta la leyenda...", style), 2000, 9000);
    this.appear(this.game.add.richText(60, 80, 80, "...que hace mucho tiempo...", style), 2000, 10000);

    var intro1 = this.game.add.sprite(20, 20, 'intro1');
    intro1.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    this.appear(intro1, 3000, 17000, function () { intro1.play('play', 4) });
    this.appear(this.game.add.richText(90, 50, 100, "...una gran bola de fuego alimentaba al mundo con sus rayos desde el cielo...", style), 3000, 17000);

    var intro2 = this.game.add.sprite(130, 30, 'intro2');
    intro2.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    this.appear(intro2, 3000, 24000, function () { intro2.play('play', 6) });
    this.appear(this.game.add.richText(10, 50, 100, "...y que las gemas de luz no eran necesarias para poder sobrevivir.", style), 3000, 24000);

    var intro3 = this.game.add.sprite(30, 10, 'intro3');
    intro3.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
    this.appear(intro3, 9000, 32000, function () { intro3.play('play', 6) });
    this.appear(this.game.add.richText(25, 100, 150, "Tras la Gran Guerra, el suelo dónde alzamos nuestros reinos...", style), 3000, 32000);
    this.appear(this.game.add.richText(25, 132, 150, "...desapareció.", style), 3000, 38000);

    var intro4 = this.game.add.sprite(30, 60, 'intro4');
    intro4.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
    this.appear(intro4, 11000, 46000, function () { intro4.play('play', 6) });
    this.appear(this.game.add.richText(25, 10, 150, "Los spilianos somos los únicos supervivientes. Hemos evolucionado para no ser los últimos, pero...", style), 3000, 46000);
    this.appear(this.game.add.richText(25, 10, 150, "...las gemas de luz escasean en la aldea, y cada vez hay menos spilianos...", style), 3000, 54000);

    this.appear(this.game.add.richText(50, 50, 100, "Necesitamos tu ayuda. Has sido elegido por el Gran Cristal.", style), 3000, 62000);
    this.appear(this.game.add.richText(50, 60, 100, "Por favor... no nos falles...", style), 3000, 70000);

    //espera a que acabe intro
    this.game.time.events.add(Phaser.Timer.SECOND * 80, this.MainMenuScene, this);

    //para ir a fullscreen pulsar F11
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.halt();

    

    //this.game.add.optionMenu([['botonDeAbajo',165,115,'button',this.MainMenuScene,this,1,0,2,1,{}]]);


    //prueba cursor
    //selector = this.game.add.sprite(50, 50, 'cursor');

    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.MainMenuScene, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.add(this.MainMenuScene, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(this.MainMenuScene, this);
  },
  update: function () {
    //prueba cursor
    //selector.x = this.game.input.x;
    //selector.y = this.game.input.y;
  },
  goFullscreen: function () {
    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
    else {
      this.game.scale.startFullScreen(false);
    }
  }
};




module.exports = IntroScene;

},{"../../assets/fonts/style.json":6}],60:[function(require,module,exports){
'use strict';

var textFunctions = require('../interface/textFunctions');
var FramedButton = require('../interface/framedButton')

var MainMenuScene = {

  create: function () {
    //fadeIn
    this.camera.flash('#000000');
    var style = require('../../assets/fonts/style.json');

    //background
    this.game.add.image(0, 0, 'mainmenubackground');

    this.selector = this.game.add.sprite(50, 50, 'cursor');

    //buttons
    this.game.add.mainMenuHUD(0, 0, this.selector);
    this.game.add.image(0, 0, 'shines').alpha = 0.2;
    //great crystal shine particles
    var emitterCrystal = this.game.add.emitter(100, 35, 100);
    emitterCrystal.makeParticles('crystalShines', [0, 1, 2]);
    emitterCrystal.setRotation(0, 0);
    emitterCrystal.setAlpha(0.3, 0.8);
    //emitter.setScale(0.5, 1);
    emitterCrystal.gravity = 0;
    emitterCrystal.flow(2000, 100);

    this.game.add.image(4, 1, 'title');

    this.game.world.bringToTop(this.selector);

    //smoke
    /*var emitter = this.game.add.emitter(10, 100, 400);
    emitter.makeParticles('smoke', [0,1,2]);
    emitter.setRotation(0, 0);
    emitter.setAlpha(0.1, 1, 3000);
    //emitter.setScale(0.1, 1, 0.1, 1, 6000, Phaser.Easing.Quintic.Out);
    emitter.gravity = -400;
    emitter.start(false, 5000,1);
    //emitter.emitX = 0;*/

    //para ir a fullscreen pulsar F11
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.halt();


    //music
    var music = this.game.add.audio('mainmenutheme', 0.1, true);
    this.game.sound.stopAll();
    music.play();
  },

  update: function () {
    //prueba cursor
    this.selector.x = this.game.input.x;
    this.selector.y = this.game.input.y;
  },

  goFullscreen: function () {
    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
    else {
      this.game.scale.startFullScreen(false);
    }
  }
};

module.exports = MainMenuScene;

},{"../../assets/fonts/style.json":6,"../interface/framedButton":33,"../interface/textFunctions":49}],61:[function(require,module,exports){
'use strict';

var FramedButton = require('../interface/framedButton')
var Seeker = require('../characters/seeker');
var DayManager = require('../manager/dayManager');
var selector;

var SettingsScene = {
  MainMenuScene: function () {
    this.game.add.audio('button', 0.1).play();
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('mainmenu'); }, this);
  },
  NewGame: function (seeker, name) {
    var seeker = new Seeker(this.game, 0, -8, name, seeker.stats, seeker.items, seeker.spriteSheet, seeker.actions);
    var dayManager = new DayManager(seeker, this.game);
    dayManager.newDay();
  },
  init: function (seeker) {
    this._tmpSeeker = seeker;
  },
  create: function () {
    //fadeIn
    this.camera.flash('#000000');

    var style = require('../../assets/fonts/style.json');

    this.game.add.image(0, 0, 'namebackground').alpha = 0.2;

    var emitter = this.game.add.emitter(100, 75, 200);
    emitter.alpha = 0.1;
    emitter.makeParticles('creationParticles', [0, 1, 2, 3, 4, 5]);
    emitter.minParticleSpeed.setTo(-100, -100);
    emitter.maxParticleSpeed.setTo(100, 100);
    emitter.setRotation(0, 0);
    emitter.gravity = 0;
    emitter.flow(20000, 100);

    var emitter2 = this.game.add.emitter(100, 75, 200);
    emitter2.alpha = 0.2;
    emitter2.makeParticles('creationParticles', [0, 1, 2, 3, 4, 5]);
    emitter2.minParticleSpeed.setTo(-100, -100);
    emitter2.maxParticleSpeed.setTo(100, 100);
    emitter2.setRotation(0, 0);
    emitter2.gravity = 0;
    emitter2.flow(20000, 100);

    var emitter3 = this.game.add.emitter(100, 75, 200);
    emitter3.alpha = 0.3;
    emitter3.makeParticles('creationParticles', [0, 1, 2, 3, 4, 5]);
    emitter3.minParticleSpeed.setTo(-100, -100);
    emitter3.maxParticleSpeed.setTo(100, 100);
    emitter3.setRotation(0, 0);
    emitter3.gravity = 0;
    emitter3.flow(20000, 100);

    this.game.add.richText(0, 5, 200, 'EL RITUAL HA COMENZADO.', style);
    this.game.add.richText(0, 16, 200, 'YA NO HAY VUELTA ATRAS.', style);
    this.game.add.richText(0, 34, 200, 'NOMBRA A TU BUSCADOR:', style);
    this.game.add.image(60, 108, 'textBox').alpha = 0.8;

    this.game.add.image(62, -30, this._tmpSeeker.spriteSheet);

    //this.backButton = this.game.world.add(new FramedButton(this.game.world, this.game, 179, 130, 'backIcon', 'backFrame', [{ callback: function () { this.MainMenuScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));
    this.hola = this.game.add.inputField(40, 100, {
      font: '10px Minecraft',
      width: 150,
      padding: 8,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      borderRadius: 6,
      placeHolder: 'NOMBRE',
      textAlign: 'center',
      fillAlpha: 0,
      width: 100,
      height: 1,
      selectionColor: '#FF00FF',
      cursorColor: '#FFFFFF'
    });
    this.hola.text.style.fill = '#FFFFFF';
    this.hola.domElement.setMax(7, 0);
    this.hola.cursor.y += 2;
    this.hola.input.useHandCursor = false;
    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');

    //para ir a fullscreen pulsar F11
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.halt();

    //input name
    this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.add(function (key, seeker, name) {
      if (this.hola.value !== ''){
        this.NewGame(seeker, this.hola.value);
        this.hola.destroy();
    }
    }, this, 0, this._tmpSeeker);

    this.hola.blockInput = false;
    this.hola.focus = false;

    PhaserInput.onKeyboardClose.add(function (seeker, name) {
      if (this.hola.value !== ''){
        this.NewGame(seeker, this.hola.value);
        this.hola.destroy();
      }
    }, this, 0, this._tmpSeeker);
    
    this.hola.focusOutOnEnter = false;


  },
  update: function () {
    //prueba cursor
    selector.x = this.game.input.x;
    selector.y = this.game.input.y;
  },
  goFullscreen: function () {
    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
    else {
      this.game.scale.startFullScreen(false);
    }
  }
};


module.exports = SettingsScene;

},{"../../assets/fonts/style.json":6,"../characters/seeker":18,"../interface/framedButton":33,"../manager/dayManager":53}],62:[function(require,module,exports){
'use strict';

var FramedButton = require('../interface/framedButton')

var selector;

var SettingsScene = {
  MainMenuScene: function () {
    this.game.add.audio('button', 0.1).play();
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function(){this.game.state.start('mainmenu');}, this);
  },

  create: function () {
    //fadeIn
    this.camera.flash('#000000');
    
    var style = require('../../assets/fonts/style.json');

    this.game.add.richText(10, 10, 50, 'VIDEO', style);
    this.game.add.richText(20, 30, 100, 'Pantalla completa', style);

    this.game.add.richText(10, 70, 50, 'AUDIO', style);
    this.game.add.richText(25, 90, 100, 'Volumen de sonido', style);
    this.game.add.richText(25, 110, 100, 'Volumen de música', style);


    this.backButton = this.game.world.add(new FramedButton(this.game.world, this.game, 179, 130, 'backIcon', 'backFrame', [{ callback: function () { this.MainMenuScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));

    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');

    //para ir a fullscreen pulsar F11
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.halt();
    
    this.game.sound.stopAll();
  },
  update: function(){
  //prueba cursor
  selector.x = this.game.input.x;
  selector.y = this.game.input.y;
  },
  goFullscreen: function () {
    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
    else {
      this.game.scale.startFullScreen(false);
    }
  }
};


module.exports = SettingsScene;

},{"../../assets/fonts/style.json":6,"../interface/framedButton":33}],63:[function(require,module,exports){
'use strict';

var FramedButton = require('../interface/framedButton')

var selector;

var ShopScene = {
  MainMenuScene: function () {
    this.game.add.audio('button', 0.1).play();
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('mainmenu'); }, this);
  },

  create: function () {
    //fadeIn
    this.camera.flash('#000000');

    var style = require('../../assets/fonts/style.json');

    this.game.add.richText(10, 10, 100, 'TIENDA DE TEMMIE', style);

    this.backButton = this.game.world.add(new FramedButton(this.game.world, this.game, 179, 130, 'backIcon', 'backFrame', [{ callback: function () { this.MainMenuScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));

    var item = this.game.add.sprite(50,50,'shopItemIcon');
    //item.sprite.setToScale(2,2);

    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');

    //para ir a fullscreen pulsar F11
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.halt();

    //music
    var music = this.game.add.audio('shoptheme', 0.1, true);
    this.game.sound.stopAll();
    music.play();
  },
  update: function () {
    //prueba cursor
    selector.x = this.game.input.x;
    selector.y = this.game.input.y;
  },
  goFullscreen: function () {
    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
    else {
      this.game.scale.startFullScreen(false);
    }
  }
};


module.exports = ShopScene;

},{"../../assets/fonts/style.json":6,"../interface/framedButton":33}]},{},[51]);
