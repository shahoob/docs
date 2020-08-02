(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),i=t(9),a=(t(0),t(155)),s={id:"manifests",title:"Manifests"},o={id:"manifests",isDocsHomePage:!1,title:"Manifests",description:"Overview",source:"@site/docs/manifests.md",permalink:"/docs/manifests",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/manifests.md",sidebar:"packageApi",previous:{title:"Stats",permalink:"/docs/stats"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Routes",id:"routes",children:[{value:"Single manifest",id:"single-manifest",children:[]}]}],l={rightToc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Fetching raw manifest data from the API is covered by this section. While not as much utility is provides for manifest routes compared to packages, such as search, these endpoints provide all of the data that we acquire from GitHub in an unmodified state. This can be quite useful if, for example, some data which we leave out of our package schema is required for your application. If this is the case, we recommend searching through packages and using the retuened ids to request additional data from the routes below."),Object(a.b)("h2",{id:"schema"},"Schema"),Object(a.b)("p",null,"The full manifest schema is shown below. The schema ",Object(a.b)("em",{parentName:"p"},"should")," follow the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/package-manager/package/manifest"}),"standards set out by Microsoft"),"."),Object(a.b)("p",null,"Manifest"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"  Id: string;\n  Name: string;\n  AppMoniker?: string;\n  Version: string;\n  Publisher: string;\n  Channel?: string;\n  Author?: string;\n  License?: string;\n  LicenseUrl?: string;\n  MinOSVersion?: string;\n  Description?: string;\n  Homepage?: string;\n  Tags?: string;\n  FileExtensions?: string;\n  Protocols?: string;\n  Commands?: string;\n  InstallerType?: string;\n  Switches?: {\n    Custom?: string;\n    Silent?: string;\n    SilentWithProgress?: string;\n    Interactive?: string;\n    Language?: string;\n  };\n  Log?: string;\n  InstallLocation?: string;\n  Installers: [\n    {\n      Arch: string;\n      Url: string;\n      Sha256: string;\n      SignatureSha256?: string;\n      Language?: string;\n      InstallerType?: string;\n      Scope?: string;\n      SystemAppId?: string;\n      Switches?: {\n        Language?: string;\n        Custom?: string;\n      };\n    }\n  ];\n  Localization?: [\n    {\n      Language: string;\n      Description?: string;\n      Homepage?: string;\n      LicenseUrl?: string;\n    }\n  ];\n")),Object(a.b)("h2",{id:"routes"},"Routes"),Object(a.b)("p",null,"Manifest related routes are shown below:"),Object(a.b)("h3",{id:"single-manifest"},"Single manifest"),Object(a.b)("p",null,"This route allows for fetching a single manifest given an id and version."),Object(a.b)("h4",{id:"url"},"Url"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/v2/manifests/:id/:version")),Object(a.b)("h4",{id:"successful-response"},"Successful response"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Code: 200\nBody:\n  Manifest: Manifest\n")),Object(a.b)("h4",{id:"no-data-response"},"No data response"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Code: 404\n")))}u.isMDXComponent=!0},155:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return t?i.a.createElement(g,o(o({ref:n},l),{},{components:t})):i.a.createElement(g,o({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);