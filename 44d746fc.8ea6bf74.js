(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(268)),i={id:"object_instantiation_changes",title:"Object instantiation changes",hide_title:!0},c={unversionedId:"upgrades/0.11_to_1.0/object_instantiation_changes",id:"upgrades/0.11_to_1.0/object_instantiation_changes",isDocsHomePage:!1,title:"Object instantiation changes",description:"Object instantiation changes",source:"@site/docs/upgrades/0.11_to_1.0/object_instantiation_changes.md",slug:"/upgrades/0.11_to_1.0/object_instantiation_changes",permalink:"/docs/next/upgrades/0.11_to_1.0/object_instantiation_changes",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/0.11_to_1.0/object_instantiation_changes.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1616552787,sidebar:"docs",previous:{title:"strict flag mode deprecation",permalink:"/docs/next/upgrades/0.11_to_1.0/strict_mode_flag_deprecated"}},s=[{value:"Object instantiation changes",id:"object-instantiation-changes",children:[]},{value:"Hydra configuration",id:"hydra-configuration",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"object-instantiation-changes"},"Object instantiation changes"),Object(o.b)("p",null,"Hydra 1.0.0 is deprecating ObjectConf and the corresponding config structure to a simpler one without the params node.\nThis removes a level of nesting from command line and configs overrides."),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Hydra 0.11"',title:'"Hydra','0.11"':!0}),"class: my_app.MySQLConnection\nparams:\n  host: localhost\n  user: root\n  password: 1234\n"))),Object(o.b)("div",{className:"col  col--6"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Hydra 1.0"',title:'"Hydra','1.0"':!0}),"_target_: my_app.MySQLConnection\nhost: localhost\nuser: root\npassword: 1234\n\n")))),Object(o.b)("h2",{id:"hydra-configuration"},"Hydra configuration"),Object(o.b)("p",null,"Hydra plugins are configured using the same mechanism.\nThis means that this change will effect how all plugins are configured and overridden.\nThis is a breaking change for code overriding configs in such plugins, but luckily it's easy to fix."),Object(o.b)("p",null,"As an example, a Sweeper plugin override will change as follows:"),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:'script title="Hydra 0.11"',script:!0,title:'"Hydra','0.11"':!0}),"hydra.sweeper.params.max_batch_size=10\n"))),Object(o.b)("div",{className:"col  col--6"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:'script title="Hydra 1.0"',script:!0,title:'"Hydra','1.0"':!0}),"hydra.sweeper.max_batch_size=10\n")))))}p.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,g=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?r.a.createElement(g,c(c({ref:t},l),{},{components:n})):r.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);