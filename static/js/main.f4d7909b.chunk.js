(this["webpackJsonpcoordinate-translator-react"]=this["webpackJsonpcoordinate-translator-react"]||[]).push([[0],{22:function(t,e,n){t.exports=n(34)},30:function(t,e,n){},31:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(15),i=n.n(o),l=n(2),c=n(16),u=n(3),s=(n(30),n(31),{lightPurple:"#C7CEDB",darkBlue:"#14213D",steelGrey:"#C4C4C4",errorRed:"#FC2F00",activeGreen:"#46CA1D"}),d={titleFont:"ABeeZee",footerFont:"Fredoka One"};function h(){var t=Object(l.a)(["\n    grid-column: 1/13;\n    display: grid;\n    grid-template-columns: 2fr repeat(10, 1fr) 2fr;\n    background-color: ",";\n    color: white;\n    box-shadow: 0px 0px 50px ",";\n\n    & h1 {\n        grid-column: 2/11;\n        font-family: ",";\n        font-size: 4vw;\n        font-weight: bold;\n        text-align: center;\n        padding-top: 15px;\n        white-space: nowrap; \n    }\n\n    & img {\n        grid-column: 11/12;\n        filter: invert(1);\n    }\n\n    & img:hover {\n        filter: invert(0);\n    }\n"]);return h=function(){return t},t}var f=u.a.div(h(),s.darkBlue,s.darkBlue,d.titleFont),g=function(){return a.a.createElement(f,null,a.a.createElement("h1",null," Coordinate To OSGB Converter"),a.a.createElement("img",{src:"./img/os_grid_icon.png",alt:"OS GRID logo from FunkyPenguin10's Flutter App"}))};function m(){var t=Object(l.a)(["\n    display: grid;\n    grid-row: 15/16;\n    grid-column: 1/13;\n    box-shadow: 0px 0px 50px ",";\n    background-color: ",";\n\n    color: white;\n    grid-template-columns: 2fr 2fr 2fr;\n \n    & h1 {\n        font-family: ",";\n        font-size: 1.5vw;\n        margin: 0 auto;\n    }\n\n    & img {\n        padding-top: 15px;\n        display: block;\n        margin: 0 auto;\n    }\n\n    & img:hover {\n        filter: invert(70%);\n    }\n"]);return m=function(){return t},t}var p=u.a.div(m(),s.darkBlue,s.darkBlue,d.footerFont),v=function(){return a.a.createElement(p,null,a.a.createElement("a",{href:"https://www.twitch.tv/youugotssponged/"},a.a.createElement("img",{src:"./img/twitch-tv-2-64.png",alt:"Link to my Twitch"})),a.a.createElement("a",{href:"https://www.github.com/youugotssponged/"},a.a.createElement("img",{src:"./img/GitHub-Mark-Light-64px.png",alt:"Link to my github"})),a.a.createElement("a",{href:"https://www.linkedin.com/in/jordan-mccann-b808b4156/"},a.a.createElement("img",{src:"./img/linkedin-64.png",alt:"Link to my LinkedIn"})),a.a.createElement("h1",null,"youugotssponged"),a.a.createElement("h1",null,"youugotssponged"),a.a.createElement("h1",null,"Jordan McCann"))},w=n(6),b=n(4),y=n(5),N=n(12),k=n(7),E=n(9),O=n(8),S="\u202f",x=function(){function t(){Object(b.a)(this,t)}return Object(y.a)(t,null,[{key:"parse",value:function(t){if(!isNaN(parseFloat(t))&&isFinite(t))return Number(t);var e=String(t).trim().replace(/^-/,"").replace(/[NSEW]$/i,"").split(/[^0-9.,]+/);if(""==e[e.length-1]&&e.splice(e.length-1),""==e)return NaN;var n=null;switch(e.length){case 3:n=e[0]/1+e[1]/60+e[2]/3600;break;case 2:n=e[0]/1+e[1]/60;break;case 1:n=e[0];break;default:return NaN}return/^-|[WS]$/i.test(t.trim())&&(n=-n),Number(n)}},{key:"toDms",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"d",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(isNaN(e))return null;if("string"==typeof e&&""==e.trim())return null;if("boolean"==typeof e)return null;if(e==1/0)return null;if(null==e)return null;if(void 0===r)switch(n){case"d":case"deg":r=4;break;case"dm":case"deg+min":r=2;break;case"dms":case"deg+min+sec":r=0;break;default:n="d",r=4}e=Math.abs(e);var a=null,o=null,i=null,l=null;switch(n){default:case"d":case"deg":(o=e.toFixed(r))<100&&(o="0"+o),o<10&&(o="0"+o),a=o+"\xb0";break;case"dm":case"deg+min":o=Math.floor(e),60==(i=(60*e%60).toFixed(r))&&(i=(0).toFixed(r),o++),i<10&&(i="0"+i),a=(o=("000"+o).slice(-3))+"\xb0"+t.separator+i+"\u2032";break;case"dms":case"deg+min+sec":o=Math.floor(e),i=Math.floor(3600*e/60)%60,60==(l=(3600*e%60).toFixed(r))&&(l=(0).toFixed(r),i++),60==i&&(i=0,o++),o=("000"+o).slice(-3),i=("00"+i).slice(-2),l<10&&(l="0"+l),a=o+"\xb0"+t.separator+i+"\u2032"+t.separator+l+"\u2033"}return a}},{key:"toLat",value:function(e,n,r){var a=t.toDms(t.wrap90(e),n,r);return null===a?"\u2013":a.slice(1)+t.separator+(e<0?"S":"N")}},{key:"toLon",value:function(e,n,r){var a=t.toDms(t.wrap180(e),n,r);return null===a?"\u2013":a+t.separator+(e<0?"W":"E")}},{key:"toBrng",value:function(e,n,r){var a=t.toDms(t.wrap360(e),n,r);return null===a?"\u2013":a.replace("360","0")}},{key:"fromLocale",value:function(t){var e=123456.789.toLocaleString(),n={thousands:e.slice(3,4),decimal:e.slice(7,8)};return t.replace(n.thousands,"\u205c").replace(n.decimal,".").replace("\u205c",",")}},{key:"toLocale",value:function(t){var e=123456.789.toLocaleString(),n={thousands:e.slice(3,4),decimal:e.slice(7,8)};return t.replace(/,([0-9])/,"\u205c$1").replace(".",n.decimal).replace("\u205c",n.thousands)}},{key:"compassPoint",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(![1,2,3].includes(Number(n)))throw new RangeError("invalid precision \u2018".concat(n,"\u2019"));e=t.wrap360(e);var r=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],a=4*Math.pow(2,n-1),o=r[Math.round(e*a/360)%a*16/a];return o}},{key:"wrap360",value:function(t){return 0<=t&&t<360?t:(t%360+360)%360}},{key:"wrap180",value:function(t){return-180<t&&t<=180?t:(t+540)%360-180}},{key:"wrap90",value:function(t){return-90<=t&&t<=90?t:Math.abs((t%360+270)%360-180)-90}},{key:"separator",get:function(){return S},set:function(t){S=t}}]),t}();Number.prototype.toRadians=function(){return this*Math.PI/180},Number.prototype.toDegrees=function(){return 180*this/Math.PI};var j=x,M=function(){function t(e,n,r){if(Object(b.a)(this,t),isNaN(e)||isNaN(e)||isNaN(e))throw new TypeError("invalid vector [".concat(e,",").concat(n,",").concat(r,"]"));this.x=Number(e),this.y=Number(n),this.z=Number(r)}return Object(y.a)(t,[{key:"plus",value:function(e){if(!(e instanceof t))throw new TypeError("v is not Vector3d object");return new t(this.x+e.x,this.y+e.y,this.z+e.z)}},{key:"minus",value:function(e){if(!(e instanceof t))throw new TypeError("v is not Vector3d object");return new t(this.x-e.x,this.y-e.y,this.z-e.z)}},{key:"times",value:function(e){if(isNaN(e))throw new TypeError("invalid scalar value \u2018".concat(e,"\u2019"));return new t(this.x*e,this.y*e,this.z*e)}},{key:"dividedBy",value:function(e){if(isNaN(e))throw new TypeError("invalid scalar value \u2018".concat(e,"\u2019"));return new t(this.x/e,this.y/e,this.z/e)}},{key:"dot",value:function(e){if(!(e instanceof t))throw new TypeError("v is not Vector3d object");return this.x*e.x+this.y*e.y+this.z*e.z}},{key:"cross",value:function(e){if(!(e instanceof t))throw new TypeError("v is not Vector3d object");return new t(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)}},{key:"negate",value:function(){return new t(-this.x,-this.y,-this.z)}},{key:"unit",value:function(){var e=this.length;return 1==e||0==e?this:new t(this.x/e,this.y/e,this.z/e)}},{key:"angleTo",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(!(e instanceof t))throw new TypeError("v is not Vector3d object");if(!(n instanceof t||void 0==n))throw new TypeError("n is not Vector3d object");var r=void 0==n||this.cross(e).dot(n)>=0?1:-1,a=this.cross(e).length*r,o=this.dot(e);return Math.atan2(a,o)}},{key:"rotateAround",value:function(e,n){if(!(e instanceof t))throw new TypeError("axis is not Vector3d object");var r=n.toRadians(),a=this.unit(),o=e.unit(),i=Math.sin(r),l=Math.cos(r),c=1-l,u=o.x,s=o.y,d=o.z,h=[[c*u*u+l,c*u*s-i*d,c*u*d+i*s],[c*u*s+i*d,c*s*s+l,c*s*d-i*u],[c*u*d-i*s,c*s*d+i*u,c*d*d+l]],f=[h[0][0]*a.x+h[0][1]*a.y+h[0][2]*a.z,h[1][0]*a.x+h[1][1]*a.y+h[1][2]*a.z,h[2][0]*a.x+h[2][1]*a.y+h[2][2]*a.z];return new t(f[0],f[1],f[2])}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return"[".concat(this.x.toFixed(t),",").concat(this.y.toFixed(t),",").concat(this.z.toFixed(t),"]")}},{key:"length",get:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}}]),t}();Number.prototype.toRadians=function(){return this*Math.PI/180},Number.prototype.toDegrees=function(){return 180*this/Math.PI};var D=M,L={WGS84:{a:6378137,b:6356752.314245,f:1/298.257223563}},G={WGS84:{ellipsoid:L.WGS84}};Object.freeze(L.WGS84),Object.freeze(G.WGS84);var C=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(Object(b.a)(this,t),isNaN(e))throw new TypeError("invalid lat \u2018".concat(e,"\u2019"));if(isNaN(n))throw new TypeError("invalid lon \u2018".concat(n,"\u2019"));if(isNaN(r))throw new TypeError("invalid height \u2018".concat(r,"\u2019"));this._lat=j.wrap90(Number(e)),this._lon=j.wrap180(Number(n)),this._height=Number(r)}return Object(y.a)(t,[{key:"toCartesian",value:function(){var t=this.datum?this.datum.ellipsoid:this.referenceFrame?this.referenceFrame.ellipsoid:L.WGS84,e=this.lat.toRadians(),n=this.lon.toRadians(),r=this.height,a=t.a,o=t.f,i=Math.sin(e),l=Math.cos(e),c=Math.sin(n),u=Math.cos(n),s=2*o-o*o,d=a/Math.sqrt(1-s*i*i);return new T((d+r)*l*u,(d+r)*l*c,(d*(1-s)+r)*i)}},{key:"equals",value:function(e){if(!(e instanceof t))throw new TypeError("invalid point \u2018".concat(e,"\u2019"));return!(Math.abs(this.lat-e.lat)>Number.EPSILON)&&(!(Math.abs(this.lon-e.lon)>Number.EPSILON)&&(!(Math.abs(this.height-e.height)>Number.EPSILON)&&(this.datum==e.datum&&(this.referenceFrame==e.referenceFrame&&this.epoch==e.epoch))))}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"d",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!["d","dm","dms","n"].includes(t))throw new RangeError("invalid format \u2018".concat(t,"\u2019"));var r=(this.height>=0?" +":" ")+this.height.toFixed(n)+"m";if("n"==t){void 0==e&&(e=4);var a=this.lat.toFixed(e),o=this.lon.toFixed(e);return"".concat(a,", ").concat(o).concat(null==n?"":r)}var i=j.toLat(this.lat,t,e),l=j.toLon(this.lon,t,e);return"".concat(i,", ").concat(l).concat(null==n?"":r)}},{key:"lat",get:function(){return this._lat},set:function(t){if(this._lat=isNaN(t)?j.wrap90(j.parse(t)):j.wrap90(Number(t)),isNaN(this._lat))throw new TypeError("invalid lat \u2018".concat(t,"\u2019"))}},{key:"latitude",get:function(){return this._lat},set:function(t){if(this._lat=isNaN(t)?j.wrap90(j.parse(t)):j.wrap90(Number(t)),isNaN(this._lat))throw new TypeError("invalid latitude \u2018".concat(t,"\u2019"))}},{key:"lon",get:function(){return this._lon},set:function(t){if(this._lon=isNaN(t)?j.wrap180(j.parse(t)):j.wrap180(Number(t)),isNaN(this._lon))throw new TypeError("invalid lon \u2018".concat(t,"\u2019"))}},{key:"lng",get:function(){return this._lon},set:function(t){if(this._lon=isNaN(t)?j.wrap180(j.parse(t)):j.wrap180(Number(t)),isNaN(this._lon))throw new TypeError("invalid lng \u2018".concat(t,"\u2019"))}},{key:"longitude",get:function(){return this._lon},set:function(t){if(this._lon=isNaN(t)?j.wrap180(j.parse(t)):j.wrap180(Number(t)),isNaN(this._lon))throw new TypeError("invalid longitude \u2018".concat(t,"\u2019"))}},{key:"height",get:function(){return this._height},set:function(t){if(this._height=Number(t),isNaN(this._height))throw new TypeError("invalid height \u2018".concat(t,"\u2019"))}},{key:"datum",get:function(){return this._datum},set:function(t){this._datum=t}}],[{key:"parse",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0==e.length)throw new TypeError("invalid (empty) point");var r=void 0,a=void 0,o=void 0;if("object"==typeof e[0]&&(1==e.length||!isNaN(parseFloat(e[1])))){var i=e[0];if("Point"==i.type&&Array.isArray(i.coordinates)){var l=Object(w.a)(i.coordinates,3);a=l[0],r=l[1],o=(o=l[2])||0}else void 0!=i.latitude&&(r=i.latitude),void 0!=i.lat&&(r=i.lat),void 0!=i.longitude&&(a=i.longitude),void 0!=i.lng&&(a=i.lng),void 0!=i.lon&&(a=i.lon),void 0!=i.height&&(o=i.height),r=j.wrap90(j.parse(r)),a=j.wrap180(j.parse(a));if(void 0!=e[1]&&(o=e[1]),isNaN(r)||isNaN(a))throw new TypeError("invalid point \u2018".concat(JSON.stringify(e[0]),"\u2019"))}if("string"==typeof e[0]&&2==e[0].split(",").length){var c=e[0].split(","),u=Object(w.a)(c,2);if(r=u[0],a=u[1],r=j.wrap90(j.parse(r)),a=j.wrap180(j.parse(a)),o=e[1]||0,isNaN(r)||isNaN(a))throw new TypeError("invalid point \u2018".concat(e[0],"\u2019"))}if(void 0==r&&void 0==a&&(r=e[0],a=e[1],r=j.wrap90(j.parse(r)),a=j.wrap180(j.parse(a)),o=e[2]||0,isNaN(r)||isNaN(a)))throw new TypeError("invalid point \u2018".concat(e.toString(),"\u2019"));return new this(r,a,o)}},{key:"ellipsoids",get:function(){return L}},{key:"datums",get:function(){return G}}]),t}(),T=function(t){Object(E.a)(n,t);var e=Object(O.a)(n);function n(t,r,a){return Object(b.a)(this,n),e.call(this,t,r,a)}return Object(y.a)(n,[{key:"toLatLon",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L.WGS84;if(!t||!t.a)throw new TypeError("invalid ellipsoid \u2018".concat(t,"\u2019"));var e=this.x,n=this.y,r=this.z,a=t.a,o=t.b,i=t.f,l=2*i-i*i,c=l/(1-l),u=Math.sqrt(e*e+n*n),s=Math.sqrt(u*u+r*r),d=o*r/(a*u)*(1+c*o/s),h=d/Math.sqrt(1+d*d),f=h/d,g=isNaN(f)?0:Math.atan2(r+c*o*h*h*h,u-l*a*f*f*f),m=Math.atan2(n,e),p=Math.sin(g),v=Math.cos(g),w=a/Math.sqrt(1-l*p*p),b=u*v+r*p-a*a/w,y=new C(g.toDegrees(),m.toDegrees(),b);return y}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.x.toFixed(t),n=this.y.toFixed(t),r=this.z.toFixed(t);return"[".concat(e,",").concat(n,",").concat(r,"]")}}]),n}(D),F={WGS84:{a:6378137,b:6356752.314245,f:1/298.257223563},Airy1830:{a:6377563.396,b:6356256.909,f:1/299.3249646},AiryModified:{a:6377340.189,b:6356034.448,f:1/299.3249646},Bessel1841:{a:6377397.155,b:6356078.962818,f:1/299.1528128},Clarke1866:{a:6378206.4,b:6356583.8,f:1/294.978698214},Clarke1880IGN:{a:6378249.2,b:6356515,f:1/293.466021294},GRS80:{a:6378137,b:6356752.31414,f:1/298.257222101},Intl1924:{a:6378388,b:6356911.946,f:1/297},WGS72:{a:6378135,b:6356750.5,f:1/298.26}},B={ED50:{ellipsoid:F.Intl1924,transform:[89.5,93.8,123.1,-1.2,0,0,.156]},ETRS89:{ellipsoid:F.GRS80,transform:[0,0,0,0,0,0,0]},Irl1975:{ellipsoid:F.AiryModified,transform:[-482.53,130.596,-564.557,-8.15,1.042,.214,.631]},NAD27:{ellipsoid:F.Clarke1866,transform:[8,-160,-176,0,0,0,0]},NAD83:{ellipsoid:F.GRS80,transform:[.9956,-1.9103,-.5215,-62e-5,.025915,.009426,.011599]},NTF:{ellipsoid:F.Clarke1880IGN,transform:[168,60,-320,0,0,0,0]},OSGB36:{ellipsoid:F.Airy1830,transform:[-446.448,125.157,-542.06,20.4894,-.1502,-.247,-.8421]},Potsdam:{ellipsoid:F.Bessel1841,transform:[-582,-105,-414,-8.3,1.04,.35,-3.08]},TokyoJapan:{ellipsoid:F.Bessel1841,transform:[148,-507,-685,0,0,0,0]},WGS72:{ellipsoid:F.WGS72,transform:[0,0,-4.5,-.22,0,0,.554]},WGS84:{ellipsoid:F.WGS84,transform:[0,0,0,0,0,0,0]}};Object.keys(F).forEach((function(t){return Object.freeze(F[t])})),Object.keys(B).forEach((function(t){Object.freeze(B[t]),Object.freeze(B[t].transform)}));var R=function(t){Object(E.a)(n,t);var e=Object(O.a)(n);function n(t,r){var a,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:B.WGS84;if(Object(b.a)(this,n),!i||void 0==i.ellipsoid)throw new TypeError("unrecognised datum \u2018".concat(i,"\u2019"));return(a=e.call(this,t,r,o))._datum=i,a}return Object(y.a)(n,[{key:"convertDatum",value:function(t){if(!t||void 0==t.ellipsoid)throw new TypeError("unrecognised datum \u2018".concat(t,"\u2019"));return this.toCartesian().convertDatum(t).toLatLon()}},{key:"toCartesian",value:function(){var t=Object(N.a)(Object(k.a)(n.prototype),"toCartesian",this).call(this);return new z(t.x,t.y,t.z,this.datum)}},{key:"datum",get:function(){return this._datum}}],[{key:"parse",value:function(){for(var t,e=B.WGS84,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];if((4==a.length||3==a.length&&"object"==typeof a[2])&&(e=a.pop()),!e||void 0==e.ellipsoid)throw new TypeError("unrecognised datum \u2018".concat(e,"\u2019"));var i=(t=Object(N.a)(Object(k.a)(n),"parse",this)).call.apply(t,[this].concat(a));return i._datum=e,i}},{key:"ellipsoids",get:function(){return F}},{key:"datums",get:function(){return B}}]),n}(C),z=function(t){Object(E.a)(n,t);var e=Object(O.a)(n);function n(t,r,a){var o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(Object(b.a)(this,n),i&&void 0==i.ellipsoid)throw new TypeError("unrecognised datum \u2018".concat(i,"\u2019"));return o=e.call(this,t,r,a),i&&(o._datum=i),o}return Object(y.a)(n,[{key:"toLatLon",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;t&&(console.info("datum parameter to Cartesian_Datum.toLatLon is deprecated: set datum before calling toLatLon()"),this.datum=t);var e=this.datum||B.WGS84;if(!e||void 0==e.ellipsoid)throw new TypeError("unrecognised datum \u2018".concat(e,"\u2019"));var r=Object(N.a)(Object(k.a)(n.prototype),"toLatLon",this).call(this,e.ellipsoid),a=new R(r.lat,r.lon,r.height,this.datum);return a}},{key:"convertDatum",value:function(t){if(!t||void 0==t.ellipsoid)throw new TypeError("unrecognised datum \u2018".concat(t,"\u2019"));if(!this.datum)throw new TypeError("cartesian coordinate has no datum");var e=null,n=null;void 0!=this.datum&&this.datum!=B.WGS84||(e=this,n=t.transform),t==B.WGS84&&(e=this,n=this.datum.transform.map((function(t){return-t}))),null==n&&(e=this.convertDatum(B.WGS84),n=t.transform);var r=e.applyTransform(n);return r.datum=t,r}},{key:"applyTransform",value:function(t){var e=this.x,r=this.y,a=this.z,o=t[0],i=t[1],l=t[2],c=t[3]/1e6+1,u=(t[4]/3600).toRadians(),s=(t[5]/3600).toRadians(),d=(t[6]/3600).toRadians();return new n(o+e*c-r*d+a*s,i+e*d+r*c-a*u,l-e*s+r*u+a*c)}},{key:"datum",get:function(){return this._datum},set:function(t){if(!t||void 0==t.ellipsoid)throw new TypeError("unrecognised datum \u2018".concat(t,"\u2019"));this._datum=t}}]),n}(T),A=function(){function t(e,n){if(Object(b.a)(this,t),this.easting=Number(e),this.northing=Number(n),isNaN(e)||this.easting<0||this.easting>7e5)throw new RangeError("invalid easting \u2018".concat(e,"\u2019"));if(isNaN(n)||this.northing<0||this.northing>13e5)throw new RangeError("invalid northing \u2018".concat(n,"\u2019"))}return Object(y.a)(t,[{key:"toLatLon",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.datums.WGS84,e=this.easting,n=this.northing,r=6377563.396,a=6356256.909,o=.9996012717,i=49..toRadians(),l=(-2).toRadians(),c=-1e5,u=4e5,s=1-a*a/(r*r),d=(r-a)/(r+a),h=d*d,f=d*d*d,g=i,m=0;do{var p=(1+d+5/4*h+5/4*f)*((g=(n-c-m)/(r*o)+g)-i),v=(3*d+3*d*d+21/8*f)*Math.sin(g-i)*Math.cos(g+i),w=(15/8*h+15/8*f)*Math.sin(2*(g-i))*Math.cos(2*(g+i)),b=35/24*f*Math.sin(3*(g-i))*Math.cos(3*(g+i));m=a*o*(p-v+w-b)}while(Math.abs(n-c-m)>=1e-5);var y=Math.cos(g),N=Math.sin(g),k=r*o/Math.sqrt(1-s*N*N),E=r*o*(1-s)/Math.pow(1-s*N*N,1.5),O=k/E-1,S=Math.tan(g),x=S*S,j=x*x,M=j*x,D=1/y,L=k*k*k,G=L*k*k,C=G*k*k,T=S/(2*E*k),F=S/(24*E*L)*(5+3*x+O-9*x*O),B=S/(720*E*G)*(61+90*x+45*j),z=D/k,A=D/(6*L)*(k/E+2*x),_=D/(120*G)*(5+28*x+24*j),I=D/(5040*C)*(61+662*x+1320*j+720*M),P=e-u,V=P*P,q=V*P,H=V*V,J=q*V,$=H*V,U=J*V,X=l+z*P-A*q+_*J-I*U,Y=new W((g=g-T*V+F*H-B*$).toDegrees(),X.toDegrees(),0,R.datums.OSGB36);return t!=R.datums.OSGB36&&(Y=Y.convertDatum(t),Y=new W(Y.lat,Y.lon,Y.height,Y.datum)),Y}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;if(![0,2,4,6,8,10,12,14,16].includes(Number(t)))throw new RangeError("invalid precision \u2018".concat(t,"\u2019"));var e=this.easting,n=this.northing;if(0==t){var r={useGrouping:!1,minimumIntegerDigits:6,maximumFractionDigits:3},a=e.toLocaleString("en",r),o=n.toLocaleString("en",r);return"".concat(a,",").concat(o)}var i=Math.floor(e/1e5),l=Math.floor(n/1e5),c=19-l-(19-l)%5+Math.floor((i+10)/5),u=5*(19-l)%25+i%5;c>7&&c++,u>7&&u++;var s=String.fromCharCode(c+"A".charCodeAt(0),u+"A".charCodeAt(0));return e=Math.floor(e%1e5/Math.pow(10,5-t/2)),n=Math.floor(n%1e5/Math.pow(10,5-t/2)),e=e.toString().padStart(t/2,"0"),n=n.toString().padStart(t/2,"0"),"".concat(s," ").concat(e," ").concat(n)}}],[{key:"parse",value:function(e){var n=(e=String(e).trim()).match(/^(\d+),\s*(\d+)$/);if(n)return new t(n[1],n[2]);if(!(n=e.match(/^[HNST][ABCDEFGHJKLMNOPQRSTUVWXYZ]\s*[0-9]+\s*[0-9]+$/i)))throw new Error("invalid grid reference \u2018".concat(e,"\u2019"));var r=e.toUpperCase().charCodeAt(0)-"A".charCodeAt(0),a=e.toUpperCase().charCodeAt(1)-"A".charCodeAt(0);r>7&&r--,a>7&&a--;var o=(r-2)%5*5+a%5,i=19-5*Math.floor(r/5)-Math.floor(a/5),l=e.slice(2).trim().split(/\s+/);if(1==l.length&&(l=[l[0].slice(0,l[0].length/2),l[0].slice(l[0].length/2)]),l[0].length!=l[1].length)throw new Error("invalid grid reference \u2018".concat(e,"\u2019"));return l[0]=l[0].padEnd(5,"0"),l[1]=l[1].padEnd(5,"0"),new t(o+l[0],i+l[1])}}]),t}(),W=function(t){Object(E.a)(n,t);var e=Object(O.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(y.a)(n,[{key:"toOsGrid",value:function(){var t=this.datum==R.datums.OSGB36?this:this.convertDatum(R.datums.OSGB36),e=t.lat.toRadians(),n=t.lon.toRadians(),r=6377563.396,a=6356256.909,o=.9996012717,i=49..toRadians(),l=(-2).toRadians(),c=1-a*a/(r*r),u=(r-a)/(r+a),s=u*u,d=u*u*u,h=Math.cos(e),f=Math.sin(e),g=r*o/Math.sqrt(1-c*f*f),m=r*o*(1-c)/Math.pow(1-c*f*f,1.5),p=g/m-1,v=a*o*(1.0016767257673973*(e-i)-(3*u+3*u*u+21/8*d)*Math.sin(e-i)*Math.cos(e+i)+(15/8*s+15/8*d)*Math.sin(2*(e-i))*Math.cos(2*(e+i))-35/24*d*Math.sin(3*(e-i))*Math.cos(3*(e+i))),w=h*h*h,b=w*h*h,y=Math.tan(e)*Math.tan(e),N=y*y,k=n-l,E=k*k,O=E*k,S=O*k,x=S*k,j=v+-1e5+g/2*f*h*E+g/24*f*w*(5-y+9*p)*S+g/720*f*b*(61-58*y+N)*(x*k),M=4e5+g*h*k+g/6*w*(g/m-y)*O+g/120*b*(5-18*y+N+14*p-58*y*p)*x;j=Number(j.toFixed(3)),M=Number(M.toFixed(3));try{return new A(M,j)}catch(D){throw new Error("".concat(D.message," from (").concat(t.lat.toFixed(6),",").concat(t.lon.toFixed(6),").toOsGrid()"))}}}]),n}(R),_=function(){function t(){Object(b.a)(this,t)}return Object(y.a)(t,[{key:"getOSGB_FromDec",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;null==n&&(n=B.WGS84);var r=new W(t,e),a=r.toOsGrid();return a}},{key:"getOSGB_FromDMS",value:function(t,e,n,r,a,o){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;null==i&&(i=B.WGS84);var l=this.getDecimalFromDegree(t,e,n),c=this.getDecimalFromDegree(r,a,o),u=new W(l,c),s=u.toOsGrid();return s}},{key:"getLatLong_FromOSGB",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;null==n&&(n=B.WGS84);var r=new A(t,e),a=r.toLatLon(n);return a}},{key:"getDecimalFromDegree",value:function(t,e,n){var r=t;return r<0&&(r*=-1),r+=e/60,r+=n/3600,t<0&&(r*=-1),r}},{key:"getDegreeFromDecimal",value:function(t){var e=t;t<0&&(e*=-1);var n=Number(e),r=Number(60*(e-n)),a=3600*(e-n-r/60);return[Number(t),r,a]}}]),t}();function I(){var t=Object(l.a)(["\n    grid-column: 2/12;\n    grid-row: 4/12;\n\n    background-color: white;\n    border-radius: 30px;\n\n    border-style: solid;\n    border-color: ",";\n    border-width: 5px;\n\n    display: grid;\n    grid-template-rows: repeat(7, 2fr);\n    grid-template-columns: repeat(7, 2fr);\n\n    font-family: ",";\n\n    & .LatInput {\n        grid-column: 2/4;\n        grid-row: 2/3;\n        text-align: center;\n        font-size: 1.5vw;\n    }\n    & .LongInput {\n        grid-column: 5/7;\n        grid-row: 2/3;\n        text-align: center;\n        font-size: 1.5vw;\n    }\n\n    & .ConvertButton {\n        grid-column: 3/6;\n        grid-row: 4/5;\n        font-size: 1.3vw;\n\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n\n        width: 17vw;\n    }\n\n    & .output {\n        grid-row: 6/7;\n        grid-column: 3/6;\n        font-size: 1.3vw;\n        text-align: center;\n    }\n\n    & .DecToDegButton {\n        grid-row: 4/5;\n        grid-column: 2/3;\n    }\n\n    & .ClearButton {\n        grid-column: 6/7;\n        grid-row: 4/5;\n    }\n"]);return I=function(){return t},t}var P=u.a.div(I(),s.darkBlue,d.titleFont),V=function(t){var e=Object(r.useState)(!0),n=Object(w.a)(e,2),o=n[0],i=n[1],l=Object(r.useState)("(Degrees)"),c=Object(w.a)(l,2),u=c[0],s=c[1],d=Object(r.useRef)(null),h=Object(r.useRef)(null),f=Object(r.useRef)(null),g=new _,m=function(){return o?void s("(Decimal)"):void s("(Degrees)")};return a.a.createElement(P,null,a.a.createElement("input",{ref:d,type:"text",className:"LatInput",placeholder:"Latitude N"}),a.a.createElement("input",{ref:h,type:"text",className:"LongInput",placeholder:"Longitude E"}),a.a.createElement("button",{className:"ConvertButton",onClick:function(){var t=Number(d.current.value),e=Number(h.current.value),n=null;if(""!==d.current.value&&""!==h.current.value)try{if(o)n=g.getOSGB_FromDec(t,e),f.current.value="".concat(Math.ceil(n.easting),", ").concat(Math.ceil(n.northing));else{var r=g.getDegreeFromDecimal(t),a=Object(w.a)(r,3),i=a[0],l=a[1],c=a[2],u=g.getDegreeFromDecimal(e),s=Object(w.a)(u,3),m=s[0],p=s[1],v=s[2];console.table(i,l,c,m,p,v),n=g.getOSGB_FromDMS(i,l,c,m,p,v),f.current.value="".concat(Math.ceil(n.easting),", ").concat(Math.ceil(n.northing))}}catch(b){return console.error("ERROR: INVALID Latitude / Longitude"),void alert("ERROR: INVALID Latitude / Longitude")}else alert("Please enter an Latitude And a Longitude Value!")}},"Convert"),a.a.createElement("button",{className:"DecToDegButton",onClick:function(){return m(),void i(!o)}},"Switch to ",u),a.a.createElement("button",{className:"ClearButton",onClick:function(){return d.current.value="",h.current.value="",f.current.value="",void console.log("ClearTextHandler(): Text cleared")}},"Clear All"),a.a.createElement("input",{ref:f,type:"text",className:"output",placeholder:"Your OS Grid Reference"}))};function q(){var t=Object(l.a)(["\n    grid-column: 2/12;\n    grid-row: 4/12;\n\n    background-color: white;\n    border-radius: 30px;\n\n    border-style: solid;\n    border-color: ",";\n    border-width: 5px;\n\n    display: grid;\n    grid-template-rows: repeat(7, 2fr);\n    grid-template-columns: repeat(7, 2fr);\n\n    font-family: ",";\n\n    & .EastingInput {\n        grid-column: 2/4;\n        grid-row: 2/3;\n        text-align: center;\n        font-size: 1.5vw;\n    }\n\n    & .NorthingInput {\n        grid-column: 5/7;\n        grid-row: 2/3;\n        text-align: center;\n        font-size: 1.5vw;\n    }\n\n    & .ConvertButton {\n        grid-column: 3/6;\n        grid-row: 4/5;\n        font-size: 1.3vw;\n\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n\n        width: 17vw;\n    }\n\n    & .output {\n        grid-row: 6/7;\n        grid-column: 3/6;\n        font-size: 1.3vw;\n        text-align: center;\n    }\n\n    & .DecToDegButton {\n        grid-row: 4/5;\n        grid-column: 2/3;\n    }\n\n    & .ClearButton {\n        grid-column: 6/7;\n        grid-row: 4/5;\n    }\n"]);return q=function(){return t},t}var H=u.a.div(q(),s.darkBlue,d.titleFont),J=function(t){var e=Object(r.useState)(!0),n=Object(w.a)(e,2),o=n[0],i=n[1],l=Object(r.useState)("(Degrees)"),c=Object(w.a)(l,2),u=c[0],s=c[1],d=Object(r.useRef)(null),h=Object(r.useRef)(null),f=Object(r.useRef)(null),g=new _,m=function(){return o?void s("(Decimal)"):void s("(Degrees)")};return a.a.createElement(H,null,a.a.createElement("input",{ref:d,type:"text",className:"EastingInput",placeholder:"Easting"}),a.a.createElement("input",{ref:h,type:"text",className:"NorthingInput",placeholder:"Northing"}),a.a.createElement("button",{className:"ConvertButton",onClick:function(){var t=Number(d.current.value),e=Number(h.current.value),n=null;if(""!==d.current.value&&""!==h.current.value)try{o&&(n=g.getLatLong_FromOSGB(t,e),f.current.value="".concat(n))}catch(r){return console.error("ERROR: INVALID EASTING / NORTHING"),void alert("ERROR: INVALID EASTING / NORTHING")}else alert("Please enter an Easting And A Northing Value!")}},"Convert"),a.a.createElement("button",{className:"DecToDegButton",onClick:function(){return m(),void i(!o)}},"Switch to ",u),a.a.createElement("button",{className:"ClearButton",onClick:function(){return d.current.value="",h.current.value="",f.current.value="",void console.log("ClearTextHandler(): Text cleared")}},"Clear All"),a.a.createElement("input",{ref:f,type:"text",className:"output",placeholder:"Your Latitude and Longitude"}))};function $(){var t=Object(l.a)(["\n    grid-row: 2/3;\n    grid-column: 8/12;\n\n    font-size: 1.5vw;\n    border-radius: 30px;\n\n    border-style: solid;\n    border-color: ",";\n    border-width: 5px;\n    width: 50%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n\n    background-color: ",";\n    color: black;\n"]);return $=function(){return t},t}function U(){var t=Object(l.a)(["\n    grid-row: 2/3;\n    grid-column: 2/6;\n\n    font-size: 1.5vw;\n    border-radius: 30px;\n    border-style: solid;\n    border-color: ",";\n    border-width: 5px;\n    width: 50%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n\n    background-color: ",";\n    color: black;\n"]);return U=function(){return t},t}function X(){var t=Object(l.a)(["\n    grid-row: 2/3;\n    grid-column: 6/8;\n    padding-top: 10px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    transform: ",";\n"]);return X=function(){return t},t}function Y(){var t=Object(l.a)(["\n    background-color: ",";\n    grid-row: 3/14;\n    grid-column: 2/12;\n    border-radius: 30px;\n    border-style: solid;\n    border-color: ",";\n    border-width: 20px;\n\n    display: grid;\n    grid-template-columns: repeat(12, 2fr);\n    grid-template-rows: repeat(12, 2fr);\n"]);return Y=function(){return t},t}var Z=u.a.div(Y(),s.lightPurple,s.darkBlue),K=u.a.img(X(),(function(t){return t.flipDirection})),Q=u.a.button(U(),s.darkBlue,(function(t){return t.activeColor})),tt=u.a.button($(),s.darkBlue,(function(t){return t.activeColor})),et=function(){var t=Object(r.useState)(!0),e=Object(w.a)(t,2),n=e[0],o=e[1],i=Object(r.useState)(!1),l=Object(w.a)(i,2),c=l[0],u=l[1];return a.a.createElement(Z,null,a.a.createElement(Q,{activeColor:n?s.activeGreen:"white",disabled:n,onClick:function(){return u(!c),o(!n),console.log("LatLong: ".concat(n)),void console.log("OSGB: ".concat(c))}},"Lat/Long"),a.a.createElement(K,{src:"./img/arrow.png",flipDirection:n?"scaleX(-1)":"scaleX(1)"}),a.a.createElement(tt,{activeColor:c?s.activeGreen:"white",disabled:c,onClick:function(){return u(!c),o(!n),console.log("LatLong: ".concat(n)),void console.log("OSGB: ".concat(c))}},"OSGB"),n?a.a.createElement(V,null):c?a.a.createElement(J,null):void console.log("Error: Neither Areas are rendering..."))};function nt(){var t=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 2fr repeat(10, 1fr) 2fr;\n    grid-template-rows: 2fr repeat(13, 1fr) 2.12fr;\n"]);return nt=function(){return t},t}var rt=u.a.div(nt()),at=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,null,a.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=ABeeZee:ital@1&display=swap",rel:"stylesheet"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap",rel:"stylesheet"})),a.a.createElement(rt,null,a.a.createElement(g,null),a.a.createElement(et,null)," ",a.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(at,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f4d7909b.chunk.js.map