!function(e){function t(t){for(var r,u,a=t[0],i=t[1],c=t[2],f=0,s=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(d&&d(t);s.length;)s.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={4:0},l=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var d=i;l.push([16,0]),n()}([,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={font:{family:{main:"'Ubuntu', sans-serif"}},colors:{main_default:"#0099ff",alt_default:"#e0d0a2",grey_text_default:"#404c54",grey_text_placeholder:"#b5c0c7",grey_background:"#eaedef"}}},,,,,,,,,function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(12));t.getCookiesByWebsite=function(e){const t=e.reduce((e,t)=>{const n=t.domain.replace(o.default.firstDot,""),r=e[n],l=(null==r?void 0:r.count)||0,u=(null==r?void 0:r.cookies)||[];return Object.assign(Object.assign({},e),{[n]:{cookies:[...u,t],count:l+1}})},{});return{entities:t,ids:Object.keys(t)}},t.copyCookiesToWebsite=function(e,t){e&&t&&t.forEach(t=>{chrome.cookies.set({url:e,name:t.name,value:t.value})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={domain:/:\/\/(.[^/]+)/,firstDot:/^\./}},,,,function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(0)),l=r(n(7)),u=r(n(21)),a=r(n(24));l.default.render(o.default.createElement(o.default.StrictMode,null,o.default.createElement(u.default,null),o.default.createElement(()=>o.default.createElement(o.default.Fragment,null,o.default.createElement(a.default,null)),null)),document.getElementById("root"))},,,,,function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),l=r(n(2)),u=o.createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,700;1,400&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-family: ${l.default.font.family.main};
    color: ${l.default.colors.grey_text_default};
  }

  input {
    font-family: ${l.default.font.family.main};
    color: ${l.default.colors.grey_text_default};
    appearance: none;
    border: none;
    :focus, :active {
      outline: none;
    } 
  }

  button {
    font-family: ${l.default.font.family.main};
    appearance: none;
    border: 0;
    padding: 0;
    background: none;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    text-transform: none;
    overflow: visible;
    :not(:disabled) {
      cursor: pointer;
    }
  }


`;t.default=u},,,function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(0)),u=o(n(25)),a=o(n(37)),i=o(n(38)),c=r(n(39)),d=o(n(40));t.default=()=>{const{url:e,domain:t}=i.default(),{entities:n,ids:r}=a.default(),[o,f]=l.useState("");return l.default.createElement(c.Container,null,l.default.createElement(c.TitleBar,null,l.default.createElement(c.Title,null,t)),l.default.createElement(c.HeroPicture,{imgSrc:"assets/img/cookie-monster-dancing.gif"}),l.default.createElement(c.Search,null,l.default.createElement("input",{defaultValue:o,placeholder:"Find cookies...",onChange:u.default(e=>f(e.target.value),250)})),l.default.createElement("div",null,r.filter(e=>e.includes(o)).splice(0,5).map(t=>{var r,o;return l.default.createElement(d.default,{key:t,url:e||"",count:(null===(r=n[t])||void 0===r?void 0:r.count)||0,name:t,cookies:(null===(o=n[t])||void 0===o?void 0:o.cookies)||[]})})))}},,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(11);t.default=function(){const[e,t]=r.useState([]),{entities:n,ids:l}=o.getCookiesByWebsite(e);return r.useEffect(()=>{chrome.cookies.getAll({},e=>t(e))},[]),{entities:n,ids:l}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),l=r(n(12));t.default=function(){const[e,t]=o.useState(),n=null==e?void 0:e.url,r=null==n?void 0:n.match(l.default.domain),u=r&&r[1];return o.useEffect(()=>{chrome.tabs.query({active:!0,currentWindow:!0},e=>{const n=e[0];t(n)})},[]),{tab:e,domain:u,url:n}}},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(1)),u=o(n(2));t.Container=l.default.div``,t.HeroPicture=l.default.picture`
  ${({imgSrc:e})=>l.css`
    display: block;
    width: 24rem;
    height: 10rem;
    background-image: url(${e});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  `}
`,t.TitleBar=l.default.header`
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  padding: 0.75rem 0.5rem;
  background: ${u.default.colors.main_default};
  color: white;
`,t.Title=l.default.p`
  margin: 0;
  font-weight: bold;
`,t.CookiesCount=l.default.p`
  margin: 0;
  font-weight: lighter;
`,t.Search=l.default.div`
  background: ${u.default.colors.grey_background};
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    font-size: 1.15rem;
    padding: 0.5rem 0.875rem;
    ::placeholder {
      color: ${u.default.colors.grey_text_placeholder}
    }
  }
`},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(0)),u=n(46),a=n(11),i=o(n(41));t.default=e=>{const{name:t,count:n,cookies:r,url:o}=e;return l.default.createElement(i.Container,null,l.default.createElement(i.Count,null,l.default.createElement("span",null,n)),l.default.createElement(i.Name,null,t),l.default.createElement(i.ButtonContainer,null,l.default.createElement(i.Button,{onClick:()=>a.copyCookiesToWebsite(o,r)},l.default.createElement(u.RiArrowDownCircleLine,null))))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(1)),l=n(42),u=r(n(2));t.Container=o.default.div`
  border-bottom: 1px solid;
  border-color: ${u.default.colors.grey_background};
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
`,t.Count=o.default.p`
  margin: 0;
  font-size: 11px;
  color: black;
  background: ${u.default.colors.alt_default};
  border-radius: 999px;
  font-weight: bold;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75em;
`,t.Name=o.default.p`
  margin: 0;
`,t.ButtonContainer=o.default.div`
  margin-left: auto;
`,t.Button=o.default(l.IconButton)`
  width: 2rem;
  height: 2rem;
  color: ${u.default.colors.main_default};
`},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(1)),l=r(n(2));t.IconButton=o.default.button`
  padding: 0.275rem;
  transition: background-color 0.15s linear;
  border-radius: 999px;

  :hover {
    background-color: ${l.default.colors.grey_background};
  }

  :active {
    background-color: ${l.default.colors.alt_default};
  }

  > * {
    width: 100%;
    height: 100%;
  }
`}]);