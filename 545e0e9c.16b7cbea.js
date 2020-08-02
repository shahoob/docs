(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),c=(n(0),n(155)),i={id:"packages",title:"Packages"},o={id:"packages",isDocsHomePage:!1,title:"Packages",description:"Overview",source:"@site/docs/packages.md",permalink:"/docs/packages",editUrl:"https://github.com/winget-run/docs/tree/master/docs/packages.md",sidebar:"packageApi",previous:{title:"Ratelimiting",permalink:"/docs/ratelimiting"},next:{title:"Search",permalink:"/docs/search"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Schema",id:"schema",children:[{value:"Non-manifest fields",id:"non-manifest-fields",children:[]}]},{value:"Routes",id:"routes",children:[{value:"Publisher packages",id:"publisher-packages",children:[]},{value:"Single package",id:"single-package",children:[]},{value:"Featured packages",id:"featured-packages",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,"Routes prefixed with /package relate to fetching package data. Packages are cut-down versions of manifests with extra data used by ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://winget.run"}),"winget.run"),". This section of the docs will discuss basic package routes with the 'advanced' ones being covered under 'search'."),Object(c.b)("h2",{id:"schema"},"Schema"),Object(c.b)("p",null,"Below is the package schema in Typescript format:"),Object(c.b)("p",null,"Package;"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Id: string;\n\nVersions: string[];\nLatest: {\n  Name: string;\n  Publisher: string;\n  Tags: string[];\n  Description?: string;\n  Homepage?: string;\n  License?: string;\n  LicenseUrl?: string;\n};\n\nFeatured: boolean;\nIconUrl?: string;\nBanner?: string;\nLogo?: string;\n\nUpdatedAt: Date;\nCreatedAt: Date;\n")),Object(c.b)("h3",{id:"non-manifest-fields"},"Non-manifest fields"),Object(c.b)("p",null,"Multiple non-manifest fields exist on the package model. These mainly determine if and how a package is displayed on the homepage of ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://winget.run"}),"winget.run"),";"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Featured"),Object(c.b)("li",{parentName:"ul"},"IconUrl (image url)"),Object(c.b)("li",{parentName:"ul"},"Banner (image url)"),Object(c.b)("li",{parentName:"ul"},"Logo (image url)")),Object(c.b)("h2",{id:"routes"},"Routes"),Object(c.b)("p",null,"Package related routes are outlined below:"),Object(c.b)("h3",{id:"publisher-packages"},"Publisher packages"),Object(c.b)("p",null,"This route can be used to view all packages created by a single publisher."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"This route returns paginated results.")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Allowed sort fields: Latest.Name, Latest.Publisher, UpdatedAt.")),Object(c.b)("h4",{id:"url"},"Url"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"/v2/packages/:publisher")),Object(c.b)("h4",{id:"successful-response"},"Successful response"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Code: 200\nBody:\n  Packages: Package[]\n  Total: number\n")),Object(c.b)("h4",{id:"no-data-response"},"No data response"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Code: 200\nBody:\n  Packages: []\n  Total: 0\n")),Object(c.b)("h3",{id:"single-package"},"Single package"),Object(c.b)("p",null,"This route can be used to fetch info for a single package."),Object(c.b)("h4",{id:"url-1"},"Url"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"/v2/packages/:publisher/:packageName")),Object(c.b)("h4",{id:"successful-response-1"},"Successful response"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Code: 200\nBody:\n  Package: Package\n")),Object(c.b)("h4",{id:"no-data-response-1"},"No data response"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Code: 404\n")),Object(c.b)("h3",{id:"featured-packages"},"Featured packages"),Object(c.b)("p",null,"This route returns a non-paginated list of all packages marked as 'featured'. This list should not exceed a few packages."),Object(c.b)("h4",{id:"url-2"},"Url"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"/v2/featured")),Object(c.b)("h4",{id:"successful-response-2"},"Successful response"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Code: 200\nBody:\n  Packages: Package[]\n")),Object(c.b)("h4",{id:"no-data-response-2"},"No data response"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Code: 200\nBody:\n  Packages: []\n")))}p.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,g=b["".concat(i,".").concat(d)]||b[d]||u[d]||c;return n?r.a.createElement(g,o(o({ref:t},l),{},{components:n})):r.a.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);