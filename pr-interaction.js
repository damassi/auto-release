(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{60:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=l(r(2)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(0));l(r(1)),l(r(63));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});if(1===l)t.children=n;else if(l>1){for(var i=new Array(l),s=0;s<l;s++)i[s]=arguments[s+3];t.children=i}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p=e=>{let{to:t}=e,r=c(e,["to"]);return t.includes("http")?a.default.createElement("a",s({},e,{href:t})):("#"===t[0]&&(t=n.default.join("/auto-release/","pages/pr-interaction.html")+t),a.default.createElement("a",s({},r,{href:t,onClick:r=>{if(r.preventDefault(),"#"===e.to)return!1;const o=new URL(n.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,t),e.onClick();const a=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(a),!1}})))};p.defaultProps={href:"",onClick:()=>{}};const d=e=>{var t,r;return r=t=class extends a.default.Component{constructor(...e){super(...e),i(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?a.default.createElement(e,this.props,this.props.children||null):null}},i(t,"defaultProps",{shouldLoad:!0}),r};d(()=>r.e(24).then(r.bind(null,64))),d(()=>r.e(24).then(r.bind(null,65)));var f=u("h1",{},void 0,"Pull Request Interaction"),h=u("p",{},void 0,u("code",{},void 0,"auto-release")," also includes a variety of PR interaction tools to update PRs from the CI. You can use these tools in various ways to make your PR validation process much more customized."),v=u("br",{}),m=u("p",{},void 0,"Tools:");var y=e=>u("div",{className:e.className},void 0,u("section",{},void 0,f,h,v,m,u("p",{},void 0,"⭐️ ",u(p,{currentPage:e.currentPage,to:"/auto-release/pages/auto-label.html"},void 0,"auto-label")," - Get the labels for a PR"),u("p",{},void 0,"⭐️ ",u(p,{currentPage:e.currentPage,to:"/auto-release/pages/auto-pr.html"},void 0,"auto-pr")," - Set a status on a PR"),u("p",{},void 0,"⭐️ ",u(p,{currentPage:e.currentPage,to:"/auto-release/pages/auto-pr-check.html"},void 0,"auto-pr-check")," - Check for a semver label and set a status"),u("p",{},void 0,"⭐️ ",u(p,{currentPage:e.currentPage,to:"/auto-release/pages/auto-comment.html"},void 0,"auto-comment")," - Comment on a PR")));t.default=y,e.exports=t.default}}]);
//# sourceMappingURL=pr-interaction.js.map